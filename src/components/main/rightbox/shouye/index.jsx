import React from "react";
import "./index.scss";
import Content from "../../../common";
import Biji from "./biji";
import Banben from "./banben";
import Guanyu from "./guanyu";
export default class Shouye extends React.Component {
  render() {
    var itemData = [
      { href: "https://react.docschina.org/", text: "React官网" },
      {
        href:
          "https://note.youdao.com/ynoteshare1/index.html?id=c9af79f9dc6e3f3203ad3da7180b9a9a&type=note",
        text: "宋老师的ppt链接"
      },
      { href: "#", text: "今日所学" },
      { href: "#", text: "学习计划" }
    ];
    var colData = [
      { title: "笔记摘要", content: <Biji /> },
      { title: "版本信息", content: <Banben /> },
      { title: "关于React", content: <Guanyu /> }
    ];
    return (
      <div className="shou-main">
        <div className="shou-header">
          <ul className="flex flex-bt">
            {itemData.map((item, index) => {
              return (
                <Content type="li" liName="shou-header-item" key={index}>
                  <a href={item.href}>{item.text}</a>
                </Content>
              );
            })}
          </ul>
        </div>

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
      </div>
    );
  }
}
