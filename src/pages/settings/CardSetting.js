import { mdiDeleteOutline, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import Menu from "../../components/menu/Menu";
import { listType } from "../transit/utils/dossierUtils";

const CardSetting = (props) => {
  const renderView = (
    <div className="inputBox">
      <input
        id="status"
        // value={data.status}
        type="text"
        style={{ color: "white" }}
        onChange={(e) => console.log(e.value)}
        autoComplete="off"
        required
      />

      <label htmlFor={"status"}>Status</label>
    </div>
  );
  const renderOptions = (item, index) => (
    <div
      className="option"
      key={index}
      // onClick={(e) => {
      //   console.log(item);
      //   document
      //     .getElementsByClassName("menu_content active")[0]
      //     .classList.remove("active");
      // }}
    >
      <span className="option-item">{item}</span>
    </div>
  );
  return (
    <div className="card" style={{ fontSize: "0.8rem", padding: 10 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 5,
          backgroundColor: "var(--main-color)",
          color: "white",
          padding: "2px 5px",
          borderRadius: 5,
        }}
      >
        <span>{props.title}</span>
        <Menu
          style={{
            left: -170,
            marginTop: 10,
          }}
          icon={mdiPlus}
          size={0.7}
          color="white"
          title="Nouveau"
          // content={["Dupliquer", "Modifier", "Supprimer"]}

          view={renderView}
        />
        {/* <Icon path={mdiPlus} size={0.7} style={{ cursor: "pointer" }} /> */}
      </div>

      <ul style={{ border: "1px solid var(--main-color)", borderRadius: 5 }}>
        {props.data &&
          props.data.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 5,
              }}
            >
              <span>{`${index + 1} - ${item}`} </span>{" "}
              <Icon
                path={mdiDeleteOutline}
                size="0.7rem"
                onClick={() => console.log(item)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CardSetting;
