import type { Question } from "@/data/types";

export const chapter20Questions: Question[] = [
  {
    id: "c20-q01",
    question: "Under the Consumer Protection Act, 1986, which of the following persons is excluded from the definition of 'consumer'?",
    options: [
      "A person who buys goods for resale or for any commercial purpose",
      "A person who buys goods under a system of deferred payment",
      "A person who uses goods with the approval of the buyer",
      "A beneficiary of services availed with the approval of the person who hired them",
    ],
    answer: 0,
    explanation:
      "The CPA 1986 definition of consumer covers buyers of goods and those who hire or avail of services for consideration, including approved users and beneficiaries. It excludes a person who obtains goods for resale or any commercial purpose.",
  },
  {
    id: "c20-q02",
    question: "What is the first line of action for an investor with a grievance about a financial product or service?",
    options: [
      "File an appeal before the Securities Appellate Tribunal",
      "File a suit in a civil court",
      "Approach the product or service provider concerned",
      "Approach the regulator of the industry directly",
    ],
    answer: 2,
    explanation:
      "The investor should first approach the product or service provider to get the grievance resolved. Only if it is not resolved satisfactorily should the investor go to the regulator of that industry.",
  },
  {
    id: "c20-q03",
    question: "In a robust grievance recording and redress system, what does an 'ageing report' track?",
    options: [
      "The age profile of the investors who have lodged complaints",
      "The time taken to resolve each complaint that has been filed",
      "How old the product was when the investor's complaint arose",
      "The number of years for which the entity has been in business",
    ],
    answer: 1,
    explanation:
      "A robust system records the source, date and nature of each complaint, whether it can be resolved internally, the status or action taken report, and the time taken for resolution (the ageing report), along with an escalation mechanism.",
  },
  {
    id: "c20-q04",
    question: "As part of the grievance redressal system SEBI has mandated for investment advisers, what must be displayed at their offices?",
    options: [
      "The adviser's past performance record on all recommendations made",
      "The contact details of the head of SEBI's regional office for that area",
      "A list of current clients along with the advisory plan each has subscribed to",
      "Contact details of the compliance officer and the CEO, Partner or Proprietor",
    ],
    answer: 3,
    explanation:
      "SEBI's circular of August 28, 2014 requires every IA office to display the name, address, email and phone number of the compliance officer and the CEO, Partner or Proprietor. Clients who are still dissatisfied can then use SCORES.",
  },
  {
    id: "c20-q05",
    question:
      "A client complained to his SEBI-registered investment adviser about deficient service and is not satisfied with the adviser's response. Where should he lodge his grievance next?",
    options: [
      "Directly before the Supreme Court",
      "With SEBI through the SCORES system",
      "With the Insurance Ombudsman",
      "Through IRDAI's Integrated Grievance Management System",
    ],
    answer: 1,
    explanation:
      "Under SEBI's grievance redressal framework for investment advisers, a client who is not satisfied with the intermediary's response can lodge the grievance with SEBI through SCORES.",
  },
  {
    id: "c20-q06",
    question: "Which of the following complaints will NOT be taken up on SEBI's SCORES platform?",
    options: [
      "Delay by a mutual fund in crediting redemption proceeds to the investor",
      "Non-receipt of a dividend from a listed company",
      "Deficiency in service by a registered investment adviser",
      "Dissatisfaction with the trading price of a company's shares",
    ],
    answer: 3,
    explanation:
      "SCORES does not address complaints about dissatisfaction with share trading prices, illiquidity or non-trading of shares, incomplete complaints, or disputes arising from private agreements. Service complaints against listed companies, mutual funds and intermediaries are within its scope.",
  },
  {
    id: "c20-q07",
    question:
      "An investor wants SEBI to act on his complaint against a company that has since been wound up and liquidated. What is the position?",
    options: [
      "SEBI does not deal with complaints against wound-up or liquidated companies",
      "SEBI takes it up on SCORES, since SCORES covers every company that ever issued shares",
      "SEBI forwards it to the company's former directors for an action taken report",
      "SEBI takes it up only if it is filed within 45 days of the winding-up order",
    ],
    answer: 0,
    explanation:
      "SEBI does not deal with complaints against unlisted, delisted, wound-up, liquidated or sick companies, complaints that are sub-judice, or complaints that fall under other regulators.",
  },
  {
    id: "c20-q08",
    question:
      "Under SCORES 2.0, within what time must the entity against which a complaint is lodged submit its action taken report?",
    options: ["15 calendar days", "30 calendar days", "21 calendar days", "45 calendar days"],
    answer: 2,
    explanation:
      "Under SCORES 2.0, in effect from 1 April 2024, the entity must submit its action taken report within 21 calendar days, and the investor can track the complaint's status online.",
  },
  {
    id: "c20-q09",
    question:
      "An investor is not satisfied with the action taken report a stock broker submitted on SCORES 2.0. What is the next step within the SCORES framework?",
    options: [
      "A direct appeal to the Securities Appellate Tribunal within 45 days of the report",
      "A fresh complaint on SCORES, which is then allotted to a different stock broker",
      "An application to the Banking Ombudsman, since the dispute involves the investor's funds",
      "A first review by the designated body such as the exchange, then a second review by SEBI",
    ],
    answer: 3,
    explanation:
      "Under SCORES 2.0, an investor dissatisfied with the entity's resolution can seek a first review by the designated body (for example the stock exchange or depository) within 15 days, and if still dissatisfied, a second review by SEBI.",
  },
  {
    id: "c20-q10",
    question:
      "An investor has taken up a grievance with a market participant and escalated it through SCORES, but is still not satisfied. What can the investor initiate next?",
    options: [
      "Online dispute resolution through the ODR portal",
      "A complaint before the RBI's Integrated Banking Ombudsman",
      "An escalation to the NPS Trust",
      "A complaint to the Insurance Ombudsman",
    ],
    answer: 0,
    explanation:
      "After exhausting the available options, including SCORES, the investor can start online dispute resolution through the Smart ODR portal. ODR can also be started at any earlier stage of escalation, within the applicable law of limitation.",
  },
  {
    id: "c20-q11",
    question: "Which statement about starting dispute resolution on SEBI's ODR portal is correct?",
    options: [
      "Only the investor can start it, and only after the SCORES complaint has been closed",
      "A market participant can also start it, after giving the investor the stipulated notice",
      "It can be started at any time, because the law of limitation does not apply to ODR",
      "It can be started only through the stock exchange's office, and not online by investors",
    ],
    answer: 1,
    explanation:
      "The market participant may also initiate ODR after giving the investor due notice for a dispute not resolved between them. ODR must be initiated within the applicable law of limitation, reckoned from the date the issue arose or the last or disputed transaction, whichever is later.",
  },
  {
    id: "c20-q12",
    question: "What is the role of the Banking Codes and Standards Board of India (BCSBI)?",
    options: [
      "An RBI department that passes binding awards on complaints against banks",
      "A government portal that forwards public grievances to banks for disposal",
      "An independent watchdog set up by RBI, which published a code of banks' commitments",
      "A body of bank employees' unions that negotiates customer service charges",
    ],
    answer: 2,
    explanation:
      "RBI set up BCSBI as an independent, autonomous watchdog to ensure fair treatment of bank customers. It published the 'Code of Banks' Commitments to Customers', which most member banks have adopted as their Fair Practice Code.",
  },
  {
    id: "c20-q13",
    question:
      "According to the workbook, what is the typical internal complaint resolution structure within a bank, before a customer approaches the Integrated Ombudsman?",
    options: [
      "Branch Manager, then the bank's Board of Directors, then the RBI Governor",
      "Call centre, then the bank's statutory auditor, then the BCSBI",
      "Relationship manager, then the internal auditor, then the CPGRAMS portal",
      "Branch Manager, then Zonal Manager, then GM – Customer Service",
    ],
    answer: 3,
    explanation:
      "Banks typically have a three-tier complaint resolution system: Branch Manager, Zonal Manager and GM – Customer Service. If the customer is not satisfied, the Integrated Ombudsman can be approached for mediation and awards.",
  },
  {
    id: "c20-q14",
    question:
      "Sunita complained to her bank about penalty charges she believes were wrongly levied. If she does not get a satisfactory resolution, after how long can she approach the Banking Ombudsman under the Integrated Ombudsman Scheme?",
    options: ["15 days", "Three months", "One month", "45 days"],
    answer: 2,
    explanation:
      "If a grievance addressed to the bank is not satisfactorily resolved within one month, the customer can approach the Banking Ombudsman. Disputes about penalties, fees, interest and cards fall within the scheme, which RBI replaced with the Integrated Ombudsman Scheme, 2026 from 1 July 2026.",
  },
  {
    id: "c20-q15",
    question:
      "Under the Integrated Ombudsman Scheme, the Ombudsman tries to settle a valid complaint between a customer and a bank. What happens if no settlement is reached within one month?",
    options: [
      "The Ombudsman passes an award after giving both sides a chance to state their case",
      "The complaint lapses and the customer has to file a civil suit against the bank",
      "The complaint is automatically transferred to SEBI's SCORES for resolution",
      "The bank's original decision becomes final and binding on the customer",
    ],
    answer: 0,
    explanation:
      "If the complaint is valid, the Ombudsman first attempts a settlement with the bank. If settlement does not happen within one month, the Ombudsman passes an award after giving both sides a chance to state their case.",
  },
  {
    id: "c20-q16",
    question:
      "Under the RBI Integrated Ombudsman Scheme, 2026, what is the maximum compensation the Ombudsman can award for consequential loss and for harassment or mental agony?",
    options: [
      "Up to ₹20 lakh for consequential loss and up to ₹1 lakh for harassment",
      "Up to ₹30 lakh for consequential loss and up to ₹3 lakh for harassment",
      "Up to ₹10 lakh for consequential loss and up to ₹50,000 for harassment",
      "Up to ₹50 lakh for consequential loss and up to ₹5 lakh for harassment",
    ],
    answer: 1,
    explanation:
      "The 2026 Scheme, which replaced the 2021 scheme from 1 July 2026, allows compensation of up to ₹30 lakh for consequential loss and up to ₹3 lakh for harassment or mental agony. The 2021 scheme limits were ₹20 lakh and ₹1 lakh.",
  },
  {
    id: "c20-q17",
    question:
      "A life insurance policyholder wants to register a complaint against her insurer online with the insurance regulator and track its status. Which system should she use?",
    options: [
      "IRDAI's Integrated Grievance Management System (IGMS)",
      "SEBI's SCORES",
      "The Central Recordkeeping Agency grievance system of the NPS",
      "The SEBI ODR portal",
    ],
    answer: 0,
    explanation:
      "IRDAI lets policyholders register complaints online through its Integrated Grievance Management System (IGMS) and track their status. Complaints registered there are forwarded to the insurer concerned.",
  },
  {
    id: "c20-q18",
    question: "Which of the following is a valid ground for a complaint to the Insurance Ombudsman?",
    options: [
      "Losses on the share price of a listed insurance company the investor holds",
      "A dispute between two insurance companies",
      "A complaint about the NAV of a mutual fund scheme",
      "Partial or total repudiation of a claim by an insurance company",
    ],
    answer: 3,
    explanation:
      "Grounds for a complaint to the Insurance Ombudsman include partial or total repudiation of claims, disputes over premium, disputes on the legal construction of policies relating to claims, delay in settling claims, and non-issue of an insurance document after premium is paid.",
  },
  {
    id: "c20-q19",
    question:
      "A complainant and an insurer jointly ask the Insurance Ombudsman in writing to settle their dispute through mediation. Within what time must the Ombudsman make a recommendation?",
    options: [
      "15 days of receipt of the complaint",
      "Three months of receipt of the complaint",
      "One month of receipt of the complaint",
      "Six months of receipt of the complaint",
    ],
    answer: 2,
    explanation:
      "When both parties request mediation in writing, the Insurance Ombudsman makes a recommendation within one month of receiving the complaint. If that does not work, the complaint is disposed of by a speaking award.",
  },
  {
    id: "c20-q20",
    question:
      "An investor has a grievance about a pension scheme offered by a mutual fund. Which redressal system applies?",
    options: [
      "IRDAI's grievance redressal system",
      "SEBI's SCORES system",
      "The NPS Trust under PFRDA",
      "The RBI Integrated Ombudsman",
    ],
    answer: 1,
    explanation:
      "Pension schemes issued by mutual funds are regulated by SEBI, so SEBI's SCORES system applies. Pension schemes issued by insurance companies come under IRDAI's grievance system.",
  },
  {
    id: "c20-q21",
    question:
      "An NPS subscriber's grievance against the Central Recordkeeping Agency (CRA) has not been resolved 30 days after filing. What is the next step under PFRDA's Redressal of Subscriber Grievance Regulations, 2015?",
    options: [
      "File an appeal before the Securities Appellate Tribunal",
      "Lodge the complaint on SEBI's SCORES",
      "Approach the Banking Ombudsman",
      "Escalate the grievance to the NPS Trust",
    ],
    answer: 3,
    explanation:
      "If a grievance is not resolved by the intermediary within thirty days, or the subscriber is dissatisfied, it is registered with the NPS Trust. If the NPS Trust route also fails within thirty days, the subscriber can appeal to the Ombudsman.",
  },
  {
    id: "c20-q22",
    question: "Under Section 15U of the SEBI Act, how does the Securities Appellate Tribunal (SAT) conduct its proceedings?",
    options: [
      "It must strictly follow every procedure laid down in the Code of Civil Procedure",
      "It is guided by natural justice, not the CPC, and regulates its own procedure",
      "It has no power to summon witnesses or to require production of documents",
      "Its proceedings are treated as administrative, not judicial",
    ],
    answer: 1,
    explanation:
      "Section 15U says SAT is not bound by the Code of Civil Procedure but is guided by natural justice and regulates its own procedure. For matters such as summoning witnesses it has a civil court's powers, and its proceedings are deemed judicial proceedings.",
  },
  {
    id: "c20-q23",
    question:
      "Under Section 15T of the SEBI Act, within how many days must an appeal to the Securities Appellate Tribunal be filed against an order of SEBI?",
    options: [
      "30 days from the date of the order",
      "60 days from the date on which a copy of the order is served on him",
      "45 days from the date on which a copy of the order is received",
      "90 days from the date on which the order is published by SEBI",
    ],
    answer: 2,
    explanation:
      "Section 15T lets a person aggrieved by an order of SEBI, its adjudicating officer, IRDAI or PFRDA appeal to SAT. The appeal must be filed within 45 days from the date a copy of the order is received.",
  },
  {
    id: "c20-q24",
    question: "A person aggrieved by a decision or order of the Securities Appellate Tribunal may appeal to which forum, and within what time?",
    options: [
      "The Supreme Court, within 60 days of the SAT order being communicated",
      "The High Court having jurisdiction, within 45 days of receiving the order",
      "The SEBI Board, within 30 days",
      "The National Company Law Tribunal, within 60 days",
    ],
    answer: 0,
    explanation:
      "An appeal against a decision or order of SAT lies with the Supreme Court and must be filed within 60 days from the date the decision or order is communicated.",
  },
  {
    id: "c20-q25",
    question:
      "A depositor has not been repaid her deposit with an NBFC on maturity. According to the workbook, where should she register her complaint?",
    options: [
      "With SEBI on SCORES, since NBFC deposits count as securities",
      "With the Securities Appellate Tribunal within 45 days",
      "With the National Company Law Tribunal or the Consumer forum",
      "With the Insurance Ombudsman for the area where she lives",
    ],
    answer: 2,
    explanation:
      "Complaints about non-repayment of deposits or interest by an NBFC should be registered with the National Company Law Tribunal (NCLT) or the Consumer forum, in the form prescribed under the NCLT Rules for the area of the company's registered office.",
  },
];
