import Firebase from "../firebase";
import {
  ADD_OPERATION,
  DELETE_OPERATION,
  UPDATE_OPERATION,
  LOAD_OPERATIONS,
  LOAD_ERRORS,
} from "./type";
const fb = new Firebase();

export const addOperation = (Operation) => {
  // fb.addOperation(Operation.numero, Operation);
  return {
    type: ADD_OPERATION,
    payload: Operation,
  };
};

export const deleteOperation = (OperationId) => {
  // fb.deleteOPERATION(OperationId);
  return {
    type: DELETE_OPERATION,
    payload: OperationId,
  };
};

export const updateOperation = (updateOperation) => {
  // fb.addOperation(updateOperation.numero, updateOperation);
  console.log(updateOperation);
  return {
    type: UPDATE_OPERATION,
    payload: updateOperation,
  };
};

export const loadOperations = (operations) => {
  console.log(operations);
  return {
    type: LOAD_OPERATIONS,
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
export const getOperation = () => {
  return (dispatch) => {
    fb.getDocuments("Operations")
      .then((data) => {
        dispatch(loadOperations(data));
      })
      .catch((error) => {
        dispatch(loadErrors(error));
      });
  };
};
