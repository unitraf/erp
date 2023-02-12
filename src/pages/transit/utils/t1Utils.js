import moment from "moment";

export const listBureauFrontiere = [
  "NE029 Gaya",
  "Torodi",
  "Konni",
  "Dan Issa",
];
export const listBureauDestination = [
  "NE001 Niamey Route",
  "NE002 Niamey Fret",
  "Niamey Rive Droite",
  "NE056 Niamey Spécial Moyens",
  "Torodi",
  "Gaya",
  "Maradi",
  "Konni",
  "Agadez",
  "Zinder",
];

export const paysExport = [
  "Bénin",
  "Côte d'ivoire",
  "Ghana",
  "Nigéria",
  "Togo",
];
export const paysImport = ["Niger"];
export const listUnite = ["U", "Kg", "L"];

export const initData = {
  reference: "",
  sommier:"",
  numero: "",
  date: moment().format("YYYY-MM-DD"),
  paysExport: "",

  camion: "",
  burEntree: "",
  burDestination: "",

  position: "",
  marchandise: "",

  quantite: "",
  poids: "",
  volume: "",

  sommier: "",
  dateSommier: "",
};
