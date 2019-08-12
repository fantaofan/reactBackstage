import React from "react";
function Banben() {
  return (
    <div>
      <table className="col-table">
        <colgroup>
          <col width="150" />
        </colgroup>
        <tbody>
          <tr>
            <td className="left-td">版本号</td>
            <td className="right-td">v2.0.0-beta1</td>
          </tr>
          <tr>
            <td className="left-td">依赖</td>
            <td className="right-td">layui v2.2.5</td>
          </tr>
          <tr>
            <td className="left-td">作者</td>
            <td className="right-td">Van Zheng</td>
          </tr>
          <tr>
            <td className="left-td">邮箱</td>
            <td className="right-td">zheng_jinfan@126.com</td>
          </tr>
          <tr>
            <td className="left-td">交流群</td>
            <td className="right-td">248049395</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Banben;
