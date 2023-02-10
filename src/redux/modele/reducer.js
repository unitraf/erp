import {
  ADD_MODELE,
  DELETE_MODELE,
  UPDATE_MODELE,
  LOAD_MODELES,
  LOAD_ERRORS,
} from "./type";
import data from '../../data/data.json'
const initialState = {
  isLoading: true,
  modeles: [],
  error: "",
};

const reducer = (state = data.modele?data.modele:[], action) => {
  switch (action.type) {
    case ADD_MODELE:
      console.log("ADD_MODELE");
      let modeles = [...state.modeles,action.payload ];
      return {
        ...state,
        modeles,
      };

    case DELETE_MODELE:
      console.log("DELETE_MODELE", action.payload);
      let filterOperations = state.modeles.filter(
        (operation) => action.payload !== operation.numero
      );
      return {
        ...state,
        modeles: filterOperations,
      };

    case UPDATE_MODELE:
      console.log("UPDATE_MODELE", action.payload);
      let updateOperation= state.modeles.map((operation) => {
        if (action.payload.numero === operation.numero) {
          return action.payload;
        }
        return operation;
      });
      return {
        ...state,
        modeles: updateOperation,
      };

    case LOAD_MODELES:
      console.log("LOAD_MODELES");
      return {
        ...state,
        modeles: action.payload,
        error: "",
        isLoading: false,
      };
    // ------------------------
    case LOAD_ERRORS:
      console.log("LOAD_ERRORS");

      return {
        ...state,
        isLoading: true,
        modeles: [],
        error: action.payload,
      };
    // ------------------------
    

    default:
      return state;
  }
};

export default reducer;
