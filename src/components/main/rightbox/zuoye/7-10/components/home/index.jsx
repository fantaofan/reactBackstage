import React from "react";
import "./index.scss";
import { Icon } from "antd";
import data from "../../data/data.json";
export default class Home10 extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: "sy01"
    };
  }
  getuser = user => {
    this.setState({
      flag: user
    });
  };
  render() {
    var users = this.state.flag;
    return (
      <div>
        <h2 style={{ textAlign: "center", margin: "30px" }}>
          社会人🐖资料查询系统V1.0
        </h2>
        <div className="main">
          <div className="left">
            <ul>
              <li
                onClick={() => {
                  this.getuser("sy01");
                }}
              >
                <Icon type="crown" style={{ marginRight: "10px" }} />
                宋宇
              </li>
            </ul>
            <ul>
              <li
                onClick={() => {
                  this.getuser("whg02");
                }}
              >
                <Icon type="reddit" style={{ marginRight: "10px" }} />
                王洪刚
              </li>
            </ul>
          </div>
          <div className="right">
            <img src={data[users].ioc} />
            <p>{data[users].name}</p>
            <p>{data[users].sex}</p>
            <p>{data[users].age}</p>
            <p>{data[users].birth}</p>
            <p>{data[users].job}</p>
            <p>{data[users].oldPass[0]}</p>
            <p>{data[users].oldPass[1]}</p>
            <p>{data[users].ideal}</p>
          </div>
        </div>
      </div>
    );
  }
}
