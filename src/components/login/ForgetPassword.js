import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../firebase";
import InputBox from "../inputBox/InputBox";

const ForgetPassword = (props) => {
  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .passwordReset(email)
      .then(() => {
        setError(null);
        setSuccess(
          `Consultez votre email ${email} pour changer le mot de passe`
        );
        setEmail("");

        setTimeout(() => {
          props.history.push("/");
        }, 5000);
      })
      .catch((error) => {
        setError(error);
        setEmail("");
      });
  };

  const disabled = email === "";

  return (
    <div className="containerBackground">
      <div className="loginContent col-4" style={{ padding: 15 }}>
        <fieldset>
          {success && (
            <span
              style={{
                // border: "1px solid green",
                background: "#349eff",
                color: "#ffffff",
                fontSize:12
              }}
            >
              {success}
            </span>
          )}

          {error && <span className="error">{error.message}</span>}

          <legend>Réinitialisation</legend>
          <form onSubmit={handleSubmit}>
            <InputBox
              id="email"
              value={email}
              type="email"
              handleChange={handleChange}
              label="Email"
            />

            <button disabled={disabled}>Récupérer</button>
          </form>

          <div className="linkContainer link">
            <Link className="simpleLink" to="/">
              Mot de passe retrouvé? Connectez-vous...
            </Link>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default ForgetPassword;
