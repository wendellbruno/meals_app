export const enum Complexity {
  Simple,
  Medium,
  Difficult,
}

export const enum Cost {
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
  imageUrl: string;
  ingredients: string[];
  steps: string[];
  duration: number;
}
