import { ADD_PIECE, DELETE_PIECE, UPDATE_PIECE } from "./type";
import data from "../../data/data.json";
const initialState = {
  pieces: [],
};

const reducer = (state = data.pieces ? data.pieces : [], action) => {
  // console.log(data.pieces&&data.pieces.length);
  switch (action.type) {
    case ADD_PIECE:
      console.log("ADD_PIECE", action.payload);
      let pieces = [...state, action.payload];
      return pieces;

    case DELETE_PIECE:
      console.log("DELETE_PIECE", action.payload);
      let filterPieces = state.filter(
        (piece) => action.payload !== piece.numero
      );
      return filterPieces;

    case UPDATE_PIECE:
      console.log("UPDATE_PIECE", action.payload);
      let updatePiece = state.map((piece) => {
        if (action.payload.numero === piece.numero) {
          return action.payload;
        }
        return piece;
      });
      return updatePiece;

    default:
      return state;
  }
};

export default reducer;
