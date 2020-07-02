import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";


// import { SignupPage } from "../SignupPage";
// import { SignupAdmin } from "../SignupAmin";
// import { SignupBand } from "../SignupBand";
// import { ApproveBand } from "../ApproveBand";
// import { AddGenre } from "../AddGenre";
// import { AddAlbum } from "../AddAlbum";
// import { AddMusic } from "../AddMusic";
import LoginPage from "../LoginPage";

export const routes = {
    login:"/",
    home:"/home", 
    register:"/register",
    registerAdmin:"/register/admin",
    registerBand:"/register/band",
    approveBand:"/approve/band",
    addGenre: "/addGenre/admin",
    addAlbum: "/addAlbum/band",
    addMusic: "/addMusic/band"
  };
  
  function Router(props) {
    return (
      <ConnectedRouter history={props.history}>
       <Switch>
          <Route exact path={routes.login} component={LoginPage} />
          {/* <Route exact path={routes.register} component={SignupPage} />
          <Route exact path={routes.registerAdmin} component={SignupAdmin} />
          <Route exact path={routes.registerBand} component={SignupBand} />
          <Route exact path={routes.approveBand} component={ApproveBand} />
          <Route exact path={routes.addGenre} component={AddGenre} />
          <Route exact path={routes.addAlbum} component={AddAlbum} />
          <Route exact path={routes.addMusic} component={AddMusic} /> */}
        </Switch>
      </ConnectedRouter>
    );
  }
  
  export default Router;