import React, { useEffect, useState } from "react";
import "./table.css";

const Table = (props) => {
  const initDataShow =
    props.limit && props.bodyData
      ? props.bodyData.slice(0, Number(props.limit))
      : props.bodyData;

  const [dataShow, setDataShow] = useState(initDataShow);

  let pages = 1;
  let range = [];
  if (props.limit !== undefined) {
    let page = Math.round(props.bodyData.length / Number(props.limit));
    pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const [currentPage, setCurrentPage] = useState(0);

  const selectPage = (page) => {
    const start = Number(props.limit) * page;
    const end = start + Number(props.limit);
    setDataShow(props.bodyData.slice(start, end));
    setCurrentPage(page);
  };
  useEffect(() => {
    setDataShow(initDataShow);
  }, [props.bodyData]);
  if (!!dataShow) {
    return (
      <div>
        <div className="table__wrapper">
          <table>
            {props.headData && props.renderHead ? (
              <thead>
                <tr>
                  {props.headData.map((item, index) =>
                    props.renderHead(item, index)
                  )}
                </tr>
              </thead>
            ) : null}

            {props.bodyData && props.renderBody ? (
              <tbody>
                {
                  // props.bodyData.map((item, index) => props.renderBody(item, index))
                  dataShow.map((item, index) => props.renderBody(item, index))
                }
              </tbody>
            ) : null}
          </table>
        </div>
        {pages > 1 ? (
          <div className="table__pagination">
            {range.map((item, index) => (
              <div
                key={index}
                className={`table__pagination-item ${
                  currentPage === index ? "active" : ""
                }`}
                onClick={() => selectPage(index)}
              >
                {item + 1}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  } else {
    console.log("nada");
  }
};

export default Table;
