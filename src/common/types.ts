import { Entry, Asset } from "contentful";

export interface AppContextInterface {
  products: Entry<Profile>[];
}

export interface Profile {
  name: string;
  favoriteArtist: string;
  favoriteMovie: string;
  favoriteTvSeries: string;
  favoriteSport: string;
  pandemy: string;
  avatar?: Asset;
}

export interface Brand {
  companyName: string;
  logo: Asset;
  companyDescription: string;
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
