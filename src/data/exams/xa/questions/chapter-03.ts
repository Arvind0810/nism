import type { Question } from "@/data/types";

export const chapter03Questions: Question[] = [
  {
    id: "c03-q01",
    question:
      "While preparing a budget, what is left after deducting mandatory expenses (such as loan repayments and taxes) from total regular income?",
    options: ["Savings", "Discretionary income", "Net worth", "Disposable income"],
    answer: 3,
    explanation:
      "The workbook's budget steps say that deducting mandatory expenses from total income leaves the disposable income. Essential living expenses and then discretionary expenses are deducted from it to arrive at savings.",
  },
  {
    id: "c03-q02",
    question: "Which of the following is a discretionary expense in a household budget?",
    options: [
      "Repayment of a home loan EMI",
      "Entertainment and lifestyle expenses",
      "Income tax",
      "Grocery bills",
    ],
    answer: 1,
    explanation:
      "Discretionary expenses, such as entertainment and lifestyle spending, can be cut when expenses need to be controlled. Loan repayments and taxes are mandatory expenses, and groceries are an essential living expense.",
  },
  {
    id: "c03-q03",
    question:
      "Priya buys a household appliance with her credit card in March, and the card bill is paid in April after the free credit period. In her income and expenditure statement, the expense is recorded in:",
    options: [
      "March, the period in which the expense was actually incurred",
      "April, the month in which the card bill is actually paid to the bank",
      "Neither month, since it was bought on credit",
      "Both months equally, to smooth the expense",
    ],
    answer: 0,
    explanation:
      "The income and expenditure statement includes items for the period they relate to, even if they have not yet been paid or received. That is how it differs from a cash statement. A credit card expense is shown in the period it was made.",
  },
  {
    id: "c03-q04",
    question:
      "Arjun's monthly gross salary is ₹50,000, which includes his employer's PF contribution of ₹3,000. His take-home salary is ₹44,000 after his own PF contribution of ₹3,000. He earns ₹1,000 interest on his savings account, and his monthly expenses are ₹35,000. What is his savings ratio?",
    options: ["31.4%", "19.6%", "32.0%", "22.2%"],
    answer: 0,
    explanation:
      "Total income = 50,000 + 1,000 = ₹51,000. Savings = (44,000 + 1,000 + 3,000 + 3,000) − 35,000 = ₹16,000, because both PF contributions count as savings. Savings ratio = 16,000 / 51,000 = 31.4%. Leaving out the PF contributions gives the wrong 19.6%.",
  },
  {
    id: "c03-q05",
    question:
      "A family has an annual income of ₹15 lakh and recurring annual expenses of ₹9 lakh. In addition, they spend about ₹4.5 lakh on a foreign holiday once every 3 years, and this year they had a one-time medical expense of ₹1 lakh. What is their expense ratio?",
    options: ["60%", "76.7%", "70%", "90%"],
    answer: 2,
    explanation:
      "Non-recurring expenses, such as the one-time medical bill, are excluded, while periodic expenses are annualised (₹4.5 lakh ÷ 3 = ₹1.5 lakh). Expense ratio = (9 + 1.5) / 15 = 70%.",
  },
  {
    id: "c03-q06",
    question:
      "According to the workbook, what is a suitable savings to income ratio for an individual in their early 40s?",
    options: [
      "At least 0.5 times annual income",
      "At least 1 times annual income",
      "Equal to six months' expenses",
      "At least 3 times annual income",
    ],
    answer: 3,
    explanation:
      "The workbook states that a suitable savings to income ratio in the early 40s is at least 3 times annual income. The ratio is expected to improve over time as income rises and expenses stabilise. A self-occupied home is typically excluded.",
  },
  {
    id: "c03-q07",
    question:
      "An investor has total assets of ₹80 lakh and total liabilities of ₹20 lakh. What is the investor's solvency ratio?",
    options: ["25%", "75%", "33.3%", "300%"],
    answer: 1,
    explanation:
      "Solvency ratio = Net worth / Total assets = (80 − 20) / 80 = 75%. It also equals 1 − Leverage ratio. 25% is the leverage ratio (liabilities ÷ assets), not the solvency ratio.",
  },
  {
    id: "c03-q08",
    question: "A leverage ratio (Total liabilities ÷ Total assets) greater than 1 indicates that:",
    options: [
      "The investor has no outstanding debt",
      "The investor's net worth exceeds the liabilities",
      "The assets will not be adequate to meet the liabilities",
      "Liquid assets can cover at least six months of expenses",
    ],
    answer: 2,
    explanation:
      "The workbook states that a leverage ratio greater than 1 means the assets will not be adequate to meet the liabilities, so net worth is negative. The higher the leverage, the riskier the financial situation.",
  },
  {
    id: "c03-q09",
    question:
      "Kiran's monthly expenses, including loan EMIs, are ₹80,000. He holds: savings bank balance ₹2 lakh, fixed deposits maturing within 6 months ₹1.5 lakh, liquid mutual fund ₹1.3 lakh, equity shares ₹4 lakh, closed-end fund units ₹3 lakh and long-term fixed deposits ₹5 lakh. What is his liquidity ratio?",
    options: ["11.0", "6.0", "4.1", "21.0"],
    answer: 1,
    explanation:
      "Liquid assets = savings bank + short-term FDs + liquid fund = 2 + 1.5 + 1.3 = ₹4.8 lakh. Liquidity ratio = 4.8 lakh / 0.8 lakh = 6.0. Shares, closed-end funds and long-term FDs are excluded. Including shares would wrongly give 11.0.",
  },
  {
    id: "c03-q10",
    question:
      "Why are equity shares not included in liquid assets when calculating the liquidity ratio, even though they can be sold quickly on a stock exchange?",
    options: [
      "Because shares cannot be sold on any working day",
      "Because shares are not counted as part of an investor's total assets when computing personal finance ratios",
      "Because dividends on shares are paid only once a year",
      "Because the uncertainty in their value makes it risky to rely on them for cash at short notice",
    ],
    answer: 3,
    explanation:
      "Some assets can be converted into cash easily, but their values can swing widely in the short term. Because of this uncertainty, shares are unsuitable for meeting cash needs at short notice and are left out of liquid assets.",
  },
  {
    id: "c03-q11",
    question: "Which of the following matches the workbook's guidance on the emergency fund?",
    options: [
      "Six months' expenses in liquid assets, or laddered with about three months' worth liquid if income security is high",
      "It should cover one month of expenses and be invested in equity funds for higher growth",
      "It should cover twelve months of expenses and be invested in real estate",
      "It should be built only after all long-term goals such as retirement and children's education have been fully funded",
    ],
    answer: 0,
    explanation:
      "The emergency fund should be the first savings goal and should cover six months of expenses in liquid assets. If income security is high, about three months' worth can be held in liquid assets and the rest in less liquid, higher-return assets.",
  },
  {
    id: "c03-q12",
    question:
      "Lenders use the debt to income ratio (monthly debt servicing ÷ monthly income) to judge repayment capacity. Above what level does the workbook regard this ratio as excessive?",
    options: ["15% to 20%", "25% to 30%", "35% to 40%", "50% to 60%"],
    answer: 2,
    explanation:
      "A debt to income ratio higher than 35% to 40% is seen as excessive. At that level, a large part of income is committed to lenders, which hurts regular expenses, savings and the ability to borrow in an emergency.",
  },
  {
    id: "c03-q13",
    question: "A higher proportion of financial assets in total assets is especially preferred when:",
    options: [
      "Goals are closer to realisation and there is a need for income or funds to meet them",
      "The investor wants to hedge against inflation mainly through physical assets such as gold and land",
      "Goals are several decades away and liquidity is irrelevant",
      "The investor wants to avoid regulated and standardised products",
    ],
    answer: 0,
    explanation:
      "Financial assets offer greater liquidity, flexibility and convenience. The workbook states a higher financial assets ratio is preferred especially when goals are near and there is a need for income or funds.",
  },
  {
    id: "c03-q14",
    question:
      "A young client's goals are all 15 or more years away. How should the liquid assets to net worth ratio ideally look?",
    options: [
      "High, because liquid assets earn superior returns over long holding periods",
      "Exactly 1, so that all savings are available immediately",
      "It is irrelevant to long-term goals",
      "Low, because a high ratio means much of the savings earns low returns",
    ],
    answer: 3,
    explanation:
      "If goals are far away, this ratio should be low. A high ratio means a large share of savings is held in low-yielding liquid assets, which hurts the ability to meet long-term goals. The ratio should be higher only when goals are near.",
  },
  {
    id: "c03-q15",
    question:
      "A client budgets ₹4,000 a month for conveyance, but actual conveyance spending has averaged ₹6,000 for several months. Based on budget monitoring, what is the appropriate action?",
    options: [
      "Ignore the variance, since budgets are only estimates",
      "Either raise the budget figure or change the mode of conveyance to reduce cost",
      "Stop monitoring the budget until the end of the year",
      "Permanently reduce the monthly savings allocation to fund the conveyance overrun",
    ],
    answer: 1,
    explanation:
      "Monitoring compares actual figures with the budget and corrects it going forward. The workbook uses this exact case: either the budget figure is raised or the mode of conveyance is changed to reduce cost.",
  },
  {
    id: "c03-q16",
    question:
      "The Mehta family's monthly figures are: total income ₹1,20,000; PF contribution ₹8,000; tax ₹10,000; loan repayment ₹15,000; essential living expenses ₹50,000; discretionary expenses ₹12,000; and regular investments ₹15,000. Using the workbook's household budget format, what is their savings ratio?",
    options: ["8.3%", "20.8%", "27.5%", "32.4%"],
    answer: 2,
    explanation:
      "Total expenses (PF, tax, loan, essential, discretionary) = ₹95,000, so monthly surplus in hand = 1,20,000 − (95,000 + 15,000) = ₹10,000. Savings = PF 8,000 + investments 15,000 + surplus 10,000 = ₹33,000, and 33,000 / 1,20,000 = 27.5%. Counting only the surplus gives 8.3%, and dividing by income net of tax and PF gives 32.4%.",
  },
  {
    id: "c03-q17",
    question:
      "An investor owns a house worth ₹80 lakh, bought with a ₹50 lakh loan of which ₹30 lakh is still outstanding. He also has investments and bank balances of ₹15 lakh, a PF balance of ₹5 lakh, credit card dues of ₹1 lakh and a ₹4 lakh loan from a relative. What is his leverage ratio?",
    options: ["35%", "55%", "65%", "53.8%"],
    answer: 0,
    explanation:
      "Total assets = 80 + 15 + 5 = ₹100 lakh; total liabilities = 30 (outstanding, not original, loan) + 1 + 4 = ₹35 lakh. Leverage ratio = 35 / 100 = 35%. Using the original loan gives 55%, 65% is the solvency ratio, and 53.8% divides liabilities by net worth.",
  },
  {
    id: "c03-q18",
    question:
      "A client holds shares of ₹6 lakh, fixed deposits of ₹9 lakh, mutual funds of ₹15 lakh, land of ₹12 lakh and gold of ₹8 lakh. What is the financial assets ratio?",
    options: ["40%", "150%", "60%", "76%"],
    answer: 2,
    explanation:
      "Financial assets = 6 + 9 + 15 = ₹30 lakh; physical assets (land and gold) = ₹20 lakh; total = ₹50 lakh. Financial assets ratio = 30 / 50 = 60%. 40% is the physical asset share, 150% divides financial by physical assets, and 76% wrongly counts gold as a financial asset.",
  },
  {
    id: "c03-q19",
    question:
      "Ravi's annual income is ₹15 lakh. He has a PF balance of ₹10 lakh, mutual funds of ₹12 lakh and bank deposits of ₹5 lakh. He lives in his own house worth ₹80 lakh (home loan outstanding ₹40 lakh) and owns a let-out flat worth ₹50 lakh (loan outstanding ₹30 lakh). What is his accumulated savings to income ratio?",
    options: ["1.80", "3.13", "5.13", "5.80"],
    answer: 1,
    explanation:
      "Total savings uses current values net of loans taken to buy them, and excludes the self-occupied home: 10 + 12 + 5 + (50 − 30) = ₹47 lakh. Ratio = 47 / 15 = 3.13. Ignoring the flat gives 1.80, taking it gross gives 5.13, and adding the house's net equity gives 5.80.",
  },
  {
    id: "c03-q20",
    question:
      "Apart from the emergency fund, the workbook suggests keeping a surplus balance or a separate fund aside. What is the purpose of this separate fund?",
    options: [
      "To replace income if an earning member loses a job",
      "To pay the annual premiums on life and health cover",
      "To buy equities when markets fall sharply",
      "To handle short-term mismatches between cash inflows and outflows",
    ],
    answer: 3,
    explanation:
      "Cash management means ensuring cash is available when expenses fall due. The workbook distinguishes this separate fund, which tackles short-term cash mismatches, from the emergency fund, which is meant for income disruption.",
  },
  {
    id: "c03-q21",
    question:
      "A client's actual savings are far below what his goals require. Which step is consistent with the workbook's step-by-step approach to raising the savings rate?",
    options: [
      "Cut essential living expenses such as groceries and school fees before anything else",
      "Stop building the emergency fund and redirect that money into equity funds",
      "Divert lump-sum receipts straight to savings and keep pay rises free for saving",
      "Set a single target of tripling the savings rate within the next one month",
    ],
    answer: 2,
    explanation:
      "The workbook suggests raising the savings rate by a modest target (say 10%) and then setting a further target, cutting wasteful and discretionary spending, diverting lump-sum receipts to savings and not committing higher income to new expenses.",
  },
  {
    id: "c03-q22",
    question:
      "When creating a budget and savings plan, how does the workbook suggest the savings allocation should be handled?",
    options: [
      "As a fixed budget item, transferred directly to investments each month before spending",
      "As whatever balance is left in the account at the end of each month after all expenses",
      "As an amount decided afresh each month, depending on how much has already been spent",
      "As a single annual investment made only after the yearly bonus has been received",
    ],
    answer: 0,
    explanation:
      "The workbook says savings should be allocated before the money is spent elsewhere, through a direct transfer to the chosen investments each month. Making savings a fixed figure in the budget ensures there are no variations and that the goal is met.",
  },
  {
    id: "c03-q23",
    question: "How often does the workbook say the adequacy of the emergency fund should be reviewed?",
    options: [
      "Only after the fund has been drawn down for an actual emergency",
      "Once every five years, along with a full revision of the financial plan",
      "Annually, or whenever a large addition such as a new EMI hits monthly expenses",
      "Only when the client changes jobs or receives a salary increment",
    ],
    answer: 2,
    explanation:
      "The emergency fund should be reviewed annually, or whenever there is a large addition to monthly expenses, such as a new EMI. If the fund is used, it should be replenished as soon as possible.",
  },
  {
    id: "c03-q24",
    question:
      "What does the workbook say about pre-nuptial agreements as a way to handle the financial risk of separation in India?",
    options: [
      "They are compulsory for joint home loan borrowers",
      "Their legality in India has not yet been established",
      "They are enforceable in India once registered with a court",
      "They are recognised in India only where both spouses earn",
    ],
    answer: 1,
    explanation:
      "A pre-nuptial agreement, entered into before marriage, sets out how finances will be dealt with on separation. Wealthy couples in developed countries use them, but the workbook notes that their legality in India has not been established.",
  },
  {
    id: "c03-q25",
    question:
      "When estimating the total assets available to meet goals and financial needs, which items does the workbook's conservative approach exclude?",
    options: [
      "Provident fund and superannuation balances, since they are locked in",
      "Shares and equity mutual funds, since their values fluctuate widely",
      "Fixed deposits maturing after six months, since they are not liquid",
      "Personal jewellery, the family's own residence and a personal-use car",
    ],
    answer: 3,
    explanation:
      "A conservative approach excludes personal jewellery, the one residential house the family lives in, and assets meant for personal use such as a car. PF, superannuation, shares, mutual funds and deposits all form part of total assets.",
  },
];
