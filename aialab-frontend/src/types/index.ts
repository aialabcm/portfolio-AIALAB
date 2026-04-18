export interface Project {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  imageUrl?: string; // Support for component transition
  category?: string;
  year?: string;
  technologies: string[];
  github_link: string;
  live_link: string;
  color?: string;
  gallery?: string[];
  structure?: { name: string; files: string[] }[];
}

