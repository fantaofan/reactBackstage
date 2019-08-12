import React from "react";
import "../../../index.scss";
import Content from "../../../../common";
import Dingyi from "../react/dingyi";
import Shili from "../react/shili";
import Yongfa from "../react/yongfa";
export default class Com extends React.Component {
  render() {
    var colData = [
      { title: "React.Component：", content: <Dingyi /> },
      { title: "示例：", content: <Shili /> },
      { title: "用法介绍：", content: <Yongfa /> }
    ];
    return (
      <div style={{ padding: "15px" }} className="re-box">
        {colData.map((item, index) => {
          return (
            <Content type="div" liName="col" key={index}>
              <div className="col-header">{item.title}</div>
              <div className="col-body">{item.content}</div>
            </Content>
          );
        })}
      </div>
    );
  }
}
