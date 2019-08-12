import React, { Component } from "react";
import { getBaidu } from "../../api/request";
import { debounce } from "lodash";
import "./index.scss";
export default class Home8 extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      data: [],
      list: [],
      backgroundColor: "#953735"
    };
    this.debounce = debounce(function(value) {
      getBaidu(value).then(data => {
        this.setState({
          data: data.s
        });
      });
    }, 2000);
  }
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
    this.debounce({ wd: e.target.value });
  };
  show = () => {
    this.setState({
      list: this.state.data
    });
  };
  delete = index => {
    let oldIndex = index;
    this.setState({
      list: this.state.list.filter((item, index) => index != oldIndex)
    });
  };
  handleWheel = event => {
    var newColor = (
      parseInt(this.state.backgroundColor.substr(1), 16) +
      event.deltaY * 997
    ).toString(16);
    this.setState({
      backgroundColor: "#" + newColor
    });
  };
  render() {
    return (
      <div className="box">
        <div className="box-header">
          <input
            type="text"
            value={this.state.text}
            onChange={e => this.handleChange(e)}
            className="inp"
          />
          <button onClick={() => this.show()} className="btn">
            提交
          </button>
        </div>

        <ul
          onWheel={this.handleWheel}
          style={{ background: this.state.backgroundColor }}
        >
          {this.state.list.map((item, index) => {
            return (
              <li key={index}>
                <span>{item}</span>
                <button onClick={() => this.delete(index)} className="btn1">
                  删除
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
