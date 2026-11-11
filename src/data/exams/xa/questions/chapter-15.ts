import type { Question } from "@/data/types";

export const chapter15Questions: Question[] = [
  {
    id: "c15-q01",
    question:
      "Asset allocation is best described as:",
    options: [
      "Selecting individual securities within an asset class that are expected to outperform",
      "Timing entry and exit in the market based on short-term forecasts",
      "Deciding how to distribute an investor's wealth across different asset classes",
      "Choosing a benchmark index against which to measure performance",
    ],
    answer: 2,
    explanation:
      "Asset allocation is the process of deciding how to distribute an investor's wealth across asset classes such as equity, bonds and cash. It is the starting point for the investor, and in the long run it largely determines portfolio performance.",
  },
  {
    id: "c15-q02",
    question:
      "Why does the workbook caution against relying solely on past correlation metrics when making asset allocation decisions?",
    options: [
      "Correlations among asset class returns change over time and across economic and market regimes",
      "Correlations between different asset classes are always strongly negative, so they need no estimate",
      "Correlations stay stable over time, so they add nothing new to the asset allocation decision",
      "Correlations matter only for assets within the same asset class, never across asset classes",
    ],
    answer: 0,
    explanation:
      "Correlation is the most relevant factor in reducing portfolio risk, but correlations among asset class returns can and do change over time and in different economic situations. Future correlations may differ from past ones because of changing economic and market regimes, so investors should not depend solely on past metrics.",
  },
  {
    id: "c15-q03",
    question:
      "What is the first step in the portfolio management process?",
    options: [
      "Constructing the portfolio from securities chosen to match market forecasts",
      "Measuring and evaluating performance against a suitable benchmark",
      "Studying current financial conditions and forecasting future trends in the capital markets",
      "Developing a policy statement on the investor's risk appetite, objectives and constraints",
    ],
    answer: 3,
    explanation:
      "The process starts with the policy statement, followed by the study of financial conditions and forecasts, then portfolio construction, then performance measurement and evaluation, with periodic review of the constructed portfolio. It moves from planning through execution to feedback.",
  },
  {
    id: "c15-q04",
    question:
      "Which of the following is a purpose served by an Investment Policy Statement (IPS)?",
    options: [
      "It guarantees the investor a minimum return, which the portfolio manager must make up if missed",
      "It protects the investor against the manager's inappropriate decisions or unethical behaviour",
      "It removes the need for periodic review, since objectives are fixed once the IPS is drafted",
      "It allows the portfolio manager to change the strategy without consulting the investor",
    ],
    answer: 1,
    explanation:
      "The IPS has four purposes: it sets realistic return expectations, supports effective decisions by the manager, provides a framework for evaluating the manager, and protects the investor against inappropriate or unethical decisions. It must be reviewed and updated periodically, and it does not guarantee returns.",
  },
  {
    id: "c15-q05",
    question:
      "A salaried client with a stable income spends ₹60,000 a month. Using the workbook's usual guideline, how much should be kept as an emergency cash reserve?",
    options: [
      "₹1,20,000 to ₹1,80,000",
      "₹60,000",
      "₹3,60,000 to ₹7,20,000",
      "₹30,000 to ₹60,000",
    ],
    answer: 0,
    explanation:
      "The emergency cash reserve is usually measured as two to three months' spending: 2 × ₹60,000 to 3 × ₹60,000 = ₹1.2 lakh to ₹1.8 lakh. More may be needed if the individual's income is volatile or at risk.",
  },
  {
    id: "c15-q06",
    question:
      "Under the RBI's Liberalised Remittance Scheme, which is an example of a regulatory constraint, how much can a resident individual remit overseas?",
    options: [
      "USD 25,000 per financial year",
      "USD 1,00,000 per calendar year",
      "USD 2,50,000 per financial year",
      "No limit, subject to tax compliance",
    ],
    answer: 2,
    explanation:
      "Under the LRS, resident individuals can remit up to USD 2,50,000 per financial year (April to March) for permissible transactions. USD 25,000 was the limit when the scheme was introduced in 2004.",
  },
  {
    id: "c15-q07",
    question:
      "How does ethical investing differ from sustainable (socially conscious) investing, as described in the workbook?",
    options: [
      "Ethical investing considers only governance factors, while sustainable investing considers only environmental factors",
      "Ethical investing ignores non-financial factors and aims purely at maximising risk-adjusted returns",
      "There is no difference; the two terms mean exactly the same thing",
      "Ethical investing is more personalised, using the investor's moral principles as the primary filter",
    ],
    answer: 3,
    explanation:
      "The two terms are often used interchangeably, but sustainable investing screens investments using an overall set of ESG guidelines. Ethical investing is more personalised and uses the investor's moral principles as the primary filter, typically avoiding 'sin' areas.",
  },
  {
    id: "c15-q08",
    question:
      "In sustainable (ESG) investing, which of the following is classified as a governance factor?",
    options: [
      "Workplace safety standards",
      "Executive compensation",
      "Water use",
      "Community development",
    ],
    answer: 1,
    explanation:
      "The workbook lists board independence, board diversity and executive compensation as governance factors. Workplace safety and community development are social factors, and water use is an environmental factor.",
  },
  {
    id: "c15-q09",
    question:
      "A client owns a house worth ₹80 lakh, investments of ₹30 lakh, a car worth ₹6 lakh and savings of ₹4 lakh. He owes ₹35 lakh on a home loan, ₹3 lakh on a car loan and ₹2 lakh on credit cards. What is his net worth?",
    options: [
      "₹1.20 crore",
      "₹1.60 crore",
      "₹85 lakh",
      "₹80 lakh",
    ],
    answer: 3,
    explanation:
      "Net worth = total assets at market value − total liabilities = (₹80 + ₹30 + ₹6 + ₹4) lakh − (₹35 + ₹3 + ₹2) lakh = ₹120 lakh − ₹40 lakh = ₹80 lakh. ₹1.20 crore ignores liabilities, and ₹85 lakh subtracts only the home loan.",
  },
  {
    id: "c15-q10",
    question:
      "Under the Bailard, Biehl & Kaiser (BB&K) framework, an investor who is fairly confident but also careful, methodical and analytical, does his own research, avoids extreme volatility and often takes contrarian positions is classified as:",
    options: [
      "Individualist",
      "Adventurer",
      "Celebrity",
      "Guardian",
    ],
    answer: 0,
    explanation:
      "Individualists combine confidence with a careful, methodical approach. They do their own research and are often contrarian. Adventurers are confident but impetuous and concentrate their bets, while Guardians are cautious wealth preservers.",
  },
  {
    id: "c15-q11",
    question:
      "Which two types of cost should be weighed when deciding how often to rebalance a portfolio?",
    options: [
      "Management fees and custody fees",
      "Opportunity cost and inflation cost",
      "Transaction cost and tax cost",
      "Exit load and entry load",
    ],
    answer: 2,
    explanation:
      "Rebalancing is a trade-off between the cost of rebalancing and the cost of not rebalancing. The costs involved are transaction costs (research, brokerage and so on) and tax costs, because selling appreciated assets triggers tax liability.",
  },
  {
    id: "c15-q12",
    question:
      "A 48-year-old professional's income comfortably exceeds her expenses. She is about 15 years from retirement and is starting to balance her high-growth investments with some lower-risk assets for capital preservation. Which life cycle phase is she in?",
    options: [
      "Accumulation phase",
      "Consolidation phase",
      "Spending phase",
      "Gifting phase",
    ],
    answer: 1,
    explanation:
      "The consolidation (mid-to-late career) phase is when income exceeds expenses and investors begin seeking capital preservation, balancing high capital-gain investments with lower-risk assets. In the spending phase, living expenses are met from accumulated assets rather than earned income.",
  },
  {
    id: "c15-q13",
    question:
      "A client's portfolio has a stable mix of 60% large-cap equity and 40% long-term bonds. Which benchmark is most appropriate for evaluating it?",
    options: [
      "A mid-cap equity index, since mid-caps blend growth with some stability",
      "The NIFTY 50 alone, because large-cap equity is the larger component of the portfolio",
      "A hybrid benchmark mixing a large-cap equity index and a long-term bond index 60:40",
      "A short-term money market index, as the bond portion makes the portfolio conservative",
    ],
    answer: 2,
    explanation:
      "A benchmark should match the composition of the portfolio, comparing like with like. Where there is a stable asset allocation mix, a hybrid benchmark that represents the whole portfolio is more appropriate than a single-asset index.",
  },
  {
    id: "c15-q14",
    question:
      "A portfolio manager believes equities are overvalued and the debt market is undervalued, so she temporarily cuts the equity allocation below the target and increases debt, planning to return to the target weights later. This is an example of:",
    options: [
      "Tactical asset allocation",
      "Strategic asset allocation",
      "Drafting an Investment Policy Statement",
      "Passive indexing",
    ],
    answer: 0,
    explanation:
      "Tactical asset allocation is a short-term shift away from target weights to exploit market discrepancies ('timing the markets'). Strategic asset allocation is the long-term target policy portfolio derived from the IPS ('time in the market').",
  },
  {
    id: "c15-q15",
    question:
      "According to Ibbotson and Kaplan (2000), as cited in the workbook, approximately what percentage of a single fund's variation in returns over time is explained by asset allocation?",
    options: [
      "40%",
      "90%",
      "60%",
      "10%",
    ],
    answer: 1,
    explanation:
      "Asset allocation explains about 90% of a single fund's variation in returns over time. The 40% figure is the average explained across all portfolios (variation between funds), which is a common point of confusion.",
  },
  {
    id: "c15-q16",
    question:
      "Why are exposure limits to specific sectors, entities and asset classes set when constructing a client's portfolio?",
    options: [
      "To ensure the portfolio always mirrors the weights of the NIFTY 50 index",
      "To maximise the tax efficiency of the portfolio's realised capital gains",
      "To let the manager take larger bets in sectors expected to outperform",
      "To avoid concentration risk, after considering the investor's constraints",
    ],
    answer: 3,
    explanation:
      "After taking into account the investor's objective, risk appetite, liquidity needs, tax and regulatory constraints and time horizon, exposure limits to specific sectors, entities and asset classes are set to avoid concentration risk. The portfolio manager must adhere to these limits.",
  },
  {
    id: "c15-q17",
    question:
      "Under the SEBI (Portfolio Managers) Regulations, 2020, the agreement between the portfolio manager and the investor must include the 'investment approach'. What does it describe?",
    options: [
      "The fee structure, including the hurdle rate and the high-water mark",
      "The types of securities and instruments allowed, and their proportion of exposure",
      "The list of individual stocks the manager will buy in the first month",
      "The manager's past three-year TWRR performance against the benchmark",
    ],
    answer: 1,
    explanation:
      "An investment approach is a broad outlay of the type of securities and permissible instruments the portfolio manager will invest in for the investor, taking into account investor- and security-specific factors, and it includes the type of instruments and proportion of exposure.",
  },
  {
    id: "c15-q18",
    question:
      "In ESG-based sustainable investing, which of the following is classified as a social factor?",
    options: [
      "Board diversity",
      "Clean technology",
      "Human rights",
      "Pollution",
    ],
    answer: 2,
    explanation:
      "The workbook lists workplace safety, community development and human rights as social factors. Board diversity is a governance factor, while pollution and clean technology are environmental factors.",
  },
  {
    id: "c15-q19",
    question:
      "According to the workbook, how does liquidity relate to return when an investor sets investment objectives?",
    options: [
      "Inversely: relatively illiquid investments demand an illiquidity risk premium",
      "Positively: more liquid investments always earn higher returns over time",
      "There is no relationship, as return depends only on the risk taken",
      "Liquidity matters only for regular-income objectives, not for return",
    ],
    answer: 0,
    explanation:
      "Risk and return typically have a positive relationship, but liquidity has an inverse relationship with return. Relatively illiquid investments require a premium for being less liquid, called the illiquidity risk premium.",
  },
  {
    id: "c15-q20",
    question:
      "A client wants to keep part of her portfolio in cash so that she can buy asset classes when they become undervalued. Which category of liquidity need does this represent?",
    options: [
      "Emergency cash reserve",
      "Near-term goal",
      "Tax liability provision",
      "Investment flexibility",
    ],
    answer: 3,
    explanation:
      "The workbook lists three liquidity needs: emergency cash, near-term goals and investment flexibility. Investment flexibility is the ability to take advantage of market opportunities as asset classes become overvalued or undervalued, which requires a greater degree of liquidity.",
  },
  {
    id: "c15-q21",
    question:
      "A client of modest means wants to fund his daughter's wedding in two years, a goal with high emotional priority. Which investment approach does the workbook suggest for such a goal?",
    options: [
      "A diversified mix across several asset classes, including mid-cap equity",
      "Cash equivalents or fixed-income instruments maturing near the goal date",
      "An aggressive equity portfolio, since time is short and returns must be high",
      "Alternative investments such as private equity, for their illiquidity premium",
    ],
    answer: 1,
    explanation:
      "Near-term high priority goals are usually funded with cash equivalents or fixed-income instruments whose maturity matches the goal date, because the cost of missing the goal is too great to take risk. A diversified approach suits long-term goals such as retirement, and aggressive approaches suit low priority goals.",
  },
  {
    id: "c15-q22",
    question:
      "A client keeps asking about the latest hot investment topic, fears being left out, has no investment ideas of his own and relies on advisers, yet his confused beliefs make him hard to advise. Under the BB&K framework, he is a:",
    options: [
      "Guardian",
      "Individualist",
      "Celebrity",
      "Straight arrow",
    ],
    answer: 2,
    explanation:
      "Celebrities like to be where the action is and are afraid of being left out. They lack their own investment ideas and usually go to advisers, but they are the most difficult investors to deal with because of their confused beliefs.",
  },
  {
    id: "c15-q23",
    question:
      "Which statement best describes the portfolio approach in the spending (decumulation) phase of an investor's life cycle?",
    options: [
      "Mostly high-risk capital gain investments, since earned income is still rising",
      "Investments made mainly to leave a legacy or support a charitable cause",
      "A few non-diversified holdings, since net worth is small relative to liabilities",
      "A focus on stability and income, while keeping some growth and inflation hedges",
    ],
    answer: 3,
    explanation:
      "In the spending phase, living expenses come from accumulated assets, so the focus is on stability and on investments that generate dividend, interest and rental income. Since the time horizon may still exceed 15 to 20 years, some investments should keep growth and inflation-hedge potential.",
  },
  {
    id: "c15-q24",
    question:
      "According to the workbook's portfolio construction principles, when are hybrid portfolios typically used?",
    options: [
      "As a long-term goal draws near, to smooth the transition in asset mix",
      "At the start of a long-term goal, to maximise capital appreciation",
      "Only for parking money for a few days, in place of a bank account",
      "Only by investors in the gifting phase who want to leave a legacy",
    ],
    answer: 0,
    explanation:
      "Hybrid portfolios combine stability with some upside and are used as a long-term goal starts getting near. Shifting to them ensures a smooth transition in the investor's asset allocation mix.",
  },
  {
    id: "c15-q25",
    question:
      "Why do private equity and real estate holdings make portfolio rebalancing harder than listed equities or government bonds?",
    options: [
      "They are exempt from tax, so rebalancing them brings no tax benefit",
      "Their prices never change, so they never drift from target weights",
      "SEBI prohibits selling them before a five-year lock-in period ends",
      "They are relatively illiquid and carry higher transaction costs",
    ],
    answer: 3,
    explanation:
      "Relatively illiquid investments like private equity and real estate pose challenges in rebalancing because of higher transaction costs. Rebalancing is easier with more liquid assets such as listed equities or government bonds.",
  },
];
