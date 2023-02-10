import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import "./dropDownList.css";
const data = [
  { compte: "1", libelle: "Compte 1" },
  { compte: "2", libelle: "Compte 2" },
  { compte: "3", libelle: "Compte 3" },
];

const DropDownList = (props) => {
  const [display, setDisplay] = useState(false);
  const render = (
    <div
      className="content-list"
      // style={{maxWidth:props.max, minWidth:props.min}}
    >
      {props.content
        ? props.content.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                console.log("item",item);
                // if (props.setData && props.data) {
                //   props.setData({
                //     ...props.data,
                //     compte: item.compte?item.compte:item,
                //     libelle: item.libelle?item.libelle:item,
                //   });
                // }
                // setSelect Props

                props.select && props.data&&props.select({...props.data, journal:item.libelle})

                setDisplay(!display);
              }}
            >
              <span className="col-4">{item.compte?`${item.compte} -`:item}</span>
              <span>{item.libelle?item.libelle:""}</span>
            </div>
          ))
        : ""}
    </div>
  );
  return (
    <div className="dropDown-list" style={{ marginTop: 4 }}>
      <Icon
        style={{
          // border: "1px solid var(--main-color)",
          borderRadius: "5px",
          marginLeft: -25,
          //   marginTop: 3,
        }}
        path={props.icon ? props.icon : mdiChevronDown}
        size={0.8}
        onClick={() => setDisplay(!display)}
      />

      {display && props.content && render}
    </div>
  );
};

export default DropDownList;
