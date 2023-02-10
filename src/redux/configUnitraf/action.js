import Firebase from "../firebase";
import { ADD_CONFIG, DELETE_CONFIG, UPDATE_CONFIG } from "./type";
const fb = new Firebase();

export const addConfig = (Config) => {
  // fb.addConfig(Config.numero, Config);
  return {
    type: ADD_CONFIG,
    payload: Config,
  };
};

export const deleteConfig = (ConfigId) => {
  // fb.deleteCONFIG(ConfigId);
  return {
    type: DELETE_CONFIG,
    payload: ConfigId,
  };
};

export const updateConfig = (updateConfig) => {
  // fb.addConfig(updateConfig.numero, updateConfig);
  console.log(updateConfig);
  return {
    type: UPDATE_CONFIG,
    payload: updateConfig,
  };
};
