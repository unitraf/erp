import moment from "moment";



export const listBureau = [
    "Niamey Fret",
    " Niamey Route",
    "Niamey Rive Droite",
    "Torodi",
    "Gaya",
    "Maradi",
    "Konni",
    "Agadez",
    "Zinder",
  ];
  export const listRep = ["001", " 002", "003"];
  
  export const listUnite = ["U", "Kg", "L"];
  
  export const initData = {
    repertoire: "0",
    
    reference: "",
    date: moment().format("YYYY-MM-DD"),

    bureau: "",

    quantite: "",
    unite: "U",
    poids: "",
    volume: "",
    position:"",


    valeur: "",
    taxe:"",
    total: "",

    liquidation: "",
    dateLiquid:"",
    quittance: "",
    dateQuit:"",
    
    camion: "",
    exo: "",
    nts: "",
  };