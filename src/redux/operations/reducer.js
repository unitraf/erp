import {
  ADD_OPERATION,
  DELETE_OPERATION,
  UPDATE_OPERATION,
  LOAD_OPERATIONS,
  LOAD_ERRORS,
} from "./type";

const initialState = {
  isLoading: true,
  operations: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OPERATION:
      console.log("ADD_OPERATION");
      let operations = [action.payload, ...state.operations];
      return {
        ...state,
        operations,
      };

    case DELETE_OPERATION:
      console.log("DELETE_OPERATION", action.payload);
      let filterOperations = state.operations.filter(
        (operation) => action.payload !== operation.numero
      );
      return {
        ...state,
        operations: filterOperations,
      };

    case UPDATE_OPERATION:
      console.log("UPDATE_OPERATION", action.payload);
      let updateOperation= state.operations.map((operation) => {
        if (action.payload.numero === operation.numero) {
          return action.payload;
        }
        return operation;
      });
      return {
        ...state,
        operations: updateOperation,
      };

    case LOAD_OPERATIONS:
      console.log("LOAD_OPERATIONS");
      return {
        ...state,
        operations: action.payload,
        error: "",
        isLoading: false,
      };
    // ------------------------
    case LOAD_ERRORS:
      console.log("LOAD_ERRORS");

      return {
        ...state,
        isLoading: true,
        operations: [],
        error: action.payload,
      };
    // ------------------------
    

    default:
      return state;
  }
};

export default reducer;
