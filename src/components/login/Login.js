import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../firebase";
import InputBox from "../inputBox/InputBox";

import "./login.css";

const loginItem = [
  { id: "email", type: "email", label: "Email" },
  { id: "password", type: "password", label: "Mot de passe" },
];
const Login = (props) => {
  const firebase = useContext(FirebaseContext);
  // console.log(firebase.auth);
  const userData = { email: "", password: "" };

  const [loginData, setLoginData] = useState(userData);
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState("");
  const { password, email } = loginData;

  useEffect(() => {

    (password.length > 5 && email !== "")?  setBtn(true): setBtn(false);
    
  }, [password, email, btn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .loginUser(email, password)
      .then((user) => {
        console.log(user);
        setLoginData(userData);
        // console.log(firebase.getAuth(user));
        // firebase.getAuth()
        // props.history.push("/home");
      })
      .catch((error) => {
        setError(error);
        setLoginData(userData);
      });
  };

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };


  
  return (
    <div className="containerBackground" >
    <div className="loginContent col-4" style={{padding:15}}>
      <fieldset>
        <legend>Connexion</legend>
      
      {error !== "" && <span className="error">{error.message}</span>}

         <form onSubmit={handleSubmit}>
        {loginItem.map((input, index) => (
       
          <InputBox
            key={index}
            id={input.id}
            value={loginData[input.id]}
            type={input.type}
            handleChange={handleChange}
            label={input.label}
          />
        ))}
        {/* <div className="inputBox">
          <input
            id="email"
            onChange={handleChange}
            value={email}
            type="email"
            autoComplete="off"
            required
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="inputBox">
          <input
            id="password"
            onChange={handleChange}
            value={password}
            type="password"
            autoComplete="off"
            required
          />
          <label htmlFor="password">Mot de passe</label>
        </div> */}

        {btn ? <button>Connexion</button> : <button disabled>Connexion</button>}
      </form>
      <div className="linkContainer link" >
        <Link className="simpleLink " to="/signup">
          Inscription
        </Link>
        <br />
        <Link className="simpleLink" to="/forgetpassword">
          Mot de passe oublié?
        </Link>
      </div>
      </fieldset>
    </div>
    </div>
  );
};

export default Login;
