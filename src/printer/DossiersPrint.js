import React from "react";
import "./dossiersPrint.css";
import moment from "moment";
import logo from "../assets/images/logo.png";

import {  renderDate} from "../components/helpers/renders";
import { useSelector } from "react-redux";
const DossierPrint = (props) => {
  const dossiers = useSelector((state) => state.dossiers);
  console.log(dossiers);
  const { dossier, index } = props;
  console.log("props", dossier);
  return (
    <div className="dossiers">
      <section className="header">
        <div className="col-12">
          <h4>RECAPITULATIF</h4>
        </div>
        {/* <img src={logo} alt="logo" /> */}
      </section>
      <div className="trait"></div>
      <section className="body">
        <table>
          <thead>
            <tr>
              <th>Numero</th>
              <th>Date</th>
              <th>Reférence</th>
              <th>Expéditeur</th>
              <th>Destinataire</th>
              <th>Colis</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {dossiers.map((item, index) => (
              <tr>
                <td>{item.numero}</td>
                <td>{renderDate(item.date)  }</td>
                <td>{item.reference}</td>
                <td>{item.expediteur}</td>
                <td>{item.destinataire}</td>
                <td>{item.quantite}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DossierPrint;
