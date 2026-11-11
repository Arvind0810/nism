import type { Question } from "@/data/types";

export const chapter08Questions: Question[] = [
  {
    id: "c08-q01",
    question: "Which of the following risks in equity investing cannot be diversified away, though it can be hedged?",
    options: ["Company specific risk", "Market risk", "Sector specific risk", "Idiosyncratic risk"],
    answer: 1,
    explanation:
      "Market risk affects all listed assets whatever their sector, so it cannot be diversified away, though it can be hedged. Beta is its proxy measure. Sector and company specific (idiosyncratic) risks can be reduced by diversifying.",
  },
  {
    id: "c08-q02",
    question:
      "For the same order size, Stock A has an impact cost of 0.05% and Stock B has an impact cost of 0.80%. Which conclusion is correct?",
    options: [
      "Stock B is more liquid than Stock A",
      "Stock A carries higher market risk than Stock B",
      "Both stocks are equally liquid because the order size is the same",
      "Stock B is less liquid than Stock A and a large trade will move its price more",
    ],
    answer: 3,
    explanation:
      "Impact cost measures liquidity risk. It is the percentage price movement that an order of a given size causes from the average of the best bid and offer. A higher impact cost means a more thinly traded, less liquid stock.",
  },
  {
    id: "c08-q03",
    question: "Which statement correctly distinguishes buy-side analysts from sell-side analysts?",
    options: [
      "Buy-side analysts advise their own fund managers internally and need to be more accurate",
      "Buy-side analysts publish reports for the clients of broking and investment banking firms",
      "Sell-side analysts work for mutual funds and pension funds",
      "Sell-side analysts are paid mainly for the accuracy of their price predictions",
    ],
    answer: 0,
    explanation:
      "Buy-side analysts work for fund managers, and their recommendations are used inside the organisation, so they must be more accurate. Sell-side analysts work for broking or investment banking firms and give broad guidance rather than precise price predictions.",
  },
  {
    id: "c08-q04",
    question: "An analyst first studies GDP, inflation and interest rates, then picks attractive industries, and finally selects companies within those industries. This is the:",
    options: ["Bottom-up approach", "Technical approach", "Top-down approach", "Relative valuation approach"],
    answer: 2,
    explanation:
      "The top-down approach scans the macroeconomic scenario first, then identifies industries and finally zeroes in on companies (the EIC framework). The bottom-up approach starts with company-specific factors and moves up to macro factors.",
  },
  {
    id: "c08-q05",
    question: "The stock market is considered a leading economic indicator because:",
    options: [
      "Stock prices reflect expectations of future, not past or current, economic activity",
      "Stock prices are set by the government at the start of each financial year",
      "Stock prices always follow GDP data, reacting about one quarter after its release",
      "Stock markets react only to monetary policy announcements, which precede GDP changes",
    ],
    answer: 0,
    explanation:
      "The workbook says the stock market improves before the actual economy does, because prices reflect expectations of future economic activity. That makes it a leading indicator.",
  },
  {
    id: "c08-q06",
    question:
      "Which stage of the industry life cycle is generally the longest, with industry growth roughly matching the economy's growth and competition reducing profit margins to normal levels?",
    options: [
      "Introduction",
      "Maturity",
      "Growth",
      "Deceleration and decline",
    ],
    answer: 1,
    explanation:
      "Maturity is usually the longest phase. Industry growth roughly matches the economy, firms differ by their cost structures, and high competition brings margins down to normal levels.",
  },
  {
    id: "c08-q07",
    question: "Which of the following sectors does the workbook describe as among the most sensitive to interest rate changes?",
    options: [
      "Pharmaceutical manufacturers",
      "Fast-moving consumer goods makers",
      "Information technology services firms",
      "Banks and financial institutions",
    ],
    answer: 3,
    explanation:
      "Interest rate volatility affects industries differently. Bank and financial institution stocks are typically among the most interest-sensitive of all sectors, while sectors such as pharmaceuticals are less affected.",
  },
  {
    id: "c08-q08",
    question: "During a recession, which group of sectors is expected to outperform the others?",
    options: [
      "Consumer durables such as cars and refrigerators",
      "Highly leveraged, high operating-cost cyclical industries",
      "Defensive sectors such as FMCG and pharmaceuticals",
      "Banking and financial services at the start of the downturn",
    ],
    answer: 2,
    explanation:
      "Defensive industries such as FMCG and pharmaceuticals do better in a recession because people keep spending on necessities. Consumer durables and other cyclical sectors are attractive in the early stages of a recovery.",
  },
  {
    id: "c08-q09",
    question:
      "At the peak of the business cycle, inflation rises as demand overtakes supply. Which industries does the workbook say benefit from this situation?",
    options: [
      "Industries that cannot pass on their rising production costs to consumers",
      "Basic materials producers, such as oil and metals, that can raise their prices",
      "Highly leveraged consumer durable makers that depend on cheap credit",
      "Industries still in the introduction stage of their life cycle",
    ],
    answer: 1,
    explanation:
      "Rising inflation does not raise the cost of extracting basic materials such as oil and metals, so these producers can raise prices and earn higher margins. Industries that cannot pass on higher costs see their profitability suffer.",
  },
  {
    id: "c08-q10",
    question:
      "An analyst finds a company with superior management and strong current and expected growth in sales and earnings. Why might its stock still not be a good investment?",
    options: [
      "Because companies with strong growth never pay any dividends",
      "Because technical analysis must confirm every fundamental view",
      "Because its market price may already be well above its intrinsic value",
      "Because company analysis does not look at financial statements",
    ],
    answer: 2,
    explanation:
      "The workbook stresses that stocks of good companies need not be good investments. If a good company's stock trades well above its intrinsic value, it may not be a good buy; the decision rests on comparing intrinsic value with market price.",
  },
  {
    id: "c08-q11",
    question:
      "Asset-based valuation is used for asset-heavy businesses such as financial institutions, real estate firms and gems and jewellery companies. What is its main limitation?",
    options: [
      "It cannot be used for any firm that has borrowed money",
      "It depends entirely on analysts' forecasts of future earnings",
      "It values a firm only by comparing its P/E ratio with that of peers",
      "It ignores the value of future profits, cash flows and innovation",
    ],
    answer: 3,
    explanation:
      "Under asset-based valuation, firm value is the adjusted current market value of its net tangible, intangible, financial and net current assets, and equity value is firm value less outside liabilities. Its weakness is that it does not recognise future profits, cash flows or value creation from research and innovation.",
  },
  {
    id: "c08-q12",
    question:
      "A stock trades at ₹540 with an EPS of ₹27. Its expected earnings growth rate is 25% a year. What is its PEG ratio, and what does the thumb rule suggest?",
    options: [
      "1.25; the stock is overvalued given its growth",
      "20; the stock is overvalued",
      "0.8; the stock is undervalued given its growth",
      "0.8; the stock is overvalued given its growth",
    ],
    answer: 2,
    explanation:
      "P/E = 540 / 27 = 20, and PEG = P/E ÷ growth rate = 20 / 25 = 0.8. By the workbook's thumb rule, a PEG below 1 suggests the stock is undervalued relative to its earnings growth, and a PEG above 1 suggests overvaluation.",
  },
  {
    id: "c08-q13",
    question:
      "A company has a market capitalisation of ₹800 crore, debt with a market value of ₹300 crore, and excess cash and cash equivalents of ₹100 crore. What is its Enterprise Value?",
    options: [
      "₹1,000 crore",
      "₹1,200 crore",
      "₹1,100 crore",
      "₹600 crore",
    ],
    answer: 0,
    explanation:
      "EV = market capitalisation + market value of debt - excess cash = 800 + 300 - 100 = ₹1,000 crore. Excess cash is deducted because an acquirer would not pay cash to acquire cash.",
  },
  {
    id: "c08-q14",
    question:
      "An analyst is valuing a highly capital-intensive company that reports a loss at the PAT level but has positive EBITDA. Which multiple is the most meaningful for this valuation?",
    options: [
      "PEG ratio",
      "P/E ratio",
      "EV/EBITDA",
      "Earnings yield",
    ],
    answer: 2,
    explanation:
      "When EPS is negative, the P/E ratio, and the PEG and earnings yield built on it, are not meaningful. The workbook notes that EV/EBITDA is especially useful for capital-intensive firms that are not yet making book profits but have surplus EBITDA.",
  },
  {
    id: "c08-q15",
    question:
      "In Bollinger Band analysis, a stock whose price moves two standard deviations above its moving average might be regarded as:",
    options: [
      "Oversold",
      "Overbought",
      "Fairly valued on fundamentals",
      "At a support level",
    ],
    answer: 1,
    explanation:
      "Bollinger Bands measure how far the price deviates from its moving average. A price two standard deviations above the average suggests the stock is overbought, and two below suggests it is oversold.",
  },
  {
    id: "c08-q16",
    question:
      "An investor holds shares of companies in many different sectors and in several countries at the same point in time. This is an example of:",
    options: [
      "Cross-sectional diversification",
      "Time diversification",
      "Timing the market",
      "Concentrated sector investing",
    ],
    answer: 0,
    explanation:
      "Cross-sectional diversification reduces risk by holding equities in many kinds of businesses, and across geographies, at a point in time. Time diversification instead needs staying invested over a long period, so that bad times are offset by good times.",
  },
  {
    id: "c08-q17",
    question:
      "An investor worries that the other party to his share purchase may fail to deliver the shares or pay the money. How can this transactional risk be mitigated?",
    options: [
      "By holding shares of many different companies across sectors",
      "By hedging the portfolio with index futures and options",
      "By staying invested over a much longer time horizon",
      "By transacting through a stock exchange with robust risk management",
    ],
    answer: 3,
    explanation:
      "Transactional risk is the risk that the counterparty does not pay or deliver. It can be mitigated by trading through a stock exchange, which has robust risk management procedures for such situations. Diversification and hedging address market and non-market risks instead.",
  },
  {
    id: "c08-q18",
    question:
      "A stock trades at ₹600. Analysts' EPS estimates for the next four quarters are ₹7, ₹8, ₹9 and ₹6. What is the stock's forward P/E ratio?",
    options: ["80 times", "85.7 times", "100 times", "20 times"],
    answer: 3,
    explanation:
      "Forward P/E = current price ÷ sum of the expected EPS for the next four quarters = 600 ÷ (7 + 8 + 9 + 6) = 600 ÷ 30 = 20 times. 85.7 and 100 wrongly use a single quarter's EPS, and 80 uses the average quarterly EPS.",
  },
  {
    id: "c08-q19",
    question:
      "A company reports shareholders' equity of ₹500 crore, which includes miscellaneous assets of ₹20 crore. It has 10 crore shares outstanding and its share price is ₹120. Following the workbook's guidance, what is its price to book value (P/BV) ratio?",
    options: ["2.5 times", "2.4 times", "0.4 times", "48 times"],
    answer: 0,
    explanation:
      "Miscellaneous assets are excluded from shareholders' equity, so book value per share = (500 - 20) ÷ 10 = ₹48 and P/BV = 120 ÷ 48 = 2.5 times. Not excluding them gives a book value of ₹50 and a P/BV of 2.4.",
  },
  {
    id: "c08-q20",
    question:
      "A share trades at ₹160. The company's EPS is ₹12 and it has declared a dividend of ₹4 per share. What are its earnings yield and dividend yield?",
    options: ["13.3% and 2.5%", "7.5% and 2.5%", "7.5% and 33.3%", "2.5% and 7.5%"],
    answer: 1,
    explanation:
      "Earnings yield = EPS ÷ price × 100 = 12 ÷ 160 × 100 = 7.5%, which is the inverse of the P/E of 13.3. Dividend yield = DPS ÷ price × 100 = 4 ÷ 160 × 100 = 2.5%. 33.3% is the dividend payout (4 ÷ 12), not a yield.",
  },
  {
    id: "c08-q21",
    question:
      "A company's net operating profit after tax is ₹150 crore, its invested capital is ₹1,000 crore and its cost of capital is 12%. What is its Economic Value Added (EVA)?",
    options: ["₹138 crore", "₹120 crore", "₹18 crore", "₹30 crore"],
    answer: 3,
    explanation:
      "EVA = net operating profit after tax - (invested capital × cost of capital) = 150 - (1,000 × 12%) = 150 - 120 = ₹30 crore. ₹120 crore is only the capital charge, and ₹18 crore wrongly applies 12% to the profit.",
  },
  {
    id: "c08-q22",
    question:
      "A firm's current market value is lower than the original capital contributed by its investors. Under the Market Value Added (MVA) concept, this indicates that the firm has:",
    options: [
      "Added value for its investors",
      "Earned exactly its cost of capital",
      "Destroyed value for its investors",
      "A P/E ratio of less than one",
    ],
    answer: 2,
    explanation:
      "MVA is the current market value of the firm minus the capital contributed by investors. A positive MVA means the firm has added value, and a negative MVA means it has destroyed value.",
  },
  {
    id: "c08-q23",
    question: "Which pairing of sector and valuation approach matches the workbook's guidance on sector-specific metrics?",
    options: [
      "Cement and steel: replacement cost method",
      "Banks: EV/EBITDA as the main metric",
      "FMCG: replacement cost, as cash flows are erratic",
      "Pharma: asset-based value at historical cost",
    ],
    answer: 0,
    explanation:
      "Replacement cost is applied to capital-intensive businesses such as cement and steel. Non-cyclical sectors such as FMCG and pharma, with predictable cash flows, suit discounted cash flow valuation, and P/B is popular for banks and financial services.",
  },
  {
    id: "c08-q24",
    question: "Which of the following is one of the assumptions of technical analysis?",
    options: [
      "Market prices adjust to new information instantly",
      "Intrinsic value can be derived from financial statements",
      "Prices move randomly, so past patterns carry no information",
      "Prices move in trends that persist for appreciable periods",
    ],
    answer: 3,
    explanation:
      "Technical analysis assumes that prices are set by supply and demand, that price adjustments are not instantaneous, and that prices move in trends which persist for appreciable lengths of time. Deriving intrinsic value from financial statements is fundamental analysis.",
  },
  {
    id: "c08-q25",
    question: "Under the simple moving-average strategy described in the workbook, a trader would:",
    options: [
      "Buy when the price is well above the moving average and sell when it is well below",
      "Buy when the price is well below the moving average and sell when it is well above",
      "Ignore the moving average whenever trading volume rises above its usual level",
      "Buy only on the day the 5-day average equals the 200-day moving average",
    ],
    answer: 1,
    explanation:
      "One simple moving-average strategy is to buy when the price is sufficiently below the moving average and sell when it is sufficiently above it. Moving-average analysis is the most popular technical indicator, with 5 to 200-day averages commonly used.",
  },
];
