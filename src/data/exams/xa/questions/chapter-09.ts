import type { Question } from "@/data/types";

export const chapter09Questions: Question[] = [
  {
    id: "c09-q01",
    question:
      "When is an issuer most likely to exercise the call option on a callable bond, and what risk does the investor then face?",
    options: [
      "When market interest rates rise; the investor faces default risk",
      "When the issuer's credit rating is downgraded; the investor faces spread risk",
      "When market interest rates fall; the investor faces reinvestment risk",
      "At any time; the investor faces exchange rate risk",
    ],
    answer: 2,
    explanation:
      "Issuers call bonds when interest rates on similar bonds fall, so that they can refinance more cheaply. The investor gets the face value back early and must reinvest it at the lower rates. This is reinvestment risk, and it is why callable bonds pay a higher return than non-callable ones.",
  },
  {
    id: "c09-q02",
    question:
      "A company with several bond series outstanding often re-issues bonds under an existing ISIN instead of creating a new one. According to the workbook, why?",
    options: [
      "Because only RBI can create a fresh ISIN, and it does so only for government securities",
      "Because bonds issued under an existing ISIN do not need a debenture trustee to be appointed",
      "Because bonds under an existing ISIN automatically keep the rating given at the first issue",
      "Because regulation allows a maximum of 12 ISINs to mature in a single financial year",
    ],
    answer: 3,
    explanation:
      "The workbook states that, as per regulation, a maximum of 12 ISINs can mature in one financial year, and that limit applies to completely new issuances. Companies therefore re-issue existing ISINs, which can carry different maturities and coupons as set out in the indenture.",
  },
  {
    id: "c09-q03",
    question:
      "An investor expects inflation to rise sharply over the next few years. To protect herself from inflation risk, she should prefer:",
    options: [
      "Long-term fixed rate bonds",
      "Zero coupon bonds bought at a deep discount",
      "Floating rate bonds or inflation-indexed bonds",
      "Callable fixed rate corporate bonds",
    ],
    answer: 2,
    explanation:
      "Rising inflation reduces the real return on a fixed rate bond. The workbook notes that when higher inflation is expected, investors prefer floating rate bonds, whose coupons reset with market rates, or inflation-indexed bonds.",
  },
  {
    id: "c09-q04",
    question:
      "For a bond trading at a discount to its par value, the relationship between coupon rate (CR), current yield (CY) and yield to maturity (YTM) is:",
    options: ["CR < CY < YTM", "CR > CY > YTM", "CR = CY = YTM", "CY < CR < YTM"],
    answer: 0,
    explanation:
      "A discount bond pays a coupon below the market yield. Its price is below par, so the current yield is above the coupon rate. The YTM also includes the pull to par, so CR < CY < YTM. For a premium bond the order is reversed, and at par all three are equal.",
  },
  {
    id: "c09-q05",
    question:
      "A bond with a face value of ₹100 pays an annual coupon of 9% and has 3 years to maturity. If the yield on similar bonds is 10%, what is its price (approximately)?",
    options: ["₹100.00", "₹102.58", "₹95.42", "₹97.51"],
    answer: 3,
    explanation:
      "Price = 9/1.10 + 9/1.10² + 109/1.10³ = 8.18 + 7.44 + 81.89 ≈ ₹97.51. The yield is above the coupon, so the bond must trade below par. ₹102.58 is the price at an 8% yield, and ₹95.42 wrongly discounts all the cash flows for three years.",
  },
  {
    id: "c09-q06",
    question:
      "A G-Sec with an 8% coupon, paid semi-annually, is quoted at a clean price of ₹101.20. Sixty days have passed since the last coupon date. Using the 30/360 day count convention followed in the Indian bond market, what does the buyer pay per ₹100 of face value?",
    options: ["₹101.20", "₹99.87", "₹102.53", "₹105.20"],
    answer: 2,
    explanation:
      "Accrued interest = 8 × 60/360 = ₹1.33, and the dirty (invoice) price = clean price + accrued interest = 101.20 + 1.33 = ₹102.53. The market quotes the clean price, but the buyer pays the seller the clean price plus accrued interest. ₹105.20 wrongly adds a full half-yearly coupon.",
  },
  {
    id: "c09-q07",
    question:
      "A perpetual bond with a face value of ₹100 pays a coupon of 9% a year. If an investor requires a yield of 7.5%, what is the bond worth to her?",
    options: ["₹83.33", "₹120.00", "₹109.00", "₹100.00"],
    answer: 1,
    explanation:
      "Value of a perpetuity = Coupon / Yield = ₹9 / 0.075 = ₹120. Inverting the ratio (7.5/9) gives the incorrect ₹83.33. The value is above par because the coupon is higher than the required yield.",
  },
  {
    id: "c09-q08",
    question:
      "A bond with a face value of ₹100 and a 7.8% annual coupon is trading at ₹97.50. What is its current yield?",
    options: ["7.80%", "7.61%", "2.56%", "8.00%"],
    answer: 3,
    explanation:
      "Current yield = annual coupon / current market price = 7.80 / 97.50 = 8.00%. 7.80% is the coupon yield, which is coupon divided by face value, not by the market price.",
  },
  {
    id: "c09-q09",
    question:
      "A 5-year bond with a face value of ₹100 and an annual coupon of 8% trades at ₹96. Using the approximation YTM ≈ [C + (F − P)/n] / [(F + P)/2], what is its approximate YTM?",
    options: ["8.33%", "9.17%", "8.80%", "8.98%"],
    answer: 3,
    explanation:
      "Approximate YTM = (8 + 4/5) / ((100 + 96)/2) = 8.8 / 98 ≈ 8.98%. 8.33% is the current yield (8/96), 9.17% divides by the price instead of the average of price and face value, and 8.80% divides by the face value. As expected for a discount bond, YTM > CY > coupon rate.",
  },
  {
    id: "c09-q10",
    question:
      "A deposit advertises a nominal rate of 6% a year, with interest compounded monthly. What is its effective annual yield (approximately)?",
    options: ["6.17%", "6.00%", "6.09%", "6.14%"],
    answer: 0,
    explanation:
      "Effective yield = (1 + 0.06/12)^12 − 1 ≈ 6.17%. The workbook explains that more frequent payment raises the effective yield above the stated rate. 6.09% is the result for half-yearly compounding and 6.14% for quarterly compounding.",
  },
  {
    id: "c09-q11",
    question: "Which type of bond has a Macaulay duration exactly equal to its remaining term to maturity?",
    options: ["A zero coupon bond", "A high-coupon bond", "A callable bond", "A floating rate bond"],
    answer: 0,
    explanation:
      "Duration is the weighted average time to receive a bond's cash flows, and it is always less than or equal to maturity. Only a zero coupon bond, which has a single cash flow at maturity, has a duration equal to its remaining maturity.",
  },
  {
    id: "c09-q12",
    question:
      "A bond has a Macaulay duration of 5.4 years and a yield to maturity of 8% (annual compounding). Using modified duration, what is the approximate change in its price if yields rise by 1 percentage point?",
    options: ["-5.83%", "-5.00%", "-5.40%", "+5.00%"],
    answer: 1,
    explanation:
      "Modified duration = Macaulay duration / (1 + yield) = 5.4 / 1.08 = 5.0, so a 1% rise in yields lowers the price by about 5.0%. -5.40% uses the Macaulay duration directly, and the price must fall, not rise, when yields go up.",
  },
  {
    id: "c09-q13",
    question: "Which of the following bonds will show the greatest price sensitivity to a given change in market yields?",
    options: [
      "A 3-year bond with a 9% coupon",
      "A 3-year zero coupon bond",
      "A 10-year zero coupon bond",
      "A 10-year bond with a 9% coupon",
    ],
    answer: 2,
    explanation:
      "The workbook states that bonds with a longer maturity are more sensitive to interest rate changes, and that the lower the coupon rate, the greater the price sensitivity. The 10-year zero coupon bond has both the longest maturity and the lowest coupon.",
  },
  {
    id: "c09-q14",
    question: "A yield curve on which short-term rates are higher than long-term rates is called a(n):",
    options: ["Normal yield curve", "Inverted yield curve", "Flat yield curve", "Humped yield curve"],
    answer: 1,
    explanation:
      "On an inverted yield curve, short-term yields exceed long-term yields. The workbook says this can happen when policy rates are kept high to curb excess demand, or when there is a severe asset-liability mismatch.",
  },
  {
    id: "c09-q15",
    question:
      "A scheduled commercial bank borrows funds from another bank on an unsecured basis for 10 days, dealt on the NDS-CALL platform. This is a:",
    options: ["Call money transaction", "Term money transaction", "Notice money transaction", "Triparty repo transaction"],
    answer: 2,
    explanation:
      "Notice money is uncollateralised interbank borrowing for more than overnight and up to 14 days. Call money is overnight, term money runs from 15 days to 1 year, and a triparty repo is collateralised.",
  },
  {
    id: "c09-q16",
    question:
      "Which Government of India instrument is issued to meet temporary mismatches in the government's cash flow and has a maturity of less than 91 days?",
    options: ["364-day Treasury Bill", "State Development Loan", "Floating Rate Bond", "Cash Management Bill"],
    answer: 3,
    explanation:
      "Cash Management Bills are very short-term T-bills with maturities under 91 days. They are issued to fund temporary mismatches in the government's cash flow. Regular T-bills are auctioned in 91, 182 and 364-day tenors.",
  },
  {
    id: "c09-q17",
    question: "Which statement about Commercial Paper (CP) is correct?",
    options: [
      "It is an unsecured, discounted instrument issued for ₹5 lakh and multiples thereof, with maturities between 7 days and one year",
      "It is issued by banks against deposits for maturities of 7 days to 3 years",
      "It is a secured instrument issued at par that pays semi-annual coupons",
      "It is issued by the Government of India through weekly RBI auctions",
    ],
    answer: 0,
    explanation:
      "CPs are used by corporates with good credit ratings to raise short-term unsecured funds. They are issued at a discount, in ₹5 lakh and multiples thereof, for 7 days to one year. Instruments issued by banks against deposits are Certificates of Deposit.",
  },
  {
    id: "c09-q18",
    question:
      "One year a dated G-Sec's coupon date falls on a holiday, and later its maturity date also falls on a holiday. As per the workbook, how are these payments made?",
    options: [
      "Both the coupon and the redemption proceeds are paid on the previous working day",
      "The coupon is paid on the next working day; redemption proceeds on the previous working day",
      "The coupon is paid on the previous working day; redemption proceeds on the next working day",
      "Both the coupon and the redemption proceeds are paid on the next working day",
    ],
    answer: 1,
    explanation:
      "The workbook states that when a coupon payment date falls on a holiday, the coupon is paid on the next working day, but if the maturity date falls on a holiday, the redemption proceeds are paid on the previous working day. RBI's Public Debt Office handles coupon and principal payments.",
  },
  {
    id: "c09-q19",
    question: "Why can STRIPS be attractive to retail and non-institutional investors?",
    options: [
      "They pay a higher coupon than the underlying G-Sec",
      "They carry an implicit call option in favour of the investor",
      "Their principal is linked to the inflation index",
      "Being zero coupon instruments, they carry zero reinvestment risk",
    ],
    answer: 3,
    explanation:
      "STRIPS are created by separating each coupon and the principal of a G-Sec into separate zero coupon securities. With no interim cash flows to reinvest, they carry zero reinvestment risk.",
  },
  {
    id: "c09-q20",
    question:
      "Under the Companies Act, as stated in the workbook, appointing a Debenture Trustee is compulsory when debentures or bonds are issued with a maturity of more than:",
    options: ["12 months", "18 months", "36 months", "24 months"],
    answer: 1,
    explanation:
      "Appointing a Debenture Trustee is compulsory for debentures or bonds with a maturity of more than 18 months. The trustee is registered with SEBI and protects the interests of debenture holders, including by enforcing the security in the event of default.",
  },
  {
    id: "c09-q21",
    question:
      "Mr. Rao holds a fixed deposit of ₹4 lakh at one branch of a bank and a savings balance of ₹1.5 lakh at another branch of the same bank. How much of these deposits is covered by DICGC deposit insurance?",
    options: ["₹5 lakh", "₹5.5 lakh", "₹4 lakh", "₹10 lakh"],
    answer: 0,
    explanation:
      "DICGC insures each depositor up to ₹5 lakh per bank. The limit covers all deposits and interest held across all branches of that bank, so only ₹5 lakh of the ₹5.5 lakh is covered. It is not ₹5 lakh per branch.",
  },
  {
    id: "c09-q22",
    question:
      "Which feature applies to the Government of India Floating Rate Savings Bonds launched on 1 July 2020, as described in the workbook?",
    options: [
      "The coupon is fixed at issue, and the bonds can be traded on stock exchanges by any investor, including NRIs",
      "The coupon is reset every six months at 0.35% above the prevailing NSC rate, and NRIs cannot invest",
      "The coupon is linked to the 91-day T-bill yield and is paid in a single sum at maturity, free of tax",
      "The coupon is reset once a year at 0.50% above the PPF rate, and the interest is exempt from income tax",
    ],
    answer: 1,
    explanation:
      "The workbook states that the interest rate is linked to the National Savings Certificate rate plus 35 basis points, is paid every six months and is reset for the next six months. Only resident Indians can invest, the bonds are held in demat (bond ledger account) form, and the interest is taxable as income from other sources.",
  },
  {
    id: "c09-q23",
    question:
      "Mr. and Mrs. Iyer want to open a Senior Citizens' Saving Scheme (SCSS) account. Which statement about SCSS eligibility is correct according to the workbook?",
    options: [
      "Any two adults may hold the account jointly, provided both of them are aged 60 years or above on opening",
      "NRIs and HUFs may invest, provided the account holder or karta is aged 60 or above",
      "Retired civilian defence employees are eligible irrespective of their age",
      "It can be held jointly with the spouse only, and the age condition applies to the first holder",
    ],
    answer: 3,
    explanation:
      "SCSS can be held individually or jointly with the spouse, and the age restrictions apply only to the first holder. NRIs, PIOs and HUFs are not eligible. Retired defence personnel are eligible irrespective of age, but civilian defence employees are expressly excluded from this relaxation.",
  },
  {
    id: "c09-q24",
    question:
      "A client asks about the tax treatment and transferability of a Kisan Vikas Patra (KVP). Which statement is correct?",
    options: [
      "The investment qualifies for a tax deduction, and the interest is tax-free on maturity",
      "No tax deduction is available, and the certificate cannot be transferred to another person",
      "There is no tax incentive, interest is taxed on accrual, and it is transferable by endorsement",
      "The interest is taxed only on maturity, and only a single adult may hold the certificate",
    ],
    answer: 2,
    explanation:
      "The workbook states that there is no tax incentive for investing in KVP and the interest is taxed on an accrual basis. Nomination and joint holding are available, and the certificate can be transferred from one person to another, and between post offices, by endorsement and delivery.",
  },
  {
    id: "c09-q25",
    question: "Which of the following is a feature of the Sukanya Samriddhi Account?",
    options: [
      "It matures 21 years from opening, and up to 50% of the balance can be withdrawn after the girl turns 18",
      "It can be opened for a girl child aged up to 15 years, with a maximum deposit of ₹2.5 lakh in a financial year",
      "A guardian can open any number of accounts, one in the name of each girl child in the family",
      "It matures when the girl turns 18, and no partial withdrawal is allowed before that date",
    ],
    answer: 0,
    explanation:
      "The account is opened for a girl child aged up to 10 years, with deposits of ₹250 to ₹1,50,000 per financial year, and a guardian may open at most two accounts for two different girls. It matures 21 years from opening, and up to 50% of the balance at the end of the preceding financial year can be withdrawn after the girl turns 18.",
  },
];
