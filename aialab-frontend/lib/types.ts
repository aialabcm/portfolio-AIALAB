export interface ImageNode {
  node: {
    sourceUrl: string;
  };
}

export interface ProjectDetails {
  categorieProjet: string;
  nomDuClient: string;
  dateLivraison: string;
  image1?: ImageNode;
  image2?: ImageNode;
  image3?: ImageNode;
}

export interface Project {
  title: string;
  slug: string;
  featuredImage?: ImageNode;
  deTailsProjet: ProjectDetails;
}

export interface ServiceDetails {
  iconeSvg: string;
  descriptionCourte: string;
  ordreAffichage: number;
}

export interface Service {
  title: string;
  deTailsService: ServiceDetails;
}
