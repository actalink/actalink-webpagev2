import React from "react";
import LegalPage from "@/components/LegalPage";

const intro = [
  {
    p: 'Welcome to Actalink, operated by Actalink Limited ("Actalink", "we", "our", or "us").',
  },
  {
    p: 'This Privacy Policy explains how Actalink collects, uses, stores, shares, and protects personal information when you access or use the Actalink website located at https://acta.link, together with any content, documentation, blog articles, developer resources, newsletters, videos, contact forms, and other informational materials published by Actalink (collectively, the "Website").',
  },
  { p: "This Privacy Policy applies only to the Actalink corporate website." },
  {
    p: "Each Actalink product, including ActaPay, Bexo, Straight, and OpenDeposit, maintains its own Privacy Policy governing the collection and processing of personal information within those products.",
  },
  {
    p: "By accessing or using the Website, you acknowledge that your personal information will be processed in accordance with this Privacy Policy.",
  },
];

const sections = [
  { h2: "1. About Actalink" },
  { p: "Actalink Limited is a company incorporated in England and Wales." },
  { h3: "Registered Office" },
  {
    address: [
      "249 High Street North",
      "Suite 18 Equity Chambers",
      "Poole",
      "United Kingdom",
      "BH15 1DX",
    ],
  },
  { p: "Company Number: 16721577" },
  {
    p: "Actalink is a technology company that develops software infrastructure for programmable money and digital asset payments.",
  },
  {
    p: "Actalink itself does not provide payment services, custody services, wallet services, exchange services, banking services, money transmission services, brokerage services, investment services, or any regulated financial services through this Website.",
  },

  { h2: "2. Information We Collect" },
  { p: "When you use the Website, we may collect the following information." },
  { h3: "Information You Provide" },
  { p: "You may voluntarily provide information when you:" },
  {
    ul: [
      "contact us;",
      "subscribe to newsletters or updates;",
      "submit enquiries;",
      "request information about our products or services.",
    ],
  },
  { p: "This information may include:" },
  {
    ul: [
      "name;",
      "email address;",
      "company name;",
      "any information you include in your message.",
    ],
  },
  { h3: "Automatically Collected Information" },
  {
    p: "When you visit the Website, we may automatically collect technical information, including:",
  },
  {
    ul: [
      "IP address;",
      "browser type;",
      "operating system;",
      "device information;",
      "pages visited;",
      "referring website;",
      "approximate geographic location;",
      "date and time of access.",
    ],
  },
  {
    p: "This information is used to help operate, secure, and improve the Website.",
  },

  { h2: "3. How We Use Your Information" },
  { p: "We use personal information to:" },
  {
    ul: [
      "operate and maintain the Website;",
      "respond to enquiries;",
      "provide requested information;",
      "improve Website performance and user experience;",
      "analyse Website usage;",
      "protect against fraud, abuse, and security threats;",
      "comply with legal obligations.",
    ],
  },
  { p: "We do not sell your personal information." },

  { h2: "4. Legal Basis for Processing" },
  {
    p: "Where UK GDPR applies, we process personal information based on one or more of the following legal grounds:",
  },
  {
    ul: [
      "your consent;",
      "our legitimate interests in operating and improving the Website;",
      "performance of a contract where applicable;",
      "compliance with legal obligations.",
    ],
  },

  { h2: "5. Cookies and Analytics" },
  { p: "The Website may use cookies and similar technologies to:" },
  {
    ul: [
      "remember user preferences;",
      "improve Website functionality;",
      "measure Website traffic;",
      "understand how visitors use the Website;",
      "maintain Website security.",
    ],
  },
  {
    p: "You may manage or disable cookies through your browser settings. Some Website features may not function correctly if cookies are disabled.",
  },

  { h2: "6. Third-Party Services" },
  {
    p: "The Website may use third-party service providers for services such as:",
  },
  {
    ul: [
      "website hosting;",
      "analytics;",
      "email communications;",
      "embedded videos;",
      "content delivery;",
      "security monitoring.",
    ],
  },
  {
    p: "These providers may process personal information on our behalf under appropriate contractual and security obligations.",
  },

  { h2: "7. External Links" },
  {
    p: "The Website may contain links to third-party websites, including social media platforms, developer resources, partner websites, and other external content.",
  },
  {
    p: "Our Website, including our blog, may reference or link to publicly available articles, research, reports, regulatory publications, news sources, videos, and other third-party materials for informational and educational purposes.",
  },
  {
    p: "We are not responsible for the privacy practices, security, accuracy, or content of any third-party websites or resources. Your use of those websites is governed by their own privacy policies and terms.",
  },

  { h2: "8. Blog and Educational Content" },
  {
    p: "Actalink publishes articles, industry commentary, research, educational materials, and other informational content.",
  },
  {
    p: "Some content may reference or rely upon publicly available information from third-party sources believed to be reliable at the time of publication.",
  },
  {
    p: "Such references do not imply endorsement, partnership, or verification of third-party content.",
  },

  { h2: "9. Data Retention" },
  {
    p: "We retain personal information only for as long as reasonably necessary to:",
  },
  {
    ul: [
      "respond to enquiries;",
      "provide requested information;",
      "operate the Website;",
      "comply with legal obligations;",
      "resolve disputes;",
      "protect our legal rights.",
    ],
  },

  { h2: "10. International Transfers" },
  {
    p: "Your information may be processed in countries outside your country of residence.",
  },
  {
    p: "Where required, we implement appropriate safeguards, including contractual protections and other measures recognised under applicable data protection laws.",
  },

  { h2: "11. Data Security" },
  {
    p: "We implement reasonable technical and organisational measures designed to protect personal information against unauthorised access, loss, misuse, alteration, or disclosure.",
  },
  {
    p: "While no internet-based service can guarantee absolute security, we continuously work to maintain appropriate security standards.",
  },

  { h2: "12. Your Rights" },
  { p: "Depending on applicable law, you may have the right to:" },
  {
    ul: [
      "access your personal information;",
      "request correction of inaccurate information;",
      "request deletion of your personal information;",
      "object to or restrict certain processing;",
      "withdraw consent where processing is based on consent;",
      "request a copy of your information;",
      "lodge a complaint with your local data protection authority.",
    ],
  },
  { p: "To exercise your rights, please contact us using the details below." },

  { h2: "13. Children's Privacy" },
  { p: "The Website is not intended for individuals under the age of 18." },
  { p: "We do not knowingly collect personal information from children." },

  { h2: "14. Changes to this Privacy Policy" },
  { p: "We may update this Privacy Policy from time to time." },
  {
    p: 'Any updates will be published on this page with a revised "Last Updated" date.',
  },
  {
    p: "Your continued use of the Website after any changes become effective constitutes acceptance of the updated Privacy Policy.",
  },

  { h2: "15. Contact" },
  {
    address: [
      "Actalink Limited",
      "249 High Street North",
      "Suite 18 Equity Chambers",
      "Poole",
      "United Kingdom",
      "BH15 1DX",
    ],
  },
  { p: "Email: sumit@acta.link" },
  { p: "Website: https://acta.link" },
];

export default function Privacy() {
  return (
    <LegalPage
      testId="privacy-page"
      path="/privacy"
      title="Privacy Policy"
      effectiveDate="25 July 2026"
      intro={intro}
      sections={sections}
    />
  );
}
