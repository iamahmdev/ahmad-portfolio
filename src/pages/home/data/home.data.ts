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
  ["25+", "web apps delivered"],
  ["~30%", "manual tracking time cut with CRM"],
  ["~40%", "faster build time via modular React components"],
  ["100%", "on-time milestone delivery"],
];

export const faqList: FaqItem[] = [
  ["Will it be delivered on time?", "Yes. I plan every project in structured milestones and deliver on schedule with continuous progress updates."],
  ["Will my site be fast?", "Speed is non-negotiable for conversions. I use Next.js Server-Side Rendering (SSR), asset optimization, and TanStack Query caching so your pages load instantaneously."],
  ["Do I need a separate backend developer?", "No. As a full-stack MERN engineer, I build the React/Next.js frontend and the Node.js/Express/MongoDB backend myself."],
  ["Will we communicate clearly?", "You talk directly with me. I work with international clients and distributed teams, providing transparent updates in English or Urdu."],
];

export const aboutPillars: AboutPillar[] = [
  ["Requirements first", "I talk to clients directly, plan architecture and schemas, then build, test and deliver each feature."],
  ["Clean, maintainable code", "Reusable component libraries, structured Git workflows and modular patterns that cut build time by ~40%."],
  ["Remote ready", "Working with international clients and remote teams. Urdu native, professional English."],
];

export const servicesListDetailed: ServiceItemDetailed[] = [
  {
    id: "full-stack-web-apps",
    title: "Full Stack Web Applications",
    description: "Production-ready web applications built with Next.js, React, Node.js, and MongoDB from requirements to deployment.",
    features: ["CRM platforms", "Admin dashboards", "Client portals", "SaaS solutions"],
    icon: "layers",
  },
  {
    id: "frontend-dev",
    title: "Modern Frontend Engineering",
    description: "Pixel-perfect, accessible, and responsive user interfaces built with React, Next.js, and Tailwind CSS.",
    features: ["Component libraries", "Figma to Code", "State management", "Fast page loads"],
    icon: "code",
  },
  {
    id: "backend-api-dev",
    title: "RESTful API & Database Architecture",
    description: "Secure, authenticated backend microservices, REST APIs, and optimized MongoDB schemas.",
    features: ["JWT & RBAC authentication", "API integrations", "Data validation", "Database indexing"],
    icon: "server",
  },
];

export const servicesList: ServiceItem[] = servicesListDetailed.map((s) => [
  s.title,
  s.description,
]);

export const stepsList: StepItem[] = [
  ["Requirements", "We talk through your business goals, user journeys and delivery timeline."],
  ["Build", "I structure the database, backend APIs and build responsive React/Next.js interfaces."],
  ["Test", "Every module is tested, responsive across all screens, and verified before delivery."],
  ["Deploy", "You launch on schedule with clean, documented code that is easy to scale."],
];

export const skillsList: Record<string, string[]> = {
  Frontend: [
    "TypeScript",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "HTML5",
    "CSS3",
  ],
  "Styling & UI": [
    "Tailwind CSS",
    "Material UI (MUI)",
    "Responsive Design",
    "Figma to Code",
    "Modern Glassmorphism",
  ],
  "State & Data": [
    "Redux Toolkit",
    "Zustand",
    "Context API",
    "TanStack Query",
  ],
  "Backend & DB": [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "Authentication (JWT / RBAC)",
    "MongoDB & Mongoose",
  ],
  Tools: [
    "Git",
    "GitHub",
    "Postman",
    "Figma",
    "Vercel",
    "Jest",
  ],
  "AI-Assisted Dev": [
    "Vibe Coding",
    "Claude",
    "Cursor",
    "Antigravity",
    "GitHub Copilot",
    "Codex",
  ],
};

export const jobsList: JobItem[] = [
  [
    "MERN Stack Developer",
    "Khyber Coded, Peshawar",
    "2024 – 2026",
    "Delivered 15+ production websites and SaaS applications. Engineered internal CRM cutting daily manual tracking time by ~30%. Architected secure REST APIs and MongoDB schemas. Built reusable React component library, reducing new-module build time by ~40%. Deployed apps on Vercel with mobile-first Tailwind CSS.",
  ],
  [
    "Front-End Developer",
    "Webix Solutions (Remote)",
    "2022 – 2023",
    "Led client requirement scoping and technical architecture for 5+ SaaS web apps. Built responsive React.js and Next.js frontends integrated with REST APIs. Delivered live interactive client demos on Vercel and iterated rapidly based on stakeholder feedback.",
  ],
  [
    "Junior Front-End Developer",
    "Hikenseek, Islamabad",
    "2021 – 2022",
    "Developed 10+ responsive sites and role-based administrative dashboards with React.js, Next.js, Tailwind CSS and Material UI. Converted Figma designs into modular reusable components and handled API caching with TanStack Query.",
  ],
];

export const educationList = [
  {
    degree: "BS Software Engineering (BSSE)",
    institution: "Abasyn University, Peshawar",
    period: "Graduated",
  },
  {
    degree: "Master React.js & Modern Web Development",
    institution: "Tech Mentors Certification, Islamabad",
    period: "Certified",
  },
];

export const projectsList: ProjectItem[] = [
  {
    id: "hangu-branded-shoes",
    title: "Hangu Branded Shoes — E-Commerce",
    description:
      "Full-featured e-commerce online store featuring 50+ handcrafted footwear products, shopping cart, real-time order tracking, Cash on Delivery checkout, and an interactive 3D product view allowing customers to inspect shoes before purchasing.",
    image: "/projects/hangubrandedshoes.png",
    liveUrl: "https://hangubrandedshoes.vercel.app/",
    githubUrl: "https://github.com/iamahmdev/Hangu_Brand_Shoes",
    tags: ["MERN / Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "E-Commerce",
  },
  {
    id: "can-med-tech-college",
    title: "Can Med Tech College Website",
    description:
      "Responsive, modern academic platform for a medical and technical college with animated UI, program directories, and admissions inquiry workflows.",
    image: "/projects/canmedtech.png",
    liveUrl: "https://can-med-tech-college-ize4.vercel.app",
    githubUrl: "https://github.com/iamahmdev/CanMedTechCollege",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Vercel"],
    category: "Education & Corporate",
  },
  {
    id: "camz-cleaning",
    title: "CAMZ Cleaning Services Platform",
    description:
      "High-converting commercial cleaning services platform with instant online booking, interactive service tiers, custom quote calculation, and smooth responsive animations.",
    image: "/projects/camzcleaning.png",
    liveUrl: "https://camz-cleaning.vercel.app",
    githubUrl: "https://github.com/iamahmdev/Camz_Cleaning",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Vercel"],
    category: "On-Demand Services",
  },
  {
    id: "khyber-coded-crm",
    title: "Khyber Coded Internal CRM Platform",
    description:
      "Collaborative enterprise CRM engineered to streamline daily business operations, client pipelines, and internal task tracking, delivered module-by-module and cutting daily manual tracking time by ~30%.",
    image: "/projects/corespace.jpg",
    githubUrl: "https://github.com/iamahmdev/Khyber_Coded_CRM",
    tags: ["MERN Stack", "TypeScript", "REST APIs", "MongoDB", "Tailwind CSS"],
    category: "CRM & SaaS",
  },
  {
    id: "softcore-technologies",
    title: "Softcore Technologies Platform",
    description:
      "Enterprise technology portal showcasing digital marketing, mobile app engineering, custom software solutions, and cloud infrastructure services.",
    image: "/projects/softcore.jpg",
    githubUrl: "https://github.com/iamahmdev/Softcore_Technologies",
    tags: ["React", "TypeScript", "Tailwind CSS", "TanStack Query", "Vite"],
    category: "Enterprise Software",
  },
  {
    id: "the-book-today",
    title: "The Book Today Reservation Portal",
    description:
      "Comprehensive travel and hospitality reservation engine for booking flights, hotels, car rentals, and city transfers with intuitive filtering.",
    image: "/projects/thebooktoday.jpg",
    githubUrl: "https://github.com/iamahmdev/TheBookToday",
    tags: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "TanStack Query"],
    category: "Travel & Hospitality",
  },
];


export default function HomeDataStub() {
  return null;
}
