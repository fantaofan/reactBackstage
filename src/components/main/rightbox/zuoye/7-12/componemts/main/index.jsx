import React from "react";
import data from "../data/data.json";
export default class Main extends React.Component {
  render() {
    const { radio, duoxuan, area, handleChange, tijiao } = this.props;
    var data1 = data.danxuan;
    var data2 = data.duoxuan;
    var data3 = data.wenben;
    return (
      <div>
        <form>
          <p>
            <span>{data1.title_num}</span>
            <span>{data1.title}</span>
            <span>{data1.title_type}</span>
          </p>
          <div>
            {data1.choose_list.map((item, index) => {
              return (
                <label className="form-label" key={index}>
                  <input
                    type="radio"
                    name="radio"
                    checked={radio === item.id}
                    value={item.id}
                    onChange={e => {
                      handleChange(e, item.id);
                    }}
                  />
                  <span>{item.content}</span>
                </label>
              );
            })}
          </div>
        </form>

        <form>
          <p>
            <span>{data2.title_num}</span>
            <span>{data2.title}</span>
            <span>{data2.title_type}</span>
          </p>

          <div>
            {duoxuan.map((item, index) => {
              return (
                <label className="form-label" key={index}>
                  <input
                    type="checkbox"
                    name="duoxuan"
                    checked={item.checkbox}
                    value={index}
                    onChange={handleChange}
                  />
                  <span>{item.content}</span>
                </label>
              );
            })}
          </div>
        </form>

        <form>
          <p>
            <span>{data3.title_num}</span>
            <span>{data3.title}</span>
            <span>{data3.title_type}</span>
          </p>
          <label className="form-label">
            <textarea value={area} name="area" onChange={handleChange} />
          </label>
        </form>
        <div>
          <p onClick={tijiao} className="submit">
            提交
          </p>
        </div>
      </div>
    );
  }
}
