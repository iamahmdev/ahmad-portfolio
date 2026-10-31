import {
  ProofStat,
  FaqItem,
  ServiceItem,
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

export const servicesList: ServiceItem[] = [
  ["Full-Stack Web Applications", "End-to-end custom web apps built with modern React, Next.js, and Node.js. Fast, secure, and ready to scale with your business."],
  ["Next.js Business Websites", "High-converting, SEO-optimized websites with smooth animations that load fast, rank on Google, and win you real customers."],
  ["Technical Writing & Daily Articles", "In-depth tech blogs, programming tutorials, and daily articles to build your brand authority and explain complex concepts simply."],
  ["Dashboards & Management Portals", "Custom admin panels, client portals, and real-time management dashboards designed for team productivity and smooth workflows."],
  ["Figma to Interactive Code", "Pixel-perfect conversion of your Figma, Adobe XD, or Sketch designs into clean, responsive, and mobile-friendly web interfaces."],
  ["AI Integration & Automation", "Smart AI assistants, automated customer workflows, and modern intelligent features integrated directly into your existing web apps."],
];

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
    "WebixSolutions, Lahore",
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
  [
    "University Portal",
    "A full-stack portal handling student data and workflows, with REST APIs connecting React to Express and MongoDB.",
    ["React", "Node", "Express", "MongoDB"],
  ],
  [
    "School LMS",
    "Teachers manage courses, assignments and grades; students track lessons and submit work. Role-based dashboards with real-time updates.",
    ["React", "Node", "Express", "MongoDB"],
  ],
  [
    "Card Management Dashboard",
    "Secure role-based dashboard for 1,000+ global users, built from 20+ Figma screens.",
    ["Next.js", "Tailwind", "MUI"],
  ],
  [
    "Tapwise Digital",
    "Next.js SSR with TanStack Query: 40% faster page loads and 25% fewer bugs.",
    ["Next.js", "TypeScript", "Framer Motion"],
  ],
];

export default function HomeDataStub() {
  return null;
}
