import { Project, Service } from "./types";

const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL;

if (!WP_GRAPHQL_URL) {
  console.warn('WARNING: NEXT_PUBLIC_WP_GRAPHQL_URL is not defined. CMS data will not be available.');
}

const endpoint: string = WP_GRAPHQL_URL || '';

export async function fetchGraphQL(query: string, variables = {}) {
  if (!endpoint) {
    console.error('fetchGraphQL called but NEXT_PUBLIC_WP_GRAPHQL_URL is missing.');
    return null;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.error(`GraphQL fetch failed with status ${res.status}`);
      return null;
    }

    const json = await res.json();

    if (json.errors) {
      console.error(JSON.stringify(json.errors, null, 2));
      return null; 
    }

    return json.data;
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      console.error('GraphQL fetch timed out after 10 seconds.');
    } else {
      console.error('GraphQL fetch error:', error.message);
    }
    return null;
  }
}

export const GET_PROJETS = `
  query GetProjets {
    projets {
      nodes {
        title
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        deTailsProjet {
          categorieduprojet
          nomDuClient
          dateDeLivraison
          lienduprojet
          contextemission
          image1 {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export const GET_PROJET_BY_SLUG = `
  query GetProjetBySlug($slug: ID!) {
    projet(id: $slug, idType: SLUG) {
      title
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
      deTailsProjet {
        categorieduprojet
        nomDuClient
        dateDeLivraison
        lienduprojet
        contextemission
        image1 {
          node {
            sourceUrl
          }
        }
        image2 {
          node {
            sourceUrl
          }
        }
        image3 {
          node {
            sourceUrl
          }
        }
        image4 {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_SERVICES = `
  query GetServices {
    services {
      nodes {
        title
        deTailsService {
          iconeSvg
          descriptionCourte: descriptioncourte
          ordreDaffichage
        }
      }
    }
  }
`;

function mapProject(node: any): Project {
  if (!node) return node;
  const details = node.deTailsProjet || {};
  return {
    ...node,
    deTailsProjet: {
      categorieProjet: details.categorieduprojet || "Projet",
      nomDuClient: details.nomDuClient || "Confidentiel",
      dateLivraison: details.dateDeLivraison || "",
      lienDuProjet: details.lienduprojet || "",
      contexteMission: details.contextemission || "",
      image1: details.image1 || null,
      image2: details.image2 || null,
      image3: details.image3 || null,
      image4: details.image4 || null,
    }
  };
}

export async function getProjects(): Promise<Project[]> {
  const data = await fetchGraphQL(GET_PROJETS);
  return data?.projets?.nodes?.map(mapProject) || [];
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const data = await fetchGraphQL(GET_PROJET_BY_SLUG, { slug });
  return data?.projet ? mapProject(data.projet) : undefined;
}

export async function getServices(): Promise<Service[]> {
  const data = await fetchGraphQL(GET_SERVICES);
  return data?.services?.nodes || [];
}
