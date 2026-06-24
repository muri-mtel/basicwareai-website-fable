import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PressRelease3HK from "@/components/press-releases/PressRelease3HK";
import { getNewsArticle, getNewsArticleBreadcrumbLabel } from "@/lib/news";

export default async function PressRelease3HKRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const article = getNewsArticle("3hk-alibaba-basicware-alliance");
  const articleTitle = article
    ? getNewsArticleBreadcrumbLabel(article, locale)
    : undefined;

  return (
    <>
      <Navbar />
      <main>
        <PressRelease3HK locale={locale} articleTitle={articleTitle} />
      </main>
      <Footer />
    </>
  );
}
