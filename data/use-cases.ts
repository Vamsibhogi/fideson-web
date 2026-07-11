// Programmatic use-case landing pages — one honest, feature-based page per
// business type. These target long-tail searches like "instagram automation for
// restaurants". Copy describes what Fideson actually does; no invented claims.

export interface UseCase {
  slug: string;
  audience: string; // "restaurants and cafes"
  title: string; // page <title>
  description: string; // meta description
  h1: string;
  intro: string;
  benefits: { title: string; body: string }[];
  example: { question: string; answer: string };
}

export const USE_CASES: UseCase[] = [
  {
    slug: "online-stores",
    audience: "online stores",
    title: "Instagram automation for online stores & D2C brands",
    description:
      "Turn Instagram DMs and comments into sales. Fideson's AI answers product, price, and delivery questions instantly, captures leads, and shares payment links — 24/7.",
    h1: "Instagram automation for online stores",
    intro:
      "Most online-store DMs are the same few questions: is this in stock, do you ship to my city, how much, how do I pay. Fideson's AI answers them instantly from your catalog and policies, so no sale slips away while you're busy packing orders.",
    benefits: [
      { title: "Answer product questions instantly", body: "Price, sizes, stock, delivery areas — answered in seconds, in your brand voice, from the knowledge you give it." },
      { title: "Capture every lead", body: "Every person who asks is saved as a contact with tags and notes, so you can follow up and re-market." },
      { title: "Share payment & catalog links", body: "The agent can send booking, payment, or catalog links at the right moment to move the sale forward." },
    ],
    example: {
      question: "do you deliver to Pune and how much is the gift hamper?",
      answer: "Yes, we deliver to Pune 🚚 The gift hamper is ₹1,299. Want me to share the payment link and hold one for you?",
    },
  },
  {
    slug: "restaurants-and-cafes",
    audience: "restaurants and cafes",
    title: "Instagram automation for restaurants & cafes",
    description:
      "Take reservations, answer menu and timing questions, and never miss a DM. Fideson's AI replies to Instagram DMs and comments for your restaurant automatically.",
    h1: "Instagram automation for restaurants & cafes",
    intro:
      "Hungry customers DM before they visit: are you open, do you take bookings, what's on the menu, do you deliver. Fideson answers instantly so a slow reply never sends them to the place next door.",
    benefits: [
      { title: "Answer hours, menu & booking questions", body: "The AI handles the repetitive questions so your team can focus on service, not the phone." },
      { title: "Take reservation intent 24/7", body: "Capture booking requests even after closing, and hand off to a human when it needs a person." },
      { title: "Turn comments into diners", body: "Auto-reply to comments on a post and move the conversation into DMs." },
    ],
    example: {
      question: "are you open on Sunday and do you take table bookings?",
      answer: "Yes! We're open Sun 12–11pm 🍽️ Happy to book you a table — for how many people and what time?",
    },
  },
  {
    slug: "coaches-and-creators",
    audience: "coaches and creators",
    title: "Instagram automation for coaches & creators",
    description:
      "Qualify leads, share your offers, and book calls automatically. Fideson's AI answers your Instagram DMs and comments so you can scale without a big team.",
    h1: "Instagram automation for coaches & creators",
    intro:
      "When a post does well, the DMs flood in — and you can't answer them all fast enough. Fideson qualifies each lead, answers questions about your program, and books calls, so momentum turns into clients.",
    benefits: [
      { title: "Qualify leads while you sleep", body: "The agent asks the right questions, tags who's a fit, and captures their details for follow-up." },
      { title: "Share your offer & book calls", body: "Send your program details and a booking link at the right moment in the conversation." },
      { title: "Comment-to-DM funnels", body: "Ask people to comment a keyword, then auto-DM them your lead magnet or link." },
    ],
    example: {
      question: "how does your 1:1 coaching work and what's the price?",
      answer: "Great question! It's 8 weekly sessions with WhatsApp support in between. Want me to send the full breakdown and a link to book a free intro call?",
    },
  },
  {
    slug: "real-estate",
    audience: "real estate",
    title: "Instagram automation for real estate agents",
    description:
      "Respond to property enquiries instantly, qualify buyers, and capture leads from Instagram DMs and comments — automatically, with Fideson's AI agent.",
    h1: "Instagram automation for real estate",
    intro:
      "Property enquiries are high-value and time-sensitive. Fideson replies the moment someone asks about a listing, qualifies budget and location, and captures the lead so none go cold.",
    benefits: [
      { title: "Reply to listing enquiries instantly", body: "Answer questions about price, location, and availability before the lead moves on." },
      { title: "Qualify budget & intent", body: "The agent captures budget, area, and timeline as structured fields on each contact." },
      { title: "Never lose a lead", body: "Every enquiry becomes a saved contact you can follow up with, with full context." },
    ],
    example: {
      question: "is the 2BHK in the listing still available and what's the budget?",
      answer: "Yes, it's available! It's ₹85L, in Whitefield. Can I get your preferred area and budget so I can share the best matches?",
    },
  },
  {
    slug: "salons-and-clinics",
    audience: "salons and clinics",
    title: "Instagram automation for salons & clinics",
    description:
      "Book appointments, answer service and pricing questions, and reply to every DM 24/7. Fideson's AI automates Instagram for salons, spas, and clinics.",
    h1: "Instagram automation for salons & clinics",
    intro:
      "Bookings and questions come through Instagram at all hours. Fideson answers service and pricing questions and captures appointment requests automatically, so your chair stays full.",
    benefits: [
      { title: "Answer service & price questions", body: "Treatments, pricing, and availability — answered instantly from your knowledge base." },
      { title: "Capture appointment requests", body: "Take booking intent around the clock and hand off to your front desk to confirm." },
      { title: "Reduce no-shows with follow-up", body: "Every enquiry is saved so you can confirm and remind." },
    ],
    example: {
      question: "how much for a haircut and do you have slots this weekend?",
      answer: "A haircut is ₹499 ✂️ We have a few weekend slots left — Saturday or Sunday, and morning or evening?",
    },
  },
  {
    slug: "education-and-courses",
    audience: "education and courses",
    title: "Instagram automation for education & course creators",
    description:
      "Answer admissions and course questions, share syllabi, and enrol students from Instagram — automatically. Fideson's AI handles your education DMs and comments.",
    h1: "Instagram automation for education & courses",
    intro:
      "Prospective students ask the same admissions questions again and again. Fideson answers them instantly, shares the right details, and captures each lead so your enrolment team can close.",
    benefits: [
      { title: "Answer admissions questions", body: "Fees, dates, syllabus, eligibility — answered accurately from the knowledge you provide." },
      { title: "Capture and qualify students", body: "Save each enquiry with the details that matter so follow-up is fast and personal." },
      { title: "Comment-to-DM for lead magnets", body: "Ask people to comment for the brochure, then auto-DM it to them." },
    ],
    example: {
      question: "when does the next batch start and what are the fees?",
      answer: "The next batch starts 1 August 📚 Fees are ₹18,000 with an EMI option. Want me to send the syllabus and a link to apply?",
    },
  },
];

export function getUseCase(slug: string): UseCase | undefined {
  return USE_CASES.find((u) => u.slug === slug);
}
