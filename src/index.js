import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
import "./assets/css/theme.css";
import "./assets/css/index.css";

// console.log(store.getState());

document.title = "UNITRAF ERP";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
