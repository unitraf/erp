import { ADD_EXO, DELETE_EXO, UPDATE_EXO } from "./type";
import data from "../../data/data.json";
const initialState = {
  exos: [],
};

const reducer = (state = data.exos ? data.exos : initialState.exos, action) => {
  // console.log(data.exos&&data.exos.length);
  switch (action.type) {
    case ADD_EXO:
      console.log("ADD_EXO", action.payload);
      let exos = [ action.payload, ...state];
      return exos;

    case DELETE_EXO:
      console.log("DELETE_EXO", action.payload);
      let filterExos = state.filter(
        (exo) => action.payload !== exo.numero
      );
      return filterExos;

    case UPDATE_EXO:
      console.log("UPDATE_EXO", action.payload);
      let updateExo = state.map((exo) => {
        if (action.payload.numero === exo.numero) {
          return action.payload;
        }
        return exo;
      });
      return updateExo;

    default:
      return state;
  }
};

export default reducer;
