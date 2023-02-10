import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// {
//   "hosting": {
//     "site": "galerecompta",

//     "public": "public",
//     ...
//   }
// }

// const firebaseConfig = {
//   apiKey: "AIzaSyByT27HQ8QsV03hMZ-uKyqZFSu0OlzgRo8",
//   authDomain: "unitraf-2f844.firebaseapp.com",
//   projectId: "unitraf-2f844",
//   storageBucket: "unitraf-2f844.appspot.com",
//   messagingSenderId: "969325794561",
//   appId: "1:969325794561:web:e39171575b4395f9947700",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCT-Re7m9DYEkBZ2B0QK-f-LSeF58AZft0",
  authDomain: "galere-14c89.firebaseapp.com",
  projectId: "galere-14c89",
  storageBucket: "galere-14c89.appspot.com",
  messagingSenderId: "674093868586",
  appId: "1:674093868586:web:422957069521bbe104c553"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
console.log(app);
    this.auth = app.auth();
    this.db = app.firestore();

    // this.db.enablePersistence().catch((err) => {
    //   if (err.code === "failed-precondition") {
    //     // Multiple tabs open, persistence can only be enabled
    //     // in one tab at a a time.
    //     // ...
    //     console.log("err.code 1", err.code);
    //   } else if (err.code === "unimplemented") {
    //     // The current browser does not support all of the
    //     // features required to enable persistence
    //     // ...
    //     console.log("err.code 2", err.code);
    //   }
    // });
  }

  signupUser = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  //Connexion
  loginUser = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };
  //Deconnexion
  signoutUser = () => {
    return this.auth.signOut();
  };

  passwordReset = (email) => {
    return this.auth.sendPasswordResetEmail(email);
  };

  user = (uid) => this.db.doc(`users/${uid}`);
  client = (nif) => this.db.doc(`clients/${nif}`);
  dossier = (num) => this.db.doc(`dossiers/${num}`);

  deleteDocument = (col, docId) => this.db.collection(col).doc(docId).delete();
  updateDocument = (col, doc, data) =>this.db.collection(col).doc(doc).update(data);

  addDocument = (num, dossier) =>this.db.collection("dossiers").doc(num).set(dossier);

  addDossier = (num, dossier) =>this.db.collection("dossiers").doc(num).set(dossier);
  deleteDossier = (dossierNum) => this.db.collection("dossiers").doc(dossierNum).delete();
  
  addExo = (num, exo) =>this.db.collection("exos").doc(num).set(exo);
  updateExo = (num, exo) =>this.db.collection("exos").doc(num).update(exo);

  addClient = (num, client) =>this.db.collection("clients").doc(num).set(client);
  deleteClient = (nif) => this.db.collection("clients").doc(nif).delete();
  addTarif = (num, tarif) =>this.db.collection("tarifs").doc(num).set(tarif);
  listener = (dossier)=>this.db.collection(dossier)
  getDocuments = async (name) => {
    let docRef = this.db.collection(name);
    let allDocs = await docRef.get();
    let docs = [];
    for (const doc of allDocs.docs) {
      docs.push(doc.data());
      // console.log(doc.id, '=>', doc.data());
    }
    return docs;
  };
}

export default Firebase;
// var washingtonRef = db.collection("cities").doc("DC");

// // Set the "capital" field of the city 'DC'
// return washingtonRef.update({
//     capital: true
// })
// .then(() => {
//     console.log("Document successfully updated!");
// })
// .catch((error) => {
//     // The document probably doesn't exist.
//     console.error("Error updating document: ", error);
// });
// this.db.collection("cities").where("state", "==", "CA")
//     .onSnapshot((snapshot) => {
//         snapshot.docChanges().forEach((change) => {
//             if (change.type === "added") {
//                 console.log("New city: ", change.doc.data());
//             }
//             if (change.type === "modified") {
//                 console.log("Modified city: ", change.doc.data());
//             }
//             if (change.type === "removed") {
//                 console.log("Removed city: ", change.doc.data());
//             }
//         });
//     });

// getAuth =()=>{
//  return  this.auth.onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User

//       let uid = user.uid;
//       console.log('SignIn',uid)
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   })
// }
