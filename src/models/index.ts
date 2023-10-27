export enum Complexity {
  Simple,
  Medium,
  Difficult,
}

export enum Cost {
  Cheap,
  Fair,
  Expensive,
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
