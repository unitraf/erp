import Firebase from "../firebase";
import {
  ADD_MODELE,
  DELETE_MODELE,
  UPDATE_MODELE,
  LOAD_MODELES,
  LOAD_ERRORS,
} from "./type";
const fb = new Firebase();

export const addModele = (Modele) => {
  // fb.addModele(Modele.numero, Modele);
  return {
    type: ADD_MODELE,
    payload: Modele,
  };
};

export const deleteModele = (ModeleId) => {
  // fb.deleteMODELE(ModeleId);
  return {
    type: DELETE_MODELE,
    payload: ModeleId,
  };
};

export const updateModele = (updateModele) => {
  // fb.addModele(updateModele.numero, updateModele);
  console.log(updateModele);
  return {
    type: UPDATE_MODELE,
    payload: updateModele,
  };
};

export const loadModeles = (operations) => {
  console.log(operations);
  return {
    type: LOAD_MODELES,
    payload: operations,
  };
};
export const loadErrors = (error) => {
  return {
    type: LOAD_ERRORS,
    payload: error,
  };
};

// to be implements... after
export const getModele = () => {
  return (dispatch) => {
    fb.getDocuments("Modeles")
      .then((data) => {
        dispatch(loadModeles(data));
      })
      .catch((error) => {
        dispatch(loadErrors(error));
      });
  };
};
