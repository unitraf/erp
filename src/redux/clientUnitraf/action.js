import Firebase from "../firebase";
import { ADD_CLIENT, DELETE_CLIENT, UPDATE_CLIENT } from "./type";
// const fb = new Firebase();

export const addClient = (Client) => {
  // fb.addClient(Client.numero, Client);
  return {
    type: ADD_CLIENT,
    payload: Client,
  };
};

export const deleteClient = (ClientNif) => {
  // fb.deleteCLIENT(ClientId);
  return {
    type: DELETE_CLIENT,
    payload: ClientNif,
  };
};

export const updateClient = (updateClient) => {
  // fb.addClient(updateClient.numero, updateClient);
  console.log(updateClient);
  return {
    type: UPDATE_CLIENT,
    payload: updateClient,
  };
};
