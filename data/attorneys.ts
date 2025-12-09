export interface Attorney {
  id: string;
  name: string;
  role: string;
  specialization: string[];
  bio: string;
  barAdmissions: string[];
  keyCases: string[];
  email: string;
  phone: string;
  image: string;
}

export const attorneys: Attorney[] = [
  {
    id: "michael-hartford",
    name: "Michael Hartford",
    role: "Managing Partner",
    specialization: [
      "Corporate Litigation",
      "White-Collar Defense",
      "Regulatory Compliance",
    ],
    bio: "Michael Hartford brings over 25 years of experience in high-stakes corporate litigation and white-collar defense. He has successfully represented Fortune 500 companies and executives in complex disputes involving securities fraud, antitrust violations, and regulatory investigations. His strategic approach combines rigorous legal analysis with business-minded solutions.",
    barAdmissions: ["New York", "District of Columbia", "California"],
    keyCases: [
      "Defended multinational corporation in $2.3B securities fraud litigation",
      "Represented executive in DOJ investigation, achieving non-prosecution agreement",
      "Successfully litigated antitrust dispute resulting in favorable settlement",
    ],
    email: "mhartford@justicefirm.com",
    phone: "+1 (212) 555-0101",
    image: "/images/attorneys/michael-hartford.jpg",
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "Senior Partner",
    specialization: [
      "International Arbitration",
      "Commercial Disputes",
      "Investment Treaty",
    ],
    bio: "Sarah Chen is a leading authority in international commercial arbitration with extensive experience in cross-border disputes. She has represented clients before major arbitration institutions including ICC, ICSID, and LCIA. Her multilingual capabilities and deep understanding of both common law and civil law systems make her uniquely positioned to handle complex international matters.",
    barAdmissions: ["New York", "England & Wales", "Hong Kong"],
    keyCases: [
      "Secured $450M arbitration award in ICC proceedings for energy sector client",
      "Successfully defended sovereign state in ICSID investment treaty dispute",
      "Represented technology company in multi-jurisdictional patent arbitration",
    ],
    email: "schen@justicefirm.com",
    phone: "+1 (212) 555-0102",
    image: "/images/attorneys/sarah-chen.jpg",
  },
  {
    id: "david-rothschild",
    name: "David Rothschild",
    role: "Partner",
    specialization: [
      "Regulatory Compliance",
      "Financial Services",
      "Government Investigations",
    ],
    bio: "David Rothschild advises financial institutions and corporations on complex regulatory matters and government investigations. Prior to joining Justice Law Firm, he served as Deputy Chief in the Enforcement Division of the SEC. His insider perspective on regulatory thinking provides clients with invaluable strategic advantages in navigating compliance challenges.",
    barAdmissions: ["New York", "District of Columbia"],
    keyCases: [
      "Guided global bank through DOJ and SEC parallel investigations",
      "Designed compliance program preventing regulatory sanctions",
      "Represented fintech company in groundbreaking cryptocurrency regulation matter",
    ],
    email: "drothschild@justicefirm.com",
    phone: "+1 (212) 555-0103",
    image: "/images/attorneys/david-rothschild.jpg",
  },
  {
    id: "elena-vasquez",
    name: "Elena Vasquez",
    role: "Partner",
    specialization: [
      "Complex Commercial Litigation",
      "Class Actions",
      "Appellate",
    ],
    bio: "Elena Vasquez is renowned for her courtroom prowess and analytical brilliance. She has successfully tried numerous high-profile cases and argued before federal appellate courts. Her meticulous preparation and persuasive advocacy have earned her recognition as one of the leading trial lawyers in the country.",
    barAdmissions: ["New York", "California", "Texas"],
    keyCases: [
      "Won landmark Supreme Court case establishing new precedent in contract law",
      "Defeated class certification in $1.8B consumer protection lawsuit",
      "Secured defense verdict in complex intellectual property trial",
    ],
    email: "evasquez@justicefirm.com",
    phone: "+1 (212) 555-0104",
    image: "/images/attorneys/elena-vasquez.jpg",
  },
  {
    id: "james-morrison",
    name: "James Morrison",
    role: "Partner",
    specialization: ["Antitrust", "Merger Litigation", "Competition Law"],
    bio: "James Morrison focuses his practice on antitrust litigation and merger challenges. He regularly advises clients on competition law issues and represents them in investigations by the FTC and DOJ. His economic acumen and legal expertise make him a formidable advocate in complex antitrust matters.",
    barAdmissions: ["New York", "District of Columbia"],
    keyCases: [
      "Successfully defended $15B merger against FTC challenge",
      "Represented defendants in multi-district antitrust litigation",
      "Obtained dismissal of price-fixing allegations in major industry case",
    ],
    email: "jmorrison@justicefirm.com",
    phone: "+1 (212) 555-0105",
    image: "/images/attorneys/james-morrison.jpg",
  },
  {
    id: "priya-patel",
    name: "Priya Patel",
    role: "Partner",
    specialization: ["Cybersecurity", "Data Privacy", "Technology Litigation"],
    bio: "Priya Patel is at the forefront of cybersecurity and data privacy law. She advises clients on GDPR, CCPA, and emerging privacy regulations worldwide. Her technical background in computer science combined with her legal expertise makes her an invaluable resource for technology companies facing complex data protection challenges.",
    barAdmissions: ["New York", "California"],
    keyCases: [
      "Defended technology company in landmark data breach litigation",
      "Guided Fortune 100 company through global privacy regulation compliance",
      "Represented client in first-of-its-kind AI liability case",
    ],
    email: "ppatel@justicefirm.com",
    phone: "+1 (212) 555-0106",
    image: "/images/attorneys/priya-patel.jpg",
  },
];
