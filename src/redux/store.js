import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import journauxReducer from "./journaux/reducer";
import operationsReducer from "./operations/reducer";
import modeleReducer from "./modele/reducer";
import nbsReducer from "./nbs/reducer";


// last
import pieceReducer from "./piece/reducer";

// Unitraf
import exoReducer from "./exoUnitraf/reducer";
import clientReducer from "./clientUnitraf/reducer";
import dossierReducer from "./dossierUnitraf/reducer";
import configsReducer from "./configUnitraf/reducer";
import tarifReducer from "./tarifUnitraf/reducer";

const rootReducer = combineReducers({
  journaux: journauxReducer,
  operations: operationsReducer,
  nbs: nbsReducer,

  modele: modeleReducer,
  pieces: pieceReducer,
  dossiers: dossierReducer,
  parametres:configsReducer,
  exos:exoReducer,
  clients:clientReducer,
  tarifs:tarifReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
