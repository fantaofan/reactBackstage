import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import Home from "./components/home";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Home />, document.getElementById("root"));

serviceWorker.unregister();
