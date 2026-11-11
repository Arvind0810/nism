import type { Question } from "@/data/types";

export const chapter16Questions: Question[] = [
  {
    id: "c16-q01",
    question:
      "A portfolio worth ₹2,00,000 at the start of the year is worth ₹2,30,000 at year-end. During the year it also received ₹6,000 as dividends and interest. What is the holding period return?",
    options: [
      "15.00%",
      "15.65%",
      "18.00%",
      "12.00%",
    ],
    answer: 2,
    explanation:
      "HPR = [Income + (Ending value − Beginning value)] / Beginning value = (₹6,000 + ₹30,000) / ₹2,00,000 = 18%. 15% ignores the income, and 15.65% wrongly divides by the ending value.",
  },
  {
    id: "c16-q02",
    question:
      "Under the SEBI (Portfolio Managers) Regulations, 2020, discretionary portfolio managers must disclose performance using which return measure for the immediately preceding three years?",
    options: [
      "Money Weighted Rate of Return",
      "Arithmetic Mean Return",
      "Internal Rate of Return on client cash flows",
      "Time Weighted Rate of Return",
    ],
    answer: 3,
    explanation:
      "Discretionary portfolio managers must disclose performance using TWRR for the immediately preceding three years. TWRR removes the effect of the timing of client cash flows, whereas MWRR (IRR) depends on that timing and so reflects the investor's decisions rather than the manager's.",
  },
  {
    id: "c16-q03",
    question:
      "A portfolio returns +20%, −10% and +15% in three successive years. What is its geometric mean (annualised) return?",
    options: [
      "7.49%",
      "8.33%",
      "24.20%",
      "8.07%",
    ],
    answer: 0,
    explanation:
      "GMR = [(1.20 × 0.90 × 1.15)^(1/3)] − 1 = 1.242^(1/3) − 1 ≈ 7.49%. The arithmetic mean (8.33%) is higher because, unless all yearly returns are equal, the geometric return is always less than the arithmetic return. 24.20% is the cumulative three-year return.",
  },
  {
    id: "c16-q04",
    question:
      "Which statement about systematic risk is correct?",
    options: [
      "It arises from company- and sector-specific factors and can be eliminated by holding more securities",
      "It comes from common factors like interest and exchange rates, cannot be diversified away, and is measured by beta",
      "It is measured as the standard deviation of the difference between portfolio returns and benchmark total returns",
      "Under the CAPM, investors earn no compensation for bearing it because it can be hedged away cheaply",
    ],
    answer: 1,
    explanation:
      "Systematic risk comes from common factors that affect all investments. It cannot be diversified away, though it can be hedged, and it is measured by beta. Company or sector-specific risk is unsystematic and diversifiable, and the standard deviation of active returns is tracking error.",
  },
  {
    id: "c16-q05",
    question:
      "Why is investment performance generally communicated as a pre-tax rate of return?",
    options: [
      "Because post-tax returns are always higher and would overstate the manager's performance",
      "Because investors are in different tax brackets, so pre-tax returns allow fair comparison",
      "Because SEBI regulations prohibit portfolio managers from disclosing post-tax returns",
      "Because taxes do not affect the returns an investor actually earns from the portfolio",
    ],
    answer: 1,
    explanation:
      "Investors fall in different tax brackets, so performance is reported pre-tax to allow comparison. Investors or their advisers then calculate post-tax return = pre-tax return × (1 − tax rate), because the post-tax return is what really matters for decisions.",
  },
  {
    id: "c16-q06",
    question:
      "A portfolio earned an annualised return of 13% with an annualised standard deviation of 10%. The risk-free rate is 5%. What is its Sharpe ratio?",
    options: [
      "1.30",
      "0.08",
      "0.80",
      "1.80",
    ],
    answer: 2,
    explanation:
      "Sharpe ratio = (Rp − Rf) / σp = (13% − 5%) / 10% = 0.80. 1.30 forgets to subtract the risk-free rate, and 0.08 is the excess return written as a decimal without dividing by risk.",
  },
  {
    id: "c16-q07",
    question:
      "For which investor is the Treynor ratio a more appropriate performance measure than the Sharpe ratio?",
    options: [
      "An investor whose overall wealth is already held in well-diversified portfolios",
      "An investor whose entire wealth is concentrated in this single portfolio",
      "An investor who views risk only as the chance of losing money",
      "An investor who wants to compare the portfolio against its benchmark's tracking error",
    ],
    answer: 0,
    explanation:
      "The Treynor ratio divides excess return by beta (systematic risk). It suits investors whose wealth is already well diversified, for whom unsystematic risk is minimal. The Sharpe ratio, which uses total risk, suits investors who are not adequately diversified, and the Sortino ratio suits those focused on downside risk.",
  },
  {
    id: "c16-q08",
    question:
      "Two portfolios are ranked differently by the Sharpe ratio and the Treynor ratio. What explains the difference in rankings?",
    options: [
      "A difference in the risk-free rates used in the two calculations",
      "Errors in measuring portfolio returns",
      "The use of arithmetic instead of geometric returns",
      "A difference in the level of diversification of the portfolios",
    ],
    answer: 3,
    explanation:
      "For a completely well-diversified portfolio, total risk equals systematic risk, so both ratios give identical rankings. Any difference arises from differences in diversification, because the Treynor ratio ignores unsystematic risk.",
  },
  {
    id: "c16-q09",
    question:
      "A portfolio with a beta of 1.3 earned 18% when the market returned 12% and the risk-free rate was 6%. What is the portfolio's Jensen's alpha?",
    options: [
      "6.00%",
      "4.20%",
      "2.40%",
      "12.00%",
    ],
    answer: 1,
    explanation:
      "Required return (CAPM) = 6% + 1.3 × (12% − 6%) = 13.8%, so Jensen's alpha = 18% − 13.8% = 4.2%. 6% is simply the excess over the market return, which some professionals call alpha, but it is not Jensen's alpha.",
  },
  {
    id: "c16-q10",
    question:
      "A fund returned 14% against its benchmark's 11%. The standard deviation of the differences between the fund and benchmark returns (tracking error) is 4%. What is the information ratio?",
    options: [
      "3.50",
      "1.33",
      "0.27",
      "0.75",
    ],
    answer: 3,
    explanation:
      "Information ratio = (Rp − Rb) / tracking error = (14% − 11%) / 4% = 0.75. The numerator is active return and the denominator is active risk (tracking error). 3.50 wrongly uses the total return in place of the active return.",
  },
  {
    id: "c16-q11",
    question:
      "Tracking error of a portfolio is defined as:",
    options: [
      "The standard deviation of the difference between portfolio returns and benchmark total returns",
      "The difference between the portfolio's return and the risk-free rate, averaged over the evaluation period",
      "The beta of the portfolio measured relative to its benchmark's total return index",
      "The average difference between the portfolio's NAV and its market price on the exchange",
    ],
    answer: 0,
    explanation:
      "Tracking error is the standard deviation of the difference between the portfolio's return and its benchmark's total return, always measured against the Total Returns Index. A lower tracking error means returns stay closer to the index.",
  },
  {
    id: "c16-q12",
    question:
      "The Sortino ratio differs from the Sharpe ratio because it:",
    options: [
      "Uses beta instead of standard deviation in the denominator, adjusting for market risk",
      "Uses the benchmark return instead of the risk-free rate in the numerator of the ratio",
      "Divides excess return by semi-standard deviation, capturing only downside risk",
      "Adjusts the portfolio's risk to match the market's risk by levering or de-levering",
    ],
    answer: 2,
    explanation:
      "The Sortino ratio divides excess return over the risk-free rate by the semi-standard deviation, which captures downside risk only. Using beta describes Treynor, using benchmark return with tracking error describes the information ratio, and levering to match market risk describes M².",
  },
  {
    id: "c16-q13",
    question:
      "Which of the following is NOT a characteristic of a good benchmark?",
    options: [
      "The identity and weights of its constituents are clearly defined in advance",
      "Its constituents are kept confidential so that managers cannot replicate it",
      "It is consistent with the portfolio's investment approach and style",
      "Its performance can be measured objectively over any period",
    ],
    answer: 1,
    explanation:
      "A good benchmark is clearly defined, investable (a passive exposure is possible), consistent with the portfolio's style, has the same risk-return profile, and is measurable. A benchmark whose constituents are hidden or cannot be replicated fails these tests.",
  },
  {
    id: "c16-q14",
    question:
      "An Indian investor puts ₹40 lakh into a US equity fund when the exchange rate is ₹80 per US dollar. The fund returns 10% in dollar terms, and by the time of redemption the rupee has depreciated to ₹84 per dollar. What is the investor's return in rupee terms?",
    options: [
      "10.00%",
      "5.00%",
      "4.50%",
      "15.50%",
    ],
    answer: 3,
    explanation:
      "₹40 lakh ÷ 80 = $50,000, which grows 10% to $55,000. Converted at ₹84, that is ₹46.2 lakh, a rupee return of 15.5%. The rupee's 5% depreciation adds to the dollar return; the workbook notes that the INR usually depreciates and adds to returns, while in its example an appreciating rupee reduced them.",
  },
  {
    id: "c16-q15",
    question:
      "In performance attribution, a manager beats the benchmark mainly by holding more of a sector that outperformed the total benchmark than the benchmark itself holds. This differential return comes from:",
    options: [
      "The allocation effect",
      "The selection effect",
      "Fama's net selectivity",
      "The currency effect",
    ],
    answer: 0,
    explanation:
      "The allocation effect measures differential return from being overweight in a sector that outperformed the total benchmark, or underweight in one that underperformed. The selection effect measures differential return from choosing securities that did better than the benchmark's own holdings, or avoiding those that did poorly.",
  },
  {
    id: "c16-q16",
    question:
      "A portfolio grows from ₹1,00,000 to ₹1,10,000 in Year 1. At the start of Year 2 the investor adds ₹50,000, and the portfolio ends Year 2 at ₹1,52,000. What is the annualised time-weighted rate of return?",
    options: [
      "2.50%",
      "0.80%",
      "2.23%",
      "1.33%",
    ],
    answer: 2,
    explanation:
      "Sub-period returns are 10% (1,10,000/1,00,000 − 1) and −5% (1,52,000/1,60,000 − 1). Chain-linking gives TWRR = (1.10 × 0.95)^(1/2) − 1 ≈ 2.23%. 2.50% is the arithmetic average, 0.80% is the money-weighted return (IRR), which depends on the timing of the cash flow, and 1.33% is the simple gain on total contributions.",
  },
  {
    id: "c16-q17",
    question:
      "A client invests ₹50 lakh for one year and the portfolio earns 18% gross. Charges, in order: other expenses of 0.5% of the gross value; a fixed management fee of 1.5% on the average of the capital and the gross value; and a performance fee of 20% of profits above a 10% hurdle, without catch-up. There is no exit load. What is the net return?",
    options: [
      "14.62%",
      "15.78%",
      "16.40%",
      "18.00%",
    ],
    answer: 0,
    explanation:
      "Gross value ₹59,00,000 less other expenses ₹29,500 = ₹58,70,500. Fixed fee = 1.5% × ₹54,50,000 = ₹81,750, leaving ₹57,88,750. Performance fee = 20% × (₹57,88,750 − ₹55,00,000) = ₹57,750, so the net value is ₹57,31,000, a net return of 14.62%. 15.78% stops before the performance fee, and 18% is the gross return.",
  },
  {
    id: "c16-q18",
    question:
      "An investor in the 30% tax bracket wants a post-tax return of 8.4%. What pre-tax return must the investment earn?",
    options: [
      "10.92%",
      "12.00%",
      "5.88%",
      "8.40%",
    ],
    answer: 1,
    explanation:
      "Pre-tax return = Post-tax return / (1 − tax rate) = 8.4% / 0.70 = 12%. 10.92% wrongly multiplies by 1.30, and 5.88% applies the tax a second time (8.4% × 0.70).",
  },
  {
    id: "c16-q19",
    question:
      "An investor gives a portfolio manager ₹200 lakh. The manager invests ₹160 lakh in equities, which earn 15%, and keeps ₹40 lakh in a liquid fund that earns 5%. What is the cash-drag-adjusted return on the portfolio?",
    options: [
      "15.00%",
      "12.00%",
      "10.00%",
      "13.00%",
    ],
    answer: 3,
    explanation:
      "Return in rupees = (15% × ₹160 lakh) + (5% × ₹40 lakh) = ₹24 lakh + ₹2 lakh = ₹26 lakh, which is 13% of the ₹200 lakh contributed. 15% ignores the cash drag, and 12% leaves out the liquid fund's income.",
  },
  {
    id: "c16-q20",
    question:
      "A portfolio holds 50% in a stock with a beta of 1.4, 30% in a stock with a beta of 0.9 and 20% in a stock with a beta of 0.6. What is the portfolio beta?",
    options: [
      "0.97",
      "2.90",
      "1.09",
      "1.40",
    ],
    answer: 2,
    explanation:
      "Portfolio beta is the weighted average of individual betas: 0.5 × 1.4 + 0.3 × 0.9 + 0.2 × 0.6 = 0.70 + 0.27 + 0.12 = 1.09. 0.97 is the simple average, and 2.90 is the unweighted sum.",
  },
  {
    id: "c16-q21",
    question:
      "A portfolio returned 15% with a standard deviation of 16% and a beta of 1.2. The risk-free rate is 6%. What is its Treynor ratio?",
    options: [
      "0.075",
      "0.125",
      "0.090",
      "0.563",
    ],
    answer: 0,
    explanation:
      "Treynor ratio = (Rp − Rf) / βp = (15% − 6%) / 1.2 = 0.075. 0.125 forgets to subtract the risk-free rate, 0.090 is the excess return without dividing by beta, and 0.563 divides by standard deviation, which gives the Sharpe ratio.",
  },
  {
    id: "c16-q22",
    question:
      "A portfolio returned 20% with a standard deviation of 25%. The market returned 15% with a standard deviation of 20%, and the T-bill rate is 5%. Using the M² approach, what is the risk-adjusted portfolio return and how did the portfolio perform?",
    options: [
      "16.0%; outperformed the market by 1.0%",
      "20.0%; outperformed the market by 5.0%",
      "23.75%; outperformed the market by 8.75%",
      "17.0%; outperformed the market by 2.0%",
    ],
    answer: 3,
    explanation:
      "To match market volatility, hold 20/25 = 0.8 in the portfolio and 0.2 in T-bills: 0.8 × 20% + 0.2 × 5% = 17%, which beats the 15% market return by 2%. 16% omits the T-bill income, and 23.75% inverts the volatility ratio.",
  },
  {
    id: "c16-q23",
    question:
      "What is 'tracking difference', as distinct from tracking error?",
    options: [
      "Tracking difference uses the price index, while tracking error uses the TRI",
      "Tracking difference is the simple point-to-point gap between fund and index returns",
      "Tracking difference measures the beta of the fund against the market index",
      "Tracking difference is the fund's return minus the risk-free rate for the period",
    ],
    answer: 1,
    explanation:
      "Tracking difference is the layman's approach: the simple point-to-point difference between the index return and the fund return. Tracking error is the standard deviation of the difference between portfolio and benchmark total returns.",
  },
  {
    id: "c16-q24",
    question:
      "According to the workbook, which return measure is the best estimate of a single future year's return based on past returns, and which should be used to compare long-term accumulations?",
    options: [
      "Geometric mean for the future year; arithmetic mean for long-term accumulations",
      "Holding period return for both, since it is the starting point of measurement",
      "Arithmetic mean for the future year; geometric mean for long-term accumulations",
      "Money-weighted return for the future year; Sharpe ratio for long-term accumulation",
    ],
    answer: 2,
    explanation:
      "The arithmetic average is the best statistical estimate of a future year's return based on a random distribution of prior returns. The geometric return is the only way to compare long-term accumulations because it reflects compounding and depends only on the initial and final values.",
  },
  {
    id: "c16-q25",
    question:
      "What do most studies cited in the workbook conclude about market timing versus selectivity as sources of superior fund performance?",
    options: [
      "Market timing is the main driver of superior fund performance",
      "Both abilities consistently add value for nearly all fund managers",
      "Neither ability can be measured, so neither has been studied",
      "Market timing does not drive better performance; selectivity results are mixed",
    ],
    answer: 3,
    explanation:
      "Market timing is the ability to anticipate market developments, and selectivity is the ability to pick securities that generate extra returns. Most studies show market timing is not the factor behind better performance, while results on selectivity are mixed, with some managers showing this ability.",
  },
];
