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
  categories: Entry<Category>[];
  price: number;
  brand: Entry<Brand>;
  quantity: number;
  sku: string;
  website: string;
}

export interface Category {
  categoryDescription: string;
  title: string;
  icon: Asset;
}
export interface Brand {
  companyDescription: string;
  companyName: string;
  logo: Asset;
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
