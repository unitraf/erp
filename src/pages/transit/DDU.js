import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  updateDossier } from "../../redux/dossierUnitraf/action";
import { useReactToPrint  } from "react-to-print";
import { initData, listBureau, listRep, listUnite } from "./utils/declaration";
import { Link } from "react-router-dom";
import DropDownList from "../../components/dropDownList/DropDownList";
import Listing from "../../components/listing/Listing";
 import "./ddu.css"

const renderRepertoire = (item, index) => (
  <div
    key={index}
    onClick={() => {
      console.log("item", item);
      
      // setData({ ...data, destinataire: item, client:clients[index] });
    }}
  >
    <span className="col-4">{item}</span>
  </div>
);
const DDU = (props) => {
   let param =JSON.parse(props.match.params.param)

  console.log("param",props.match);

  const dduRef = useRef();
  
   const handlePrint = useReactToPrint({
    content: () => dduRef.current,
    documentTitle:"DDU",
   
  });
  console.log(props.location.pathname.match(/(\d+)/));
  const dispatch = useDispatch();
  const dossiers = useSelector((state) => state.dossiers);
  const [data, setData] = useState(initData);

  console.log(data);
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleChecked = (e) => {
    setData({ ...data, [e.target.id]: e.target.checked });
  };

  let indexDossier = props.location.pathname.match(/(\d+)/);

  

  const render = (
    <div ref={dduRef} className="ddu_form">
      {/* detail fieldset */}
      <fieldset
        className=""
        style={{ display: "flex", flexDirection: "column" }}
      >
        <legend>Infos DDU</legend>
        {/* <button onClick={()=>handlePrint()} >Print</button> */}
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

            <label htmlFor={"repertoire"}>Répertoire</label>
            <Listing
        
        content={["rep 1", "rep 2"]}
        render={renderRepertoire}
        //   select={setSelectJournal}
        min={155}
        max={155}
      />
          </div>
          <div className="inputBox col-5">
            <input
              id="bureau"
              value={data.bureau}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"bureau"}>Bureau de Dédouanement</label>
            <Listing
        
        content={["rep 1", "rep 2"]}
        render={renderRepertoire}
        //   select={setSelectJournal}
        min={155}
        max={155}
      />
          </div>
          <div className="inputBox col-2">
            <input
              id="reference"
              value={data.reference}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"reference"}>Réf. Douane</label>
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
         
        
        </div>
          {/* ligne 2 */}
      
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
          {/* <div className="inputBox col-1">
            <input
              id="unite"
              value={data.unite}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"unite"}>Unité</label>
          </div> */}
          
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

          <div className="inputBox col-2">
            <input
              id="position"
              value={data.position}
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"position"}>Position</label>
            <Listing
        
        content={["rep 1", "rep 2"]}
        render={renderRepertoire}
        //   select={setSelectJournal}
        min={155}
        max={155}
      />
          </div>
          <div className="inputBox col-4">
            <input
              id="descrition"
              value={data.descrition}
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"descrition"}>Marchandises</label>
          </div>
        </div>

        {/* ligne 3 */}
        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-3">
            <input
              id="valeur"
              value={data.valeur}
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"valeur"}>Valeur statistique</label>
          </div>
          <div className="inputBox col-3">
            <input
              id="taxe"
              value={data.taxe}
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"taxe"}>Taxe Globale</label>
          </div>
         
          <div className="inputBox col-3">
            <input
              id="total"
              value={data.total}
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"total"}>Total Decl.</label>
          </div>
        </div>
        {/* ligne 4 */}
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

            <label htmlFor={"camion"}>camion</label>
          </div>
          <div className="inputBox col-3">
            <input
              id="exo"
              value={data.exo}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"exo"}>exo</label>
          </div>
          <div className="inputBox col-3">
            <input
              id="nts"
              value={data.nts}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"nts"}>nts</label>
          </div>
         
        </div>

        <div className="col-12" style={{ display: "flex" }}>
        
          <div className="inputBox col-2">
            <input
              id="liquidation"
              value={data.liquidation}
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"liquidation"}>N° liquidation</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="dateLiquid"
              value={data.dateLiquid}
              type="date"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"dateLiquid"}>Date</label>
          </div>
          <div className="inputBox col-3">
            <input
              id="quittance"
              value={data.quittance}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"quittance"}>N° Quittance</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="dateQuit"
              value={data.dateQuit}
              type="date"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"dateQuit"}>Date</label>
          </div>
        </div>
      </fieldset>

      {/* footer boutton */}
      <fieldset>
        <div className="inputBox col-2">
          <button
            className="modalBtn col-12"
            onClick={() => {
              if (dossiers[param.dossierIndex].t1[param.itemIndex]) {
                // Mis a jour
                console.log("vrai");
               
                let updateDeclaration = dossiers[param.dossierIndex].declaration.map(
                  (item, index) => {
                    if (index === param.itemIndex) {
                      return data;
                    }
                    return item;
                  }
                );

                let dossier = { ...dossiers[param.dossierIndex], declaration: updateDeclaration };
                dispatch(updateDossier(dossier));
              } else {
                // Ajout Nouveau
                console.log("faux");
               
              let dossier ={...dossiers[parseInt(indexDossier)], declaration:[...dossiers[parseInt(indexDossier)].declaration, data ]}
              
              dispatch(updateDossier(dossier))
              }
              
              setData(initData);
            }}
          >
            {indexDossier ? "Valider" : "Enrégistrer"}
          </button>
        </div>
      </fieldset>
    </div>
  );
  useEffect(() => {
    
    dossiers[param.dossierIndex].declaration.length > 0 &&
      dossiers[param.dossierIndex].declaration[param.itemIndex] &&
      setData(dossiers[param.dossierIndex].declaration[param.itemIndex]);
  }, []);
  return (
    <div>
      <div className="page-header col-6">
        <div className="page-header-item col-12">
          <h4>
            <Link to="/dossiers">Dossiers/ Déclaration / </Link> 
            {indexDossier ? "Edition" : "Nouveau"}
          </h4>
        </div>
      </div>
      <div className="card :">{render}</div>
    </div>
  );
};

export default DDU;
