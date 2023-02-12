import moment from "moment";

export const initData = {
   id: Date.now(),
    date: moment().format("DD/MM/YYYY"),
    operateur:"admin",
    eta:"",
    etd:"",
    numero: "",
    reference: "",
    expediteur: "",
    destinataire: "",
    depart: "",
    arrivee: "",
    dimensions:{long:"", larg:"", haut:""},
    mode:"",
    document: "",
    description: "",
    origine: "",
    provenance: "",
    nombre:1,
    quantite: "",
    type:"",
    poids: "",
    volume: "",
    client:{},
    status: "Ouvert",
    intervention: [],
    debours: [],
    declaration: [],
    autres: [],
    secef:{},
    t1:[],
    minute:[],
  };
  export const listStatus = [
    "Ouvert",
    "Expédié",
    "Transit",
    "Douane",
    "Livré",
  ];
  export const listMode = [
    "Aérien",
    "Routier",
    "Maritime",
    "Rail",
    "Modal",
    "Multi-Modal",
  ];
  export const listProvenance = [
    "Bénin",
    "Burkina Faso",
    "Cote d'ivoire",
    "Ghana",
    "Togo",
    "Autres",
    
    
  ];
  export const listType = [
    "Colis",
    "Conteneur",
    "Camion",
    "Citerne",
    "Carton",
    "Paquet",
    "Palette",
    
  ];

 export const listIntervention =[
    "Ouverture de dossier","Commission sur débours (3%)","Commission sur débours (5%)","Commission Transit","HAD"
  ]

 export const listDebours = [
    "Assigné/autres",
    "Assurance locale cordon douanier",
    "Certificat phytosanitaire",
    "Copies",
    "Divers*",
    "Droits & taxes douane",
    "Ecor douane/Dépotage",
    "Enlèvement direct",
    "Escorte Douane ",
    "Escorte Ville Douane ",
    "Escorte sécurité",
    "Etablissement Exonération",
    "Formalités Passage frontière",
    "Frais LTA**",
    "Livraison/Manutention",
    "Magasinage**",
    "Passage magasin douane",
    "Redevance scanner",
    "Remise documentaire ",
    "Taxe mairie",
    "Taxes syndicat ",
    "Travail extra légal Douane (T.E.L)",
  ];

 export const listAutres =[
    "Autres Débours",
    "Autres Débours*",
    "Autres Débours**"
  ]