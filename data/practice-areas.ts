export interface PracticeArea {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  expertise: string[];
  icon: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "corporate-litigation",
    title: "Corporate Litigation",
    shortDescription:
      "High-stakes dispute resolution for complex business conflicts",
    fullDescription:
      "Our corporate litigation practice represents companies and executives in the most challenging business disputes. We handle securities litigation, shareholder disputes, breach of contract claims, and business torts. Our team combines deep industry knowledge with courtroom excellence to achieve favorable outcomes in matters ranging from multi-million dollar contract disputes to bet-the-company litigation.",
    expertise: [
      "Securities Litigation",
      "Shareholder Disputes",
      "Breach of Contract",
      "Business Torts",
      "M&A Litigation",
      "Joint Venture Disputes",
    ],
    icon: "building-2",
  },
  {
    id: "international-arbitration",
    title: "International Arbitration",
    shortDescription:
      "Cross-border dispute resolution before major arbitration institutions",
    fullDescription:
      "We represent clients in international commercial and investment arbitration proceedings worldwide. Our team has extensive experience before ICC, ICSID, LCIA, and other leading arbitration institutions. We handle disputes involving construction, energy, telecommunications, intellectual property, and investment treaties, bringing multilingual capabilities and cross-cultural expertise to every matter.",
    expertise: [
      "ICC Arbitration",
      "ICSID Proceedings",
      "Investment Treaty Disputes",
      "Energy & Construction Arbitration",
      "International Commercial Disputes",
      "Enforcement of Awards",
    ],
    icon: "globe-2",
  },
  {
    id: "regulatory-compliance",
    title: "Regulatory Compliance",
    shortDescription:
      "Strategic counsel for navigating complex regulatory landscapes",
    fullDescription:
      "Our regulatory compliance practice helps clients navigate the increasingly complex web of federal and state regulations. We advise on compliance program design, internal investigations, voluntary disclosures, and regulatory inquiries. Our team includes former government officials who bring insider perspectives on regulatory enforcement priorities and strategies.",
    expertise: [
      "SEC & Financial Regulations",
      "Anti-Money Laundering (AML)",
      "Foreign Corrupt Practices Act (FCPA)",
      "Healthcare Compliance",
      "Environmental Regulations",
      "Export Control & Sanctions",
    ],
    icon: "scale",
  },
  {
    id: "white-collar-defense",
    title: "White-Collar Defense",
    shortDescription:
      "Defending executives and corporations in criminal investigations",
    fullDescription:
      "We defend corporations and individuals in white-collar criminal investigations and prosecutions. Our team includes former federal prosecutors who understand how the government builds cases. We handle matters involving fraud, bribery, insider trading, tax evasion, and other financial crimes, providing strategic defense from the earliest stages of investigation through trial and appeal.",
    expertise: [
      "Securities Fraud",
      "Wire & Mail Fraud",
      "FCPA Violations",
      "Insider Trading",
      "Tax Crimes",
      "Government Investigations",
    ],
    icon: "shield-check",
  },
  {
    id: "antitrust",
    title: "Antitrust & Competition",
    shortDescription:
      "Navigating competition law in mergers, investigations, and litigation",
    fullDescription:
      "Our antitrust practice counsels clients on all aspects of competition law. We represent companies in merger reviews, defend against government investigations, and litigate antitrust claims. Our economists and lawyers work together to provide sophisticated analysis of market dynamics and competitive effects, helping clients achieve their business objectives while managing antitrust risk.",
    expertise: [
      "Merger Control",
      "Cartel Defense",
      "Price-Fixing Allegations",
      "Market Dominance Issues",
      "Vertical Restraints",
      "Competition Compliance",
    ],
    icon: "trending-up",
  },
  {
    id: "technology-cyber",
    title: "Technology & Cybersecurity",
    shortDescription:
      "Legal solutions for digital age challenges and data protection",
    fullDescription:
      "We advise technology companies and enterprises on cybersecurity, data privacy, and digital transformation legal issues. Our practice covers data breach response, privacy regulation compliance (GDPR, CCPA), technology transactions, and litigation involving emerging technologies. We help clients navigate the intersection of law and technology in areas including AI, blockchain, and cloud computing.",
    expertise: [
      "Data Breach Response",
      "GDPR & CCPA Compliance",
      "Cybersecurity Litigation",
      "AI & Machine Learning Law",
      "Intellectual Property Protection",
      "Technology Transactions",
    ],
    icon: "cpu",
  },
];
