import Firebase from "../firebase";
import { ADD_PIECE, DELETE_PIECE, UPDATE_PIECE } from "./type";
const fb = new Firebase();

export const addPiece = (Piece) => {
  // fb.addPiece(Piece.numero, Piece);
  return {
    type: ADD_PIECE,
    payload: Piece,
  };
};

export const deletePiece = (PieceId) => {
  // fb.deletePIECE(PieceId);
  return {
    type: DELETE_PIECE,
    payload: PieceId,
  };
};

export const updatePiece = (updatePiece) => {
  // fb.addPiece(updatePiece.numero, updatePiece);
  console.log(updatePiece);
  return {
    type: UPDATE_PIECE,
    payload: updatePiece,
  };
};
