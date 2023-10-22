export interface Class {
    id: number;
    nom: string;
    capacite: number;
    section: {
      id_section: number;
      nom_section: string;
    };
    etage: {
      id: number;
      libelle: string;
    };
  }
  