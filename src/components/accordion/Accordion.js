import React from "react";
// import "./accordion.css";

const section = [1, 2, 3, 4];

const Accordion = () => {
  const render = (
    <div>
      {section.map((item, index) => (
        <div key={index}>
          <button className="accordion">Section {index+1}</button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>
        </div>
      ))}
    </div>
  );
  return (
 <div>

     {render}
 </div>
    
  );
};

export default Accordion;
