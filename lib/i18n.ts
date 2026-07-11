// Translations for the localized country landing pages. We translate the pages
// for markets whose primary business language isn't English, so an Indonesian or
// Vietnamese visitor reads the page in their language (and hreflang links the two).
//
// NOTE: these are a solid first pass and should be reviewed by a native speaker
// before heavy paid promotion. Payment names and business sectors stay as proper
// nouns. Arabic (RTL) markets are handled in English for now — RTL is a follow-up.

export type Locale = "en" | "id" | "vi" | "th" | "fr";

/** Non-default locales that have translated pages. */
export const TRANSLATED_LOCALES: Locale[] = ["id", "vi", "th", "fr"];

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "English",
  id: "Bahasa Indonesia",
  vi: "Tiếng Việt",
  th: "ไทย",
  fr: "Français",
};

export const LOCALE_OG: Record<Locale, string> = {
  en: "en",
  id: "id_ID",
  vi: "vi_VN",
  th: "th_TH",
  fr: "fr_FR",
};

/** Which locales each country (by ISO code) has a translated page in. */
export const COUNTRY_LOCALES: Record<string, Locale[]> = {
  ID: ["id"],
  VN: ["vi"],
  TH: ["th"],
  SN: ["fr"],
  CI: ["fr"],
  MA: ["fr"],
};

export function localesForCountry(code: string): Locale[] {
  return COUNTRY_LOCALES[code.toUpperCase()] ?? [];
}

export interface CountryStrings {
  badge: (country: string) => string;
  h1: (country: string) => string;
  intro: (opts: { sectors: string; price: string }) => string;
  startFree: string;
  seePricing: (country: string) => string;
  exQuestion: (city: string) => string;
  exAnswer: (city: string, price: string) => string;
  answeredByAi: string;
  b1t: string;
  b1b: (country: string) => string;
  b2t: string;
  b2b: (payments: string) => string;
  b3t: string;
  b3b: string;
  otherCountries: string;
  byBusiness: string;
}

export const STRINGS: Record<Locale, CountryStrings> = {
  en: {
    badge: (c) => `For businesses in ${c}`,
    h1: (c) => `Instagram automation in ${c}`,
    intro: ({ sectors, price }) =>
      `Fideson puts an AI agent on your Instagram that answers DMs and comments instantly, captures every lead, and shares your payment links — built for ${sectors}. Pricing from ${price}, with a free plan to start.`,
    startFree: "Start free",
    seePricing: (c) => `See ${c} pricing`,
    exQuestion: (city) => `hi, do you deliver to ${city}? how much?`,
    exAnswer: (city, price) =>
      `Yes, we deliver to ${city}! It's ${price}. Want me to share the payment link and hold one for you?`,
    answeredByAi: "answered by AI · 2s",
    b1t: "Answers in seconds, 24/7",
    b1b: (c) => `Your customers in ${c} get an instant, on-brand reply — even at 2am — so no enquiry goes cold.`,
    b2t: "Shares your payment links",
    b2b: (p) => `The agent sends the links your buyers already use — ${p} — at the right moment to close the sale.`,
    b3t: "Captures every lead",
    b3b: "Every person who messages becomes a saved contact with tags and notes, ready for follow-up.",
    otherCountries: "Instagram automation in other countries",
    byBusiness: "By business type",
  },
  id: {
    badge: (c) => `Untuk bisnis di ${c}`,
    h1: (c) => `Otomatisasi Instagram di ${c}`,
    intro: ({ price }) =>
      `Fideson menghadirkan agen AI di Instagram Anda yang membalas DM dan komentar secara instan, menangkap setiap prospek, dan membagikan tautan pembayaran Anda. Harga mulai ${price}, dengan paket gratis untuk memulai.`,
    startFree: "Mulai gratis",
    seePricing: (c) => `Lihat harga ${c}`,
    exQuestion: (city) => `halo, apakah kirim ke ${city}? berapa harganya?`,
    exAnswer: (city, price) =>
      `Ya, kami kirim ke ${city}! Harganya ${price}. Mau saya kirimkan tautan pembayaran dan simpankan satu untuk Anda?`,
    answeredByAi: "dijawab oleh AI · 2 dtk",
    b1t: "Balasan dalam hitungan detik, 24/7",
    b1b: (c) => `Pelanggan Anda di ${c} mendapat balasan instan sesuai brand — bahkan jam 2 pagi — jadi tidak ada pertanyaan yang terlewat.`,
    b2t: "Membagikan tautan pembayaran Anda",
    b2b: (p) => `Agen mengirim tautan yang sudah biasa dipakai pembeli Anda — ${p} — di saat yang tepat untuk menutup penjualan.`,
    b3t: "Menangkap setiap prospek",
    b3b: "Setiap orang yang mengirim pesan menjadi kontak tersimpan dengan tag dan catatan, siap ditindaklanjuti.",
    otherCountries: "Otomatisasi Instagram di negara lain",
    byBusiness: "Berdasarkan jenis bisnis",
  },
  vi: {
    badge: (c) => `Dành cho doanh nghiệp tại ${c}`,
    h1: (c) => `Tự động hóa Instagram tại ${c}`,
    intro: ({ price }) =>
      `Fideson đưa một trợ lý AI lên Instagram của bạn, trả lời tin nhắn và bình luận ngay lập tức, thu thập mọi khách hàng tiềm năng và gửi liên kết thanh toán của bạn. Giá từ ${price}, có gói miễn phí để bắt đầu.`,
    startFree: "Bắt đầu miễn phí",
    seePricing: (c) => `Xem giá ${c}`,
    exQuestion: (city) => `chào, bên bạn giao tới ${city} không? giá bao nhiêu?`,
    exAnswer: (city, price) =>
      `Có, bên mình giao tới ${city}! Giá là ${price}. Bạn muốn mình gửi liên kết thanh toán và giữ một sản phẩm cho bạn không?`,
    answeredByAi: "trả lời bởi AI · 2 giây",
    b1t: "Trả lời trong vài giây, 24/7",
    b1b: (c) => `Khách hàng của bạn tại ${c} nhận được phản hồi tức thì đúng thương hiệu — kể cả lúc 2 giờ sáng — nên không bỏ lỡ câu hỏi nào.`,
    b2t: "Gửi liên kết thanh toán của bạn",
    b2b: (p) => `Trợ lý gửi các liên kết mà người mua đã quen dùng — ${p} — vào đúng thời điểm để chốt đơn.`,
    b3t: "Thu thập mọi khách hàng tiềm năng",
    b3b: "Mỗi người nhắn tin trở thành một liên hệ được lưu lại kèm thẻ và ghi chú, sẵn sàng để theo dõi.",
    otherCountries: "Tự động hóa Instagram ở các quốc gia khác",
    byBusiness: "Theo loại hình kinh doanh",
  },
  th: {
    badge: (c) => `สำหรับธุรกิจใน${c}`,
    h1: (c) => `ระบบอัตโนมัติ Instagram ใน${c}`,
    intro: ({ price }) =>
      `Fideson มีผู้ช่วย AI บน Instagram ของคุณที่ตอบ DM และคอมเมนต์ทันที เก็บทุกลูกค้ามุ่งหวัง และส่งลิงก์ชำระเงินของคุณ เริ่มต้นที่ ${price} พร้อมแพ็กเกจฟรีให้เริ่มใช้งาน`,
    startFree: "เริ่มใช้ฟรี",
    seePricing: (c) => `ดูราคาสำหรับ${c}`,
    exQuestion: (city) => `สวัสดีค่ะ ส่งไป${city}ไหมคะ ราคาเท่าไหร่`,
    exAnswer: (city, price) =>
      `ส่งค่ะ เราจัดส่งถึง${city} ราคา ${price} ให้ส่งลิงก์ชำระเงินและเก็บไว้ให้หนึ่งชิ้นไหมคะ`,
    answeredByAi: "ตอบโดย AI · 2 วินาที",
    b1t: "ตอบภายในไม่กี่วินาที ตลอด 24 ชม.",
    b1b: (c) => `ลูกค้าของคุณใน${c}ได้รับการตอบกลับทันทีในสไตล์แบรนด์ของคุณ แม้ตอนตีสอง จึงไม่พลาดทุกคำถาม`,
    b2t: "ส่งลิงก์ชำระเงินของคุณ",
    b2b: (p) => `ผู้ช่วยส่งลิงก์ที่ลูกค้าของคุณใช้อยู่แล้ว — ${p} — ในจังหวะที่เหมาะสมเพื่อปิดการขาย`,
    b3t: "เก็บทุกลูกค้ามุ่งหวัง",
    b3b: "ทุกคนที่ส่งข้อความจะกลายเป็นผู้ติดต่อที่บันทึกไว้พร้อมแท็กและโน้ต พร้อมติดตามผล",
    otherCountries: "ระบบอัตโนมัติ Instagram ในประเทศอื่น ๆ",
    byBusiness: "ตามประเภทธุรกิจ",
  },
  fr: {
    badge: () => `Pour votre entreprise`,
    h1: (c) => `Automatisation Instagram pour ${c}`,
    intro: ({ price }) =>
      `Fideson place un agent IA sur votre Instagram qui répond aux DM et aux commentaires instantanément, capture chaque prospect et envoie vos liens de paiement. À partir de ${price}, avec une formule gratuite pour commencer.`,
    startFree: "Commencer gratuitement",
    seePricing: (c) => `Voir les tarifs pour ${c}`,
    exQuestion: (city) => `bonjour, vous livrez à ${city} ? combien ?`,
    exAnswer: (city, price) =>
      `Oui, nous livrons à ${city} ! C'est ${price}. Voulez-vous que je vous envoie le lien de paiement et que j'en réserve un pour vous ?`,
    answeredByAi: "répondu par l'IA · 2 s",
    b1t: "Des réponses en quelques secondes, 24h/24",
    b1b: () =>
      `Vos clients reçoivent une réponse instantanée et fidèle à votre marque — même à 2h du matin — pour ne perdre aucune demande.`,
    b2t: "Envoie vos liens de paiement",
    b2b: (p) => `L'agent envoie les liens que vos acheteurs utilisent déjà — ${p} — au bon moment pour conclure la vente.`,
    b3t: "Capture chaque prospect",
    b3b: "Chaque personne qui écrit devient un contact enregistré avec des tags et des notes, prêt pour le suivi.",
    otherCountries: "Automatisation Instagram dans d'autres pays",
    byBusiness: "Par type d'entreprise",
  },
};
