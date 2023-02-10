import Firebase from "../firebase";
import { LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_ERROR } from "./type";

export const loadUser = () => {
  return {
    type: LOAD_USER,
  };
};

export const loadUserSuccess = (user) => {
  return {
    type: LOAD_USER_SUCCESS,
    payload: user,
  };
};

export const loadUserError = (error) => {
  return {
    type: LOAD_USER_ERROR,
    payload: error,
  };
};

const fb = new Firebase();
const email = "m@u.com";
const password = "123456";
export const fbCall = () => {
  return (dispatch) => {
    dispatch(loadUser());
    fb.loginUser(email, password)
      .then((user) => {
        console.log(user.uid);
        dispatch(loadUserSuccess(user));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(loadUserError(error));
      });
  };
};
