import Firebase from "../firebase";
import {
  ADD_JOURNAL,
  DELETE_JOURNAL,
  UPDATE_JOURNAL,
  LOAD_JOURNAUX,
  LOAD_ERRORS,
} from "./type";
const fb = new Firebase();

export const addJournal = (Journal) => {
  // fb.addJournal(Journal.numero, Journal);
  return {
    type: ADD_JOURNAL,
    payload: Journal,
  };
};

export const deleteJournal = (JournalId) => {
  // fb.deleteJOURNAL(JournalId);
  return {
    type: DELETE_JOURNAL,
    payload: JournalId,
  };
};

export const updateJournal = (updateJournal) => {
  // fb.addJournal(updateJournal.numero, updateJournal);
  console.log(updateJournal);
  return {
    type: UPDATE_JOURNAL,
    payload: updateJournal,
  };
};

export const loadJournaux = (journaux) => {
  console.log(journaux);
  return {
    type: LOAD_JOURNAUX,
    payload: journaux,
  };
};
export const loadErrors = (error) => {
  return {
    type: LOAD_ERRORS,
    payload: error,
  };
};

// to be implements... after
export const getJournal = () => {
  return (dispatch) => {
    fb.getDocuments("Journals")
      .then((data) => {
        dispatch(loadJournaux(data));
      })
      .catch((error) => {
        dispatch(loadErrors(error));
      });
  };
};
