import React from "react";
import LegalPage from "@/components/LegalPage";

const intro = [
  {
    p: 'Welcome to Actalink, operated by Actalink Limited ("Actalink", "we", "our", or "us").',
  },
  {
    p: 'These Terms of Service ("Terms") govern your access to and use of the Actalink website located at https://acta.link, together with any content, documentation, blog articles, developer resources, newsletters, videos, APIs made available through the website, and other informational materials published by Actalink (collectively, the "Website").',
  },
  {
    p: "By accessing or using the Website, you agree to these Terms. If you do not agree, you should not use the Website.",
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
    p: "Actalink itself does not provide payment services, custody services, wallet services, exchange services, banking services, money transmission services, brokerage services, investment services, or any regulated financial services.",
  },

  { h2: "2. Purpose of the Website" },
  { p: "The Website is intended to:" },
  {
    ul: [
      "provide information about Actalink;",
      "publish educational content;",
      "share industry insights;",
      "provide developer documentation;",
      "introduce products developed by Actalink;",
      "publish company announcements; and",
      "provide contact information.",
    ],
  },
  { p: "The Website is informational only." },
  {
    p: "Nothing on the Website constitutes financial, investment, legal, accounting, tax, or regulatory advice.",
  },

  { h2: "3. Actalink Products" },
  {
    p: "Actalink develops multiple software products, including but not limited to:",
  },
  { ul: ["ActaPay", "Bexo", "Straight", "OpenDeposit"] },
  {
    p: "Each product operates under its own legal documentation, including its own:",
  },
  {
    ul: [
      "Terms of Service",
      "Privacy Policy",
      "Cookie Policy (where applicable)",
      "Product-specific disclosures",
    ],
  },
  {
    p: "Your use of any product is governed exclusively by that product's own legal agreements.",
  },
  {
    p: "These Terms apply only to the Actalink corporate website and related informational resources.",
  },

  { h2: "4. Educational Content" },
  {
    p: "Actalink publishes blog posts, articles, videos, research, newsletters, whitepapers and other educational materials.",
  },
  {
    p: "These materials are provided solely for general informational and educational purposes.",
  },
  { p: "They should not be interpreted as:" },
  {
    ul: [
      "investment advice;",
      "financial advice;",
      "legal advice;",
      "tax advice;",
      "trading recommendations;",
      "professional advice of any kind.",
    ],
  },
  { p: "You remain solely responsible for your own decisions." },

  { h2: "5. Third-Party Information" },
  { p: "Our educational content may discuss:" },
  {
    ul: [
      "blockchain networks;",
      "digital assets;",
      "stablecoins;",
      "payment providers;",
      "regulatory developments;",
      "financial technology companies;",
      "third-party products and services.",
    ],
  },
  {
    p: "Such information may rely on publicly available information, external publications, regulatory announcements, research reports, news sources, or other third-party materials believed to be reliable at the time of publication.",
  },
  {
    p: "Actalink does not guarantee the completeness, accuracy, timeliness, or continued availability of third-party information.",
  },
  {
    p: "Opinions expressed in articles reflect information available when published and may change without notice.",
  },

  { h2: "6. No Endorsement" },
  {
    p: "References to third-party companies, products, protocols, blockchains, organisations, trademarks, or services do not constitute an endorsement, partnership, recommendation, or approval unless expressly stated.",
  },

  { h2: "7. Intellectual Property" },
  { p: "Unless otherwise stated, the Website and its contents, including:" },
  {
    ul: [
      "text;",
      "graphics;",
      "logos;",
      "branding;",
      "software;",
      "documentation;",
      "videos;",
      "designs;",
      "images;",
      "source code;",
      "APIs; and",
      "other materials,",
    ],
  },
  {
    p: "are owned by or licensed to Actalink Limited and are protected by applicable intellectual property laws.",
  },
  {
    p: "You may not reproduce, distribute, modify, publish, reverse engineer, or create derivative works without prior written permission except where permitted by law.",
  },

  { h2: "8. Acceptable Use" },
  { p: "You agree not to:" },
  {
    ul: [
      "use the Website unlawfully;",
      "interfere with the Website's operation;",
      "attempt unauthorised access to systems;",
      "distribute malware or harmful code;",
      "scrape the Website in violation of applicable law;",
      "infringe intellectual property rights;",
      "impersonate another person or organisation.",
    ],
  },

  { h2: "9. Links to Third-Party Websites" },
  { p: "The Website may contain links to third-party websites or services." },
  { p: "Actalink does not control and is not responsible for:" },
  {
    ul: [
      "third-party websites;",
      "third-party products;",
      "external content;",
      "privacy practices;",
      "terms of service;",
      "security practices.",
    ],
  },
  {
    p: "Your use of third-party websites is governed solely by their own terms and policies.",
  },

  { h2: "10. No Warranties" },
  { p: 'The Website is provided on an "as is" and "as available" basis.' },
  {
    p: "To the fullest extent permitted by law, Actalink disclaims all warranties, whether express, implied, statutory, or otherwise, including warranties relating to:",
  },
  {
    ul: [
      "availability;",
      "accuracy;",
      "fitness for a particular purpose;",
      "merchantability;",
      "non-infringement.",
    ],
  },
  { p: "We do not guarantee uninterrupted or error-free operation." },

  { h2: "11. Limitation of Liability" },
  {
    p: "To the fullest extent permitted by applicable law, Actalink Limited and its directors, officers, employees, contractors, and affiliates shall not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages arising from or relating to your use of the Website.",
  },
  {
    p: "Nothing in these Terms excludes liability that cannot legally be excluded under applicable law.",
  },

  { h2: "12. Privacy" },
  {
    p: "Our handling of personal information collected through the Website is described in the Actalink Privacy Policy.",
  },
  {
    p: "Each Actalink product maintains its own privacy documentation governing that product.",
  },

  { h2: "13. Changes to these Terms" },
  { p: "We may update these Terms from time to time." },
  {
    p: "The updated version becomes effective upon publication on the Website.",
  },
  {
    p: "Your continued use of the Website constitutes acceptance of the updated Terms.",
  },

  { h2: "14. Governing Law" },
  { p: "These Terms are governed by the laws of England and Wales." },
  {
    p: "Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales, unless applicable law provides otherwise.",
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
  { p: "Website: https://acta.link" },
  {
    p: "For legal enquiries relating to these Terms, please contact us at: Sumit@acta.link",
  },
];

export default function Terms() {
  return (
    <LegalPage
      testId="terms-page"
      path="/terms"
      title="Terms of Service"
      effectiveDate="25 July 2026"
      intro={intro}
      sections={sections}
    />
  );
}
