import React from "react";
import Content from "../../../../common";
import Text from "./text";
export default class Class extends React.Component {
  render() {
    var colData = [{ title: "class组件", content: <Text /> }];
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
