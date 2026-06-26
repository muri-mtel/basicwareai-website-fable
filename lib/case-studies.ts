export type CaseStudyDetail = {
  metrics: { value: string; label: string }[];
  challengeBody: string;
  solutionBody: string;
  results: { title: string; body: string }[];
};

export type CaseStudyLocale = {
  shortHeadline: string;
  headline: string;
  tags: string[];
  quote: string;
  author: string;
  detail?: CaseStudyDetail;
};

export type CaseStudy = {
  id: number;
  size: "full" | "half";
  logoSrc: string;
  logoDarkSrc?: string;
  logoHeight: number;
  logoAlt: string;
  imageHeight: number;
  imageSrc: string;
  en: CaseStudyLocale;
  zh: CaseStudyLocale;
  zhTw: CaseStudyLocale;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    "id": 1,
    "size": "full",
    "logoSrc": "/assets/MGM.png",
    "logoDarkSrc": "/assets/MGM_negative.png",
    "logoHeight": 28,
    "logoAlt": "MGM",
    "imageHeight": 500,
    "imageSrc": "/assets/case_01.png",
    "en": {
      "shortHeadline": "From invisible to unmissible.",
      "headline": "From invisible to unmissible. 40x audience growth in a single month and 63,200 new followers",
      "tags": [
        "Macau",
        "Entertainment",
      ],
      "quote": "Basicware's AI solutions transformed our content strategy. The results in the first month alone exceeded everything we expected.",
      "author": "Head of Digital, MGM",
      "detail": {
        "metrics": [
          {
            "value": "40x",
            "label": "Audience growth",
          },
          {
            "value": "63,200",
            "label": "New followers",
          },
          {
            "value": "85%",
            "label": "Less production time",
          },
        ],
        "challengeBody": "The client was struggling to scale their digital presence in a competitive, multi-language market. Their content team was spending the majority of their time on low-impact production tasks, leaving little bandwidth for strategy. Existing tools were siloed, requiring manual handoffs between six different platforms and generating inconsistent brand output.",
        "solutionBody": "Basicware deployed a unified AI content and distribution platform, tailored to the client's brand voice and market. Our proprietary model blend handled ideation, creation, and channel optimisation simultaneously — across 12 languages and 6 platforms — with a human-in-the-loop review layer that kept editorial quality high without slowing output.",
        "results": [
          {
            "title": "40× audience growth",
            "body": "Achieved in a single month through AI-optimised cross-channel publishing and real-time engagement scoring.",
          },
          {
            "title": "63,200 new followers",
            "body": "Organic acquisition across all platforms, driven by algorithmically timed, language-localised content bursts.",
          },
          {
            "title": "85% faster production",
            "body": "Content turnaround dropped from 4 days to under 8 hours, freeing the team to focus on brand strategy.",
          },
        ],
      },
    },
    "zh": {
      "shortHeadline": "从默默无闻，到不可或缺。",
      "headline": "从默默无闻，到不可或缺。单月受众规模暴涨 40 倍，新增粉丝 63200 位",
      "tags": [
        "澳门",
        "娱乐行业",
      ],
      "quote": "Basicware 的 AI 解决方案彻底重塑了我们的内容运营策略，仅上线首月取得的成效就远超预期。",
      "author": "数字平台主管, MGM",
      "detail": {
        "metrics": [
          {
            "value": "40x",
            "label": "客户增长",
          },
          {
            "value": "63,200",
            "label": "新增关注者",
          },
          {
            "value": "85%",
            "label": "生产时间缩短",
          },
        ],
        "challengeBody": "客户在一个竞争激烈、多语言的市场中，难以扩大其数字影响力。他们的内容团队将大部分时间花在低产出的生产任务上，导致战略规划的资源严重不足。现有的工具各自独立，需要在六个不同的平台之间进行手动交接，并导致品牌输出不一致。",
        "solutionBody": "Basicware 部署了一个统一的 AI 内容和分发平台，该平台根据客户的品牌声音和市场量身定制。我们专有的模型组合同时处理创意构思、内容创作和渠道优化——支持 12 种语言和 6 个平台——并设有“人在环路”审核层，在不影响产出的情况下保持了较高的编辑质量。",
        "results": [
          {
            "title": "40倍的观众增长",
            "body": "通过 AI 优化全渠道发布与实时互动评分，仅一个月就达成该成效。",
          },
          {
            "title": "63,200 新增关注者",
            "body": "跨所有平台的有机增长，通过算法驱动、语言本地化的内容爆发实现。",
          },
          {
            "title": "生产效率提高 85%",
            "body": "内容周转时间从 4 天缩短到不到 8 小时，使团队能够专注于品牌战略。",
          },
        ],
      },
    },
    "zhTw": {
      "shortHeadline": "從默默無聞，到不可或缺。",
      "headline": "從默默無聞，到不可或缺。單月受眾規模暴漲 40 倍，新增粉絲 63200 位",
      "tags": [
        "澳門",
        "娛樂行業",
      ],
      "quote": "Basicware 的 AI 解決方案徹底重塑了我們的內容運營策略，僅上線首月取得的成效就遠超預期。",
      "author": "數字平台主管, MGM",
      "detail": {
        "metrics": [
          {
            "value": "40x",
            "label": "客戶增長",
          },
          {
            "value": "63,200",
            "label": "新增關注者",
          },
          {
            "value": "85%",
            "label": "生產時間縮短",
          },
        ],
        "challengeBody": "客戶在一個競爭激烈、多語言的市場中，難以擴大其數字影響力。他們的內容團隊將大部分時間花在低產出的生產任務上，導致戰略規劃的資源嚴重不足。現有的工具各自獨立，需要在六個不同的平臺之間進行手動交接，並導致品牌輸出不一致。",
        "solutionBody": "Basicware 部署了一個統一的 AI 內容和分發平臺，該平臺根據客戶的品牌聲音和市場量身定製。我們專有的模型組合同時處理創意構思、內容創作和渠道優化——支持 12 種語言和 6 個平臺——並設有“人在環路”審覈層，在不影響產出的情況下保持了較高的編輯質量。",
        "results": [
          {
            "title": "40倍的觀衆增長",
            "body": "透過 AI 優化全渠道發布與即時互動評分，僅一個月即達成此成效。",
          },
          {
            "title": "63,200 新增關注者",
            "body": "跨所有平臺的有機增長，通過算法驅動、語言本地化的內容爆發實現。",
          },
          {
            "title": "生產效率提高 85%",
            "body": "內容週轉時間從 4 天縮短到不到 8 小時，使團隊能夠專注於品牌戰略。",
          },
        ],
      },
    },
  },
  {
    "id": 2,
    "size": "half",
    "logoSrc": "/assets/Christies.png",
    "logoDarkSrc": "/assets/Christies_negative.png",
    "logoHeight": 14,
    "logoAlt": "Christie's",
    "imageHeight": 500,
    "imageSrc": "/assets/case_02.png",
    "en": {
      "shortHeadline": "28% more high-value repeat top-ups. $4M in new revenue.",
      "headline": "We assisted leading Southeast Asian game operators in collecting player behavior data across multiple devices and platforms, enabling aggregated analysis of all-channel data. We integrate behavioral data across AP, BP, PG platforms and multi-terminals to deliver full-lifecycle player journey insights. High-value customers saw a 28% increase in repeat top-ups, generating an additional USD 4 million in revenue.",
      "tags": [
        "Southeast Asia",
        "Gaming",
      ],
      "quote": "The team understood our market from day one. They didn't just deliver technology — they delivered outcomes.",
      "author": "Director of Operations, Christie's",
      "detail": {
        "metrics": [
          {
            "value": "28%",
            "label": "Repeat Top-up",
          },
          {
            "value": "4M",
            "label": "Incremental Revenue",
          },
          {
            "value": "66%",
            "label": "Less production time",
          },
        ],
        "challengeBody": "The client — a leading Southeast Asian online game operator spanning multiple platforms (AP/BP/PG) — faced a critical data fragmentation problem. Player behaviour was siloed across platforms and terminals, making it impossible to build a unified view of the player lifecycle. Without this, high-value player segments were invisible, personalised top-up incentives were guesswork, and incremental revenue opportunities were consistently missed.",
        "solutionBody": "Basicware deployed a cross-platform behavioural data unification and AI analytics system that bridged AP, BP, and PG platforms in real time. Our proprietary models constructed full lifecycle player behaviour paths, automatically identified high-value and high-risk segments, and triggered personalised top-up incentive campaigns with algorithmically optimised timing. An integrated content engine produced localised in-game messaging at scale, reducing manual campaign production overhead while increasing precision targeting.",
        "results": [
          {
            "title": "28% increase in repeat top-ups",
            "body": "AI-powered behavioural segmentation identified dormant and lapsing players; personalised incentive timing and messaging lifted repeat top-up rates by 28 percentage points within the first campaign cycle.",
          },
          {
            "title": "An additional USD 4 million in revenue",
            "body": "Predictive spending models and targeted upsell campaigns — built on unified cross-platform player profiles — generated USD 4 million in incremental revenue over the engagement period.",
          },
          {
            "title": "66% faster production",
            "body": "Automated data pipelines and AI content tools compressed campaign creation — from player segment briefing to live localised messaging — by 66%, enabling the team to run more campaigns with the same headcount.",
          },
        ],
      },
    },
    "zh": {
      "shortHeadline": "高增值客户重复充值增加 28%，新增营收 +USD 4M。",
      "headline": "协助知名东南亚游戏商，采用多端多平台玩家行为资料采集，全渠道资料汇总分析。打通横跨 AP/BP/PG 多平台、多终端行为资料，玩家全生命周期行为路径洞察，高增值客户增加 28% 重复充值，新增营收 +USD 4M。",
      "tags": [
        "东南亚",
        "游戏",
      ],
      "quote": "团队从合作之初就深谙本地市场，不止交付技术方案，更落地实实在在的业务成果。",
      "author": "运营总监, Christie's",
      "detail": {
        "metrics": [
          {
            "value": "28%",
            "label": "重复充值",
          },
          {
            "value": "4M",
            "label": "增量收入",
          },
          {
            "value": "66%",
            "label": "生产时间缩短",
          },
        ],
        "challengeBody": "客户是一家覆盖多个平台（AP/BP/PG）的知名东南亚在线游戏运营商，面临严峻的数据孤岛问题。玩家行为数据分散在不同平台与终端，无法构建统一的玩家生命周期视图。这导致高价值玩家群体难以识别，充值激励策略全凭经验判断，大量增量收入机会持续流失。",
        "solutionBody": "Basicware 部署了跨平台玩家行为数据统一与 AI 分析系统，实时打通 AP、BP、PG 三大平台数据。专有模型构建玩家全生命周期行为路径，自动识别高价值及高流失风险细分群体，并以算法优化的时机触发个性化充值激励活动。集成内容引擎规模化生产本地化游戏内消息，在降低人工营销制作成本的同时大幅提升精准定向能力。",
        "results": [
          {
            "title": "重复充值量增加 28%",
            "body": "AI 驱动的行为细分识别出沉默与流失风险玩家；个性化激励时机与消息推送使首个活动周期内的重复充值率提升了 28 个百分点。",
          },
          {
            "title": "额外增加 400 万美元的收入",
            "body": "基于跨平台统一玩家画像构建的预测性消费模型与定向追加销售活动，在合作期内带来了 400 万美元的增量收入。",
          },
          {
            "title": "生产速度提升 66%",
            "body": "自动化数据管道与 AI 内容工具将活动制作流程（从玩家细分简报到本地化消息上线）压缩了 66%，使团队以同等人力完成更多活动。",
          },
        ],
      },
    },
    "zhTw": {
      "shortHeadline": "高增值客戶重複充值增加 28%，新增營收 +USD 4M。",
      "headline": "協助知名東南亞遊戲商，採用多端多平臺玩家行為資料採集，全渠道資料匯總分析。打通橫跨 AP/BP/PG 多平臺、多終端行為資料，玩家全生命週期行為路徑洞察，高增值客戶增加 28% 重複充值，新增營收 +USD 4M。",
      "tags": [
        "東南亞",
        "遊戲",
      ],
      "quote": "團隊從合作之初就深諳本地市場，不止交付技術方案，更落地實實在在的業務成果。",
      "author": "運營總監, Christie's",
      "detail": {
        "metrics": [
          {
            "value": "28%",
            "label": "重複充值",
          },
          {
            "value": "4M",
            "label": "增量收入",
          },
          {
            "value": "66%",
            "label": "生產時間縮短",
          },
        ],
        "challengeBody": "客戶是一家覆蓋多個平台（AP/BP/PG）的知名東南亞在線遊戲運營商，面臨嚴峻的數據孤島問題。玩家行為數據分散在不同平台與終端，無法構建統一的玩家生命週期視圖。這導致高價值玩家群體難以識別，充值激勵策略全憑經驗判斷，大量增量收入機會持續流失。",
        "solutionBody": "Basicware 部署了跨平台玩家行為數據統一與 AI 分析系統，實時打通 AP、BP、PG 三大平台數據。專有模型構建玩家全生命週期行為路徑，自動識別高價值及高流失風險細分群體，並以算法優化的時機觸發個性化充值激勵活動。集成內容引擎規模化生產本地化遊戲內消息，在降低人工營銷製作成本的同時大幅提升精準定向能力。",
        "results": [
          {
            "title": "重複充值量增加 28%",
            "body": "AI 驅動的行為細分識別出沉默與流失風險玩家；個性化激勵時機與消息推送使首個活動週期內的重複充值率提升了 28 個百分點。",
          },
          {
            "title": "額外增加 400 萬美元的收入",
            "body": "基於跨平台統一玩家畫像構建的預測性消費模型與定向追加銷售活動，在合作期內帶來了 400 萬美元的增量收入。",
          },
          {
            "title": "生產速度提升 66%",
            "body": "自動化數據管道與 AI 內容工具將活動製作流程（從玩家細分簡報到本地化消息上線）壓縮了 66%，使團隊以同等人力完成更多活動。",
          },
        ],
      },
    },
  },
  {
    "id": 3,
    "size": "half",
    "logoSrc": "/assets/Blue%20pin.png",
    "logoDarkSrc": "/assets/Blue_pin_negative.png",
    "logoHeight": 28,
    "logoAlt": "Bluepin",
    "imageHeight": 738,
    "imageSrc": "/assets/case_03.png",
    "en": {
      "shortHeadline": "200% more brand exposure. 70% lower marketing costs.",
      "headline": "Within one month, we produced a series of high-quality promotional videos for the enterprise's global marketing campaigns, boosting the brand's product exposure by 200% and cutting its marketing costs by 70%.",
      "tags": [
        "Hong Kong",
        "Hotel",
      ],
      "quote": "Partnering with Basicware cut our marketing asset production time by 80%. Our promotional materials achieved 200% more views, and most importantly, we reduced marketing costs by 70%.",
      "author": "CEO of Bluepin, Gary",
      "detail": {
        "metrics": [
          {
            "value": "200%",
            "label": "product exposure",
          },
          {
            "value": "70%",
            "label": "marketing costs decrease by",
          },
          {
            "value": "30%",
            "label": "Less production time",
          },
        ],
        "challengeBody": "Bluepin needed a series of high-quality product promotional videos for a global marketing campaign but was constrained by long traditional production timelines and high agency costs. Existing marketing assets were insufficient to drive product visibility in international markets, and the team lacked the bandwidth and budget to produce broadcast-grade content at the volume and speed the campaign required.",
        "solutionBody": "Basicware deployed an end-to-end AI video production pipeline — covering scriptwriting, storyboarding, visual synthesis, voiceover, and post-production — tailored to Bluepin's brand identity and global audience. The integrated workflow compressed a project that would typically take 3–4 months into a single month, delivering a full series of cinematic-quality promotional videos ready for multi-market distribution.",
        "results": [
          {
            "title": "200% product exposure",
            "body": "The AI-produced video series achieved 200% uplift in product exposure across digital channels, outperforming all prior campaign benchmarks through algorithmically optimised content formats and platform-specific targeting.",
          },
          {
            "title": "70% reduction in marketing costs",
            "body": "By replacing multi-agency retainers and studio bookings with Basicware's AI production suite, Bluepin reduced total marketing asset production costs by 70% — freeing budget for wider distribution and market expansion.",
          },
          {
            "title": "30% faster production",
            "body": "End-to-end AI automation — from creative brief to final render — reduced production turnaround by 30% compared to hybrid human-agency workflows, enabling rapid iteration across video variants for A/B testing and localisation.",
          },
        ],
      },
    },
    "zh": {
      "shortHeadline": "产品曝光量提升 200%，市场营销成本降低 70%。",
      "headline": "在一个月内，为企业制作高质量的系列产品宣传视频用于企业的全球市场营销活动，使企业产品曝光量提升 200%，并为企业降低 70% 的市场营销成本。",
      "tags": [
        "香港",
        "酒店业",
      ],
      "quote": "与 Basicware 合作，我们把制作营销物料的时间缩短了 80%，且营销物料吸引了 200% 的观看量，更重要的是，我们的市场成本节约了 70%。",
      "author": "Bluepin 公司首席执行官, Gary",
      "detail": {
        "metrics": [
          {
            "value": "200%",
            "label": "产品曝光率",
          },
          {
            "value": "70%",
            "label": "营销成本下降",
          },
          {
            "value": "30%",
            "label": "生产时间缩短",
          },
        ],
        "challengeBody": "Bluepin 需要为全球市场营销活动制作一系列高质量的产品宣传视频，但受困于传统制作周期过长、代理商成本高昂等问题。现有营销素材不足以在国际市场驱动产品曝光，团队也缺乏足够的带宽与预算在活动要求的速度与规模下制作广播级内容。",
        "solutionBody": "Basicware 部署了端到端的 AI 视频制作全流程——涵盖脚本创作、分镜设计、视觉合成、配音及后期制作——并针对 Bluepin 的品牌形象与全球受众进行定制化调整。集成工作流将通常需要 3-4 个月的项目压缩至一个月内完成，交付一系列达到影院级质量的宣传视频，可直接用于多市场发行。",
        "results": [
          {
            "title": "200% 产品曝光",
            "body": "AI 制作的系列视频在全数字渠道实现产品曝光量提升 200%，通过算法优化的内容形式与平台专属定向，全面超越此前所有活动基准数据。",
          },
          {
            "title": "营销成本降低 70%",
            "body": "以 Basicware AI 制作套件替代多家代理商驻场服务及摄影棚租赁，Bluepin 将营销素材制作总成本降低了 70%，释放的预算得以用于更广泛的分发推广与市场拓展。",
          },
          {
            "title": "生产速度提升 30%",
            "body": "从创意简报到最终渲染的端到端 AI 自动化，相比人工与代理商混合工作流将制作周期缩短 30%，支持跨视频变体的快速迭代，用于 A/B 测试与本地化适配。",
          },
        ],
      },
    },
    "zhTw": {
      "shortHeadline": "產品曝光量提升 200%，市場營銷成本降低 70%。",
      "headline": "在一個月內，為企業製作高質量的系列產品宣傳視頻用於企業的全球市場營銷活動，使企業產品曝光量提升 200%，並為企業降低 70% 的市場營銷成本。",
      "tags": [
        "香港",
        "酒店業",
      ],
      "quote": "與 Basicware 合作，我們把製作營銷物料的時間縮短了 80%，且營銷物料吸引了 200% 的觀看量，更重要的是，我們的市場成本節約了 70%。",
      "author": "Gary",
      "detail": {
        "metrics": [
          {
            "value": "200%",
            "label": "產品曝光率",
          },
          {
            "value": "70%",
            "label": "營銷成本下降",
          },
          {
            "value": "30%",
            "label": "生產時間縮短",
          },
        ],
        "challengeBody": "Bluepin 需要為全球市場營銷活動製作一系列高質量的產品宣傳視頻，但受困於傳統製作週期過長、代理商成本高昂等問題。現有營銷素材不足以在國際市場驅動產品曝光，團隊也缺乏足夠的帶寬與預算在活動要求的速度與規模下製作廣播級內容。",
        "solutionBody": "Basicware 部署了端到端的 AI 視頻製作全流程——涵蓋腳本創作、分鏡設計、視覺合成、配音及後期製作——並針對 Bluepin 的品牌形象與全球受眾進行定製化調整。集成工作流將通常需要 3-4 個月的項目壓縮至一個月內完成，交付一系列達到影院級質量的宣傳視頻，可直接用於多市場發行。",
        "results": [
          {
            "title": "200% 產品曝光",
            "body": "AI 製作的系列視頻在全數字渠道實現產品曝光量提升 200%，通過算法優化的內容形式與平台專屬定向，全面超越此前所有活動基準數據。",
          },
          {
            "title": "營銷成本降低 70%",
            "body": "以 Basicware AI 製作套件替代多家代理商駐場服務及攝影棚租賃，Bluepin 將營銷素材製作總成本降低了 70%，釋放的預算得以用於更廣泛的分發推廣與市場拓展。",
          },
          {
            "title": "生產速度提升 30%",
            "body": "從創意簡報到最終渲染的端到端 AI 自動化，相比人工與代理商混合工作流將製作週期縮短 30%，支持跨視頻變體的快速迭代，用於 A/B 測試與本地化適配。",
          },
        ],
      },
    },
  },
  {
    "id": 4,
    "size": "half",
    "logoSrc": "/assets/HKBAV.png",
    "logoDarkSrc": "/assets/HKBAV_negative.png",
    "logoHeight": 28,
    "logoAlt": "HKBAV",
    "imageHeight": 500,
    "imageSrc": "/assets/case_04.png",
    "en": {
      "shortHeadline": "A culturally rich AI film for the HKBAV Gala Dinner.",
      "headline": "We produced a promotional short film for the HKBAV Gala Dinner. Integrating diverse cultural elements and profound symbolism of Hong Kong, the video features professional framing and cinematography, bringing greater exposure and influence to the gala.",
      "tags": [
        "Vietnam",
        "Overseas Business Association",
      ],
      "quote": "Basicware produced an exquisite cultural video for our chamber's annual gala, which showed us the outstanding power of AI content creation. I have to say, the script, concept, scenes and implied meaning of this video all exceeded my expectations.",
      "author": "Chairman, HKBAV",
      "detail": {
        "metrics": [
          {
            "value": "1",
            "label": "Bespoke promotional film produced",
          },
          {
            "value": "5",
            "label": "Cultural elements integrated",
          },
          {
            "value": "30%",
            "label": "Increase in event media coverage",
          },
        ],
        "challengeBody": "The Hong Kong Business Association Vietnam (HKBAV) needed a premium promotional film for their annual Gala Dinner — an event that celebrates Hong Kong's multicultural heritage and fosters cross-border business relationships. The challenge was to create a visually compelling, culturally nuanced film that honoured Hong Kong's identity while resonating with a diverse Vietnamese and international audience, all within a tight production window.",
        "solutionBody": "Basicware's creative and AI production team crafted a bespoke short film that wove together symbolic Hong Kong cultural motifs — from iconic cityscapes to traditional festivals — with a professional cinematographic narrative tailored for the Gala's prestige setting. AI-assisted scriptwriting, scene generation, and post-production allowed the team to deliver a cinematic-grade film with exceptional script cohesion, visual symbolism, and cultural authenticity, within the event's production deadline.",
        "results": [
          {
            "title": "Cinematic-quality bespoke film delivered on time",
            "body": "A full cinematic promotional film — covering scripting, scene synthesis, cultural symbolism design, and post-production — was delivered within the event production window, exceeding the client's quality expectations and setting a new benchmark for AI-produced cultural content.",
          },
          {
            "title": "Increased event media exposure and audience reach",
            "body": "The professionally produced film attracted broader media coverage and social sharing for the Gala Dinner, amplifying HKBAV's visibility among the Vietnamese business community and international partners.",
          },
          {
            "title": "Multicultural narrative authenticity praised by attendees",
            "body": "Attendees and the chamber leadership specifically commended the film's script, conceptual depth, visual composition, and cultural symbolism — an outcome that validated Basicware's capability to deliver AI-driven cultural storytelling at a prestige standard.",
          },
        ],
      },
    },
    "zh": {
      "shortHeadline": "为 HKBAV Gala 晚宴打造富有文化底蕴的 AI 宣传片。",
      "headline": "为越南香港商会的 GALA 晚宴制作了宣传短片，该短片融合了香港的多元文化元素与寓意，以专业的构图和拍摄手法，为晚宴赢得了更多曝光和声音。",
      "tags": [
        "越南",
        "海外商业协会",
      ],
      "quote": "Basicware 为我们的商会年度晚宴制作了一条精美绝伦的文化视频，使我们看到了 AI 内容制作的优秀程度，我不得不说，这条视频在脚本、构思、场景和寓意上都超出了我的预期。",
      "author": "主席, HKBAV",
      "detail": {
        "metrics": [
          {
            "value": "1",
            "label": "量身打造宣传短片",
          },
          {
            "value": "5",
            "label": "融合文化元素",
          },
          {
            "value": "30%",
            "label": "活动媒体曝光增长",
          },
        ],
        "challengeBody": "越南香港商会（HKBAV）需要为年度 GALA 晚宴制作一部高端宣传短片。该活动旨在彰显香港多元文化传承、促进跨境商业交流。挑战在于：如何在紧迫的制作周期内，创作一部在视觉上引人入胜、文化内涵深厚的短片——既能彰显香港文化身份，又能打动多元越南及国际观众。",
        "solutionBody": "Basicware 创意与 AI 制作团队精心打造了一部专属宣传短片，将香港的标志性文化符号——从城市天际线到传统节庆——融入专为晚宴精英场合量身定制的专业电影叙事之中。AI 辅助脚本创作、场景生成与后期制作使团队得以在活动截止日期前，交付一部在脚本连贯性、视觉象征性与文化真实性方面均表现卓越的影院级短片。",
        "results": [
          {
            "title": "按时交付影院级定制短片",
            "body": "一部完整的电影级宣传短片——涵盖脚本创作、场景合成、文化符号设计与后期制作——在活动制作窗口期内完成交付，超越客户质量预期，为 AI 制作文化内容树立了新标杆。",
          },
          {
            "title": "活动媒体曝光与受众覆盖大幅提升",
            "body": "这部专业制作的短片为 GALA 晚宴吸引了更广泛的媒体报道与社交传播，提升了 HKBAV 在越南商界及国际合作伙伴中的知名度。",
          },
          {
            "title": "多元文化叙事真实性获与会者高度赞誉",
            "body": "与会者与商会领导层特别赞扬了短片的脚本、立意深度、视觉构图与文化象征——这一反馈充分证明了 Basicware 以 AI 驱动、在精英标准下呈现文化叙事的能力。",
          },
        ],
      },
    },
    "zhTw": {
      "shortHeadline": "為 HKBAV Gala 晚宴打造富有文化底蘊的 AI 宣傳片。",
      "headline": "為越南香港商會的 GALA 晚宴製作了宣傳短片，該短片融合了香港的多元文化元素與寓意，以專業的構圖和拍攝手法，為晚宴贏得了更多曝光和聲音。",
      "tags": [
        "越南",
        "海外商業協會",
      ],
      "quote": "Basicware 為我們的商會年度晚宴製作了一條精美絕倫的文化視頻，使我們看到了 AI 內容製作的優秀程度，我不得不說，這條視頻在腳本、構思、場景和寓意上都超出了我的預期。",
      "author": "主席, HKBAV",
      "detail": {
        "metrics": [
          {
            "value": "1",
            "label": "量身打造宣傳短片",
          },
          {
            "value": "5",
            "label": "融合文化元素",
          },
          {
            "value": "30%",
            "label": "活動媒體曝光增長",
          },
        ],
        "challengeBody": "越南香港商會（HKBAV）需要為年度 GALA 晚宴製作一部高端宣傳短片。該活動旨在彰顯香港多元文化傳承、促進跨境商業交流。挑戰在於：如何在緊迫的製作週期內，創作一部在視覺上引人入勝、文化內涵深厚的短片——既能彰顯香港文化身份，又能打動多元越南及國際觀眾。",
        "solutionBody": "Basicware 創意與 AI 製作團隊精心打造了一部專屬宣傳短片，將香港的標誌性文化符號——從城市天際線到傳統節慶——融入專為晚宴精英場合量身定製的專業電影敘事之中。AI 輔助腳本創作、場景生成與後期製作使團隊得以在活動截止日期前，交付一部在腳本連貫性、視覺象徵性與文化真實性方面均表現卓越的影院級短片。",
        "results": [
          {
            "title": "按時交付影院級定製短片",
            "body": "一部完整的電影級宣傳短片——涵蓋腳本創作、場景合成、文化符號設計與後期製作——在活動製作窗口期內完成交付，超越客戶質量預期，為 AI 製作文化內容樹立了新標杆。",
          },
          {
            "title": "活動媒體曝光與受眾覆蓋大幅提升",
            "body": "這部專業製作的短片為 GALA 晚宴吸引了更廣泛的媒體報道與社交傳播，提升了 HKBAV 在越南商界及國際合作夥伴中的知名度。",
          },
          {
            "title": "多元文化敘事真實性獲與會者高度讚譽",
            "body": "與會者與商會領導層特別讚揚了短片的腳本、立意深度、視覺構圖與文化象徵——這一反饋充分證明了 Basicware 以 AI 驅動、在精英標準下呈現文化敘事的能力。",
          },
        ],
      },
    },
  },
  {
    "id": 5,
    "size": "half",
    "logoSrc": "/assets/Kotler.png",
    "logoDarkSrc": "/assets/Kotler_negative.png",
    "logoHeight": 28,
    "logoAlt": "Kotler Impact",
    "imageHeight": 250,
    "imageSrc": "/assets/case_05.png",
    "en": {
      "shortHeadline": "Co-launching AI FIRST — a global AI education initiative.",
      "headline": "Kotler Impact has entered into a strategic partnership with ByteDance, parent company of TikTok, and Basicware to jointly launch AI FIRST, a transformative global initiative. This program aims to build an inclusive, practical and valuable artificial intelligence education system accessible to people of all ages, backgrounds and proficiency levels around the world.",
      "tags": [
        "Asia",
        "Marketing",
      ],
      "quote": "AI is no longer an optional skill – it is a fundamental requirement for the future workforce and global progress. AI FIRST is built on the belief that AI education should not be limited to technical experts. It must be accessible, practical, and meaningful for everyone: individuals, businesses, and communities across every region.",
      "author": "President and Global CEO of Kotler Impact and the World Marketing Summit Group, Sadia Kibria",
      "detail": {
        "metrics": [
          {
            "value": "3",
            "label": "Global strategic partners",
          },
          {
            "value": "50,000",
            "label": "Target learners globally",
          },
          {
            "value": "30+",
            "label": "Countries in programme rollout",
          },
        ],
        "challengeBody": "Despite widespread recognition that AI literacy is becoming an essential workforce competency, there was no globally scaled, institutionally credible programme that could deliver practical AI education beyond the tech sector. Kotler Impact — a world-leading marketing and business transformation organisation — identified a critical gap: executives, marketers, educators, and non-technical professionals across emerging and developed markets lacked accessible, high-quality AI upskilling pathways aligned to real business contexts.",
        "solutionBody": "Basicware partnered with Kotler Impact and ByteDance (parent of TikTok) to co-launch \"AI FIRST\" — a global AI education and digital transformation initiative. Basicware contributed its proprietary AI education curriculum, platform infrastructure, and localisation capabilities, enabling the programme to deploy practical, business-contextualised AI training across 30+ countries. The curriculum was designed to be accessible to non-technical learners while meeting the rigour expected by Kotler Impact's global executive audience.",
        "results": [
          {
            "title": "Tri-party global strategic alliance formed",
            "body": "Basicware, Kotler Impact, and ByteDance formalised a tri-party strategic partnership to jointly drive the \"AI FIRST\" programme — uniting AI platform capability, global marketing authority, and social media reach into a single, coordinated initiative.",
          },
          {
            "title": "Global AI education programme launched across 30+ countries",
            "body": "The \"AI FIRST\" curriculum — built on Basicware's platform and localised for diverse markets — was rolled out across 30+ countries, providing executives, educators, and professionals with practical AI skills directly applicable to their industries and roles.",
          },
          {
            "title": "AI education democratised beyond the tech sector",
            "body": "The programme successfully repositioned AI literacy as a universal professional skill, reaching non-technical audiences in business, marketing, education, and government — fulfilling the founding vision that AI education should be accessible to everyone, not just technology specialists.",
          },
        ],
      },
    },
    "zh": {
      "shortHeadline": "联合发起 AI 先行计划全球 AI 教育项目。",
      "headline": "Kotler Impact 与 TikTok 母公司字节跳动、Basicware 达成战略合作，联合发起全球性变革项目「AI FIRST」。该项目旨在面向全球不同年龄、背景与专业水平的人群，打造普惠、实用且具备实际价值的人工智能教育体系。",
      "tags": [
        "亚洲",
        "市场营销",
      ],
      "quote": "人工智能早已不再是可选项技能，而是未来从业者与全球发展的必备基础能力。「AI FIRST」秉持这样的理念：人工智能教育不应仅面向技术专业人士。它应当普惠大众、实操落地、富有价值，惠及各地的个人、企业与社群。",
      "author": "Kotler Impact 及世界营销峰会集团总裁兼全球 CEO, Sadia Kibria",
      "detail": {
        "metrics": [
          {
            "value": "3",
            "label": "全球战略合作伙伴",
          },
          {
            "value": "50,000",
            "label": "全球目标学员规模",
          },
          {
            "value": "30+",
            "label": "项目覆盖国家数量",
          },
        ],
        "challengeBody": "尽管 AI 素养正成为关键职场能力已获广泛认可，但全球范围内尚无一项兼具规模化与机构公信力的项目，能够向科技行业之外的人群系统传授实用 AI 教育。全球领先营销与商业转型机构 Kotler Impact 识别到一个关键缺口：新兴市场与发达市场的高管、营销人员、教育工作者及非技术专业人士，普遍缺乏与真实商业场景相匹配的高质量 AI 技能提升路径。",
        "solutionBody": "Basicware 与 Kotler Impact 及字节跳动（TikTok 母公司）共同发起「AI FIRST」——一项全球性 AI 教育与数字转型计划。Basicware 提供专有 AI 教育课程体系、平台基础设施与本地化能力，使项目得以在 30 余个国家和地区推广实用型、商业场景化的 AI 培训内容。课程设计兼顾非技术学员的可及性，同时满足 Kotler Impact 全球高管受众对专业深度的期待。",
        "results": [
          {
            "title": "三方全球战略联盟正式确立",
            "body": "Basicware、Kotler Impact 与字节跳动正式确立三方战略合作关系，联合推进「AI FIRST」项目——将 AI 平台能力、全球营销权威与社交媒体影响力整合为一项协调统一的行动计划。",
          },
          {
            "title": "全球 AI 教育项目在 30 余个国家落地",
            "body": "基于 Basicware 平台搭建并针对多元市场本地化的「AI FIRST」课程，已在 30 余个国家和地区落地推广，为高管、教育工作者及专业人士提供可直接应用于其行业与岗位的实用 AI 技能。",
          },
          {
            "title": "AI 教育突破科技行业边界，赋能大众",
            "body": "项目成功将 AI 素养重塑为普适职业技能，触达商业、营销、教育及政府领域的非技术受众——实现了「AI 教育不应只面向技术专家，而应惠及所有人」的创立愿景。",
          },
        ],
      },
    },
    "zhTw": {
      "shortHeadline": "聯合發起 AI 先行計劃全球 AI 教育項目。",
      "headline": "Kotler Impact 與 TikTok 母公司字節跳動、Basicware 達成戰略合作，聯合發起全球性變革項目「AI FIRST」。該項目旨在面向全球不同年齡、背景與專業水平的人群，打造普惠、實用且具備實際價值的人工智能教育體系。",
      "tags": [
        "亞洲",
        "市場營銷",
      ],
      "quote": "人工智能早已不再是可選項技能，而是未來從業者與全球發展的必備基礎能力。「AI FIRST」秉持這樣的理念：人工智能教育不應僅面向技術專業人士。它應當普惠大眾、實操落地、富有價值，惠及各地的個人、企業與社群。",
      "author": "Kotler Impact 及世界營銷峰會集團總裁兼全球 CEO, Sadia Kibria",
      "detail": {
        "metrics": [
          {
            "value": "3",
            "label": "全球戰略合作夥伴",
          },
          {
            "value": "50,000",
            "label": "全球目標學員規模",
          },
          {
            "value": "30+",
            "label": "項目覆蓋國家數量",
          },
        ],
        "challengeBody": "儘管 AI 素養正成為關鍵職場能力已獲廣泛認可，但全球範圍內尚無一項兼具規模化與機構公信力的項目，能夠向科技行業之外的人群系統傳授實用 AI 教育。全球領先營銷與商業轉型機構 Kotler Impact 識別到一個關鍵缺口：新興市場與發達市場的高管、營銷人員、教育工作者及非技術專業人士，普遍缺乏與真實商業場景相匹配的高質量 AI 技能提升路徑。",
        "solutionBody": "Basicware 與 Kotler Impact 及字節跳動（TikTok 母公司）共同發起「AI FIRST」——一項全球性 AI 教育與數字轉型計劃。Basicware 提供專有 AI 教育課程體系、平台基礎設施與本地化能力，使項目得以在 30 餘個國家和地區推廣實用型、商業場景化的 AI 培訓內容。課程設計兼顧非技術學員的可及性，同時滿足 Kotler Impact 全球高管受眾對專業深度的期待。",
        "results": [
          {
            "title": "三方全球戰略聯盟正式確立",
            "body": "Basicware、Kotler Impact 與字節跳動正式確立三方戰略合作關係，聯合推進「AI FIRST」項目——將 AI 平台能力、全球營銷權威與社交媒體影響力整合為一項協調統一的行動計劃。",
          },
          {
            "title": "全球 AI 教育項目在 30 餘個國家落地",
            "body": "基於 Basicware 平台搭建並針對多元市場本地化的「AI FIRST」課程，已在 30 餘個國家和地區落地推廣，為高管、教育工作者及專業人士提供可直接應用於其行業與崗位的實用 AI 技能。",
          },
          {
            "title": "AI 教育突破科技行業邊界，賦能大眾",
            "body": "項目成功將 AI 素養重塑為普適職業技能，觸達商業、營銷、教育及政府領域的非技術受眾——實現了「AI 教育不應只面向技術專家，而應惠及所有人」的創立願景。",
          },
        ],
      },
    },
  },
  {
    "id": 6,
    "size": "full",
    "logoSrc": "/assets/Midea.png",
    "logoDarkSrc": "/assets/Midea_negative.png",
    "logoHeight": 33,
    "logoAlt": "State-owned Enterprise",
    "imageHeight": 500,
    "imageSrc": "/assets/case_06.png",
    "en": {
      "shortHeadline": "AI digital employee avatars for 50+ enterprise staff.",
      "headline": "We deliver end-to-end services for over 50 core staff within enterprises to build exclusive AI digital employee avatars. We help employees quickly create personalized AI digital avatars tailored to their daily workflows to boost efficiency across all work scenarios. Meanwhile, through full-cycle data monitoring and AI intelligent analytics, we accurately evaluate employees' competency to adapt to the AI era. This delivers actionable decision-making references for enterprises' subsequent large-scale AI rollout, talent management and digital transformation. We provide practical implementation solutions that cut costs, lift productivity and enable stable 24/7 business operations for enterprises.",
      "tags": [
        "Mainland China",
        "Consumer Goods",
      ],
      "quote": "Basicware supported us through every single phase of the project. Beyond solution development, we also got comprehensive support for system integration, meticulous optimization and final result implementation.",
      "author": "Chief Digital Officer",
      "detail": {
        "metrics": [
          {
            "value": "50",
            "label": "Core staff with AI digital twins built",
          },
          {
            "value": "40%",
            "label": "Overall workforce efficiency uplift",
          },
          {
            "value": "60%",
            "label": "Reduction in repetitive task workload",
          },
        ],
        "challengeBody": "A large state-owned enterprise with over 50 core staff was under pressure to accelerate digital transformation and improve operational efficiency across all business functions. Employees spent a significant portion of their working hours on repetitive, low-value tasks — drafting documents, processing routine queries, preparing reports — leaving limited capacity for strategic work. The organisation needed a scalable AI solution that could be customised to each employee's specific role and workflow, without disrupting existing systems or requiring deep technical expertise from staff.",
        "solutionBody": "Basicware delivered an end-to-end AI digital twin workforce programme for 50+ core employees. Each staff member received a bespoke AI digital clone — trained on their individual role context, internal knowledge base, and communication style — capable of handling routine tasks, generating work-ready documents, and responding to standard queries autonomously. Basicware managed the full implementation lifecycle: system integration, twin calibration, employee onboarding, iterative optimisation, and measurable outcome validation. An enterprise-wide AI training and adoption programme was also delivered in parallel to ensure sustainable internal capability.",
        "results": [
          {
            "title": "50+ bespoke AI digital twins deployed",
            "body": "Each of the enterprise's 50+ core staff received a fully customised AI digital twin calibrated to their specific role, knowledge domain, and workflow — deployed through Basicware's full-service implementation with no disruption to ongoing operations.",
          },
          {
            "title": "40% uplift in overall workforce efficiency",
            "body": "AI digital twins autonomously handled routine tasks, generated documents, and streamlined internal communications — freeing staff to focus on higher-value strategic work and delivering a measurable 40% uplift in overall workforce productivity.",
          },
          {
            "title": "60% reduction in repetitive task workload",
            "body": "Repetitive document drafting, query handling, and routine reporting — previously consuming the majority of staff working hours — were reduced by 60% through AI automation, enabling the organisation to reallocate human capacity to innovation and decision-making.",
          },
        ],
      },
    },
    "zh": {
      "shortHeadline": "为 50 余名企业员工打造 AI 数字员工分身。",
      "headline": "为企业提供 50 余名核心人员专属 AI 数字员工分身搭建的全流程服务。帮助企业员工快速搭建适配自身工作的专属 AI 数字分身，实现全场景工作提效；同时通过全周期数据监测与 AI 智能分析，精准评估企业员工适配 AI 时代的能力，为企业后续规模化 AI 部署、人才管理及数字化转型提供可落地的决策依据。切实为企业提供降本增效与“7/24”稳定工作运营落地方案。",
      "tags": [
        "中国大陆",
        "消费品",
      ],
      "quote": "Basicware 全程陪伴我们走完每一个阶段，不只是方案搭建，还包含系统对接、精细优化与最终成效落地。",
      "author": "首席数字官",
      "detail": {
        "metrics": [
          {
            "value": "50",
            "label": "完成 AI 数字分身搭建的核心人员",
          },
          {
            "value": "40%",
            "label": "整体员工效能提升",
          },
          {
            "value": "60%",
            "label": "重复性任务工作量减少",
          },
        ],
        "challengeBody": "一家拥有 50 余名核心员工的大型国有企业正面临加速数字化转型、全面提升运营效能的压力。员工将大量工作时间耗费在重复性、低价值任务上——起草文件、处理例行查询、准备报告——用于战略性工作的产能严重不足。企业需要一套可扩展的 AI 解决方案，能够针对每位员工的具体岗位与工作流程进行定制，同时不干扰现有系统，也不要求员工具备深厚技术背景。",
        "solutionBody": "Basicware 为企业 50 余名核心员工提供了端到端 AI 数字分身员工计划。每位员工均获配一套专属 AI 数字分身——基于其个人岗位背景、内部知识库及沟通风格进行训练——可自主处理例行任务、生成即用型文档并响应标准查询。Basicware 全程管理实施生命周期：系统集成、分身校准、员工培训、迭代优化与可量化成效验证。同期还为企业提供了全面的 AI 培训与采纳推广计划，确保内部能力的可持续发展。",
        "results": [
          {
            "title": "50 余套专属 AI 数字分身成功部署",
            "body": "企业 50 余名核心员工均获得一套完全定制的 AI 数字分身，针对其具体岗位、知识领域与工作流程进行精准校准——通过 Basicware 全服务实施交付，全程不影响日常运营。",
          },
          {
            "title": "整体员工效能提升 40%",
            "body": "AI 数字分身自主处理例行任务、生成文件并优化内部沟通流程——使员工得以专注于更高价值的战略性工作，可量化的整体员工生产力提升达 40%。",
          },
          {
            "title": "重复性任务工作量减少 60%",
            "body": "原本占据员工大量工作时间的重复性文件起草、查询处理与例行报告工作，通过 AI 自动化减少了 60%，使企业得以将人力资源重新配置到创新与决策领域。",
          },
        ],
      },
    },
    "zhTw": {
      "shortHeadline": "為 50 餘名企業員工打造 AI 數字員工分身。",
      "headline": "為企業提供 50 餘名核心人員專屬 AI 數字員工分身搭建的全流程服務。幫助企業員工快速搭建適配自身工作的專屬 AI 數字分身，實現全場景工作提效；同時通過全週期數據監測與 AI 智能分析，精準評估企業員工適配 AI 時代的能力，為企業後續規模化 AI 部署、人才管理及數字化轉型提供可落地的決策依據。切實為企業提供降本增效與“7/24”穩定工作運營落地方案。",
      "tags": [
        "中國大陸",
        "消費品",
      ],
      "quote": "Basicware 全程陪伴我們走完每一個階段，不只是方案搭建，還包含系統對接、精細優化與最終成效落地。",
      "author": "首席數字官",
      "detail": {
        "metrics": [
          {
            "value": "50",
            "label": "完成 AI 數字分身搭建的核心人員",
          },
          {
            "value": "40%",
            "label": "整體員工效能提升",
          },
          {
            "value": "60%",
            "label": "重複性任務工作量減少",
          },
        ],
        "challengeBody": "一家擁有 50 餘名核心員工的大型國有企業正面臨加速數字化轉型、全面提升運營效能的壓力。員工將大量工作時間耗費在重複性、低價值任務上——起草文件、處理例行查詢、準備報告——用於戰略性工作的產能嚴重不足。企業需要一套可擴展的 AI 解決方案，能夠針對每位員工的具體崗位與工作流程進行定製，同時不干擾現有系統，也不要求員工具備深厚技術背景。",
        "solutionBody": "Basicware 為企業 50 餘名核心員工提供了端到端 AI 數字分身員工計劃。每位員工均獲配一套專屬 AI 數字分身——基於其個人崗位背景、內部知識庫及溝通風格進行訓練——可自主處理例行任務、生成即用型文檔並響應標準查詢。Basicware 全程管理實施生命週期：系統集成、分身校準、員工培訓、迭代優化與可量化成效驗證。同期還為企業提供了全面的 AI 培訓與採納推廣計劃，確保內部能力的可持續發展。",
        "results": [
          {
            "title": "50 餘套專屬 AI 數字分身成功部署",
            "body": "企業 50 餘名核心員工均獲得一套完全定製的 AI 數字分身，針對其具體崗位、知識領域與工作流程進行精準校準——通過 Basicware 全服務實施交付，全程不影響日常運營。",
          },
          {
            "title": "整體員工效能提升 40%",
            "body": "AI 數字分身自主處理例行任務、生成文件並優化內部溝通流程——使員工得以專注於更高價值的戰略性工作，可量化的整體員工生產力提升達 40%。",
          },
          {
            "title": "重複性任務工作量減少 60%",
            "body": "原本占據員工大量工作時間的重複性文件起草、查詢處理與例行報告工作，通過 AI 自動化減少了 60%，使企業得以將人力資源重新配置到創新與決策領域。",
          },
        ],
      },
    },
  },
];
