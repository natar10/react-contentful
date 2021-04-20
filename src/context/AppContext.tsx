import { Entry } from "contentful";
import React, { createContext, useContext, useState, useEffect } from "react";
import { ContextState, LoadingStatus, Profile } from "../common/types";
import { ContentfulContent } from "../services/Contentful";

const ctxt = createContext<ContextState>({
  status: "LOADING",
  modalStatus: false,
});

const Provider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<LoadingStatus>("LOADING");
  const [products, setProducts] = useState<Entry<Profile>[]>([]);

  useEffect(() => {
    ContentfulContent.getProfiles("profile")
      .then((data: Entry<Profile>[]) => {
        setProducts(data);
        setLoading("LOADED");
      })
      .catch((err) => {
        console.log(err);
        setLoading("ERROR");
        setProducts([]);
      });
  }, []);

  const context: ContextState = {
    status: loading,
    value: { products: products },
    modalStatus: isOpen,
    toogleOpen: () => (isOpen ? setIsOpen(false) : setIsOpen(true)),
  };

  return <ctxt.Provider value={context}>{children}</ctxt.Provider>;
};

export const AppContextProvider = Provider;

export function useAppContext() {
  return useContext(ctxt);
}
