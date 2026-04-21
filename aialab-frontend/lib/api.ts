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
  const timeoutId = setTimeout(() => controller.abort(), 3000);

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
      console.error('GraphQL fetch timed out after 3 seconds.');
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
          categorieProjet: categorieDuProjet
          nomDuClient
          dateLivraison: datelivraison
          lienDuProjet: lienduprojet
          contexteMission: contextemission
          image1 {
            node {
              sourceUrl
            }
          }
          # image2 {
          #   node {
          #     sourceUrl
          #   }
          # }
          # image3 {
          #   node {
          #     sourceUrl
          #   }
          # }
          # image4 {
          #   node {
          #     sourceUrl
          #   }
          # }
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
        categorieProjet: categorieDuProjet
        nomDuClient
        dateLivraison: datelivraison
        lienDuProjet: lienduprojet
        contexteMission: contextemission
        image1 {
          node {
            sourceUrl
          }
        }
        # image2 {
        #   node {
        #     sourceUrl
        #   }
        # }
        # image3 {
        #   node {
        #     sourceUrl
        #   }
        # }
        # image4 {
        #   node {
        #     sourceUrl
        #   }
        # }
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
          iconeSvg: iconesvg
          descriptionCourte
          ordreDaffichage: ordredaffichage
        }
      }
    }
  }
`;

export async function getProjects(): Promise<Project[]> {
  const data = await fetchGraphQL(GET_PROJETS);
  return data?.projets?.nodes || [];
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const data = await fetchGraphQL(GET_PROJET_BY_SLUG, { slug });
  return data?.projet;
}

export async function getServices(): Promise<Service[]> {
  const data = await fetchGraphQL(GET_SERVICES);
  return data?.services?.nodes || [];
}
