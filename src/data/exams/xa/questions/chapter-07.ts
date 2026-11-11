import type { Question } from "@/data/types";

export const chapter07Questions: Question[] = [
  {
    id: "c07-q01",
    question: "Equity shareholders of a company are best described as:",
    options: [
      "Residual claim holders, paid only after all contractual claims are met",
      "Creditors entitled to a fixed periodic interest payment on their capital",
      "Claimants who rank ahead of lenders when the company is liquidated",
      "Investors entitled to a dividend guaranteed by the company each year",
    ],
    answer: 0,
    explanation:
      "The workbook describes equity shareholders as residual owners. They are entitled to what is left of the firm's profits and assets after other contractual claims are met. They have no guaranteed dividend and rank last, not first, in liquidation.",
  },
  {
    id: "c07-q02",
    question: "The 'time diversification' benefit of equity investing refers to the idea that:",
    options: [
      "Spreading purchases over different days in a month removes all market risk",
      "Holding stocks listed in different time zones eliminates currency risk entirely",
      "Return fluctuations tend to cancel out, so longer holding periods diversify more risk",
      "Short holding periods give better risk-adjusted equity returns than long holding periods",
    ],
    answer: 2,
    explanation:
      "Time diversification is the notion that ups and downs in returns tend to offset each other over time. That is why the workbook says equities give better risk-adjusted returns when held for long periods. It does not remove market risk.",
  },
  {
    id: "c07-q03",
    question:
      "A company has 8% cumulative preference shares of face value ₹100. It paid no preference dividend for two years because of losses and returns to profit in the third year. How much must it pay per preference share that year before any equity dividend can be paid?",
    options: ["₹8", "₹24", "₹16", "₹0, as omitted dividends lapse"],
    answer: 1,
    explanation:
      "On cumulative preference shares, unpaid dividends accumulate and must be paid in full later. The company owes two years of arrears (2 × ₹8 = ₹16) plus the current year's ₹8, a total of ₹24 per share. A non-cumulative holder would get only the current ₹8, because omitted dividends are lost.",
  },
  {
    id: "c07-q04",
    question: "A participating preference share gives its holder the right to:",
    options: [
      "Vote on all company matters exactly like an ordinary equity shareholder",
      "Convert the shares into a specified number of equity shares at a future date",
      "Receive dividends only at a fixed rate that is unrelated to the company's earnings",
      "Receive the specified dividend plus an extra dividend on prespecified conditions",
    ],
    answer: 3,
    explanation:
      "Participating preference shares pay the specified dividend plus an additional dividend linked to prespecified conditions. A fixed dividend unrelated to earnings describes a non-participating share. The right to convert describes a convertible preference share.",
  },
  {
    id: "c07-q05",
    question:
      "Tata Motors was one of the first Indian companies to issue shares with Differential Voting Rights (DVRs) in 2008. These DVRs carried:",
    options: [
      "10 votes per share and a 5% lower dividend than ordinary shares",
      "1/10 voting rights and a 5% higher dividend than ordinary shares",
      "No voting rights and a fixed dividend like preference shares",
      "Equal voting rights but a 10% higher dividend than ordinary shares",
    ],
    answer: 1,
    explanation:
      "The workbook says the Tata Motors DVRs carried one-tenth of the voting rights of an ordinary share and a 5% higher dividend. They are an example of shares with inferior voting rights and a better dividend.",
  },
  {
    id: "c07-q06",
    question: "Which statement about debt (fixed income) instruments is correct, as per the workbook?",
    options: [
      "Government securities form only a small part of the debt market, in India and around the world",
      "The bigger part of corporate borrowing in India is through listed debt traded on stock exchanges",
      "A debt contract can provide only for fixed periodic interest payments, not any other cash flow pattern",
      "A debt contract also sets the borrower's obligations and the holder's rights if the borrower defaults",
    ],
    answer: 3,
    explanation:
      "Besides the promised cash flows, a debt contract sets out the financial requirements and restrictions on the borrower and the holder's rights on default. Government securities are the largest part of the debt market, a bigger share of corporate borrowing is unlisted, and the parties can negotiate almost any cash flow arrangement.",
  },
  {
    id: "c07-q07",
    question:
      "A 10-year AA-rated corporate bond yields 8.65% when the 10-year Government security yields 7.15%. What is the credit spread on the corporate bond?",
    options: [
      "150 basis points",
      "15 basis points",
      "1,580 basis points",
      "865 basis points",
    ],
    answer: 0,
    explanation:
      "Credit spread is the corporate yield minus the yield on a government security of the same maturity: 8.65% - 7.15% = 1.50%, or 150 basis points. It is the risk premium investors demand for bearing default risk.",
  },
  {
    id: "c07-q08",
    question: "On the rating scale used by SEBI-registered rating agencies, which is the lowest rating at which a bond is still classified as investment grade by market convention?",
    options: ["AA", "A", "BBB", "BB"],
    answer: 2,
    explanation:
      "Bonds rated BBB and above are investment grade. Bonds rated below BBB, starting with BB (moderate risk), are classified as high yield or junk bonds.",
  },
  {
    id: "c07-q09",
    question: "Which of the following is a hard commodity?",
    options: [
      "Soybean oil",
      "Sugar",
      "Copper",
      "Wheat",
    ],
    answer: 2,
    explanation:
      "Hard commodities are mined, such as gold, silver, oil, copper and aluminium. Soft commodities such as sugar, soybean oil and wheat are grown, and they are perishable and more volatile.",
  },
  {
    id: "c07-q10",
    question: "An investor holds physical gold as part of her portfolio. Her return from this holding will come from:",
    options: [
      "Periodic interest income plus capital appreciation on the metal held",
      "Dividends declared by gold producers",
      "Rental yield on the stored metal",
      "Capital appreciation only, as gold generates no current income",
    ],
    answer: 3,
    explanation:
      "Unlike most financial investments, commodities such as gold produce no current income. The investor relies only on capital appreciation. Gold is still valued as a safe haven and for its diversification benefit.",
  },
  {
    id: "c07-q11",
    question: "Which statement about structured products is correct?",
    options: [
      "They rely heavily on derivatives and should not be treated as guaranteed-return products",
      "They always guarantee 100% protection of the capital invested, whatever the market conditions",
      "They are standardised retail products with small minimum investment sizes",
      "They can be linked only to equity market indices, not to currencies or commodities",
    ],
    answer: 0,
    explanation:
      "Structured products rely heavily on derivatives and can be linked to indices, currencies, interest rates or commodities. They require larger investment amounts and may offer anywhere from 0% to 100% protection. The workbook warns that they must not be taken as capital-protected or assured-return products; the most common structured product is the market linked debenture.",
  },
  {
    id: "c07-q12",
    question:
      "Securities of companies that are in financial distress or near bankruptcy, often available at large discounts, are also referred to as:",
    options: ["Blue chips", "Fallen angels", "Gilt-edged securities", "Hybrid securities"],
    answer: 1,
    explanation:
      "The workbook says distressed securities are also called 'fallen angels'. Many funds and institutions are not allowed to hold them because of the high risk, but they are popular with hedge fund managers who have deep valuation and credit expertise.",
  },
  {
    id: "c07-q13",
    question:
      "Under the Liberalised Remittance Scheme (LRS), as stated in the workbook, a resident individual can invest abroad up to:",
    options: ["$250,000 every year", "$100,000 every year", "$25,000 every year", "$500,000 over a lifetime"],
    answer: 0,
    explanation:
      "Under LRS an individual can invest up to $250,000 abroad every year. The workbook notes that this route gives both geographical and currency diversification.",
  },
  {
    id: "c07-q14",
    question:
      "A high net worth individual has ₹60 lakh to invest through a professionally managed vehicle other than a mutual fund. Based on the minimum investment limits in the workbook, which option can she use?",
    options: [
      "An Alternative Investment Fund only",
      "Both an Alternative Investment Fund and a Portfolio Management Service",
      "Neither, because both require at least ₹1 crore",
      "A Portfolio Management Service, but not an Alternative Investment Fund",
    ],
    answer: 3,
    explanation:
      "The minimum investment is ₹50 lakh for PMS and ₹1 crore for an AIF. With ₹60 lakh she meets the PMS threshold but falls short of the AIF threshold.",
  },
  {
    id: "c07-q15",
    question: "Why are mutual funds regulated more stringently than Alternative Investment Funds (AIFs) and PMS?",
    options: [
      "Because mutual funds may guarantee returns, so SEBI must check their capital every day",
      "Because AIFs and PMS are regulated by RBI rather than SEBI, under much lighter norms",
      "Because they serve retail investors, while AIF and PMS clients should understand complex risks",
      "Because mutual funds invest only in government securities and bank deposits, unlike AIFs and PMS",
    ],
    answer: 2,
    explanation:
      "All three are regulated by SEBI, but mutual funds face high-touch regulation because they cater to retail investors. AIFs and PMS serve institutions and high net worth investors (minimum ₹1 crore and ₹50 lakh) who are expected to understand complex strategies, so they have light-touch regulation and fewer investment restrictions.",
  },
  {
    id: "c07-q16",
    question: "Which statement about shares with Differential Voting Rights (DVRs) in India is correct, as per the workbook?",
    options: [
      "They were first permitted in 2015 and are now issued widely by Indian companies",
      "They have been permitted since 2000 but have seen limited adoption in India",
      "They must always carry superior voting rights together with a lower dividend",
      "They can be issued only by public sector companies with government approval",
    ],
    answer: 1,
    explanation:
      "DVRs may carry superior or inferior voting rights or differential dividends. They are common in the West, but in India they have seen limited adoption despite being permitted since 2000. Tata Motors, Pantaloons Retail, Gujarat NRE Coke and Jain Irrigation are among the issuers.",
  },
  {
    id: "c07-q17",
    question: "Preference shares are referred to as hybrid or blended securities because they:",
    options: [
      "Are issued jointly by a company and its bankers under a single offer document",
      "Carry full voting rights like equity shares and a fixed coupon like bonds",
      "Share some features of equity and some of debt, such as a fixed dividend",
      "Can be traded both on stock exchanges and in the call money market",
    ],
    answer: 2,
    explanation:
      "Preference shares have characteristics of both equity and debt: they can be perpetual like equity, but pay a fixed dividend like debt and rank above equity for dividends and in liquidation. They generally do not carry voting rights unless stated otherwise.",
  },
  {
    id: "c07-q18",
    question: "Which of the following is true of soft commodities such as wheat, sugar and soybean oil?",
    options: [
      "They are perishable, volatile and have historically shown low correlation with stocks and bonds",
      "They are mined, store value well and are held for centuries by central banks as reserve assets",
      "Their prices depend mainly on global interest rates, and weather has little effect on them",
      "They provide investors with a regular income in the form of rental yield on stored stock",
    ],
    answer: 0,
    explanation:
      "Soft commodities are grown, perishable and highly volatile, and weather prediction matters when investing in them. Their historically low correlation with stocks and bonds gives diversification benefits. Mined hard commodities such as gold and silver have been held as reserve assets.",
  },
  {
    id: "c07-q19",
    question:
      "An investor wants exposure to commercial real estate but does not have the large sum that buying a property needs. Which option does the workbook point to?",
    options: [
      "Buying gold coins from a dealer, since gold is also a real asset",
      "Buying market linked debentures issued by a cement company",
      "Buying the distressed bonds of a real estate developer at a discount",
      "Investing through a Real Estate Investment Trust (REIT) or real estate fund",
    ],
    answer: 3,
    explanation:
      "Real estate usually needs large commitments. The workbook notes that real estate funds and REITs let investors take exposure to the asset class with smaller outflows. Real estate is a long-term investment that offers diversification and has been a good inflation hedge.",
  },
  {
    id: "c07-q20",
    question: "As per the workbook, which is the most common form of structured product?",
    options: [
      "Sovereign Gold Bond",
      "Market Linked Debenture (MLD)",
      "91-day Treasury Bill",
      "Real Estate Investment Trust unit",
    ],
    answer: 1,
    explanation:
      "Structured products use derivatives to create risk exposures linked to indices, currencies, interest rates or commodities, and the most common form is the Market Linked Debenture. They need large investments and offer anywhere from 0% to 100% protection.",
  },
  {
    id: "c07-q21",
    question: "Which statement about investing in art, paintings and rare collectibles is correct?",
    options: [
      "The market is regulated by SEBI, and prices of works are standardised across dealers",
      "These investments give regular rental income in addition to capital appreciation",
      "They are highly liquid and move closely in line with equity and bond prices",
      "The reward is only capital appreciation, and the market is unregulated and illiquid",
    ],
    answer: 3,
    explanation:
      "Art and collectibles provide no income, so, like gold, capital appreciation is the only reward. Each work is unique, the market is unregulated and relatively illiquid, and specialised knowledge is needed because of information asymmetry. Their low correlation with equities and bonds gives diversification benefits.",
  },
  {
    id: "c07-q22",
    question: "After SEBI's regulations for investment advisers came into force in 2013, which statement is correct?",
    options: [
      "Only SEBI-registered investment advisers, paid fees by investors, can act as 'advisers'",
      "Mutual fund distributors can still call themselves advisers if they earn commission",
      "Insurance agents and share brokers automatically became registered investment advisers",
      "Investment advisers are accountable to the product manufacturers that pay them",
    ],
    answer: 0,
    explanation:
      "Under the 2013 regulations, only qualified professionals registered with SEBI as investment advisers can act as advisers, and they are paid fees by the investors who hire them. Distributors, brokers and insurance agents can no longer claim the title, and advisers are accountable only to their clients.",
  },
  {
    id: "c07-q23",
    question: "Which of the following is a non-financial investment?",
    options: [
      "Debentures of a listed company",
      "Equity shares bought on an exchange",
      "Gold held in physical form",
      "Treasury bills of the Central Government",
    ],
    answer: 2,
    explanation:
      "The workbook classifies investments as financial or non-financial. Non-financial investments include real estate, gold and other commodities, while financial instruments such as shares, debentures and treasury bills are claims on future cash flows.",
  },
  {
    id: "c07-q24",
    question: "On the rating scale of SEBI-registered rating agencies, what does a 'BB' rating indicate?",
    options: [
      "Moderate safety regarding timely servicing of financial obligations",
      "Moderate risk of default regarding timely servicing of obligations",
      "High safety regarding timely servicing, with very low credit risk",
      "That the instrument is in default or expected to default soon",
    ],
    answer: 1,
    explanation:
      "BB denotes moderate risk of default, the first grade below investment grade. BBB denotes moderate safety, AA high safety and D default.",
  },
  {
    id: "c07-q25",
    question: "When financial investments are classified by their maturity profile, the two categories are:",
    options: [
      "Debt instruments and equity instruments",
      "Public markets and private markets",
      "Financial and non-financial investments",
      "Capital market and money market",
    ],
    answer: 3,
    explanation:
      "The workbook classifies financial investments by claims on cash flows (debt and equity), by the markets they trade in (public and private) and by maturity profile (capital market and money market).",
  },
];
