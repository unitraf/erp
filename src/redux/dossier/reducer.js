import {
  ADD_DOSSIER,
  DELETE_DOSSIER,
  UPDATE_DOSSIER,
  LOAD_DOSSIERS,
  LOAD_ERRORS,
  ADD_INTERVENTION,
  ADD_DEBOURS,
  ADD_DECLARATION,
  ADD_AUTRES,
  ADD_SECEF,
  ADD_T1,
  ADD_MINUTE,
} from "./type";

const initialState = {
  isLoading: true,
  dossiers: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOSSIER:
      console.log("ADD_DOSSIER");
      let dossiers = [action.payload, ...state.dossiers];
      return {
        ...state,
        dossiers,
      };

    case DELETE_DOSSIER:
      console.log("DELETE_DOSSIER", action.payload);
      let filterDossiers = state.dossiers.filter(
        (dossier) => action.payload !== dossier.numero
      );
      return {
        ...state,
        dossiers: filterDossiers,
      };

    case UPDATE_DOSSIER:
      console.log("UPDATE_DOSSIER", action.payload);
      let updateDossier = state.dossiers.map((dossier) => {
        if (action.payload.numero === dossier.numero) {
          return action.payload;
        }
        return dossier;
      });
      return {
        ...state,
        dossiers: updateDossier,
      };

    case LOAD_DOSSIERS:
      console.log("LOAD_DOSSIERS");
      return {
        ...state,
        dossiers: action.payload,
        error: "",
        isLoading: false,
      };
    // ------------------------
    case LOAD_ERRORS:
      console.log("LOAD_ERRORS");

      return {
        ...state,
        isLoading: true,
        dossiers: [],
        error: action.payload,
      };
    // ------------------------
    case ADD_INTERVENTION:
      console.log("ADD_INTERVENTION", action.payload);
      let addIntervention = state.dossiers.map((dossier) => {
        if (action.payload.numero === dossier.numero) {
          return action.payload;
        }
        return dossier;
      });
      return {
        ...state,
        dossiers: addIntervention,
      };

    // ------------------------
    case ADD_DEBOURS:
      console.log("ADD_DEBOURS", action.payload);
      let addDebours = state.dossiers.map((dossier) => {
        if (action.payload.numero === dossier.numero) {
          return action.payload;
        }
        return dossier;
      });
      return {
        ...state,
        dossiers: addDebours,
      };
    // ------------------------
    case ADD_DECLARATION:
      console.log("ADD_DECLARATION", action.payload);
      let addDeclaration = state.dossiers.map((dossier) => {
        if (action.payload.numero === dossier.numero) {
          return action.payload;
        }
        return dossier;
      });
      return {
        ...state,
        dossiers: addDeclaration,
      };
    // ------------------------
    case ADD_MINUTE:
      console.log("ADD_MINUTE", action.payload);
      let addMinute = state.dossiers.map((dossier) => {
        if (action.payload.numero === dossier.numero) {
          return action.payload;
        }
        return dossier;
      });
      return {
        ...state,
        dossiers: addMinute,
      };
    // ------------------------
    case ADD_T1:
      console.log("ADD_T1", action.payload);
      let addT1 = state.dossiers.map((dossier) => {
        if (action.payload.numero === dossier.numero) {
          return action.payload;
        }
        return dossier;
      });
      return {
        ...state,
        dossiers: addT1,
      };
    // ------------------------
    case ADD_SECEF:
      console.log("ADD_SECEF", action.payload);
      let addSecef = state.dossiers.map((dossier) => {
        if (action.payload.numero === dossier.numero) {
          return action.payload;
        }
        return dossier;
      });
      return {
        ...state,
        dossiers: addSecef,
      };
    // ------------------------
    case ADD_AUTRES:
      console.log("ADD_AUTRES", action.payload);
      let addAutres = state.dossiers.map((dossier) => {
        if (action.payload.numero === dossier.numero) {
          return action.payload;
        }
        return dossier;
      });
      return {
        ...state,
        dossiers: addAutres,
      };

    default:
      return state;
  }
};

export default reducer;
