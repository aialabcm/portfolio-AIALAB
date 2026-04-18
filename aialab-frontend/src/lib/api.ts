import { Project } from "../types";
import { MOCK_PROJECTS } from "./mock-data";

export async function getProjects(): Promise<Project[]> {
  // Simuler un appel API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_PROJECTS);
    }, 500);
  });
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  // Simuler un appel API pour un projet spécifique
  return new Promise((resolve) => {
    setTimeout(() => {
      const project = MOCK_PROJECTS.find((p) => p.slug === slug);
      resolve(project);
    }, 300);
  });
}
