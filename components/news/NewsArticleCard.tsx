"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { formatNewsDate, type NewsArticle } from "@/lib/news";
import { encodeNewsTag } from "@/lib/news-tags";
import NewsThumbnail from "@/components/news/NewsThumbnail";
import { useDark } from "@/components/ThemeProvider";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const FONT = '"Plus Jakarta Sans", sans-serif';

/** Align with CaseStudyCard on SuccessStoriesPage */
const CARD_TEXT_GAP = "14px";
const CARD_TAG_GAP = "8px";
const COLOR_TITLE = { light: "#011e5b", dark: "#90c0f0" } as const;
const COLOR_MUTED = { light: "#7c7c7c", dark: "#9a9a9a" } as const;
const COLOR_TAG_BORDER = { light: "#b1b1b1", dark: "rgba(255, 255, 255, 0.25)" } as const;

/** Listing card copy limits — overflow truncates with ellipsis */
const TITLE_MAX_LINES = 2;
const DESCRIPTION_MAX_LINES = 2;

function lineClampStyle(maxLines: number): CSSProperties {
  return {
    display: "-webkit-box",
    WebkitLineClamp: maxLines,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
}

type Props = {
  article: NewsArticle;
  locale: string;
};

function NewsCardTag({
  tag,
  locale,
  isDark,
}: {
  tag: string;
  locale: string;
  isDark: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const color = hovered
    ? isDark
      ? COLOR_TITLE.dark
      : "#015ac6"
    : isDark
      ? COLOR_MUTED.dark
      : COLOR_MUTED.light;

  const borderColor = hovered
    ? isDark
      ? "rgba(108, 184, 255, 0.65)"
      : "#015ac6"
    : isDark
      ? COLOR_TAG_BORDER.dark
      : COLOR_TAG_BORDER.light;

  return (
    <Link
      href={`/${locale}/news?tag=${encodeNewsTag(tag)}`}
      className="bw-news-card-tag"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${borderColor}`,
        borderRadius: "30px",
        padding: "4px 12px",
        fontFamily: FONT,
        fontWeight: 500,
        fontSize: "var(--fs-caption)",
        color,
        lineHeight: 1.35,
        whiteSpace: "nowrap",
        textDecoration: "none",
        position: "relative",
        zIndex: 2,
        transition: `color 150ms ease, border-color 150ms ease`,
      }}
    >
      {tag}
    </Link>
  );
}

export default function NewsArticleCard({ article, locale }: Props) {
  const { isDark } = useDark();
  const { isMobile } = useBreakpoint();
  const isZh = locale === "zh";
  const localeCopy = isZh ? article.zh : article.en;
  const title = localeCopy.title;
  const description = localeCopy.description;

  const titleColor = isDark ? COLOR_TITLE.dark : COLOR_TITLE.light;
  const mutedColor = isDark ? COLOR_MUTED.dark : COLOR_MUTED.light;

  return (
    <article
      style={{
        position: "relative",
        display: "block",
        width: "100%",
        color: "inherit",
      }}
    >
      <Link
        href={`/${locale}/news/${article.slug}`}
        aria-label={title}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          borderRadius: "12px",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "24px" : "36px",
          alignItems: "flex-start",
          width: "100%",
          position: "relative",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <NewsThumbnail coverSrc={article.coverSrc} alt={title} borderRadius="12px" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: CARD_TEXT_GAP,
            flex: 1,
            minWidth: 0,
            paddingTop: isMobile ? 0 : "2px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: FONT,
              fontWeight: 400,
              fontSize: "var(--fs-body-sm)",
              lineHeight: 1.4,
              letterSpacing: "-0.132px",
              color: mutedColor,
            }}
          >
            {formatNewsDate(article.publishedAt, locale)}
          </p>

          <p
            style={{
              margin: 0,
              fontFamily: FONT,
              fontWeight: 600,
              fontSize: "var(--fs-heading-md)",
              lineHeight: 1.2,
              letterSpacing: "-0.264px",
              color: titleColor,
              ...lineClampStyle(TITLE_MAX_LINES),
            }}
            title={title}
          >
            {title}
          </p>

          {description ? (
            <p
              style={{
                margin: 0,
                fontFamily: FONT,
                fontWeight: 400,
                fontSize: "var(--fs-body-sm)",
                lineHeight: 1.55,
                letterSpacing: "-0.154px",
                color: mutedColor,
                textWrap: "pretty",
                ...lineClampStyle(DESCRIPTION_MAX_LINES),
              }}
              title={description}
            >
              {description}
            </p>
          ) : null}

          <div
            style={{
              display: "flex",
              gap: CARD_TAG_GAP,
              flexWrap: "wrap",
              pointerEvents: "auto",
            }}
          >
            {article.tags.map((tag) => (
              <NewsCardTag key={tag} tag={tag} locale={locale} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
