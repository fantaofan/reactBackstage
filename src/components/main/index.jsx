import React, { Component } from "react";
import "./index.scss";
import Shouye from "./rightbox/shouye";
import Class from "./rightbox/zujian/class";
import Jingtai from "./rightbox/zujian/jingtai";
import Com from "./rightbox/wendang/react";
import Sheng from "../main/rightbox/wendang/sheng";
import Home8 from "../main/rightbox/zuoye/7-8/components/home";
import Home10 from "../main/rightbox/zuoye/7-10/components/home";
import Home12 from "../main/rightbox/zuoye/7-12/componemts/home";
import SiderDemo from "./leftbox/SiderDemo/SiderDemo.jsx";
export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let dom = "";
    switch (this.props.link) {
      case "shouye":
        dom = <Shouye />;
        break;
      case "rongqi":
        dom = <Class />;
        break;
      case "jingtai":
        dom = <Jingtai />;
        break;
      case "com":
        dom = <Com />;
        break;
      case "sheng":
        dom = <Sheng />;
        break;
      case "7-8":
        dom = <Home8 />;
        break;
      case "7-10":
        dom = <Home10 />;
        break;
      case "7-12":
        dom = <Home12 />;
        break;
    }
    return (
      <div className="main-box flex">
        <div className={this.props.toggle ? "leftbox" : "hide"}>
          <SiderDemo setRouter={this.props.setRouter} />
        </div>

        <div className={this.props.toggle ? "rightbox" : "show"}>{dom}</div>
      </div>
    );
  }
}
