import React, { useRef, useState } from "react";
import { initData, listStatus } from "../utils/dossierUtils";
import { renderDate } from "../../../components/helpers/renders";
import Print from "../../../components/print/Print";
import { useReactToPrint } from "react-to-print";
import MinutePrint from "../minute/MinutePrint";
import {
  mdiDotsVertical,
  mdiDotsVerticalCircle,
  mdiFolderCancelOutline,
  mdiFolderEditOutline,
  mdiFolderPlusOutline,
} from "@mdi/js";
import { useSelector, useDispatch } from "react-redux";
import { deleteDossier } from "../../../redux/dossierUnitraf/action";
import Menu from "../../../components/menu/Menu";
import Onglets from "../../../components/onglet/Onglets";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import Alert from "../../../components/alerte/Alert";
// import "./dossier.css";
import DossiersPrint from "../../../printer/DossiersPrint";

const content = [
  {
    icon: mdiFolderPlusOutline,
    content: "Nouveau",
    route: "/newDossier",
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
const initParam = { dossierIndex: "", itemIndex: "" };
const Dossiers = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const [printMinute, setPrintMinute] = useState(false);

  const [printDossiers, setPrintDossiers] = useState(false);
  const [data, setData] = useState(initData);
  const [param, setParam] = useState(initParam);

 
  const [operation, setOperation] = useState({});
  const [status, setStatus] = useState(listStatus[0]);
  const testRef = useRef()

  const minuteRef = useRef();
  const dossierRef = useRef();
  const ref_toggle_el = useRef(null);
  const ref_content_el = useRef(null);
  const ref_content_view = useRef(null);
  const total = (
    array = [{ poids: 3 }, { poids: 3 }, { poids: 3 }, { poids: 3 }],
    key = "poids"
  ) =>
    array.reduce((total, curr) => {
      total += parseInt(curr[key]);

      return total;
    }, 0);

  const handlePrint = useReactToPrint({
    content: () => minuteRef.current,
    documentTitle: "Minute",
  });
  const handlePrintDossier = useReactToPrint({
    content: () => dossierRef.current,
    documentTitle: "Dossiers",
  });
  const dossiers = useSelector((state) => state.dossiers);
  const dossierOptions = (item, index) => (
    <div
      className=""
      style={{ margin: "5px 0" }}
      key={index}
      onClick={() => {
       
        setAlert(true);
        document
          .getElementsByClassName("menu_content active")[0]
          .classList.remove("active");
      }}
    >
      <Link to={`${item.route}/${JSON.stringify(param)}`}>
        <span className="option-item">{item.content}</span>
      </Link>
    </div>
  );
  const t1Options = (item, index) => (
    <div
      className="option"
      style={{ margin: "5px 0" }}
      key={index}
      onClick={() => {
        
        setAlert(true);
        document
          .getElementsByClassName("menu_content active")[0]
          .classList.remove("active");
      }}
    >
      {item.route ? (
        <Link to={`${item.route}/${JSON.stringify(param)}`}>
          <span className="option-item">{item.content}</span>
        </Link>
      ) : (
        <span className="option-item">{item.content}</span>
      )}
    </div>
  );
  const minuteOptions = (item, index) => (
    <div
      className="option"
      style={{ margin: "5px 0" }}
      key={index}
      onClick={() => {
       
        setAlert(true);
        document
          .getElementsByClassName("menu_content active")[0]
          .classList.remove("active");
      }}
    >
      {item.route ? (
        <Link to={`${item.route}/${JSON.stringify(param)}`}>
          <span className="option-item">{item.content}</span>
        </Link>
      ) : (
        <span className="option-item">{item.content}</span>
      )}
    </div>
  );
  const dduOptions = (item, index) => (
    <div
      className="option"
      style={{ margin: "5px 0" }}
      key={index}
      onClick={() => {
     
        setAlert(true);
        document
          .getElementsByClassName("menu_content active")[0]
          .classList.remove("active");
      }}
    >
      {item.route ? (
        <Link to={`${item.route}/${JSON.stringify(param)}`}>
          <span className="option-item">{item.content}</span>
        </Link>
      ) : (
        <span className="option-item">{item.content}</span>
      )}
    </div>
  );
  console.log("dossier",data);

  clickOutsideRef(ref_content_el, ref_toggle_el);
  clickOutsideRef(ref_content_view, ref_toggle_el);
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
  
  const render = (
    <div style={{ display: "flex" }}>
      <div className=" modele col-12" style={{ display: "flex" }}>
        {/* gauche */}
        <div className="col-12 ">
          {/* listing Dossier */}
          <table
            className="col-12 m_left"
            style={{
              display: "flex",
              // justifyContent: "space-between",
              flexDirection: "column",
             
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
                <th className="col-1">Date</th>
                <th className="col-2">Reférence</th>
                <th className="col-2">Expéditeur</th>
                <th className="col-2">Destinataire</th>

                <th className="col-1">Colis</th>
                <th className="col-3">Description</th>
              </tr>
            </thead>
            {/* body Moodèle gauche*/}
            <tbody
              style={{
                height: "35vh",
                overflowY: "auto",
              }}
              ref={ref_toggle_el}
            >
              {dossiers.map((item, index) => (
                <tr
                  key={index}
                  className={
                    // A revoir asap
                    param.dossierIndex === index
                      ? "modele_toggle col-12"
                      : "modele_toggle col-12 "
                  }
                  style={{
                    display: "flex",
                  }}
                  onDoubleClick={() => {
                    console.log("dble Click", item);
                  }}
                  onClick={() => {
                    // setIndexDossier(index);
                    setParam({ ...param, dossierIndex: index });
                    setData(item);
                    setOperation({ index, operation });

                    ref_content_el.current.classList.add("active");
                    ref_content_view.current.classList.add("active");
                  }}
                >
                  {/* Start dossier item */}
                  <td
                    className={`col-1 ${
                      param.dossierIndex === index && "select"
                    }`}
                  >
                    {item.numero}
                  </td>
                  <td
                    className={`col-1 ${
                      param.dossierIndex === index && "select"
                    }`}
                  >
                    {renderDate(item.date)}
                  </td>
                  <td
                    className={`col-2 ${
                      param.dossierIndex === index && "select"
                    }`}
                  >
                    {item.reference}
                  </td>
                  <td
                    className={`col-2 ${
                      param.dossierIndex === index && "select"
                    }`}
                  >
                    {item.expediteur}
                  </td>
                  <td
                    className={`col-2 ${
                      param.dossierIndex === index && "select"
                    }`}
                  >
                    {item.destinataire}
                  </td>

                  <td
                    className={`col-1 ${
                      param.dossierIndex === index && "select"
                    }`}
                  >
                    {`${item.quantite} ${item.type}`}
                  </td>
                  <td
                    className={`col-3 ${
                      param.dossierIndex === index && "select"
                    }`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingInline: 5,
                    }}
                  >
                    {item.description ? item.description : "-"}
                    {param.dossierIndex === index && (
                      <Menu
                        style={{
                          display: "flex",
                          // flexDirection: "column",
                          backgroundColor: "white",
                          // right: -5,
                          alignSelf: "center",
                        }}
                        icon={mdiDotsVertical}
                        size={0.5}
                        color="white"
                        title="Options"
                        content={[
                          { content: "Aperçu", route: "" },
                          { content: "T1", route: "/t1" },
                          { content: "Minute", route: "/minute" },
                          { content: "Déclaration", route: "/ddu" },
                          { content: "Editer", route: "/newDossier" },
                          { content: "Supprimer", route: "/dossiers" },
                        ]}
                        render={(item, index) => dossierOptions(item, index)}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* listing t1, minute, déclaration */}
          <div
            ref={ref_content_view}
            className=""
            style={{
              marginTop: 15,
            
              height: "25vh",
              overflowY: "auto",
            }}
          >
            {/* mapping t1 */}
            {data.t1.length > 0 && (
              <fieldset className="listing">
                <legend>T1</legend>
                <table className="col-12 m_left">
                  <thead>
                    <tr>
                      <th className="col-1">Reférence</th>
                      <th className="col-2">Numéro Trans.</th>

                      <th className="col-2">Camion</th>
                      <th className="col-2">B. Frontière</th>
                      <th className="col-2">B. Destination</th>

                      <th className="col-2">Quantité</th>
                      <th className="col-2">Poids</th>
                      <th className="col-2">Position</th>
                      <th className="">...</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.t1.map((item, index) => (
                      <tr
                 
                        key={index}
                        onClick={() => {
                        
                          setParam({ ...param, itemIndex: index });
                        }}
                      >
                        <td className="col-1">{item.reference}</td>
                        <td className="col-2">{`${item.numero} du ${renderDate(
                          item.date
                        )}`}</td>

                        <td className="col-2">{item.camion}</td>
                        <td className="col-2">{item.burEntree}</td>
                        <td className="col-2">{item.burDestination}</td>

                        <td className="col-2">{item.quantite}</td>
                        <td className="col-2">{item.poids}</td>
                        <td className="col-2">{item.position}</td>
                        <td className="" style={{border:0}} >
                          {param.itemIndex === index && (
                       
                            <Menu
                              style={{
                                display: "flex",
                                // flexDirection: "column",
                                backgroundColor: "white",
                                // right: -5,
                                // alignSelf: "center",
                                marginTop:10
                              }}
                              icon={mdiDotsVertical}
                              size={0.5}
                              color="white"
                              title="Options"
                              content={[
                                { content: "Editer", route: "/t1" },
                                { content: "Supprimer", route: "" },
                              ]}
                              render={(item, index) => t1Options(item, index)}
                            />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="col-7"></td>
                      <td className="col-2">Total</td>
                      <td className="col-2">{total(data.t1, "quantite")}</td>
                      <td className="col-2">{total(data.t1, "poids")}</td>
                      <td className="col-2"></td>
                      <td className="">...</td>
                    </tr>
                  </tfoot>
                </table>
              </fieldset>
            )}
            {/* mapping minute */}
            {data.minute.length > 0 && (
              <fieldset className="listing" >
                <legend>Minutes</legend>
                <table className="col-12 m_left">
                  <thead>
                    <tr>
                      <th className="col-1">Rép</th>
                      <th className="col-2">T1</th>
                      <th className="col-2">Regime</th>
                      <th className="col-2">Exo</th>
                      <th className="col-2">Val. Douane</th>
                      <th className="col-2">Val. Droits</th>
                      <th className="col-2">Taxes G.</th>
                      <th className="col-2">Total Décl.</th>
                    
                    </tr>
                  </thead>
                  <tbody>
                    {data.minute.map((item, index) => (
                      <tr
                        key={index}
                        onClick={()=>{
                         
                          setParam({ ...param, itemIndex: index });
                        }}
                        onDoubleClick={() => {
                          setPrintMinute(true);
                          console.log("Double Click", item);
                        }}
                      >
                        <td className="col-1">{item.repertoire}</td>
                        <td className="col-2">{item.t1}</td>
                        <td className="col-2">{item.regime}</td>
                        <td className="col-2">{item.exo}</td>
                        <td className="col-2">{parseInt(item.fob)+parseInt(item.fret)+ parseInt(item.assurance)+parseInt(item.autres)}</td>

                        <td className="col-2">Val Droits</td>
                        <td className="col-2">{parseInt(item.chemise)+parseInt(item.ri)+ parseInt(item.scanner)}</td>
                        <td className="col-2">{item.total}</td>
                        <td className="" style={{border:0}} >
                          {param.itemIndex === index && (
                       
                            <Menu
                              style={{
                                display: "flex",
                                // flexDirection: "column",
                                // backgroundColor: "white",
                                // right: -5,
                                // alignSelf: "center",
                                marginTop:10
                              }}
                              icon={mdiDotsVertical}
                              size={0.5}
                              color="white"
                              title="Options"
                              content={[
                                { content: "Editer", route: "/minute" },
                                { content: "Supprimer", route: "" },
                              ]}
                              render={(item, index) => minuteOptions(item, index)}
                            />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="col-7"></td>
                      <td className="col-2">Total</td>
                      <td className="col-2">
                        {total(data.minute, "quantite")}
                      </td>
                      <td className="col-2">{total(data.minute, "poids")}</td>
                      <td className="col-2">{total(data.minute, "poids")}</td>
                    </tr>
                  </tfoot>
                </table>
              </fieldset>
            )}
            {/* mapping Déclarations */}
            {data.declaration.length > 0 && (
              <fieldset>
                <legend>Déclarations</legend>
                <table className="col-12 m_left">
                  <thead>
                    <tr>
                      <th className="col-2">Bureau</th>
                      <th className="col-2">Réf Douane</th>
                      <th className="col-2">Valeur Stat.</th>
                      <th className="col-2">Montant Impos.</th>
                      <th className="col-2">Taxes G.</th>
                      <th className="col-2">Total Décl.</th>
                      <th className="col-2">N° Liquidation</th>

                      <th className="col-2">N° Quittance</th>
                      <th className="col-2">...</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.declaration.map((item, index) => (
                      <tr key={index}
                      onClick={()=>{
                        
                        setParam({ ...param, itemIndex: index });
                      }}
                      >
                        <td className="col-2">{item.bureau}</td>
                        <td className="col-2">{`${item.reference} du ${item.reference}`}</td>
                        <td className="col-2">Valeur Stat.</td>
                        <td className="col-2">Montant Impos.</td>
                        <td className="col-2">Taxes G.</td>
                        <td className="col-2">Total Décl.</td>
                        <td className="col-2">Liquidation</td>

                        <td className="col-2">Quittance</td>
                        <td className="" style={{border:0}} >
                          {param.itemIndex === index && (
                       
                            <Menu
                              style={{
                                display: "flex",
                                // flexDirection: "column",
                                // backgroundColor: "white",
                                // right: -5,
                                // alignSelf: "center",
                                marginTop:10
                              }}
                              icon={mdiDotsVertical}
                              size={0.5}
                              color="white"
                              title="Options"
                              content={[
                                { content: "Editer", route: "/ddu" },
                                { content: "Supprimer", route: "" },
                              ]}
                              render={(item, index) => dduOptions(item, index)}
                            />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="col-7"></td>
                      <td className="col-2">Total</td>
                      <td className="col-2">Total</td>
                      <td className="col-2">Total</td>
                      <td className="">...</td>
                    </tr>
                  </tfoot>
                </table>
              </fieldset>
            )}
          </div>
        </div>

        {/* Droite infos expéditions*/}
        <div ref={ref_content_el} className="col-2 ">
          <table className="col-12 " style={{marginTop:14}}>
            {/* Detail Entete Mouvement... type cpte libellé  */}
            <thead className="col-12">
              <tr
               
              >
                <th className="col-12">Détails</th>
              </tr>
            </thead>
            {/* Detail mapping Body  Mouvement...  */}
            <tbody className="col-12">
              <tr  >
                <td
                  className="col-12"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop:3
                  }}
                >
                  {" "}
                  <span>BL/LTA</span>{" "}
                  <span>
                    {dossiers[param.dossierIndex] &&
                      dossiers[param.dossierIndex].document}
                  </span>{" "}
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
                  <span>Transport</span>{" "}
                  <span>
                    {dossiers[param.dossierIndex] &&
                      dossiers[param.dossierIndex].mode}
                  </span>{" "}
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
                  <span>Départ</span>{" "}
                  <span>
                    {dossiers[param.dossierIndex] &&
                      renderDate(dossiers[param.dossierIndex].depart)}
                  </span>{" "}
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
                  <span>Arrivée</span>{" "}
                  <span>
                    {dossiers[param.dossierIndex] &&
                      renderDate(dossiers[param.dossierIndex].arrivee)}
                  </span>{" "}
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
                  <span>Origine</span>{" "}
                  <span>
                    {dossiers[param.dossierIndex] &&
                      dossiers[param.dossierIndex].origine}
                  </span>{" "}
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
                  <span>Provenance</span>{" "}
                  <span>
                    {dossiers[param.dossierIndex] &&
                      dossiers[param.dossierIndex].provenance}
                  </span>{" "}
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
                  <span>Status</span>{" "}
                  <span>
                    {dossiers[param.dossierIndex] &&
                      dossiers[param.dossierIndex].status}
                  </span>{" "}
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
          <h4>Dossiers</h4>
        </div>
      </div>
      <div className="card">
        <Onglets
          icon={iconOnglet}
          menu={menuOnglet}
          active={setStatus}
          ongletHeaders={listStatus}
          ongletBody={[render, render, render, render, render]}
        />
      </div>

      <Alert showAlert={alert} setAlert={setAlert}>
        <div className="alertHeader">Alerte - Supression !!!</div>
        <div className="alertBody ">Etes-vous sûr de vouloir continuer? </div>
        <div className="alertFooter">
          <button
            className="alertBtn"
            onClick={() => {
              dispatch(deleteDossier(dossiers[param.dossierIndex].numero));
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

      <Print showPrint={printMinute} setPrint={setPrintMinute}>
        <div className="printHeader">Aperçu</div>
        <div ref={minuteRef} className="printBody ">
          <MinutePrint dossier={dossiers[param.dossierIndex]} index={param.itemIndex} ref={testRef} />
        </div>
        <div className="printFooter">
          <button
            className="printBtn"
            onClick={() => {
              handlePrint();
              // setPrint(false);
            }}
          >
            Imprimer
          </button>
          <button
            className="printBtn"
            onClick={() => {
              setPrintMinute(false);
            }}
          >
            Annuler
          </button>
        </div>
      </Print>
      <Print showPrint={printDossiers} setPrint={setPrintDossiers}>
        <div className="printHeader">Aperçu  </div>
        <div ref={dossierRef} className="printBody ">
          <DossiersPrint />
        </div>
        <div className="printFooter">
          <button
            className="printBtn"
            onClick={() => {
              handlePrintDossier();
              setPrintDossiers(false);
            }}
          >
            Imprimer
          </button>
          <button
            className="printBtn"
            onClick={() => {
              setPrintDossiers(false);
            }}
          >
            Annuler
          </button>
        </div>
      </Print>
      <div
        onClick={() => setPrintDossiers(true)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: 25,
          bottom: 25,
          backgroundColor: "var(--main-color)",
          color: "white",
          borderRadius: "50%",
          width: 25,
          height: 25,
        }}
      >
        hi
      </div>
    </div>
  );
};

export default Dossiers;
