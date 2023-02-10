import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  updateDossier } from "../../redux/dossierUnitraf/action";

import { initData } from "./utils/minute";
import { Link } from "react-router-dom";
import DropDownList from "../../components/dropDownList/DropDownList";

import "./minute.css"
const Minute = (props) => {
  const dossiers = useSelector((state) => state.dossiers);
  // console.log(props.location.pathname.match(/(\d+)/));

  const dispatch = useDispatch();
  const [data, setData] = useState(initData);
  
  console.log(data);
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleChecked = (e, index) => {
    // console.log(data.documents[index]);
    let documents = data.documents.map((pj, ind) =>
      ind === index
        ? { ...data.documents[index], checked: !data.documents[index].checked }
        : pj
    );

    console.log(documents);
    setData({ ...data, documents });
  };

  let indexDossier = props.location.pathname.match(/(\d+)/);

  console.log("dossier",dossiers[parseInt(indexDossier)]);

  const render = (
    <div className="minute">
      {/*ligne 1*/}
      <fieldset
        className=""
        style={{ display: "flex", flexDirection: "column" }}
      >
        <legend>Informations du dossier</legend>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-2">
            <input
              id="repertoire"
              value={data.repertoire}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"repertoire"}>Repertoire</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="t1"
              value={data.t1}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"t1"}>T1</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="date"
              value={data.date}
              type="date"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"date"}>Date</label>
          </div>
          <div className="inputBox col-3">
            <input
              id="regime"
              value={data.regime}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"regime"}>Régime</label>
          </div>
        </div>
        {/* ligne 2 */}
        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-3">
            <input
              id="burDestination"
              value={data.burDestination}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"burDestination"}>Bureau Destination</label>
          </div>
          <div className="inputBox col-3">
            <input
              id="burEntree"
              value={data.burEntree}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"burEntree"}>Bureau Frontière</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="provenance"
              value={data.provenance}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"provenance"}>Provenance</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="origine"
              value={data.origine}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"origine"}>origine</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="mode"
              value={data.mode}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"mode"}>Mode Transport</label>
          </div>
        </div>
        {/* ligne 3 */}
        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-5">
            <input
              id="importateur"
              value={data.importateur}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"importateur"}>Importateur</label>
          </div>
          <div className="inputBox col-5">
            <input
              id="destinataire"
              value={data.destinataire}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"destinataire"}>Destinataire</label>
          </div>
        </div>
        {/* ligne 4 */}
        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-1">
            <input
              id="colis"
              value={data.colis}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"colis"}>Colis</label>
          </div>
          <div className="inputBox col-3">
            <input
              id="document"
              value={data.document}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"document"}>BL/LTA</label>
          </div>
          <div className="inputBox col-3">
            <input
              id="camion"
              value={data.camion}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"camion"}>Camion</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="exo"
              value={data.exo}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"exo"}>Exonération</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="license"
              value={data.license}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"license"}>license</label>
          </div>

          <div className="inputBox col-2">
            <input
              id="sommier"
              value={data.sommier}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"sommier"}>Sommier</label>
          </div>
        </div>
        {/* ligne 5 */}
        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-2">
            <input
              id="quantite"
              value={data.quantite}
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"quantite"}>Quantité</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="poids"
              value={data.poids}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"poids"}>Poids</label>
          </div>

          <div className="inputBox col-2">
            <input
              id="volume"
              value={data.volume}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"volume"}>Volume</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="position"
              value={data.position}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"position"}>position</label>
          </div>

          <div className="inputBox col-3">
            <input
              id="nature"
              value={data.nature}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"nature"}>Nature des marchandises</label>
          </div>
        </div>
      </fieldset>

      {/* Montants fieldset */}
      <fieldset
        className=""
        style={{ display: "flex", flexDirection: "column" }}
      >
        <legend>Valeurs </legend>
        {/* ligne 1 */}

        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-2">
            <input
              id="fob"
              value={data.fob}
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"fob"}>FOB</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="fret"
              value={data.fret}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"fret"}>Fret</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="assurance"
              value={data.assurance}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"assurance"}>Assurance</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="autres"
              value={data.autres}
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"autres"}>Autres</label>
          </div>
          <div className="inputBox col-3">
            <input
              id="base"
              value={data.base}
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"base"}>Base des impositions</label>
          </div>
      
        </div>

        {/* ligne 3 */}
        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-2">
            <input
              id="droits"
              value={data.droits}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"droits"}>Droits et Taxes</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="chemise"
              value={data.chemise}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"chemise"}>Chemise</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="ri"
              value={data.ri}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"ri"}>Redevance Inf.</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="scanner"
              value={data.scanner}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"scanner"}>Scanner</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="total"
              value={data.total}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"total"}>Total Déclaration</label>
          </div>
        </div>
      </fieldset>

      {/* Docs, PJ, Autres fieldset */}
      <fieldset>
        <legend>Documents joints</legend>
        <div
          style={{
            display: "flex",
            padding: 5,
            overflowY: "scroll",
            margin: 0,
          }}
        >
          {data.documents.map((doc, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                fontSize: "0.8rem",
                alignItems: "center",
                justifyContent: "space-around",
                paddingInline: 5,
                margin: 0,
                //  border: "1px solid var(--main-color)",
                borderRadius: "var(--border-radius)",
              }}
            >
              <input
                id={doc.type}
                //   value={data.exo}
                checked={doc.checked}
                type="checkbox"
                onChange={(e) => handleChecked(e, index)}
                autoComplete="off"
                required
              />
              <span style={{ marginLeft: 5 }}>{""}</span>
              <label htmlFor={doc.type}>{doc.type}</label>
            </div>
          ))}
        </div>
      </fieldset>
      {/* Calcul impositions fieldset */}

      {/* footer boutton */}
      <fieldset>
        <div className="inputBox col-2">
        <button
          
          className="modalBtn col-12"
          onClick={() => {
     
            let dossier ={...dossiers[parseInt(indexDossier)], minute:[...dossiers[parseInt(indexDossier)].minute, data ]}
            console.log(dossier);
            dispatch(updateDossier(dossier))

            // setData(initData);
          }}
        >
          { indexDossier?"Ajouter" :"Enrégistrer"}
        </button>

        {/* first button */}
          <button
            className="modalBtn col-12"
            onClick={() => {
              //   console.log(data.nif && data.nom);
              // indexDossier?dispatch(updateClient(data)):dispatch(addClient(data))
              console.log(data);

              // setData(initData);
            }}
          >
            Enrégistrer
          </button>
        </div>
      </fieldset>
    </div>
  );

  return (
    <div>
      <div className="page-header col-6">
        <div className="page-header-item col-12">
          <h4>
            <Link to="/dossiers">Dossiers / Minute</Link> /{" "}
            {indexDossier ? "Edition" : "Nouveau"}
          </h4>
        </div>
      </div>
      <div className="card :">{render}</div>
    </div>
  );
};

export default Minute;
