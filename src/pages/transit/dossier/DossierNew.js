import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDossier, updateDossier } from "../../../redux/dossierUnitraf/action";
import { Link } from "react-router-dom";
import Listing from "../../../components/listing/Listing";
import { initData, listMode, listStatus, listType , listProvenance} from "../utils/dossierUtils";
import { useEffect } from "react";
// import './dossier.css'
const content = ["Compte 1", "Compte 2", "CompteHGKGKJ 3"];

const DossierNew = (props) => {
  console.log(props.location.pathname.match(/(\d+)/));
  const dispatch = useDispatch();
  const dossiers = useSelector((state) => state.dossiers);
  const clients = useSelector((state) => state.clients)
  const destinataire = clients.map(client =>client.nom);

  const [data, setData] = useState(initData);
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
// Listing render
  const renderDestinataire = (item, index) => (
    <div
      key={index}
      onClick={() => {
        console.log("item", item);
        console.log("client", clients[index]);
        setData({ ...data, destinataire: item, client:clients[index] });
      }}
    >
      <span className="col-4">{item}</span>
    </div>
  );
  const renderMode = (item, index) => (
    <div
      key={index}
      onClick={() => {
        console.log("item", item);
        setData({ ...data, mode: item });
      }}
    >
      <span className="col-4">{item}</span>
    </div>
  );
  const renderStatus = (item, index) => (
    <div
      key={index}
      onClick={() => {
        console.log("item", item);
        setData({ ...data, status: item });
      }}
    >
      <span className="col-4">{item}</span>
    </div>
  );
  const renderProvenance = (item, index) => (
    <div
      key={index}
      onClick={() => {
        console.log("item", item);
        setData({ ...data, provenance: item });
      }}
    >
      <span className="col-4">{item}</span>
    </div>
  );
  const renderType = (item, index) => (
    <div
      key={index}
      onClick={() => {
        console.log("item", item);
        setData({ ...data, type: item });
      }}
    >
      <span className="col-4">{item}</span>
    </div>
  );
  const renderContent = (item, index) => (
    <div
      key={index}
      onClick={() => {
        console.log("item", item);
        setData({ ...data, destinataire: item });
      }}
    >
      <span className="col-4">{item}</span>
    </div>
  );
  // end
  let indexDossier = props.location.pathname.match(/(\d+)/);

  console.log(dossiers[parseInt(indexDossier)]);
  console.log(data)
  useEffect(() => {
    indexDossier &&
      dossiers[parseInt(indexDossier)] &&
      setData({ ...dossiers[parseInt(indexDossier)] });
  }, []);

  const render = (
    <div className="dossier__form">
      {/* detail fieldset */}
      <fieldset>
        <legend>Infos Commande</legend>
        {!indexDossier && (
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
        )}
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
            id="reference"
            value={data.reference}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"reference"}>Reférence</label>
        </div>
        <div className="inputBox col-3">
          <input
            id="destinataire"
            value={data.destinataire}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"destinataire"}>Destinataire</label>

          <Listing
        
            content={destinataire}
            render={renderDestinataire}
            //   select={setSelectJournal}
            min={155}
            max={155}
          />
        </div>
        <div className="inputBox col-3">
          <input
            id="expediteur"
            value={data.expediteur}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"expediteur"}>Expéditeur</label>
          {/* <Listing
            content={content}
            render={renderContent}
            //   select={setSelectJournal}
            min={155}
            max={155}
          /> */}
        </div>
      </fieldset>
      {/* Expédition fieldset */}
      <fieldset>
        <legend>Document d'expédition</legend>

        <div className="inputBox col-2">
          <input
            id="document"
            value={data.document}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"document"}>Document</label>
        </div>

        <div className="inputBox col-2">
          <input
            id="depart"
            value={data.depart}
            type="date"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"depart"}>Départ</label>
        </div>
        <div className="inputBox col-2">
          <input
            id="arrivee"
            value={data.arrivee}
            type="date"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"arrivee"}>Arrivée</label>
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

          <label htmlFor={"mode"}>Mode</label>
          <Listing
            content={listMode}
            render={renderMode}
            //   select={setSelectJournal}
            min={155}
            max={155}
          />
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
          <Listing
            content={listProvenance}
            render={renderProvenance}
            //   select={setSelectJournal}
            min={155}
            max={155}
          />
        </div>
      </fieldset>

      {/* Colisahe fieldset */}
      <fieldset>
        <legend>Colisage des marchandises</legend>

        <div className="inputBox col-2">
          <input
            id="quantite"
            value={data.quantite}
            type="number"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"quantite"}>Nombre</label>
        </div>
        <div className="inputBox col-2">
          <input
            id="type"
            value={data.type}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"type"}>Type</label>
          <Listing
        
        content={listType}
        render={renderType}
        //   select={setSelectJournal}
        min={155}
        max={155}
      />
        </div>
        {/* <div className="inputBox col-2">
          <input
            id="dimensions"
            value={data.dimensions.long}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"dimensions"}>Dimensions</label>
         
        </div> */}
        <div className="inputBox col-8">
          <input
            id="description"
            value={data.description}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"description"}>Description des marchandises</label>
        </div>
      </fieldset>

      {/* Status fieldset */}
      <fieldset>
        <legend>Suivi Interne</legend>

        <div className="inputBox col-2">
          <input
            id="status"
            value={data.status}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"status"}>Status</label>
          <Listing
            content={listStatus}
            render={renderStatus}
            //   select={setSelectJournal}
            min={155}
            max={155}
          />
        </div>
      </fieldset>
      {/* footer boutton */}
      <fieldset className="p_none" >
        <div className="inputBox col-2">
          <button
            className="button col-12"
            onClick={() => {
              console.log(data);

              indexDossier
                ? dispatch(updateDossier(data))
                : dispatch(addDossier(data));

              console.log("valider");
              setData(initData);
            }}
          >
            {indexDossier ? "Valider" : "Sauvegarder"}
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
            <Link to="/dossiers">Dossier</Link> /{" "}
            {indexDossier ? `Edition - dossier N° ${data.numero}` : "Nouveau"}
          </h4>
        </div>
      </div>
      <div className="card col-">{render}</div>
    </div>
  );
};

export default DossierNew;
