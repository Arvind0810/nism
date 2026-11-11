import type { Chapter, Exam, Module, Video } from "@/data/types";

const modules: Module[] = [
  {
    number: 1,
    title: "Personal Financial Planning",
    marks: 37,
    caseStudyVideo: { id: "UwkK9zKxR2A", title: "Case Studies | Module 1", durationSeconds: 4428 },
  },
  {
    number: 2,
    title: "Indian Financial Markets",
    marks: 10,
  },
  {
    number: 3,
    title: "Investment Products",
    marks: 30,
    caseStudyVideo: { id: "CgoNJIR2jho", title: "Case Studies | Module 3", durationSeconds: 1888 },
  },
  {
    number: 4,
    title: "Investment Through Managed Portfolio",
    marks: 23,
    caseStudyVideo: { id: "M19Z17dX9oY", title: "Case Studies | Module 4", durationSeconds: 818 },
  },
  {
    number: 5,
    title: "Portfolio Construction, Performance Monitoring and Evaluation",
    marks: 20,
    caseStudyVideo: { id: "1BdE3m-3BUQ", title: "Case Studies | Module 5", durationSeconds: 1172 },
  },
  {
    number: 6,
    title: "Operations, Regulatory Environment, Compliance and Ethics",
    marks: 30,
    caseStudyVideo: { id: "ELujjq-B98g", title: "Case Studies | Module 6", durationSeconds: 1173 },
  },
];

const chapters: Chapter[] = [
  {
    number: 1,
    slug: "chapter-1",
    title: "Introduction to Personal Financial Planning",
    moduleNumber: 1,
    summary:
      "What financial planning is and how it differs from piecemeal advice, its scope, assets and net worth, the six-step planning process, and the advisory, execution and platform business models.",
    topics: [
      "Concept, need and scope of financial planning",
      "Goal setting, prioritising and staggering goals",
      "Physical vs. financial assets and net worth",
      "The six-step financial planning process",
      "Fee-only advice, execution-only, aggregators and wraps/platforms",
    ],
    videos: [{ id: "q1cA95ye8mI", title: "Chapter 1", durationSeconds: 2155 }],
  },
  {
    number: 2,
    slug: "chapter-2",
    title: "Time Value of Money",
    moduleNumber: 1,
    summary:
      "The time value of money behind every financial calculation: present and future value, compounding frequency, CAGR, EMI and loan tenure, annuities and perpetuities.",
    topics: [
      "Present value and future value",
      "Compounding frequency; simple vs. compound interest",
      "CAGR, including part-year periods",
      "EMI (PMT) and loan tenure (NPER) using Excel",
      "Ordinary annuity, annuity due and perpetuity",
    ],
    videos: [{ id: "0lsyiFwNGo8", title: "Chapter 2", durationSeconds: 2767 }],
  },
  {
    number: 3,
    slug: "chapter-3",
    title: "Evaluating the Financial Position of Clients",
    moduleNumber: 1,
    summary:
      "How an adviser assesses where a client stands: cash management, household budgets, the personal balance sheet, emergency planning and personal finance ratios.",
    topics: [
      "Cash management and income–expenditure statements",
      "Preparing, forecasting and monitoring a household budget",
      "Personal balance sheet and net worth",
      "Contingency planning and the emergency fund",
      "Personal finance ratios and their benchmarks",
    ],
    videos: [{ id: "rFwSHEFwLCQ", title: "Chapter 3", durationSeconds: 1829 }],
  },
  {
    number: 4,
    slug: "chapter-4",
    title: "Debt Management and Loans",
    moduleNumber: 1,
    summary:
      "When and how much to borrow, credit scores, types of loans, EMI and restructuring maths, and strategies to manage and repay debt.",
    topics: [
      "Role of debt, debt-to-income ratio and debt counselling",
      "Credit bureaus, credit scores and RBI's free credit report",
      "Secured vs. unsecured loans, P2P and gold loans",
      "EMI, amortisation, restructuring and loan evaluation",
      "EMI vs. tenure changes and invest vs. prepay",
      "Debt payoff strategies: avalanche, snowball, blizzard",
    ],
    videos: [{ id: "-ictegx4yBE", title: "Chapter 4", durationSeconds: 2073 }],
  },
  {
    number: 5,
    slug: "chapter-5",
    title: "Introduction to the Indian Financial Markets",
    moduleNumber: 2,
    summary:
      "The structure of India's financial markets: the regulators and the banking, securities, insurance and pension market participants.",
    topics: [
      "Regulators and Ministry of Finance departments",
      "Banks, payments banks, small finance banks, NBFCs and HFCs",
      "P2P lending, credit information companies and Account Aggregators",
      "Securities market intermediaries: depositories, brokers, KRAs, RTAs",
      "Insurance (IRDAI) and pension (PFRDA, NPS) markets",
    ],
    videos: [{ id: "Og_jyzlSIOs", title: "Chapter 5", durationSeconds: 1640 }],
  },
  {
    number: 6,
    slug: "chapter-6",
    title: "Securities Market Segments",
    moduleNumber: 2,
    summary:
      "How securities are issued in the primary market, traded and settled in the secondary market, and affected by corporate actions.",
    topics: [
      "Types of issues, book building and ASBA/UPI applications",
      "T+3 IPO listing, T+1/T+0 settlement and the UPI block mechanism",
      "Secondary market functions, indices and market capitalisation",
      "Risk management: margins, circuit breakers, novation, Core SGF",
      "Corporate actions: rights, bonus, dividend, split, buyback, delisting",
    ],
    videos: [{ id: "L68A0MxYnXc", title: "Chapter 6", durationSeconds: 2391 }],
  },
  {
    number: 7,
    slug: "chapter-7",
    title: "Introduction to Investment",
    moduleNumber: 3,
    summary:
      "The main investment classes, from equity, preference shares and debt to commodities, real estate, structured products and art, and the channels for investing in them.",
    topics: [
      "Equity, preference shares and DVRs",
      "Government vs. corporate debt, credit spreads and ratings",
      "Commodities and real estate / REITs",
      "Structured products (MLDs), distressed securities and art",
      "Direct vs. managed channels: mutual funds, PMS and AIFs",
    ],
    videos: [{ id: "af9HOAme02g", title: "Chapter 7", durationSeconds: 1311 }],
  },
  {
    number: 8,
    slug: "chapter-8",
    title: "Investing in Stocks",
    moduleNumber: 3,
    summary:
      "Equity as an investment: diversification and risks, equity research, valuation methods and relative multiples, technical analysis and qualitative evaluation.",
    topics: [
      "Diversification and types of equity risk",
      "Equity research and top-down EIC analysis",
      "Business cycle, sector rotation and industry life cycle",
      "DCF, asset-based valuation and relative multiples (P/E, P/BV, PEG, EV, EVA)",
      "Technical analysis: trend lines, moving averages, Bollinger Bands",
    ],
    videos: [{ id: "kIwutUabWbc", title: "Chapter 8", durationSeconds: 2367 }],
  },
  {
    number: 9,
    slug: "chapter-9",
    title: "Investing in Fixed Income Securities",
    moduleNumber: 3,
    summary:
      "How bonds are priced and measured, the money market, government and corporate debt markets, and India's small saving instruments.",
    topics: [
      "Bond features and risks",
      "Bond pricing and yield measures (CY, YTM, clean/dirty price)",
      "Yield curve and duration",
      "Money market, G-Secs and corporate debt",
      "Small savings schemes: FRSB, SCSS, SSA, KVP",
    ],
    videos: [
      { id: "0wNH6Pb8l_g", title: "Chapter 9 – Part A", durationSeconds: 2749 },
      { id: "voDsZIcOYOE", title: "Chapter 9 – Part B", durationSeconds: 785 },
    ],
  },
  {
    number: 10,
    slug: "chapter-10",
    title: "Understanding Derivatives",
    moduleNumber: 3,
    summary:
      "Forwards, futures, options and swaps: pricing, margining and settlement, uses for hedging, speculation and arbitrage, and SEBI's 2024 index-derivative measures.",
    topics: [
      "Derivative basics, margins and open interest",
      "Forwards vs. futures, options and swaps",
      "Option payoffs; intrinsic and time value",
      "Futures pricing, basis and arbitrage",
      "Commodity and currency derivatives",
      "SEBI index-derivative measures (2024)",
    ],
    videos: [{ id: "QJqGIZ4x2EE", title: "Chapter 10", durationSeconds: 3413 }],
  },
  {
    number: 11,
    slug: "chapter-11",
    title: "Mutual Funds",
    moduleNumber: 4,
    summary:
      "How mutual funds are structured and regulated, SEBI's scheme categories, Specialised Investment Funds, and how investors transact.",
    topics: [
      "Structure, NAV and scheme types (open, closed, interval, ETF)",
      "Regulation: MF Regulations 2026, KYC statuses",
      "SEBI scheme categorisation",
      "Specialised Investment Funds (SIF)",
      "SIP, SWP, STP, value averaging; direct vs. regular plans",
    ],
    videos: [
      { id: "cL6BwoyLkNY", title: "Chapter 11 – Part A", durationSeconds: 1557 },
      { id: "iZGryll3PtE", title: "Chapter 11 – Part B", durationSeconds: 1359 },
    ],
  },
  {
    number: 12,
    slug: "chapter-12",
    title: "Portfolio Manager",
    moduleNumber: 4,
    summary:
      "Who can offer portfolio management services, how they are registered and regulated, and how PMS fees, direct access and performance disclosure work.",
    topics: [
      "Types of PMS: discretionary, non-discretionary, advisory",
      "Registration: net worth, principal officer, Form A",
      "Responsibilities and investment limits",
      "Fees: fixed, hurdle rate, high watermark, catch-up",
      "Direct access, Disclosure Document and performance reporting",
    ],
    videos: [{ id: "FLIjkSHuizU", title: "Chapter 12", durationSeconds: 1223 }],
  },
  {
    number: 13,
    slug: "chapter-13",
    title: "Overview of Alternative Investment Funds (AIFs)",
    moduleNumber: 4,
    summary:
      "SEBI's AIF framework: investment and accredited-investor rules, the three categories, the main fund types, and recent changes to angel and large value funds.",
    topics: [
      "Alternative investments and the evolution of AIFs",
      "Investment conditions: ₹20 crore corpus, ₹1 crore minimum, 1,000 investors",
      "Accredited investors, angel funds and large value funds",
      "Category I, II and III AIFs",
      "Fund types: VC, PE, debt, infrastructure, hedge, social impact",
    ],
    videos: [{ id: "0qzbgA1n4So", title: "Chapter 13", durationSeconds: 741 }],
  },
  {
    number: 14,
    slug: "chapter-14",
    title: "Introduction to Modern Portfolio Theory",
    moduleNumber: 5,
    summary:
      "Markowitz's framework: investor attitudes to risk, expected return and risk for assets and portfolios, diversification, and the efficient frontier.",
    topics: [
      "MPT assumptions",
      "Risk-averse, risk-neutral and risk-seeking investors",
      "Expected return, variance and standard deviation",
      "Two-asset portfolio risk and covariance terms",
      "Efficient frontier, optimisation and estimation risk",
    ],
    videos: [{ id: "RWrL-VmaDmo", title: "Chapter 14", durationSeconds: 1277, embeddable: false }],
  },
  {
    number: 15,
    slug: "chapter-15",
    title: "Portfolio Construction Process",
    moduleNumber: 5,
    summary:
      "How to build a client portfolio: asset allocation, the IPS, objectives and constraints, exposure limits, ESG preferences, investor profiling, benchmarking and rebalancing.",
    topics: [
      "Asset allocation and correlation across asset classes",
      "Investment Policy Statement: objectives and constraints",
      "Exposure limits by sector, entity and asset class",
      "Sustainable (ESG) and ethical investing",
      "Investor profiling: BB&K personalities and life-cycle phases",
      "Strategic vs. tactical allocation and rebalancing",
    ],
    videos: [{ id: "znSXEVodtbE", title: "Chapter 15", durationSeconds: 1365 }],
  },
  {
    number: 16,
    slug: "chapter-16",
    title: "Portfolio Performance Measurement and Evaluation",
    moduleNumber: 5,
    summary:
      "Measuring and judging portfolio performance: return and risk measures, risk-adjusted ratios, benchmarks and performance attribution.",
    topics: [
      "Return measures: HPR, TWRR vs. MWRR, geometric mean, net returns",
      "Risk measures: SD, semi-variance, beta, tracking error",
      "Risk-adjusted ratios: Sharpe, Treynor, Sortino, IR, M², Jensen's alpha",
      "Benchmarks and peer-group analysis",
      "Performance attribution and currency effects",
    ],
    videos: [{ id: "GnQxV4FmRwk", title: "Chapter 16", durationSeconds: 3728 }],
  },
  {
    number: 17,
    slug: "chapter-17",
    title: "Operational Aspects of Investment Management",
    moduleNumber: 6,
    summary:
      "Investor onboarding and servicing: PAN and KYC, demat, nomination and transmission, NRI rules, payments, advisory documentation and MF transactions on exchange platforms.",
    topics: [
      "PAN, KYC, CKYC and online KYC",
      "Demat, remat and Power of Attorney",
      "NRI accounts and change of status",
      "Nomination (up to 3 nominees) and transmission",
      "Payment modes and third-party payment rules",
      "MITC and MF exchange platforms (BSE StAR MF, NSE NMF II)",
    ],
    videos: [{ id: "qT1stZjpi48", title: "Chapter 17", durationSeconds: 1729 }],
  },
  {
    number: 18,
    slug: "chapter-18",
    title: "Key Regulations",
    moduleNumber: 6,
    summary:
      "Key laws for investment advisers: SCRA, SEBI Act, PFUTP, insider trading, the amended IA Regulations, PMLA and other relevant Acts including FATCA/CRS.",
    topics: [
      "SEBI Act, SCRA, PFUTP and insider trading",
      "IA registration, qualification, deposit and the 300-client / ₹3 crore rule",
      "Fee caps (₹1,51,000 or 2.5% of AUA) and advance fees",
      "Segregation of advisory and distribution; part-time IAs",
      "AI disclosure, records, compliance audit and IAASB (BSE)",
      "PMLA, FEMA, Contract Act and FATCA/CRS",
    ],
    videos: [{ id: "lAQmbYZu4bY", title: "Chapter 18", durationSeconds: 2111 }],
  },
  {
    number: 19,
    slug: "chapter-19",
    title: "Ethical Issues",
    moduleNumber: 6,
    summary:
      "Ethics for investment advisers: client-first conduct, common grievance areas, ethical dilemmas, fiduciary duty, SEBI's do's and don'ts, audit observations and global best practices.",
    topics: [
      "Ethics vs. law and the Client First principle",
      "Grievance areas: churning, misrepresentation, mis-selling",
      "Ethical dilemmas and how to resolve them",
      "Fiduciary duty and disclosure",
      "SEBI do's and don'ts; finfluencers",
      "Annual audit observations; SEC and Australian practice",
    ],
    videos: [{ id: "1s-ZBvbRTg4", title: "Chapter 19", durationSeconds: 1312 }],
  },
  {
    number: 20,
    slug: "chapter-20",
    title: "Grievance Redress Mechanism",
    moduleNumber: 6,
    summary:
      "Grievance redress across financial sectors: investment advisers and capital markets (SCORES 2.0, ODR), banking ombudsman, insurance and pension redress, and SAT appeals.",
    topics: [
      "Consumer Protection Act and features of a good grievance system",
      "IA and capital-market redress: SCORES 2.0 and ODR",
      "Banking: BCSBI and RBI Integrated Ombudsman Scheme 2026",
      "Insurance Ombudsman and IGMS",
      "NPS and pension-scheme redress",
      "Securities Appellate Tribunal and other forums",
    ],
    videos: [{ id: "ZzyHiBGPuoo", title: "Chapter 20", durationSeconds: 1010 }],
  },
];

const introVideo: Video = {
  id: "AVF_xLgBmr4",
  title: "About the Exam",
  durationSeconds: 680,
};

const practiceVideos: Video[] = [
  { id: "rU7Eywjb99g", title: "Bonus Questions & Answers", durationSeconds: 562 },
  { id: "3aCkUpMz74w", title: "Sample Exam Paper", durationSeconds: 6239 },
  { id: "DF78Npe4dqM", title: "Additional Questions to Boost Score", durationSeconds: 1448 },
];

export const xaExam: Exam = {
  id: "xa",
  code: "X-A",
  title: "Investment Adviser (Level 1)",
  tagline: "Personal financial planning, investment products, portfolio construction, operations and regulation.",
  status: "available",
  playlistUrl: "https://www.youtube.com/playlist?list=PLMdK_Oe95V-HkoCNNh3UB_J9M_yLyCSZc",
  sourceNote:
    "Practice questions are based on the NISM Series X-A workbook (February 2025), updated for later SEBI/RBI changes up to November 2026.",
  pattern: {
    mcqCount: 90,
    caseletCount: 9,
    totalQuestions: 135,
    totalMarks: 150,
    durationMinutes: 180,
    passPercent: 60,
    negativeMarkingPercent: 25,
  },
  mock: { questionCount: 60, durationMinutes: 80 },
  modules,
  chapters,
  introVideo,
  practiceVideos,
};
