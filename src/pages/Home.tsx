import React from "react";
import BigTitle from "../components/layout/BigTitle";
import Catalog from "../components/Catalog";
import { AppContextProvider } from "../context/AppContext";
import GeneralModal from "../components/layout/Modal";
import { Props } from "../common/types";

const App: React.FC<Props> = (props: Props) => {
  const myRef = React.createRef();
  return (
    <React.Fragment>
      <AppContextProvider>
        <BigTitle />
        <Catalog />
        <GeneralModal />
      </AppContextProvider>
    </React.Fragment>
  );
};

export default App;
