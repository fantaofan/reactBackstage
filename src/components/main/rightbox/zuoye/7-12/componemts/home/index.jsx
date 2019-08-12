import React from "react";
import "./index.scss";
import data from "../data/data.json";
import Main from "../main";
export default class Home12 extends React.Component {
  constructor() {
    super();
    this.state = {
      radio: "",
      duoxuan: [
        { checkbox: false, content: "一天吃5次主食" },
        { checkbox: false, content: "不光吃5次主食还要喝8杯可乐" },
        { checkbox: false, content: "除了5次主食8杯可乐还要吃半斤多的零食" },
        {
          checkbox: false,
          content: "吃完上面的食物，打开朋友圈发一条减肥口号"
        },
        { checkbox: false, content: "素食主义" },
        { checkbox: false, content: "热爱运动" },
        { checkbox: false, content: "喜欢古典音乐" },
        { checkbox: false, content: "喜欢看书，偶尔也写点东西" }
      ],
      area: "",
      answer: []
    };
  }

  // 单选框通过id进行修改
  handleChange = (event, id) => {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    const checkboxs = JSON.parse(JSON.stringify(this.state.duoxuan));

    if (name === "duoxuan") {
      checkboxs[value].checkbox = event.target.checked;
    }
    // 改变state值
    this.setState({
      [name]: name === "duoxuan" ? checkboxs : name === "radio" ? id : value
    });
  };

  // 点击提交向数组里添加被选中的数据
  tijiao = () => {
    let { answer, radio, duoxuan, area } = this.state;

    // 单选框
    let radios = data.danxuan.choose_list.find(item => item.id === radio);
    answer = [...answer, radios.content];

    // 多选框
    duoxuan.filter(item => {
      if (item.checkbox) {
        answer = [...answer, item.content];
      } else {
        answer = answer.filter(items => items.content !== item.content);
      }
    });

    // 文本域
    answer = [...answer, area];

    // 打印结果
    console.log(answer);
  };
  render() {
    const { radio, duoxuan, area } = this.state;
    return (
      <div className="boxs">
        <Main
          radio={radio}
          duoxuan={duoxuan}
          area={area}
          handleChange={this.handleChange}
          tijiao={this.tijiao}
        />
      </div>
    );
  }
}
