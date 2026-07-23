// Dummy blog content for Actalink. Theme: black / grey / white / indigo.
export const blogs = [
  {
    slug: "the-stablecoin-payment-stack-explained",
    title: "The stablecoin payment stack, explained",
    excerpt:
      "From storing assets to spending them anywhere, here's how the four layers of programmable money fit together into a single interoperable platform.",
    category: "Insights",
    date: "Dec 2, 2025",
    iso: "2025-12-02",
    readTime: "6 min read",
    author: "Actalink Team",
    cover: "linear-gradient(135deg,#4F46E5 0%,#818CF8 55%,#0A0A0A 140%)",
    content: [
      { p: "Stablecoins have quietly become one of the largest settlement rails in the world, moving trillions of dollars annually. Yet for most businesses and consumers, actually using them still feels fragmented — storing, funding, accepting and spending each live in a different silo." },
      { h2: "Four capabilities, one platform" },
      { p: "Actalink connects the full lifecycle of a stablecoin payment through four products that each stand on their own but compound when used together: Bexo (store), OpenDeposit (deposit), ActaPay (accept) and Straight (spend)." },
      { p: "The result is a single interoperable layer where value flows seamlessly from a self-custody wallet, into an application, across a merchant checkout, and out through a global card network — without leaving the ecosystem." },
      { h2: "Why interoperability matters" },
      { p: "Most companies solve exactly one part of this journey. By owning the interface layer across all four stages, Actalink removes the integration tax that normally sits between each step, and gives developers a consistent surface to build on." },
      { quote: "Each product can be adopted independently, but together they create a complete programmable money ecosystem." },
      { p: "That is the core thesis: the payment interface layer for stablecoins, built once and reused everywhere." },
    ],
  },
  {
    slug: "self-custody-is-the-future-of-consumer-finance",
    title: "Why self-custody is the future of consumer finance",
    excerpt:
      "Your keys, your funds. A look at how gasless self-custody wallets like Bexo make on-chain banking feel effortless for everyday users.",
    category: "Product",
    date: "Nov 24, 2025",
    iso: "2025-11-24",
    readTime: "5 min read",
    author: "Actalink Team",
    cover: "linear-gradient(135deg,#0A0A0A 0%,#1F2937 60%,#4F46E5 150%)",
    content: [
      { p: "Custody is the foundation of trust in any financial system. On-chain, self-custody flips the traditional model: instead of a bank holding your money, you hold it directly — with cryptographic guarantees rather than institutional promises." },
      { h2: "Removing the friction" },
      { p: "The historical blocker for self-custody has been usability: seed phrases, gas fees, and confusing network choices. Bexo abstracts these away with gasless transactions and multi-chain support, so users get ownership without the operational burden." },
      { h2: "Banking on-chain" },
      { p: "When storing, sending and receiving stablecoins feels as simple as a modern banking app, self-custody stops being a niche preference and becomes the default. That's the shift Bexo is built for." },
      { quote: "Store, manage and move digital assets — your keys, your funds." },
    ],
  },
  {
    slug: "accepting-stablecoins-in-store-merchant-guide",
    title: "Accepting stablecoins in-store: a merchant's guide",
    excerpt:
      "Payment links, subscriptions, invoices and POS — everything a merchant needs to accept stablecoin payments with instant settlement.",
    category: "Guides",
    date: "Nov 12, 2025",
    iso: "2025-11-12",
    readTime: "7 min read",
    author: "Actalink Team",
    cover: "linear-gradient(135deg,#4F46E5 0%,#0A0A0A 130%)",
    content: [
      { p: "For merchants, the promise of stablecoins is simple: lower fees, faster settlement, and access to a global customer base. ActaPay turns that promise into a production-ready checkout." },
      { h2: "Meet customers everywhere" },
      { p: "Whether you sell online or in a physical location, ActaPay covers the full surface: hosted payment links, recurring subscriptions, invoices, and a point-of-sale flow for tap-to-pay in store." },
      { h2: "Instant settlement" },
      { p: "Funds settle to the merchant instantly in stablecoins, removing the multi-day hold that traditional processors impose. Reconciliation becomes real-time rather than an end-of-month chore." },
      { quote: "One gateway for online, in-store, and everything in between." },
    ],
  },
  {
    slug: "instant-settlement-how-actapay-clears-payments",
    title: "Instant settlement: how ActaPay clears payments",
    excerpt:
      "A technical look at how stablecoin rails collapse the settlement window from days to seconds — and what that unlocks for cash flow.",
    category: "Engineering",
    date: "Oct 30, 2025",
    iso: "2025-10-30",
    readTime: "8 min read",
    author: "Actalink Team",
    cover: "linear-gradient(135deg,#1F2937 0%,#4F46E5 120%)",
    content: [
      { p: "Traditional card settlement is a batch process: authorise now, settle later. That gap is where cost, risk and complexity accumulate. Stablecoin rails let us rethink the model entirely." },
      { h2: "Authorise and settle in one step" },
      { p: "Because value moves on-chain at the moment of payment, authorisation and settlement can converge. ActaPay confirms the transfer, verifies finality on the relevant network, and marks the payment received — typically within seconds." },
      { h2: "What instant settlement unlocks" },
      { p: "Real-time cash flow, simpler accounting, and dramatically reduced counterparty risk. For high-volume merchants, it also means working capital is no longer trapped in transit." },
    ],
  },
  {
    slug: "spending-stablecoins-anywhere-with-straight",
    title: "Spending stablecoins anywhere with Straight",
    excerpt:
      "Straight is a stablecoin card network that lets users spend directly from self-custody wallets, anywhere card payments are accepted.",
    category: "Product",
    date: "Oct 18, 2025",
    iso: "2025-10-18",
    readTime: "4 min read",
    author: "Actalink Team",
    cover: "linear-gradient(135deg,#818CF8 0%,#4F46E5 45%,#0A0A0A 150%)",
    content: [
      { p: "The final step of the lifecycle is spending. Straight bridges on-chain balances with the existing global card acceptance network, so stablecoins become usable at millions of everyday touchpoints." },
      { h2: "Spend from self-custody" },
      { p: "Crucially, users spend directly from their own wallet. There's no need to pre-fund a custodial account — the balance stays under the user's control until the moment of payment." },
      { quote: "Spend anywhere card payments are accepted — straight from your wallet." },
    ],
  },
];

export const getBlog = (slug) => blogs.find((b) => b.slug === slug);
