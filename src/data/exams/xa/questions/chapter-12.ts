import type { Question } from "@/data/types";

export const chapter12Questions: Question[] = [
  {
    id: "c12-q01",
    question:
      "Portfolio managers in India are currently registered and regulated under which regulations?",
    options: [
      "SEBI (Investment Advisers) Regulations, 2013",
      "SEBI (Portfolio Managers) Regulations, 2020",
      "SEBI (Mutual Funds) Regulations, 1996",
      "SEBI (Alternative Investment Funds) Regulations, 2012",
    ],
    answer: 1,
    explanation:
      "Portfolio managers are registered and regulated under the SEBI (Portfolio Managers) Regulations, 2020, and only SEBI-registered entities can offer PMS. The other regulations govern investment advisers, mutual funds and AIFs respectively. Note: SEBI notified new Portfolio Managers Regulations, 2026 on 7 October 2026, but they take effect only from 1 April 2027, so the 2020 Regulations still apply.",
  },
  {
    id: "c12-q02",
    question:
      "Which statement about the history of portfolio management regulation in India is correct?",
    options: [
      "PMS regulations were introduced only in 2012, after SEBI had notified the AIF Regulations",
      "PMS was first regulated by the RBI in 1993 and was transferred to SEBI's supervision only in 2020",
      "Portfolio management remained unregulated in India until the SEBI regulations of 2020",
      "SEBI issued the Portfolio Managers Regulations in January 1993, before the mutual fund regulations",
    ],
    answer: 3,
    explanation:
      "PMS regulation began in January 1993 when SEBI issued the SEBI (Portfolio Managers) Regulations, 1993. These were among SEBI's earliest regulations and came before the mutual fund regulations, showing the importance of the sector to the regulator.",
  },
  {
    id: "c12-q03",
    question:
      "PMS can be classified by the provider of the service and by product class. Which list correctly gives the classification by provider?",
    options: [
      "Equity, fixed income, commodity, mutual fund and multi-asset based PMS",
      "Discretionary, non-discretionary and advisory portfolio management services",
      "PMS by AMCs, PMS by brokerage houses and boutique (independent) PMS houses",
      "PMS by scheduled banks, PMS by insurance companies and PMS by pension funds",
    ],
    answer: 2,
    explanation:
      "By provider, PMS is offered by asset management companies, brokerage houses and boutique (independent) PMS houses. Equity, fixed income, commodity, mutual fund and multi-asset PMS is the classification by product class, and discretionary, non-discretionary and advisory is the classification by type of service.",
  },
  {
    id: "c12-q04",
    question:
      "Under a non-discretionary portfolio management service, which of the following is true?",
    options: [
      "The client decides what and when to buy or sell, while the portfolio manager executes the trades",
      "The portfolio manager decides what to buy or sell and also executes the trades without consulting the client",
      "The portfolio manager only gives non-binding advice and the client executes the trades",
      "The client both decides and executes the trades, and the portfolio manager only reports performance",
    ],
    answer: 0,
    explanation:
      "A non-discretionary portfolio manager manages funds according to the client's directions: buy/sell decisions rest with the investor, and the portfolio manager executes the trades. Exercising independent discretion describes a discretionary manager, and non-binding advice with client execution describes the advisory service.",
  },
  {
    id: "c12-q05",
    question:
      "An institutional investor manages its own portfolio and hires a portfolio manager only to suggest country-specific investment ideas. The institution takes all decisions and places all trades itself. Which type of service is this?",
    options: [
      "Discretionary portfolio management",
      "Non-discretionary portfolio management",
      "Advisory portfolio management",
      "Direct access facility",
    ],
    answer: 2,
    explanation:
      "In the advisory role the portfolio manager provides non-binding investment ideas, while the investor takes the decisions and executes the transactions. The workbook notes this service is typically used by institutional clients that hire country experts.",
  },
  {
    id: "c12-q06",
    question:
      "The regulations require a discretionary portfolio manager to manage each client's funds individually and independently. What is this meant to prevent?",
    options: [
      "The client from giving directions on individual buy or sell decisions",
      "The PMS from taking on the character of a mutual fund by pooling client money",
      "The portfolio manager from charging any performance-linked fee to such clients",
      "The custodian from holding client securities in a separate account",
    ],
    answer: 1,
    explanation:
      "The discretionary portfolio manager must manage each client's funds individually and independently, according to the client's needs, in a manner that does not take on the character of a mutual fund. Holding client securities in separate accounts is in fact required.",
  },
  {
    id: "c12-q07",
    question:
      "Only a body corporate can be registered as a portfolio manager. Which of the following would NOT qualify as a body corporate under Section 2(11) of the Companies Act, 2013?",
    options: [
      "A Limited Liability Partnership registered in India",
      "A company incorporated outside India with an Indian branch office",
      "A one person company incorporated under the Companies Act",
      "A co-operative society registered under co-operative law",
    ],
    answer: 3,
    explanation:
      "Section 2(11) defines a body corporate to include a company incorporated outside India but expressly excludes a co-operative society registered under any law relating to co-operative societies. Private and public companies, one person companies, LLPs and foreign companies are covered.",
  },
  {
    id: "c12-q08",
    question:
      "An entity applies to SEBI for registration as a portfolio manager. Which statement about the application is correct?",
    options: [
      "It is made in Form A of Schedule I, with a non-refundable fee and a three-year business plan",
      "It is made to AMFI in Form B, and the fee is refunded in full if registration is refused",
      "It is filed with a stock exchange, and the registration must then be renewed every three years",
      "It is made in Form A, but no business plan or draft client agreement needs to be attached",
    ],
    answer: 0,
    explanation:
      "The application is made to SEBI in Form A of Schedule I with a non-refundable fee. Form A asks for, among other things, the organisation structure, infrastructure, a business plan for three years, financial information, and copies of the draft client agreement and draft Disclosure Document.",
  },
  {
    id: "c12-q09",
    question:
      "What is the net worth requirement an applicant must meet to obtain registration as a portfolio manager?",
    options: ["₹2 crore", "₹5 crore", "₹10 crore", "₹50 lakh"],
    answer: 1,
    explanation:
      "Before granting registration, SEBI checks that the applicant fulfils the net worth requirement of five crore rupees. ₹50 lakh is the minimum client investment, which is a different requirement.",
  },
  {
    id: "c12-q10",
    question:
      "Which of the following correctly describes the requirements for the principal officer of a portfolio manager applicant?",
    options: [
      "A professional qualification in finance, law, accountancy or business management, five years' relevant experience, and NISM certification",
      "A graduation from a recognised university and at least two years of experience in related activities in the securities market",
      "A professional qualification in finance or law, at least ten years of experience in commercial banking, and no specific certification requirement",
      "A chartered accountancy qualification and three years of audit experience, with NISM certification optional",
    ],
    answer: 0,
    explanation:
      "The principal officer must have a professional qualification in finance, law, accountancy or business management, at least five years of experience in related securities-market activities, and the NISM certification specified by SEBI. Graduation plus two years of experience is the requirement for the additional employee, not the principal officer.",
  },
  {
    id: "c12-q11",
    question:
      "Apart from its principal officer, which staffing condition does SEBI check before registering a portfolio manager?",
    options: [
      "A chief risk officer with at least ten years of experience in commercial banking",
      "At least five research analysts, each holding a postgraduate degree in finance or economics",
      "An internal auditor who is an ICAI member and also holds the NISM certification",
      "A compliance officer and one graduate employee with two years' relevant experience",
    ],
    answer: 3,
    explanation:
      "SEBI checks that the applicant has appointed a compliance officer and, in addition to the principal officer and compliance officer, employs at least one graduate with at least two years of experience in related securities-market activities.",
  },
  {
    id: "c12-q12",
    question:
      "How long does a certificate of registration granted to a portfolio manager remain valid?",
    options: [
      "It remains valid unless it is suspended or cancelled by SEBI",
      "Three years, after which it must be renewed",
      "Five years, after which a fresh application is required",
      "One year, renewable annually on payment of fees",
    ],
    answer: 0,
    explanation:
      "The workbook states that the certificate of registration remains valid unless it is suspended or cancelled by the regulator. It has no fixed renewal period.",
  },
  {
    id: "c12-q13",
    question:
      "As per the responsibilities listed in the workbook, a portfolio manager shall not accept funds or securities from a client worth less than:",
    options: ["₹10 lakh", "₹25 lakh", "₹1 crore", "₹50 lakh"],
    answer: 3,
    explanation:
      "The portfolio manager shall not accept from a client funds or securities worth less than fifty lakh rupees. ₹1 crore is the minimum investment for an AIF, not a PMS.",
  },
  {
    id: "c12-q14",
    question:
      "What is the maximum portion of a client's portfolio that a portfolio manager may invest in securities of its own associates or related parties?",
    options: [
      "10%, with no client consent required",
      "25%, with consent taken before every transaction",
      "30%, with a one-time written consent from the client",
      "50%, with a one-time written consent from the client",
    ],
    answer: 2,
    explanation:
      "A portfolio manager may invest up to 30% of a client's portfolio in securities of its own associates or related parties, after taking a one-time written consent from the client.",
  },
  {
    id: "c12-q15",
    question:
      "A portfolio manager wants to add high-yield bonds rated below investment grade to its clients' portfolios. What do the responsibilities in the workbook say?",
    options: [
      "Portfolio managers shall not invest in below investment grade securities",
      "They are allowed up to 30% of the portfolio with one-time written consent",
      "They are allowed only for discretionary clients investing over ₹1 crore",
      "They are allowed if the client signs a separate risk disclosure for each trade",
    ],
    answer: 0,
    explanation:
      "The workbook lists among a portfolio manager's responsibilities that it shall not make investments in below investment grade securities. The 30% limit with one-time written consent applies to securities of associates or related parties, not to sub-investment grade paper.",
  },
  {
    id: "c12-q16",
    question: "Which of the following is a portfolio manager NOT permitted to do?",
    options: [
      "Segregate each client's holding of securities in separate accounts",
      "Borrow funds or securities on behalf of the client",
      "Keep client funds in a separate account maintained in a Scheduled Commercial Bank",
      "Act in a fiduciary capacity with regard to the client's funds",
    ],
    answer: 1,
    explanation:
      "The regulations prohibit a portfolio manager from borrowing funds or securities on behalf of the client. Segregating holdings, keeping client funds in a separate account with a scheduled commercial bank, and acting as a fiduciary are all mandatory responsibilities.",
  },
  {
    id: "c12-q17",
    question:
      "As per the workbook's description of PMS costs, which of the following is treated as a fixed cost for the investor?",
    options: [
      "The profit-sharing fee charged as a share of gains once the hurdle rate is crossed",
      "A fee of, say, 1% of the amount managed, plus brokerage on buying and selling assets",
      "The catch-up fee charged on the entire return once the agreed hurdle rate is crossed",
      "Fees charged only when the portfolio value rises above its previous high watermark",
    ],
    answer: 1,
    explanation:
      "The fixed cost is paid whatever the outcome, usually a fixed percentage of the amount managed, such as 1%. The workbook adds that costs such as brokerage on buying and selling assets also become a fixed cost for the investor. Profit-sharing, catch-up and high watermark fees are performance-linked.",
  },
  {
    id: "c12-q18",
    question:
      "A PMS client invests ₹50 lakh. At the end of Year 1 the portfolio is worth ₹60 lakh and profit-sharing fees are paid. It falls to ₹55 lakh at the end of Year 2 and rises to ₹65 lakh at the end of Year 3. Under the high watermark principle, what gain is the basis for the profit-sharing fee in Year 3?",
    options: ["₹5 lakh", "₹10 lakh", "₹15 lakh", "No fee is payable in Year 3"],
    answer: 0,
    explanation:
      "Under the high watermark principle, fees are charged only on gains above the previous highest value on which fees were paid (₹60 lakh). The basis is therefore ₹65 lakh − ₹60 lakh = ₹5 lakh. Measuring from ₹55 lakh would charge the investor again for recovering earlier losses.",
  },
  {
    id: "c12-q19",
    question: "According to the workbook, when is a profit-sharing fee payable for a financial year?",
    options: [
      "Whenever the portfolio's value at year-end is higher than the amount originally invested",
      "When the year's return exceeds the hurdle rate, even if the value is below the previous high watermark",
      "Every year, as a fixed percentage of assets under management, irrespective of the returns earned",
      "When the year's return exceeds the hurdle rate and the fund value is above the previous high watermark",
    ],
    answer: 3,
    explanation:
      "Returns are computed per financial year. Profit sharing applies, as per the agreed terms, only if the return is above the hurdle rate and the current fund value is higher than the previous high watermark. A fixed percentage of assets irrespective of returns is the fixed fee.",
  },
  {
    id: "c12-q20",
    question:
      "A ₹1 crore PMS portfolio earns 14% in a year. The agreement has a hurdle rate of 8% and a performance fee of 20% of profits on a no catch-up basis. What is the performance fee?",
    options: ["₹2,80,000", "₹1,60,000", "₹6,00,000", "₹1,20,000"],
    answer: 3,
    explanation:
      "With no catch-up, only the gain above the hurdle counts: (14% − 8%) × ₹1 crore = ₹6,00,000, and 20% of that is ₹1,20,000. ₹2,80,000 would be the fee under a catch-up arrangement, where the fee is calculated on the entire 14% gain once the hurdle is crossed.",
  },
  {
    id: "c12-q21",
    question:
      "A client invests ₹1 crore in a PMS with a fixed fee of 1.5% of the amount invested and a profit-sharing fee of 15% above a 10% hurdle, on a no catch-up basis. The portfolio earns 18% in the year. What is the total fee?",
    options: ["₹1,50,000", "₹4,20,000", "₹2,70,000", "₹1,20,000"],
    answer: 2,
    explanation:
      "Fixed fee = 1.5% × ₹1 crore = ₹1,50,000. Profit share = 15% × (18% − 10%) × ₹1 crore = ₹1,20,000. Total = ₹2,70,000. ₹4,20,000 applies the profit share to the whole 18% gain, as a catch-up arrangement would.",
  },
  {
    id: "c12-q22",
    question:
      "A ₹80 lakh PMS portfolio carries a fixed fee of 2% of the amount invested and a 20% profit share above an 8% hurdle rate. The portfolio returns 7% in the year. What is the total fee?",
    options: ["₹2,72,000", "₹1,12,000", "₹1,44,000", "₹1,60,000"],
    answer: 3,
    explanation:
      "The 7% return is below the 8% hurdle, so no profit-sharing fee is payable and only the fixed fee applies: 2% × ₹80 lakh = ₹1,60,000. ₹2,72,000 wrongly adds 20% of the whole 7% gain, and the shortfall against the hurdle is not deducted from the fixed fee.",
  },
  {
    id: "c12-q23",
    question:
      "What is the main benefit to an investor of using the direct access facility offered by a PMS?",
    options: [
      "A higher gross return, because the manager uses a different strategy for direct investors",
      "Lower expenses, since no distributor is involved, with fund management unchanged",
      "The ₹50 lakh minimum investment requirement is waived for direct-access investors",
      "The investor gets discretionary management while paying only advisory-service fees",
    ],
    answer: 1,
    explanation:
      "Under direct access, the investor approaches the PMS without a distributor, so distribution costs are cut and lower expenses are charged. The rest of the fund management process does not change, so the benefit comes from cost, not from different portfolio performance.",
  },
  {
    id: "c12-q24",
    question:
      "Which of the following must the Disclosure Document given by a portfolio manager to a client include?",
    options: [
      "A guaranteed minimum annual return for each of the investment approaches it offers",
      "The names, holdings and returns of all the other clients of the portfolio manager",
      "Fees for each service, risks of each investment approach, and related-party disclosures",
      "The audited returns for the past three years only, without any details of fees charged",
    ],
    answer: 2,
    explanation:
      "The Disclosure Document must include the quantum and manner of payment of fees for each activity, portfolio risks specific to each investment approach, and related-party disclosures as required under ICAI accounting standards. It must also disclose the range of fees charged under various heads.",
  },
  {
    id: "c12-q25",
    question:
      "As per SEBI requirements on performance disclosure, how must a portfolio manager report its performance?",
    options: [
      "Only in reports to individual clients, since each portfolio is customised",
      "Only in filings with SEBI, while marketing material may highlight its best strategies",
      "Uniformly in SEBI disclosures, marketing materials, client reports and its website",
      "Only on its own website, updated once every three years with audited figures",
    ],
    answer: 2,
    explanation:
      "The portfolio manager shall report its performance uniformly in disclosures to SEBI, marketing materials, reports to clients and on its website. The Disclosure Document must also be available on the website and filed with SEBI.",
  },
];
