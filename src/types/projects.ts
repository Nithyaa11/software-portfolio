export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}