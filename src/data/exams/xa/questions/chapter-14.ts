import type { Question } from "@/data/types";

export const chapter14Questions: Question[] = [
  {
    id: "c14-q01",
    question:
      "Modern Portfolio Theory traces its origin to:",
    options: [
      "William Sharpe's 1964 paper on capital asset prices",
      "Franco Modigliani's 1997 risk-adjusted performance measure",
      "Brinson, Hood and Beebower's 1986 study on asset allocation",
      "Harry Markowitz's 1952 article 'Portfolio Selection' in The Journal of Finance",
    ],
    answer: 3,
    explanation:
      "MPT is founded on Harry Markowitz's 1952 article 'Portfolio Selection' in The Journal of Finance, for which he received the Nobel Prize in Economics in 1990.",
  },
  {
    id: "c14-q02",
    question:
      "How did Modern Portfolio Theory quantify the benefits of diversification?",
    options: [
      "By ranking assets on historical average returns and holding those with the highest returns",
      "By using covariance (correlation) between assets and treating the variance of returns as the measure of risk",
      "By allocating equal weights across all asset classes so that no single asset dominates the portfolio",
      "By measuring each asset's beta against the market index and summing the weighted betas to get portfolio risk",
    ],
    answer: 1,
    explanation:
      "Investors knew diversification helped before 1950 but could not quantify it. Markowitz used covariance (correlation) between assets and showed that the variance of returns is a meaningful measure of portfolio risk.",
  },
  {
    id: "c14-q03",
    question:
      "Which of the following is NOT one of the assumptions of Modern Portfolio Theory?",
    options: [
      "Utility curves demonstrate increasing marginal utility of wealth",
      "Investors maximise one-period expected utility",
      "Investors base decisions solely on expected return and risk",
      "Given two assets with equal expected return, investors prefer the one with lower risk",
    ],
    answer: 0,
    explanation:
      "MPT assumes that utility curves show diminishing marginal utility of wealth: each additional rupee adds less utility as wealth grows. The other statements are assumptions of the theory.",
  },
  {
    id: "c14-q04",
    question:
      "A prospect with zero risk premium is called a fair game. How does a risk-averse investor treat a fair game?",
    options: [
      "Accepts it, since only the expected return matters and risk carries no penalty",
      "Accepts it only if the investment horizon is long enough to average out losses",
      "Rejects it, preferring risk-free assets or those with a positive risk premium",
      "Makes an upward adjustment to its utility and seeks it out",
    ],
    answer: 2,
    explanation:
      "Risk-averse investors reject fair games. They invest in risk-free opportunities or in those with a positive expected risk premium. A risk seeker makes an upward utility adjustment and will engage in a fair game.",
  },
  {
    id: "c14-q05",
    question:
      "For a risk-neutral investor, the Certainty Equivalent Rate (CER) of a risky portfolio is:",
    options: [
      "Always below the risk-free rate",
      "Equal to the expected rate of return on the risky portfolio",
      "Equal to the risk-free rate",
      "The expected return minus a penalty for the portfolio's variance",
    ],
    answer: 1,
    explanation:
      "A risk-neutral investor judges investments only by expected return and applies no penalty for risk, so the CER of a risky portfolio equals its expected return. Subtracting a penalty for variance is how a risk-averse investor behaves.",
  },
  {
    id: "c14-q06",
    question:
      "A highly risk-averse investor evaluates a risky portfolio and assigns it a Certainty Equivalent Rate that is below the risk-free rate. What is the investor most likely to do?",
    options: [
      "Invest in the risky portfolio because its expected return is higher",
      "Borrow to invest more in the risky portfolio",
      "Treat the risky portfolio as equivalent to a risk-free investment",
      "Reject the risky portfolio in favour of the risk-free investment",
    ],
    answer: 3,
    explanation:
      "The CER is the risk-free rate that would be equally attractive as the risky investment. If the CER is below the actual risk-free rate, the risk-free asset is more attractive, so the highly risk-averse investor rejects the risky portfolio. A less risk-averse investor may assign a higher CER and accept it.",
  },
  {
    id: "c14-q07",
    question:
      "A stock is expected to return 20% in a boom (probability 0.25), 12% in a normal economy (probability 0.50) and −4% in a recession (probability 0.25). What is its expected rate of return?",
    options: [
      "9.33%",
      "12.00%",
      "10.00%",
      "8.00%",
    ],
    answer: 2,
    explanation:
      "Expected return is the probability-weighted sum of outcomes: 0.25(20%) + 0.50(12%) + 0.25(−4%) = 5% + 6% − 1% = 10%. Taking a simple average of the three outcomes (9.33%) ignores the probabilities.",
  },
  {
    id: "c14-q08",
    question:
      "A portfolio holds 60% in Stock A (standard deviation 20%) and 40% in Stock B (standard deviation 10%). The correlation between their returns is 0.2. What is the portfolio's standard deviation (approximately)?",
    options: [
      "13.39%",
      "16.00%",
      "12.65%",
      "1.79%",
    ],
    answer: 0,
    explanation:
      "Variance = (0.6² × 0.20²) + (0.4² × 0.10²) + (2 × 0.6 × 0.4 × 0.2 × 0.20 × 0.10) = 0.0144 + 0.0016 + 0.00192 = 0.01792, so SD = √0.01792 ≈ 13.39%. 16% is the weighted average SD, which applies only when correlation is +1, and 1.79% is the variance, not the SD.",
  },
  {
    id: "c14-q09",
    question:
      "How many distinct covariance terms must be estimated for a portfolio of 20 securities?",
    options: [
      "20",
      "380",
      "400",
      "190",
    ],
    answer: 3,
    explanation:
      "The number of covariance terms is (n² − n)/2 = (400 − 20)/2 = 190. 380 double-counts each pair, and 400 also includes the 20 individual variance terms.",
  },
  {
    id: "c14-q10",
    question:
      "If two securities have a perfect positive correlation (+1), which of the following is true for portfolios formed from them?",
    options: [
      "A particular combination of the two securities can produce a portfolio with zero risk",
      "Portfolio SD equals the weighted average of the two SDs, so diversification gives no benefit",
      "Portfolio risk is always lower than the risk of the less risky security",
      "The risk-return plot bulges to the left of the straight line joining the two securities' risk-return points",
    ],
    answer: 1,
    explanation:
      "With correlation of +1, both the portfolio return and the portfolio standard deviation are weighted averages of the two securities, so the risk-return opportunity set is a straight line joining them. The workbook states that there is no benefit of diversification when two assets have perfect positive correlation.",
  },
  {
    id: "c14-q11",
    question:
      "Two securities have standard deviations of 10% and 20%, and their returns are perfectly positively correlated (+1). What is the standard deviation of a portfolio holding 50% in each?",
    options: [
      "11.18%",
      "5.00%",
      "13.23%",
      "15.00%",
    ],
    answer: 3,
    explanation:
      "With correlation of +1, portfolio SD is the weighted average of the individual SDs: 0.5 × 10% + 0.5 × 20% = 15%. 11.18% assumes zero correlation, 13.23% assumes correlation of 0.5, and 5% assumes correlation of −1.",
  },
  {
    id: "c14-q12",
    question:
      "Portfolio A lies on the efficient frontier. Portfolio C has the same expected return as A but much higher risk. Which conclusion is correct?",
    options: [
      "C is also efficient because it offers the same return",
      "C is preferable for risk-averse investors because of its higher risk premium",
      "C is not efficient, because A offers the same return with lower risk",
      "Both portfolios are inefficient because they have the same return",
    ],
    answer: 2,
    explanation:
      "The efficient frontier is the umbrella-shaped set of portfolios that offer the highest expected return for a given risk, or the lowest risk for a given return. Portfolios to the right of the frontier are sub-optimal because they carry higher risk for the same return, so C is dominated by A.",
  },
  {
    id: "c14-q13",
    question:
      "To construct and select a portfolio using the MPT framework, which inputs must the portfolio manager estimate for the investment universe?",
    options: [
      "Expected return and standard deviation of each asset, plus correlation coefficients among all the assets",
      "Beta of each asset against the market index, each company's dividend yield, and the market risk premium",
      "Historical prices of each security, price-to-earnings ratios of each company, and credit ratings of issuers",
      "Expected return of each asset and the risk-free rate only, since correlations are assumed to be stable",
    ],
    answer: 0,
    explanation:
      "MPT optimisation requires the expected return of every asset, the standard deviation of each asset's expected returns, and the correlation coefficients among all assets, plus any investor constraints.",
  },
  {
    id: "c14-q14",
    question:
      "In portfolio optimisation, what does the term 'estimation risk' refer to?",
    options: [
      "The risk that market prices fall sharply after the portfolio has been constructed and funded",
      "The potential error from estimating the returns, risks and correlations used as inputs",
      "The risk that the investor's own estimate of his risk tolerance changes over the holding period",
      "The risk of default by issuers of securities in the portfolio",
    ],
    answer: 1,
    explanation:
      "The output of portfolio allocation depends on the accuracy of its statistical inputs, and the number of correlation estimates can be very large. The potential error from these estimates is called estimation risk.",
  },
  {
    id: "c14-q15",
    question:
      "An adviser replaces one stock in a client's two-stock portfolio with another stock of identical expected return and standard deviation. The new stock's correlation with the remaining stock is 0.1, against 0.7 for the old one. Weights are unchanged. What happens to the portfolio?",
    options: [
      "Both expected return and risk rise",
      "Expected return rises while risk stays the same",
      "Expected return stays the same while portfolio risk falls",
      "Expected return and risk both stay the same, since individual risks are unchanged",
    ],
    answer: 2,
    explanation:
      "Portfolio return is a weighted average of the asset returns, so it is unchanged. Portfolio variance includes the weighted covariance term, which depends on the correlation between the assets; lower correlation shrinks that term, so portfolio risk falls.",
  },
  {
    id: "c14-q16",
    question:
      "A portfolio holds 25% in Asset X (expected return 8%), 35% in Asset Y (expected return 12%) and 40% in Asset Z (expected return 16%). What is the portfolio's expected return?",
    options: [
      "12.60%",
      "12.00%",
      "11.40%",
      "6.40%",
    ],
    answer: 0,
    explanation:
      "Portfolio expected return is the weighted average of the asset returns: 0.25(8%) + 0.35(12%) + 0.40(16%) = 2% + 4.2% + 6.4% = 12.6%. 12% is the simple average, 11.4% swaps the weights of X and Z, and 6.4% is only Z's contribution.",
  },
  {
    id: "c14-q17",
    question:
      "A portfolio holds 70% in Fund P (standard deviation 25%) and 30% in Fund Q (standard deviation 15%). The correlation between them is 0.3. What is the portfolio's standard deviation (approximately)?",
    options: [
      "22.00%",
      "19.33%",
      "18.07%",
      "3.74%",
    ],
    answer: 1,
    explanation:
      "Variance = (0.7² × 0.25²) + (0.3² × 0.15²) + (2 × 0.7 × 0.3 × 0.3 × 0.25 × 0.15) = 0.030625 + 0.002025 + 0.004725 = 0.037375, so SD = √0.037375 ≈ 19.33%. 22% is the weighted average SD (correct only at +1 correlation), 18.07% drops the covariance term, and 3.74% is the variance.",
  },
  {
    id: "c14-q18",
    question:
      "A stock returned 12%, 8%, −4% and 16% over four years. Using the workbook's method of dividing the sum of squared deviations by (n − 1), what is its standard deviation (approximately)?",
    options: [
      "7.48%",
      "10.00%",
      "74.67%",
      "8.64%",
    ],
    answer: 3,
    explanation:
      "Mean = 8%. Squared deviations are 16, 0, 144 and 64, totalling 224; dividing by (4 − 1) gives a variance of 74.67, and its square root is about 8.64%. Dividing by n instead gives 7.48%, and 74.67 is the variance, not the standard deviation.",
  },
  {
    id: "c14-q19",
    question:
      "How many terms appear in the variance formula for a portfolio of three securities?",
    options: [
      "Three: one weighted variance for each security",
      "Nine: three weighted variances and six covariances",
      "Six: three weighted variances and three weighted covariances",
      "Four: three weighted variances and one combined covariance",
    ],
    answer: 2,
    explanation:
      "A three-security portfolio has six terms: the weighted variances of securities I, II and III, plus the weighted covariances between I and II, II and III, and I and III. The number of covariance terms is (n² − n)/2 = 3.",
  },
  {
    id: "c14-q20",
    question:
      "An investor willingly engages in a fair game and makes an upward adjustment to utility for risk. Such an investor is described as:",
    options: [
      "Risk seeking",
      "Risk averse",
      "Risk neutral",
      "Highly risk averse",
    ],
    answer: 0,
    explanation:
      "A risk-seeking investor will engage in a fair game and makes an upward utility adjustment for risk. A risk-averse investor makes a downward adjustment and rejects fair games, while a risk-neutral investor ignores risk altogether.",
  },
  {
    id: "c14-q21",
    question:
      "How do investors assign utility scores to competing portfolios, according to the workbook?",
    options: [
      "Higher scores to riskier portfolios, since risk earns a higher premium",
      "Higher scores for higher expected return and lower scores for higher risk",
      "Equal scores to all portfolios with the same SD, whatever their return",
      "Scores based only on past returns, ignoring the expected variance",
    ],
    answer: 1,
    explanation:
      "Investors assign higher utility scores to portfolios with a better risk-return profile: higher scores for higher expected return and lower scores for higher risk. This follows from the assumption that decisions rest solely on expected return and risk.",
  },
  {
    id: "c14-q22",
    question:
      "In the variance formula for a two-security portfolio, the variance of each security is multiplied by:",
    options: [
      "Its weight in the portfolio",
      "The correlation coefficient between the two",
      "Twice the product of the two weights",
      "The square of its weight in the portfolio",
    ],
    answer: 3,
    explanation:
      "Portfolio variance is the sum of the individual variances multiplied by their squared weights, plus the weighted covariance term (2 × w1 × w2 × r12 × σ1 × σ2). Twice the product of the weights and the correlation belong to the covariance term.",
  },
  {
    id: "c14-q23",
    question:
      "A risk-neutral investor must choose between Portfolio A (expected return 14%, standard deviation 30%) and Portfolio B (expected return 12%, standard deviation 10%). Which will the investor choose?",
    options: [
      "B, because it offers far more return for each unit of risk taken",
      "B, because the investor penalises the variance of portfolio returns",
      "A, because only expected return matters and risk carries no penalty",
      "Neither, because such an investor holds only risk-free assets",
    ],
    answer: 2,
    explanation:
      "A risk-neutral investor evaluates opportunities solely on expected return, with no regard to risk, so the higher-return Portfolio A is chosen. Penalising variance is how a risk-averse investor behaves.",
  },
  {
    id: "c14-q24",
    question:
      "After estimating the inputs and identifying the feasible portfolios, how does a portfolio manager select the final portfolio under the MPT framework?",
    options: [
      "By choosing the portfolio with the highest expected return, whatever its risk",
      "By choosing the minimum-variance portfolio for every client, whatever their goals",
      "By choosing equal weights in every asset class so no single asset dominates",
      "By choosing the feasible portfolio that meets the investor's objectives",
    ],
    answer: 3,
    explanation:
      "MPT provides a framework for selecting portfolios based on expected performance and the investor's risk appetite. From the feasible combinations, the portfolio that meets the investor's investment objectives (and any stated constraints) is selected.",
  },
  {
    id: "c14-q25",
    question:
      "Which statement about standard deviation as a measure of risk is correct?",
    options: [
      "A larger SD means wider dispersion around the expected value, so greater risk",
      "Standard deviation measures only losses below zero, and ignores the gains",
      "Standard deviation is the square of the variance of the asset's returns",
      "A smaller standard deviation means the asset will earn a higher return",
    ],
    answer: 0,
    explanation:
      "Standard deviation is the square root of variance and measures the dispersion of returns around the expected value. A larger standard deviation indicates greater dispersion and hence larger risk.",
  },
];
