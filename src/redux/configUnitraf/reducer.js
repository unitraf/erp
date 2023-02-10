import { ADD_CONFIG, DELETE_CONFIG, UPDATE_CONFIG } from "./type";
import data from "../../data/data.json";
const initialState = {
  configs: [],
};

const reducer = (state = data.configs ? data.configs : initialState.configs, action) => {
  // console.log(data.configs&&data.configs.length);
  switch (action.type) {
    case ADD_CONFIG:
      console.log("ADD_CONFIG", action.payload);
      let configs = [...state, action.payload];
      return configs;

    case DELETE_CONFIG:
      console.log("DELETE_CONFIG", action.payload);
      let filterConfigs = state.filter(
        (dossier) => action.payload !== dossier.numero
      );
      return filterConfigs;

    case UPDATE_CONFIG:
      console.log("UPDATE_CONFIG", action.payload);
      let updateConfig = state.map((dossier) => {
        if (action.payload.numero === dossier.numero) {
          return action.payload;
        }
        return dossier;
      });
      return updateConfig;

    default:
      return state;
  }
};

export default reducer;
