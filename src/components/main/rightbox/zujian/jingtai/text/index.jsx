import React from "react";
function Text() {
  return (
    <div>
      <p>定义组件最简单的方式就是编写 JavaScript 函数：</p>
      <div className="pre">
        <pre>
          <code>
            {`
              function Welcome(props) {
                return <h1>Hello, {props.name}</h1>;
              }
            `}
          </code>
        </pre>
      </div>
      <p>
        该函数是一个有效的 React 组件，因为它接收唯一带有数据的
        “props”（代表属性）对象与并返回一个 React 元素。
        <br />
        这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数。
      </p>
    </div>
  );
}
export default Text;
