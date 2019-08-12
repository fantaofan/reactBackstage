import React from "react";
function State() {
  return (
    <div>
      <p>
        如果说props是组件对外的接口，那么state则是组件对内的接口，state作为组件的私有属性，只能被本组件去访问和修改。而props对于使用它的组件来说是只读的，如果想要修改props，只能通过组件的父组件修改。
        React把组件看成是一个特殊的状态机，通过与用户的交互实现不同状态，进而渲染界面，让用户界面和数据保持一致。在React中，如果需要使用state，就需要在组件的constructor初始化相关的state。例如：
      </p>
      <div className="pre">
        <pre>
          <code>
            {`
                constructor(props) {
                    super(props);
                    this.state={
                        key:value,
                        ...
                    }
                }
            `}
          </code>
        </pre>
      </div>
      <p>如果要更新组件的state，则需要调用setState方法。</p>
      <div className="pre">
        <pre>
          <code>
            {`
                this.setState({
                    key:value
                })
            `}
          </code>
        </pre>
      </div>
      <p>
        需要注意的是，在调用setState函数执行更新操作时，组件的state并不会立即改变，因为setState()是异步的。setState操作只是把要修改的状态放入一个队列中，出于性能原因，React可能会对多次的setState状态修改进行合并修正，所以当我们使用
        this.state
        获取状态state时，可能并不是我们需要的那个state。同理，也不能依赖当前的props来计算组件的下一个状态，因为props一般也是从父组件的State中获取，依然无法确定组件在状态更新时的值。
        同时，在调用setState修改组件状态时，只需要传入需要改变的状态变量即可，而不必传入组件完整的state，因为组件state的更新是一个浅合并的过程。例如，一个组件的state由title和content构成。
      </p>
      <div className="pre">
        <pre>
          <code>
            {`
                this.state = {
                    title : 'React',
                    content : 'React is an wonderful JS library!'
                }
            `}
          </code>
        </pre>
      </div>
      <p>
        当需要修改title的状态时，只需要调用setState()修改title的内容即可。例如：
      </p>
      <div className="pre">
        <pre>
          <code>
            {`
                this.setState({title: 'React Native'});
            `}
          </code>
        </pre>
      </div>
      <p>
        由于state的更新是一个浅合并的过程，所以合并后的state只会修改新的title到state中，同时保留content的原有状态。合并后的内容如下：
      </p>
      <div className="pre">
        <pre>
          <code>
            {`
                {
                    title : 'React Native ',
                    content : 'React is an wonderful JS library!'
                }
            `}
          </code>
        </pre>
      </div>
    </div>
  );
}
export default State;
