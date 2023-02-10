import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExo } from "../../redux/exoUnitraf/action";
import { Link } from "react-router-dom";
import DropDownList from "../../components/dropDownList/DropDownList";
import { listMode,  listType } from "./utils/dossierUtils";

const listStatus = ["Active","Prorogé", "Expirée" ]

const initData = {
  annee: "",
  code: "",
  numero: "",
  emission: "",
  expiration: "",
  importateur: "",
  beneficiaire: "",
  quantite: "",
  unite: "",
  valeur: "",
  position: "",
  lieu: "",
  bureau: "",
  prorogation: false,
  status: "Active",
  commentaires: "",
  details: [],
};

const initDetail = {
  quantite: "",
  poids: "",
  designation: "",
  valeur: "",
  position: "",
};
const ExoNew = (props) => {
  console.log(props.location.pathname.match(/(\d+)/));
  const dispatch = useDispatch();
  const exos = useSelector((state) => state.exos);
  const [data, setData] = useState(initData);
  const [details, setDetails] = useState([]);
  const [detail, setDetail] = useState(initDetail);
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleChangeDetail = (e) => {
    setDetail({ ...detail, [e.target.id]: e.target.value });
  };

  let indexExo = props.location.pathname.match(/(\d+)/);

  console.log(exos[parseInt(indexExo)]);
  useEffect(() => {
    indexExo &&
      exos[parseInt(indexExo)] &&
      setData({ ...exos[parseInt(indexExo)] });

    indexExo &&
      exos[parseInt(indexExo)] &&
      setDetails(exos[parseInt(indexExo)].details);
  }, []);

  const render = (
    <div className="">
      {/* detail fieldset */}
      <fieldset
        className=""
        style={{ display: "flex", flexDirection: "column" }}
      >
        <legend>Descriptions</legend>
        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-1">
            <input
              id="annee"
              value={data.annee}
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"annee"}>Année</label>
          </div>
          <div className="inputBox col-1">
            <input
              id="code"
              value={data.code}
              type="number"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"code"}>Code</label>
            {/* <Icon
          style={{border:"1px solid var(--main-color)", borderRadius: "5px"}}
            path={mdiChevronDown}
            size={0.8}
            onClick={() => console.log("list")}
          /> */}

            {/* <DropDownList
            content={content}
            select={setSelectJournal}
            min={155}
            max={155}
          /> */}
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
              id="emission"
              value={data.emission}
              type="date"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"emission"}>Emission</label>
          </div>
          <div className="inputBox col-3">
            <input
              id="expiration"
              value={data.expiration}
              type="date"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"expiration"}>Expiration</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="prorogation"
              value={data.prorogation}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"prorogation"}>Prorogation</label>
          </div>
        </div>
        <div className="col-12" style={{ display: "flex" }}>
          <div className="inputBox col-3">
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
          <div className="inputBox col-3">
            <input
              id="beneficiaire"
              value={data.beneficiaire}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"beneficiaire"}>Bénéficiaire</label>
          </div>
          <div className="inputBox col-3">
            <input
              id="lieu"
              value={data.lieu}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"lieu"}>Lieu d'utilisation</label>
          </div>
          <div className="inputBox col-4">
            <input
              id="bureau"
              value={data.bureau}
              type="text"
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label htmlFor={"bureau"}>Bureau de dédouanement</label>
          </div>
        </div>
      </fieldset>

      {/* Détail Exo */}
      <fieldset style={{ display: "flex", flexDirection: "column" }}>
        <legend>Détails</legend>
        <div style={{ display: "flex" }} className="col-12">
          <div className="inputBox col-2">
            <input
              id="quantite"
              value={detail.quantite}
              type="text"
              onChange={handleChangeDetail}
              autoComplete="off"
              required
            />

            <label htmlFor={"quantite"}>Quantité</label>
          </div>
          <div className="inputBox col-2">
            <input
              id="poids"
              value={detail.poids}
              type="text"
              onChange={handleChangeDetail}
              autoComplete="off"
              required
            />

            <label htmlFor={"poids"}>Poids</label>
          </div>
          <div className="inputBox col-4">
            <input
              id="designation"
              value={detail.designation}
              type="text"
              onChange={handleChangeDetail}
              autoComplete="off"
              required
            />

            <label htmlFor={"designation"}>Désignations</label>
          </div>
          <div className="inputBox col-3">
            <input
              id="valeur"
              value={detail.valeur}
              type="text"
              onChange={handleChangeDetail}
              autoComplete="off"
              required
            />

            <label htmlFor={"valeur"}>Valeur HD</label>
          </div>

          <div className="inputBox col-3">
            <input
              id="position"
              value={detail.position}
              type="text"
              onChange={handleChangeDetail}
              autoComplete="off"
              required
            />

            <label htmlFor={"position"}>Position Tarifaire</label>
          </div>
        </div>
        <div className="inputBox col-2">
          <button
            className="modalBtn col-12"
            onClick={() => {
              console.log(detail);
              setDetails([...details, detail]);

              setDetail(initDetail);
            }}
          >
            Ajouter
          </button>
          <button
            className="modalBtn col-12"
            onClick={() => {
              console.log(detail);
              // setDetails([...details, detail]);

              setDetail(initDetail);
            }}
          >
            Annuler
          </button>
        </div>
        <div className="col-12 ">
          <table
            className="col-12 "
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              fontSize: 12,
              marginTop: 15,
            }}
          >
            {/* Entete Pieces */}
            <thead>
              <tr
                className="col-12"
                style={{
                  display: "flex",
                }}
              >
                <th className="col-2">Quantité</th>
                <th className="col-2">Poids</th>
                <th className="col-4">Désignations</th>
                <th className="col-3">Valeur</th>
                <th className="col-3">Position</th>
              </tr>
            </thead>
            <tbody>
              {details.map((item, index) => (
                <tr
                  key={index}
                  className="col-12"
                  style={{
                    display: "flex",
                  }}
                >
                  <td className="col-2">{item.quantite}</td>
                  <td className="col-2">{item.poids}</td>
                  <td className="col-4">{item.designation}</td>
                  <td className="col-3">{item.valeur}</td>
                  <td className="col-3">{item.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </fieldset>
      {/* footer boutton */}
      <fieldset>
        <div className="inputBox col-2">
          <button
            className="modalBtn col-12"
            onClick={() => {
              dispatch(addExo({ ...data, details }));

              setData(initData);
              setDetails([]);
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
            <Link to="/exo">Exonération</Link> /{" "}
            {indexExo ? "Edition" : "Nouveau"}
          </h4>
        </div>
      </div>
      <div className="card :">{render}</div>
    </div>
  );
};

export default ExoNew;
