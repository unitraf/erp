import React, { useRef, useState } from "react";
import { listStatus } from "./utils/dossierUtils";
import { renderDate } from "../../components/helpers/renders";
import {
  mdiDotsVertical,
  mdiDotsVerticalCircle,
  mdiFolderCancelOutline,
  mdiFolderEditOutline,
  mdiFolderPlusOutline,
} from "@mdi/js";
import { useSelector } from "react-redux";
import Menu from "../../components/menu/Menu";
import Onglets from "../../components/onglet/Onglets";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
const content = [
  {
    icon: mdiFolderPlusOutline,
    content: "Nouveau",
    route: "/newExo",
  },
  {
    icon: mdiFolderEditOutline,
    content: "Modifier",
    route: "/dossiers",
  },
  {
    icon: mdiFolderCancelOutline,
    content: "Supprimer",
    route: "/dossiers",
  },
];
const menuContent = (item, index) => (
  <Link to={item.route} key={index}>
    <div
      className="item"
      style={{ cursor: "pointer" }}
      onClick={() => console.log(item.content)}
    >
      <Icon path={item.icon} size={0.8} color="var(--main-color)" />
      <span>{item.content}</span>
    </div>
  </Link>
);

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("click", (e) => {
    //user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      // content_ref.current.classList.toggle("active");
    } else {
      //user click outside and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
        document.getElementsByClassName("select").item(0) &&
          document
            .getElementsByClassName("select")
            .item(0)
            .classList.remove("select");
      }
    }
  });
};

const Exos = () => {
  const [indexExo, setIndexExo] = useState(0);

  const [numero, setNumero] = useState(null);
  const [status, setStatus] = useState(listStatus[0]);
  const ref_toggle_el = useRef(null);
  const ref_content_el = useRef(null);

  const exos = useSelector((state) => state.exos);

  const initial = (exoId) =>
    exos
      .filter((exo) => exo.numero === exoId)[0]
      .details.reduce(
        (prev, curr) => {
          console.log(prev);
          prev = {
            quantite: prev.quantite + parseInt(curr.quantite),
            poids: prev.poids + parseInt(curr.poids),
          };

          return prev;
        },
        { quantite: 0, poids: 0 }
      );

  console.log("initial", initial("1699"));
  const dossiers = useSelector((state) => state.dossiers);
  const dossierOptions = (item, index) => (
    <Link to={`${item.route}/${indexExo}`} key={index}>
      <div
        className="option"
        key={index}
        onClick={(e) => {
          console.log(item);
          document
            .getElementsByClassName("menu_content active")[0]
            .classList.remove("active");
        }}
      >
        <span className="option-item">{item.content}</span>
      </div>
    </Link>
  );
  console.log(dossiers);

  clickOutsideRef(ref_content_el, ref_toggle_el);
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
      render={(item, index) => menuContent(item, index)}
    />
  );
  const menuOnglet = (
    <Menu
      icon={mdiDotsVerticalCircle}
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 5,
        backgroundColor: "white",
      }}
      content={content}
      // customtoggle={() => renderUserToggle("admin****nif@sgs.com")}
      render={(item, index) => menuContent(item, index)}
    />
  );

  console.log(status);
  const render = (
    <div style={{ display: "flex" }}>
      <div className=" modele col-12" style={{ display: "flex" }}>
        {/* gauche */}
        <div className="col-12 ">
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
                <th className="col-1">Numéro</th>
                <th className="col-1">Emission</th>
                <th className="col-1">Expiration</th>
                <th className="col-2">Importateur</th>
                <th className="col-2">Bénéficiaire</th>

                <th className="col-2">Lieu d'util.</th>
                <th className="col-2">Bureau douane</th>
                <th className="col-1">Autres</th>
              </tr>
            </thead>
            {/* body Moodèle gauche*/}
            <tbody
              style={{
                height: "65vh",
                overflowY: "auto",
              }}
              ref={ref_toggle_el}
            >
              {exos.map((item, index) => (
                <tr
                  key={index}
                  className={
                    // A revoir asap
                    indexExo === index
                      ? "modele_toggle col-12"
                      : "modele_toggle col-12 "
                  }
                  style={{
                    display: "flex",
                  }}
                  onClick={() => {
                    // console.log("view",ref_content_el.current.classList.toggle("active"));
                    // console.log("modele", item);
                    setIndexExo(index);

                    setNumero(item.numero);
                    ref_content_el.current.classList.add("active");
                  }}
                >
                  {/* Start exo item */}
                  <td className={`col-1 ${indexExo === index && "select"}`}>
                    {item.numero}
                  </td>
                  <td className={`col-1 ${indexExo === index && "select"}`}>
                    {renderDate(item.emission)}
                  </td>
                  <td className={`col-1 ${indexExo === index && "select"}`}>
                    {renderDate(item.expiration)}
                  </td>
                  <td className={`col-2 ${indexExo === index && "select"}`}>
                    {item.importateur}
                  </td>
                  <td className={`col-2 ${indexExo === index && "select"}`}>
                    {item.beneficiaire}
                  </td>

                  <td className={`col-2 ${indexExo === index && "select"}`}>
                    {item.lieu}
                  </td>
                  <td className={`col-2 ${indexExo === index && "select"}`}>
                    {item.bureau}
                  </td>
                  <td
                    className={`col-1 ${indexExo === index && "select"}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingInline: 5,
                    }}
                  >
                    {item.commentaires ? item.commentaires : "-"}
                    {indexExo === index && (
                      <Menu
                        style={{
                          display: "flex",

                          backgroundColor: "white",
                          right: -5,
                          alignSelf: "center",
                        }}
                        icon={mdiDotsVertical}
                        size={0.5}
                        color="white"
                        title="Options"
                        content={[
                          { content: "Aperçu", route: "" },
                          { content: "Editer", route: "/newExo" },
                          { content: "Supprimer", route: "" },
                        ]}
                        render={(item, index) => dossierOptions(item, index)}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Droite détails exo*/}
        <div ref={ref_content_el} className="content  col-2 ">
          <table className="col-12 m_right">
            {/* Detail Entete Mouvement... quantite , poids */}
            <thead className="col-12">
              <tr
                style={{
                  display: "flex",
                }}
              >
                <th className="col-12">Détails</th>
              </tr>
            </thead>
            {/* Detail mapping Body  Mouvement...  */}
            <tbody className="col-12">
              <tr>
                <td
                  className="col-12"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  <span>Initial</span>{" "}
                </td>
              </tr>
              <tr className="col-12">
                <td className="col-6">Quantité</td>
                <td className="col-6">Poids</td>
              </tr>
              <tr className="col-12">
                <td
                  className="col-6"
                  style={{
                    backgroundColor: "white",
                    color: "var(--main-color)",
                  }}
                >
                  {numero && initial(numero) && initial(numero).quantite}
                </td>
                <td
                  style={{
                    backgroundColor: "white",
                    color: "var(--main-color)",
                  }}
                  className="col-6"
                >
                  {numero && initial(numero) && initial(numero).poids}
                </td>
              </tr>
              <tr>
                <td
                  className="col-12"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  <span>Imputations</span>{" "}
                </td>
              </tr>
              <tr className="col-12">
                <td
                  className="col-6"
                  style={{
                    backgroundColor: "white",
                    color: "var(--main-color)",
                  }}
                >
                  10000
                </td>
                <td
                  style={{
                    backgroundColor: "white",
                    color: "var(--main-color)",
                  }}
                  className="col-6"
                >
                  20000
                </td>
              </tr>
              <tr>
                <td
                  className="col-12"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  <span>Solde</span>{" "}
                </td>
              </tr>
              <tr className="col-12">
                <td
                  className="col-6"
                  style={{
                    backgroundColor: "white",
                    color: "var(--main-color)",
                  }}
                >
                  10000
                </td>
                <td
                  style={{
                    backgroundColor: "white",
                    color: "var(--main-color)",
                  }}
                  className="col-6"
                >
                  20000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <div className="page-header col-6">
        <div className="page-header-item col-12">
          <h4>Exonérations</h4>
        </div>
      </div>
      <div className="card">
        <Onglets
          icon={iconOnglet}
          menu={menuOnglet}
          active={setStatus}
          ongletHeaders={["Active", "Prorogée", "Expirée"]}
          ongletBody={[render, render, render, ,]}
        />
      </div>
    </div>
  );
};

export default Exos;
