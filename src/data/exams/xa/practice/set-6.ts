import type { PracticeSet } from "@/data/types";

export const practiceSet6: PracticeSet = {
  id: "set-6",
  title: "Practice Set 6",
  durationMinutes: 60,
  questions: [
    {
      id: "s6-q01",
      chapterNumber: 1,
      question:
        "According to the workbook, which activity is important in the pre-retirement stage of retirement planning?",
      options: [
        "Shifting the entire portfolio into equities to maximise growth",
        "Rebalancing the portfolio towards less volatile assets",
        "Stopping all monitoring of the retirement portfolio",
        "Taking new loans to increase investments",
      ],
      answer: 1,
      explanation:
        "The workbook states that in the pre-retirement stage, rebalancing the portfolio to less volatile assets is an important activity. As retirement approaches, the focus shifts to expenses in retirement and whether investment income and pension benefits will cover them. The portfolio still has to be monitored and rebalanced during retirement.",
    },
    {
      id: "s6-q02",
      chapterNumber: 2,
      question: "________ is a cash flow from an investment that goes on forever.",
      options: ["Annuity due", "Perpetuity", "Ordinary annuity", "Variable annuity"],
      answer: 1,
      explanation:
        "A perpetuity provides a constant cash flow for an unlimited period, and perpetual bonds are the best real-life example. Its present value is the cash flow divided by the discount rate.\nAn annuity, whether ordinary or due, runs for a finite number of periods.",
    },
    {
      id: "s6-q03",
      chapterNumber: 9,
      question:
        "Bond X has a face value of ₹10 and a coupon rate of 7%. If market interest rates go up, what happens to the price of Bond X?",
      options: [
        "The price will go down",
        "The price will go up",
        "The price will not change",
        "Interest rate changes do not affect existing bonds",
      ],
      answer: 0,
      explanation:
        "Bond prices are inversely related to interest rates. When market rates rise, an existing bond's fixed coupon is less attractive, so its price falls, and the reverse happens when rates fall.",
    },
    {
      id: "s6-q04",
      chapterNumber: 7,
      question: "Real estate has historically been viewed as a good hedge against:",
      options: ["Inflation", "Liquidity risk", "Interest rate cuts", "Currency appreciation"],
      answer: 0,
      explanation:
        "The workbook describes real estate as a significant asset class that offers diversification and has historically been viewed as a good inflation hedge. It is usually a long-term investment, held for capital appreciation or rental income, and it is illiquid, so it does not hedge liquidity risk.",
    },
    {
      id: "s6-q05",
      chapterNumber: 16,
      question:
        "Investment X appreciates by 10% in one year, and Investment Y appreciates by 20% over three years. Which gives a higher return?",
      options: [
        "Investment Y, because it has a higher absolute return",
        "Investment X, because it can be exited after one year",
        "Investment Y, because it has a longer holding period",
        "Investment X, because it has a higher annualised return",
      ],
      answer: 3,
      explanation:
        "Returns over different periods must be annualised before they are compared. Y's compounded annual return is (1.20)^(1/3) − 1 = 6.27% a year (even simple averaging gives only 6.67%), which is lower than X's 10% a year.",
    },
    {
      id: "s6-q06",
      chapterNumber: 9,
      question: "Corporate bonds with a high credit rating:",
      options: [
        "Have a higher coupon",
        "Have a higher face value",
        "Have lower default risk",
        "All of the above",
      ],
      answer: 2,
      explanation:
        "Credit ratings capture the probability of default, so the highest-rated bonds offer the greatest safety of timely interest and principal payments. Higher-rated bonds usually carry lower coupons (a smaller credit spread), and the rating has nothing to do with face value.",
    },
    {
      id: "s6-q07",
      chapterNumber: 9,
      question: "What is the special feature of the interest paid on an inflation-indexed bond?",
      options: [
        "The interest rate is fixed at issue, based on the rates prevailing then",
        "The interest rate changes at specified intervals depending on the inflation rate",
        "These bonds give a negative real return because of their special interest rate",
        "The interest on these bonds is tax-free",
      ],
      answer: 1,
      explanation:
        "The workbook says inflation-indexed bonds do not have a fixed rate of interest: at specified intervals the interest rate changes depending on the inflation rate in the economy, which protects the investor's real rate of return.",
    },
    {
      id: "s6-q08",
      chapterNumber: 20,
      question:
        "Ms. Protima has complained to her bank's grievance redressal department. If she does not get a satisfactory resolution, how long must she wait before approaching the RBI Ombudsman?",
      options: ["15 days", "One month (30 days)", "45 days", "60 days"],
      answer: 1,
      explanation:
        "The complaint must first go to the bank. If the customer has not received a satisfactory resolution within one month, they can approach the Ombudsman.\nNote: the RBI Integrated Ombudsman Scheme, 2026 replaced the 2021 scheme from 1 Jul 2026; the one-month wait after complaining to the bank is retained, as described in the Feb 2025 workbook.",
    },
    {
      id: "s6-q09",
      chapterNumber: 16,
      question:
        "An investor's total wealth is well diversified across investment avenues. Which risk-adjusted return ratio is more appropriate for measuring the performance of a portfolio within it?",
      options: ["Treynor ratio", "Sharpe ratio", "Tracking ratio", "Sortino ratio"],
      answer: 0,
      explanation:
        "The Treynor ratio measures excess return per unit of systematic risk (beta). It suits investors whose overall wealth is well diversified, because their unsystematic risk is already minimal.\nThe Sharpe ratio uses total risk (standard deviation) and suits investors who are not adequately diversified.",
    },
    {
      id: "s6-q10",
      chapterNumber: 5,
      question: "Capital markets are mainly used for ________ funding needs.",
      options: ["Short-term", "Long-term", "Institutional", "Retail"],
      answer: 1,
      explanation:
        "The financial market has two parts: money markets for short-term borrowing and lending, and securities (capital) markets that transfer funds for the longer term using debt and equity instruments.",
    },
    {
      id: "s6-q11",
      chapterNumber: 8,
      question:
        "A firm positions itself so that its capabilities provide the best means of deflecting the effect of competitive forces in its industry. Which competitive strategy is it following?",
      options: ["Offensive strategy", "Defensive strategy", "SWOT strategy", "Diversification strategy"],
      answer: 1,
      explanation:
        "In company analysis, a defensive strategy positions the firm so that its capabilities deflect the competitive forces in the industry. An offensive strategy uses the firm's strengths to affect those competitive forces.\nSWOT is an analysis tool, not a competitive strategy.",
    },
    {
      id: "s6-q12",
      chapterNumber: 12,
      question:
        "In the direct access facility of a Portfolio Management Service, costs are lower than in the regular plan mainly because:",
      options: [
        "No distributor is involved, so no distribution commission is paid",
        "The portfolio is managed differently",
        "The portfolio manager charges no management fee",
        "Brokerage on portfolio trades is waived",
      ],
      answer: 0,
      explanation:
        "The direct access facility lets the investor go to the PMS provider without an intermediary, so no distributor commission is paid and the expenses charged are lower. The rest of the fund management process does not differ.",
    },
    {
      id: "s6-q13",
      chapterNumber: 20,
      question:
        "Where should an investor raise a complaint about a pension scheme launched by a mutual fund?",
      options: ["SEBI SCORES", "PFRDA", "IRDAI's IGMS", "The NPS Central Recordkeeping Agency"],
      answer: 0,
      explanation:
        "Pension schemes issued by mutual funds are regulated by SEBI, so SEBI's redressal system (SCORES) applies.\nPension schemes from insurance companies follow IRDAI's grievance system, and NPS grievances go through the CRA appointed by PFRDA.",
    },
    {
      id: "s6-q14",
      chapterNumber: 15,
      question:
        "Which type of investor in the BB&K model is careful, methodical and analytical, and tends to avoid extreme volatility?",
      options: ["Adventurer", "Individualist", "Guardian", "Celebrity"],
      answer: 1,
      explanation:
        "In the Bailard, Biehl & Kaiser model, Individualists are confident but also careful, methodical and analytical. They like to do their own research, tend to avoid extreme volatility and are often contrarians.\nAdventurers concentrate their bets, Celebrities follow the latest hot topic, and Guardians mainly seek to preserve wealth.",
    },
    {
      id: "s6-q15",
      chapterNumber: 5,
      question:
        "________ is the nodal agency of the Central Government for formulating and monitoring India's macroeconomic policies.",
      options: [
        "Department of Economic Affairs",
        "Finance Ministry",
        "Ministry of Corporate Affairs",
        "Department of Investment and Public Asset Management",
      ],
      answer: 0,
      explanation:
        "The Department of Economic Affairs is the nodal agency for formulating and monitoring macroeconomic policies, covering monetary and fiscal policy as well as the functioning of the capital market, including stock exchanges.",
    },
    {
      id: "s6-q16",
      chapterNumber: 12,
      question: "What is the profit-sharing fee paid to a PMS portfolio manager based on?",
      options: [
        "Regulatory limits alone",
        "The fixed costs charged",
        "The percentage sharing and targets agreed when the PMS agreement is signed",
        "All of the above",
      ],
      answer: 2,
      explanation:
        "The profit-sharing (performance-linked) fee is an extra fee that rewards the manager for better performance. Targets are set when the PMS agreement is signed, and if they are met, the agreed percentage of profits is paid as additional fees.",
    },
    {
      id: "s6-q17",
      chapterNumber: 18,
      question:
        "Under Section 12 of the Prevention of Money Laundering Act (PMLA), for how long must a reporting entity keep the records of all transactions?",
      options: [
        "Three years from the date of the transaction",
        "Five years from the date of the transaction",
        "Eight years from the date of the transaction",
        "Ten years from the date of the transaction",
      ],
      answer: 1,
      explanation:
        "Section 12 of PMLA requires reporting entities to keep records of all transactions for five years from the date of the transaction between the client and the entity. Identity records and account files must be kept for five years after the business relationship ends or the account is closed, whichever is later.",
    },
    {
      id: "s6-q18",
      chapterNumber: 18,
      question:
        "Mr. Ramesh has engaged a reputed investment adviser. Which of the following should Mr. Ramesh NOT do?",
      options: [
        "Check that the advice suits his risk profile, whatever the adviser's reputation",
        "Hand over control of his funds to the investment adviser so that investments can be made quickly",
        "Give the investments enough time to show results instead of tracking the portfolio daily",
      ],
      answer: 1,
      explanation:
        "Investment advice under the IA Regulations does not involve handling or managing the client's money, so a client should not hand over control of funds to an adviser. Managing funds with discretion requires a portfolio management arrangement.\nChecking suitability and allowing time for results are sensible actions.",
    },
    {
      id: "s6-q19",
      chapterNumber: 18,
      question: "Which of these has to be registered with SEBI?",
      options: [
        "Sponsors of an asset management company",
        "Trustees of an asset management company",
        "Custodians of mutual funds",
        "Distributors of mutual funds",
      ],
      answer: 2,
      explanation:
        "SEBI registers and regulates securities market intermediaries such as stock brokers, merchant bankers, portfolio managers, investment advisers, depositories, depository participants and custodians of securities.\nMutual fund distributors register with AMFI, not SEBI.",
    },
    {
      id: "s6-q20",
      chapterNumber: 7,
      question:
        "Compared with mutual funds, the investment restrictions that SEBI places on PMS and AIFs are:",
      options: [
        "Relatively less",
        "Exactly the same",
        "Much stricter",
        "Not applicable, as PMS and AIFs are unregulated",
      ],
      answer: 0,
      explanation:
        "The workbook says mutual funds are subject to high-touch regulation, while PMS and AIFs, which cater to institutional and high net worth investors, have light-touch regulation and relatively fewer investment restrictions. PMS and AIFs are still regulated by SEBI.",
    },
    {
      id: "s6-q21",
      chapterNumber: 8,
      question: "Which of the following is TRUE about unlisted equity investments?",
      options: [
        "Price information is sporadic or infrequent",
        "Liquidity is quite low",
        "Because of illiquidity, they usually trade at a discount",
        "All of the above",
      ],
      answer: 3,
      explanation:
        "Investments in listed companies are relatively more liquid than those in unlisted companies, which have no exchange market. So unlisted shares have infrequent price discovery, low liquidity and usually trade at an illiquidity discount.",
    },
    {
      id: "s6-q22",
      chapterNumber: 16,
      question:
        "Mr. Mohan deposited ₹5 lakh with a fund manager. The fund manager invested only ₹2.5 lakh of it and earned ₹60,000. What is Mr. Mohan's effective return?",
      options: ["12%", "24%", "9%", "18%"],
      answer: 0,
      explanation:
        "The investor's return is measured on the full amount he committed: 60,000 / 5,00,000 = 12%.\n24% is the return on the invested portion only, which ignores the idle cash.",
    },
    {
      id: "s6-q23",
      chapterNumber: 8,
      question:
        "An investor with long-term goals who wants some stability in the portfolio should consider:",
      options: [
        "Small-cap stocks",
        "Mid-cap stocks",
        "Large-cap stocks",
        "All of the above",
      ],
      answer: 2,
      explanation:
        "Large-cap stocks of large, liquid blue-chip companies tend to be less volatile and add stability to a portfolio. Mid- and small-caps can deliver higher capital appreciation but are more volatile.",
    },
    {
      id: "s6-q24",
      chapterNumber: 20,
      question:
        "Which of these is an essential requirement for a grievance to be admissible in a grievance redress system?",
      options: [
        "The service provider must classify it as actionable",
        "It must be raised within the time limit specified in the relevant rules",
        "It must be for a value above a minimum limit",
        "It must be filed through a lawyer",
      ],
      answer: 1,
      explanation:
        "One feature of a robust grievance redress system is that the complaint must be received within the time period specified in the relevant acts. This keeps the system from being clogged with old complaints that are hard to dispose of.\nThe service provider does not decide admissibility, and no lawyer or minimum value is needed.",
    },
    {
      id: "s6-q25",
      chapterNumber: 6,
      question:
        "The share of Pioneer Ltd. trades at ₹100 and has a face value of ₹10. The company announces a stock split that reduces the face value to ₹2. What is the approximate market price on the ex-date?",
      options: ["₹25", "₹20", "₹50", "No change"],
      answer: 1,
      explanation:
        "Splitting a ₹10 face value into ₹2 gives 5 shares for every 1 held, so the price adjusts to about one-fifth: 100 × 2/10 = ₹20. The investor's total holding value is unchanged.",
    },
    {
      id: "s6-q26",
      chapterNumber: 17,
      question: "Who can claim the tax benefits when a mutual fund investment is held jointly?",
      options: [
        "Only the first holder",
        "All holders equally",
        "The first holder for equity funds and all holders equally for debt funds",
        "Each holder, in the proportion mentioned in the application form",
      ],
      answer: 0,
      explanation:
        "In a joint holding, the first holder's details are used to create the investment records. All payouts are made in the first holder's name, and the tax benefits and any tax liability on the income accrue to the first holder.",
    },
    {
      id: "s6-q27",
      chapterNumber: 19,
      question: "How should an investment adviser manage a conflict of interest with a client?",
      options: [
        "By making sure the decision is in line with the adviser's fiduciary responsibility",
        "By focusing on generating the highest return so the client stays happy",
        "By making sure the client does not lose money, even if there is no gain",
        "By focusing on the client's larger good and overlooking smaller issues",
      ],
      answer: 0,
      explanation:
        "Investment advisers are fiduciaries and must act in the client's best interest. When conflicts arise, the fiduciary duty requires rising above them, disclosing them and always putting the client first.",
    },
    {
      id: "s6-q28",
      chapterNumber: 10,
      question:
        "In exchange-traded futures, who becomes the counterparty to both the buyer and the seller?",
      options: [
        "The stock broker of the buyer",
        "The clearing house (clearing corporation) of the exchange",
        "SEBI",
        "The depository",
      ],
      answer: 1,
      explanation:
        "Futures are standardised forward contracts traded on an exchange. The exchange, through its clearing house, becomes the counterparty to both buyer and seller, which removes the counterparty risk that exists in forward contracts.",
    },
    {
      id: "s6-q29",
      chapterNumber: 6,
      question:
        "At what levels of index movement does the market-wide circuit breaker system apply in India?",
      options: ["5%, 10% and 15%", "10%, 15% and 20%", "2%, 5% and 10%", "15%, 20% and 25%"],
      answer: 1,
      explanation:
        "Index-based market-wide circuit breakers apply at three stages of index movement, either way: 10%, 15% and 20%. They are triggered by the BSE Sensex or the Nifty 50, whichever is breached first.\n2%, 5% and 10% are daily price bands for individual securities.",
    },
    {
      id: "s6-q30",
      chapterNumber: 13,
      question: "Which of these instruments falls under the alternative investment asset class?",
      options: [
        "Listed debt securities",
        "Overnight money market instruments",
        "Unlisted debt securities issued by project SPVs",
        "Exchange traded funds (ETFs)",
      ],
      answer: 2,
      explanation:
        "Traditional investments are liquid, on-market securities such as listed stocks and bonds, general mutual fund units and ETFs. Unlisted securities of special purpose vehicles that hold projects, the space where infrastructure AIFs invest, are illiquid and fall in the alternative class.",
    },
    {
      id: "s6-q31",
      chapterNumber: 6,
      question:
        "Which of these typically leads to an increase in the Earnings Per Share (EPS) of a company?",
      options: ["Bonus issue", "Dividend", "Stock split", "Share buyback"],
      answer: 3,
      explanation:
        "Shares bought back are extinguished, reducing share capital. With the same profits spread over fewer shares, EPS rises.\nBonus issues and splits increase the number of shares and reduce EPS, and dividends do not change it.",
    },
    {
      id: "s6-q32",
      chapterNumber: 13,
      question: "Who can invest in an Alternative Investment Fund?",
      options: [
        "Resident Indian investors",
        "Non-resident Indian investors",
        "Foreign investors",
        "All of the above",
      ],
      answer: 3,
      explanation:
        "Under the AIF Regulations, an AIF may raise funds from any investor, whether Indian, foreign or non-resident Indian, by issuing units (subject to the minimum investment rules).",
    },
    {
      id: "s6-q33",
      chapterNumber: 10,
      question:
        "Mrs. Revathi bought a Nifty futures contract at 16,500 at 2 pm yesterday. The day's settlement price was 16,700. Assuming a lot size of 50, what is her mark-to-market (MTM) result for the day?",
      options: [
        "MTM loss of ₹10,000",
        "MTM loss of ₹5,000",
        "MTM profit of ₹10,000",
        "MTM profit of ₹2,500",
      ],
      answer: 2,
      explanation:
        "MTM settles gains and losses daily against the settlement price. (16,700 − 16,500) × 50 = 200 × 50 = ₹10,000, a profit because she is long and the price rose.",
    },
    {
      id: "s6-q34",
      chapterNumber: 12,
      question: "Under the advisory model of PMS, who executes the transactions?",
      options: ["The client", "The adviser", "The PMS fund manager", "None of the above"],
      answer: 0,
      explanation:
        "In an advisory PMS, the portfolio manager only suggests ideas or gives non-binding advice; the investor takes the decisions and executes the transactions.\nIn a non-discretionary PMS, the client decides but the portfolio manager executes.",
    },
    {
      id: "s6-q35",
      chapterNumber: 14,
      question:
        "A portfolio holds two stocks. If the correlation coefficient between them decreases over time, all else constant, the portfolio's risk will:",
      options: ["Increase", "Decrease", "Remain constant", "Fluctuate up and down"],
      answer: 1,
      explanation:
        "Correlation ranges from −1 to +1. When it is below +1, portfolio risk is less than the weighted average of the individual risks, and the lower the correlation, the greater the diversification benefit and the lower the portfolio risk.",
    },
    {
      id: "s6-q36",
      chapterNumber: 7,
      question: "Which of these is a route for taking exposure to real estate with a limited investment?",
      options: ["Office space", "Co-working space", "REIT", "Apartment"],
      answer: 2,
      explanation:
        "Direct real estate needs large commitments. Real estate funds and Real Estate Investment Trusts (REITs) let investors gain exposure to the asset class with a smaller outlay.",
    },
    {
      id: "s6-q37",
      chapterNumber: 2,
      question: "An ordinary annuity is received at the ________ of each period.",
      options: ["Start", "Middle", "End", "Any point"],
      answer: 2,
      explanation:
        "In an ordinary annuity, each payment is made at the end of the period. In an annuity due, payments are made at the beginning of each period.",
    },
    {
      id: "s6-q38",
      chapterNumber: 12,
      question: "A PMS provider must compulsorily appoint a:",
      options: ["Subject expert", "Technology officer", "Compliance officer", "Committee"],
      answer: 2,
      explanation:
        "Before granting registration, SEBI checks that the applicant has appointed a compliance officer. It also checks that the principal officer has the required qualification and experience, and that at least one other qualified employee is in place.",
    },
    {
      id: "s6-q39",
      chapterNumber: 16,
      question: "The Sharpe ratio divides the portfolio's risk premium by the:",
      options: [
        "Variance of the rate of return",
        "Risk-free rate",
        "Standard deviation of the portfolio's return",
        "Slope of the fund's characteristic line",
      ],
      answer: 2,
      explanation:
        "Sharpe ratio = (Portfolio return − Risk-free return) / Standard deviation of portfolio return, which is excess return per unit of total risk.\nThe Treynor ratio divides by beta instead.",
    },
    {
      id: "s6-q40",
      chapterNumber: 18,
      question:
        "An investment adviser had a maximum of 250 clients at any time during the previous financial year. Under SEBI's current rules, what deposit must it maintain?",
      options: ["₹1 lakh", "₹2 lakh", "₹5 lakh", "₹10 lakh"],
      answer: 1,
      explanation:
        "The old net worth requirement has been replaced by a deposit with a scheduled bank, lien-marked in favour of the IA administration and supervision body (BSE). The amount depends on the maximum number of clients in the previous FY: up to 150 clients ₹1 lakh, 151-300 ₹2 lakh, 301-1,000 ₹5 lakh, and above 1,000 ₹10 lakh.",
    },
    {
      id: "s6-q41",
      chapterNumber: 16,
      question:
        "An investment yields a pre-tax return of 18% and the applicable tax rate is 12%. What is the post-tax return?",
      options: ["18%", "16.42%", "15.84%", "14.77%"],
      answer: 2,
      explanation: "Post-tax return = Pre-tax return × (1 − tax rate) = 18% × 0.88 = 15.84%.",
    },
    {
      id: "s6-q42",
      chapterNumber: 8,
      question: "Which type of investor is best suited to investing in unlisted equity?",
      options: [
        "One willing to give up liquidity for the possibility of higher returns",
        "One seeking good liquidity and lower portfolio risk",
        "One focused on consistent returns from a long-term strategy",
        "All of the above",
      ],
      answer: 0,
      explanation:
        "Unlisted equity is far less liquid than listed equity and carries higher risk, so it suits investors with a long horizon and high risk appetite who will accept illiquidity in exchange for potentially higher returns.",
    },
    {
      id: "s6-q43",
      chapterNumber: 16,
      question: "Which of the following is NOT a characteristic of unsystematic risk?",
      options: [
        "It is diversifiable",
        "It arises from sector-specific or company-specific factors",
        "Alpha is the reward for bearing it",
        "It is unavoidable",
      ],
      answer: 3,
      explanation:
        "Unsystematic risk comes from sector- or company-specific factors and can be diversified away, so it is avoidable. The workbook notes that alpha is the reward for bearing unsystematic risk.\nSystematic (market) risk is the one that cannot be diversified away.",
    },
    {
      id: "s6-q44",
      chapterNumber: 16,
      question:
        "The cumulative wealth relative over a 4-year period is 1.2156. What is the geometric mean return?",
      options: ["4.45%", "6.12%", "7%", "5%"],
      answer: 3,
      explanation:
        "Geometric mean return = (Cumulative wealth relative)^(1/n) − 1 = (1.2156)^(1/4) − 1 = 1.05 − 1 = 5%.",
    },
    {
      id: "s6-q45",
      chapterNumber: 15,
      question:
        "Consider these statements on the psychographic analysis of investors.\nStatement A: The Bailard, Biehl & Kaiser (BB&K) model classifies investors into five broad personality types.\nStatement B: External factors can sometimes make an investor behave differently from their usual profile.\nWhich is correct?",
      options: [
        "Only statement A is correct",
        "Only statement B is correct",
        "Both statements A and B are correct",
        "Neither statement is correct",
      ],
      answer: 2,
      explanation:
        "The BB&K model has five personality types: Adventurer, Celebrity, Individualist, Guardian and Straight Arrow. The workbook also notes that each investor at times shows traits of other personalities, influenced especially by recent investment experience; for example, a Guardian on a winning streak may act like an Adventurer.",
    },
    {
      id: "s6-q46",
      chapterNumber: 3,
      question:
        "What is the correct way to value assets and liabilities when calculating an individual's net worth?",
      options: [
        "Market value of assets and outstanding value of liabilities",
        "Cost price of assets and original value of liabilities",
        "Cost price of assets and outstanding value of liabilities",
        "Market value of assets and original loan value of liabilities",
      ],
      answer: 0,
      explanation:
        "Net worth = Assets − Liabilities. Assets should be taken at current market value, and liabilities at the amount still outstanding (not the original loan amount), so that the figure reflects the household's true current position.",
    },
    {
      id: "s6-q47",
      chapterNumber: 10,
      question: "The terms and conditions of a forward contract are agreed by the counterparties:",
      options: [
        "On the expiry date of the contract",
        "On the settlement date of the contract",
        "On the first day of the financial year",
        "On the date they enter into the contract",
      ],
      answer: 3,
      explanation:
        "A forward contract is an agreement made directly between two parties to buy or sell an asset on a specific future date, at terms decided today, that is, on the date they enter into the contract.",
    },
    {
      id: "s6-q48",
      chapterNumber: 20,
      question: "Which complaints can be registered on SCORES?",
      options: [
        "Complaints about all retail investment products",
        "Complaints about all products a registered investment adviser may advise on",
        "Complaints about all products cleared by the Ministry of Finance",
        "Complaints about products and entities regulated by SEBI",
      ],
      answer: 3,
      explanation:
        "SCORES (SEBI Complaints Redress System) is SEBI's online system for complaints about the products and entities it regulates.\nInsurance, banking and NPS complaints go to IRDAI, RBI and PFRDA mechanisms respectively.",
    },
    {
      id: "s6-q49",
      chapterNumber: 12,
      question: "What type of organisation can a portfolio manager be in India?",
      options: ["Sole proprietorship", "Co-operative society", "Partnership firm", "Body corporate"],
      answer: 3,
      explanation:
        "The workbook defines a portfolio manager as a body corporate that manages or administers clients' portfolios under a contract, and being a body corporate is one of SEBI's registration conditions.",
    },
    {
      id: "s6-q50",
      chapterNumber: 15,
      question:
        "Under the RBI's Liberalised Remittance Scheme (LRS), up to how much can a resident individual invest overseas in a financial year?",
      options: ["USD 1,00,000", "USD 2,50,000", "USD 5,00,000", "There is no limit"],
      answer: 1,
      explanation:
        "The workbook cites the LRS as an example of a regulatory constraint on investment choices: a resident individual can invest only up to USD 2,50,000 overseas per financial year.",
    },
  ],
};
