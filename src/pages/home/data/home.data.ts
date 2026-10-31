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
  ["8+", "production apps shipped"],
  ["Full Stack", "MERN & Next.js in one"],
  ["1,000+", "users on active portals"],
  ["100%", "on-time milestone delivery"],
];

export const faqList: FaqItem[] = [
  ["Will it be delivered on time?", "Yes. I plan every project in structured milestones and deliver on schedule with continuous progress updates."],
  ["Will my site be fast?", "Speed is non-negotiable for conversions. I use Next.js Server-Side Rendering (SSR), asset optimization, and TanStack Query caching so your pages load instantaneously, lowering bounce rates and ranking higher on Google."],
  ["Will I be stuck in endless revisions?", "I scope and lock requirements first, share interactive milestones, and test thoroughly before handover so you launch smoothly without delays."],
  ["Do I need a separate backend developer?", "No. I build the React front end and the Node, Express and MongoDB back end myself, saving you the complexity and cost of multiple hires."],
  ["Will we communicate clearly?", "You talk directly with me. I work with international clients and distributed teams, providing transparent updates in English or Urdu."],
  ["Will it match my design?", "I turn Figma and UI mockups into pixel-accurate, responsive React and Next.js applications across mobile, tablet, and desktop."],
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
    "Next.js (App & Pages Router)",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Redux Toolkit",
    "TanStack Query",
    "Zustand",
    "Shadcn/UI",
    "Framer Motion",
    "Responsive UI/UX",
    "HTML5 & Semantic SEO",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "MongoDB & Mongoose",
    "RESTful API Design",
    "JWT & Session Authentication",
    "Role-Based Access Control (RBAC)",
    "CRUD Operations",
    "Middleware & Error Handling",
    "Database Optimization",
  ],
  Tools: [
    "Git & GitHub",
    "Postman & API Testing",
    "Vercel Cloud Deployment",
    "Figma to Code (Pixel-Perfect)",
    "Agile / Scrum Methodology",
    "Chrome DevTools & Profiling",
    "npm / yarn / pnpm",
    "VS Code & AI-Assisted Workflows",
  ],
};

export const jobsList: JobItem[] = [
  [
    "Full Stack MERN Developer",
    "Faucon IMC, Dubai (Remote)",
    "2026 – Present",
    "Architecting and shipping production web applications, enterprise dashboards, and secure RESTful backend APIs with Next.js, Node.js, Express, and MongoDB.",
  ],
  [
    "MERN Stack Software Engineer",
    "WebixSolutions",
    "Feb – May 2026",
    "Spearheaded end-to-end development of 5+ production web apps from requirement scoping to cloud deployment with 100% on-time milestone delivery.",
  ],
  [
    "Full-Stack Web Developer",
    "The WebStep, Remote",
    "2025 – Present",
    "Delivered bespoke web platforms for North American and European clients, leveraging Next.js SSR, TanStack Query, and optimized database queries for blazing-fast performance.",
  ],
  [
    "React / Front-End Developer",
    "Hikenseek, Islamabad",
    "Nov 2024 – Nov 2025",
    "Engineered role-based administrative dashboards serving 1,000+ active users and integrated 10+ secure REST API endpoints with automated error handling.",
  ],
  [
    "Front-End Web Developer",
    "Tech Mentors, Islamabad",
    "Aug 2023 – Feb 2024",
    "Developed and deployed 10+ high-performing commercial websites in rapid sprint cycles with responsive design systems, semantic HTML5, and modern JavaScript.",
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
