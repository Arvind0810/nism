import type { Question } from "@/data/types";

export const chapter02Questions: Question[] = [
  {
    id: "c02-q01",
    question:
      "Assuming there is no uncertainty about the cash flow, why would an investor prefer receiving ₹100 today over receiving ₹100 after one month?",
    options: [
      "Because ₹100 receivable after a month carries a risk of default",
      "Because of a preference for current consumption and the chance to invest the money and earn a return",
      "Because money received at a later date is taxed at a higher rate than money that is received today",
      "Because inflation is always zero over short periods",
    ],
    answer: 1,
    explanation:
      "The workbook gives two reasons for time value of money: an instinctive preference for current consumption, and the ability to invest the ₹100 so that it grows to more than ₹100 in a month. Default risk is ruled out by the question.",
  },
  {
    id: "c02-q02",
    question:
      "₹1,000 receivable after 3 years is worth about ₹864 today when discounted at 5%. If the discount rate is 8% instead, its present value will be:",
    options: [
      "Higher than ₹864, because a higher rate increases the present value",
      "Exactly ₹864, because the future cash flow is unchanged",
      "₹1,000, because discounting does not apply to fixed sums",
      "Lower than ₹864 (about ₹794), because a higher discount rate reduces the present value",
    ],
    answer: 3,
    explanation:
      "The higher the discount rate, the lower the present value of future cash flows. ₹1,000 / (1.08)^3 ≈ ₹794, compared with ₹864 at 5%.",
  },
  {
    id: "c02-q03",
    question:
      "Anita invests ₹2,00,000 for 3 years at 10% per annum compounded annually. What will be the maturity value?",
    options: ["₹2,66,200", "₹2,60,000", "₹2,68,978", "₹1,50,263"],
    answer: 0,
    explanation:
      "FV = PV × (1 + r)^n = 2,00,000 × (1.10)^3 = ₹2,66,200. ₹2,60,000 is simple interest (no compounding), ₹2,68,978 assumes quarterly compounding, and ₹1,50,263 wrongly discounts instead of compounding.",
  },
  {
    id: "c02-q04",
    question:
      "For the same deposit amount, tenure and nominal rate of 8% per annum, which option will give the highest maturity value?",
    options: [
      "Simple interest, with interest paid out each year",
      "Annual compounding",
      "Quarterly compounding",
      "Half-yearly compounding",
    ],
    answer: 2,
    explanation:
      "The greater the frequency of compounding, the more often interest is earned on interest, and the higher the return. In the workbook's example, quarterly compounding (₹7,42,974) beats annual compounding (₹7,34,664) on ₹5 lakh over 5 years.",
  },
  {
    id: "c02-q05",
    question:
      "Rahul needs ₹1,00,000 after 4 years. If he can earn 8% per annum compounded annually, how much must he invest today?",
    options: ["₹68,000", "₹75,758", "₹73,503", "₹1,36,049"],
    answer: 2,
    explanation:
      "PV = FV / (1 + r)^n = 1,00,000 / (1.08)^4 = ₹73,503. ₹75,758 discounts using simple interest, ₹68,000 just deducts 32%, and ₹1,36,049 is the future value of ₹1 lakh, not the present value.",
  },
  {
    id: "c02-q06",
    question:
      "An investment of ₹50,000 grows to ₹72,000 in 4 years. What is the compounded annual growth rate (CAGR)?",
    options: ["9.54%", "11.00%", "12.92%", "44.00%"],
    answer: 0,
    explanation:
      "CAGR = (End Value / Beginning Value)^(1/n) − 1 = (72,000 / 50,000)^(1/4) − 1 = 9.54%. 11% is the simple average (44% ÷ 4), 12.92% wrongly uses 3 years, and 44% is the absolute return.",
  },
  {
    id: "c02-q07",
    question:
      "A 5-year deposit pays 8% per annum compounded quarterly. What rate per period (r) and number of periods (n) should be used in the formula FV = PV × (1 + r)^n?",
    options: ["r = 8%, n = 5", "r = 8%, n = 20", "r = 2%, n = 5", "r = 2%, n = 20"],
    answer: 3,
    explanation:
      "The rate must be adjusted for compounding frequency: 8% ÷ 4 = 2% per quarter. The number of periods becomes 5 × 4 = 20 quarters.",
  },
  {
    id: "c02-q08",
    question:
      "A bond pays a fixed coupon at the end of every year until maturity. From a time value of money perspective, this stream of payments is best described as:",
    options: ["An annuity due", "An ordinary annuity", "A perpetuity", "A single lump-sum cash flow"],
    answer: 1,
    explanation:
      "In an ordinary annuity, the payment is made at the end of each period. The workbook uses a bond paying annually at the end of the year as its example. An annuity due pays at the start of each period, and a perpetuity has no end date.",
  },
  {
    id: "c02-q09",
    question:
      "What is the present value of ₹10,000 received at the beginning of each year for 5 years, if the discount rate is 8% per annum?",
    options: ["₹43,121", "₹39,927", "₹50,000", "₹58,666"],
    answer: 0,
    explanation:
      "Payments at the start of each period form an annuity due. PV = 10,000 × [(1 − 1.08^−5) / 0.08] × 1.08 = ₹43,121. ₹39,927 is the ordinary annuity value, ₹50,000 ignores discounting, and ₹58,666 is the future value of an ordinary annuity.",
  },
  {
    id: "c02-q10",
    question:
      "When using the Excel PV function, entering 1 as the 'type' argument indicates that:",
    options: [
      "Payments occur at the end of each period (ordinary annuity)",
      "Payments occur at the beginning of each period (annuity due)",
      "Interest is compounded continuously",
      "There is only one payment in the entire term",
    ],
    answer: 1,
    explanation:
      "The type argument is usually left blank or 0, which assumes payments at the end of the period. Entering 1 treats payments as occurring at the start of the period, which is an annuity due, and gives a higher value.",
  },
  {
    id: "c02-q11",
    question:
      "A perpetual bond pays interest of ₹6,000 every year forever. If the discount rate is 7.5%, what is the value of this perpetuity?",
    options: ["₹45,000", "₹8,000", "₹6,450", "₹80,000"],
    answer: 3,
    explanation:
      "PV of a perpetuity = C / r = 6,000 / 0.075 = ₹80,000. ₹45,000 multiplies by the rate instead of dividing by it, ₹8,000 uses 0.75 instead of 0.075, and ₹6,450 is one year's growth of ₹6,000.",
  },
  {
    id: "c02-q12",
    question: "Which of the following best describes a floating (flexible) annuity?",
    options: [
      "Fixed returns received at regular intervals for a predetermined term, such as a bank deposit for 5 years",
      "A cash flow that continues forever without a maturity date",
      "Payouts benchmarked to inflation, an index or another specified return, so the annuity amount changes",
      "Payments that are always made at the start of each period",
    ],
    answer: 2,
    explanation:
      "Floating annuities have returns benchmarked to inflation, index returns or another specified return, so payouts are not fixed. A fixed annuity, such as a bank deposit paying a set rate for 5 years, gives fixed returns.",
  },
  {
    id: "c02-q13",
    question:
      "A borrower knows the loan amount, the interest rate and the EMI he can afford, and wants to know how many months it will take to repay the loan. Which Excel function should he use?",
    options: ["NPER", "PMT", "RATE", "FV"],
    answer: 0,
    explanation:
      "NPER gives the number of periods needed to repay a loan, given the rate, the payment and the present value. In the workbook's example, a ₹5 lakh loan at 8% with an EMI of ₹12,000 takes about 48.97 months. PMT gives the EMI and RATE gives the return.",
  },
  {
    id: "c02-q14",
    question:
      "CAGR is the accepted standard measure of return on investment in financial markets, except in the case of:",
    options: [
      "Investments held for more than five years",
      "Returns that involve periods of less than one year",
      "Mutual fund investments",
      "Investments that have no intermediate cash flows",
    ],
    answer: 1,
    explanation:
      "The workbook says CAGR is the standard measure of return except for returns involving periods of less than one year. It is used for mutual funds and for investments without intermediate cash flows.",
  },
  {
    id: "c02-q15",
    question:
      "Shyam can receive ₹6,500 a year for the next 8 years. At an interest rate of 7%, the present value of this stream is about ₹38,813. Ignoring other factors, which lump-sum offer today should he prefer over the annual payments?",
    options: ["₹35,000", "₹30,000", "₹38,000", "₹40,000"],
    answer: 3,
    explanation:
      "A lump sum today is better only if it is more than the present value of the annuity (₹38,813). Only ₹40,000 exceeds this. The other offers are worth less than the payment stream in present value terms.",
  },
  {
    id: "c02-q16",
    question:
      "Pooja takes a home loan of ₹40 lakh at 8.5% per annum for 20 years, with monthly rest and EMIs paid at the end of each month. What is her approximate EMI?",
    options: ["₹35,224", "₹45,000", "₹34,713", "₹16,667"],
    answer: 2,
    explanation:
      "EMI = PMT(8.5%/12, 240, −40,00,000) ≈ ₹34,713, using a monthly rate and 240 months. ₹35,224 divides the annual instalment by 12, ₹45,000 charges flat interest on the full principal, and ₹16,667 repays only the principal.",
  },
  {
    id: "c02-q17",
    question:
      "A loan of ₹3 lakh at 9% per annum is to be repaid through an EMI of ₹10,000 at the end of every month. Approximately how many months will it take to repay the loan?",
    options: ["34.1 months", "30.0 months", "35.5 months", "32.7 months"],
    answer: 0,
    explanation:
      "NPER(9%/12, −10,000, 3,00,000) ≈ 34.1 months. 30 months ignores interest altogether, 32.7 months simply adds one year's interest to the principal, and 35.5 months wrongly applies an annual rate.",
  },
  {
    id: "c02-q18",
    question:
      "An investor bought mutual fund units at an NAV of ₹20 and redeemed them at ₹23 after 500 days. What is the compounded annual rate of return? (Assume a non-leap year.)",
    options: ["15.00%", "10.95%", "21.10%", "10.74%"],
    answer: 3,
    explanation:
      "The period is converted into years: CAGR = (23/20)^(365/500) − 1 ≈ 10.74%. 15% is the absolute return, 10.95% is a simple annualised return, and 21.10% uses the inverted exponent 500/365.",
  },
  {
    id: "c02-q19",
    question:
      "Leela invests ₹2,00,000 in a 3-year cumulative deposit paying 9% per annum compounded quarterly. How much interest will she earn over the term?",
    options: ["₹54,000", "₹59,006", "₹61,210", "₹61,729"],
    answer: 2,
    explanation:
      "With quarterly compounding, r = 9%/4 = 2.25% and n = 12. FV = 2,00,000 × (1.0225)^12 ≈ ₹2,61,210, so interest ≈ ₹61,210. ₹54,000 is simple interest, ₹59,006 assumes annual compounding and ₹61,729 assumes monthly compounding.",
  },
  {
    id: "c02-q20",
    question:
      "The annuity factor for 10 years at 5% is 7.7217. What is the present value of ₹20,000 received at the end of each year for 10 years, discounted at 5%?",
    options: ["₹2,00,000", "₹1,54,434", "₹1,62,156", "₹2,51,558"],
    answer: 1,
    explanation:
      "PV of an ordinary annuity = payment × annuity factor = 20,000 × 7.7217 = ₹1,54,434. ₹2,00,000 ignores discounting, ₹1,62,156 treats the payments as an annuity due, and ₹2,51,558 is the future value of the annuity.",
  },
  {
    id: "c02-q21",
    question:
      "Which Excel function does the workbook use to find the CAGR when the number of years, the beginning value and the end value are known?",
    options: ["PMT(rate, nper, −PV)", "NPER(rate, −PMT, PV)", "RATE(nper, , −PV, FV)", "FV(rate, nper, , −PV)"],
    answer: 2,
    explanation:
      "CAGR = RATE(years, , −PV, FV). For example, RATE(2, , −100, 120) gives about 9.54%. PMT gives a periodic payment such as an EMI, NPER gives the number of periods and FV gives a future value.",
  },
  {
    id: "c02-q22",
    question:
      "A tenant must pay the annual rent at the beginning of each year instead of at the end. From a time value of money perspective, how does this affect the tenant?",
    options: [
      "It is cheaper, because paying early always lowers the present value of payments",
      "It is costlier, because the tenant loses the return the money could earn that year",
      "It makes no difference, because the total rupee amount paid stays the same",
      "It is cheaper, because annuity due payments are discounted at a higher rate",
    ],
    answer: 1,
    explanation:
      "Paying at the start of each period is an annuity due, which has a higher present value than an ordinary annuity. The workbook notes it is more costly for the payer, who loses the chance to earn on that money for the year.",
  },
  {
    id: "c02-q23",
    question:
      "Krishna puts ₹5 lakh in a 5-year deposit at 8% but withdraws the interest every year to pay his daughter's college fees. Why does he earn less interest than under the cumulative option?",
    options: [
      "The interest is taken out and not reinvested, so he earns only simple interest",
      "Interest paid out is taxable, while cumulative interest is fully exempt from tax",
      "His principal goes down each year by the amount of interest that he withdraws",
      "Payout deposits compound annually, while cumulative deposits compound monthly",
    ],
    answer: 0,
    explanation:
      "When interest is paid out and used, there is no compounding: interest = 5,00,000 × 8% × 5 = ₹2,00,000. Under the cumulative option interest earns interest, giving ₹2,34,664 with annual compounding.",
  },
  {
    id: "c02-q24",
    question:
      "Using the same discount rate, how do the present values of ₹100 receivable after one month (X), after one year (Y) and after five years (Z) compare?",
    options: ["Z > Y > X", "X = Y = Z", "X > Y > Z", "Y > X > Z"],
    answer: 2,
    explanation:
      "The later a cash flow is received, the lower its value today. ₹100 after one month is worth more today than ₹100 after one year, which in turn is worth more than ₹100 after five years.",
  },
  {
    id: "c02-q25",
    question:
      "In financial markets, when an investment provides a series of intermediate cash inflows, what is assumed about those inflows for return calculations?",
    options: [
      "They are spent as received and earn nothing further",
      "They are taxed at the investor's highest marginal rate",
      "They are added back to the original amount invested",
      "They can be re-invested to earn a positive return",
    ],
    answer: 3,
    explanation:
      "The workbook states that the time value of money is always taken into account: intermediate cash inflows are assumed to be re-invested at a positive return. An investment without intermediate cash flows is assumed to compound annually to its final value.",
  },
];
