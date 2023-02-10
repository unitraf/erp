import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../Routes";

import "./layout.css";
import TitleBar from "../titleBar/TitleBar";

const Layout = (props) => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <TitleBar {...props} />
            <div className="layout">
              <div className="layout__content" style={{ marginTop: 50 }}>
                <div className="layout__content-main">
                  <Routes />
                </div>
              </div>
            </div>
          </>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
