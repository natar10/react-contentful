import { Entry, Asset } from "contentful";

export interface AppContextInterface {
  products: Entry<Product>[];
}

export interface Product {
  productName: string;
  slug: string;
  productDescription: string;
  sizetypecolor: string;
  image: Asset[];
  tags: string[];
  categories: string;
  price: number;
  brand: string;
  quantity: number;
  sku: string;
  website: string;
}

export type LoadingStatus = "LOADING" | "ERROR" | "LOADED";

export type ContextState =
  | { status: "LOADING" | "ERROR"; modalStatus: boolean }
  | {
      status: "LOADED";
      value: AppContextInterface;
      modalStatus: boolean;
      toogleOpen?: () => void;
    };

export interface Props {
  path: string;
}
