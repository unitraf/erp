import React, { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiPlus,
  mdiDotsVertical,
  mdiDotsVerticalCircle,
  mdiAccount,
  mdiWindowMinimize,
  mdiCalendarMultiple,
} from "@mdi/js";
import { useSelector } from "react-redux";
import Onglets from "../../components/onglet/Onglets";

import Menu from "../../components/menu/Menu";
const listJournal = ["Achat", "Vente", "Trésorerie", "Diverse"];
const listOperation = [
  "Dossier",
  "Minutes",
  "Exonérations",
  "Clients",
  "Autres",
];

const renderOptions = (item, index) => (
  <div
    className="option"
    key={index}
    onClick={() => {
      console.log(item);
      document
        .getElementsByClassName("menu_content active")[0]
        .classList.remove("active");
    }}
  >
    <span className="option-item">{item}</span>
  </div>
);

const Settings = () => {
  const [fonction, setFonction] = useState([]);
  const [operation, setOperation] = useState({});
  const [journal, setJournal] = useState(listJournal[0]);
  const modeles = useSelector((state) => state.modele.modeles);

  console.log(fonction, modeles, journal);

  // Render Onglet contents....
  const renderRight = (
    <div style={{ display: "flex" }}>
      <div className=" modele col-12" style={{ display: "flex" }}>
        {/* gauche */}
        <div className="col-7 ">
          <table
            className="col-12 m_left"
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
                <th className="col-1">#</th>
                <th className="col-6">Modèles</th>
                <th className="col-5">Commentaires</th>
              </tr>
            </thead>
            {/* body Moodèle gauche*/}
            <tbody
              style={{
                height: "65vh",
                overflowY: "auto",
              }}
            >
              {modeles.map((item, index) => (
                <tr
                  key={index}
                  className={
                    // A revoir asap
                    operation.index === index
                      ? "modele_toggle col-12"
                      : "modele_toggle col-12 "
                  }
                  style={{
                    display: "flex",
                  }}
                  onClick={() => {
                    console.log("modele", item);
                    setOperation({ index, operation });
                    setFonction(item.operation);
                  }}
                >
                  <td
                    className={`col-1 ${operation.index === index && "select"}`}
                  >
                    {index + 1}
                  </td>
                  <td
                    className={`col-6 ${operation.index === index && "select"}`}
                  >
                    {item.intitule}
                  </td>
                  <td
                    className={`col-5 ${operation.index === index && "select"}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingInline: 10,
                    }}
                  >
                    {item.commentaires}{" "}
                    {operation.index === index && (
                      <Menu
                        style={{
                          display: "flex",
                          backgroundColor: "white",
                          right: -10,
                          alignSelf: "center",
                        }}
                        icon={mdiDotsVertical}
                        size={0.5}
                        color="white"
                        title="Options"
                        content={["Dupliquer", "Modifier", "Supprimer"]}
                        render={(item, index) => renderOptions(item, index)}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  const renderLeft = (
    <div className="content_journal   col-1 ">
      <table className="col-12 m_right">
        {/* Detail Entete Mouvement... type cpte libellé  */}
        <thead className="" style={{ fontSize: "0.9rem" }}>
          <tr style={{ backgroundColor: "var(--main-color)", color: "white" }}>
            <th
              className="col-12"
              style={{
                borderRadius: 5,
                border: "1px solid var(--main-color)",
              }}
            >
              Journal
            </th>
          </tr>
        </thead>
        {/* Detail mapping Body  Mouvement...  */}
        <tbody>
          {listJournal.map((item, index) => (
            <tr key={index} onClick={() => console.log(item)}>
              <td
                className="col-12"
                style={{
                  textAlign: "center",
                  fontSize: "0.8rem",
                  paddingInline: 5,
                  borderRadius: 5,
                  border: "1px solid var(--main-color)",
                  marginTop: 15,
                }}
              >
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  const userContent = (item, index) => (
    <div className="item" key={index}>
      <Icon path={item.icon} size={0.8} />
      <span>{item.content}</span>
    </div>
  );
  const content = [
    {
      icon: mdiAccount,
      content: "Profile",
    },
    {
      icon: mdiWindowMinimize,
      content: "Paramètre",
    },
    {
      icon: mdiCalendarMultiple,
      content: "Déconnexion",
    },
  ];
  const iconOnglet = (
    <Menu
      icon={mdiDotsVertical}
      color={"white"}
      size={0.6}
      style={{
        display: "flex",
        flexDirection: "column",
        right: -10,
        marginTop: 5,
        backgroundColor: "white",
      }}
      content={content}
      // customtoggle={() => renderUserToggle("admin****nif@sgs.com")}
      render={(item, index) => userContent(item, index)}
    />
  );

  const menuOnglet = (
    <Menu
      icon={mdiDotsVerticalCircle}
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 5,
        backgroundColor: "red",
      }}
      content={content}
      // customtoggle={() => renderUserToggle("admin****nif@sgs.com")}
      render={(item, index) => userContent(item, index)}
    />
  );
  return (
    <div>
      <div className="page-header col-6">
        <div
          className="page-header-item col-12"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h4>Paramètrages | Configurations | Constantes</h4>
        </div>
      </div>

      <div className="card" style={{ display: "flex" }}>
        {/* {renderLeft} */}
        <Onglets
          active={setJournal}
          ongletHeaders={[
            ...listOperation,
            <Icon path={mdiPlus} size={0.6} title="Nouveau" />,
          ]}
          ongletBody={[renderRight, renderRight, renderRight]}
          icon={iconOnglet}
          Menu={menuOnglet}
        />
      </div>
    </div>
  );
};

export default Settings;
