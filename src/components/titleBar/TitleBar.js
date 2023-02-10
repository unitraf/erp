import React from "react";
import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiCalendarMultiple,
  mdiAccountBadgeOutline,
  mdiMagnify,
  mdiChevronDown,
  mdiWindowMinimize,
  mdiWindowMaximize,
  mdiWindowClose,
  mdiWindowRestore} from "@mdi/js";
import "./titlebar.css";


import Menu from "../menu/Menu";
import { useSelector } from "react-redux";

import SideBarMenu from "../sidebar/SideBarMenu";
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

const userContent = (item, index) => (
  <div className="item" key={index}>
    <Icon path={item.icon} size={0.8} />
    <span>{item.content}</span>
  </div>
);
const renderUserToggle = (user) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <Icon path={mdiAccountBadgeOutline} size={0.8} />

    <div className="user" style={{ display: "flex", alignItems: "center" }}>
      {user}
      <Icon path={mdiChevronDown} size={0.8} />
    </div>
  </div>
);
const TitleBar = (props) => {
  
  const state = useSelector((state) => state);
  return (
    <div className="titlebar col-12">
      {/* gauche */}
   
      <div
        className="left col-4"
        style={{ display: "flex", alignItems: "center" }}
      >
        {/* SideBar Menu */}
        <SideBarMenu {...props} />
      </div>

      {/* center */}
      <div className="center col-4">
        <input
          type={"text"}
          placeholder="Unitraf Search"
          style={{
            width: "100%",
            borderRadius: 5,
            textAlign: "center",
            padding: "5px 5px",
            border: "1px solid var(--main-color)",
            backgroundColor: "transparent",
            color: "var(--main-color)",
          }}
        />
        <span className="search" style={{}}>
          <Icon
            path={mdiMagnify}
            title="Recherche"
            size={0.8}
            color="var(--main-color)"
            rotate={90}
          />
        </span>
      </div>
      {/* Droite... */}
      <div
        className="right col-4"
        style={{ display: "flex", alignItems: "center" }}
      >
        {/* user menu */}
        <Menu
          style={{ display: "flex", marginTop: 5, backgroundColor: "white" }}
          content={content}
          customtoggle={() => renderUserToggle("admin@unitraf.com")}
          render={(item, index) => userContent(item, index)}
        />
        <h2 style={{ fontSize: 20, color: "var(--main-color)" }}>|</h2>
        <span>
          <Icon
            path={mdiWindowMinimize}
            title="Reduire"
            size={0.8}
            // color="var(--main-color)"
          />
        </span>

        <span>
          <Icon
            path={true ? mdiWindowMaximize : mdiWindowRestore}
            vertical
            title="Agrandir"
            size={0.8}
            // color="var(--main-color)"
          />
        </span>

        <span onClick={() => window.api.quit(state)}>
          <Icon
            path={mdiWindowClose}
            title="Fermer"
            size={0.8}
            // color="var(--main-color)"
          />
        </span>
        {/* URGENT..... */}
        <div className="topnav__right-item"></div>
      </div>
    </div>
  );
};

export default TitleBar;
