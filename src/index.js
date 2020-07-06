import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import "./utils/rem.js";
import "./assets/style/reset.scss";
import "./assets/style/common.scss";
import { BrowserRouter as Router } from "react-router-dom";
ReactDom.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.querySelector("#root")
);
