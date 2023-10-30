export enum Complexity {
  Simples,
  Média,
  Difícil,
}

export enum Cost {
  Barato,
  Justo,
  Caro,
}

export interface ICategory {
  id: string;
  title: string;
  color: string;
}

export interface IMeal {
  id: string;
  categories: ICategory[];
  title: string;
  cost: Cost;
  complexity: Complexity;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
}
