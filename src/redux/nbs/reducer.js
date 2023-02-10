import {
  ADD_COMPTE,
  DELETE_COMPTE,
  UPDATE_COMPTE,
  LOAD_COMPTES,
  LOAD_ERRORS,
} from "./type";
import data from '../../data/data.json'
const initialState = {
  isLoading: true,
  comptes: [],
  error: "",
};

const reducer = (state = data.nbs, action) => {
  // console.log("data", data);
  switch (action.type) {
    case ADD_COMPTE:
      console.log("ADD_COMPTE");
      let comptes = [action.payload, ...state.comptes];
      return {
        ...state,
        comptes,
      };

    case DELETE_COMPTE:
      console.log("DELETE_COMPTE", action.payload);
      let filterComptes = state.comptes.filter(
        (compte) => action.payload !== compte.numero
      );
      return {
        ...state,
        comptes: filterComptes,
      };

    case UPDATE_COMPTE:
      console.log("UPDATE_COMPTE", action.payload);
      let updateCompte= state.comptes.map((compte) => {
        if (action.payload.numero === compte.numero) {
          return action.payload;
        }
        return compte;
      });
      return {
        ...state,
        comptes: updateCompte,
      };

    case LOAD_COMPTES:
      console.log("LOAD_COMPTES");
      return {
        ...state,
        comptes: action.payload,
        error: "",
        isLoading: false,
      };
    // ------------------------
    case LOAD_ERRORS:
      console.log("LOAD_ERRORS");

      return {
        ...state,
        isLoading: true,
        comptes: [],
        error: action.payload,
      };
    // ------------------------
    

    default:
      return state;
  }
};

export default reducer;
