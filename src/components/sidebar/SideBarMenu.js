import React, { useRef, useState } from "react";
import "./sidebar.css";

import sidebar_items from "../route/sidebar_routes.json";
import { Link } from "react-router-dom";
import { mdiMeteor } from "@mdi/js";
import Icon from "@mdi/react";

const SidebarItem = (props) => {
  const active = props.active === props.index ? "active" : "";

  return (
    <div className="sidebar__item">
      <Link to={props.route}>
        <div className={`sidebar__item-inner ${active}`}>
          <i className={props.icon}></i>
          <span>{props.title}</span>
        </div>
      </Link>
      <ul>
        {props.sub_menu.map((item, index) => (
          <li key={index}>
            <Link to={`${item.route}`}>
              <div
                className="submenu__item"
                style={{ display: active ? "block" : "none" }}
              >
                <div className={`submenu__item-inner ${active}`}>
                  <i className={item.icon}></i>
                  <span style={{ marginLeft: 5 }}> {item.display_name}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const clickOutsideRef = (content_ref, toggle_ref) => {
  // console.log(content_ref.current);
  document.addEventListener("mousedown", (e) => {
    //user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      //user click outside and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        // content_ref.current.classList.remove("active");
        // document.getElementsByClassName('layout')[0].classList.remove("sidebar-width")
      }
    }
  });
};

const renderMenuToggle = (title) => (
  <div
    style={{ display: "flex", alignItems: "center" }}
    onClick={(e) => {
      e.preventDefault();
      if (!document.getElementsByClassName("layout sidebar-width")[0]) {
        document
          .getElementsByClassName("layout")[0]
          .classList.add("sidebar-width");
      } else {
        document
          .getElementsByClassName("layout")[0]
          .classList.remove("sidebar-width");
        console.log("existe");
      }

      console.log(title);
    }}
  >
    <Icon path={mdiMeteor} size={1} color="var(--main-color)" />
    <div className="user" style={{ display: "flex", alignItems: "center" }}>
      {title}
    </div>
  </div>
);

const SideBarMenu = (props) => {
  const menu_toggle_el = useRef(null);
  const view_content_el = useRef(null);

  const [active, setActive] = useState(0);
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );
  clickOutsideRef(view_content_el, menu_toggle_el);
  return (
    <div className="menu">
      <button ref={menu_toggle_el} className="menu__toggle">
        {renderMenuToggle("Menu")}
      </button>
      <div
        ref={view_content_el}
        className="sidebar view_content"
        style={{
          display: "flex",
          flexDirection: "column",

          marginTop: 5,
          backgroundColor: "white",
        }}
      >
        <div>
          <ul style={{ marginTop: 4 }}>
            {sidebar_items.map((item, index) => (
              <li key={index} onClick={() => setActive(index)}>
                <SidebarItem
                  title={item.display_name}
                  active={active}
                  index={index}
                  icon={item.icon}
                  route={item.route}
                  sub_menu={item.sub_menu}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
