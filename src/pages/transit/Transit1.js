import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClient, updateClient } from "../../redux/clientUnitraf/action";
import { updateDossier } from "../../redux/dossierUnitraf/action";

import {
  listBureauDestination,
  listBureauFrontiere,
  listUnite,
  paysExport,
  paysImport,
  initData,
} from "./utils/t1Utils";
import { Link } from "react-router-dom";
import Listing from "../../components/listing/Listing";
import "./transit.css";
const listStatus = ["Active", "Prorogé", "Expirée"];

const Transit1 = (props) => {
  let param = JSON.parse(props.match.params.param);

  console.log("param", param);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const dossiers = state.dossiers;
  const tarifs = state.tarifs;
  const listPosition = tarifs.map((tarif) => tarif.nts);
  const [data, setData] = useState(initData);


  const renderPosition = (item, index) => (
    <div
      key={index}
      style={{ padding: 5, margin: 5 }}
      onClick={() => {
        console.log("item", item);
            setData({
          ...data,
          position:item,
          marchandise: tarifs[index].designation,
        });
      }}
    >
      <span className="col-6">{item}</span>
    </div>
  );
  const renderPaysExport = (item, index) => (
    <div
      key={index}
      onClick={() => {
        console.log("item", item);
        setData({ ...data, paysExport: item });
      }}
    >
      <span className="col-4">{item}</span>
    </div>
  );
  const renderBureauDestination = (item, index) => (
    <div
      key={index}
      onClick={() => {
        console.log("item", item);
        setData({ ...data, burDestination: item });
      }}
    >
      <span className="col-4">{item}</span>
    </div>
  );
  const renderBureauFrontiere = (item, index) => (
    <div
      key={index}
      onClick={() => {
        console.log("item", item);
        setData({ ...data, burEntree: item });
      }}
    >
      <span className="col-4">{item}</span>
    </div>
  );

  console.log(dossiers[param.dossierIndex]);
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleChecked = (e) => {
    setData({ ...data, [e.target.id]: e.target.checked });
  };

  useEffect(() => {
    
    dossiers[param.dossierIndex].t1.length > 0 &&
      dossiers[param.dossierIndex].t1[param.itemIndex] &&
      setData(dossiers[param.dossierIndex].t1[param.itemIndex]);
  }, []);

  const render = (
    <div className="t1_form">
      {/* detail fieldset */}
      <fieldset
        className=""
        style={{ display: "flex", flexDirection: "column" }}
      >
        <legend>Déclaration T1</legend>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-2">
            <input
              id="reference"
              value={data.reference}
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"reference"}>Reférence</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="numero"
              value={data.numero}
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"numero"}>Numéro</label>
          </div>
          <div className="inputBox col-3">
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
              id="paysExport"
              value={data.paysExport}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"paysExport"}>Pays d'export.</label>
            <Listing
              content={paysExport}
              render={renderPaysExport}
              min={155}
              max={155}
            />
          </div>
        </div>
        {/* ligne 2 */}
        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-3">
            <input
              id="camion"
              value={data.camion}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"camion"}>Camion/Transport</label>
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

            <label htmlFor={"burEntree"}>Bur. d'entrée Frontière</label>
            <Listing
              content={listBureauFrontiere}
              render={renderBureauFrontiere}
              min={155}
              max={155}
            />
          </div>
          <div className="inputBox col-3">
            <input
              id="burDestination"
              value={data.burDestination}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"burDestination"}>Bur. de Destination</label>
            <Listing
              content={listBureauDestination}
              render={renderBureauDestination}
              min={155}
              max={155}
            />
          </div>
        </div>
        {/* ligne 3 */}
        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-3">
            <input
              id="position"
              value={data.position}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"position"}>Position NTS</label>
            <Listing
              content={listPosition}
              render={renderPosition}
              min={155}
              max={155}
            />
          </div>
          <div className="inputBox col-6">
            <input
              id="marchandise"
              value={data.marchandise}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"marchandise"}>Marchandises</label>
          </div>
        </div>
        {/* ligne 4 */}
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
              type="number"
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
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"volume"}>Volume</label>
          </div>
        </div>
      </fieldset>

      {/* footer boutton */}
      <fieldset className="p_none">
        <div className="inputBox col-2">
          <button
            className="modalBtn col-12"
            onClick={() => {
              console.log(dossiers[param.dossierIndex].t1);

              if (dossiers[param.dossierIndex].t1[param.itemIndex]) {
                // Mis a jour
                console.log("vrai");
                console.log(data);
                let updateT1 = dossiers[param.dossierIndex].t1.map(
                  (item, index) => {
                    if (index === param.itemIndex) {
                      return data;
                    }
                    return item;
                  }
                );

                console.log(updateT1);
                let dossier = { ...dossiers[param.dossierIndex], t1: updateT1 };
                dispatch(updateDossier(dossier));
              } else {
                // Ajout Nouveau
                console.log("faux");
                let dossier = {
                  ...dossiers[param.dossierIndex],
                  t1: [...dossiers[param.dossierIndex].t1, data],
                };
                dispatch(updateDossier(dossier));
              }

              setData(initData);
            }}
          >
            {param.dossierIndex + 1 ? "Ajouter" : "Editer"}
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
            <Link to="/dossiers">Dossiers / T1</Link> /{" "}
            {param.dossierIndex + 1 ? "Edition" : "Nouveau"}
          </h4>
        </div>
      </div>
      <div className="card :">{render}</div>
    </div>
  );
};

export default Transit1;
