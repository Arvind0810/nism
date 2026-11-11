import type { Question } from "@/data/types";

export const chapter17Questions: Question[] = [
  {
    id: "c17-q01",
    question:
      "With effect from January 1, 2016, how must payment for an application in a public issue be made?",
    options: [
      "By a demand draft drawn in favour of the issuer and lodged at a collection bank",
      "Only through the ASBA (Application Supported by Blocked Amount) facility",
      "By a cheque payable to the registrar to the issue, cleared before allotment",
      "In cash at the designated collection centre",
    ],
    answer: 1,
    explanation:
      "From January 1, 2016, public issue applications must be paid for only through ASBA. ASBA authorises the investor's bank to block the application money and release it only on allotment, and SEBI has also allowed UPI with the blocking facility for retail applications.",
  },
  {
    id: "c17-q02",
    question:
      "A mutual fund folio is held jointly by three investors on an 'either or survivor' basis. In whose name are dividend and redemption payouts made?",
    options: [
      "To all holders equally",
      "In the name of whichever holder signs the redemption request",
      "In the name of the nominee registered in the folio",
      "In the name of the first holder",
    ],
    answer: 3,
    explanation:
      "The first holder's name is used to create the investment records. All payouts such as dividend, interest and redemptions are made in the name of the first holder, though the names of all joint holders are kept in the records.",
  },
  {
    id: "c17-q03",
    question:
      "Ramesh, an individual who does not have a PAN, wants to start an SIP that will total ₹40,000 in a year across all schemes of one fund house. Which statement is correct?",
    options: [
      "He can invest as a micro investment, quoting a 'PAN Exempt KYC' reference number from a KRA",
      "He cannot invest, because PAN is mandatory for every mutual fund investment regardless of amount",
      "He can invest without any KYC formalities because the annual amount is below ₹50,000",
      "He can invest only by routing the SIP through an HUF in which he is the Karta",
    ],
    answer: 0,
    explanation:
      "Micro investments of up to ₹50,000 in aggregate per fund house (rolling 12 months or financial year) by individuals are exempt from PAN, but KYC still applies through a 'PAN Exempt KYC' reference number. HUFs and non-individuals do not get this exemption.",
  },
  {
    id: "c17-q04",
    question:
      "Which entity did the Government of India authorise in November 2015 to act as the Central KYC Records Registry under the PML Rules, 2005?",
    options: [
      "NSDL e-Governance Infrastructure Limited, which acts as the Central Recordkeeping Agency of NPS",
      "CDSL Ventures Limited, a KYC Registration Agency registered with SEBI",
      "Central Registry of Securitisation Asset Reconstruction and Security Interest of India",
      "Unique Identification Authority of India (UIDAI), through Aadhaar e-KYC",
    ],
    answer: 2,
    explanation:
      "By the notification dated November 26, 2015, the Central Registry of Securitisation Asset Reconstruction and Security Interest of India (CERSAI) was authorised to act as the Central KYC Records Registry. It receives, stores, safeguards and retrieves clients' KYC records in digital form and issues a unique KYC Identifier.",
  },
  {
    id: "c17-q05",
    question:
      "A first-time investor completes KYC online with a registered intermediary, and her identity is verified through Aadhaar authentication by UIDAI. Is an in-person verification (IPV) still needed?",
    options: [
      "Yes, a physical IPV at the intermediary's office is compulsory for every first-time investor",
      "Yes, but it can be done only by an AMFI-registered distributor over a recorded video call",
      "Only if her investments with the intermediary exceed ₹50,000 in a financial year",
      "No, IPV or video IPV is not required when KYC is completed through Aadhaar authentication",
    ],
    answer: 3,
    explanation:
      "Under SEBI's circular of April 24, 2020, IPV/VIPV is not required when KYC is completed using Aadhaar authentication or verification by UIDAI, or when the KYC form is submitted online with documents from DigiLocker or another online-verifiable source.",
  },
  {
    id: "c17-q06",
    question:
      "Dematerialised securities are fungible. How is an investor's holding of a dematerialised share identified in the depository?",
    options: [
      "By the share certificate number and distinctive numbers",
      "By the folio number allotted by the R&T agent",
      "By the ISIN and the number of shares held",
      "By the Dematerialisation Request Number (DRN)",
    ],
    answer: 2,
    explanation:
      "Once dematerialised, a share loses its distinctive certificate, distinctive number and folio identity. In the depository it is identified by the 12-character ISIN and the number of shares held.",
  },
  {
    id: "c17-q07",
    question:
      "An investor has granted a Power of Attorney to his brother to operate his mutual fund investments. Which of the following can the PoA holder NOT do?",
    options: [
      "Make or change the nomination in the grantor's folio",
      "Purchase units on behalf of the grantor",
      "Redeem units on behalf of the grantor",
      "Make subsequent purchases in the grantor's existing folio",
    ],
    answer: 0,
    explanation:
      "A PoA holder can carry out normal transactions such as purchases, payments, sales and redemptions within the rights granted. A PoA holder cannot appoint, make or change a nominee in an account or investment.",
  },
  {
    id: "c17-q08",
    question:
      "An NRI invests in an Indian mutual fund scheme using funds from his Non-Resident Ordinary (NRO) account. What applies to repatriation of the redemption proceeds?",
    options: [
      "The proceeds are freely repatriable without any limit",
      "The proceeds are repatriable only up to USD 1 million per financial year",
      "The proceeds cannot be repatriated under any circumstances",
      "The proceeds can be repatriated only after a holding period of three years",
    ],
    answer: 1,
    explanation:
      "If an investment is made from an NRO account, the proceeds are repatriable only up to USD 1 million per financial year. Investments made from NRE or FCNR accounts, or through a foreign draft supported by a FIRC, are repatriable without limit.",
  },
  {
    id: "c17-q09",
    question:
      "Under the Portfolio Investment Scheme, what limit applies to an NRI buying shares of a listed Indian company on a stock exchange?",
    options: [
      "10% of paid-up capital per NRI, within a 24% aggregate limit for all NRIs that cannot be raised",
      "2% of paid-up capital per NRI, within a 5% aggregate limit that the company can raise to 10%",
      "5% of paid-up capital on a repatriation basis, with no limit at all on a non-repatriation basis",
      "5% of paid-up capital per NRI, within a 10% aggregate limit that the company can raise to 24%",
    ],
    answer: 3,
    explanation:
      "An NRI cannot buy more than 5% of a company's paid-up capital, on repatriation and non-repatriation basis together, subject to an overall limit of 10% for all NRIs. The company can raise the limit to 24% by a General Body resolution.",
  },
  {
    id: "c17-q10",
    question:
      "Priya has moved house. She wrote to the AMC of her mutual fund about the new address but took no other step. Which statement is correct?",
    options: [
      "The change takes effect across all her capital market investments once the AMC updates its folio",
      "The change takes effect only once it is updated in her KYC records with the KRA",
      "She must close her existing folios and reinvest through new folios carrying the new address",
      "She must apply for a fresh PAN card showing the new address before the AMC can act",
    ],
    answer: 1,
    explanation:
      "For capital market investments, address details sit in the uniform KYC records with the KRA. Informing only the AMC, RTA, DP, broker or PMS provider is not enough until the KRA records are changed, and the KRA then communicates the change to all entities.",
  },
  {
    id: "c17-q11",
    question:
      "A mutual fund folio is held jointly by A (first holder) and B, with C registered as nominee. A dies. To whom will the units be transmitted?",
    options: [
      "To B, the surviving joint holder",
      "To C, the nominee",
      "To A's legal heirs on production of a succession certificate",
      "To B and C jointly in equal proportion",
    ],
    answer: 0,
    explanation:
      "Where a folio is held jointly and also has a nomination, the right of the joint holders to transmission supersedes the right of the nominee. Under the rule of survivorship, B receives the units by deletion of A's name and becomes the first holder.",
  },
  {
    id: "c17-q12",
    question:
      "Under the revised nomination framework effective 1 March 2025, A and B hold a demat account jointly and A dies. In what capacity does B receive the holdings?",
    options: [
      "As a trustee for A's legal heirs until a succession certificate is produced",
      "Jointly with A's registered nominee, in proportion to their shares",
      "As owner, through deletion of A's name from the account",
      "Only after the holdings are first transmitted to A's nominee",
    ],
    answer: 2,
    explanation:
      "Under the rule of survivorship, on the death of one or more joint holders the regulated entity transmits the assets to the surviving holder(s) by name deletion. The survivors receive the assets as owners and not as trustees.",
  },
  {
    id: "c17-q13",
    question:
      "A demat account held jointly by a husband and wife has two registered nominees. Both holders die together in an accident. What does the depository participant do?",
    options: [
      "Transmits the holdings to the legal heirs of the first holder alone",
      "Transmits the holdings to the registered nominees for due discharge",
      "Freezes the account until a court grants probate of a will",
      "Transfers the holdings to the legal heirs of the older holder",
    ],
    answer: 1,
    explanation:
      "Under the nomination changes effective 1 March 2025, when all joint holders pass away simultaneously, the regulated entity transmits the assets in the account or folio to the registered nominee(s) for its due discharge.",
  },
  {
    id: "c17-q14",
    question:
      "The Karta of an HUF that holds mutual fund units dies. To whom are the units transmitted?",
    options: [
      "To the nominee registered by the deceased Karta in the HUF's folio",
      "To the eldest coparcener, without any further documentation",
      "To all the coparceners in equal shares, as joint holders",
      "To the new Karta, on an indemnity bond signed by the other coparceners",
    ],
    answer: 3,
    explanation:
      "On the death of the Karta of an HUF, the investment is transmitted to the new Karta on receipt of an indemnity bond signed by all the remaining coparceners. An HUF cannot have a nominee because only individuals can nominate.",
  },
  {
    id: "c17-q15",
    question:
      "Under SEBI's current norms, up to what value of securities can a claimant get transmission with simplified documentation, without a succession certificate or probate?",
    options: [
      "₹10 lakh for physical securities and ₹30 lakh for dematerialised securities",
      "₹5 lakh for physical securities and ₹15 lakh for dematerialised securities",
      "₹50,000 for physical securities and ₹5 lakh for dematerialised securities",
      "₹15 lakh for physical securities and ₹50 lakh for dematerialised securities",
    ],
    answer: 0,
    explanation:
      "Within these limits a copy of the death certificate, a letter of indemnity and an NOC from the other legal heirs are generally enough to process transmission. Note: limits raised by SEBI circular dated 23 July 2026; the Feb 2025 workbook says ₹5 lakh (physical) and ₹15 lakh (demat).",
  },
  {
    id: "c17-q16",
    question:
      "From 1 September 2026, how many nominees can an investor register in a demat account or a mutual fund folio?",
    options: ["Only one", "Up to 10", "Up to 3", "Up to 2"],
    answer: 2,
    explanation:
      "SEBI now allows up to 3 nominees for demat accounts and MF folios. Single holders must nominate or opt out, nomination is optional for joint holdings, and if the shares are not specified the assets are split equally. Note: updated by SEBI circular dated 29 May 2026 (effective 1 Sep 2026); the Feb 2025 workbook says up to 10 nominees.",
  },
  {
    id: "c17-q17",
    question:
      "While registering a nominee under the revised nomination framework, which of the following must the investor mandatorily provide?",
    options: [
      "A self-attested copy of the nominee's Aadhaar card along with the passport",
      "One identifier of the nominee: PAN, driving licence number or last 4 digits of Aadhaar",
      "The nominee's bank account details along with a cancelled cheque",
      "The signatures of two witnesses attesting the nominee's consent to act",
    ],
    answer: 1,
    explanation:
      "Investors must give one personal identifier of the nominee (PAN, driving licence number or last 4 digits of Aadhaar), with only the number and not the document, plus the nominee's contact details, relationship and date of birth if the nominee is a minor.",
  },
  {
    id: "c17-q18",
    question:
      "An SIP in a minor's folio was registered to run until 2030, but the minor turns 18 in 2027. The guardian has not submitted the minor-turned-major documents by that date. What happens?",
    options: [
      "The SIP continues until 2030, with the guardian continuing to sign all transactions",
      "The units are compulsorily redeemed and the proceeds are paid out to the guardian",
      "The folio is automatically converted into a joint folio of the guardian and the now-major child",
      "The SIP is suspended and the folio frozen for the guardian until the documents arrive",
    ],
    answer: 3,
    explanation:
      "Standing instructions in a minor's folio are registered only up to the date the minor attains majority. If the change-of-status documents have not been received by then, all SIP/STP/SWP instructions are suspended and the folio is frozen for the guardian.",
  },
  {
    id: "c17-q19",
    question:
      "Which of the following is a permitted exception to the third-party payment rule for mutual fund investments?",
    options: [
      "A grandparent paying up to ₹50,000 per transaction on behalf of a minor",
      "A friend paying up to ₹50,000 on behalf of an adult investor",
      "A sibling paying on behalf of an adult investor after giving a declaration",
      "A stock broker paying from its own bank account on behalf of a client",
    ],
    answer: 0,
    explanation:
      "Exceptions to the third-party payment rule include parents or grandparents paying up to ₹50,000 per transaction for a minor, employers paying through payroll deductions, and custodians paying for FPIs. The payer must be PAN and KYC compliant and must submit a third-party declaration.",
  },
  {
    id: "c17-q20",
    question:
      "An investor wants to transfer ₹1,50,000 online for a mutual fund purchase. Why will the RTGS option not be shown to him?",
    options: [
      "RTGS cannot be used for mutual fund purchases",
      "RTGS is meant for transactions of ₹10 lakh and above",
      "RTGS is meant for transactions of ₹2 lakh and above",
      "RTGS is available only through a bank branch and not online",
    ],
    answer: 2,
    explanation:
      "RTGS is for transactions of ₹2 lakh and above, so online systems do not show it for smaller amounts. NEFT has no minimum amount and settles in batches, while RTGS settles continuously in real time.",
  },
  {
    id: "c17-q21",
    question: "Which of the following correctly describes the IFSC code used for NEFT and RTGS transfers?",
    options: [
      "A 9-digit numeric code: first three digits for the city, next three for the bank, last three for the branch",
      "A 12-character code made up of a country prefix, a basic number and a check digit",
      "An 11-character alphanumeric code: first four letters for the bank, last seven for the branch",
      "A 6-digit numeric code that identifies the clearing house and city of the branch",
    ],
    answer: 2,
    explanation:
      "IFSC is an eleven-character alphanumeric code unique to each bank branch: the first four letters identify the bank and the remaining seven characters the branch. The 9-digit code describes MICR and the 12-character code describes ISIN.",
  },
  {
    id: "c17-q22",
    question:
      "Anil, a resident Indian holding shares in a demat account, moves abroad and becomes an NRI. What happens to his existing holdings?",
    options: [
      "He can keep using the resident demat account, and the holdings become repatriable automatically",
      "A new NRI-status demat account is opened and the holdings, moved into it, are non-repatriable",
      "He must sell all the shares within 90 days and remit the proceeds through an NRE account",
      "The holdings move to a new NRI demat account and become fully repatriable from then on",
    ],
    answer: 1,
    explanation:
      "On becoming an NRI, a new demat account with NRI status must be opened and the balances in the resident account transferred to it. Securities bought as a resident can continue to be held, but on a non-repatriable basis.",
  },
  {
    id: "c17-q23",
    question:
      "Which of the following is consistent with the Most Important Terms and Conditions (MITC) that SEBI requires in every investment advisory agreement?",
    options: [
      "The IA may accept the client's funds into its own account to invest on the client's behalf",
      "The IA may execute trades for the client on the basis of one general consent given at onboarding",
      "The IA may ask for the client's demat account OTPs, provided they are used only for placing advised trades",
      "The client may optionally pay advisory fees through CeFCoM, the fee collection mechanism run by BSE",
    ],
    answer: 3,
    explanation:
      "The MITC state that the IA accepts only its fees and no funds or securities, needs the client's specific consent for every trade, never asks for login credentials or OTPs, and that fees can optionally be paid through the Centralised Fee Collection Mechanism (CeFCoM) managed by BSE.",
  },
  {
    id: "c17-q24",
    question:
      "An investor buys mutual fund units through an AMFI-registered distributor on BSE StAR MF. Which statement correctly describes the transaction?",
    options: [
      "The units are bought from the AMC, with money and units settled through the clearing corporation",
      "The units are bought from another investor who is selling units of the same scheme on the exchange",
      "The distributor collects the investor's money and pays it to the AMC from its own account",
      "Only lump-sum purchases are possible on the platform; SIPs, STPs and SWPs are not offered",
    ],
    answer: 0,
    explanation:
      "On exchange platforms such as BSE StAR MF and NSE NMF II, units are purchased from and redeemed with the AMC directly. The distributor only handles the transaction; pay-in and pay-out of money and units go through the exchange and clearing corporation, which removes counterparty risk. SIP, STP, SWP and switches are available.",
  },
  {
    id: "c17-q25",
    question:
      "How does the transaction feed from a stock exchange mutual fund platform help an investment adviser?",
    options: [
      "It lets the adviser redeem a client's units on its own judgement, without any separate consent",
      "It entitles the adviser to a share of the trail commission on units held by its clients",
      "It shows each client's MF holdings and transactions in one place, with family members clubbed",
      "It removes the need for KYC of clients who already hold a demat account with the exchange",
    ],
    answer: 2,
    explanation:
      "The exchange platform gives the adviser the client's entire mutual fund portfolio and transactions at a single place, transaction status, portfolio statements on demand and clubbing of family members. Some non-financial changes can also be made through the platform.",
  },
];
