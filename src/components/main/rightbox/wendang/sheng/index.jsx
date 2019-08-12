import React from "react";
import Content from "../../../../common";
import Gainian from "../sheng/gainian";
import State from "../sheng/state";
export default class Sheng extends React.Component {
  render() {
    var colData = [
      { title: "生命周期", content: <Gainian /> },
      { title: "组件的state", content: <State /> }
    ];
    return (
      <div style={{ padding: "15px" }}>
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
