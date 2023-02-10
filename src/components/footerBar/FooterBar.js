import React, { useState } from "react";
import "./footerBar.css";
import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiCalendarMultiple,
  mdiCalendar,
  mdiBellOutline,
  mdiAccountMultipleOutline,
  mdiSync,
  mdiSyncAlert,
  mdiCheckAll,
  mdiCheckDecagram,
  mdiDatabase,
  mdiDatabaseAlert,
  mdiBellBadgeOutline,
  mdiCalendarCheckOutline,
} from "@mdi/js";

const listServices =["Direction","Transit","Facturation","Comptabilité","(...)"]
const FooterBar = () => {
const [service, setService] = useState(null)

  return (
    <div className="footerBar col-12">
      {/* left */}
      <div className="col-2 f__left">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          {true ? (
            <Icon path={mdiDatabase} title="Database On" size={0.8} />
          ) : (
            <Icon path={mdiDatabaseAlert} title="Database off" size={0.8} />
          )}

          <span>Database</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          {false ? (
            <Icon path={mdiCheckDecagram} title="Valide" size={0.8} />
          ) : (
            <Icon path={mdiCheckAll} title="Démo" size={0.8} />
          )}

          <span>License</span>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          {true ? (
            <Icon path={mdiSyncAlert} title="Alerte synchro" size={0.8} />
          ) : (
            <Icon path={mdiSync} title="Alerte sync" size={0.8} />
          )}
        </div>
      </div>
      {/* center col-.. */}
      <div className="center col-8">
        {listServices.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              console.log(item);
              setService(item)
            }}
            className={`${service===item?"fonction  active":"fonction"}`}
          >
            {" "}
            {item}
          </div>
        ))}
      </div>
      {/* right */}
      <div
        className="col-2 f__right"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <Icon
            path={mdiAccountMultipleOutline}
            title="Forum Group"
            size={0.8}
            color="white"
          />
          <span>Forum</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          {false ? (
            <Icon
              path={mdiBellOutline}
              title="Alerte"
              size={0.8}
              color="white"
            />
          ) : (
            <Icon
              path={mdiBellBadgeOutline}
              title="Alerte"
              size={0.8}
              color="white"
            />
          )}

          <span>Alerte</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <Icon
            path={mdiCalendarCheckOutline}
            title="Période"
            size={0.8}
            color="white"
          />
          <span> 11/2022</span>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
