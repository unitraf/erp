import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../firebase";
import InputBox from "../inputBox/InputBox";

import "./login.css";

const signupItem = [
  { id: "pseudo", type: "text", label: "Pseudo" },
  { id: "email", type: "email", label: "Email" },
  { id: "password", type: "password", label: "Mot de passe" },
  {
    id: "confirmPassword",
    type: "password",
    label: "Confirmer le mot de passe",
  },
];

const SignUp = (props) => {

  const firebase = useContext(FirebaseContext);
  // console.log(firebase);
  const userData = {pseudo: "", email: "", password: "",confirmPassword: ""};

  const [signUpData, setSignUpData] = useState(userData);
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpData);
    const { email, password, pseudo } = signUpData;
     firebase
      .signupUser(email, password)
      .then(authUser=>{
        console.log('Success',authUser.user.uid );
        return firebase.user(authUser.user.uid).set({pseudo, email}).then(()=>console.log('Succes'))
        
      })
      .then(() => {
        setSignUpData({ ...userData });
        props.history.push('/')
      })
      .catch((error) => {
        setError(error);
        setSignUpData({ ...userData });
      });

      
  };
  // gestion erreurs
  const errorMsg = error !== '' && <span className="error">{error.message}</span>;
  // Activation button
  const { pseudo, email, password, confirmPassword } = signUpData;
  const btn = pseudo === "" ||email === "" || password === "" ||password !== confirmPassword ? (
      <button disabled>Inscription</button>
    ) : (
      <button>Inscription</button>
    );



  // console.log(signUpData);
  // ---------------------------------
  return (
    <div className="containerBackground">
      <div className="loginContent col-4" style={{ padding: 15 }}>
        <fieldset>
          <legend>Inscription</legend>
          {errorMsg}
          <form onSubmit={handleSubmit}>
            {signupItem.map((input, index) => (
              <InputBox
                key={index}
                id={input.id}
                value={signUpData[input.id]}
                type={input.type}
                handleChange={handleChange}
                label={input.label}
              />
            ))}

            {btn}
          </form>

          <div className="linkContainer link">
            <Link className="simpleLink" to="/">
              Déjà inscrit? Connectez-vous.
            </Link>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default SignUp;
