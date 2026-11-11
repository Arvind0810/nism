import type { Question } from "@/data/types";

export const chapter13Questions: Question[] = [
  {
    id: "c13-q01",
    question:
      "According to the workbook, what is the essential characteristic that distinguishes alternative investments from traditional investments?",
    options: [
      "Guaranteed returns",
      "Listing on a recognised stock exchange",
      "Illiquidity",
      "Low minimum investment",
    ],
    answer: 2,
    explanation:
      "Traditional investments are mainly on-market and liquid, while the essential characteristic of alternative investments is illiquidity. They are off-market or complex structures that are not readily convertible into cash.",
  },
  {
    id: "c13-q02",
    question:
      "Under the SEBI (Alternative Investment Funds) Regulations, 2012, an AIF is primarily defined as:",
    options: [
      "A privately pooled investment vehicle collecting funds from Indian or foreign investors for a defined investment policy",
      "A publicly offered scheme that invests in listed equity and debt securities on behalf of retail investors",
      "An exchange traded fund, listed on a stock exchange, that tracks an index of alternative assets such as gold and real estate",
      "A portfolio management service that manages segregated individual accounts of HNIs under a contract",
    ],
    answer: 0,
    explanation:
      "An AIF is primarily a privately pooled investment vehicle, with funds pooled from India or abroad, for a defined investment policy. 'Privately pooled' means the money comes from select investors such as institutions and HNIs, not from the general public.",
  },
  {
    id: "c13-q03",
    question:
      "What is the minimum corpus that each scheme of an AIF must have?",
    options: [
      "₹1 crore",
      "₹5 crore",
      "₹10 crore",
      "₹20 crore",
    ],
    answer: 3,
    explanation:
      "Each scheme of an AIF must have a corpus of at least ₹20 crore. ₹1 crore is the minimum investment per investor, not the scheme corpus.",
  },
  {
    id: "c13-q04",
    question:
      "An employee of the Manager of an AIF wishes to invest in the AIF's scheme. What is the minimum amount the AIF may accept from this employee?",
    options: [
      "₹10 lakh",
      "₹25 lakh",
      "₹50 lakh",
      "₹1 crore",
    ],
    answer: 1,
    explanation:
      "An AIF cannot accept less than ₹1 crore from an investor. For employees or directors of the AIF or of its Manager, the minimum is ₹25 lakh.",
  },
  {
    id: "c13-q05",
    question:
      "A Category III AIF scheme has a corpus of ₹300 crore. What is the minimum continuing interest the Manager or Sponsor must hold in it?",
    options: [
      "₹15 crore",
      "₹7.5 crore",
      "₹10 crore",
      "₹5 crore",
    ],
    answer: 2,
    explanation:
      "For Category III AIFs, continuing interest must be at least 5% of the corpus or ₹10 crore, whichever is lower. 5% of ₹300 crore is ₹15 crore, so the requirement is ₹10 crore. The 2.5% / ₹5 crore rule applies to Category I and II AIFs, and the interest cannot be held through a waiver of management fees.",
  },
  {
    id: "c13-q06",
    question:
      "What is the maximum number of investors permitted in a single scheme of an AIF (subject to Companies Act provisions where the AIF is a company)?",
    options: [
      "49",
      "200",
      "500",
      "1,000",
    ],
    answer: 3,
    explanation:
      "No scheme of an AIF can have more than one thousand investors. AIFs also cannot solicit or collect funds except by private placement.",
  },
  {
    id: "c13-q07",
    question:
      "Which statement about the listing of AIF units is correct?",
    options: [
      "Units of open-ended AIFs must be listed within 30 days of launch, with a minimum tradable lot of ₹25 lakh",
      "Close-ended AIF units may be listed, with a ₹1 crore minimum tradable lot, only after the final close",
      "Units of any AIF may be listed at any time after the first close, with a minimum tradable lot of ₹10 lakh",
      "AIF units can never be listed on a stock exchange because AIFs are privately pooled vehicles",
    ],
    answer: 1,
    explanation:
      "Units of close-ended AIFs may be listed on a stock exchange with a minimum tradable lot of one crore rupees, and listing is permitted only after the final close of the fund or scheme.",
  },
  {
    id: "c13-q08",
    question:
      "A Category III AIF may invest not more than what percentage of its investable funds in a single investee company?",
    options: [
      "10%",
      "25%",
      "30%",
      "5%",
    ],
    answer: 0,
    explanation:
      "Category III AIFs may invest no more than 10% of investable funds in one investee company. Category I and II AIFs have a higher limit of 25%.",
  },
  {
    id: "c13-q09",
    question:
      "Under what condition may an AIF invest in its associates?",
    options: [
      "Only with prior approval of SEBI and disclosure in the placement memorandum",
      "Only if the sponsor's continuing interest in the scheme exceeds 10% of the corpus",
      "Only with the approval of 75% of investors by value of their investment in the AIF",
      "Freely, up to 30% of investable funds, with a one-time written consent from investors",
    ],
    answer: 2,
    explanation:
      "An AIF shall not invest in associates except with the approval of 75% of investors by value of their investment in the AIF. The 30% associate limit belongs to portfolio managers, not AIFs.",
  },
  {
    id: "c13-q10",
    question:
      "Which of the following funds falls under Category I AIF as per the SEBI AIF Regulations?",
    options: [
      "A hedge fund using leveraged derivative strategies",
      "A private equity fund that receives no specific government incentives",
      "A debt fund that receives no specific incentives or concessions",
      "An infrastructure fund",
    ],
    answer: 3,
    explanation:
      "Category I AIFs invest in sectors the government or regulators consider socially or economically desirable, and include venture capital, SME, social venture, infrastructure and special situation funds. PE and debt funds without specific incentives fall in Category II, and hedge funds fall in Category III.",
  },
  {
    id: "c13-q11",
    question:
      "A private equity fund that receives no specific incentives from the government or any regulator, and borrows only to meet day-to-day operational requirements, would be registered as a:",
    options: [
      "Category I AIF",
      "Category II AIF",
      "Category III AIF",
      "Angel fund (Category I)",
    ],
    answer: 1,
    explanation:
      "Category II covers AIFs that do not fall in Category I or III and do not use leverage except for day-to-day operational needs or as permitted. PE and debt funds without specific government incentives are included in this category.",
  },
  {
    id: "c13-q12",
    question:
      "Following SEBI's September 2025 amendment to the AIF Regulations, who may invest in an angel fund?",
    options: [
      "Any resident individual, provided the minimum investment of ₹25 lakh is met",
      "Only Category I and Category II AIFs, through their fund-of-funds schemes",
      "Only individuals with net tangible assets of ₹2 crore, excluding their home",
      "Only accredited investors, under SEBI's accredited investor framework",
    ],
    answer: 3,
    explanation:
      "Since the September 2025 amendment, angel funds can raise money only from accredited investors, replacing the separate 'angel investor' eligibility test. Note: amended by SEBI in September 2025; the Feb 2025 workbook defines angel investors as individuals with net tangible assets of at least ₹2 crore (excluding the principal residence) plus relevant experience, bodies corporate with net worth of at least ₹10 crore, or registered AIFs/VCFs.",
  },
  {
    id: "c13-q13",
    question:
      "How does a private equity fund typically differ from a venture capital fund?",
    options: [
      "Private equity funds invest only in debt, while venture capital funds invest only in equity",
      "Private equity funds are open-ended schemes offered to retail investors through public issues",
      "Private equity funds mostly provide later-stage financing to established businesses that need to scale up",
      "Private equity funds invest only in listed shares of large companies, while VC funds invest only in unlisted firms",
    ],
    answer: 2,
    explanation:
      "Both are equity-based investors, but venture capital funds focus on early-stage start-ups, while private equity funds mostly provide later-stage financing to businesses that have an established business model and need to scale up.",
  },
  {
    id: "c13-q14",
    question:
      "Which statement best describes a Special Situation Fund?",
    options: [
      "It invests primarily in unlisted securities of SMEs or those listed on an SME exchange",
      "It invests in special situation assets and may act as a resolution applicant under the IBC, 2016",
      "It employs complex trading strategies, using leverage through listed and unlisted derivatives, for short-term returns",
      "It invests in social ventures and enterprises that satisfy the social performance norms laid down by the fund",
    ],
    answer: 1,
    explanation:
      "A Special Situation Fund invests in special situation assets as per its objectives and may act as a resolution applicant under the IBC, 2016. The other options describe SME funds, hedge funds and social impact funds respectively.",
  },
  {
    id: "c13-q15",
    question:
      "Which of the following individuals meets the eligibility criteria to be an accredited investor?",
    options: [
      "Annual income of ₹2.2 crore, with a net worth of ₹1 crore",
      "Net worth of ₹7 crore, held entirely in financial assets",
      "Annual income of ₹1.2 crore, with a net worth of ₹4.5 crore",
      "Net worth of ₹8 crore, of which ₹3 crore is in financial assets",
    ],
    answer: 0,
    explanation:
      "An individual qualifies with annual income of at least ₹2 crore; or net worth of at least ₹7.5 crore with at least ₹3.75 crore in financial assets; or annual income of at least ₹1 crore plus net worth of at least ₹5 crore with at least ₹2.5 crore in financial assets. Only the ₹2.2 crore income meets a test; the others fall short on net worth or on the financial-asset portion.",
  },
  {
    id: "c13-q16",
    question:
      "After SEBI's September 2025 amendment, what is the permitted range of investment by an angel fund in a single investee startup?",
    options: [
      "₹25 lakh to ₹10 crore",
      "₹50 lakh to ₹5 crore",
      "₹1 crore to ₹25 crore",
      "₹10 lakh to ₹25 crore",
    ],
    answer: 3,
    explanation:
      "An angel fund may now invest between ₹10 lakh and ₹25 crore in a single startup, widening the range at both ends. Note: amended by SEBI in September 2025; the earlier range was ₹25 lakh to ₹10 crore, and the Feb 2025 workbook does not state it.",
  },
  {
    id: "c13-q17",
    question:
      "What is the minimum investment per investor in a large value fund for accredited investors, following SEBI's November 2025 change?",
    options: [
      "₹25 crore",
      "₹70 crore",
      "₹10 crore",
      "₹50 crore",
    ],
    answer: 0,
    explanation:
      "A large value fund is an AIF scheme in which each investor is an accredited investor; the minimum investment per investor is now ₹25 crore. Note: reduced by SEBI in November 2025 from ₹70 crore; the Feb 2025 workbook does not cover large value funds.",
  },
  {
    id: "c13-q18",
    question:
      "Which of the following non-individual entities qualifies as an accredited investor?",
    options: [
      "A body corporate with a net worth of ₹40 crore",
      "A partnership firm in which only the managing partner meets the individual criteria",
      "A trust (other than a family trust) with a net worth of ₹55 crore",
      "A body corporate with annual income of ₹5 crore and net worth of ₹20 crore",
    ],
    answer: 2,
    explanation:
      "Trusts (other than family trusts) and bodies corporate need a net worth of at least ₹50 crore, so only the ₹55 crore trust qualifies. A partnership firm qualifies only if each partner independently meets the accreditation criteria.",
  },
  {
    id: "c13-q19",
    question:
      "A Sponsor wishes to co-invest alongside its AIF in an investee company. Which condition do the AIF Regulations place on such co-investment?",
    options: [
      "It must equal at least 2.5% of the AIF's own investment in that company",
      "It cannot be on terms more favourable than those offered to the AIF",
      "It needs prior approval from SEBI and from the investee company's board",
      "It is allowed only after the AIF has fully exited the investee company",
    ],
    answer: 1,
    explanation:
      "Co-investment in an investee company by a Manager, Sponsor or co-investor shall not be on terms more favourable than those offered to the AIF. This protects the AIF's investors from being disadvantaged by insiders.",
  },
  {
    id: "c13-q20",
    question:
      "Until an AIF's investable funds are deployed as per its investment objective, where may the un-invested portion be parked?",
    options: [
      "In listed equity shares of large companies, up to 25% of the corpus",
      "Only in the sponsor's group companies, with approval of 75% of investors",
      "In units of Category III AIFs that follow low-risk arbitrage strategies",
      "In liquid mutual funds, bank deposits, T-bills, CPs, CDs or similar assets",
    ],
    answer: 3,
    explanation:
      "The un-invested portion may be placed in liquid mutual funds, bank deposits or other high-quality liquid assets such as Treasury bills, CBLOs, commercial papers and certificates of deposit until it is deployed.",
  },
  {
    id: "c13-q21",
    question:
      "Which statement about the evolution of alternative investments in India is correct, as per the workbook?",
    options: [
      "SEBI's 1996 VCF Regulations removed the earlier focus on 'untried technologies'",
      "Venture capital in India began in the 2000s with funds set up by foreign PE firms",
      "Tax laws favoured venture capital from the start, so no reforms followed 1996",
      "The 2008 financial crisis made exits easier through a strong capital market",
    ],
    answer: 0,
    explanation:
      "The SEBI (Venture Capital Fund) Regulations, 1996 removed the focus on 'untried technologies' and brought private capital investment in unlisted companies under institutional investment. Venture capital began in the 1980s through state-level corporations, FIs and PSU banks, tax reforms came in 2000 after the K.B. Chandrasekhar Committee, and the 2008 crisis made exits harder.",
  },
  {
    id: "c13-q22",
    question:
      "Some venture debt funds finance advanced-stage ventures through mezzanine financing. What is mezzanine financing?",
    options: [
      "Senior secured loans with first claim on the company's cash flows",
      "Seed-stage equity investment in start-ups, made before angel funding",
      "Refinancing of stressed loans through settlements under the IBC, 2016",
      "Debt financing with some equity upside, such as attached warrants",
    ],
    answer: 3,
    explanation:
      "Mezzanine financing is debt financing with some equity upside, such as warrants attached to it. Subordinate debt to companies that already carry high senior debt is called a leveraged loan, and IBC-related refinancing is distressed debt financing.",
  },
  {
    id: "c13-q23",
    question:
      "According to the workbook, why is infrastructure financing through AIFs dominated by sovereign wealth funds, multilateral funds and sector-focussed AIFs?",
    options: [
      "Because SEBI restricts infrastructure funds to investors resident outside India",
      "Because of high illiquidity, long gestation risk and lower equity returns from SPVs",
      "Because infrastructure SPVs must list on a stock exchange before an AIF invests",
      "Because infrastructure funds are Category III AIFs that rely on high leverage",
    ],
    answer: 1,
    explanation:
      "Infrastructure financing involves high illiquidity, long gestation risk in project implementation, long amortisation of debt and lower equity returns from SPVs, so mostly specialised long-term investors operate in it. Infrastructure funds are Category I AIFs.",
  },
  {
    id: "c13-q24",
    question:
      "Which of the following can be a social venture in which a Social Impact Fund invests?",
    options: [
      "A Section 8 company formed to promote social welfare",
      "A listed hedge fund that donates part of its profits",
      "A real estate developer building luxury housing",
      "A company in insolvency resolution under the IBC",
    ],
    answer: 0,
    explanation:
      "Social ventures are formed to promote social welfare, solve problems or provide social benefits. They may include public charitable trusts, societies registered for charitable purposes, Section 8 companies under the Companies Act, 2013, and microfinance institutions.",
  },
  {
    id: "c13-q25",
    question:
      "How does the workbook describe venture capital?",
    options: [
      "The final stage of financing, just before a company's IPO",
      "Financing mostly suited to asset-heavy manufacturing firms",
      "The first stage of institutional financing, after the angel stage",
      "Short-term working capital lending by banks to start-ups",
    ],
    answer: 2,
    explanation:
      "Venture capital can be termed the first stage of institutional financing in a company, after the angel stage. It mostly suits asset-light businesses that are intensive in technology, intellectual property or digital media.",
  },
];
