import Firebase from "../firebase";
import {
  ADD_COMPTE,
  DELETE_COMPTE,
  UPDATE_COMPTE,
  LOAD_COMPTES,
  LOAD_ERRORS,
} from "./type";
const fb = new Firebase();

export const addCompte = (Compte) => {
  // fb.addCompte(Compte.numero, Compte);
  return {
    type: ADD_COMPTE,
    payload: Compte,
  };
};

export const deleteCompte = (CompteId) => {
  // fb.deleteCOMPTE(CompteId);
  return {
    type: DELETE_COMPTE,
    payload: CompteId,
  };
};

export const updateCompte = (updateCompte) => {
  // fb.addCompte(updateCompte.numero, updateCompte);
  console.log(updateCompte);
  return {
    type: UPDATE_COMPTE,
    payload: updateCompte,
  };
};

export const loadComptes = (operations) => {
  console.log(operations);
  return {
    type: LOAD_COMPTES,
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
export const getCompte = () => {
  return (dispatch) => {
    fb.getDocuments("Comptes")
      .then((data) => {
        dispatch(loadComptes(data));
      })
      .catch((error) => {
        dispatch(loadErrors(error));
      });
  };
};
