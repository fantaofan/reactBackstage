import React from "react";
function Gainian() {
  return (
    <div>
      <p>组件本质上是状态机，输入确定，输出一定确定。</p>
      <p>
        初始化阶段：
        <br />
        挂载时：constructor 初始化我们的 state 和 props <br />
        挂载前：componentWillMount 生成 react dom 节点：render <br />
        挂载：componentDidMount <br />
      </p>
      <p>
        运行中阶段： <br />
        componentWillReceiveProps：React17 后废弃。
        <br />
        shouldComponentUpdate：判断 React 组件的输出是否受当前 state 或 props
        更改的影响。默认行为是 state
        每次发生变化组件都会重新渲染。默认值返回的是个 true。
      </p>
      <p>
        销毁阶段：
        <br />
        componentWillUnmount： 会在组件卸载及销毁之前直接调用 <br />
        在此方法中执行必要的清理操作，例如，清除timer
      </p>
      <p>state 改变重新调用 render 方法</p>
    </div>
  );
}
export default Gainian;
