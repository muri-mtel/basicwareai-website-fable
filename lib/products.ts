export type ProductLocale = {
  headline: string
  problemStatement: string
  howItWorks: string
  features: { title: string; description: string }[]
  whoFor: string[]
  cta: string
  faqs: { question: string; answer: string }[]
}

export type Product = {
  id: string
  name: string
  brandName: string
  heroImageSrc: string
  heroColor: string
  imageSrc: string
  en: ProductLocale
  zh: ProductLocale
  zhTw: ProductLocale
}

export const PRODUCTS: Product[] = [
  {
    "id": "token",
    "name": "Centralized Token Control",
    "brandName": "BasicRouter",
    "heroImageSrc": "/assets/2_practice_01.avif",
    "heroColor": "#0148ae",
    "imageSrc": "/assets/2_practice_01.avif",
    "en": {
      "headline": "Centralized Token Control",
      "problemStatement": "One gateway to the world's top AI models. Connect once, switch freely, scale without limits.",
      "howItWorks": "It aggregates mainstream domestic and overseas large language models including GPT, Gemini, Doubao, Qwen, Claude and DeepSeek in one stop. As one of the first overseas enterprises licensed for Seedance 2.0, we deliver enterprise-grade security, real-time cost analytics and flexible multi-cloud billing solutions, significantly cutting enterprises’ expenses on multi-model integration, procurement and operation & maintenance.",
      "features": [
        {
          "title": "One API, instant access to 10+ leading global AI models",
          "description": "One API, instant access to 10+ leading global AI models",
        },
        {
          "title": "Cost Reduction & Efficiency Boost: Gain access to all models with a single integration, eliminating cumbersome multi-platform connection procedures and slashing months of development work down to just a few days",
          "description": "Cost Reduction & Efficiency Boost: Gain access to all models with a single integration, eliminating cumbersome multi-platform connection procedures and slashing months of development work down to just a few days",
        },
        {
          "title": "Unified billing and real-time cost monitoring across your whole team",
          "description": "Unified billing and real-time cost monitoring across your whole team",
        },
        {
          "title": "Enterprise-grade security",
          "description": "end-to-end encryption, tiered permissions, full audit trail",
        },
        {
          "title": "Direct supply from cloud providers",
          "description": "no data collected from your conversations",
        },
      ],
      "whoFor": [
        "Enterprise engineering teams integrating AI into products at scale",
        "Procurement and finance teams managing AI vendor costs across departments",
        "CTOs and platform leads who need the flexibility to adopt new models as they emerge",
      ],
      "cta": "talk to us",
      "faqs": [
        {
          "question": "Which AI models does BasicRouter support?",
          "answer": "BasicRouter currently supports 10+ leading models including GPT-4o, Claude 3.5, Gemini 1.5 Pro, DeepSeek, Doubao, Qwen, Kimi, GLM, and MiniMax. New models are added as they reach production-grade quality. You access them all through a single endpoint.",
        },
        {
          "question": "Is our data safe when routed through BasicRouter?",
          "answer": "BasicRouter operates as a direct conduit to each cloud provider — we do not log, store, or train on your conversation data. All traffic is encrypted in transit and you retain full data sovereignty. Enterprise compliance documentation is available on request.",
        },
        {
          "question": "Can we use BasicRouter with our existing codebase?",
          "answer": "Yes. BasicRouter uses an OpenAI-compatible API format, meaning most applications can switch by changing a single base URL and API key — no other code changes required. Our team can also provide technical onboarding support.",
        },
      ],
    },
    "zh": {
      "headline": "全球模型统一接入平台与 Token 管理",
      "problemStatement": "连接全球顶尖 AI 模型的一站式入口，一次接入，自由切换，无限扩展。",
      "howItWorks": "它一站式聚合了GPT、Gemini、Doubao、Qwen、Claude和DeepSeek等国内外主流大语言模型。作为首批获得Seedance 2.0授权的海外企业之一，我们提供企业级安全、实时成本分析和灵活的多云计费解决方案，显著降低了企业在多模型集成、采购及运维方面的支出。",
      "features": [
        {
          "title": "一个 API，即时访问 10+ 家全球领先的AI模型",
          "description": "一个 API，即时访问 10+ 家全球领先的AI模型",
        },
        {
          "title": "降低成本与提升效率：通过一次集成即可访问所有模型，消除繁琐的多平台连接流程，将数月的开发工作缩短至几天。",
          "description": "降低成本与提升效率：通过一次集成即可访问所有模型，消除繁琐的多平台连接流程，将数月的开发工作缩短至几天。",
        },
        {
          "title": "统一账单，实时成本监控，覆盖您的整个团队",
          "description": "统一账单，实时成本监控，覆盖您的整个团队",
        },
        {
          "title": "企业级安全",
          "description": "端到端加密、分层权限、完整审计日志",
        },
        {
          "title": "云服务商直接供应——您的对话不会被收集任何数据",
          "description": "云服务商直接供应——您的对话不会被收集任何数据",
        },
      ],
      "whoFor": [
        "正在将 AI 能力规模化集成到产品中的大型工程团队",
        "负责跨部门管理 AI 采购成本的财务与采购团队",
        "希望灵活跟进最新 AI 模型的 CTO 及平台负责人",
      ],
      "cta": "联系我们",
      "faqs": [
        {
          "question": "BasicRouter 支持哪些 AI 模型？",
          "answer": "BasicRouter 目前支持 10+ 主流模型，包括 GPT-4o、Claude 3.5、Gemini 1.5 Pro、DeepSeek、豆包、通义千问、Kimi、智谱 GLM 及 MiniMax，并持续接入达到量产质量标准的最新模型。所有模型均通过统一接口调用。",
        },
        {
          "question": "通过 BasicRouter 路由的数据安全吗？",
          "answer": "BasicRouter 作为直连通道将请求路由至各云服务商，我们不记录、存储您的对话数据，也不用于任何模型训练。所有传输数据均经过加密处理，您完全掌握数据主权。企业合规文档可按需提供。",
        },
        {
          "question": "BasicRouter 能否与我们现有的代码库集成？",
          "answer": "可以。BasicRouter 采用与 OpenAI 兼容的 API 格式，大多数应用只需更改 base URL 和 API 密钥即可完成迁移，无需改动其他代码。我们的技术团队也可提供接入支持。",
        },
      ],
    },
    "zhTw": {
      "headline": "全球模型統一接入平臺與 Token 管理",
      "problemStatement": "連接全球頂尖 AI 模型的一站式入口，一次接入，自由切換，無限擴展。",
      "howItWorks": "它一站式聚合了GPT、Gemini、Doubao、Qwen、Claude和DeepSeek等國內外主流大語言模型。作爲首批獲得Seedance 2.0授權的海外企業之一，我們提供企業級安全、實時成本分析和靈活的多雲計費解決方案，顯著降低了企業在多模型集成、採購及運維方面的支出。",
      "features": [
        {
          "title": "一個 API，即時訪問 10+ 家全球領先的AI模型",
          "description": "一個 API，即時訪問 10+ 家全球領先的AI模型",
        },
        {
          "title": "降低成本與提升效率：通過一次集成即可訪問所有模型，消除繁瑣的多平臺連接流程，將數月的開發工作縮短至幾天。",
          "description": "降低成本與提升效率：通過一次集成即可訪問所有模型，消除繁瑣的多平臺連接流程，將數月的開發工作縮短至幾天。",
        },
        {
          "title": "統一賬單，實時成本監控，覆蓋您的整個團隊",
          "description": "統一賬單，實時成本監控，覆蓋您的整個團隊",
        },
        {
          "title": "企業級安全",
          "description": "端到端加密、分層權限、完整審計日誌",
        },
        {
          "title": "雲服務商直接供應——您的對話不會被收集任何數據",
          "description": "雲服務商直接供應——您的對話不會被收集任何數據",
        },
      ],
      "whoFor": [
        "正在將 AI 能力規模化集成到產品中的大型工程團隊",
        "負責跨部門管理 AI 採購成本的財務與採購團隊",
        "希望靈活跟進最新 AI 模型的 CTO 及平台負責人",
      ],
      "cta": "聯繫我們",
      "faqs": [
        {
          "question": "BasicRouter 支持哪些 AI 模型？",
          "answer": "BasicRouter 目前支持 10+ 主流模型，包括 GPT-4o、Claude 3.5、Gemini 1.5 Pro、DeepSeek、豆包、通義千問、Kimi、智譜 GLM 及 MiniMax，並持續接入達到量產質量標準的最新模型。所有模型均通過統一接口調用。",
        },
        {
          "question": "通過 BasicRouter 路由的數據安全嗎？",
          "answer": "BasicRouter 作為直連通道將請求路由至各雲服務商，我們不記錄、存儲您的對話數據，也不用於任何模型訓練。所有傳輸數據均經過加密處理，您完全掌握數據主權。企業合規文檔可按需提供。",
        },
        {
          "question": "BasicRouter 能否與我們現有的代碼庫集成？",
          "answer": "可以。BasicRouter 採用與 OpenAI 兼容的 API 格式，大多數應用只需更改 base URL 和 API 密鑰即可完成遷移，無需改動其他代碼。我們的技術團隊也可提供接入支持。",
        },
      ],
    },
  },
  {
    "id": "employees",
    "name": "AI Digital Employees",
    "brandName": "OpenClaw",
    "heroImageSrc": "/assets/2_practice_02.avif",
    "heroColor": "#0c2340",
    "imageSrc": "/assets/2_practice_02.avif",
    "en": {
      "headline": "AI (OpenClaw) Enterprise-Grade AI Digital Employee",
      "problemStatement": "Your teams spend too much time on tasks that don't need a human. OpenClaw deploys AI digital employees that operate around the clock.",
      "howItWorks": "Built for enterprises, this large-scale AI collaborative system supports one-click deployment of AI work nodes and is compatible with various collaboration platforms including Lark, WhatsApp and WeChat. Equipped with enterprise-level permission control, API key management and cost monitoring functions, it can generate digital employees for multiple roles such as marketing, customer service, sales, R&D, operation & maintenance and knowledge management. It enables 24/7 automated office operations and improves organizational collaboration efficiency.",
      "features": [
        {
          "title": "Brand Marketing",
          "description": "content scheduling, social media monitoring, campaign reporting",
        },
        {
          "title": "Customer Support",
          "description": "24/7 multilingual responses, smart human handoff",
        },
        {
          "title": "Sales Assistant",
          "description": "lead follow-up, meeting scheduling, quote generation",
        },
        {
          "title": "HR",
          "description": "resume screening, onboarding, employee records",
        },
        {
          "title": "Finance",
          "description": "document verification, monthly closing, tax filing",
        },
      ],
      "whoFor": [
        "Customer-facing teams overwhelmed by ticket volume and response time expectations",
        "Operations leaders looking to reduce headcount costs without reducing output",
        "HR and finance teams spending hours on documentation, data entry, and routine queries",
      ],
      "cta": "talk to us",
      "faqs": [
        {
          "question": "How long does it take to deploy an AI employee?",
          "answer": "Most AI employees are operational within one to two weeks. That includes integration with your existing tools, configuration of your workflows and escalation rules, and a testing phase to validate responses before going live. Larger enterprise deployments are scoped during onboarding.",
        },
        {
          "question": "Can AI employees be customized to match our brand voice?",
          "answer": "Yes. Each agent is trained on your brand guidelines, communication standards, and product knowledge base before deployment. You can define tone, vocabulary, and response formats across every channel the agent operates on.",
        },
        {
          "question": "What happens when the AI can't handle a request?",
          "answer": "OpenClaw is built with configurable escalation logic. When a task falls outside the agent's defined scope — due to complexity, sentiment, or explicit user request — it transfers to a human team member with the full conversation history and context attached.",
        },
      ],
    },
    "zh": {
      "headline": "企业级数字员工",
      "problemStatement": "您的团队花费了太多时间在不需要人工处理的任务上。OpenClaw 部署 AI 数字员工，全天候为您服务。",
      "howItWorks": "专为企业打造的大规模AI协作系统，支持AI工作节点的—键式部署，并兼容Lark、WhatsApp、WeChat等多种协作平台。配备企业级权限控制、API key管理及成本监控功能，可生成营销、客服、销售、研发、运维、知识管理等多角色的数字员工，实现7x24小时自动化办公，提升组织协作效率。",
      "features": [
        {
          "title": "品牌营销",
          "description": "内容排期、社交媒体监控、活动报告",
        },
        {
          "title": "客户支持",
          "description": "24/7 多语言响应，智能人工接管",
        },
        {
          "title": "销售助理",
          "description": "潜在客户跟进、会议安排、报价生成",
        },
        {
          "title": "人力资源",
          "description": "简历筛选、入职、员工档案",
        },
        {
          "title": "金融",
          "description": "文件核验，月度结账，税务申报",
        },
      ],
      "whoFor": [
        "工单量庞大、响应时效压力沉重的客户服务团队",
        "希望在不降低产出的前提下控制人力成本的运营负责人",
        "每天耗费大量时间处理文档、数据录入和常规查询的人事与财务团队",
      ],
      "cta": "联系我们",
      "faqs": [
        {
          "question": "部署一位 AI 员工需要多长时间？",
          "answer": "大多数 AI 员工可在一至两周内投入运行，涵盖工具集成、业务流程与升级规则配置，以及上线前的响应测试验证阶段。大型企业部署的时间规划将在入驻阶段单独制定。",
        },
        {
          "question": "AI 员工能否按照我们的品牌风格进行定制？",
          "answer": "可以。每位 AI 员工在部署前均基于您的品牌指南、沟通规范和产品知识库进行专项训练。您可以为其在各渠道的沟通定义语气、用词偏好和响应格式。",
        },
        {
          "question": "当 AI 无法处理某个请求时会怎样？",
          "answer": "OpenClaw 内置可配置的升级逻辑。当任务因复杂程度、情绪因素或用户明确要求而超出 AI 处理范围时，系统将携带完整对话记录与上下文自动移交人工团队处理。",
        },
      ],
    },
    "zhTw": {
      "headline": "企業級數字員工",
      "problemStatement": "您的團隊花費了太多時間在不需要人工處理的任務上。OpenClaw 部署 AI 數字員工，全天候爲您服務。",
      "howItWorks": "專爲企業打造的大規模AI協作系統，支持AI工作節點的—鍵式部署，併兼容Lark、WhatsApp、WeChat等多種協作平臺。配備企業級權限控制、API key管理及成本監控功能，可生成營銷、客服、銷售、研發、運維、知識管理等多角色的數字員工，實現7x24小時自動化辦公，提升組織協作效率。",
      "features": [
        {
          "title": "品牌營銷",
          "description": "內容排期、社交媒體監控、活動報告",
        },
        {
          "title": "客戶支持",
          "description": "24/7 多語言響應，智能人工接管",
        },
        {
          "title": "銷售助理",
          "description": "潛在客戶跟進、會議安排、報價生成",
        },
        {
          "title": "人力資源",
          "description": "簡歷篩選、入職、員工檔案",
        },
        {
          "title": "金融",
          "description": "文件覈驗，月度結賬，稅務申報",
        },
      ],
      "whoFor": [
        "工單量龐大、響應時效壓力沉重的客戶服務團隊",
        "希望在不降低產出的前提下控制人力成本的運營負責人",
        "每天耗費大量時間處理文檔、數據錄入和常規查詢的人事與財務團隊",
      ],
      "cta": "聯繫我們",
      "faqs": [
        {
          "question": "部署一位 AI 員工需要多長時間？",
          "answer": "大多數 AI 員工可在一至兩週內投入運行，涵蓋工具集成、業務流程與升級規則配置，以及上線前的響應測試驗證階段。大型企業部署的時間規劃將在入駐階段單獨制定。",
        },
        {
          "question": "AI 員工能否按照我們的品牌風格進行定制？",
          "answer": "可以。每位 AI 員工在部署前均基於您的品牌指南、溝通規範和產品知識庫進行專項訓練。您可以為其在各渠道的溝通定義語氣、用詞偏好和響應格式。",
        },
        {
          "question": "當 AI 無法處理某個請求時會怎樣？",
          "answer": "OpenClaw 內置可配置的升級邏輯。當任務因複雜程度、情緒因素或用戶明確要求而超出 AI 處理範圍時，系統將攜帶完整對話記錄與上下文自動移交人工團隊處理。",
        },
      ],
    },
  },
  {
    "id": "content",
    "name": "AI Content & Growth",
    "brandName": "AI Content & Growth",
    "heroImageSrc": "/assets/2_practice_03.avif",
    "heroColor": "#0d2b1d",
    "imageSrc": "/assets/2_practice_03.avif",
    "en": {
      "headline": "AI Content & Growth",
      "problemStatement": "Marketing teams are under pressure to produce more — faster, in more formats, across more channels than ever.",
      "howItWorks": "We maintain deep integration with ByteDance’s Douyin, TikTok and VolcEngine. Powered by AIGC technology, we mass-produce marketing assets including copywriting, images, short videos and virtual live streamers. Intelligent data algorithms enable targeted ad placement, user insight analysis and private domain operations, helping brands, e-commerce merchants and cross-border businesses cut costs, boost efficiency and lift GMV.\nWe restructure corporate marketing systems via full-stack AI capabilities, covering four core stages: strategy planning, content creation, ad delivery and daily operations.",
      "features": [
        {
          "title": "AI Copywriting",
          "description": "marketing copy, ad headlines, product descriptions, social posts",
        },
        {
          "title": "AI Image Generation",
          "description": "ad creatives and visual content, produced in hours not weeks",
        },
        {
          "title": "AI Video Production",
          "description": "automated editing, dynamic content generation",
        },
        {
          "title": "Digital Avatar Broadcast",
          "description": "virtual presenters with multi-language support",
        },
        {
          "title": "TikTok & Douyin Growth",
          "description": "end-to-end short-video strategy and performance optimization",
        },
      ],
      "whoFor": [
        "Marketing teams under pressure to increase content output without increasing headcount",
        "Brands expanding into Chinese-speaking markets who need localized content at speed",
        "E-commerce and retail brands looking to dominate social commerce channels",
      ],
      "cta": "talk to us",
      "faqs": [
        {
          "question": "How quickly can you get our content operation running?",
          "answer": "For most clients, the first AI-produced content is ready within two to three weeks of kickoff. The onboarding phase covers brand voice calibration, template creation, and channel setup. Full-scale production typically reaches operational speed within the first month.",
        },
        {
          "question": "Does the content match our brand guidelines?",
          "answer": "Yes. We train our AI systems on your brand guidelines, visual identity, tone of voice, and audience profiles before generating any content. All output goes through a defined review and approval workflow before it reaches your channels.",
        },
        {
          "question": "Can you manage our TikTok and Douyin accounts directly?",
          "answer": "Yes. Our growth team can operate as your full-service TikTok and Douyin agency — handling content production, publishing, community management, paid promotion, and performance reporting. We also offer a co-pilot model to support your in-house team.",
        },
      ],
    },
    "zh": {
      "headline": "AI 内容与增长",
      "problemStatement": "营销团队面临着前所未有的压力，需要更快、以更多格式、通过更多渠道来产出更多内容。",
      "howItWorks": "我们与字节跳动旗下的的抖音、TikTok和火山引擎均保持深度集成。通过AIGC技术赋能，我们能够批量生产营销内容，包括文案、图片、短视频和虚拟直播。智能数据算法支持定向广告投放、用户洞察分析和私域运营，助力品牌方、电商商家及跨境企业降本增效，提升GMV。\n\n我们通过全栈AI能力重塑企业营销体系，覆盖策略规划、内容创作、广告投放和日常运营四大核心环节。",
      "features": [
        {
          "title": "AI文案",
          "description": "营销文案、广告标题、产品描述、社交媒体帖子",
        },
        {
          "title": "AI 图像生成",
          "description": "广告创意和视觉内容，数小时内即可完成，而非数周",
        },
        {
          "title": "AI 视频制作",
          "description": "自动化编辑，动态内容生成",
        },
        {
          "title": "数字虚拟人直播",
          "description": "支持多语言的虚拟主持人",
        },
        {
          "title": "TikTok & 抖音增长",
          "description": "端到端短视频策略与效果优化",
        },
      ],
      "whoFor": [
        "面临提升内容产能但无法扩招压力的营销团队",
        "正在进入中文市场、需要快速产出本土化内容的品牌",
        "希望在社交电商渠道建立竞争优势的电商与零售品牌",
      ],
      "cta": "联系我们",
      "faqs": [
        {
          "question": "多久可以让我们的内容体系运转起来？",
          "answer": "对大多数客户而言，首批 AI 产出内容通常在项目启动后两至三周内交付。入驻阶段涵盖品牌调性校准、模板创建与渠道配置。完整规模的内容生产通常在第一个月内达到稳定运转状态。",
        },
        {
          "question": "产出内容是否符合我们的品牌规范？",
          "answer": "是的。在生成任何内容之前，我们会基于您的品牌规范、视觉识别系统、语言风格和受众画像对 AI 系统进行专项训练。所有产出内容均经过既定审核与审批流程后方可发布至您的渠道。",
        },
        {
          "question": "你们可以直接管理我们的 TikTok 和抖音账号吗？",
          "answer": "可以。我们的增长团队可作为您的 TikTok 和抖音全托管服务方，全面负责内容制作、发布排期、社区运营、付费推广与效果汇报。我们也提供协作模式，为您的内部团队提供支撑。",
        },
      ],
    },
    "zhTw": {
      "headline": "AI 內容與增長",
      "problemStatement": "營銷團隊面臨着前所未有的壓力，需要更快、以更多格式、通過更多渠道來產出更多內容。",
      "howItWorks": "我們與字節跳動旗下的的抖音、TikTok和火山引擎均保持深度集成。通過AIGC技術賦能，我們能夠批量生產營銷內容，包括文案、圖片、短視頻和虛擬直播。智能數據算法支持定向廣告投放、用戶洞察分析和私域運營，助力品牌方、電商商家及跨境企業降本增效，提升GMV。\n\n我們通過全棧AI能力重塑企業營銷體系，覆蓋策略規劃、內容創作、廣告投放和日常運營四大核心環節。",
      "features": [
        {
          "title": "AI文案",
          "description": "營銷文案、廣告標題、產品描述、社交媒體帖子",
        },
        {
          "title": "AI 圖像生成",
          "description": "廣告創意和視覺內容，數小時內即可完成，而非數週",
        },
        {
          "title": "AI 視頻製作",
          "description": "自動化編輯，動態內容生成",
        },
        {
          "title": "數字虛擬人直播",
          "description": "支持多語言的虛擬主持人",
        },
        {
          "title": "TikTok & 抖音增長",
          "description": "端到端短視頻策略與效果優化",
        },
      ],
      "whoFor": [
        "面臨提升內容產能但無法擴招壓力的營銷團隊",
        "正在進入中文市場、需要快速產出本土化內容的品牌",
        "希望在社交電商渠道建立競爭優勢的電商與零售品牌",
      ],
      "cta": "聯繫我們",
      "faqs": [
        {
          "question": "多久可以讓我們的內容體系運轉起來？",
          "answer": "對大多數客戶而言，首批 AI 產出內容通常在項目啟動後兩至三週內交付。入駐階段涵蓋品牌調性校準、模板創建與渠道配置。完整規模的內容生產通常在第一個月內達到穩定運轉狀態。",
        },
        {
          "question": "產出內容是否符合我們的品牌規範？",
          "answer": "是的。在生成任何內容之前，我們會基於您的品牌規範、視覺識別系統、語言風格和受眾畫像對 AI 系統進行專項訓練。所有產出內容均經過既定審核與審批流程後方可發布至您的渠道。",
        },
        {
          "question": "你們可以直接管理我們的 TikTok 和抖音賬號嗎？",
          "answer": "可以。我們的增長團隊可作為您的 TikTok 和抖音全託管服務方，全面負責內容製作、發布排期、社區運營、付費推廣與效果匯報。我們也提供協作模式，為您的內部團隊提供支撐。",
        },
      ],
    },
  },
  {
    "id": "education",
    "name": "AI Education",
    "brandName": "AI Education",
    "heroImageSrc": "/assets/2_practice_04.avif",
    "heroColor": "#1c0a3d",
    "imageSrc": "/assets/2_practice_04.avif",
    "en": {
      "headline": "AI Education",
      "problemStatement": "AI adoption fails when teams don't know how to use it. We help organizations close that gap.",
      "howItWorks": "Build an AI talent cultivation system covering the Asia-Pacific region. We have launched an authoritative AI certification system in partnership with BytePlus (ByteDance) and Pearson. Cooperating with universities and local governments in Hong Kong, Macao and Southeast Asia, we provide online and offline training programs to build standardized pathways for AI talent development and continuously supply skilled professionals to the industry.",
      "features": [
        {
          "title": "Online courses",
          "description": "AI skill training accessible to teams across geographies",
        },
        {
          "title": "Offline courses & assessments",
          "description": "in-person instruction delivered through regional partnerships",
        },
        {
          "title": "AI Engineer Certification",
          "description": "co-certified by TikTok and Pearson, recognized by governments and enterprises across the region",
        },
        {
          "title": "Issued exclusively in joint cooperation with top-tier platforms and globally authoritative institutions, the certification carries high industry value",
          "description": "Issued exclusively in joint cooperation with top-tier platforms and globally authoritative institutions, the certification carries high industry value",
        },
        {
          "title": "The certification gave our team a competitive edge. Recognized across the region and valued by every enterprise client we approached.",
          "description": "The certification gave our team a competitive edge. Recognized across the region and valued by every enterprise client we approached.",
        },
      ],
      "whoFor": [
        "HR and L&D teams building organization-wide AI capability programs",
        "Universities and vocational institutions looking to add AI certification to their curriculum",
        "Individual professionals seeking a globally recognized credential to advance their AI career",
      ],
      "cta": "talk to us",
      "faqs": [
        {
          "question": "Who recognizes the certifications?",
          "answer": "The AI Engineer Certification is co-certified by TikTok and Pearson Education — two of the most recognized names in technology and global credentialing. It is acknowledged by enterprise employers and government agencies across the APAC region, making it a meaningful qualification for career advancement.",
        },
        {
          "question": "Can we run a program for our entire company?",
          "answer": "Yes. We design and deliver enterprise-scale AI training programs — from cohort-based online courses to facilitated in-person workshops — tailored to your organization's roles, maturity level, and transformation goals. Contact us to scope a program for your team.",
        },
        {
          "question": "Is there a certification exam, and how difficult is it?",
          "answer": "Yes. The certification includes a structured assessment designed to test practical AI application, not memorization. The difficulty is benchmarked for working professionals — rigorous enough to be meaningful, and accessible enough for motivated learners with no prior AI background to pass with preparation.",
        },
      ],
    },
    "zh": {
      "headline": "AI 教育",
      "problemStatement": "当团队不知道如何使用 AI 时，AI 的应用就会失败。我们帮助组织弥合这一差距。",
      "howItWorks": "构建一个覆盖亚太地区的AI人才培养体系。我们已与BytePlus (ByteDance) 和 Pearson 合作推出了权威的AI认证体系。通过与香港、澳门及东南亚的大学和地方政府合作，我们提供线上和线下培训项目，以建立标准化的AI人才发展路径，并持续为行业输送专业技能人才。",
      "features": [
        {
          "title": "在线课程",
          "description": "面向跨地域团队的 AI 技能培训",
        },
        {
          "title": "线下课程与评估",
          "description": "通过区域合作提供的线下教学",
        },
        {
          "title": "AI工程师认证",
          "description": "由TikTok和Pearson联合认证，获得区域内政府和企业的认可",
        },
        {
          "title": "该认证由顶级平台和全球权威机构联合授予，具有很高的行业价值。",
          "description": "该认证由顶级平台和全球权威机构联合授予，具有很高的行业价值。",
        },
        {
          "title": "这项认证为我们的团队带来了竞争优势，在整个地区都得到了认可，并受到了我们接触过的每一位企业客户的重视。",
          "description": "这项认证为我们的团队带来了竞争优势，在整个地区都得到了认可，并受到了我们接触过的每一位企业客户的重视。",
        },
      ],
      "whoFor": [
        "正在构建全组织 AI 能力体系的人力资源与学习发展团队",
        "希望将 AI 认证课程纳入教学体系的高校与职业培训机构",
        "希望通过国际认可资质推进 AI 职业发展的个人从业者",
      ],
      "cta": "联系我们",
      "faqs": [
        {
          "question": "认证资质获得哪些机构的认可？",
          "answer": "AI 工程师认证由 TikTok 与培生教育（Pearson Education）联合认证，两者均是科技与全球学历认证领域最具公信力的机构。该认证获得亚太地区企业雇主与政府机构的广泛认可，是推动职业发展的有效资质证明。",
        },
        {
          "question": "我们可以为整个公司定制培训项目吗？",
          "answer": "可以。我们为企业设计并交付规模化 AI 培训项目——从批次制在线课程到引导式线下工作坊，均可根据您组织的岗位结构、AI 成熟度与转型目标量身定制。欢迎联系我们为您的团队制定专属方案。",
        },
        {
          "question": "认证是否需要考试？难度如何？",
          "answer": "是的。认证包含结构化考核环节，考查 AI 实际应用能力而非死记硬背。难度针对职场专业人士校准——严格程度足以体现资质含金量，同时对于备考充分的零基础学习者而言同样可以通过。",
        },
      ],
    },
    "zhTw": {
      "headline": "AI 教育",
      "problemStatement": "當團隊不知道如何使用 AI 時，AI 的應用就會失敗。我們幫助組織彌合這一差距。",
      "howItWorks": "構建一個覆蓋亞太地區的AI人才培養體系。我們已與BytePlus (ByteDance) 和 Pearson 合作推出了權威的AI認證體系。通過與香港、澳門及東南亞的大學和地方政府合作，我們提供線上和線下培訓項目，以建立標準化的AI人才發展路徑，並持續爲行業輸送專業技能人才。",
      "features": [
        {
          "title": "在線課程",
          "description": "面向跨地域團隊的 AI 技能培訓",
        },
        {
          "title": "線下課程與評估",
          "description": "通過區域合作提供的線下教學",
        },
        {
          "title": "AI工程師認證",
          "description": "由TikTok和Pearson聯合認證，獲得區域內政府和企業的認可",
        },
        {
          "title": "該認證由頂級平臺和全球權威機構聯合授予，具有很高的行業價值。",
          "description": "該認證由頂級平臺和全球權威機構聯合授予，具有很高的行業價值。",
        },
        {
          "title": "這項認證爲我們的團隊帶來了競爭優勢，在整個地區都得到了認可，並受到了我們接觸過的每一位企業客戶的重視。",
          "description": "這項認證爲我們的團隊帶來了競爭優勢，在整個地區都得到了認可，並受到了我們接觸過的每一位企業客戶的重視。",
        },
      ],
      "whoFor": [
        "正在構建全組織 AI 能力體系的人力資源與學習發展團隊",
        "希望將 AI 認證課程納入教學體系的高校與職業培訓機構",
        "希望通過國際認可資質推進 AI 職業發展的個人從業者",
      ],
      "cta": "聯繫我們",
      "faqs": [
        {
          "question": "認證資質獲得哪些機構的認可？",
          "answer": "AI 工程師認證由 TikTok 與培生教育（Pearson Education）聯合認證，兩者均是科技與全球學歷認證領域最具公信力的機構。該認證獲得亞太地區企業僱主與政府機構的廣泛認可，是推動職業發展的有效資質證明。",
        },
        {
          "question": "我們可以為整個公司定制培訓項目嗎？",
          "answer": "可以。我們為企業設計並交付規模化 AI 培訓項目——從批次制在線課程到引導式線下工作坊，均可根據您組織的崗位結構、AI 成熟度與轉型目標量身定制。歡迎聯繫我們為您的團隊制定專屬方案。",
        },
        {
          "question": "認證是否需要考試？難度如何？",
          "answer": "是的。認證包含結構化考核環節，考查 AI 實際應用能力而非死記硬背。難度針對職場專業人士校準——嚴格程度足以體現資質含金量，同時對於備考充分的零基礎學習者而言同樣可以通過。",
        },
      ],
    },
  },
  {
    "id": "multicloud",
    "name": "Multi-Cloud Computing Platform",
    "brandName": "Multi-Cloud",
    "heroImageSrc": "/assets/2_practice_05.avif",
    "heroColor": "#023c58",
    "imageSrc": "/assets/2_practice_05.avif",
    "en": {
      "headline": "Multi-Cloud Computing Platform",
      "problemStatement": "Unify global multi-cloud resources to build an elastic, unified computing foundation, delivering stable and reliable computing power for full-scenario AI applications.",
      "howItWorks": "We integrate resources from five major global cloud vendors including Alibaba Cloud, Tencent Cloud, AWS and Huawei Cloud to build a stable and elastic unified computing infrastructure, delivering highly reliable computing power to all types of AI applications.",
      "features": [
        {
          "title": "Aggregate mainstream global cloud ecosystems with full resource coverage and flexible scheduling",
          "description": "Aggregate mainstream global cloud ecosystems with full resource coverage and flexible scheduling",
        },
        {
          "title": "Multi-cloud redundant architecture ensures stable operation and high availability",
          "description": "Multi-cloud redundant architecture ensures stable operation and high availability",
        },
        {
          "title": "Unified operation and management drastically cut enterprises’ costs on computing resource procurement and maintenance",
          "description": "Unified operation and management drastically cut enterprises’ costs on computing resource procurement and maintenance",
        },
      ],
      "whoFor": [
        "AI teams that need stable compute across regions",
        "Enterprises managing procurement across multiple cloud vendors",
        "Organizations scaling full-scenario AI applications",
      ],
      "cta": "Get in touch",
      "faqs": [],
    },
    "zh": {
      "headline": "多云计算平台",
      "problemStatement": "整合全球多云资源，构建弹性统一的计算底座，为全场景AI应用提供稳定可靠的算力。",
      "howItWorks": "我们整合了包括 Alibaba Cloud、Tencent Cloud、AWS 和 Huawei Cloud 在内的五大全球云厂商的资源，构建了一个稳定且弹性的统一计算基础设施，为各类 AI 应用提供高度可靠的计算能力。",
      "features": [
        {
          "title": "聚合主流全球云生态，提供全面的资源覆盖和灵活的调度能力",
          "description": "聚合主流全球云生态，提供全面的资源覆盖和灵活的调度能力",
        },
        {
          "title": "多云冗余架构可确保稳定运行和高可用性",
          "description": "多云冗余架构可确保稳定运行和高可用性",
        },
        {
          "title": "统一的运营和管理大幅降低了企业在计算资源采购和维护方面的成本",
          "description": "统一的运营和管理大幅降低了企业在计算资源采购和维护方面的成本",
        },
      ],
      "whoFor": [
        "需要跨区域稳定算力的 AI 团队",
        "管理多家云厂商采购的企业",
        "正在扩展全场景 AI 应用的组织",
      ],
      "cta": "联系我们",
      "faqs": [],
    },
    "zhTw": {
      "headline": "多雲計算平臺",
      "problemStatement": "整合全球多雲資源，構建彈性統一的計算底座，爲全場景AI應用提供穩定可靠的算力。",
      "howItWorks": "我們整合了包括 Alibaba Cloud、Tencent Cloud、AWS 和 Huawei Cloud 在內的五大全球雲廠商的資源，構建了一個穩定且彈性的統一計算基礎設施，爲各類 AI 應用提供高度可靠的計算能力。",
      "features": [
        {
          "title": "聚合主流全球雲生態，提供全面的資源覆蓋和靈活的調度能力",
          "description": "聚合主流全球雲生態，提供全面的資源覆蓋和靈活的調度能力",
        },
        {
          "title": "多雲冗餘架構可確保穩定運行和高可用性",
          "description": "多雲冗餘架構可確保穩定運行和高可用性",
        },
        {
          "title": "統一的運營和管理大幅降低了企業在計算資源採購和維護方面的成本",
          "description": "統一的運營和管理大幅降低了企業在計算資源採購和維護方面的成本",
        },
      ],
      "whoFor": [
        "需要跨區域穩定算力的 AI 團隊",
        "管理多家雲廠商採購的企業",
        "正在擴展全場景 AI 應用的組織",
      ],
      "cta": "聯繫我們",
      "faqs": [],
    },
  },
]
