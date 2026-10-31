import {
  ProofStat,
  FaqItem,
  ServiceItem,
  ServiceItemDetailed,
  StepItem,
  AboutPillar,
  JobItem,
  ProjectItem,
  SkillsData,
} from "../types/home.types";

export const proofStats: ProofStat[] = [
  ["5+", "apps delivered on schedule"],
  ["40%", "faster page loads"],
  ["1,000+", "users on my dashboards"],
  ["0", "post-launch revision cycles"],
];

export const faqList: FaqItem[] = [
  ["Will it be delivered on time?", "Yes. I planned and shipped 5+ production apps on schedule at WebixSolutions."],
  ["Will my site be fast?", "Speed is built in. Next.js SSR with TanStack Query made one client’s pages load 40% faster."],
  ["Will I be stuck in endless revisions?", "I gather requirements first and test every feature before handover. Those 5+ apps had zero post-launch revision cycles."],
  ["Do I need a separate backend developer?", "No. I build the React front end and the Node, Express and MongoDB back end myself."],
  ["Will we communicate clearly?", "You talk to me directly. I work remotely with a Dubai-based team and international clients, in English or Urdu."],
  ["Will it match my design?", "I turn Figma into pixel-accurate, responsive React. 20+ screens delivered."],
];

export const aboutPillars: AboutPillar[] = [
  ["Requirements first", "I talk to clients directly, plan with design and backend teams, then build, test and deliver each feature."],
  ["Clean, maintainable code", "Reusable component libraries, structured Git workflows and code reviews for a 5-person team."],
  ["Remote ready", "Working with a Dubai-based team and international clients. Urdu native, professional English."],
];

export const servicesListDetailed: ServiceItemDetailed[] = [
  {
    id: "web-design-dev",
    title: "Website Design & Development",
    description: "Modern, high-converting websites designed to impress visitors and represent your brand with perfection.",
    features: [
      "Business websites",
      "Portfolio websites",
      "Landing pages",
      "Corporate websites",
    ],
    icon: "layout",
  },
  {
    id: "ecommerce-dev",
    title: "E-commerce Development",
    description: "End-to-end digital storefronts built for seamless shopping, high conversions, and effortless store management.",
    features: [
      "Online shopping stores",
      "Product & inventory management",
      "Shopping carts & checkout systems",
      "Payment gateway integration",
    ],
    icon: "shopping-bag",
  },
  {
    id: "custom-web-apps",
    title: "Custom Web Application Development",
    description: "Tailored business software and management portals engineered for performance, security, and scalability.",
    features: [
      "CRM systems",
      "Admin dashboards",
      "Booking & appointment systems",
      "Business management applications",
    ],
    icon: "layers",
  },
  {
    id: "backend-api-dev",
    title: "Backend & API Development",
    description: "High-throughput server architectures, secure APIs, and optimized databases built with Node.js and MongoDB.",
    features: [
      "Node.js & Express.js development",
      "REST API development",
      "Authentication & authorization",
      "Database design & integration",
    ],
    icon: "server",
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description: "Pixel-accurate, animated, and accessible user interfaces built with React.js, TypeScript, and modern CSS.",
    features: [
      "React.js applications",
      "Responsive user interfaces",
      "Reusable components",
      "Interactive web experiences",
    ],
    icon: "code",
  },
  {
    id: "api-integration",
    title: "Third-Party API Integration",
    description: "Connecting your web app with industry-standard payment providers, cloud services, and external APIs.",
    features: [
      "Payment gateway integration",
      "Google Maps integration",
      "Social media API integration",
      "Email services & external APIs",
    ],
    icon: "plug",
  },
  {
    id: "optimization-maintenance",
    title: "Website Optimization & Maintenance",
    description: "Keeping your website blazing fast, fully secured, bug-free, and running smoothly 24/7.",
    features: [
      "Website performance optimization",
      "Bug fixing & troubleshooting",
      "Responsive design improvements",
      "Ongoing website maintenance",
    ],
    icon: "gauge",
  },
  {
    id: "seo-web-dev",
    title: "SEO-Friendly Web Development",
    description: "Building websites that search engines love, driving organic rankings and qualified customer traffic.",
    features: [
      "Technical SEO implementation",
      "Meta titles & descriptions",
      "Semantic HTML structure",
      "Sitemap & robots.txt configuration",
    ],
    icon: "search",
  },
];

export const servicesList: ServiceItem[] = servicesListDetailed.map((s) => [
  s.title,
  s.description,
]);

export const stepsList: StepItem[] = [
  ["Requirements", "We talk through your goals, users and deadline."],
  ["Build", "I plan the structure and build with React, Next.js and Node."],
  ["Test", "Every feature is tested and problems are solved before handover."],
  ["Deliver", "You launch on schedule with clean code that is easy to maintain."],
];

export const skillsList: SkillsData = {
  Frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript ES6+",
    "Redux Toolkit",
    "TanStack Query",
    "Zustand",
    "Tailwind CSS",
    "MUI",
    "Chakra UI",
    "Shadcn/UI",
    "Framer Motion",
  ],
  Backend: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
  Tools: ["Git/GitHub", "Postman", "Vercel", "Figma", "Agile/Scrum", "Claude", "Cursor", "Lovable"],
};

export const jobsList: JobItem[] = [
  [
    "MERN Stack Developer (Part-time)",
    "Faucon IMC, Dubai",
    "2026 – now",
    "Building responsive interfaces and REST APIs with React, Node, Express and MongoDB.",
  ],
  [
    "Front-End / MERN Developer",
    "WebixSolutions",
    "Feb – May 2026",
    "Planned and shipped 5+ production apps on schedule with zero post-launch revision cycles.",
  ],
  [
    "Front-End Developer (Part-time)",
    "The WebStep, Remote",
    "2025 – now",
    "3+ international client sites. Next.js SSR and TanStack Query gave 40% faster loads and 25% fewer bugs.",
  ],
  [
    "Junior Front-End Developer",
    "Hikenseek, Islamabad",
    "Nov 2024 – Nov 2025",
    "Built role-based dashboards for 1,000+ users and integrated 10+ REST APIs.",
  ],
  [
    "Intern to Front-End Developer",
    "Tech Mentors, Islamabad",
    "Aug 2023 – Feb 2024",
    "Delivered 10+ websites in 2-week sprints. Promoted within 3 months.",
  ],
];

export const projectsList: ProjectItem[] = [
  {
    id: "softcore-technologies",
    title: "Softcore Technologies",
    description:
      "Modern corporate enterprise platform showcasing custom software development, digital marketing, mobile app engineering, and cloud infrastructure services.",
    image: "/projects/softcore.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "TanStack Query", "Vite"],
    category: "Enterprise Software",
  },
  {
    id: "the-book-today",
    title: "The Book Today",
    description:
      "Comprehensive travel and hospitality reservation platform for booking flights, hotels, car rentals, and city transfers with intuitive filtering.",
    image: "/projects/thebooktoday.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "TanStack Query", "Vite"],
    category: "Travel & Hospitality",
  },
  {
    id: "townexis",
    title: "Townexis",
    description:
      "On-demand roadside assistance, vehicle towing, snow clearing, and heavy-duty junk removal contractor platform serving St. John's, NL.",
    image: "/projects/townexis.jpg",
    tags: ["React", "TypeScript", "TanStack Router", "Tailwind CSS", "Radix UI", "Vite"],
    category: "On-Demand Services",
  },
  {
    id: "sksecure-website",
    title: "SKSecureData",
    description:
      "Calgary-based enterprise data security, enterprise database management, regulatory compliance audits, and business intelligence reporting platform.",
    image: "/projects/sksecure.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide Icons", "Vite"],
    liveUrl: "https://sk-secure-website.vercel.app",
    category: "Data & Cybersecurity",
  },
  {
    id: "pscybercore",
    title: "PSCyberCore",
    description:
      "Cutting-edge automotive IT infrastructure, cybersecurity defense, fleet tracking technology, and digital telemetry solutions for vehicle enterprises.",
    image: "/projects/pscybercore.jpg",
    tags: ["React", "TypeScript", "TanStack Router", "Framer Motion", "Tailwind CSS", "Vite"],
    category: "Automotive & Cyber",
  },
  {
    id: "core-space-warehousing",
    title: "Core Space Warehousing",
    description:
      "Nationwide industrial warehousing platform providing flexible short-term and long-term climate-controlled storage and distribution logistics across Canada.",
    image: "/projects/corespace.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "TanStack Query", "Vite"],
    category: "Logistics & Storage",
  },
  {
    id: "camz-cleaning",
    title: "CAMZ Cleaning",
    description:
      "Professional residential, commercial, carpet, and vehicle cleaning service portal featuring online booking calculators, quote generators, and service tiers.",
    image: "/projects/camzcleaning.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Embla Carousel", "Vite"],
    liveUrl: "https://camz-cleaning.vercel.app",
    category: "Commercial Services",
  },
  {
    id: "jain-and-associates",
    title: "Jain & Associates",
    description:
      "Corporate supply-chain advisory, retail logistics, and commercial storage solutions platform serving food & beverage, industrial, and global trade sectors.",
    image: "/projects/jainassociates.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "TanStack Query", "Vite"],
    category: "Supply Chain & Logistics",
  },
];

export default function HomeDataStub() {
  return null;
}
