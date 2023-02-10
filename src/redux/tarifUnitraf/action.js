import Firebase from "../firebase";
import { ADD_TARIF, DELETE_TARIF, UPDATE_TARIF } from "./type";
// const fb = new Firebase();

export const addTarif = (Tarif) => {
  // fb.addTarif(Tarif.numero, Tarif);
  return {
    type: ADD_TARIF,
    payload: Tarif,
  };
};

export const deleteTarif = (TarifNif) => {
  // fb.deleteTARIF(TarifId);
  return {
    type: DELETE_TARIF,
    payload: TarifNif,
  };
};

export const updateTarif = (updateTarif) => {
  // fb.addTarif(updateTarif.numero, updateTarif);
  console.log(updateTarif);
  return {
    type: UPDATE_TARIF,
    payload: updateTarif,
  };
};
