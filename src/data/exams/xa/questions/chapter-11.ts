import type { Question } from "@/data/types";

export const chapter11Questions: Question[] = [
  {
    id: "c11-q01",
    question: "In the structure of a mutual fund, which entity is appointed to look after the interests of investors in the various schemes?",
    options: ["The sponsor", "The asset management company", "The trustees", "The registrar and transfer agent"],
    answer: 2,
    explanation:
      "The sponsor sets up the mutual fund, and trustees are appointed to look after the interests of investors. The AMC launches and manages the schemes, and the R&T agent maintains investor records.",
  },
  {
    id: "c11-q02",
    question:
      "A scheme holds securities with a market value of ₹52 crore and cash and receivables of ₹1.5 crore. Fees and expenses payable amount to ₹0.5 crore. There are 4 crore units outstanding. What is the NAV per unit?",
    options: ["₹13.25", "₹13.38", "₹12.88", "₹13.50"],
    answer: 0,
    explanation:
      "Net assets = 52 + 1.5 - 0.5 = ₹53 crore, and NAV = 53 / 4 = ₹13.25. ₹13.38 forgets to deduct the expenses, ₹12.88 leaves out the cash and receivables, and ₹13.50 adds the expenses instead of deducting them.",
  },
  {
    id: "c11-q03",
    question:
      "An investor redeems 1,000 units of an open-ended scheme at the prevailing NAV of ₹12. What is the direct effect of this redemption on the scheme's NAV?",
    options: [
      "The NAV falls because net assets have decreased",
      "The NAV rises, because the same portfolio is now shared among fewer units outstanding",
      "The NAV falls by the amount paid out per unit",
      "No change, since net assets and units outstanding fall in the same proportion",
    ],
    answer: 3,
    explanation:
      "The transaction happens at NAV, so net assets and outstanding units fall in the same proportion and the NAV is unchanged. The NAV changes with the value of the portfolio, income and expenses, not with purchases or redemptions at NAV.",
  },
  {
    id: "c11-q04",
    question: "Which statement about a closed-end mutual fund scheme is correct?",
    options: [
      "Units are sold only in the NFO; investors exit early by selling on a stock exchange",
      "Investors can redeem units directly with the fund at the applicable NAV on any business day",
      "Its unit capital changes every time an investor buys or redeems units with the fund",
      "It continues in perpetuity unless investors decide to wind it up",
    ],
    answer: 0,
    explanation:
      "A closed-end scheme runs for a fixed tenor and offers units only in the NFO. It must be listed so that investors can exit by selling to other investors. Its unit capital does not change. Continuous transactions and perpetual life are features of open-ended schemes.",
  },
  {
    id: "c11-q05",
    question: "For an interval fund, the specified transaction periods must be for a minimum of:",
    options: [
      "One day, with a minimum gap of 7 days between two transaction periods",
      "Seven days, with a minimum gap of 30 days between two transaction periods",
      "Two days, with a minimum gap of 15 days between two transaction periods",
      "Fifteen days, with a minimum gap of 2 days between two transaction periods",
    ],
    answer: 2,
    explanation:
      "Interval funds are closed-end funds that open for purchases and redemptions during specified periods. Each transaction period must last at least two days, with at least 15 days between two such periods. Like closed-end funds, they must be listed.",
  },
  {
    id: "c11-q06",
    question: "How does buying units of an Exchange Traded Fund (ETF) differ from buying units of a normal open-ended fund?",
    options: [
      "ETF units are bought from the AMC at the end-of-day NAV, like other schemes",
      "ETFs can be bought only during the NFO",
      "ETFs do not hold any underlying portfolio",
      "ETF units trade on the exchange at real-time prices, between investors",
    ],
    answer: 3,
    explanation:
      "ETFs are listed and trade all day at real-time prices, with investors trading with each other. In a normal open-ended fund, the investor transacts with the mutual fund at a single NAV for the day.",
  },
  {
    id: "c11-q07",
    question: "As of November 2026, which regulations govern mutual funds in India?",
    options: [
      "SEBI (Mutual Funds) Regulations, 2026",
      "SEBI (Mutual Funds) Regulations, 1996",
      "SEBI (Collective Investment Schemes) Regulations, 1999",
      "SEBI (Alternative Investment Funds) Regulations, 2012",
    ],
    answer: 0,
    explanation:
      "The SEBI (Mutual Funds) Regulations, 2026 replaced the 1996 Regulations from 1 April 2026. Among other changes, the expense ratio is now split into a base expense ratio plus brokerage and statutory levies. Note: the Feb 2025 workbook refers to the SEBI (Mutual Funds) Regulations, 1996.",
  },
  {
    id: "c11-q08",
    question: "Since 1 April 2024, which statuses can a mutual fund investor's KYC record at a KYC Registration Agency (KRA) carry?",
    options: [
      "Verified, Pending or Rejected",
      "Approved, Provisional or Blocked",
      "Active, Dormant or Closed",
      "Validated, Registered or On-hold",
    ],
    answer: 3,
    explanation:
      "KYC records are now classified as Validated, Registered or On-hold. A record is put on hold when there is a discrepancy, such as unverified contact details, and it cannot be used for transactions until the issue is fixed. Note: this change is not described in the Feb 2025 workbook.",
  },
  {
    id: "c11-q09",
    question: "Under SEBI's categorisation, a mid-cap fund must invest at least 65% of its total assets in companies ranked:",
    options: [
      "1st to 100th by full market capitalisation",
      "101st to 250th by full market capitalisation",
      "251st onwards by full market capitalisation",
      "1st to 250th by full market capitalisation",
    ],
    answer: 1,
    explanation:
      "Mid-cap companies are those ranked 101st to 250th by full market capitalisation in the list prepared by AMFI. A mid-cap fund must invest at least 65% of its total assets in them. Ranks 1 to 100 are large caps, and ranks 251 onwards are small caps.",
  },
  {
    id: "c11-q10",
    question: "Under SEBI's categorisation, how must a multi cap fund allocate its assets?",
    options: [
      "At least 65% in equity, with no minimum in any market-cap segment",
      "At least 75% in equity, with a minimum of 25% each in large, mid and small caps",
      "At least 80% in equity, with a minimum of 35% each in large and mid caps",
      "At least 65% in equity, with a minimum of 20% each in large, mid and small caps",
    ],
    answer: 1,
    explanation:
      "A multi cap fund must invest at least 75% in equity, with a minimum of 25% each in large, mid and small cap companies. At least 65% in equity with no segment minimum describes a flexi cap fund, and a minimum of 35% each in large and mid caps describes a large and mid cap fund.",
  },
  {
    id: "c11-q11",
    question: "Under SEBI's current categorisation rules, can a mutual fund offer both a value fund and a contra fund?",
    options: [
      "No, an AMC may offer either a value fund or a contra fund, but never both",
      "Yes, without any condition, since value and contra are separate equity categories",
      "Yes, provided the portfolio overlap between the two schemes does not exceed 50%",
      "Only if one of the two schemes is closed-ended and is listed on a recognised stock exchange",
    ],
    answer: 2,
    explanation:
      "SEBI's categorisation circular of 26 February 2026 allows an AMC to offer both a value fund and a contra fund, provided the portfolio overlap between them is no more than 50%. Note: the Feb 2025 workbook says an AMC can have either a value fund or a contra fund, not both.",
  },
  {
    id: "c11-q12",
    question: "Which of the following correctly describes an Equity Linked Savings Scheme (ELSS)?",
    options: [
      "At least 65% in equity, and a 3-year lock-in during which units can be pledged but not redeemed",
      "At least 65% in equity, a 5-year lock-in, and a tax deduction of up to ₹1,00,000 a year",
      "At least 80% in equity, no lock-in, and taxed in the same way as a debt fund",
      "At least 80% in equity, a 3-year lock-in, and up to ₹1,50,000 a year deductible under the old regime",
    ],
    answer: 3,
    explanation:
      "An ELSS must hold at least 80% of its portfolio in equity, and investment qualifies for a deduction of up to ₹1,50,000 a year for investors under the old tax regime. Units are locked in for three years, during which they cannot be redeemed, transferred or pledged. Note: the Income-tax Act, 2025 replaced the 1961 Act from 1 April 2026, so section numbers have changed; the Feb 2025 workbook cites Section 80C.",
  },
  {
    id: "c11-q13",
    question:
      "An open-end debt scheme invests in debt and money market instruments such that the Macaulay duration of its portfolio is between 4 and 7 years. Under SEBI's categorisation it is a:",
    options: [
      "Short duration fund",
      "Medium duration fund",
      "Medium to long duration fund",
      "Long duration fund",
    ],
    answer: 2,
    explanation:
      "The SEBI duration bands are: short duration, 1 to 3 years; medium duration, 3 to 4 years; medium to long duration, 4 to 7 years; long duration, more than 7 years.",
  },
  {
    id: "c11-q14",
    question: "A credit risk fund, as categorised by SEBI, must invest:",
    options: [
      "At least 80% of total assets in corporate debt rated AA+ and above",
      "At least 65% of total assets in corporate debt instruments rated AA and below",
      "At least 80% of total assets in government securities",
      "At least 80% of total assets in debt of banks, PSUs and public financial institutions",
    ],
    answer: 1,
    explanation:
      "Credit risk funds invest at least 65% of total assets in corporate debt rated AA and below, which means more credit risk in return for a higher yield. 80% in AA+ and above describes a corporate bond fund, and 80% in G-Secs describes a gilt fund.",
  },
  {
    id: "c11-q15",
    question: "Why are Fixed Maturity Plans (FMPs) described as the preferred investment in a rising interest rate environment?",
    options: [
      "Held to maturity, their matched-maturity debt locks in high yields without price risk",
      "They are open-ended funds whose NAV rises whenever market interest rates go up",
      "They invest mainly in equities, which tend to benefit from rising interest rates",
      "They actively change their portfolio duration to profit from each interest rate movement",
    ],
    answer: 0,
    explanation:
      "FMPs match the maturity of their debt holdings to the term of the scheme. Held passively to maturity, they eliminate interest rate or price risk, so investors can lock in the high yields available when rates are rising. Active duration management describes a dynamic bond fund.",
  },
  {
    id: "c11-q16",
    question: "Which SEBI hybrid fund category invests between 65% and 80% of its assets in equity and 20% to 35% in debt?",
    options: [
      "Balanced hybrid fund",
      "Conservative hybrid fund",
      "Multi asset allocation fund",
      "Aggressive hybrid fund",
    ],
    answer: 3,
    explanation:
      "Aggressive hybrid funds are mainly equity-oriented, with 65% to 80% in equity and 20% to 35% in debt. Balanced hybrid funds hold 40% to 60% in each, and conservative hybrid funds hold only 10% to 25% in equity.",
  },
  {
    id: "c11-q17",
    question: "Which condition must a multi asset allocation fund meet under SEBI's categorisation?",
    options: [
      "Invest in at least three asset classes, with a minimum of 10% in each",
      "Invest in at least two asset classes, with a minimum of 25% in each",
      "Invest at least 65% in equity and at least 10% in debt instruments",
      "Invest in at least three asset classes, counting foreign equity as a separate class",
    ],
    answer: 0,
    explanation:
      "A multi asset allocation fund must invest in at least three asset classes, with at least 10% of total assets in each, and foreign securities are not treated as a separate asset class. At least 65% in equity plus at least 10% in debt describes an equity savings fund.",
  },
  {
    id: "c11-q18",
    question: "What is the minimum investment an investor must make in a Specialised Investment Fund (SIF)?",
    options: [
      "₹1 lakh in each investment strategy",
      "₹10 lakh across all strategies of the SIF",
      "₹25 lakh in each investment strategy",
      "₹50 lakh across all strategies of the SIF",
    ],
    answer: 1,
    explanation:
      "The workbook (section 11.6) gives the SIF a minimum investment threshold of ₹10 lakh. Under SEBI's framework, in force from 1 April 2025, this applies across all strategies of a SIF per investor, and accredited investors are exempt. ₹50 lakh is the minimum ticket size for PMS.",
  },
  {
    id: "c11-q19",
    question: "Which description best fits the Specialised Investment Fund (SIF) introduced by SEBI?",
    options: [
      "A closed-end fund open only to accredited investors, with a minimum investment of ₹1 crore",
      "A passive-only mutual fund run under the lighter MF Lite framework, with no minimum ticket",
      "A government-guaranteed small savings scheme offered through post offices and select banks",
      "A product between MFs and PMS that allows long-short and non-hedging derivative strategies",
    ],
    answer: 3,
    explanation:
      "The workbook describes the SIF as a new asset class placed between mutual funds (very low ticket size) and PMS (₹50 lakh minimum). It offers ideas not available in existing MF products, such as using derivatives for positions other than hedging, long-short funds and high-yield curated credit funds. MF Lite is a separate framework for mutual funds running only passive funds.",
  },
  {
    id: "c11-q20",
    question: "Under SEBI's rule effective 1 April 2025, within what time must an AMC deploy the money collected in an NFO after units are allotted?",
    options: [
      "Within 7 calendar days of allotment, with no extension allowed in any case",
      "Within 90 calendar days, extendable by a further 90 days at the trustees' discretion",
      "Within 30 business days, extendable by up to 30 more business days with reasons",
      "No deadline applies; deployment is left entirely to the fund manager's judgement",
    ],
    answer: 2,
    explanation:
      "From 1 April 2025, NFO money must be deployed in line with the scheme's asset allocation within 30 business days of allotment, and this period can be extended by a further 30 business days with recorded reasons. Note: this rule is not covered in the Feb 2025 workbook.",
  },
  {
    id: "c11-q21",
    question:
      "A resident individual redeems ₹2 lakh from a liquid fund using the Instant Access Facility (IAF). Her investment in the scheme is worth ₹3 lakh. How much can be credited to her on the same day?",
    options: ["₹2,00,000", "₹1,80,000", "₹2,70,000", "₹50,000"],
    answer: 3,
    explanation:
      "The IAF limit is ₹50,000 or 90% of the latest value of the investment in the scheme, whichever is lower, per day per scheme per investor. 90% of ₹3 lakh is ₹2.7 lakh, so the limit is ₹50,000. The rest is paid in the normal course.",
  },
  {
    id: "c11-q22",
    question:
      "An investor puts ₹3,000 a month into a scheme through an SIP for three months, at NAVs of ₹20, ₹25 and ₹30. What is her average cost per unit (approximately)?",
    options: ["₹25.00", "₹24.32", "₹20.00", "₹30.00"],
    answer: 1,
    explanation:
      "Units bought = 150 + 120 + 100 = 370 for ₹9,000, so the average cost = 9,000 / 370 ≈ ₹24.32. This is below the simple average NAV of ₹25 because the fixed amount buys more units when the NAV is low. This is rupee cost averaging.",
  },
  {
    id: "c11-q23",
    question:
      "An investor has built up a corpus in an equity fund. Her goal is two years away, and she wants to move the money gradually into a short-term debt fund of the same mutual fund rather than redeem it all at once. Which facility suits her best?",
    options: [
      "Systematic Transfer Plan (STP)",
      "Dividend Transfer Plan (DTP)",
      "Systematic Investment Plan (SIP)",
      "Instant Access Facility (IAF)",
    ],
    answer: 0,
    explanation:
      "An STP redeems from a source scheme and invests in a target scheme of the same fund over a set period. This avoids the risk of the NAV being low on a single redemption date. A DTP moves only dividends, and the IAF gives same-day redemption from liquid funds.",
  },
  {
    id: "c11-q24",
    question:
      "An investor follows a value averaging plan with a base instalment of ₹15,000 and an assumed growth rate of 1% a month. After the first month her investment is worth ₹14,700. Using the workbook's method, how much should she invest in the second month?",
    options: ["₹15,000", "₹15,450", "₹14,550", "₹15,300"],
    answer: 1,
    explanation:
      "The investment should have been worth 15,000 × 1.01 = ₹15,150. The shortfall is 15,150 − 14,700 = ₹450, so she invests 15,000 + 450 = ₹15,450. ₹15,000 is what an ordinary SIP would invest, and ₹14,550 deducts the shortfall instead of adding it.",
  },
  {
    id: "c11-q25",
    question: "Compared with the regular plan of the same mutual fund scheme, the direct plan:",
    options: [
      "Holds a different portfolio managed by a separate fund manager",
      "Pays distribution commission to the investor's distributor",
      "Holds the same portfolio but has a lower expense ratio, so net returns are higher",
      "Has a higher expense ratio because the investor deals directly with the fund house",
    ],
    answer: 2,
    explanation:
      "The direct and regular plans of a scheme share the same portfolio. The direct plan pays no distributor commission, so its expense ratio is lower and more of the return stays with the investor. The workbook notes that the trade-off is having no distributor to help with the process.",
  },
];
