import React from "react";
import "./minutePrint.css";
import moment from "moment";
import logo from "../assets/images/logo.png";
const minutePrint = (props) => {
  const {dossier, index} = props
  console.log("props", dossier);
  return (
    <div className="minute">
      <section className="header">
        <div>
          <h2>MINUTE MANUELLE</h2>
          {/* <h3>UNITRAF</h3> */}
          {/* <h4>Régime</h4> */}
          <fieldset className="col-4">
            <legend>Régime</legend>
            <p className="item">{dossier.minute[index].regime}</p>
          </fieldset>
        </div>
        <img src={logo} alt="logo" />
      </section>
      <section className="body">
        {/* ligne 1 */}
        <div className="trait"></div>
        <div className="ligne">
          <fieldset className="col-5">
            <legend>Dossier Transit</legend>
            <p className="item">{`370/${dossier.numero}/${moment(dossier.date).format("YY")}` }</p>
          </fieldset>
          <fieldset className="col-2">
            <legend>Répertoire</legend>
            <p className="item">{dossier.minute[index].repertoire}</p>
          </fieldset>
          <fieldset className="col-5">
            <legend>T1 / LTA</legend>
            <p className="item">{dossier.minute[index].t1}</p>
          </fieldset>
        </div>
        {/* ligne 2 */}
        <div className="trait"></div>
        <div className="ligne">
          <fieldset className="col-3">
            <legend>Destination</legend>
            <p className="item">{dossier.minute[index].burDestination}</p>
          </fieldset>
          <fieldset className="col-3">
            <legend>Frontière</legend>
            <p className="item">{dossier.minute[index].burEntree}</p>
          </fieldset>
          <fieldset className="col-3">
            <legend>Provenance</legend>
            <p className="item">{dossier.minute[index].provenance}</p>
          </fieldset>
          <fieldset className="col-3">
            <legend>Origine</legend>
            <p className="item">{dossier.minute[index].origine}</p>
          </fieldset>
        </div>
        {/* ligne 3 */}
        <div className="trait"></div>
        <div className="ligne">
          <fieldset className="col-2">
            <legend>Transport</legend>
            <p className="item">{dossier.mode}</p>
          </fieldset>
          <fieldset className="col-4">
            <legend>Document de Transport</legend>
            <p className="item">{dossier.minute[index].document}</p>
          </fieldset>

          <fieldset className="col-6">
            <legend>Camion / Vol / Navire</legend>
            <p className="item">{dossier.minute[index].camion}</p>
          </fieldset>
        </div>
        {/* ligne 4 */}
        <div className="trait"></div>
        <div className="ligne">
          <fieldset className="col-6">
            <legend>Importateur</legend>
            <p className="item">{dossier.minute[index].importateur}</p>
          </fieldset>
          <fieldset className="col-6">
            <legend>Destinataire</legend>
            <p className="item">{dossier.minute[index].destinataire}</p>
          </fieldset>
        </div>
        {/* ligne 5 */}
        <div className="trait"></div>
        <div className="ligne">
          <fieldset className="col-4">
            <legend>Colisages</legend>

            <table className="col-12">
              <thead>
                <tr>
                  <th>Quantité</th>
                  <th>Poids</th>
                  <th>Volume</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{dossier.minute[index].quantite}</td>
                  <td>{dossier.minute[index].poids}</td>
                  <td>{dossier.minute[index].volume}</td>
                </tr>
              </tbody>
            </table>
          </fieldset>
          <fieldset className="col-8">
            <legend>Valeur des marchandises</legend>
            <table className="col-12">
              <thead>
                <tr>
                  <th>Fob</th>
                  <th>Ass.</th>
                  <th>Fret</th>
                  <th>Autres</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{dossier.minute[index].fob}</td>
                  <td>{dossier.minute[index].assurance}.</td>
                  <td>{dossier.minute[index].fret}</td>
                  <td>{dossier.minute[index].autres}</td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </div>
        {/* ligne 6 */}
        <div className="trait"></div>
        <div className="ligne">
          <fieldset className="col-2">
            <legend>Position</legend>
            <p className="item">{dossier.minute[index].position}</p>
          </fieldset>
          <fieldset className="col-7">
            <legend>Désignation</legend>
            <p className="item">Désignation</p>
          </fieldset>
          <fieldset className="col-3">
            <legend>Valeur Douane</legend>
            <p className="item">Valeur Douane</p>
          </fieldset>
        </div>
        {/* ligne 7 */}
        <div className="trait"></div>
        <div className="ligne ">
          <fieldset className="col-9">
            <legend>Impositions</legend>

            <table className="col-12">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Base</th>
                  <th>Taux</th>
                  <th>Montant</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Type</td>
                  <td>Base</td>
                  <td>Taux</td>
                  <td>Montant</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>Base</td>
                  <td>Taux</td>
                  <td>Montant</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>Base</td>
                  <td>Taux</td>
                  <td>Montant</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>Base</td>
                  <td>Taux</td>
                  <td>Montant</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>Base</td>
                  <td>Taux</td>
                  <td>Montant</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>Base</td>
                  <td>Taux</td>
                  <td>Montant</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>Base</td>
                  <td>Taux</td>
                  <td>Montant</td>
                </tr>
              </tbody>
             
              <tfoot>
              <tr>
                <td>Type</td>
                <td>Base</td>
                <td>Taux</td>
                <td>Montant</td>
              </tr>
              </tfoot>
            </table>
          </fieldset>
          <fieldset className="col-3" style={{ border: 0, display:"block" }}>
            <fieldset className="col-12">
              <legend>Taxes</legend>
              <p className="item">Taxes</p>
            </fieldset>
            <fieldset className="col-12">
              <legend>Déclaration</legend>
              <p className="item">Déclaration</p>
            </fieldset>
            <fieldset className="col-12">
              <legend>Reférence</legend>
              <p className="item">Reférence</p>
            </fieldset>
            <fieldset className="col-12">
              <legend>Date</legend>
              <p className="item">Date</p>
            </fieldset>
          </fieldset>
        </div>
         {/* ligne 8 */}
         <div className="ligne ">
         <fieldset className="col-1">
            <legend>Exo.</legend>
            <p className="item">{dossier.minute[index].exo}</p>
          </fieldset>
          <fieldset className="col-1">
            <legend>Lic.</legend>
            <p className="item">{dossier.minute[index].license}</p>
          </fieldset>
          <fieldset className="col-10 pj">
            <legend>Documents joints</legend>
            {dossier.minute[index].documents.map((item, index)=>
              item.checked?<p>{item.type}</p>:""
            )}
           
          </fieldset>

          
        </div>
        {/* ligne 9 */}
        <div className="ligne ">
          <fieldset className="col-12">
            <legend>Observations</legend>
            <p className="item" style={{height:150}}>Observations</p>
          </fieldset>
        </div>
       
      </section>
      <section className="footer">footer</section>
    </div>
  );
};

export default minutePrint;
