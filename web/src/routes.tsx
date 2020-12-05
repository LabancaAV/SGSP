import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import CreateMedico from "./pages/CreateMedico";

const Routes = () =>{
  return(
    <BrowserRouter>
      <Route component={Home} path="/" exact/>
      <Route component={CreateMedico} path="/create-medico"/>

    </BrowserRouter>
  );
}

export default Routes;