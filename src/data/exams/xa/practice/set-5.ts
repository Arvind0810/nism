import type { PracticeSet } from "@/data/types";

export const practiceSet5: PracticeSet = {
  id: "set-5",
  title: "Practice Set 5",
  durationMinutes: 60,
  questions: [
    {
      id: "s5-q01",
      chapterNumber: 18,
      question: "Can an Investment Adviser accept cash from clients as advisory fees?",
      options: ["Yes, they can accept cash", "No, they cannot accept cash"],
      answer: 1,
      explanation:
        "SEBI's conduct requirements for investment advisers include receiving fees through banking channels only (cheque, demand draft, NEFT/RTGS/IMPS/UPI and similar), so cash payment of advisory fees is not allowed. Clients are also advised to keep signed receipts for the fees they pay.",
    },
    {
      id: "s5-q02",
      chapterNumber: 5,
      question:
        "Which life insurance product is a pure risk protection product with no benefit payable on maturity?",
      options: ["Endowment policy", "Term insurance", "Whole life policy", "Unit linked insurance plan"],
      answer: 1,
      explanation:
        "The workbook describes term insurance as a pure risk protection product: the sum assured is paid only if the insured event (death of the life insured) occurs during the term, and nothing is paid on maturity.\nEndowment and whole life policies have a savings component, and ULIPs combine risk cover with investment.",
    },
    {
      id: "s5-q03",
      chapterNumber: 5,
      question: "In a unit linked insurance product, how is the premium paid by the policyholder used?",
      options: [
        "The entire premium is used only for risk cover",
        "The entire premium is invested in bank fixed deposits",
        "A portion is used for risk cover and the rest is invested, with returns linked to the performance of the portfolio",
        "The premium earns a fixed return guaranteed by IRDAI",
      ],
      answer: 2,
      explanation:
        "Variable and unit linked insurance products combine risk protection and investment: a portion of the premium buys risk cover and the remaining portion is invested to earn returns linked to an index or to the performance of the portfolio.",
    },
    {
      id: "s5-q04",
      chapterNumber: 11,
      question:
        "Which of the following is different between the regular plan and the direct plan of a mutual fund scheme?",
      options: ["The Net Asset Value (NAV)", "Returns", "Expense ratio", "All of the above"],
      answer: 3,
      explanation:
        "Both plans hold the same portfolio, but the direct plan pays no distributor commission, so its expense ratio is lower. The lower expenses give the direct plan a separate, higher NAV and a higher net return to the investor.",
    },
    {
      id: "s5-q05",
      chapterNumber: 12,
      question:
        "Which of the following is NOT a type of portfolio management service under SEBI's Portfolio Managers Regulations?",
      options: ["Discretionary", "Pooled (collective) scheme", "Non-discretionary", "Advisory"],
      answer: 1,
      explanation:
        "The workbook lists three types of PMS: discretionary, non-discretionary and advisory. A discretionary portfolio manager must manage each client's funds individually and independently, in a manner that does not take on the character of a mutual fund, so a pooled scheme is not a PMS type.",
    },
    {
      id: "s5-q06",
      chapterNumber: 8,
      question: "What makes diversification of risk in equity markets possible?",
      options: [
        "Each company diversifying into many businesses",
        "All sectors moving together with economic indicators",
        "All businesses responding to a recession in the same way",
        "Business cycles and counter-cyclical businesses, with sectors and countries leading or lagging the economic cycle",
      ],
      answer: 3,
      explanation:
        "The workbook explains that underlying diversification is the concept of business cycles and counter-cyclical businesses, and the lead and lag between investment returns and economic performance. Because businesses do not all peak and trough together, holding many of them reduces risk.\nIf all sectors moved together, diversification would not reduce risk.",
    },
    {
      id: "s5-q07",
      chapterNumber: 15,
      question: "What need should drive the asset allocation decision in a portfolio?",
      options: [
        "The need to maximise returns",
        "The need to reach the goals of the investor",
        "The need to minimise risk",
        "All of the above",
      ],
      answer: 1,
      explanation:
        "Asset allocation is the translation of the investor's objectives and constraints into asset weights, so it should be driven by the investor's goals. Maximising return or minimising risk on its own ignores what the money is meant to achieve.",
    },
    {
      id: "s5-q08",
      chapterNumber: 12,
      question:
        "Why are the returns of an investor who uses the direct access facility of a PMS likely to be higher than under the regular plan?",
      options: [
        "Due to lower distribution costs",
        "Due to lower fixed costs",
        "Due to lower portfolio management costs",
        "All of the above",
      ],
      answer: 0,
      explanation:
        "Under the direct access facility no distributor is involved, so no distribution commission is paid and the expenses charged to the investor are lower. The management of the portfolio does not change, so the saving comes only from distribution costs.",
    },
    {
      id: "s5-q09",
      chapterNumber: 17,
      question: "What is the limit for making cash payments for mutual fund investments?",
      options: [
        "₹50,000 per year per investor per mutual fund",
        "₹50,000 per year per investor",
        "₹1,00,000 per year per investor per mutual fund",
        "₹1,00,000 per year per investor",
      ],
      answer: 0,
      explanation:
        "The workbook states that mutual funds accept cash up to ₹50,000 per investor per mutual fund per financial year. The limit applies separately to each fund house, not across all mutual funds.",
    },
    {
      id: "s5-q10",
      chapterNumber: 12,
      question:
        "What is the minimum net worth a portfolio manager must have to obtain registration from SEBI?",
      options: ["₹50 lakh", "₹2 crore", "₹5 crore", "₹10 crore"],
      answer: 2,
      explanation:
        "One of the conditions SEBI considers before granting registration is that the applicant fulfils the net worth requirement of ₹5 crore.\n₹50 lakh is the minimum investment by a PMS client, not the portfolio manager's net worth.",
    },
    {
      id: "s5-q11",
      chapterNumber: 20,
      question: "Which of the following complaints can be taken to the Insurance Ombudsman?",
      options: [
        "A dispute about the NAV of a mutual fund scheme",
        "A complaint against a stock broker",
        "A delay in settlement of an insurance claim",
        "A dispute over interest on a bank fixed deposit",
      ],
      answer: 2,
      explanation:
        "The grounds for approaching the Insurance Ombudsman include partial or total repudiation of claims, disputes about premium, disputes on the legal construction of policies relating to claims, delay in settlement of claims and non-issue of insurance documents after payment of premium.\nMutual fund and stock broker complaints go to SEBI's mechanisms, and bank complaints go to the RBI Ombudsman.",
    },
    {
      id: "s5-q12",
      chapterNumber: 11,
      question:
        "Which of these is relevant when an investment adviser helps a client choose between the regular plan and the direct plan of a mutual fund?",
      options: [
        "The investor should get a cost-effective investment option",
        "The investor should be able to commit the time needed to complete the investment process",
        "The investor should have the long-term ability to execute transactions and monitor the investments",
        "All of the above",
      ],
      answer: 3,
      explanation:
        "The workbook says cost is only one angle. The direct plan is a 'do it yourself' route with no one to help, so the adviser must check whether the investor has the knowledge, time and long-term ability to transact and monitor the investments before recommending it over a regular plan.",
    },
    {
      id: "s5-q13",
      chapterNumber: 18,
      question: "Which Act empowers SEBI to impose penalties on securities market intermediaries?",
      options: [
        "SEBI Act",
        "Securities Contracts (Regulation) Act",
        "Prohibition of Fraudulent and Unfair Trade Practices Regulations",
        "Stock Exchange Regulation Act",
      ],
      answer: 0,
      explanation:
        "The SEBI Act empowers SEBI to impose penalties and initiate adjudication proceedings against intermediaries for defaults such as failure to furnish information or returns, or failure to enter into agreements with clients.",
    },
    {
      id: "s5-q14",
      chapterNumber: 19,
      question:
        "Which of the following can cause an investment adviser-client relationship to fall short of the high ethical standards expected of it?",
      options: [
        "The adviser's lack of focus on understanding the client's specific situation and needs",
        "The adviser completing risk profiling before giving advice",
        "The adviser explaining the risks of a product before the client invests",
        "The adviser providing consistent after-sales service",
      ],
      answer: 0,
      explanation:
        "The workbook lists the main problem areas in the advisory business, starting with the adviser's lack of focus on understanding client-specific situations or needs. Others include poor product knowledge, churning, not disclosing risks and poor after-sales service.\nThe other three options are good practices, not failings.",
    },
    {
      id: "s5-q15",
      chapterNumber: 10,
      question: "What is the maximum profit a person can make from a short position in a put option?",
      options: [
        "Unlimited profit, but only if the share price goes up",
        "Unlimited profit in a flat market",
        "Only the option premium received",
      ],
      answer: 2,
      explanation:
        "The workbook states that an option writer's maximum profit is the premium received. The writer of a put carries the obligation to buy at the strike price, so the loss can be large: up to the strike price minus the premium if the share falls to zero.",
    },
    {
      id: "s5-q16",
      chapterNumber: 8,
      question: "What is 'impact cost' with reference to the equity market?",
      options: [
        "The percentage price movement caused by a particular order size from the average of the best bid and offer prices",
        "A cost that is higher for stocks that are thinly traded",
        "A measure of liquidity risk",
        "All of the above",
      ],
      answer: 3,
      explanation:
        "The workbook says liquidity risk is measured by impact cost, which is the percentage price movement caused by a particular order size from the average of the best bid and offer prices. Less liquid stocks are thinly traded, so a large order moves their price more and they have higher impact costs.",
    },
    {
      id: "s5-q17",
      chapterNumber: 18,
      question: "Who pays a SEBI-registered investment adviser for the advice given?",
      options: [
        "The agency that employs the adviser",
        "The manufacturer of the product recommended by the adviser",
        "The investor who is seeking the investment advice",
        "Any of the above, depending on the contract with the investor",
      ],
      answer: 2,
      explanation:
        "Under the IA Regulations, an investment adviser shall not receive any consideration, by way of remuneration, compensation or in any other form, from any person other than the client being advised, in respect of the products or securities on which advice is given.",
    },
    {
      id: "s5-q18",
      chapterNumber: 7,
      question:
        "Structured products use ________ instruments to tailor their risk and return features.",
      options: ["Derivative", "Index exposure", "Mutual fund exposure", "All of the above"],
      answer: 0,
      explanation:
        "Structured products are customised investments that make extensive use of derivatives to create the desired risk exposure. Their returns may be linked to indices, baskets of stocks, currencies, interest rates or commodities, but the tailoring is done through derivatives.",
    },
    {
      id: "s5-q19",
      chapterNumber: 16,
      question: "Which is the most important attribute when choosing a comparable benchmark index?",
      options: [
        "Easy understandability",
        "Measurability of performance",
        "Number of securities",
        "Consistency with the portfolio's investment approach",
      ],
      answer: 3,
      explanation:
        "A benchmark is a collection of securities or risk factors that represents the investment characteristics and investment approach of the portfolio being evaluated. For example, a blue-chip or value portfolio should be compared with a blue-chip or value benchmark. The number of securities is not a criterion.",
    },
    {
      id: "s5-q20",
      chapterNumber: 13,
      question: "Which of the following is likely to be a Category II Alternative Investment Fund?",
      options: ["Hedge fund", "Private debt fund", "Angel fund", "SME fund"],
      answer: 1,
      explanation:
        "Category II AIFs are those not in Category I or III that do not use leverage except for day-to-day needs, such as private equity funds and debt funds that get no special incentives.\nHedge funds are Category III. Angel funds and SME funds are sub-categories of Category I.",
    },
    {
      id: "s5-q21",
      chapterNumber: 7,
      question: "What are 'fallen angels'?",
      options: [
        "Structured securities",
        "Distressed securities",
        "Distressed investors",
        "Shares trading at their 52-week low",
      ],
      answer: 1,
      explanation:
        "Distressed securities are the securities of companies in financial distress or near bankruptcy. The workbook says they are also called 'fallen angels', and many types of funds and institutional investors are prohibited from holding them because of the high risk.",
    },
    {
      id: "s5-q22",
      chapterNumber: 10,
      question:
        "A Nifty futures contract is described as FUTIDX NIFTY 26 AUG 2021. What does the date 26 August 2021 signify?",
      options: [
        "The midpoint of the contract's start and end dates",
        "The first trading day of the contract",
        "The contract's expiry date",
        "Nothing; it is an arbitrary date fixed by the exchange",
      ],
      answer: 2,
      explanation:
        "FUTIDX denotes futures on an index such as the Nifty. The date in the contract description is the expiry date, which is the last trading day of the contract.",
    },
    {
      id: "s5-q23",
      chapterNumber: 12,
      question:
        "In a discretionary portfolio management service, who decides how the portfolio is constructed?",
      options: [
        "The client",
        "The portfolio manager",
        "The portfolio manager and the client jointly",
        "A research analyst",
      ],
      answer: 1,
      explanation:
        "A discretionary portfolio manager exercises discretion over the investment of the client's funds and manages each client's portfolio individually and independently under the contract.\nIn a non-discretionary service the client gives the directions, and in an advisory service the client decides and executes.",
    },
    {
      id: "s5-q24",
      chapterNumber: 5,
      question: "Which statement about investors holding shares in physical (paper) form is TRUE?",
      options: [
        "The shares can be traded in physical form on stock exchanges if the company informs SEBI",
        "An investor holding more than 1,000 shares of a company may trade them in physical form",
        "Physical shares give the holder no legal rights in the company",
        "Investors can hold shares in physical form but must dematerialise them before selling on a stock exchange",
      ],
      answer: 3,
      explanation:
        "To be eligible for trading in the secondary market, a security must be held in electronic (dematerialised) form. Physical shares remain valid evidence of ownership, but they have to be dematerialised through a depository participant before they can be sold on an exchange.",
    },
    {
      id: "s5-q25",
      chapterNumber: 12,
      question:
        "When applying for registration as a portfolio manager, detailed information about which of these need NOT be provided?",
      options: ["Compliance officer", "HR officer", "Key management personnel", "Principal officer"],
      answer: 1,
      explanation:
        "The application in Form A covers the organisation structure and key personnel. Before granting registration, SEBI checks that a compliance officer has been appointed and that the principal officer has the required qualification, experience and NISM certification. An HR officer is not a specified requirement.",
    },
    {
      id: "s5-q26",
      chapterNumber: 19,
      question: "Which of these is an example of ethical action by an investment adviser?",
      options: [
        "Advising the client only on how to maximise returns",
        "Advising the client on how to bypass tax laws to save money",
        "Giving the same degree of attention to a large client and a small client",
        "All of the above",
      ],
      answer: 2,
      explanation:
        "Ethics rests on principles such as honesty, fairness, diligence and care, so treating clients fairly regardless of their size is ethical.\nBypassing tax laws is unethical and illegal, and focusing only on maximising returns ignores suitability and the client's goals.",
    },
    {
      id: "s5-q27",
      chapterNumber: 9,
      question:
        "A G-Sec originally issued with a 6-year maturity now has 4 months left to maturity. How will it be classified?",
      options: ["Long-term bond", "Short-term bond", "Money market security", "None of the above"],
      answer: 2,
      explanation:
        "The workbook classifies bonds by remaining term to maturity: those with a year or less to maturity are money market securities, and those with more than a year are capital market securities. Long-term bonds become money market securities as they approach maturity.",
    },
    {
      id: "s5-q28",
      chapterNumber: 13,
      question: "In what form is an investor's holding in an Alternative Investment Fund (AIF) denoted?",
      options: ["Shares", "Units", "Bonds", "Any of these, depending on the type of AIF"],
      answer: 1,
      explanation:
        "Under the AIF Regulations, an AIF may raise funds from any investor, whether Indian, foreign or non-resident Indian, by way of issue of units.",
    },
    {
      id: "s5-q29",
      chapterNumber: 17,
      question:
        "Whose name is entered in the Register of Members (RoM) of the company when a share is dematerialised?",
      options: [
        "The investor",
        "The depository",
        "The stock broker",
        "The depository participant",
      ],
      answer: 1,
      explanation:
        "On dematerialisation, the depository's name replaces the investor's name in the company's Register of Members to the extent of the securities dematerialised. The investor's demat account with the DP is then credited with the shares.",
    },
    {
      id: "s5-q30",
      chapterNumber: 15,
      question: "The investment objective of an investor in the consolidation phase is likely to be:",
      options: ["Regular income", "Capital preservation", "Capital appreciation", "Tax planning"],
      answer: 1,
      explanation:
        "In the consolidation (mid-to-late career) phase, income exceeds expenses and the portfolio is consolidated. With retirement still 15-20 years away, investors start looking for capital preservation and balance high capital gain investments with lower-risk assets.",
    },
    {
      id: "s5-q31",
      chapterNumber: 16,
      question: "How is market risk in a portfolio measured?",
      options: ["R-squared", "Alpha", "Beta", "Theta"],
      answer: 2,
      explanation:
        "Market (systematic) risk cannot be diversified away and is measured by beta, which relates the return of a stock or portfolio to the return of the market.\nAlpha is the reward for unsystematic risk, and theta is an option's sensitivity to time.",
    },
    {
      id: "s5-q32",
      chapterNumber: 9,
      question: "For what periods are Treasury Bills (T-Bills) issued?",
      options: ["60 days to 365 days", "91 days to 364 days"],
      answer: 1,
      explanation:
        "The central government issues T-Bills with maturities of 91 days, 182 days and 364 days. Even shorter-term needs are met through Cash Management Bills, which mature within 91 days.",
    },
    {
      id: "s5-q33",
      chapterNumber: 9,
      question:
        "A bond with a face value of ₹100 pays an annual coupon of ₹7 and its market price is ₹103. What is its coupon yield?",
      options: ["7%", "5.09%", "6.80%", "8.55%"],
      answer: 0,
      explanation:
        "Coupon yield = Coupon / Face value = 7 / 100 = 7%.\nCurrent yield is different: Coupon / Market price = 7 / 103 = 6.80%.",
    },
    {
      id: "s5-q34",
      chapterNumber: 18,
      question:
        "An individual investment adviser cannot offer a client both advisory and ________ services.",
      options: ["Fund advisory", "Retirement planning", "Distribution"],
      answer: 2,
      explanation:
        "Under the IA Regulations, an individual investment adviser shall not provide distribution services, and the adviser's family shall not provide distribution services to the adviser's advisory clients. A non-individual adviser must segregate advisory and distribution clients at the group level.",
    },
    {
      id: "s5-q35",
      chapterNumber: 6,
      question: "Are all primary market issues compulsorily public issues?",
      options: ["Yes", "No"],
      answer: 1,
      explanation:
        "The workbook states that all primary market issues need not be public issues. Securities can also be issued privately, for example shares issued to promoters when a company is set up, bonds placed with lending institutions, or private placements to a select group of investors.",
    },
    {
      id: "s5-q36",
      chapterNumber: 13,
      question: "Exchange Traded Funds (ETFs) are classified as ________ investments.",
      options: ["Alternative", "New-age", "Traditional", "General"],
      answer: 2,
      explanation:
        "The workbook defines traditional investments as financial securities such as stocks and bonds, general categories of mutual fund units and ETFs. Their common feature is liquidity. Alternative investments are those outside these traditional avenues.",
    },
    {
      id: "s5-q37",
      chapterNumber: 11,
      question: "The interest rate risk of a debt fund depends mainly on:",
      options: [
        "The credit quality of the portfolio",
        "The size of the fund's assets under management",
        "The tenor (maturity) of the securities held",
        "None of the above",
      ],
      answer: 2,
      explanation:
        "Bond prices move inversely to interest rates, and longer-maturity bonds react more. So debt funds holding longer-tenor securities carry higher interest rate risk; for example, long-term gilt funds carry more than short-term gilt funds.\nCredit quality drives credit risk, not interest rate risk.",
    },
    {
      id: "s5-q38",
      chapterNumber: 5,
      question: "The investment of funds by insurance companies is regulated by norms laid down by:",
      options: [
        "Insurance Regulatory and Development Authority of India (IRDAI)",
        "RBI for debt investments and SEBI for equity investments",
        "Ministry of Finance",
        "Securities and Exchange Board of India",
      ],
      answer: 0,
      explanation:
        "IRDAI is the regulator of the insurance market. It registers insurers, clears products, licenses intermediaries and lays down norms, including investment norms, to protect policyholders' interests.",
    },
    {
      id: "s5-q39",
      chapterNumber: 1,
      question: "Which of the following is NOT part of the financial planning process?",
      options: [
        "Developing financial planning recommendations",
        "Setting goals",
        "Financing the investments",
        "Monitoring the investments",
      ],
      answer: 2,
      explanation:
        "The six-step process is: establish the client-planner relationship, gather client data including goals, analyse the financial status, develop and present recommendations, implement them, and monitor them. Financing the investments is not a step.",
    },
    {
      id: "s5-q40",
      chapterNumber: 20,
      question: "The Integrated Grievance Management System (IGMS) is used for complaints related to:",
      options: ["Insurance", "Pension", "Stocks", "Mutual funds"],
      answer: 0,
      explanation:
        "If an insurance grievance is not resolved satisfactorily, it can be escalated to IRDAI through IGMS, IRDAI's online system for registering and tracking policyholder complaints.\nComplaints about stocks and mutual funds go to SEBI SCORES instead.",
    },
    {
      id: "s5-q41",
      chapterNumber: 10,
      question: "A forward contract ________ the price uncertainty for both the buyer and the seller.",
      options: ["Increases", "Reduces", "Has no effect on", "Has a marginal effect on"],
      answer: 1,
      explanation:
        "A forward contract is an agreement between two parties to buy or sell an asset on a future date on terms fixed today. Locking in the price removes future price uncertainty for both sides, which is why forwards are used for hedging.",
    },
    {
      id: "s5-q42",
      chapterNumber: 15,
      question: "Which of these investment decisions is taken most frequently?",
      options: [
        "Classifying investors using psychographic analysis",
        "Selecting individual assets for a portfolio",
        "Strategic asset allocation",
        "Tactical asset allocation",
      ],
      answer: 3,
      explanation:
        "Strategic asset allocation is the long-term policy mix. Tactical asset allocation consists of short-term decisions within the SAA framework, temporarily shifting money between asset classes to exploit market opportunities, so it is revisited far more often.",
    },
    {
      id: "s5-q43",
      chapterNumber: 15,
      question:
        "What is the correct sequence of the investment process guided by the Investment Policy Statement (IPS)?",
      options: [
        "Investment objectives → Asset allocation → Investments",
        "Investments → Asset allocation → Investment objectives",
        "Asset allocation → Investment objectives → Investments",
        "The sequence can be changed to suit each goal",
      ],
      answer: 0,
      explanation:
        "The IPS first sets out the investor's objectives and constraints. Strategic asset allocation then translates the IPS into asset weights, and specific securities are selected within each asset class.",
    },
    {
      id: "s5-q44",
      chapterNumber: 19,
      question: "What is the significance of the 'Client First' principle in ethical investment advice?",
      options: [
        "It helps advisers avoid compliance scrutiny",
        "It lets advisers skip thorough compliance analysis in their recommendations",
        "It guarantees profitability for advisers",
        "It builds trust by putting the client's best interests above the adviser's own gains",
      ],
      answer: 3,
      explanation:
        "The workbook says that an adviser who puts the client's interest above everything else (the Client First principle) is on the correct ethical path, and that over time this builds client confidence. It reflects the adviser's fiduciary duty, not a way to avoid compliance or guarantee profit.",
    },
    {
      id: "s5-q45",
      chapterNumber: 6,
      question: "Which parties enter into a listing agreement for securities?",
      options: [
        "The stock exchange and the depository",
        "The issuer and the depository",
        "The issuer and the stock exchange",
        "The issuer and SEBI",
      ],
      answer: 2,
      explanation:
        "A listing agreement is entered into between the issuing company and the stock exchange on which its securities are listed. Corporate actions are governed by the Companies Act, 2013, SEBI regulations and the terms of this listing agreement.",
    },
    {
      id: "s5-q46",
      chapterNumber: 11,
      question:
        "Which statement about the direct plan and the regular plan of the same mutual fund scheme is correct?",
      options: [
        "The two plans have different portfolios",
        "The direct plan has a higher expense ratio",
        "The portfolio is the same, but the direct plan has a lower expense ratio",
        "The direct plan can be bought only through a distributor",
      ],
      answer: 2,
      explanation:
        "The portfolio of the regular and direct plans is the same. The direct plan pays no distributor commission, so its expense ratio is lower, and it is bought directly from the fund house or its RTA without a distributor.",
    },
    {
      id: "s5-q47",
      chapterNumber: 9,
      question: "Which of these money market instruments has the shortest tenor?",
      options: ["Term money", "Cash management bills", "Notice money", "Call money"],
      answer: 3,
      explanation:
        "Call money is overnight borrowing and lending.\nNotice money runs 2-14 days, term money 15 days to 1 year, and Cash Management Bills mature within 91 days.",
    },
    {
      id: "s5-q48",
      chapterNumber: 16,
      question: "Which of these is NOT a characteristic of a good benchmark?",
      options: [
        "It should cover all possible securities and sectors in the market",
        "Its constituents and their weights should be clearly defined",
        "Its risk-return profile should be similar to that of the portfolio",
        "It should be investable",
      ],
      answer: 0,
      explanation:
        "A good benchmark has clearly defined constituents and weights, is investable, is consistent with the portfolio's investment approach, has the same risk-return profile as the portfolio, and has measurable performance. It does not need to cover the whole market; it should represent the portfolio being evaluated.",
    },
    {
      id: "s5-q49",
      chapterNumber: 8,
      question:
        "True or False: the output of fundamental analysis of an equity share is its book value.",
      options: ["True", "False"],
      answer: 1,
      explanation:
        "Fundamental analysis determines the intrinsic value of a stock from the fundamentals that drive it. The intrinsic value is then compared with the market price to decide whether to buy, hold or sell.",
    },
    {
      id: "s5-q50",
      chapterNumber: 1,
      question: "Financial planning recommends the asset allocation that:",
      options: [
        "Is best suited to reducing the investor's risk",
        "Can generate the best returns for the investor",
        "Is best suited to the investor's needs",
        "Will help the investor meet goals in the shortest period",
      ],
      answer: 2,
      explanation:
        "Financial planning identifies the client's goals and puts in place an action plan, including an asset allocation suited to the investor's needs, goals and risk profile. Minimising risk or maximising returns on its own is not the aim.",
    },
  ],
};
