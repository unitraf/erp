import Firebase from "../firebase";
import { ADD_DOSSIER,DELETE_DOSSIER,UPDATE_DOSSIER , GET_DOSSIERS, LOAD_DOSSIERS,LOAD_ERRORS, ADD_INTERVENTION,UPDATE_INTERVENTION, ADD_DEBOURS, ADD_DECLARATION,ADD_SECEF,ADD_T1, ADD_AUTRES, ADD_MINUTE} from "./type";
const fb = new Firebase()

export const addDossier = (dossier) => {
  fb.addDossier(dossier.numero, dossier)
  return {
    type: ADD_DOSSIER,
    payload: dossier,
  };
};

export const addIntervention = (intervention) => {
  fb.addDossier(intervention.numero, intervention)
  console.log(intervention);
  return {
    type: ADD_INTERVENTION,
    payload: intervention,
  };
};

export const addDebours = (debours) => {
  fb.addDossier(debours.numero, debours)
  console.log(debours);
  return {
    type: ADD_DEBOURS,
    payload: debours,
  };
};

export const addDeclaration = (declaration) => {
  fb.addDossier(declaration.numero, declaration)
  console.log(declaration);
  return {
    type: ADD_DECLARATION,
    payload: declaration,
  };
};

export const addMinute = (minute) => {
  fb.addDossier(minute.numero, minute)
  console.log(minute);
  return {
    type: ADD_MINUTE,
    payload: minute,
  };
};

export const addT1 = (t1) => {
  fb.addDossier(t1.numero, t1)
  console.log(t1);
  return {
    type: ADD_T1,
    payload: t1,
  };
};
export const addSecef = (secef) => {
  fb.addDossier(secef.numero, secef)
  console.log(secef);
  return {
    type: ADD_SECEF,
    payload: secef,
  };
};


export const addAutres = (autres) => {
  fb.addDossier(autres.numero, autres)
  console.log(autres);
  return {
    type: ADD_AUTRES,
    payload: autres,
  };
};

export const deleteDossier = (dossierId) => {
  fb.deleteDossier(dossierId)
  return {
    type: DELETE_DOSSIER,
    payload: dossierId,
  };
};

export const updateDossier = (updateDossier) => {
  fb.addDossier(updateDossier.numero, updateDossier)
  console.log(updateDossier);
  return {
    type: UPDATE_DOSSIER,
    payload: updateDossier,
  };
};

export const updateIntervention = (intervention) => {
  fb.addDossier(intervention.numero, intervention)
  console.log(intervention);
  return {
    type: ADD_INTERVENTION,
    payload: intervention,
  };
};
export const loadDossiers = (dossiers) => {

  return {
    type: LOAD_DOSSIERS,
    payload : dossiers
  };
};
export const loadErrors = (error) => {

  return {
    type: LOAD_ERRORS,
    payload : error
  };
};

export const getDossiers = () => {
  return (dispatch) => {
    fb.getDocuments("dossiers")
      .then((data) => {
        dispatch(loadDossiers(data))
      })
      .catch((error) => {
        dispatch(loadErrors(error))
      });
  };
};