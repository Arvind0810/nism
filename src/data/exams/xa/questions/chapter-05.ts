import type { Question } from "@/data/types";

export const chapter05Questions: Question[] = [
  {
    id: "c05-q01",
    question: "Which regulator is responsible for regulating the National Pension System (NPS)?",
    options: [
      "Insurance Regulatory and Development Authority of India (IRDAI)",
      "Securities and Exchange Board of India (SEBI)",
      "Pension Fund Regulatory and Development Authority (PFRDA)",
      "Reserve Bank of India (RBI)",
    ],
    answer: 2,
    explanation:
      "Under the PFRDA Act, 2013, PFRDA regulates the NPS and other pension schemes not covered by any other law. It also registers intermediaries such as fund managers, custodians, the central record keeping agency and trustee banks.",
  },
  {
    id: "c05-q02",
    question: "The term 'securities' is defined in which of the following?",
    options: [
      "Section 11 of the Securities and Exchange Board of India Act, 1992",
      "Section 2(h) of the Securities Contracts (Regulation) Act, 1956",
      "Companies Act, 2013",
      "Depositories Act, 1996",
    ],
    answer: 1,
    explanation:
      "Securities are defined in Section 2(h) of the Securities Contracts (Regulation) Act, 1956. The definition covers shares, bonds, derivatives, units of mutual funds and collective investment schemes, government securities and more.",
  },
  {
    id: "c05-q03",
    question:
      "Which of the following is NOT included in the definition of 'securities' under the Securities Contracts (Regulation) Act, 1956?",
    options: [
      "Units or other instruments issued under a mutual fund scheme",
      "Government securities",
      "Derivatives",
      "A unit linked insurance policy issued by an insurer",
    ],
    answer: 3,
    explanation:
      "The SCRA definition expressly excludes unit linked insurance policies and similar instruments that combine life risk cover with investment and are issued by an insurer. Mutual fund units, G-Secs and derivatives are included.",
  },
  {
    id: "c05-q04",
    question: "Which of the following correctly describes the permitted activities of a payments bank?",
    options: [
      "It accepts small current and savings deposits, issues debit cards and offers remittances, but cannot issue credit cards or lend",
      "It can accept deposits without any limit, issue credit cards and lend to small businesses, marginal farmers and micro industries",
      "It can accept unlimited deposits and lend to any borrower, but it is not allowed to provide payment or remittance services",
      "It can lend against gold and issue credit cards to its customers, but it is not allowed to accept savings deposits",
    ],
    answer: 0,
    explanation:
      "Payments banks were set up by RBI to promote financial inclusion. They accept current and savings deposits up to a cap set by RBI, issue ATM/debit cards (not credit cards) and provide payment and remittance services, but they cannot undertake any lending.",
  },
  {
    id: "c05-q05",
    question: "Which statement correctly distinguishes NBFCs from banks?",
    options: [
      "NBFCs can accept demand deposits and issue cheques like banks",
      "NBFCs cannot accept demand deposits or issue cheques, and lack DICGC deposit insurance",
      "NBFCs are regulated by SEBI as capital market intermediaries, while banks are regulated by RBI",
      "NBFCs are not allowed to undertake leasing or hire purchase business",
    ],
    answer: 1,
    explanation:
      "NBFCs do business similar to banks, such as loans, leasing and hire purchase. However, they cannot accept demand deposits, cannot offer cheque facilities, and do not have deposit insurance from the Deposit Insurance and Credit Guarantee Corporation.",
  },
  {
    id: "c05-q06",
    question: "In the Indian money market, 'short-notice money' refers to funds lent or borrowed for:",
    options: ["Overnight only", "Up to one year", "Up to fourteen days", "Up to ninety-one days"],
    answer: 2,
    explanation:
      "Call money is overnight money, while short-notice money is for up to fourteen days. Together with Treasury Bills, call and short-notice money form the most significant segments of the Indian money market.",
  },
  {
    id: "c05-q07",
    question:
      "Which department of the Ministry of Finance administers government policies relating to public sector banks, term-lending institutions, life and general insurance, and pension reforms?",
    options: [
      "Department of Economic Affairs",
      "Department of Investment and Public Asset Management",
      "Department of Revenue",
      "Department of Financial Services",
    ],
    answer: 3,
    explanation:
      "The Department of Financial Services administers policies for public sector banks, term-lending FIs, insurance and pension reforms. The Department of Economic Affairs handles macroeconomic policy and the functioning of capital markets.",
  },
  {
    id: "c05-q08",
    question: "Which statement about depository participants (DPs) is correct?",
    options: [
      "They open investor accounts to hold securities in dematerialised form and act as agents of the depositories",
      "They are the trading members who execute buy and sell orders on stock exchanges",
      "They are the two depositories in India, namely NSDL and CDSL",
      "They work only with institutional investors, holding their securities and collecting benefits and rights on their behalf",
    ],
    answer: 0,
    explanation:
      "DPs open and maintain investor-level demat accounts and help investors receive and deliver securities, acting as agents of the depositories (NSDL and CDSL). Brokers execute trades, and custodians serve institutional investors.",
  },
  {
    id: "c05-q09",
    question: "In the currency pair USDINR, which currency is the base currency?",
    options: [
      "INR, because the quote is given in rupees",
      "The currency of the country where the trade is settled",
      "USD",
      "The currency selected daily by FBIL",
    ],
    answer: 2,
    explanation:
      "The currency quoted first in a pair is the base currency, and the one quoted second is the quoting currency. In USDINR, USD is the base currency and INR is the quoting currency.",
  },
  {
    id: "c05-q10",
    question:
      "As per the SEBI (Self-Regulatory Organizations) Regulations, 2004, a Self-Regulatory Organisation (SRO) is:",
    options: [
      "A SEBI-recognised organisation of intermediaries representing a segment of the securities market, excluding a stock exchange",
      "Any stock exchange or clearing corporation that is recognised by SEBI to frame and enforce trading rules for its own members",
      "A department of the Ministry of Finance that registers, inspects and supervises securities market intermediaries",
      "A credit rating agency registered with SEBI",
    ],
    answer: 0,
    explanation:
      "The regulations define an SRO as an organisation of intermediaries representing a segment of the securities market, recognised by SEBI, and they specifically exclude a stock exchange. SEBI nominates directors to its board, and the SRO must report member violations to SEBI.",
  },
  {
    id: "c05-q11",
    question:
      "How do portfolio managers differ from asset management companies (AMCs) of mutual funds?",
    options: [
      "Portfolio managers issue units representing participation in a pooled fund, while AMCs manage individual accounts",
      "Portfolio managers offer no security and cannot pool money, while AMCs issue units of a pooled mutual fund",
      "Both pool investors' money and issue units that are listed on exchanges",
      "AMCs act on behalf of a single investor, while portfolio managers manage pooled schemes",
    ],
    answer: 1,
    explanation:
      "AMCs offer units that represent participation in a pool of money used to build a mutual fund portfolio. Portfolio managers do not offer any security and are not permitted to pool money. They create and manage a portfolio on behalf of each investor.",
  },
  {
    id: "c05-q12",
    question: "Which of the following best describes an Account Aggregator?",
    options: [
      "A SEBI-registered distributor that aggregates mutual fund orders from several investors and places them in bulk with AMCs",
      "An entity that can share a customer's financial data with lenders directly, without needing the customer's consent each time",
      "A credit information company that computes credit scores for borrowers",
      "An RBI-licensed entity that consolidates a customer's financial data and shares it with third parties only with express consent",
    ],
    answer: 3,
    explanation:
      "Account Aggregators are licensed by RBI to bring together a customer's financial information and share it with third parties only with express consent. The customer can revoke that consent at any time. The aim is to ease digital lending and reduce paperwork.",
  },
  {
    id: "c05-q13",
    question:
      "Which traditional life insurance product offers pure risk protection, with no benefit payable on maturity?",
    options: ["Endowment policy", "Unit linked insurance plan", "Term insurance", "Whole life policy"],
    answer: 2,
    explanation:
      "Term insurance is a pure risk protection product. The sum assured is paid only if the insured event occurs, and nothing is paid on maturity. Endowment and similar traditional products have maturity benefits, and unit linked plans combine cover with investment.",
  },
  {
    id: "c05-q14",
    question:
      "A large foreign institutional investor needs an entity to hold its securities, manage its bank accounts, handle delivery of securities and money after trades, and collect benefits and rights on its holdings. Which intermediary performs this role?",
    options: [
      "Registrar and transfer agent",
      "Custodian",
      "KYC registration agency",
      "Stock broker",
    ],
    answer: 1,
    explanation:
      "Custodians typically work with institutional investors. They hold securities, manage bank accounts, handle settlement deliveries, keep records and collect benefits and rights. They are usually large banks.",
  },
  {
    id: "c05-q15",
    question: "The government's pension plan for its employees has moved:",
    options: [
      "From a defined benefit structure to a defined contribution structure",
      "From a defined contribution structure to a defined benefit structure",
      "From voluntary participation to compulsory NPS for all citizens",
      "From PFRDA regulation to IRDAI regulation",
    ],
    answer: 0,
    explanation:
      "Earlier, retired employees of a given rank received the same pension with no employee contribution (defined benefit). Now the employee and employer both contribute, and the pension depends on the corpus accumulated (defined contribution).",
  },
  {
    id: "c05-q16",
    question: "Which of the following best describes the purpose of Small Finance Banks approved by RBI?",
    options: [
      "To accept small deposits and provide payment and remittance services without undertaking any lending",
      "To lend mainly to large corporates and infrastructure projects by subscribing to their long-term bonds",
      "To act as banker to the Central and State Governments and maintain the accounts of all scheduled banks",
      "To provide a savings vehicle and supply credit to small businesses, marginal farmers and micro industries",
    ],
    answer: 3,
    explanation:
      "Small Finance Banks provide a savings vehicle, banking facilities and credit to small businesses, marginal farmers, micro and small industries and other unorganised-sector entities. The first option describes a payments bank, and the third describes RBI's own role.",
  },
  {
    id: "c05-q17",
    question: "Which statement about peer-to-peer (P2P) lending in India is correct?",
    options: [
      "It is unsecured lending between persons through online platforms regulated by the RBI",
      "It is secured lending against gold, carried out through platforms regulated by SEBI",
      "It is overnight lending between banks that takes place in the call money market",
      "It is unregulated, so platforms need not carry out due diligence on their lenders",
    ],
    answer: 0,
    explanation:
      "In P2P lending one person lends to another through a P2P platform, and the loans are unsecured. The platforms are regulated by RBI under detailed guidelines and must carry out checks and due diligence on participants, especially lenders.",
  },
  {
    id: "c05-q18",
    question:
      "An individual borrower wants to check her credit history. As per RBI directions, how often must a credit information company give her a Free Full Credit Report, including her credit score?",
    options: [
      "Once every quarter",
      "Only after a loan application is rejected",
      "Once in a calendar year",
      "Once every three financial years",
    ],
    answer: 2,
    explanation:
      "RBI has directed credit information companies to provide a Free Full Credit Report (FFCR), which includes the credit score, to individual borrowers once in a calendar year. CICs are governed by the Credit Information Companies (Regulation) Act, 2005.",
  },
  {
    id: "c05-q19",
    question: "Which of the following is NOT a credit information company operating in India?",
    options: [
      "TransUnion CIBIL",
      "CRISIL Ratings Limited",
      "Equifax Credit Information Services",
      "CRIF High Mark Credit Information Services",
    ],
    answer: 1,
    explanation:
      "The workbook lists TransUnion CIBIL, Experian, Equifax and CRIF High Mark as credit information companies, which compile borrowers' credit reports and scores. CRISIL Ratings is a credit rating agency that rates issuers' debt instruments, not individual borrowers.",
  },
  {
    id: "c05-q20",
    question:
      "An investor completed KYC when investing with one mutual fund and now wants to open an account with a portfolio manager. What role does a KYC registration agency play here?",
    options: [
      "It verifies the investor's income and fixes the maximum amount she may invest with each intermediary",
      "It computes a credit score that the portfolio manager uses to accept or reject the investor's account",
      "It holds the investor's securities in electronic form and credits corporate benefits to her account",
      "It keeps her KYC records in a central database, so she does not have to submit the same documents again",
    ],
    answer: 3,
    explanation:
      "KYC registration agencies maintain investors' KYC records in a central database on behalf of intermediaries. Another intermediary can fetch and verify the records, so the investor does not have to submit the same documents each time.",
  },
  {
    id: "c05-q21",
    question:
      "A listed company is paying a dividend into shareholders' bank accounts and emailing them e-voting details. Which intermediary typically carries out this backroom work using its investor records?",
    options: [
      "Registrar and transfer agent",
      "Clearing corporation of the exchange",
      "Credit rating agency",
      "Merchant banker to the issue",
    ],
    answer: 0,
    explanation:
      "Registrar and transfer agents hold investor records and do the backroom work, such as paying dividends into bank accounts and sending e-voting details. For mutual funds they also process transactions and update investor details such as email, phone number and address.",
  },
  {
    id: "c05-q22",
    question: "Which statement correctly distinguishes an insurance broker from an individual insurance agent?",
    options: [
      "A broker is licensed by SEBI and sells only unit linked plans, while an agent is licensed by IRDAI",
      "A broker is paid a fee by the policyholder, while an agent receives commission from the insurer",
      "A broker can offer policies of any insurer, while an agent typically represents one insurer of each type",
      "A broker can sell only general insurance policies, while an agent can sell only life insurance policies",
    ],
    answer: 2,
    explanation:
      "Insurance brokers are licensed to offer policies from any insurance company and are paid brokerage by the insurer whose policy is sold. Agents are licensed by IRDAI and typically represent one life insurer, one general insurer and one standalone health insurer.",
  },
  {
    id: "c05-q23",
    question:
      "A general insurance company receives a claim after a fire at an insured factory and wants the claim and the quantum of loss assessed. Whom does it typically use?",
    options: [
      "A third party administrator",
      "A surveyor and loss assessor",
      "A corporate agent such as a bank",
      "An insurance broker",
    ],
    answer: 1,
    explanation:
      "General insurers use surveyors and loss assessors to assess a claim and the quantum of loss. Third party administrators are used to process health insurance claims, while agents and brokers distribute policies.",
  },
  {
    id: "c05-q24",
    question: "Which body currently regulates Housing Finance Companies in India?",
    options: [
      "The National Housing Bank, which has always been their only regulator",
      "SEBI, because housing finance companies raise money through debt securities",
      "The Ministry of Housing and Urban Affairs, through its own licensing wing",
      "The Reserve Bank of India, which took over from the National Housing Bank",
    ],
    answer: 3,
    explanation:
      "Housing Finance Companies lend mainly for the purchase of property. They were earlier regulated by the National Housing Bank, but the workbook notes that RBI has now taken over their regulation.",
  },
  {
    id: "c05-q25",
    question:
      "A farmer producer company wants to hedge its crop price risk using commodity futures traded on an exchange. Which regulator oversees that market?",
    options: [
      "Reserve Bank of India (RBI)",
      "Ministry of Consumer Affairs, Food and Public Distribution",
      "Insurance Regulatory and Development Authority of India (IRDAI)",
      "Securities and Exchange Board of India (SEBI)",
    ],
    answer: 3,
    explanation:
      "The workbook states that SEBI regulates the securities markets and the commodity markets. RBI regulates banks, IRDAI regulates insurance and PFRDA regulates the pension sector.",
  },
];
