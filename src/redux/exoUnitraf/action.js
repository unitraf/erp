import Firebase from "../firebase";
import { ADD_EXO, DELETE_EXO, UPDATE_EXO } from "./type";
const fb = new Firebase();

export const addExo = (Exo) => {
  // fb.addExo(Exo.numero, Exo);
  return {
    type: ADD_EXO,
    payload: Exo,
  };
};

export const deleteExo = (ExoId) => {
  // fb.deleteEXO(ExoId);
  return {
    type: DELETE_EXO,
    payload: ExoId,
  };
};

export const updateExo = (updateExo) => {
  // fb.addExo(updateExo.numero, updateExo);
  console.log(updateExo);
  return {
    type: UPDATE_EXO,
    payload: updateExo,
  };
};
