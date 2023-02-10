import React from "react";
import "./dossiersPrint.css";
import moment from "moment";
import logo from "../assets/images/logo.png";
const DossierPrint = (props) => {
  const {dossier, index} = props
  console.log("props", dossier);
  return (
    <div className="dossier">
  <section className="header">
        <div className="col-12" >  
          <h2>SPECIFICATION</h2>
          {/* <h3>UNITRAF</h3> */}
          {/* <h4>Régime</h4> */}
          <fieldset className="col-4">
            <legend>Dossier Transit</legend>
            <p className="item">N° Dossier et date</p>
          </fieldset>
        </div>
        <img src={logo} alt="logo" />
      </section>
      <section className="body">
         {/* ligne 1 */}
         <div className="trait"></div>
        <div className="ligne">
          <fieldset className="col-5">
            <legend>Dossier Transit</legend>
            <p className="item">Dossier</p>
          </fieldset>
          <fieldset className="col-2">
            <legend>Répertoire</legend>
            <p className="item">Dossier</p>
          </fieldset>
          <fieldset className="col-5">
            <legend>T1 / LTA</legend>
            <p className="item">Dossier</p>
          </fieldset>
        </div>
      </section>
    </div>
  );
};

export default DossierPrint;
