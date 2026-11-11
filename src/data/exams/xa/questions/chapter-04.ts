import type { Question } from "@/data/types";

export const chapter04Questions: Question[] = [
  {
    id: "c04-q01",
    question:
      "A credit card company charges interest of 3.5% per month on revolving credit. What is the approximate compounded annual cost of this borrowing?",
    options: ["About 51.1%", "42.0%", "About 42.6%", "3.5%"],
    answer: 0,
    explanation:
      "Compounded annual cost = (1 + 3.5%)^12 − 1 ≈ 51.1%. Multiplying 3.5% by 12 (42%) ignores compounding, and 42.6% is the workbook's figure for a 3% monthly rate.",
  },
  {
    id: "c04-q02",
    question:
      "In which arrangement is a charge created on an asset in favour of the lender while the asset stays with the borrower, as in a typical car loan?",
    options: ["Pledge", "Lease", "Hypothecation", "Moratorium"],
    answer: 2,
    explanation:
      "In hypothecation, the asset remains with the borrower, and the lender must repossess it if there is a default. A car loan is the classic example. In a pledge, the movable asset stays with the lender until the loan is repaid.",
  },
  {
    id: "c04-q03",
    question: "What is the key difference between a hire purchase agreement and a lease?",
    options: [
      "In a lease, the lessee automatically becomes the owner of the asset once the last lease payment has been made",
      "In hire purchase, the hirer becomes owner on paying the final instalment; a lessee never becomes the owner",
      "Hire purchase never involves an initial payment, while a lease always does",
      "A lease can be used only for immovable property such as land",
    ],
    answer: 1,
    explanation:
      "Under hire purchase, ownership passes to the person paying once the final instalment is paid. Under a lease, the lessor remains the owner and the lessee cannot become the owner even after the lease period ends.",
  },
  {
    id: "c04-q04",
    question: "Which statement about a loan moratorium is correct?",
    options: [
      "The EMIs missed during the moratorium are permanently waived",
      "Non-payment during the moratorium is treated as a default and lowers the borrower's credit score",
      "Interest stops accruing on the loan during the moratorium",
      "Repayments are paused without being counted as default, but interest continues to accrue",
    ],
    answer: 3,
    explanation:
      "Under a moratorium, repayments are paused and this is not counted as default, so the credit score is not affected. However, interest keeps running, and the missed EMIs must later be repaid with the extra interest.",
  },
  {
    id: "c04-q05",
    question:
      "What is the approximate EMI on a loan of ₹5,00,000 taken at 9% per annum for 5 years, with monthly rest and monthly repayments?",
    options: ["₹10,712", "₹12,083", "₹8,333", "₹10,379"],
    answer: 3,
    explanation:
      "Using PMT(9%/12, 60, −5,00,000), the EMI is about ₹10,379. ₹10,712 divides an annual-rest instalment by 12, ₹12,083 applies flat interest on the full principal, and ₹8,333 repays only the principal.",
  },
  {
    id: "c04-q06",
    question:
      "A borrower struggling with repayments ranks debts by cost to decide which to deal with first. Which debts should usually be targeted first?",
    options: [
      "Credit card dues and personal loans",
      "The home loan",
      "The education loan",
      "Low-cost loans that provide tax benefits",
    ],
    answer: 0,
    explanation:
      "Debt re-scheduling suggests dealing with the costliest debt first. That is usually credit card dues and personal loans. Low-cost and tax-advantaged debt, such as home and education loans, can be handled later.",
  },
  {
    id: "c04-q07",
    question:
      "Neha has a credit card outstanding of ₹50,000 at 40%, a personal loan of ₹2 lakh at 18%, a car loan of ₹80,000 at 11% and a home loan of ₹25 lakh at 8.5%. Under the snowball strategy, which loan will she repay second?",
    options: ["Personal loan", "Home loan", "Car loan", "Credit card outstanding"],
    answer: 2,
    explanation:
      "The snowball method repays debts in order of outstanding amount, smallest first, and ignores interest rates. The order is credit card (₹50,000), then the car loan (₹80,000), then the personal loan, then the home loan.",
  },
  {
    id: "c04-q08",
    question: "The blizzard approach to repaying debt involves:",
    options: [
      "Paying off the highest interest rate debt first to save cost, then switching to the smallest debt",
      "Clearing the smallest debt first for motivation, then the highest interest rate debt",
      "Paying the largest debt first and then the lowest interest rate debt",
      "Paying equal amounts towards all loans every month",
    ],
    answer: 1,
    explanation:
      "Blizzard mixes the two methods. It starts with snowball (smallest amount first) for a motivational boost, then switches to avalanche (highest interest rate first) to avoid being left with the costliest debt.",
  },
  {
    id: "c04-q09",
    question:
      "Suresh has a monthly income of ₹90,000. He pays a home loan EMI of ₹30,000 and a car loan EMI of ₹10,500. Which statement about his debt to income ratio is correct?",
    options: [
      "It is 45%, which is above the 35% to 40% level regarded as excessive",
      "It is 33.3%, since only the home loan EMI is counted",
      "It is 45%, which is acceptable because all lenders require a ratio below 50%",
      "It is 81.8%, since EMIs are divided by income left after paying EMIs",
    ],
    answer: 0,
    explanation:
      "DTI = total monthly debt servicing / monthly income = (30,000 + 10,500) / 90,000 = 45%. All EMIs count. The workbook treats a ratio above 35% to 40% as excessive and notes there is no single 'optimal' ratio that all lenders require.",
  },
  {
    id: "c04-q10",
    question: "How does the composition of an EMI change over the life of an amortising loan?",
    options: [
      "Early EMIs consist mostly of principal, and the interest share rises later",
      "Principal and interest remain in equal proportions throughout",
      "Early EMIs have a higher interest component, which shrinks as the principal component grows",
      "EMIs consist only of interest until the last instalment, which then repays the whole principal",
    ],
    answer: 2,
    explanation:
      "The EMI stays fixed, but its interest component is higher in the early years. As the outstanding principal falls, the interest portion shrinks and the principal portion grows.",
  },
  {
    id: "c04-q11",
    question:
      "A home loan of ₹20 lakh is taken at 9% per annum for 20 years, with monthly rest. The EMI works out to about ₹17,995. How much of the first EMI goes towards interest?",
    options: ["₹17,995", "₹1,80,000", "₹2,995", "₹15,000"],
    answer: 3,
    explanation:
      "First-month interest = 20,00,000 × 9% / 12 = ₹15,000, which is what IPMT gives for period 1. The remaining ₹2,995 of the EMI repays principal (PPMT). ₹1,80,000 is a full year's interest.",
  },
  {
    id: "c04-q12",
    question:
      "If a borrower extends the tenure of a loan to ease repayment pressure, what is the effect?",
    options: [
      "Both the monthly EMI and the total interest paid over the life of the loan go down",
      "The monthly EMI goes down, but the total interest paid over the loan goes up",
      "The EMI goes up, but the total interest paid goes down",
      "Neither the EMI nor the total interest is affected",
    ],
    answer: 1,
    explanation:
      "A longer tenure reduces the monthly outgo, but the loan is repaid over a longer period, so the total interest paid rises. The workbook makes this point in debt re-scheduling and in its discussion of loan tenure.",
  },
  {
    id: "c04-q13",
    question:
      "Under RBI's directions on free credit reports, as described in the workbook, an individual is entitled to:",
    options: [
      "One free credit report every two years, only from CIBIL",
      "One free full credit report every calendar year from each credit information company",
      "A free credit report every month from any bank where the individual holds a loan or an account",
      "A free credit report only when a loan application has been rejected",
    ],
    answer: 1,
    explanation:
      "Every individual is entitled to a free full credit report once a year from each credit bureau (CIBIL, Experian, CRIF High Mark and Equifax). The year here is the calendar year, January to December.",
  },
  {
    id: "c04-q14",
    question: "Which statement about credit information companies (credit bureaus) in India is correct, as per the workbook?",
    options: [
      "They are registered with SEBI and work under its rules for credit rating agencies",
      "They are run by the Indian Banks' Association, and only banks report data to them",
      "They compute credit scores only from the borrower's filed income tax returns",
      "They are licensed by RBI and governed by the Credit Information Companies (Regulation) Act, 2005",
    ],
    answer: 3,
    explanation:
      "Credit bureaus are licensed by RBI and governed by the CIC (Regulation) Act, 2005. Banks, NBFCs and other lenders report credit data to them monthly, and they use it to build credit scores and reports, such as the CIBIL TransUnion score ranging from 300 to 900.",
  },
  {
    id: "c04-q15",
    question:
      "A client with a home loan at about 7% and no other debt receives a large bonus. Long-term equity returns are expected to be around 12%. Which view is consistent with the workbook?",
    options: [
      "The bonus must always go towards prepaying the home loan, since being debt-free is always better than any investment option",
      "The bonus should be used to take an additional personal loan to invest more in equity",
      "Investing may work out better due to compounding at a higher return, but the extra equity risk must not be forgotten",
      "The bonus should be kept in a savings account indefinitely until rates change",
    ],
    answer: 2,
    explanation:
      "The workbook notes that if long-term returns are about 12% while the loan costs about 7%, investing may be the better idea because of compounding. It adds that a higher-earning investment carries risk, and that a heavy loan burden can justify prepayment for peace of mind.",
  },
  {
    id: "c04-q16",
    question:
      "Ankit has never missed a payment on his own loans, but he stood guarantor for a friend's personal loan on which repayments have been missed. What does the workbook say about the impact on Ankit's credit score?",
    options: [
      "It can be hurt, since repayment on loans he has guaranteed or jointly holds also counts",
      "It is unaffected, since bureaus record only loans taken in the person's own name",
      "It improves, since acting as guarantor shows lenders that he is considered creditworthy",
      "It is affected only after the lender files a recovery suit against him in court",
    ],
    answer: 0,
    explanation:
      "The workbook states that a person's credit score is also affected by repayment behaviour on loans where they are joint holders or guarantors. Other factors include timely payment, low credit utilisation, a mix of secured and unsecured credit and moderate credit enquiries.",
  },
  {
    id: "c04-q17",
    question:
      "Under RBI's rules on free credit reports described in the workbook, the free report given to an individual must:",
    options: [
      "Show only the credit score, without the details of any outstanding loans",
      "Be issued only in physical form and sent to the address on record by post",
      "Cover only the loans that the individual has closed during the past year",
      "Be the same full report lenders see, and let mistakes in it be rectified",
    ],
    answer: 3,
    explanation:
      "The free annual report must be a full copy, the same as what financial institutions access, and should let the borrower rectify mistakes. It includes the score and outstanding loans, typically shows 2–3 years of repayment history, and can be accessed electronically after authentication.",
  },
  {
    id: "c04-q18",
    question: "Which statement about peer-to-peer (P2P) loans is consistent with the workbook?",
    options: [
      "They are secured against the borrower's property, so interest rates are low",
      "Unsecured lending between individuals, so rates are high to cover default risk",
      "The platform's background check on borrowers removes the lender's risk of default",
      "They are large, long-term loans that banks give to individuals through a platform",
    ],
    answer: 1,
    explanation:
      "In P2P lending, one individual lends directly to another through a platform. The loan is unsecured and the basic background check does not reduce the lender's risk, so rates are high, although amounts are small and tenures short.",
  },
  {
    id: "c04-q19",
    question:
      "Meena takes a loan against her gold and mutual fund units. Later, the prices of these assets fall sharply. What can the lender do, according to the workbook?",
    options: [
      "Nothing, since the loan amount was fixed on the date it was sanctioned",
      "Convert the loan automatically into an unsecured personal loan",
      "Ask her to deposit money to cover the fall in the security's value",
      "Waive the interest on the loan until the asset prices recover",
    ],
    answer: 2,
    explanation:
      "Loans against securities or gold are given at a certain percentage of the asset's value as per RBI guidelines. If the price falls sharply, the lender can ask the borrower to deposit money to cover the change in value. Such loans cost less than personal loans or credit card debt.",
  },
  {
    id: "c04-q20",
    question:
      "When the rate on a floating-rate home loan goes up, why does the workbook say many borrowers prefer to keep the EMI unchanged and let the tenure change instead?",
    options: [
      "The EMI was set at an affordable level, and a rising EMI could strain finances",
      "Changing the tenure always reduces the total interest paid over the life of the loan",
      "A longer tenure automatically improves the borrower's credit score with the bureaus",
      "Tenure changes are free of charge, while every EMI change attracts a processing fee",
    ],
    answer: 0,
    explanation:
      "The EMI is usually set at a level the borrower can afford, and a fixed amount is easier to track. If the EMI rose with every rate increase, it could cause distress. A one-time EMI change may still make sense, for example after a large fall in rates.",
  },
  {
    id: "c04-q21",
    question:
      "Rakesh receives a bonus of ₹2 lakh. He has a credit card balance of ₹1.5 lakh costing about 40% a year, and his equity investments are expected to earn about 12% a year over the long term. What does the workbook's reasoning suggest?",
    options: [
      "Invest the whole bonus in equity, since compounding always beats repaying debt",
      "Pay only the minimum due on the card and put the bonus in a fixed deposit",
      "Use the bonus as margin to buy shares and clear the card from future gains",
      "Repay the card dues first, as that debt costs far more than equity earns",
    ],
    answer: 3,
    explanation:
      "The decision depends on the loan's interest rate versus the expected return on the investment. The workbook says repayment is the easy choice for high-cost credit card or personal loan debt. Investing makes sense only when the expected return clearly exceeds a low loan rate, as with a 7% home loan.",
  },
  {
    id: "c04-q22",
    question:
      "Kavya owes: credit card ₹1.2 lakh at 40%, personal loan ₹2 lakh at 16%, consumer durable loan ₹30,000 at 24% and home loan ₹25 lakh at 8.5%. In what order would she repay them under the avalanche strategy?",
    options: [
      "Consumer durable loan → credit card → personal loan → home loan",
      "Credit card → consumer durable loan → personal loan → home loan",
      "Home loan → personal loan → credit card → consumer durable loan",
      "Personal loan → credit card → consumer durable loan → home loan",
    ],
    answer: 1,
    explanation:
      "The avalanche strategy repays the highest interest rate first: credit card (40%), consumer durable loan (24%), personal loan (16%), then the home loan (8.5%). Repaying by size, smallest first, is the snowball method.",
  },
  {
    id: "c04-q23",
    question:
      "A loan charges 12% per annum with annual rest, but the borrower repays in monthly instalments. What does this mean for the borrower?",
    options: [
      "The effective cost is lower than the quoted rate, since repayments are made more often",
      "The effective cost equals the quoted rate, since the rest period has no bearing on cost",
      "The lender must recompute the EMI every month based on the outstanding balance",
      "The effective cost is higher than quoted, as monthly payments get credit only yearly",
    ],
    answer: 3,
    explanation:
      "'Rest' is the interest-charging cycle. With annual rest, the lender adjusts the outstanding loan for interest only once a year, so the borrower gets no credit during the year for monthly repayments. The effective cost is therefore higher than the quoted rate.",
  },
  {
    id: "c04-q24",
    question:
      "A borrower has a ₹4 lakh loan at 8% per annum with monthly rest, repayable over 3 years (EMI about ₹12,535). Under a restructuring, the bank extends the tenure to 5 years at the same rate. What is the approximate new EMI?",
    options: ["₹8,111", "₹7,521", "₹6,667", "₹9,333"],
    answer: 0,
    explanation:
      "New EMI = PMT(8%/12, 60, −4,00,000) ≈ ₹8,111; its present value still equals the ₹4 lakh loan, so the lender's position is unchanged. ₹7,521 spreads the old 36-month total over 60 months, ₹6,667 repays only principal and ₹9,333 uses flat interest.",
  },
  {
    id: "c04-q25",
    question:
      "The workbook suggests replacing 'Income − Expenses = Savings' with 'Income − Savings = Expenses'. What does this mean in practice?",
    options: [
      "Spend on needs first and invest whatever is left over at the end of the month",
      "Borrow to meet monthly expenses so that existing savings can stay invested",
      "Set aside savings for goals first and spend only from what remains",
      "Count every rupee saved as an expense when preparing the household budget",
    ],
    answer: 2,
    explanation:
      "The idea is to spend after saving rather than save after spending. Savings for goals are allocated before discretionary expenses, and SIPs automatically transferred from the salary help prioritise this investment expenditure.",
  },
];
