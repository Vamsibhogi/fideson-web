// Localized country landing pages. Each targets "instagram automation in <country>".
// To avoid thin/doorway pages, every country carries genuinely local detail:
// the price actually charged there, local payment context, common IG sectors, a
// local city + currency in the example, and a hand-written angle line.
//
// Honesty: Fideson does not process payments — it sends whatever payment link the
// business already uses (UPI, GCash, M-Pesa, etc.). Copy is framed that way.

export type Region = "IN" | "EMERGING" | "GLOBAL";

export interface Country {
  code: string; // ISO alpha-2
  name: string;
  adjective: string; // "Indian"
  region: Region;
  ogLocale: string; // e.g. "en_IN"
  currencyName: string; // "rupees"
  sectors: string; // common IG business sectors there
  payments: string; // local payment methods businesses use
  city: string; // example city
  currencyEx: string; // example price string in local currency
  angle: string; // one hand-written, country-specific sentence
}

const STARTER_PRICE: Record<Region, string> = {
  IN: "₹399/mo",
  EMERGING: "$7/mo",
  GLOBAL: "$12/mo",
};

export function starterPrice(region: Region): string {
  return STARTER_PRICE[region];
}

export const COUNTRIES: Country[] = [
  {
    code: "IN", name: "India", adjective: "Indian", region: "IN", ogLocale: "en_IN",
    currencyName: "rupees", sectors: "D2C brands, boutiques, cloud kitchens, and creators",
    payments: "UPI, Paytm, and your Razorpay/Cashfree links", city: "Jaipur", currencyEx: "₹899",
    angle: "Instagram is where Indian small businesses meet customers — and where most enquiries quietly go unanswered.",
  },
  {
    code: "ID", name: "Indonesia", adjective: "Indonesian", region: "EMERGING", ogLocale: "id_ID",
    currencyName: "rupiah", sectors: "online shops, F&B, and fashion sellers",
    payments: "GoPay, OVO, DANA, and bank transfer links", city: "Jakarta", currencyEx: "Rp150.000",
    angle: "Instagram and social commerce drive huge sales in Indonesia — if you can answer the DMs fast enough.",
  },
  {
    code: "PH", name: "Philippines", adjective: "Filipino", region: "EMERGING", ogLocale: "en_PH",
    currencyName: "pesos", sectors: "online sellers, food businesses, and resellers",
    payments: "GCash, Maya, and bank links", city: "Manila", currencyEx: "₱650",
    angle: "From GCash checkouts to reseller DMs, Filipino businesses live on Instagram — Fideson keeps up with the messages.",
  },
  {
    code: "VN", name: "Vietnam", adjective: "Vietnamese", region: "EMERGING", ogLocale: "vi_VN",
    currencyName: "dong", sectors: "online shops, cafes, and beauty brands",
    payments: "MoMo, ZaloPay, and bank transfer links", city: "Ho Chi Minh City", currencyEx: "250.000₫",
    angle: "Instagram selling is booming in Vietnam; Fideson answers the flood of DMs so you never lose a buyer.",
  },
  {
    code: "TH", name: "Thailand", adjective: "Thai", region: "EMERGING", ogLocale: "th_TH",
    currencyName: "baht", sectors: "online shops, cafes, and wellness studios",
    payments: "PromptPay and bank transfer links", city: "Bangkok", currencyEx: "฿350",
    angle: "Thai shoppers slide into DMs before they buy — Fideson makes sure every message gets a fast, on-brand reply.",
  },
  {
    code: "MY", name: "Malaysia", adjective: "Malaysian", region: "EMERGING", ogLocale: "en_MY",
    currencyName: "ringgit", sectors: "online shops, F&B, and services",
    payments: "DuitNow, Touch 'n Go, and FPX links", city: "Kuala Lumpur", currencyEx: "RM49",
    angle: "Malaysian SMEs sell across Instagram and WhatsApp — start with the Instagram DMs, automated.",
  },
  {
    code: "SG", name: "Singapore", adjective: "Singaporean", region: "GLOBAL", ogLocale: "en_SG",
    currencyName: "dollars", sectors: "boutiques, F&B, and service businesses",
    payments: "PayNow and card links", city: "Singapore", currencyEx: "S$29",
    angle: "In a high-cost market, an AI agent that answers instantly is the cheapest teammate you'll ever hire.",
  },
  {
    code: "BD", name: "Bangladesh", adjective: "Bangladeshi", region: "EMERGING", ogLocale: "bn_BD",
    currencyName: "taka", sectors: "F-commerce sellers, boutiques, and food businesses",
    payments: "bKash, Nagad, and bank links", city: "Dhaka", currencyEx: "৳1,200",
    angle: "F-commerce runs on DMs in Bangladesh — Fideson answers them all, day and night.",
  },
  {
    code: "PK", name: "Pakistan", adjective: "Pakistani", region: "EMERGING", ogLocale: "en_PK",
    currencyName: "rupees", sectors: "online shops, clothing brands, and home businesses",
    payments: "JazzCash, Easypaisa, and bank links", city: "Karachi", currencyEx: "Rs1,500",
    angle: "Home businesses and clothing brands sell on Instagram in Pakistan — never miss another order enquiry.",
  },
  {
    code: "LK", name: "Sri Lanka", adjective: "Sri Lankan", region: "EMERGING", ogLocale: "en_LK",
    currencyName: "rupees", sectors: "online shops, home bakers, and boutiques",
    payments: "bank transfer and card links", city: "Colombo", currencyEx: "Rs2,500",
    angle: "Small Sri Lankan businesses win on fast replies — Fideson makes fast the default.",
  },
  {
    code: "NG", name: "Nigeria", adjective: "Nigerian", region: "EMERGING", ogLocale: "en_NG",
    currencyName: "naira", sectors: "online vendors, fashion brands, and food businesses",
    payments: "Paystack, Flutterwave, and bank transfer links", city: "Lagos", currencyEx: "₦12,000",
    angle: "Instagram vendors are everywhere in Nigeria — the ones who reply first, win. Let AI reply first.",
  },
  {
    code: "ZA", name: "South Africa", adjective: "South African", region: "EMERGING", ogLocale: "en_ZA",
    currencyName: "rand", sectors: "online stores, salons, and service businesses",
    payments: "PayFast, Yoco, and EFT links", city: "Johannesburg", currencyEx: "R450",
    angle: "From salons to online stores, South African SMEs turn Instagram DMs into bookings with Fideson.",
  },
  {
    code: "KE", name: "Kenya", adjective: "Kenyan", region: "EMERGING", ogLocale: "en_KE",
    currencyName: "shillings", sectors: "online sellers, food vendors, and boutiques",
    payments: "M-Pesa and bank links", city: "Nairobi", currencyEx: "KSh1,200",
    angle: "M-Pesa made checkout instant in Kenya — Fideson makes the reply that leads to it instant too.",
  },
  {
    code: "GH", name: "Ghana", adjective: "Ghanaian", region: "EMERGING", ogLocale: "en_GH",
    currencyName: "cedi", sectors: "online vendors, fashion, and food businesses",
    payments: "MTN MoMo and bank links", city: "Accra", currencyEx: "GH₵120",
    angle: "Mobile money moves fast in Ghana; your Instagram replies should move faster.",
  },
  {
    code: "EG", name: "Egypt", adjective: "Egyptian", region: "EMERGING", ogLocale: "ar_EG",
    currencyName: "pounds", sectors: "online shops, fashion, and home businesses",
    payments: "InstaPay, Vodafone Cash, and card links", city: "Cairo", currencyEx: "E£450",
    angle: "Egyptian online sellers get most of their orders through DMs — automate the answers, keep the sales.",
  },
  {
    code: "AE", name: "United Arab Emirates", adjective: "UAE", region: "GLOBAL", ogLocale: "en_AE",
    currencyName: "dirhams", sectors: "boutiques, F&B, and service businesses",
    payments: "card and bank transfer links", city: "Dubai", currencyEx: "AED120",
    angle: "In a fast, competitive market like the UAE, instant replies are the difference between a sale and a scroll-past.",
  },
];

export function getCountry(code: string): Country | undefined {
  const c = code.toUpperCase();
  return COUNTRIES.find((x) => x.code === c);
}

/** URL slug for a country page (lower-case ISO code). */
export function countrySlug(c: Country): string {
  return c.code.toLowerCase();
}
