import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDossier } from "../../../redux/dossierUnitraf/action";

import { initData,listRegime } from "../utils/minute";
import { Link } from "react-router-dom";


import "./minute.css";
import Listing from "../../../components/listing/Listing";
const Minute = (props) => {
  let param = JSON.parse(props.match.params.param);
  const [data, setData] = useState(initData);
  
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const dossiers = state.dossiers;
  const tarifs = state.tarifs;
  const listPosition = tarifs.map((tarif) => tarif.nts);


  const valeur =
    parseInt(data.fob) +
    parseInt(data.fret) +
    parseInt(data.assurance) +
    parseInt(data.autres);

  const taxes = parseInt(data.chemise) + parseInt(data.ri) + parseInt(data.scanner);
  const baseTva =
    data.tarif.entree &&
    data.tarif.entree.reduce((total, curr) => {
    
      if (
        curr.checked &&
        Object.keys(curr)[0] !== "TVA" &&
        Object.keys(curr)[0] !== "DA"&&
        Object.keys(curr)[0] !== "TVI"
      ) {
        return (total += (valeur * Object.values(curr)[0]) / 100);
      }

      if (curr.checked && Object.keys(curr)[0] === "DA") {
        return (total += parseInt(data.quantite) * Object.values(curr)[0]);
      }
      return total;
    }, 0);
  
  const totalConso =
    data.tarif.entree &&
    data.tarif.entree.reduce((total, curr) => {
     
      if (
        curr.checked &&
        Object.keys(curr)[0] !== "TVA" &&
        Object.keys(curr)[0] !== "DA"
      ) {
        return (total += (valeur * Object.values(curr)[0]) / 100);
      }
      if (curr.checked && Object.keys(curr)[0] === "DA") {
        return (total += parseInt(data.quantite) * Object.values(curr)[0]);
      }
      if (curr.checked && Object.keys(curr)[0] === "TVA") {
        return (total += ((valeur + baseTva) * Object.values(curr)[0]) / 100);
      }
      return total;
    }, 0);

  const totalExport =
    data.tarif.entree &&
    data.tarif.sortie.reduce((total, curr) => {
     
      if (curr.checked) {
        return (total += (valeur * Object.values(curr)[0]) / 100);
      } else {
      }
      return total;
    }, 0);

 const declaration = data.code==="3000"?totalExport+taxes:totalConso+taxes
 const droits = data.code==="3000"?totalExport:totalConso
  const listT1 =
    dossiers[param.dossierIndex].t1.length > 0 &&
    dossiers[param.dossierIndex].t1.map((t1) => t1.numero);

  const getTarif = (position) =>
    tarifs.filter((tarif) => tarif.nts === position);
  const renderT1 = (item, index) => (
    <div
      key={index}
      onClick={() => {
        let t1 = dossiers[param.dossierIndex].t1[index];

        let tarif =
          getTarif(t1.position).length > 0
            ? getTarif(t1.position)[0]
            : { nts: "", designation: "" };

        setData({
          ...data,
          numero: dossiers[param.dossierIndex].numero,
          importateur: dossiers[param.dossierIndex].importateur,
          destinataire: dossiers[param.dossierIndex].destinataire,
          t1: item,
          burEntree: t1.burEntree,
          burDestination: t1.burDestination,

          origine: dossiers[param.dossierIndex].origine,
          provenance: dossiers[param.dossierIndex].provenance,
          camion: t1.camion,
          type: dossiers[param.dossierIndex].type,
          mode: dossiers[param.dossierIndex].mode,
          colis: dossiers[param.dossierIndex].quantite,
          document: dossiers[param.dossierIndex].document,

          tarif,
          quantite: t1.quantite,
          poids: t1.poids,
          volume: t1.volume,
        });
      }}
    >
      <span className="col-4">{item}</span>
    </div>
  );
  const renderRegime = (item, index) => (
    <div
      key={index}
      onClick={()=>setData({...data, regime:item.regime, code:item.code})}
        >
      <span className="col-4">{item.regime}</span>
    </div>
  )
  const renderPosition = (item, index) => (
    <div
      key={index}
      style={{ padding: 5, margin: 5 }}
      onClick={() => {
       
        setData({
          ...data,

          tarif: tarifs[index],
        });
      }}
    >
      <span className="col-6">{item}</span>
    </div>
  );
 
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  // Pj
  const handleChecked = (e, index) => {
    let documents = data.documents.map((pj, ind) =>
      ind === index
        ? { ...data.documents[index], checked: !data.documents[index].checked }
        : pj
    );

    setData({ ...data, documents });
  };
  const handleCheckedTauxEntree = (e, item, index) => {
    let updateEntree = data.tarif.entree.map((type) => {
      if (Object.keys(type)[0] == Object.keys(item)[0]) {
        switch (Object.keys(item)[0]) {
          case "DA":
            let montantDA =
              e.target.checked && Object.values(item)[0] * data.quantite;
            return montantDA
              ? { ...item, checked: e.target.checked, montant: montantDA }
              : { ...item, checked: e.target.checked };

          case "TVA":
            let montantTVA =
              e.target.checked &&
              (Object.values(item)[0] * (valeur + baseTva)) / 100;
            return montantTVA
              ? { ...item, checked: e.target.checked, montant: montantTVA }
              : { ...item, checked: e.target.checked };

          default:
            let montant =
              e.target.checked && (Object.values(item)[0] * valeur) / 100;
            return montant
              ? { ...item, checked: e.target.checked, montant }
              : { ...item, checked: e.target.checked };
        }
      }
      return type;
    });
    let tarif = { ...data.tarif, entree: updateEntree };

    setData({ ...data, tarif });
  };
  const handleCheckedTauxSortie = (e, item, index) => {
    let updateSortie = data.tarif.sortie.map((type) => {
      if (Object.keys(type)[0] == Object.keys(item)[0]) {
        let montant =
          e.target.checked && (Object.values(item)[0] * valeur) / 100;

        return montant
          ? { ...item, checked: e.target.checked, montant }
          : { ...item, checked: e.target.checked };
      }
      return type;
    });
    let tarif = { ...data.tarif, sortie: updateSortie };

    setData({ ...data, tarif });
  };

  

  const render = (
    <div className="minute__form">
      {/* ligne 1 */}
      <div className="col-12 line">
      <div className="inputBox col-2">
          <input
            id="numero"
            value={`370/${data.numero}`}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"destinataire"}>N° Transit</label>
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
        </div>
        <div className="inputBox col-2">
          <input
            id="colis"
            value={data.type}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"type"}>Type Colis</label>
        </div>
        <div className="inputBox col-2">
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
       
        <div className="inputBox col-2">
          <input
            id="mode"
            value={data.mode}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"mode"}>Mode Transp.</label>
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

          <label htmlFor={"origine"}>Origine</label>
        </div>
      </div>
      {/* ligne 3 */}
      <div className="col-12 line">
        <div className="inputBox col-6">
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
        <div className="inputBox col-6">
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
     
     
      {/* Colisage T1 de la marchandises fieldset */}
      <fieldset
        className="col-12"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <legend>Colisage T1</legend>
        {/* ligne 1 */}
        <section
          className="col-12"
          style={{ display: "flex", paddingInline: 5 }}
        >
          <div className="inputBox col-2">
            <input
              id="t1"
              value={data.t1}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"t1"}>N° T1</label>
            <Listing
              content={listT1}
              render={renderT1}
              //   select={setSelectJournal}

              min={155}
              max={155}
            />
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
        <div className="inputBox col-3">
            <input
              id="camion"
              value={data.camion}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"camion"}>Moyen de Transp.</label>
          </div>
        </section>
        {/* ligne 2*/}
        <section
          className="col-12"
          style={{ display: "flex", paddingInline: 5 }}
        >
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
              id="nts"
              value={data.tarif.nts}
              type="text"
              onChange={(e) => {
                let tarif = { ...data.tarif, [e.target.id]: e.target.value };
                setData({ ...data, tarif });
              }}
              autoComplete="off"
              required
            />

            <label htmlFor={"nts"}>Position</label>
            <Listing
              content={listPosition}
              render={renderPosition}
              min={455}
              max={555}
            />
          </div>

          <div className="inputBox col-5">
            <input
              id="designation"
              value={data.tarif.designation}
              type="text"
              onChange={(e) => {
                let tarif = { ...data.tarif, [e.target.id]: e.target.value };
                setData({ ...data, tarif });
              }}
              autoComplete="off"
              required
            />

            <label htmlFor={"designation"}>Désignation de la marchandise</label>
          </div>
          <div className="inputBox col-1">
            <input
              id="us"
              value={data.tarif.us}
              type="text"
              onChange={(e) => {
                let tarif = { ...data.tarif, [e.target.id]: e.target.value };
                setData({ ...data, tarif });
              }}
              autoComplete="off"
              required
            />

            <label htmlFor={"us"}>Us</label>
          </div>
        </section>
     
      </fieldset>
      <section>
         {/* ligne 4 */}
      <div className="col-12 line" style={{display:"flex"}} >
      <div className="col-6" style={{display:"flex", justifyContent:"space-between"}}>
      <div className="inputBox col-4">
          <input
            id="reference"
            value={data.reference}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"reference"}>Reférence douane</label>
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

          <label htmlFor={"exo"}>N° Exo</label>
        </div>
        <div className="inputBox col-3">
          <input
            id="license"
            value={data.license}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"license"}>N° License</label>
        </div>
        </div>
       <div className="col-4"style={{display:"flex", justifyContent:"space-around"}} >

       
        <div className="inputBox col-8">
          <input
            id="regime"
            value={data.regime}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"regime"}>Régime</label>
          <Listing
              content={listRegime}
              render={renderRegime}
              //   select={setSelectJournal}

             
            />
        </div>
        <div className="inputBox col-4">
          <input
            id="code"
            value={data.code}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"regime"}>Code</label>
         
        </div>
        </div>
      </div>
      </section>
      <div style={{ display: "flex" }}>
        {/* Valeurs de la marchandises fieldset */}
        <fieldset
          className="col-6"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <legend>Valeurs de la marchandise</legend>
          {/* ligne 1 */}
          <section
            className="col-12"
            style={{ display: "flex", paddingInline: 5 }}
          >
            <table className="col-12">
              <thead>
                <tr>
                  <th>Fob</th>
                  <th>Fret</th>
                  <th>Assurance</th>
                  <th>Autres</th>
                  
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="col-3" >
                    <input
                      className="inputBox col-12"
                      id="fob"
                      value={data.fob}
                      type="number"
                      onChange={handleChange}
                      autoComplete="off"
                      required
                    />
                  </td>
                  <td className="col-3">
                    <input
                      className="inputBox col-12"
                      id="fret"
                      value={data.fret}
                      type="number"
                      onChange={handleChange}
                      autoComplete="off"
                      required
                    />
                  </td>
                  <td className="col-3">
                    <input
                      className="inputBox col-12"
                      id="assurance"
                      value={data.assurance}
                      type="number"
                      onChange={handleChange}
                      autoComplete="off"
                      required
                    />
                  </td>
                  <td className="col-3">
                    <input
                      className="inputBox col-12"
                      id="autres"
                      value={data.autres}
                      type="number"
                      onChange={handleChange}
                      autoComplete="off"
                      required
                    />
                  </td>
                  
                </tr>
              </tbody>
            </table>
          </section>

          {/* ligne 2  */}
          <section
            className="col-12"
            style={{ display: "flex", paddingInline: 5 }}
          >
            <table className="col-12">
              <thead>
                <tr>
                  <th>Chemise</th>
                  <th>Redev. Inf</th>
                  <th>Scanner</th>
                  <th>Autres</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="col-3">
                    <input
                      className="inputBox col-12"
                      id="chemise"
                      value={data.chemise}
                      type="number"
                      onChange={handleChange}
                      autoComplete="off"
                      required
                    />
                  </td>
                  <td className="col-3">
                    <input
                      className="inputBox col-12"
                      id="ri"
                      value={data.ri}
                      type="number"
                      onChange={handleChange}
                      autoComplete="off"
                      required
                    />
                  </td>
                  <td className="col-3">
                    <input
                      className="inputBox col-12"
                      id="scanner"
                      value={data.scanner}
                      type="number"
                      onChange={handleChange}
                      autoComplete="off"
                      required
                    />
                  </td>

                  <td className="col-3">Autres</td>
                </tr>
              </tbody>
            </table>
          </section>
        </fieldset>

        {/* Impositions fieldset */}
        <fieldset
          className="col-4"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <legend>Calcul des impositions</legend>
          {/* ligne 1 */}

          <section
            className="col-12"
            style={{
              display: "flex",
              height: 95,
              overflowY: "scroll",
              marginBottom: 5,
            }}
          >
            {/* Calcul entrée */}
            {data.tarif.entree && data.code === "4000" && (
              <table className="col-12">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Base</th>
                    <th>Taux</th>
                    <th>Montant</th>
                  </tr>
                </thead>

                <tbody>
                  {data.tarif.entree.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="checkbox"
                          checked={Object.values(item)[1]}
                          onChange={(e) =>
                            handleCheckedTauxEntree(e, item, index)
                          }
                        />
                      </td>
                      <td>{Object.keys(item)[0]}</td>
                      <td>
                        {Object.keys(item)[0] === "DA"
                          ? data.quantite && parseInt(data.quantite)
                          : Object.keys(item)[0] === "TVA"
                          ? baseTva + valeur
                          : valeur}
                      </td>
                      <td>{Object.values(item)[0]}</td>
                      <td>
                        {Object.keys(item)[0] === "DA"
                          ? data.quantite &&
                            parseInt(data.quantite) * Object.values(item)[0]
                          : Object.keys(item)[0] === "TVA"
                          ? (Object.values(item)[0] * (baseTva + valeur)) / 100
                          : (Object.values(item)[0] * valeur) / 100}
                      </td>
                    </tr>
                  ))}
                </tbody>

                <tfoot>
                  <tr className="col-12">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>{totalConso}</td>
                  </tr>
                </tfoot>
              </table>
            )}
            {/* Calcul Sortie */}
            {data.tarif.sortie && data.code === "3000" && (
              <table className="col-12">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Base</th>
                    <th>Taux</th>
                    <th>Montant</th>
                  </tr>
                </thead>

                <tbody>
                  {data.tarif.sortie.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="checkbox"
                          checked={Object.values(item)[1]}
                          onChange={(e) =>
                            handleCheckedTauxSortie(e, item, index)
                          }
                        />
                      </td>
                      <td>{Object.keys(item)[0]}</td>
                      <td>{valeur ? valeur : 0}</td>
                      <td>{Object.values(item)[0]}</td>
                      <td>
                        {valeur ? (Object.values(item)[0] / 100) * valeur : 0}
                      </td>
                    </tr>
                  ))}
                </tbody>

                <tfoot>
                  <tr className="col-12">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>{totalExport}</td>
                  </tr>
                </tfoot>
              </table>
            )}
          </section>
        </fieldset>
        <div
          className="col-2"
          style={{ display: "flex", flexDirection: "column", justifyContent:"space-between", padding:3 }}
        >
          <fieldset style={{display:"flex", justifyContent:"center",}}>
            <legend>Valeur</legend>
            <span style={{fontSize:"0.8rem"}} >{data.valeur}</span>
          </fieldset>
          <fieldset style={{display:"flex", justifyContent:"center"}}>
            <legend>Taxes</legend>
            <span style={{fontSize:"0.8rem"}} >{data.taxes}</span>
          </fieldset>
          <fieldset style={{display:"flex", justifyContent:"center"}}>
            <legend>Déclaration</legend>
            <span style={{fontSize:"0.8rem"}} >{data.declaration}</span>
          </fieldset>
   
        </div>
      </div>
      {/* Docs, PJ, Autres fieldset */}
      <fieldset>
        <legend>Documents joints</legend>
        <section
          className="col-12"
          style={{
            display: "flex",
            flexFlow: "wrap",

            padding: 5,
            overflowY: "scroll",
            margin: 0,
          }}
        >
          {data.documents.map((doc, index) => (
            <section
              key={index}
              style={{
                display: "flex",
                fontSize: "0.8rem",
                alignItems: "center",
                justifyContent: "space-around",
                paddingInline: 5,
                marginBottom: 5,
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
            </section>
          ))}
        </section>
      </fieldset>

      {/* footer boutton */}
      <div className="trait" style={{ marginTop: 10 }}></div>
      <div style={{ marginTop: 5 }}>
        <section className="inputBox col-2">
          <button
            className="modalBtn col-12"
            onClick={() => {
              if (dossiers[param.dossierIndex].minute[param.itemIndex]) {
                // Mis a jour

                let updateMinute = dossiers[param.dossierIndex].minute.map(
                  (item, index) => {
                    if (index === param.itemIndex) {
                      return data;
                    }
                    return item;
                  }
                );

               
                let dossier = {
                  ...dossiers[param.dossierIndex],
                  minute: updateMinute,
                };
                dispatch(updateDossier(dossier));
              } else {
                // Ajout Nouveau
               

                let dossier = {
                  ...dossiers[parseInt(param.dossierIndex)],
                  minute: [
                    ...dossiers[parseInt(param.dossierIndex)].minute,
                    data,
                  ],
                };
               
                dispatch(updateDossier(dossier));
              }

              setData(initData);
            }}
          >
            {param.dossierIndex ? "Valider" : "Sauvegarder"}
          </button>

          {/* first button */}
          <button
            className="modalBtn col-12"
            onClick={() => {
              
              setData(initData);
            }}
          >
            Annuler
          </button>
        </section>
      </div>
    </div>
  );
  useEffect(() => {
    
     setData({ ...data, taxes, valeur, baseTva, declaration, droits });
   }, [taxes, valeur, baseTva, declaration, droits]);

   useEffect(() => {
    dossiers[param.dossierIndex]&& setData({
      ...data,
      numero: dossiers[param.dossierIndex].numero,
      importateur: dossiers[param.dossierIndex].client.nom,
      destinataire: dossiers[param.dossierIndex].destinataire,
      origine: dossiers[param.dossierIndex].origine,
      provenance: dossiers[param.dossierIndex].provenance,
      type: dossiers[param.dossierIndex].type,
      mode: dossiers[param.dossierIndex].mode,
      colis: dossiers[param.dossierIndex].quantite,
      document: dossiers[param.dossierIndex].document,  

    });
   
   }, [])
   

  useEffect(() => {

    dossiers[param.dossierIndex].minute.length > 0 &&
      dossiers[param.dossierIndex].minute[param.itemIndex] &&
      setData({...dossiers[param.dossierIndex].minute[param.itemIndex]});
  }, []);

 

 console.log("data",data);
  return (
    <div>
      <div className="page-header col-6">
        <div className="page-header-item col-12">
          <h4>
            <Link to="/dossiers">Dossiers / Minute</Link> /{" "}
            {param.dossierIndex ? "Edition" : "Nouveau"}
          </h4>
        </div>
      </div>
      <div className="card :">{render}</div>
    </div>
  );
};

export default Minute;
