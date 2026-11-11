export type ProofStat = [value: string, label: string];

export type FaqItem = [question: string, answer: string];

export type ServiceItem = [title: string, description: string];

export interface ServiceItemDetailed {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export type StepItem = [title: string, description: string];

export type AboutPillar = [title: string, description: string];

export type JobItem = [role: string, company: string, period: string, description: string];

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export interface SkillsData {
  Frontend: string[];
  Backend: string[];
  Tools: string[];
}

export default function HomeTypesStub() {
  return null;
}
