import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClient, updateClient } from "../../redux/clientUnitraf/action";
import { Link } from "react-router-dom";
import DropDownList from "../../components/dropDownList/DropDownList";

const listStatus = ["Active", "Prorogé", "Expirée"];

const initData = {
  nom: "",
  email: "",
  bp: "",
  tel: "",
  nif: "",
  compte: "411",
  adresse: "",
  exo: false,
};

const ClientNew = (props) => {
  console.log(props.location.pathname.match(/(\d+)/));
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients);
  const [data, setData] = useState(initData);
  

  console.log(data);
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleChecked = (e) => {
    setData({ ...data, [e.target.id]: e.target.checked });
  };

  let indexClient = props.location.pathname.match(/(\d+)/);

  console.log(clients[parseInt(indexClient)]);
  useEffect(() => {
    indexClient &&
      clients[parseInt(indexClient)] &&
      setData({ ...clients[parseInt(indexClient)] });

  
  }, []);

  const render = (
    <div className="">
      {/* detail fieldset */}
      <fieldset
        className=""
        style={{ display: "flex", flexDirection: "column" }}
      >
        <legend>Informations du compte</legend>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-2">
            <input
              id="nif"
              value={data.nif}
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"nif"}>NIF</label>
          </div>
          <div className="inputBox col-6">
            <input
              id="nom"
              value={data.nom}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"nom"}>Nom, Raison sociale</label>
          </div>
        </div>
        {/* ligne 2 */}
        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-2">
            <input
              id="tel"
              value={data.tel}
              type="tel"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"tel"}>Téléphone</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="bp"
              value={data.bp}
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"bp"}>Boite Postale</label>
          </div>
          <div className="inputBox col-4">
            <input
              id="adresse"
              value={data.adresse}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"adresse"}>Adresse</label>
          </div>
        </div>

        {/* ligne 3 */}
        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-6">
            <input
              id="email"
              value={data.email}
              type="email"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"email"}>Email</label>
          </div>
        </div>
        {/* ligne 4 */}
        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-3">
            <input
              id="compte"
              value={data.compte}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"compte"}>Compte tiers</label>
          </div>
          <div
            className=" "
            style={{
              display: "flex",
              fontSize: "0.8rem",
              alignItems: "center",
              justifyContent: "space-around",
              paddingInline: 5,
              border: "1px solid var(--main-color)",
              borderRadius: "var(--border-radius)",
            }}
          >
            <input
              id="exo"
              //   value={data.exo}
              checked={data.exo}
              type="checkbox"
              onChange={handleChecked}
              autoComplete="off"
              required
            />
            <span style={{ marginLeft: 5 }}>{""}</span>
            <label htmlFor={"exo"}> Exonération TVA</label>
          </div>
        </div>
      </fieldset>

      {/* footer boutton */}
      <fieldset>
        <div className="inputBox col-2">
          <button
          
            className="modalBtn col-12"
            onClick={() => {
                console.log(data.nif&&data.nom);
                indexClient?dispatch(updateClient(data)):dispatch(addClient(data))
              

              setData(initData);
            }}
          >
            { indexClient?"Valider" :"Enrégistrer"}
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
            <Link to="/client">Client</Link> /{" "}
            {indexClient ? "Edition" : "Nouveau"}
          </h4>
        </div>
      </div>
      <div className="card :">{render}</div>
    </div>
  );
};

export default ClientNew;
