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
import { useSelector, useDispatch } from "react-redux";
import Menu from "../../components/menu/Menu";
import Onglets from "../../components/onglet/Onglets";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import Alert from "../../components/alerte/Alert";
import { deleteTarif } from "../../redux/tarifUnitraf/action";
const content = [
  {
    icon: mdiFolderPlusOutline,
    content: "Nouveau",
    route: "/newTarif",
  },
  {
    icon: mdiFolderEditOutline,
    content: "Modifier",
    route: "/tarif",
  },
  {
    icon: mdiFolderCancelOutline,
    content: "Supprimer",
    route: "/tarif",
  },
];
const menuContent = (item, index) => (
  <Link to={`${item.route}/999`} key={index}>
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

const Tarif = () => {
  const dispatch = useDispatch();
  
  const [param, setParam] = useState(0)
  const [alert, setAlert] = useState(false);

  const [status, setStatus] = useState(listStatus[0]);
  const ref_toggle_el = useRef(null);
  const ref_content_el = useRef(null);

  const tarifs = useSelector((state) => state.tarifs);
  const optionsContent = [
    
    { content: "Editer", route: "/newTarif" },
    { content: "Supprimer", route: "/tarif" },
  ];
  const clientOptions = (item, index) => (
    <div
      className="option"
      key={index}
      onClick={(e) => {
        console.log(item);
        setAlert(true);
        document
          .getElementsByClassName("menu_content active")[0]
          .classList.remove("active");
      }}
    >
      <Link to={`${item.route}/${param}`} key={index}>
        <span className="option-item">{item.content}</span>
      </Link>
    </div>
  );


  clickOutsideRef(ref_content_el, ref_toggle_el);
  const ongletMenuIcon = (
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
  const ongletOptions = (
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
                <th className="col-2">N.T.S</th>
                <th className="col-9">Désignation des marchandises</th>
                <th className="col-1">Us</th>

                <th className="">...</th>
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
              {tarifs.map((item, index) => (
                <tr
                  key={index}
                  className={
                    // A revoir asap
                    param === index
                      ? "modele_toggle col-12"
                      : "modele_toggle col-12 "
                  }
                  style={{
                    display: "flex",
                  }}
                  onClick={() => {
                    setParam(index)
                   
                    ref_content_el.current.classList.add("active");
                  }}
                >
                  {/* Start exo item */}
                  <td className={`col-2 ${param === index && "select"}`}>
                    {item.nts}
                  </td>
                  <td className={`col-9 ${param === index && "select"}`}>
                    {item.designation}
                  </td>
                  <td className={`col-1 ${param === index && "select"}`}>
                    {item.us}
                  </td>

                  <td className={` ${param === index && "select"}`}>
                    {param === index && (
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
                        content={optionsContent}
                        render={(item, index) => clientOptions(item, index)}
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
                <th className="col-12">Droits & taxes</th>
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
                  <span>Entrée</span>{" "}
                </td>
              </tr>
              <tr
                className="col-12"
                style={{ display: "flex", flexDirection: "column" }}
              >
                {tarifs[param] &&
                  tarifs[param].entree.map((item, index) => (
                    <td
                      key={index}
                      className="col-12"
                      style={{
                        display: "flex",
                        // width: "max-content",
                        marginBottom: 2,
                        paddingInline: 15,
                      }}
                    >
                      {`${Object.keys(item)[0]} : ${Object.values(item)[0]} ${
                        Object.keys(item)[0] === "DA"
                          ? `F/${tarifs[param].us}`
                          : "%"
                      }`}
                    </td>
                  ))}
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
                  <span>Sortie</span>{" "}
                </td>
              </tr>
              <tr
                className="col-12"
                style={{ display: "flex", flexDirection: "column" }}
              >
                {tarifs[param] &&
                  tarifs[param].sortie.map((item, index) => (
                    <td
                      key={index}
                      className="col-12"
                      style={{
                        display: "flex",
                        // width: "max-content",
                        marginBottom: 2,
                        paddingInline: 15,
                      }}
                    >{`${Object.keys(item)[0]} : ${Object.values(item)[0]}`}</td>
                  ))}
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
          <h4>Tarif des douanes</h4>
        </div>
      </div>
      <div className="card">
        <Onglets
          icon={ongletMenuIcon}
          menu={ongletOptions}
          active={setStatus}
          ongletHeaders={["Nomenclature"]}
          ongletBody={[render, render]}
        />
      </div>
      <Alert showAlert={alert} setAlert={setAlert}>
        <div className="alertHeader">Alerte - Supression !!!</div>
        <div className="alertBody ">Etes-vous sûr de vouloir continuer? </div>
        <div className="alertFooter">
          <button
            className="alertBtn"
            onClick={() => {
              console.log("Oui");
              console.log(tarifs[param]);
              dispatch(deleteTarif(tarifs[param].nts));
              setAlert(false);
            }}
          >
            Oui
          </button>
          <button
            className="alertBtn"
            onClick={() => {
              setAlert(false);
            }}
          >
            Non
          </button>
        </div>
      </Alert>
    </div>
  );
};

export default Tarif;
