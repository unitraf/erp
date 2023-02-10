import React, { useState } from "react";
import {
  listType,
  listMode,
  listStatus,
  listDebours,
  listIntervention,
} from "../transit/utils/dossierUtils";
import { Link } from "react-router-dom";
import Onglets from "../../components/onglet/Onglets";
import "./settings.css";
import Icon from "@mdi/react";
import { mdiCancel, mdiDeleteOutline, mdiDotsVertical, mdiPlus } from "@mdi/js";
import CardSetting from "./CardSetting";

const leftList = ["Débours", "Interventions", "Autres"];
const STransit = () => {
  const [toggle, setToggle] = useState(0);
  const render = (
    <div style={{ display: "flex" }} className="transit col-12">
      {/* left */}
      <div className="left ">
        {leftList.map((item, index) => (
          <div
            key={index}
            className={`${index === toggle ? "toggle active" : "toggle"}`}
            onClick={() => setToggle(index)}
          >
            {item}
          </div>
        ))}
      </div>
      {/* right */}
      <div className="right col-6 ">
        {/* <div>{leftList[toggle]}</div> */}
        <table className="col-12">
          <thead>
            <tr className="col-12">
              <th className="col-8">Désignation</th>
              <th className="col-4">Montant*</th>
            </tr>
          </thead>
          <tbody>
            <tr className="col-12">
              <td className="col-8">Désignation</td>
              <td className="col-4">Montant*</td>
            </tr>
            <tr className="col-12">
              <td className="col-8">Désignation</td>
              <td className="col-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
  return (
    <div>
      <div className="page-header col-6">
        <div
          className="page-header-item col-12"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h4>
            {" "}
            <Link to="/settings"> Paramètrages</Link> / Transit
          </h4>
        </div>
      </div>

      <div className="card" style={{ display: "flex" }}>
        <Onglets
          ongletHeaders={["Débours", "Interventions", "Autres"]}
          ongletBody={[render, <div>Interventions</div>, <div>Autres</div>]}
        />
      </div>
      <div style={{ display: "", justifyContent: "space-around" }}>
        <CardSetting title={"Type"} data={listType} />
        <CardSetting title={"Mode"} data={listMode} />
        <CardSetting title={"Status"} data={listStatus} />
        <CardSetting title={"Débours"} data={listDebours} />
        <CardSetting title={"Interventions"} data={listIntervention} />
      </div>
    </div>
  );
};

export default STransit;
