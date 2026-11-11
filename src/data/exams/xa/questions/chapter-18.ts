import type { Question } from "@/data/types";

export const chapter18Questions: Question[] = [
  {
    id: "c18-q01",
    question:
      "The Securities Contracts (Regulation) Act, 1956 gives regulatory jurisdiction over stock exchanges, contracts in securities and listing of securities to which authority?",
    options: [
      "Securities and Exchange Board of India",
      "Reserve Bank of India",
      "The Central Government",
      "The stock exchanges themselves, as self-regulatory organisations",
    ],
    answer: 2,
    explanation:
      "SCRA 1956 gives the Central Government regulatory jurisdiction over (a) stock exchanges, through recognition and continued supervision, (b) contracts in securities and (c) listing of securities. Some of these powers may be delegated to SEBI under the SEBI Act.",
  },
  {
    id: "c18-q02",
    question:
      "Under the SEBI (Prohibition of Fraudulent and Unfair Trade Practices relating to Securities Market) Regulations, 2003, which statement about 'fraud' is correct?",
    options: [
      "Wrongful gain or avoidance of loss is not necessary to establish fraud",
      "Fraud is established only where the person making the statement made a wrongful gain from it",
      "A representation made recklessly and carelessly is not fraud if it later turns out to be true",
      "Only written statements, not oral ones, can amount to fraud",
    ],
    answer: 0,
    explanation:
      "The PFUTP Regulations define fraud to include any act, expression, omission or concealment committed to induce another person to deal in securities, whether or not there is wrongful gain or avoidance of loss. A representation made recklessly and carelessly, whether true or false, is cited as fraud.",
  },
  {
    id: "c18-q03",
    question:
      "Under the SEBI (Prohibition of Insider Trading) Regulations, 2015, who is an 'insider'?",
    options: [
      "Only a director or key managerial person of the listed company whose shares are traded",
      "Any connected person, or anyone in possession of or having access to UPSI",
      "Any shareholder holding more than 5% of a listed company's paid-up share capital",
      "Any employee of a stock exchange or depository",
    ],
    answer: 1,
    explanation:
      "Under the PIT Regulations, 2015, an insider is any person who is (i) a connected person, or (ii) in possession of or having access to unpublished price sensitive information (UPSI). Trading on such non-public information gives an undue advantage and harms market integrity.",
  },
  {
    id: "c18-q04",
    question:
      "Which of the following persons must obtain registration under the SEBI (Investment Advisers) Regulations, 2013?",
    options: [
      "An IRDAI-registered insurance agent advising solely on insurance products",
      "A chartered accountant who gives investment advice incidental to his professional service",
      "A person who gives general comments in good faith on market trends without naming any security",
      "A person who charges a fee for investment advice given to Non-Resident Indian clients",
    ],
    answer: 3,
    explanation:
      "Advice given exclusively to clients based outside India is exempt, but the proviso says that advising NRIs or PIOs falls within the purview of the IA Regulations. The other three are listed exemptions.",
  },
  {
    id: "c18-q05",
    question:
      "Under the amended IA Regulations, what minimum educational qualification must 'persons associated with investment advice' hold at all times, in addition to the relevant NISM certification?",
    options: [
      "A post-graduate degree in finance, with at least five years of relevant experience",
      "A graduate degree in any discipline from a recognised university or institution",
      "A professional qualification such as CA or CS, with two years of advisory experience",
      "A two-year diploma in capital markets awarded only by NISM",
    ],
    answer: 1,
    explanation:
      "Persons associated with investment advice need a graduate degree in any discipline from a recognised university or institution, plus the relevant NISM certification renewed before it expires. The individual IA or principal officer needs a finance-related professional qualification or degree, the NISM PG programme or a CFA charter; the old experience requirement no longer applies.",
  },
  {
    id: "c18-q06",
    question:
      "Dr. Rohit, a practising dentist, is also registered with SEBI as a part-time investment adviser. Which requirement applies specifically to him?",
    options: [
      "He needs only the NISM certification, since the qualification requirement is waived for part-time IAs",
      "He may also distribute mutual funds to his advisory clients, as advisory is not his main business",
      "He must use the term 'part-time investment adviser' in all his correspondence with clients",
      "He must maintain twice the deposit that applies to a full-time individual investment adviser",
    ],
    answer: 2,
    explanation:
      "A part-time IA is an individual or firm that gives investment advice for consideration while also engaged in another business or employment not related to securities. It must meet the same qualification and certification requirements and must use the term 'part-time investment adviser' in all correspondence with clients.",
  },
  {
    id: "c18-q07",
    question:
      "Meena is registered as an individual investment adviser. In the current financial year she has 280 clients, but the fees she has collected have reached ₹3.2 crore. What must she do?",
    options: [
      "Apply for in-principle registration as a non-individual IA, valid for three months for the transition",
      "Nothing yet, since the obligation to convert arises only when her clients exceed 300",
      "Stop accepting new clients until her fees for the financial year fall back below ₹3 crore",
      "Transfer some clients to another IA until her client count falls below the limit of 150",
    ],
    answer: 0,
    explanation:
      "An individual IA whose clients exceed 300 at any time, or whose fees in a financial year exceed ₹3 crore, whichever is earlier, must apply for in-principle registration as a non-individual IA. The in-principle registration is valid for three months, after which (or on grant of the new certificate, if earlier) the individual registration is surrendered.",
  },
  {
    id: "c18-q08",
    question:
      "An individual investment adviser had a maximum of 220 clients at any point during the previous financial year. What deposit must it maintain?",
    options: ["₹1 lakh", "₹5 lakh", "₹10 lakh", "₹2 lakh"],
    answer: 3,
    explanation:
      "IAs keep a deposit with a scheduled bank, lien-marked in favour of the IAASB, based on the maximum number of clients in the previous year: up to 150 clients ₹1 lakh, 151–300 ₹2 lakh, 301–1,000 ₹5 lakh and above 1,000 ₹10 lakh. The deposit can be used if the IA fails to pay dues arising from ODR arbitration or conciliation.",
  },
  {
    id: "c18-q09",
    question:
      "On 1 March, an investment adviser advises clients to sell stock X. On 5 March, the adviser wants to buy stock X for its own account because it believes the situation has changed. What do the regulations require?",
    options: [
      "It may buy freely, since the restriction applies only to trades in the same direction as the advice",
      "It may buy only after obtaining SEBI's prior approval for the own-account transaction",
      "It cannot buy stock X at all for one year from the date of the original advice",
      "It may buy only after giving clients its revised assessment at least 24 hours in advance",
    ],
    answer: 3,
    explanation:
      "An IA must not trade on its own account against its advice for fifteen days from the date of the advice. If the situation changes within those fifteen days, it may do so only after giving clients the revised assessment at least 24 hours in advance.",
  },
  {
    id: "c18-q10",
    question:
      "A registered investment adviser charges clients an advisory fee and also receives trail commission from AMCs on the schemes it recommends to them. Which provision of the SEBI (Investment Advisers) Regulations, 2013 does this violate?",
    options: [
      "The requirement to have a yearly audit of compliance with regulatory requirements",
      "The bar on receiving consideration from anyone other than the client for products advised on",
      "The requirement for a non-individual adviser to appoint a compliance officer",
      "The requirement to keep a register of clients, dates and nature of advice given, and fees charged",
    ],
    answer: 1,
    explanation:
      "A general obligation under the IA Regulations is that the adviser shall not receive any remuneration or compensation, in any form, from anyone other than the client for the underlying products advised on. Commission from a product manufacturer breaches this and the adviser's fiduciary duty.",
  },
  {
    id: "c18-q11",
    question:
      "An investment adviser uses a third-party Artificial Intelligence tool to help generate model portfolios for its clients. What do the IA Regulations require?",
    options: [
      "The IA stays solely responsible for the advice and client data, and must disclose the extent of AI use",
      "The AI vendor becomes responsible for any unsuitable advice generated by its tool for clients",
      "AI tools may be used only by non-individual IAs, and only with SEBI's prior written approval",
      "Disclosure to clients is needed only if the AI tool generates more than half of the advice given",
    ],
    answer: 0,
    explanation:
      "An IA using AI tools, whatever the scale of use, is solely responsible for the security, confidentiality and integrity of client data, for advice based on the tool's output and for legal compliance. It must also disclose to clients the extent to which it uses AI in its advice.",
  },
  {
    id: "c18-q12",
    question:
      "How must an investment adviser maintain the rationale for arriving at its investment advice?",
    options: [
      "It must be recorded only for written advice; oral advice needs no record",
      "It must be filed with SEBI within seven days",
      "It must be signed, dated and preserved for at least five years",
      "It must be duly signed and preserved for three years, then destroyed",
    ],
    answer: 2,
    explanation:
      "The rationale for arriving at investment advice, duly signed and dated, is among the records an IA must keep in physical or electronic form for a minimum of five years. Signed records kept electronically must be digitally signed.",
  },
  {
    id: "c18-q13",
    question:
      "Under the record maintenance provisions of the IA Regulations, who may conduct an investment adviser's yearly audit of compliance with regulatory requirements?",
    options: [
      "SEBI's own inspection team, on a sample basis",
      "The investment adviser's own compliance officer",
      "A member of ICAI, ICSI or the Institute of Cost Accountants of India",
      "The IAASB, as part of its routine offsite supervision of advisers",
    ],
    answer: 2,
    explanation:
      "The adviser must have a yearly audit of compliance with regulatory requirements conducted by a member of the Institute of Chartered Accountants of India, the Institute of Company Secretaries of India or the Institute of Cost Accountants of India, and submit the report as specified by SEBI.",
  },
  {
    id: "c18-q14",
    question:
      "An IA charges an individual client's family on the assets-under-advice (AUA) mode. The family's AUA is ₹80 lakh. What is the maximum annual fee the IA can charge this family under SEBI's fee limits?",
    options: ["₹1,51,000", "₹2,00,000", "₹80,000", "₹2,40,000"],
    answer: 1,
    explanation:
      "For individual and HUF clients, the fee limit is 2.5% of AUA per family per year under the AUA mode (2.5% × ₹80 lakh = ₹2,00,000), or ₹1,51,000 per family per year under the fixed-fee mode. 'Family of client' means the individual, dependent spouse, dependent children and dependent parents.",
  },
  {
    id: "c18-q15",
    question: "To which of the following clients do SEBI's maximum fee limits for investment advisers NOT apply?",
    options: [
      "An HUF client that has opted to pay a fixed annual advisory fee",
      "A resident individual client paying on the assets-under-advice mode",
      "An NRI individual client who has chosen the fixed-fee mode instead",
      "An accredited investor, with whom the fee is negotiated",
    ],
    answer: 3,
    explanation:
      "The fee limits apply only to individual and HUF clients. They do not apply to non-individual clients or accredited investors, where fees are bilaterally negotiated. The IAASB revises the limits every three years.",
  },
  {
    id: "c18-q16",
    question:
      "A client agrees to pay his investment adviser's fees in advance. For what maximum period may the IA now collect fees in advance?",
    options: ["Up to 12 months", "Up to two quarters", "Up to one quarter", "Up to 24 months"],
    answer: 0,
    explanation:
      "If the client agrees, an IA may charge fees in advance for up to one year. Note: updated by SEBI circular dated 2 April 2025; the Feb 2025 workbook's MITC text says a maximum of two quarters.",
  },
  {
    id: "c18-q17",
    question:
      "Raj is an individual investment adviser and his wife is a mutual fund distributor. Under the family-level segregation rules, which arrangement is permitted?",
    options: [
      "Raj's wife may distribute mutual funds to Raj's advisory clients, provided this is disclosed",
      "Raj may distribute regular plans to his clients as long as he waives his advisory fee",
      "Raj may advise clients who do not receive distribution services from his wife",
      "Raj may advise his wife's distribution clients for a fee",
    ],
    answer: 2,
    explanation:
      "An individual IA cannot provide distribution services. The IA's family cannot distribute to clients the IA advises, and the IA cannot advise a client who receives distribution services from other family members.",
  },
  {
    id: "c18-q18",
    question:
      "A non-individual investment adviser belongs to a group whose subsidiary distributes mutual funds. Under client-level segregation, which arrangement is permitted?",
    options: [
      "The client takes advice from the IA and buys regular plans for the same goals through the subsidiary",
      "The client pays the IA a reduced advisory fee while the subsidiary earns trail commission from him",
      "The client takes both services, provided the IA and the subsidiary have different boards of directors",
      "The client pays the IA an advisory fee and no distribution commission is earned from him in the group",
    ],
    answer: 3,
    explanation:
      "A non-individual IA must segregate clients at group level: the same client cannot be offered both advisory and distribution services within the group. A client is either an advisory client (no distributor consideration at group level) or a distribution client (no advisory fee at group level).",
  },
  {
    id: "c18-q19",
    question:
      "An investment adviser offers implementation services to its advisory clients in the securities market. Which statement correctly describes how it may do so?",
    options: [
      "Through regular plans, with the commission earned used to reduce the advisory fee",
      "Only through direct schemes or products, with no commission at group or family level",
      "Through any plan, provided a separate implementation fee is disclosed and charged",
      "Clients who take advisory services must compulsorily use its implementation services too",
    ],
    answer: 1,
    explanation:
      "Implementation must be only through direct schemes or products. No consideration, commission or referral fee may be received at the group or family level, no implementation fee may be charged, and the client has no obligation to use the service.",
  },
  {
    id: "c18-q20",
    question:
      "An investment adviser fails to comply with a SEBI direction and the failure continues for 40 days. Under Section 15EB of the SEBI Act, 1992, what is the maximum penalty it can face?",
    options: ["₹40 lakh", "₹1 lakh", "₹1 crore", "₹4 lakh"],
    answer: 0,
    explanation:
      "Under 15EB, the penalty is not less than ₹1 lakh and may extend to ₹1 lakh for each day the failure continues, up to a maximum of ₹1 crore. For 40 days that is 40 × ₹1 lakh = ₹40 lakh, which is below the ₹1 crore cap.",
  },
  {
    id: "c18-q21",
    question:
      "SEBI recognises a wholly-owned subsidiary of a stock exchange to administer and supervise investment advisers. Which of the following is an eligibility criterion for the parent stock exchange?",
    options: [
      "A minimum net worth of ₹100 crore",
      "Investor Service Centres in at least 10 cities",
      "A minimum of 15 years of existence",
      "Listing of its own shares on another recognised exchange",
    ],
    answer: 2,
    explanation:
      "Under SEBI's August 2020 circular, the parent exchange must have at least 15 years of existence, a net worth of at least ₹200 crore, nationwide terminals, a grievance redressal mechanism including arbitration, and ISCs in at least 20 cities.",
  },
  {
    id: "c18-q22",
    question:
      "Which entity is currently recognised by SEBI as the Investment Adviser Administration and Supervisory Body (IAASB)?",
    options: [
      "National Stock Exchange of India Ltd, recognised for three years from 2023",
      "AMFI, recognised as the self-regulatory body for all registered advisers",
      "NISM, recognised under its certification and investor education mandate",
      "BSE Ltd, recognised for a period of five years from 25 July 2024",
    ],
    answer: 3,
    explanation:
      "BSE Ltd is the IAASB, responsible for on-site and offsite supervision of IAs, grievance redressal, administrative action, periodic reporting to SEBI and maintaining the IA database; it also runs CeFCoM. Note: SEBI recognised BSE Ltd for five years from 25 July 2024; the Feb 2025 workbook's section on administration of IAs still names BSE Administration & Supervision Ltd.",
  },
  {
    id: "c18-q23",
    question:
      "Under Section 12 of the Prevention of Money-Laundering Act, 2002, for how long must a reporting entity keep records of documents evidencing the identity of its clients and beneficial owners?",
    options: [
      "Five years from the date the account was opened, irrespective of when it is closed",
      "Five years after the relationship ends or the account closes, whichever is later",
      "Ten years from the date of the last transaction undertaken by the client",
      "Three years after the account closes, or five years from opening, whichever is later",
    ],
    answer: 1,
    explanation:
      "Section 12 of PMLA requires identity records, account files and business correspondence to be kept for five years after the business relationship ends or the account is closed, whichever is later. Transaction records are kept for five years from the date of the transaction.",
  },
  {
    id: "c18-q24",
    question:
      "From 1 July 2024, what must intermediaries that are reporting financial institutions do with the FATCA and CRS self-certifications obtained from account holders?",
    options: [
      "Upload them to the KRA system and update them promptly whenever there is a change",
      "File them directly with the US Internal Revenue Service at the end of each quarter",
      "Keep them only in physical form at the branch where the account was first opened",
      "Collect them only from NRI investors, since resident Indian investors are exempt",
    ],
    answer: 0,
    explanation:
      "FATCA is a US law to obtain information on US persons, and CRS is the international exchange of tax information; India amended the Income Tax Act in 2014 to enable reporting to CBDT. All Indian and NRI investors file self-declarations, and reporting financial institutions must upload them to the KRA system from 1 July 2024 and keep them updated.",
  },
  {
    id: "c18-q25",
    question:
      "An investment adviser must enter into an agreement with each client, and its actions are bound by that contract. How does Section 2(h) of the Indian Contract Act, 1872 define a 'contract'?",
    options: [
      "An offer accepted by the other party",
      "A promise recorded in a signed deed",
      "An agreement enforceable by law",
      "Any agreement put down in writing",
    ],
    answer: 2,
    explanation:
      "Section 2(h) defines a contract as 'an agreement enforceable by law'. Its essential elements include offer and acceptance, intention to create legal relations, free consent, lawful object and parties capable of contracting.",
  },
];
