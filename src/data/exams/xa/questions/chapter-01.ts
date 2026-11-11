import type { Question } from "@/data/types";

export const chapter01Questions: Question[] = [
  {
    id: "c01-q01",
    question: "According to the NISM workbook, financial planning is best described as:",
    options: [
      "Selecting the best-performing stocks and mutual funds so that the client's portfolio beats the market every year",
      "Minimising the income tax payable by an individual in a given financial year",
      "Streamlining a household's income, expenses, assets and liabilities to meet current and future fund needs",
      "Arranging loans for a household at the lowest available rate of interest",
    ],
    answer: 2,
    explanation:
      "The workbook defines financial planning as streamlining income, expenses, assets and liabilities to meet both current and future fund needs. It is a holistic process, not just product selection, tax saving or borrowing.",
  },
  {
    id: "c01-q02",
    question: "Which of the following is the best-framed financial goal for planning purposes?",
    options: [
      "Accumulate a retirement corpus of ₹5 crore in 20 years",
      "Become rich as early as possible by investing aggressively in equities",
      "Save as much money as possible every month",
      "Earn higher returns than friends and colleagues",
    ],
    answer: 0,
    explanation:
      "Goals should be specific, measurable, realistic and time-bound. A ₹5 crore corpus in 20 years states both an amount and a time period, while 'become rich' is vague and means different things to different people.",
  },
  {
    id: "c01-q03",
    question:
      "Ravi can comfortably save about ₹20,000 a month. He sets a goal that requires him to invest ₹50,000 every month. Which essential feature of goal setting does this goal fail to meet?",
    options: ["Specific", "Measurable", "Time-bound", "Realistic"],
    answer: 3,
    explanation:
      "The workbook gives exactly this example: if a person can save around ₹20,000 a month, a goal needing ₹50,000 a month is not realistic. The goal may be specific and measurable, but it is not achievable with his savings capacity.",
  },
  {
    id: "c01-q04",
    question:
      "A client earns some unexpected extra income and also has a large credit card outstanding. Which use of the money does the workbook recommend as improving the client's financial health?",
    options: [
      "Making the down payment on a luxury car",
      "Paying off the credit card debt",
      "Taking a family holiday abroad",
      "Buying the latest gadgets for the household",
    ],
    answer: 1,
    explanation:
      "Priority should go to actions that improve financial health. Paying off a credit card outstanding does not create an asset, but it removes costly debt and so improves the client's financial condition.",
  },
  {
    id: "c01-q05",
    question:
      "A client wants to buy a house within one year, but his current income cannot support the required down payment and EMI. What approach does the workbook suggest instead of cancelling the goal?",
    options: [
      "Drop the goal permanently and redirect savings to consumption",
      "Push back the goal by some time (say, to three years) so the required finances can be arranged",
      "Fund the down payment through a personal loan and credit card withdrawals so the purchase happens on time",
      "Stop all retirement savings until the house is bought",
    ],
    answer: 1,
    explanation:
      "Staggering the timing of goals means deferring a goal, for example from 1 year to 3 years, so the person has time to get the required finances in order without compromising critical goals.",
  },
  {
    id: "c01-q06",
    question:
      "In the six-step financial planning process, which step comes immediately after 'Gather client data, including goals'?",
    options: [
      "Establish and define the client-planner relationship",
      "Implement the financial planning recommendations",
      "Analyse and evaluate the client's financial status",
      "Monitor the financial planning recommendations",
    ],
    answer: 2,
    explanation:
      "The sequence is: establish the relationship, gather client data and goals, analyse and evaluate financial status, develop and present recommendations, implement, and monitor. Analysis of income, expenses, assets and liabilities follows data gathering.",
  },
  {
    id: "c01-q07",
    question:
      "Why do fee-only investment advisers usually not take on the execution of the plan or advice themselves?",
    options: [
      "To ensure that commissions earned on selling financial products do not influence their advice",
      "Because SEBI prohibits every type of investment adviser from offering any kind of execution service to clients",
      "Because executing transactions requires a separate banking licence from RBI",
      "Because clients are legally required to execute only through wraps and platforms",
    ],
    answer: 0,
    explanation:
      "Fee-only advisers refer clients to other agencies for execution so that product commissions do not influence their advice. Execution is not banned outright: individual advisers may provide execution through direct schemes or products without receiving any consideration for it.",
  },
  {
    id: "c01-q08",
    question:
      "The workbook says an investment adviser takes a 'top-down approach of asset allocation'. What does this mean?",
    options: [
      "Selecting the individual stocks and bonds with the highest expected returns, and then building the portfolio from them",
      "Timing the market so that purchases are made at the lowest prices",
      "Choosing products that offer the highest distribution commission",
      "Deciding how much to invest in each asset class to deliver the expected return within the investor's risk preference",
    ],
    answer: 3,
    explanation:
      "The adviser focuses on building a portfolio of asset classes based on goals, savings, required return and risk-taking ability, rather than on picking individual stocks or bonds.",
  },
  {
    id: "c01-q09",
    question: "Which of the following are the primary drawbacks of physical assets as investments?",
    options: [
      "High liquidity, very small minimum investment amounts and easy valuation through standardised disclosures",
      "Standardisation of products and comprehensive regulation",
      "Illiquidity, limited regulation and large ticket sizes requiring substantial savings or loans",
      "Negative correlation with inflation, making them a poor inflation hedge",
    ],
    answer: 2,
    explanation:
      "The workbook lists illiquidity, lack of or limited regulation, the need for specific skills, and large ticket sizes as limitations of physical assets. They are actually seen as natural hedges against inflation.",
  },
  {
    id: "c01-q10",
    question:
      "Taking loans to buy financial assets is called leveraging. Why does the workbook consider this risky?",
    options: [
      "Because financial assets cannot be sold before maturity",
      "Because of the higher volatility in the price of such assets",
      "Because interest on such loans is not allowed to be repaid early",
      "Because financial assets always depreciate in value over time",
    ],
    answer: 1,
    explanation:
      "Loans taken to buy financial assets are risky because prices of such assets are more volatile. In contrast, loans for appreciating assets add to long-term wealth, and assets bought from savings add most to financial strength.",
  },
  {
    id: "c01-q11",
    question:
      "Meera owns a house worth ₹60 lakh, mutual funds of ₹15 lakh, fixed deposits of ₹8 lakh and a car worth ₹5 lakh. She has an outstanding home loan of ₹35 lakh, a car loan of ₹3 lakh and credit card dues of ₹50,000. What is her net worth?",
    options: ["₹49.5 lakh", "₹50 lakh", "₹88 lakh", "₹38.5 lakh"],
    answer: 0,
    explanation:
      "Net worth = Assets − Liabilities = (60 + 15 + 8 + 5) − (35 + 3 + 0.5) = ₹88 lakh − ₹38.5 lakh = ₹49.5 lakh. Leaving out the credit card dues gives ₹50 lakh, and ₹88 lakh is total assets only.",
  },
  {
    id: "c01-q12",
    question:
      "Under the amendments to the SEBI Investment Adviser Regulations described in the workbook, an individual investment adviser:",
    options: [
      "May provide both advisory and distribution services to the same client if this is disclosed",
      "May earn commission from product manufacturers in addition to the advisory fee",
      "Must route all advisory services through a separate division of a group company",
      "Cannot undertake both advisory and distribution, and must choose to register as one of the two",
    ],
    answer: 3,
    explanation:
      "SEBI says individual investment advisers cannot undertake both advisory and distribution and must choose one. Client-level segregation and a separate division for advisory are requirements for non-individual advisers.",
  },
  {
    id: "c01-q13",
    question:
      "When a relationship manager sells financial products to clients and earns a commission from the product manufacturer, what is the main risk highlighted in the workbook?",
    options: [
      "Excessive diversification of the client's portfolio",
      "Mis-selling of products that do not suit the client's needs or risk preference",
      "Lower regulatory compliance costs for the client",
      "Higher income tax liability for the client",
    ],
    answer: 1,
    explanation:
      "Earning commission from the producer creates a conflict of interest. The seller may push products that pay higher commission, which can lead to mis-selling of products not suited to the client.",
  },
  {
    id: "c01-q14",
    question: "Which of the following estate planning tools comes into effect only after death?",
    options: [
      "A gift made to a family member",
      "Rebalancing of a retirement portfolio",
      "A will",
      "Asset-based advisory fees",
    ],
    answer: 2,
    explanation:
      "Estate planning covers transfer of wealth to heirs and other beneficiaries. Gifts can be made during one's lifetime, while a will comes into play only after death.",
  },
  {
    id: "c01-q15",
    question:
      "Which feature distinguishes financial planning from a typical financial advisory service?",
    options: [
      "It is comprehensive and continuous, keeps the client's goals at the core and has monitoring built in",
      "It focuses deeply on one specific need, such as advice on stocks or debt, without linking it to other goals",
      "It is a one-time exercise that ends once the products are bought",
      "It aims at earning the highest return, with risk being a secondary concern",
    ],
    answer: 0,
    explanation:
      "Financial planning covers all aspects of personal finance, centres on goals, considers both risk and return, and includes ongoing monitoring. A typical advisory service may address only a narrow need and may be piecemeal or one-time.",
  },
  {
    id: "c01-q16",
    question:
      "Sameer spends less than he earns every month, yet he often borrows for a few days because large bills fall due before his salary is credited. Which tool does the workbook suggest to prevent this?",
    options: [
      "A larger health insurance cover, so that medical bills are reimbursed faster",
      "Moving his monthly savings into equity funds to earn higher returns",
      "Using the credit card's revolving facility to bridge the gap each month",
      "A budget that lists each inflow and outflow along with its cash flow date",
    ],
    answer: 3,
    explanation:
      "A cash flow problem arises when inflows and outflows do not match in timing, even if total spending is below income. The workbook recommends a budget with cash flow dates, so that short-term mismatches do not force costly borrowing.",
  },
  {
    id: "c01-q17",
    question: "According to the workbook, what role should tax efficiency play in a client's investment decisions?",
    options: [
      "It should be the main basis for choosing products, since only post-tax return matters",
      "It should be ignored, because taxes do not affect the corpus a client can build",
      "It is guidance and awareness; decisions should rest on requirements and risk appetite",
      "It matters only for retired clients, whose income is taxed at lower slab rates",
    ],
    answer: 2,
    explanation:
      "The adviser should assess the impact of taxes and consider post-tax returns, but the workbook states that tax efficiency should not be the basis of investment decisions. The basis should be the client's requirements and risk appetite.",
  },
  {
    id: "c01-q18",
    question:
      "A client lists the car he recently bought for ₹12 lakh as a physical-asset investment in his portfolio. How should the adviser respond, as per the workbook?",
    options: [
      "Accept it, since any tangible asset with a long useful life is a physical investment",
      "Explain that a car is a consumption asset and should not be confused with physical investments",
      "Treat it as a financial asset, because it was bought partly with a bank loan",
      "Treat it as a growth asset similar to gold, since it has a resale value",
    ],
    answer: 1,
    explanation:
      "The workbook says the adviser must guide the investor not to confuse consumption assets like a car with physical investments such as real estate or gold. A car is a depreciating asset bought for use, not for appreciation or income.",
  },
  {
    id: "c01-q19",
    question:
      "In the aggregation model of execution-only services described in the workbook, what does the aggregating entity typically do?",
    options: [
      "Manages each distributor's client portfolios on a discretionary basis for a fixed fee",
      "Registers as an investment adviser, charges clients directly and passes the fee on",
      "Manufactures its own mutual fund schemes and sells them only through its employees",
      "Shortlists products and gives associated distributors research, platforms and support for a revenue share",
    ],
    answer: 3,
    explanation:
      "The aggregator shortlists products using its selection criteria, may run a central research team, and offers training, CRM software and execution platforms. Distributors who associate with it share their revenue with it for these services.",
  },
  {
    id: "c01-q20",
    question: "Which description best fits 'wraps and platforms' as a model for delivering financial advice?",
    options: [
      "Technology-based solutions, standardised for execution, offering products as model portfolios",
      "Individual advisers who visit clients personally and complete all paperwork for a one-time fee",
      "Insurance agents who bundle term cover with investment-linked policies for a single premium",
      "Banks that lend against a client's portfolio of shares and mutual fund units at low rates",
    ],
    answer: 0,
    explanation:
      "Wraps and platforms are technology-based advisory solutions standardised for execution. Products are offered as model portfolios that investors can buy, clients can view performance, and advisers can monitor portfolios and share fees with the platform.",
  },
  {
    id: "c01-q21",
    question:
      "As a client approaches retirement, which activity does the workbook describe as important in the pre-retirement stage?",
    options: [
      "Moving the entire corpus into equities to maximise growth before retiring",
      "Stopping all monitoring, since the corpus has already been accumulated",
      "Rebalancing the portfolio towards less volatile assets",
      "Taking a loan against the retirement corpus to buy a second home",
    ],
    answer: 2,
    explanation:
      "The workbook states that in the pre-retirement stage, rebalancing the portfolio to less volatile assets is an important activity. Planning then shifts to retirement expenses, the adequacy of income from investments and pension, and ways to meet any shortfall.",
  },
  {
    id: "c01-q22",
    question:
      "A client believes his provident fund, superannuation and gratuity will be enough to fund a comfortable retirement. What should the investment adviser do?",
    options: [
      "Accept his view, since these benefits are designed to fund retirement fully",
      "Go through the numbers to demonstrate any shortfall and put a retirement plan in place",
      "Advise him to withdraw his PF balance now and invest it in real estate instead",
      "Suggest he postpone retirement planning until five years before he retires",
    ],
    answer: 1,
    explanation:
      "The workbook notes that these retirement benefits often turn out to be inadequate, so every client needs a retirement plan. The adviser should go through the numbers to demonstrate the inadequacy and ensure the client saves enough while earning.",
  },
  {
    id: "c01-q23",
    question:
      "Which of the following physical assets does the workbook describe as a pure growth-oriented asset?",
    options: [
      "Residential property let out on rent",
      "Commercial property leased to a company",
      "Agricultural land leased to a farmer",
      "Gold held as coins or bars",
    ],
    answer: 3,
    explanation:
      "Physical assets are mostly bought for appreciation. The workbook says some, such as real estate, provide both income and growth, while gold is a pure growth-oriented asset because it generates no income.",
  },
  {
    id: "c01-q24",
    question:
      "Under the regulatory regime for financial advisers in India described in the workbook, a person offering financial advice for a consideration must:",
    options: [
      "Register with RBI and disclose all commissions received from product manufacturers",
      "Register with AMFI and earn only trail commission on the mutual funds recommended",
      "Obtain an IRDAI licence whenever the advice covers more than one type of product",
      "Register with SEBI and not earn any income from the producer of financial products",
    ],
    answer: 3,
    explanation:
      "To prevent mis-selling, advisers must earn their revenue from the client, not the producer. Anyone offering financial advice for a consideration must be registered with SEBI, with specific exemptions for advice incidental to a product being sold.",
  },
  {
    id: "c01-q25",
    question:
      "A young couple keeps deferring retirement saving to pay for holidays and gadget upgrades, arguing that retirement is far away. What is the main cost of this approach?",
    options: [
      "The final corpus suffers, as the longer saving period and compounding are lost",
      "Their current-year income tax rises, because consumption spending is not deductible",
      "Their credit score falls, because lenders treat holiday spending as unsecured debt",
      "Their life insurance premiums rise, because retirement saving is linked to cover",
    ],
    answer: 0,
    explanation:
      "Long-term goals often get lower priority because they have time on their side. The workbook warns that delaying saving for them affects the final corpus, since it loses the benefit of longer saving and earning, including compounding.",
  },
];
