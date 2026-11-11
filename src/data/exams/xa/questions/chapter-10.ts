import type { Question } from "@/data/types";

export const chapter10Questions: Question[] = [
  {
    id: "c10-q01",
    question: "In India, derivatives are treated as 'securities', and their trading is therefore governed by the regulatory framework under the:",
    options: [
      "Foreign Exchange Management Act, 1999",
      "Securities Contracts (Regulation) Act, 1956",
      "Companies Act, 2013",
      "Indian Contract Act, 1872 only",
    ],
    answer: 1,
    explanation:
      "The SC(R)A, 1956 defines 'derivative' to include a security derived from a debt instrument, share or loan, and a contract that derives its value from the prices or index of prices of underlying securities. Since derivatives are securities under the SC(R)A, their trading is governed by its framework.",
  },
  {
    id: "c10-q02",
    question: "Derivative contracts are described as a 'zero sum game'. This conclusion rests on the assumption that:",
    options: [
      "Both parties always make a profit on expiry",
      "The underlying price does not change during the life of the contract",
      "Only hedgers participate in the market",
      "There are no taxes and no transaction costs",
    ],
    answer: 3,
    explanation:
      "One party's gain equals the other party's loss, so the net position of buyer and seller always adds up to zero. The workbook notes that this holds under the usual assumptions of no taxes and no transaction costs.",
  },
  {
    id: "c10-q03",
    question: "How are stock derivatives (futures and options on individual stocks) settled in India now?",
    options: [
      "Always in cash, by exchanging the price difference between the two counterparties",
      "In cash for futures, but by physical delivery for options that are in the money at expiry",
      "By physical delivery of the underlying shares, as SEBI has mandated for stock derivatives",
      "By physical delivery, but only if both counterparties opt for it when they trade",
    ],
    answer: 2,
    explanation:
      "Most derivatives were earlier cash settled, but SEBI has mandated physical settlement (delivery of the underlying stock) for all stock derivatives, and the exchanges moved them to physical settlement in a phased manner.",
  },
  {
    id: "c10-q04",
    question: "The initial margin charged on a derivatives position consists of which components, as described in the workbook?",
    options: [
      "Premium margin and mark-to-market margin, both collected only at expiry",
      "Delivery margin and exposure margin, collected after the trade is executed",
      "Mark-to-market margin and SEBI turnover fees, collected at the end of the day",
      "SPAN margin and extreme loss margin (ELM), both deposited before the trade",
    ],
    answer: 3,
    explanation:
      "The initial margin has two components, SPAN margin and extreme loss margin, and both must be deposited before taking the trade. It should be large enough to cover the loss in 99% of cases, so a more volatile underlying attracts a higher initial margin.",
  },
  {
    id: "c10-q05",
    question:
      "A client buys 2 lots of index call options, with a lot size of 75 units, at a premium of ₹120 per unit. What premium margin is payable?",
    options: ["₹9,000", "₹18,000", "₹240", "₹36,000"],
    answer: 1,
    explanation:
      "The premium margin is paid by the option buyer and equals the premium multiplied by the quantity purchased: 120 × (2 × 75) = ₹18,000. ₹9,000 counts only one lot.",
  },
  {
    id: "c10-q06",
    question: "Open interest in a futures or options market refers to:",
    options: [
      "The total number of outstanding contracts that have not been settled",
      "The number of contracts bought and sold in the market during a trading day",
      "The total margin deposited by clearing members",
      "The interest rate implied in the futures price",
    ],
    answer: 0,
    explanation:
      "Open interest is the total number of outstanding derivative contracts that have not been settled. It is not trading volume. Rising open interest indicates new money flowing into the market, and falling open interest indicates money flowing out.",
  },
  {
    id: "c10-q07",
    question:
      "A agrees to buy 100 kg of rice from B at ₹20 per kg after six months through a bilateral agreement. At maturity the market price is ₹30 per kg, and B refuses to deliver. The risk A has suffered is:",
    options: ["Basis risk", "Liquidity risk", "Counterparty (default) risk", "Settlement price risk on an exchange"],
    answer: 2,
    explanation:
      "This is the workbook's example of counterparty risk in forwards: a party may default when it has an incentive to do so. Futures address this because the exchange's clearing house becomes the counterparty and guarantees settlement.",
  },
  {
    id: "c10-q08",
    question: "Which feature distinguishes a futures contract from a forward contract?",
    options: [
      "Futures are customised bilateral contracts negotiated directly between the two parties",
      "Futures create an obligation only for the buyer, while the seller holds a right",
      "Futures are standardised, exchange-traded contracts with clearing corporation guarantee",
      "Futures do not require margins from either party",
    ],
    answer: 2,
    explanation:
      "Futures are standardised forwards traded on an exchange. The exchange sets every term except price, both parties pay margins, and the clearing corporation guarantees settlement. Forwards are customised OTC contracts.",
  },
  {
    id: "c10-q09",
    question: "For the writer (seller) of an equity option, which statement is correct?",
    options: [
      "Maximum loss is limited to the premium received, while profit is unlimited",
      "The writer has the right but not the obligation to buy or sell the underlying asset",
      "The writer pays the premium margin on the option",
      "Maximum profit is the premium received; potential loss is theoretically unlimited",
    ],
    answer: 3,
    explanation:
      "An option writer has an obligation but no right. The best outcome is keeping the premium, while losses can be theoretically unlimited. It is the option buyer whose loss is limited to the premium paid and who pays the premium margin.",
  },
  {
    id: "c10-q10",
    question:
      "An investor buys a Nifty call option with a strike price of 18,000 for a premium of ₹150. On expiry the Nifty closes at 18,420. What is the investor's net profit per unit of Nifty?",
    options: ["₹270", "Loss of ₹150", "₹420", "₹570"],
    answer: 0,
    explanation:
      "The call is in the money. Payoff on exercise = 18,420 - 18,000 = ₹420. Net profit = 420 - 150 premium = ₹270. ₹420 ignores the premium paid, and a loss of ₹150 would apply only if the option expired out of the money.",
  },
  {
    id: "c10-q11",
    question:
      "A stock trades at ₹1,060. A call option on it with a strike price of ₹1,000 is quoted at a premium of ₹85. What is the time value of this option?",
    options: ["₹60", "₹25", "₹85", "₹145"],
    answer: 1,
    explanation:
      "Intrinsic value of the call = 1,060 - 1,000 = ₹60. Time value = Option premium - Intrinsic value = 85 - 60 = ₹25. ₹60 is the intrinsic value, not the time value.",
  },
  {
    id: "c10-q12",
    question:
      "An investor buys a put option on a stock with a strike price of ₹500 for a premium of ₹18. On expiry the stock closes at ₹455. What is the investor's net profit per share?",
    options: ["₹27", "₹45", "Loss of ₹18", "₹63"],
    answer: 0,
    explanation:
      "The put is in the money. Payoff = 500 - 455 = ₹45, and net profit = 45 - 18 premium = ₹27. ₹45 ignores the premium paid, ₹63 adds the premium instead of deducting it, and a loss of ₹18 would apply only if the stock closed at or above ₹500.",
  },
  {
    id: "c10-q13",
    question:
      "A trader buys one lot of stock futures (lot size 500 shares) at ₹1,240 and later squares off the position at ₹1,198. Ignoring costs, what is the trader's result?",
    options: ["Profit of ₹21,000", "Loss of ₹42", "Loss of ₹2,100", "Loss of ₹21,000"],
    answer: 3,
    explanation:
      "A long futures position loses when the price falls: (1,198 - 1,240) × 500 = -₹21,000. ₹42 is the loss per share only. It has to be multiplied by the lot size of 500.",
  },
  {
    id: "c10-q14",
    question:
      "A borrower pays floating-rate interest (T-bill rate plus a spread) on her loan but prefers a fixed obligation. Through an interest rate swap she should:",
    options: [
      "Pay floating and receive fixed from the swap dealer",
      "Pay fixed to the swap dealer and receive T-bill plus spread",
      "Exchange the notional principal with the swap dealer every quarter",
      "Buy a call option on Treasury bills",
    ],
    answer: 1,
    explanation:
      "By paying fixed and receiving the floating rate (T-bill plus spread), the floating leg she receives offsets the floating interest on her loan. Her net obligation becomes a fixed rate. The notional principal is never exchanged in an interest rate swap.",
  },
  {
    id: "c10-q15",
    question: "The Fixed Income Money Market and Derivatives Association of India (FIMMDA) is best described as:",
    options: [
      "A voluntary body of banks, FIs and primary dealers for bond, money and derivatives markets",
      "The statutory regulator of OTC interest rate and currency derivatives under the RBI Act, 1934",
      "The clearing corporation that guarantees settlement of exchange-traded derivatives",
      "The industry association of asset management companies",
    ],
    answer: 0,
    explanation:
      "FIMMDA is a voluntary association of commercial banks, FIs and primary dealers. Its roles include acting as the main interface with regulators, developing benchmark rates and standard documentation, and arbitrating disputes between members. It is not a regulator or a clearing house.",
  },
  {
    id: "c10-q16",
    question: "Which statement about commodity derivatives trading in India is correct as per the workbook?",
    options: [
      "They trade only on MCX, which is registered with and regulated by the RBI",
      "They are customised OTC contracts negotiated directly between farmers and traders",
      "Only farm commodities trade on exchanges; bullion and energy contracts are OTC only",
      "They trade on SEBI-registered exchanges, including MCX, NCDEX, ICEX, NSE and BSE",
    ],
    answer: 3,
    explanation:
      "Commodity futures trading is organised by exchanges that hold a certificate of registration from SEBI, and the national exchanges are MCX, NCDEX, ICEX, NSE and BSE. Traded commodities fall into four groups: bullion, metals, energy and agriculture.",
  },
  {
    id: "c10-q17",
    question: "On which currency pairs are currency derivatives available in India, as listed in the workbook?",
    options: [
      "USD, EUR, GBP and CHF, plus EUR-GBP and USD-CHF cross-currency pairs",
      "USD, EUR and CNY only, plus EUR-USD, GBP-USD and USD-JPY cross-currency pairs",
      "USD, EUR, GBP and JPY, plus EUR-USD, GBP-USD and USD-JPY cross-currency pairs",
      "USD, EUR, GBP, JPY, CNY and SGD, with no cross-currency pairs at all",
    ],
    answer: 2,
    explanation:
      "Currency derivatives are available on four currency pairs, involving the US dollar, euro, pound sterling and Japanese yen. Cross-currency futures and options on EUR-USD, GBP-USD and USD-JPY are also traded in the currency derivatives segment.",
  },
  {
    id: "c10-q18",
    question:
      "Ravi holds no shares of a company but buys its futures because he expects the share price to rise. In the workbook's classification, this trade is:",
    options: ["Hedging", "Speculation", "Arbitrage", "Market making"],
    answer: 1,
    explanation:
      "A speculative trade is not supported by an existing investment in the underlying asset; it simply reflects a view on future prices. Hedging protects an existing position, and arbitrage exploits a price difference for the same asset in two markets.",
  },
  {
    id: "c10-q19",
    question:
      "Spot Nifty is 8,900 and the near-month future expiring in 20 days is 9,000, an implied carry cost of about 20.5% a year. A trader who can borrow at 12% a year can earn an arbitrage profit by:",
    options: [
      "Buying Nifty spot (its constituents) and selling Nifty futures",
      "Selling Nifty spot and buying Nifty futures",
      "Buying both Nifty spot and Nifty futures",
      "Selling Nifty futures without any position in the spot market",
    ],
    answer: 0,
    explanation:
      "The basis implies a carry cost higher than the trader's cost of funds. So the trader buys spot, sells futures and locks in the difference, which is realised at expiry through spot-futures convergence. Selling futures alone is speculation, not arbitrage.",
  },
  {
    id: "c10-q20",
    question: "On the expiry or settlement date of a futures contract, the spot price and the futures price of the same underlying:",
    options: [
      "Differ by the full cost of carry for the contract period",
      "Move in opposite directions",
      "Are identical, because the remaining carry cost is zero",
      "Differ by the initial margin amount",
    ],
    answer: 2,
    explanation:
      "This is spot-futures convergence. On the settlement date no carry period is left, so the carry cost is zero and the spot and futures prices are the same. Arbitrage positions lock in their profit because of this.",
  },
  {
    id: "c10-q21",
    question:
      "A stock trades at ₹2,500 in the cash market, and its futures contract expiring in 30 days trades at ₹2,530. Ignoring costs, what annualised return does a cash-futures arbitrage (buy cash, sell futures) earn?",
    options: ["1.20%", "14.60%", "14.43%", "14.40%"],
    answer: 1,
    explanation:
      "Following the workbook's method, return = (30 / 2,500) × 365/30 = 14.60% a year. 1.20% is the unannualised return, 14.43% wrongly divides by the futures price, and 14.40% simply multiplies the monthly return by 12.",
  },
  {
    id: "c10-q22",
    question:
      "An investor holds an index portfolio worth ₹10 lakh. He wants protection if the market falls but still wants to benefit if the market rises. Which hedge meets his objective?",
    options: [
      "Selling index futures",
      "Writing index call options",
      "Buying index futures",
      "Buying an index put option",
    ],
    answer: 3,
    explanation:
      "A long put gives an asymmetric payoff. It sets a floor on the portfolio's value while keeping the upside, at the cost of the premium. Selling futures locks in a fixed value and gives up the upside, because futures payoffs are symmetric.",
  },
  {
    id: "c10-q23",
    question:
      "Under SEBI's October 2024 measures for equity index derivatives, what is the minimum value of an index derivative contract at the time of its introduction?",
    options: ["₹5 lakh", "₹10 lakh", "₹15 lakh", "₹25 lakh"],
    answer: 2,
    explanation:
      "SEBI's circular of 1 October 2024 set the minimum contract value of index derivatives at ₹15 lakh when contracts are introduced, to reflect their leverage and risk. Note: this measure came after the Feb 2025 workbook's text, which does not cover it.",
  },
  {
    id: "c10-q24",
    question: "Following SEBI's October 2024 circular on index derivatives, how are weekly expiry contracts permitted on Indian stock exchanges?",
    options: [
      "Each exchange may offer weekly expiry contracts on only one of its benchmark indices",
      "Each exchange may offer weekly expiries on all its indices, but only on Thursdays",
      "Weekly expiries are banned, and only monthly index derivative contracts are allowed",
      "Each exchange may offer weekly expiries on up to three indices of its own choice",
    ],
    answer: 0,
    explanation:
      "SEBI's circular of 1 October 2024 allows each exchange to offer weekly expiry contracts on only one benchmark index. Monthly contracts on other indices continue. Note: the Feb 2025 workbook does not cover this measure.",
  },
  {
    id: "c10-q25",
    question: "Under SEBI's index derivatives measures effective 1 February 2025, what must a broker do when a client buys options?",
    options: [
      "Collect only the SPAN margin from the buyer, with the premium settled on T+1",
      "Allow the buyer to pay the premium at expiry, out of any profit on the position",
      "Collect an additional 2% extreme loss margin from the option buyer on expiry day",
      "Collect the option premium from the buyer upfront, with no intraday leverage given",
    ],
    answer: 3,
    explanation:
      "SEBI requires the option premium to be collected upfront from buyers, which matches the workbook's point that the premium margin is paid by option buyers. The additional 2% extreme loss margin on expiry day applies to short (sold) options, not to buyers. Note: the Feb 2025 workbook does not describe this measure.",
  },
];
