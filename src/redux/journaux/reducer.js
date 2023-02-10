import {
  ADD_JOURNAL,
  DELETE_JOURNAL,
  UPDATE_JOURNAL,
  LOAD_JOURNAUX,
  LOAD_ERRORS,
} from "./type";
import data from '../../data/data.json'
const initialState = {
  isLoading: true,
  journaux: [],
  error: "",
};

const reducer = (state=data.journaux, action) => {
  console.log(data.journaux.length);
  switch (action.type) {
    case ADD_JOURNAL:
      console.log("ADD_JOURNAL");
      let journaux = [action.payload, ...state.journaux];
      return {
        ...state,
        journaux,
      };

    case DELETE_JOURNAL:
      console.log("DELETE_JOURNAL", action.payload);
      let filterJournaux = state.journaux.filter(
        (journal) => action.payload !== journal.numero
      );
      return {
        ...state,
        journaux: filterJournaux,
      };

    case UPDATE_JOURNAL:
      console.log("UPDATE_JOURNAL", action.payload);
      let updateJournal= state.journaux.map((journal) => {
        if (action.payload.numero === journal.numero) {
          return action.payload;
        }
        return journal;
      });
      return {
        ...state,
        journaux: updateJournal,
      };

    case LOAD_JOURNAUX:
      console.log("LOAD_JOURNAUX");
      return {
        ...state,
        journaux: action.payload,
        error: "",
        isLoading: false,
      };
    // ------------------------
    case LOAD_ERRORS:
      console.log("LOAD_ERRORS");

      return {
        ...state,
        isLoading: true,
        journaux: [],
        error: action.payload,
      };
    // ------------------------
    

    default:
      return state;
  }
};

export default reducer;
