import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

import Dossiers from "../pages/transit/dossier/Dossiers";
import Transit from "../pages/transit/Transit";
import Exo from "../pages/transit/Exo";
import Client from "../pages/transit/Client";
import DossierNew from "../pages/transit/dossier/DossierNew";
import Settings from "../pages/settings/Settings";
import STransit from "../pages/settings/STransit";
import ExoNew from "../pages/transit/ExoNew";
import ClientNew from "../pages/transit/ClientNew";
import Transit1 from "../pages/transit/Transit1";
import DDU from "../pages/transit/DDU";
import Minute from "../pages/transit/minute/Minute";
import Tarif from "../pages/transit/Tarif";
import TarifNew from "../pages/transit/TarifNew";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />

      <Route path="/transit" component={Transit} />
      <Route path="/minute/:param" component={Minute} />
      <Route path={"/t1/:param" ? "/t1/:param" : "/t1"} component={Transit1} />
      <Route path="/ddu/:param" component={DDU} />
      <Route path="/dossiers" component={Dossiers} />

      <Route path="/newDossier" component={DossierNew} />
      <Route path="/exo" component={Exo} />
      <Route path="/newExo" component={ExoNew} />

      <Route path="/newClient" component={ClientNew} />
      <Route path="/client" component={Client} />

      <Route path="/tarif" component={Tarif} />
      <Route path="/newTarif/:param" component={TarifNew} />

      <Route path="/settings" component={Settings} />
      <Route path="/stransit" component={STransit} />
    </Switch>
  );
};

export default Routes;
