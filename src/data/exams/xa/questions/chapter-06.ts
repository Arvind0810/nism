import type { Question } from "@/data/types";

export const chapter06Questions: Question[] = [
  {
    id: "c06-q01",
    question:
      "A company has 20 lakh shares in issue, of which the promoter holds 12 lakh (60%). In its IPO, the company makes a fresh issue of 10 lakh shares, and the promoter subscribes to none of them. What is the promoter's holding after the issue?",
    options: ["60%", "40%", "50%", "30%"],
    answer: 1,
    explanation:
      "A fresh issue increases share capital to 30 lakh shares. The promoter still holds 12 lakh shares, so the holding falls to 12 / 30 = 40%. It would stay at 60% only if no new shares were issued.",
  },
  {
    id: "c06-q02",
    question: "In an IPO made through an offer for sale (OFS), which of the following is true?",
    options: [
      "The proceeds go to the selling shareholders, and the company's share capital does not change",
      "The proceeds go to the company, and its share capital increases",
      "The proceeds are shared between the company and the selling shareholders in proportion to holdings",
      "New shares are created and allotted to the public at face value",
    ],
    answer: 0,
    explanation:
      "In an offer for sale, existing shareholders sell part of their holding to the public. No new shares are issued, so share capital is unchanged, and the money goes to the sellers, not the company. Government disinvestment in PSUs is an example.",
  },
  {
    id: "c06-q03",
    question:
      "A company offers 10,000 shares through a book built issue. Bids received: 2,000 shares at ₹250, 3,000 at ₹245, 4,000 at ₹240, 3,000 at ₹235 and 2,000 at ₹230. What will be the cut-off price?",
    options: ["₹250", "₹240", "₹235", "₹230"],
    answer: 2,
    explanation:
      "Cumulative demand from the highest price is 2,000 (₹250), 5,000 (₹245), 9,000 (₹240) and 12,000 (₹235). The 10,000 shares are first fully subscribed at ₹235, so that is the cut-off price. All bids at ₹235 or above are eligible for allotment.",
  },
  {
    id: "c06-q04",
    question: "What is the effect of a retail investor choosing to bid 'at cut-off' in a book built issue?",
    options: [
      "The investor is always allotted shares at the floor price",
      "The bid is automatically rejected if the price discovered through bidding is at the top end of the band",
      "The investor automatically gets a 10% discount to the issue price",
      "The investor accepts the price discovered through bidding, so the application is always accepted",
    ],
    answer: 3,
    explanation:
      "Bidding at cut-off means the investor will accept whatever price the bidding process discovers. The workbook notes this ensures the application is always accepted. Allotment may still be proportionate if the issue is over-subscribed.",
  },
  {
    id: "c06-q05",
    question:
      "In a book built issue, the price band starts at the floor price and can extend up to:",
    options: [
      "20% above the floor price",
      "10% above the floor price",
      "50% above the floor price",
      "5% above the floor price",
    ],
    answer: 0,
    explanation:
      "The issuer may specify a floor price or a price band ranging from the floor price to 20% above it. Investors bid within this band.",
  },
  {
    id: "c06-q06",
    question: "A Qualified Institutions Placement (QIP) is best described as:",
    options: [
      "An offer of specified securities by an unlisted issuer to the public for subscription, including any offer for sale",
      "An issue of eligible securities by a listed issuer to qualified institutional buyers on private placement basis",
      "An offer of shares to existing shareholders in a fixed ratio as on a record date",
      "An allotment of free shares to existing shareholders out of free reserves",
    ],
    answer: 1,
    explanation:
      "A QIP is an issue of eligible securities by a listed issuer to qualified institutional buyers, such as mutual funds, FPIs and insurance companies, on a private placement basis. The other options describe an IPO, a rights issue and a bonus issue.",
  },
  {
    id: "c06-q07",
    question: "Which of the following do State Governments in India issue?",
    options: [
      "Treasury bills of 91-day maturity only",
      "Both treasury bills and dated securities, like the Central Government",
      "Commercial paper and certificates of deposit",
      "Only bonds or dated securities, called State Development Loans",
    ],
    answer: 3,
    explanation:
      "The Central Government issues both treasury bills (91, 182 and 364 days) and dated securities. State Governments issue only bonds or dated securities, known as State Development Loans (SDLs).",
  },
  {
    id: "c06-q08",
    question: "ASBA (Application Supported by Blocked Amount) in a public issue means that:",
    options: [
      "The application money is debited from the account at the time of applying and refunded if shares are not allotted",
      "The investor pays by cheque, which is presented only after allotment",
      "The investor authorises the bank to block the application money in the account and release it only on allotment",
      "The stock broker funds the application, and the investor repays after listing",
    ],
    answer: 2,
    explanation:
      "Under ASBA, the investor authorises the bank to block the application money, and funds are released only on allotment. Applications in public issues and rights issues must use ASBA, and UPI can be used for retail applications.",
  },
  {
    id: "c06-q09",
    question:
      "An investor holds 200 shares of face value ₹10, trading at ₹1,500 each. The company announces a stock split in the ratio 1:5. What is the most likely position after the split?",
    options: [
      "1,000 shares of face value ₹10 each, with the holding worth about ₹15,00,000",
      "1,000 shares of face value ₹2 each, with the holding still worth about ₹3,00,000",
      "40 shares of face value ₹50 each, with the holding worth about ₹3,00,000",
      "1,000 shares of face value ₹2 each, with the company's share capital rising five-fold",
    ],
    answer: 1,
    explanation:
      "A 1:5 split turns each share into 5 and cuts the face value to one-fifth (₹2). So 200 shares become 1,000, and the price should adjust to about ₹300, keeping the value near ₹3,00,000. The company's share capital is unchanged.",
  },
  {
    id: "c06-q10",
    question:
      "An investor holds 600 shares of a company that announces a bonus issue in the ratio 1:3. Which of the following is correct?",
    options: [
      "The investor gets 1,800 additional shares, issued at face value",
      "The investor gets 200 additional shares, payable at the prevailing market price on the record date",
      "The investor gets 1,800 additional shares, issued free out of free reserves",
      "The investor gets 200 additional shares without any consideration, issued out of free reserves",
    ],
    answer: 3,
    explanation:
      "A 1:3 bonus gives 1 share for every 3 held, so 600 ÷ 3 = 200 bonus shares. Bonus shares are issued without consideration out of free reserves built from genuine profits.",
  },
  {
    id: "c06-q11",
    question: "At what levels are index-based market-wide circuit breakers triggered in India?",
    options: [
      "10%, 15% and 20% movement either way in the Sensex or Nifty 50, whichever is breached earlier",
      "5%, 10% and 15% movement either way in the Nifty 50 only, with halts applied to the cash market alone",
      "2%, 5% and 10% movement either way in the Sensex only",
      "Only a 20% fall in both the Sensex and the Nifty 50 together",
    ],
    answer: 0,
    explanation:
      "Market-wide circuit breakers apply at 10%, 15% and 20% index movement either way, triggered by the BSE Sensex or the Nifty 50, whichever is breached first. They halt trading in all equity and equity derivative markets nationwide. The 2%, 5%, 10% and 20% levels are price bands on individual securities.",
  },
  {
    id: "c06-q12",
    question: "What is the primary objective of the Core Settlement Guarantee Fund (Core SGF)?",
    options: [
      "To compensate investors for losses suffered due to falling market prices of the securities they hold",
      "To fund the marketing expenses of public issues",
      "To guarantee settlement of trades if a clearing member fails to honour its settlement obligations",
      "To provide margin funding to retail investors",
    ],
    answer: 2,
    explanation:
      "The clearing corporation is the counterparty to all trades. The Core SGF is used to fund the obligations of a defaulting clearing member so that settlement completes normally. It does not protect investors against market losses.",
  },
  {
    id: "c06-q13",
    question: "Which statement about transactions in the secondary market is correct?",
    options: [
      "Every trade on the exchange brings fresh capital to the issuing company, because buyers pay the issuer directly",
      "Only debt securities issued through public issues can be traded",
      "Only securities of unlisted companies are traded",
      "They do not provide additional capital to the issuer, because funds are exchanged only between investors",
    ],
    answer: 3,
    explanation:
      "In the secondary market, already-issued securities change hands between investors, so the issuer gets no new capital. The secondary market supports the primary market through liquidity, price discovery and information signalling.",
  },
  {
    id: "c06-q14",
    question: "Which of the following is true of a share buyback?",
    options: [
      "Shares bought back are extinguished, reducing share capital; buybacks are used to raise earnings per share",
      "The shares bought back are held by the company as treasury stock and can be re-issued at a premium later",
      "A buyback increases the share capital of the company",
      "A company may buy back shares even after defaulting on interest on its debentures",
    ],
    answer: 0,
    explanation:
      "Shares bought back are extinguished, which reduces share capital. Companies use buybacks to increase EPS and support the share price. A company that has defaulted on interest or principal on debentures, fixed deposits or term loans is not eligible.",
  },
  {
    id: "c06-q15",
    question:
      "Which of the following is a requirement for a public issue of debentures by a company?",
    options: [
      "No credit rating is needed if the debentures are secured",
      "A rating from at least one credit rating agency must be disclosed in the offer document, and a debenture trustee appointed",
      "Listing the debentures on a stock exchange is optional",
      "Only RBI approval is required, and no offer document needs to be filed with SEBI or the Registrar of Companies before the issue opens",
    ],
    answer: 1,
    explanation:
      "For a public debt issue, the company must obtain a rating from at least one credit rating agency and disclose it, disclosing all ratings if there are several. The debentures must be listed, and debenture trustees must be appointed to protect investors' interests.",
  },
  {
    id: "c06-q16",
    question:
      "Under SEBI's current timeline for public issues, within how many working days after the issue closes (T) must the shares be listed on the stock exchange?",
    options: ["T+6 working days", "T+1 working day", "T+3 working days", "T+10 working days"],
    answer: 2,
    explanation:
      "SEBI cut the time from issue closure to listing from T+6 to T+3 working days, which has been mandatory for public issues since 1 December 2023. A shorter timeline means investors' blocked funds are released sooner and shares can be traded earlier. Note: SEBI rule mandatory from 1 Dec 2023 (earlier T+6); the Feb 2025 workbook does not state the listing timeline.",
  },
  {
    id: "c06-q17",
    question: "Which statement best describes the equity settlement cycle on Indian stock exchanges today?",
    options: [
      "T+1 is the standard cycle, and an optional same-day (T+0) cycle is available for a limited set of shares",
      "T+2 is the only settlement cycle for every share, and same-day settlement is not permitted on any exchange",
      "T+0 settlement is compulsory for all shares, and the T+1 settlement cycle has been withdrawn completely",
      "Investors choose between T+3 and T+5 settlement for each order, depending on the margin they deposit",
    ],
    answer: 0,
    explanation:
      "T+1 is the standard rolling settlement cycle, and since 28 March 2024 an optional T+0 (same-day) cycle has been available for a limited set of shares alongside it. Note: per SEBI's T+0 beta framework; the Feb 2025 workbook does not describe settlement cycles, and its margin example assumes pay-in two days after the trade.",
  },
  {
    id: "c06-q18",
    question:
      "From 1 February 2025, qualified stock brokers must offer clients a UPI block facility for trading in the secondary market. What does this facility do?",
    options: [
      "It lets the broker debit the client's bank account in advance and hold the money in its own pool account",
      "It lets clients use UPI only to buy IPO shares on their listing day, not to trade any other securities",
      "It replaces margins, so clients do not need to pay or block any amount at all before the trade is settled",
      "It blocks the money in the client's own bank account, and the amount is debited only on trade settlement",
    ],
    answer: 3,
    explanation:
      "Like ASBA in public issues, the UPI block mechanism keeps the client's money in the client's own bank account, blocked rather than transferred to the broker, and it is debited only when the trade is settled. Note: SEBI framework for trading supported by blocked amount, mandatory for qualified stock brokers from 1 Feb 2025; the Feb 2025 workbook covers UPI blocking only for public issue applications.",
  },
  {
    id: "c06-q19",
    question:
      "A book built issue allows a discount to retail investors. Shares are allotted to the other investor categories at ₹500. What is the lowest price at which shares can be allotted to retail investors?",
    options: ["₹400", "₹450", "₹475", "₹490"],
    answer: 1,
    explanation:
      "The retail allotment price cannot be lower than the price for other categories by more than 10%. So the lowest permitted price is ₹500 × (1 - 0.10) = ₹450. ₹400 wrongly applies the 20% width of the price band.",
  },
  {
    id: "c06-q20",
    question:
      "In a book built offer, the issuer sets the minimum bid lot so that the minimum application value falls within the range prescribed by SEBI. What is that range?",
    options: ["₹1,000 to ₹5,000", "₹50,000 to ₹2,00,000", "₹5,000 to ₹7,500", "₹10,000 to ₹15,000"],
    answer: 3,
    explanation:
      "Investors must bid for at least the minimum bid lot specified by the issuer, so that the minimum application value is within SEBI's prescribed range of ₹10,000 to ₹15,000. They can either name a bid price or bid at the cut-off.",
  },
  {
    id: "c06-q21",
    question:
      "The clearing corporation steps in as the legal counterparty to every trade on the stock exchange, so that buyers and sellers do not face each other's default risk. What is this process called?",
    options: ["Novation", "Netting", "Dematerialisation", "Rematerialisation"],
    answer: 0,
    explanation:
      "Through novation, the clearing corporation becomes the counterparty to all trades and settles them even if a trading member defaults on pay-in or pay-out. It manages this risk through margins and the Core Settlement Guarantee Fund.",
  },
  {
    id: "c06-q22",
    question:
      "A shareholder receives rights entitlements (REs) in her demat account but does not want to subscribe to the rights issue. What can she do with them?",
    options: [
      "Nothing, because REs cannot be transferred and simply lapse if they are not exercised",
      "Ask the company to buy back the REs at face value before the rights issue closes",
      "Sell the REs on the stock exchange, since they carry a separate ISIN and trade like shares",
      "Convert the REs into bonus shares, which are credited free on the record date",
    ],
    answer: 2,
    explanation:
      "Rights entitlements are credited to the demat account and have a separate ISIN, so they can be traded on the stock exchanges at the market price. An investor who does not want to subscribe can sell them; applications for the rights issue itself must be made through ASBA.",
  },
  {
    id: "c06-q23",
    question: "From which of the following sources is a company allowed to declare a dividend?",
    options: [
      "Its share premium account",
      "Profits of the year and its profit and loss account",
      "The revaluation reserve created on its fixed assets",
      "The capital redemption reserve created on redeeming preference shares",
    ],
    answer: 1,
    explanation:
      "Dividends can be declared out of the profit and loss account and the profits of the year. They cannot be declared out of the share premium account, revaluation reserve or capital redemption reserve, and a loss-making company, or one that has failed to redeem its preference shares, cannot declare dividends.",
  },
  {
    id: "c06-q24",
    question:
      "A stock has futures and options contracts trading on it. What daily price band applies to it in the cash market?",
    options: [
      "A fixed 20% band either way, the same as for all the remaining scrips",
      "A 2% band either way, to discourage speculation in derivative stocks",
      "No price band, although the exchange may set an operating range of 10%",
      "A 5% band either way, which SEBI resets every trading day for each stock",
    ],
    answer: 2,
    explanation:
      "No price bands apply to scrips on which derivatives are available, or to scrips in indices on which derivatives are available. To stop orders at non-genuine prices, the exchange may fix an operating range of 10%. Other scrips have bands of 2%, 5%, 10% or 20%.",
  },
  {
    id: "c06-q25",
    question:
      "In a voluntary delisting, through what process does the company buy back the shares held by public shareholders?",
    options: [
      "A rights issue priced at a discount",
      "An offer for sale through the exchange",
      "A qualified institutions placement",
      "A reverse book building process",
    ],
    answer: 3,
    explanation:
      "In a voluntary delisting, the company chooses to delist and buys back the shares through a reverse book building process. A compulsory delisting happens when the company fails to comply with regulations and the listing agreement.",
  },
];
