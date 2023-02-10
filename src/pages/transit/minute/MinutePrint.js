import React from "react";
import Print from "../../../components/print/Print";
import moment from "moment";
import logo from "../../../assets/images/logo.png";
import "./minutePrint.css";
const MinutePrint = React.forwardRef((props,ref) => {
  const { dossier, index } = props;
  const minute = dossier.minute[index]
  console.log("dossier", dossier);
console.log("minute", minute);
  const render = (<div className="minute_print" ref={ref}>
  <section className="min_header">
    <div className="title col-2">
      <h3>MINUTE</h3>
      <fieldset className="inline_field col-12">
        <legend>N° Transit</legend>
        <p>{dossier.numero?`370/${dossier.numero}/${moment(dossier.date).format("YYYY")}`:"-"}</p>
      </fieldset>
    </div>
    <div className="col-6" style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
    <fieldset className="inline_field col-12">
      <legend>Déclarant</legend>
      <p> UNITRAF (NE85364037) </p>
    </fieldset>
    
    </div>
    
    <img src={logo} alt="logo" />
  </section>
  <section className="min_body col-12">
    {/* ligne 1 */}
    <div className="" style={{ display: "flex" }}>
      <fieldset className="col-2 inline_field ">
        <legend>Repertoire</legend>
        <p>{minute.repertoire?minute.repertoire:"-"}</p>
      </fieldset>
      <fieldset className="inline_field col-3">
        <legend>Réf. T1</legend>
        <p>{minute.t1?minute.t1:"-"}</p>
      </fieldset>
      <fieldset className="inline_field col-2">
        <legend>BL/LTA</legend>
        <p> {minute.document?minute.document:"-"}</p>
      </fieldset>
      <fieldset className="inline_field col-2">
        <legend>Transport</legend>
        <p> {minute.mode?minute.mode:dossier.mode}</p>
      </fieldset>
      <fieldset className="inline_field col-3">
        <legend>Moyen de Transp.</legend>
        <p>{minute.camion?minute.camion:dossier.camion}</p>
      </fieldset>
    </div>
    {/* ligne 2 */}
    <div className="" style={{ display: "flex" }}>
      <fieldset className="col-4 inline_field ">
        <legend>Bureau de destination</legend>
        <p>{minute.burDestination?minute.burDestination:"-"}</p>
      </fieldset>
      <fieldset className="inline_field col-4">
        <legend>Bureau d'entrée</legend>
        <p>{minute.burEntree?minute.burEntree:"-"}</p>
      </fieldset>
      <fieldset className="inline_field col-2">
        <legend>Provenance</legend>
        <p> {minute.provenance?minute.provenance:dossier.provenance}</p>
      </fieldset>
      <fieldset className="inline_field col-2">
        <legend>Origine</legend>
        <p> {minute.origine?minute.origine:dossier.origine}</p>
      </fieldset>
    </div>
    {/* ligne 3 */}
    <div className="" style={{ display: "flex" }}>
      <fieldset className="inline_field col-6">
        <legend>Importateur</legend>
        <p> {minute.importateur?minute.importateur:dossier.importateur}</p>
      </fieldset>
      <fieldset className="inline_field col-6">
        <legend>Destinataire</legend>
        <p> {dossier.client?`${dossier.client.nom} (${dossier.client.nif})`:minute.destinataire}</p>
      </fieldset>
    </div>
    {/* ligne 4 */}
    <fieldset style={{ display: "flex" }}>
      <legend>Colis</legend>

      <fieldset className="inline_field col-2">
        <legend>Quantité</legend>
        <p>{minute.quantite?minute.quantite:"-"} </p>
      </fieldset>
      <fieldset className="inline_field col-1">
        <legend>Us</legend>
        <p>{minute.tarif.us?minute.tarif.us:"U"}</p>
      </fieldset>
      <fieldset className="inline_field col-2">
        <legend>Poids</legend>
        <p> {minute.poids?minute.poids:"-"}</p>
      </fieldset>
      <fieldset className="inline_field col-2">
        <legend>Position</legend>
        <p>{minute.tarif.nts?minute.tarif.nts:"-"}</p>
      </fieldset>
      <fieldset className="inline_field col-4">
        <legend>Désignation</legend>
        <p> {minute.tarif.designation?minute.tarif.designation:"-"}</p>
      </fieldset>
      <fieldset className="inline_field col-1">
        <legend>Nature</legend>
        <p> {dossier.type?dossier.type:minute.type}</p>
      </fieldset>
    </fieldset>
    {/* ligne 5 */}
      {/* valeur */}
      <fieldset  style={{ display: "flex", }}>
      <legend>Valeurs</legend>

      <fieldset className="inline_field col-3">
        <legend>Fob</legend>
        <p> {minute.fob?minute.fob:"-"}</p>
      </fieldset>
      <fieldset className="inline_field col-2">
        <legend>Fret</legend>
        <p> {minute.fret?minute.fret:"-"}</p>
      </fieldset>
      <fieldset className="inline_field col-2">
        <legend>Assurance</legend>
        <p> {minute.assurance?minute.assurance:"-"}</p>
      </fieldset>
      
      <fieldset className="inline_field col-2">
        <legend>Autres</legend>
        <p>{minute.autres?minute.autres:"-"} </p>
      </fieldset>
      <fieldset className="inline_field col-3">
        <legend>Val. Douane</legend>
        <p>{minute.valeur?minute.valeur:"-"}</p>
      </fieldset>
    </fieldset>
         
      {/* ligne 8 */}
      
      <div className="" style={{ display: "flex", justifyContent:"space-around" }}>
      <fieldset className="inline_field col-2">
        <legend>Régime</legend>
        <p> {minute.code?minute.code:"-"}</p>
      </fieldset>
      <fieldset className="col-4 inline_field ">
        <legend>N° Exonération</legend>
        <p>{minute.exo?minute.exo:"-"}</p>
      </fieldset>
      <fieldset className="inline_field col-4">
        <legend>N° License</legend>
        <p>{minute.license?minute.license:dossier.license}</p>
      </fieldset>
      
      
    </div >
       {/* Imposition */}
       <fieldset className="col-12" style={{ display: "flex", flexDirection:"column", padding:5 }}>
      <legend>Calcul des impositions</legend>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Base d'imposition</th>
            <th>Taux</th>
            <th>Montant</th>
        
            
          </tr>
        </thead>
        <tbody>
          {minute.code==="3000"
          ?minute.tarif.sortie.map((item,index)=>(
           item.checked&& <tr key={index}>
            <td className="col-2">{Object.keys(item)[0]}</td>
              <td className="col-4">{minute.valeur}</td>
              <td className="col-3">{Object.values(item)[0]}</td>
              <td className="col-3" >{item.montant}</td>
            </tr>
            ))
          :minute.tarif.entree.map((item,index)=>(
            item.checked&& <tr key={index}>
             <td className="col-2">{Object.keys(item)[0]}</td>
               <td className="col-4">{Object.keys(item)[0]==="TVA"?minute.valeur+minute.baseTva:Object.keys(item)[0]==="DA"?minute.quantite:minute.valeur}</td>
               <td className="col-3">{Object.values(item)[0]}</td>
               <td className="col-3" >{item.montant}</td>
             </tr>
             ))
        }
      
        </tbody>
  <tfoot>
  <tr>
            <td colSpan={3} >Total</td>
            
            <td>{minute.droits}</td>
        
            
          </tr>
  </tfoot>
      </table>
      
    </fieldset>
    {/* Taxes */}
<fieldset style={{ display: "flex", }}>
      <legend>Taxes</legend>

      <fieldset className="inline_field col-3">
        <legend>FVC</legend>
        <p> {minute.chemise?minute.chemise:"-"}</p>
      </fieldset>
      <fieldset className="inline_field col-2">
        <legend>RI</legend>
        <p>{minute.ri?minute.ri:"-"}</p>
      </fieldset>
      <fieldset className="inline_field col-2">
        <legend>Scanner</legend>
        <p> {minute.scanner?minute.scanner:"-"}</p>
      </fieldset>
      
      <fieldset className="inline_field col-2">
        <legend>Autres</legend>
        <p>Autres </p>
      </fieldset>
      <fieldset className="inline_field col-3">
        <legend>Taxes G.</legend>
        <p>{minute.taxes?minute.taxes:"-"}</p>
      </fieldset>
    </fieldset>

    {/* Total declaration */}
    <div style={{display:"flex", justifyContent:"space-around"}} >

    
    <fieldset className="inline_field col-3" >
        <legend>Droits & Taxes</legend>
        <p>{minute.droits?minute.droits:"-"}</p>
      </fieldset>
    <fieldset className="inline_field col-3" >
        <legend>Total Décl.</legend>
        <p>{minute.declaration?minute.declaration:"-"}</p>
      </fieldset>
      </div>
    <div style={{display:"flex", justifyContent:"space-around"}} >

      {/* Document */}
      <fieldset className="col-6" style={{ display: "flex", flexDirection:"column", padding:5, }}>
      <legend>Documents joints</legend>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Reférences</th>
            
          </tr>
        </thead>
        <tbody>
        {minute.documents.map((doc, index)=>doc.checked&&(
          <tr key={index} >
          <td className="col-1">1</td>
          <td className="col-4">{doc.type}</td>
          <td className="col-7"></td>
        
        </tr>
        ))}
         
         
        </tbody>
      </table>
      
    </fieldset>
      <fieldset className="col-5" style={{ display: "flex", flexDirection:"column", padding:5, }}>
      <legend>Observations</legend>
 
    </fieldset>
    </div>
  </section>
  <section className="footer">footer</section>
</div>)

  return (
    <div>
{render}
    </div>
    
  );
})



export default MinutePrint;
