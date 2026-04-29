export interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}