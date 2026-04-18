import { Project, Service } from "./types";

const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL || 'https://cms.aialabcmr.com/graphql';

export async function fetchGraphQL(query: string, variables = {}) {
  const res = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('GraphQL Error');
  }

  return json.data;
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
          categorieProjet
          nomDuClient
          dateLivraison
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
        categorieProjet
        nomDuClient
        dateLivraison
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
          descriptionCourte
          ordreAffichage
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
