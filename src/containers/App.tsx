import React from "react";
import { Router } from "@reach/router";
import { AppContextProvider } from "../context/AppContext";

import Home from "../pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <AppContextProvider>
        <Router>
          <Home path="/" />
        </Router>
      </AppContextProvider>
    </React.Fragment>
  );
};

export default App;
