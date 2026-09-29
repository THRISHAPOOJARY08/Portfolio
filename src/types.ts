export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  overview: string;
  technologies: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  architecture: string;
  challenges: string;
  category: 'Smart Agriculture' | 'Enterprise Systems' | 'Academic Analytics';
  githubUrl?: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    details: string;
    iconName?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  highlights: string[];
  coursework?: string[];
  current?: boolean;
}
