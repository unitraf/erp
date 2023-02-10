import { LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_ERROR } from "./type";

const initial = {
  isLoading: false,
  user: {},
  error: "",
};

const reducer = (state = initial, action) => {

  switch (action.type) {
    case LOAD_USER:
      console.log("LOAD_USER");
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_USER_SUCCESS:
      console.log("LOAD_USER_SUCCESS",action.payload );
      return {
        ...state,
        isLoading: false,
        user:action.payload,
        error:''
      };
    case LOAD_USER_ERROR:
      console.log("LOAD_USER_ERROR");
      return {
        ...state,
        isLoading: false,
        users:[],
        error:action.payload
      };
    default:
      return state;
  }
};

export default reducer;
