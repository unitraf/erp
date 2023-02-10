import React, { useState } from "react";
import DropDown from "../dropdown/DropDown";
import { Link } from "react-router-dom";

import "./topnav.css";
import notifications from "../../assets/JsonData/notification.json";

import user_image from "../../assets/images/logo.png";
import user_menu from "../../assets/JsonData/user_menus.json";
import { useSelector } from "react-redux";


const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="Usser" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);
const renderUserMenu = (item, index, onClick) => (
  <Link to="" key={index} onClick={onClick}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const TopNav = (props) => {
  const state = useSelector(state=>state)
  // console.log(state);
  const { userSession, setUserSession, userData } = props;
  const [click, setClick] = useState(null)
  const onClick = (e) => {
    e.preventDefault()
    // console.log(e.target.innerHTML);
    setClick(e.target.innerHTML)};
switch (click) {
  case "Déconnexion":
    console.log('Déconnexion');

    window.api.quit(state)
    break;
    case "Paramètre":
      console.log('Paramètre');
      break;
      case "Profile":
        console.log('Profile');
        break;
  default:
    // console.log('defalt');
    break;
}
  const curr_user = {
    display_name: userData ? userData.pseudo : "Admin",
    image: user_image,
  };

  return (
    <div className="topnav">
    
      <div className="topnav__search">
        <input type="text" placeholder="Rechercher ici ...." />
        <i className="bx bx-search"></i>
      </div>

      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          {/* <DropDown icon='bx bx-user' /> */}
          <DropDown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index,(e)=> onClick(e))}
          />
        </div>

        <div className="topnav__right-item">
          {/* dropdown here */}
          <DropDown
            icon="bx bx-bell"
            badge="4"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">....</Link>}
          />
        </div>

        <div className="topnav__right-item">{/* theme setting */}</div>
      </div>
    </div>
  );
};

export default TopNav;
