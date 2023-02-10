import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTarif, updateTarif } from "../../redux/tarifUnitraf/action";
import { Link } from "react-router-dom";
import { initData } from "./utils/tarifUtils";

import "./tarif.css";
import Listing from "../../components/listing/Listing";

const TarifNew = (props) => {
  // console.log(props.location.pathname.match(/(\d+)/));
  let param =  props.match.params.param
  console.log("param", param);

  const dispatch = useDispatch();
  const tarifs = useSelector((state) => state.tarifs);
  const [data, setData] = useState(initData);

  console.log(data);
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleEntree = (e) => {
    let update = data.entree.map((item) => {
      if (Object.keys(item)[0] === e.target.id) {
        return { [e.target.id]: parseFloat(e.target.value) };
      } else {
        return item;
      }
    });

    setData({ ...data, entree: update });
  };
  const handleSortie = (e) => {
    let update = data.sortie.map((item) => {
      if (Object.keys(item)[0] === e.target.id) {
        return { [e.target.id]: e.target.value };
      } else {
        return item;
      }
    });

    setData({ ...data, sortie: update });
  };
  const renderUS = (item, index) => (
    <div
      key={index}
      onClick={() => {
        console.log("item", item);

        setData({ ...data, us: item });
      }}
    >
      <span className="col-4">{item}</span>
    </div>
  );

  console.log(tarifs[parseInt(param)]);
  useEffect(() => {
    console.log('====================================');
    console.log(tarifs[param] );
    console.log('====================================');
    param && tarifs[parseInt(param)] && setData({ ...tarifs[parseInt(param)] });
  }, []);

  const render = (
    <div className="tarif__form">
      {/* detail fieldset intitulé */}

      {/* ligne 1 */}
      <section className="col-12" style={{ display: "flex" }}>
        <div className="inputBox col-2">
          <input
            id="nts"
            value={data.nts}
            type="number"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"nts"}>N.T.S</label>
        </div>
        <div className="inputBox col-5">
          <input
            id="designation"
            value={data.designation}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"designation"}>Désignation des marchandises</label>
        </div>
        <div className="inputBox col-1">
          <input
            id="us"
            value={data.us}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label htmlFor={"us"}>Unité</label>
          <Listing
            content={["kg", "l", "u"]}
            render={renderUS}
            //   select={setSelectJournal}

            min={155}
            max={155}
          />
        </div>
      </section>

      {/* Entrée */}
      <fieldset
        className="col-10"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <legend>Entrée</legend>

        <section className="col-12" style={{ display: "flex" }}>
          {data.entree &&
            data.entree.map((item, index) => (
              <div className="inputBox col-2" key={index}>
                <input
                  id={Object.keys(item)[0]}
                  value={Object.values(item)[0]}
                  type="number"
                  onChange={handleEntree}
                  autoComplete="off"
                  required
                />

                <label htmlFor={Object.keys(item)[0]}>
                  {Object.keys(item)[0]}
                </label>
              </div>
            ))}
        </section>
      </fieldset>
      {/* Sorite */}
      <fieldset
        className="col-2"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <legend>Sorite</legend>

        <section className="" style={{ display: "flex" }}>
          {data.sortie &&
            data.sortie.map((item, index) => {
              return (
                <div className="inputBox col-12" key={index}>
                  <input
                    id={Object.keys(item)[0]}
                    value={Object.values(item)[0]}
                    type="number"
                    onChange={handleSortie}
                    autoComplete="off"
                    required
                  />

                  <label htmlFor={Object.keys(item)[0]}>
                    {Object.keys(item)[0]}
                  </label>
                </div>
              );
            })}
        </section>
      </fieldset>

      {/* footer boutton */}
      <fieldset>
        <div className="inputBox col-2">
          <button
            className="modalBtn col-12"
            onClick={() => {
              console.log(data);
              param !=="999" ? dispatch(updateTarif(data)) : dispatch(addTarif(data));

              setData(initData);
            }}
          >
            {param !=="999" ? "Valider" : "Enrégistrer"}
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
            <Link to="/tarif">Tarif</Link> / {param ? "Edition" : "Nouveau"}
          </h4>
        </div>
      </div>
      <div className="card :">{render}</div>
    </div>
  );
};

export default TarifNew;
