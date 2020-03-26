import React from "react";

import ClassA from "../ClassA";
import FuncA from "../FuncA";

import { ContextState } from "../content";

import styles from "./index.module.css";

const App = React.memo(props => {
  // const {  } = props;

  // 0
  const [tab, setTab] = React.useState("class");
  const handleTab = React.useCallback(
    event => setTab(event.target.dataset.type),
    []
  );

  // 1
  const [count, setCount] = React.useState(0);
  const handleCount = React.useCallback(() => setCount(prev => prev + 1), []);

  // 2
  const [value, setValue] = React.useState(0);
  const handleValue = React.useCallback(() => setValue(prev => prev + 1), []);

  // 3
  const [callback, setCallback] = React.useState(0);
  const handleCallback = React.useCallback(
    () => setCallback(prev => prev + 1),
    []
  );

  // 4
  const [content, setContent] = React.useState({ count: 0, value: 0 });
  const handleContent = React.useCallback(event => {
    const name = event.target.dataset.type;
    setContent(prev => ({ ...prev, [name]: prev[name] + 1 }));
  }, []);

  // 5
  const [grandchild, setGrandchild] = React.useState(0);
  const handleGrandchild = React.useCallback(
    () => setGrandchild(prev => prev + 1),
    []
  );

  // 6
  const [visible, setVisible] = React.useState(true);
  const handleVisible = React.useCallback(() => setVisible(prev => !prev), []);

  return (
    <div className={styles.container}>
      {App.displayName}
      &nbsp;
      <button data-type="class&func" onClick={handleTab}>
        Class & Func
      </button>
      &nbsp;
      <button data-type="class" onClick={handleTab}>
        Class
      </button>
      &nbsp;
      <button data-type="func" onClick={handleTab}>
        Func
      </button>
      &nbsp;
      <button data-type="func&class" onClick={handleTab}>
        Func & Class
      </button>
      <hr />
      <ContextState.Provider value={content}>
        {tab === "class&func" && visible ? (
          <ClassA
            name={App.displayName}
            value={value}
            grandchild={grandchild}
            onCallback={handleCallback}
            func={true}
          />
        ) : null}
        {tab === "class" && visible ? (
          <ClassA
            name={App.displayName}
            value={value}
            grandchild={grandchild}
            onCallback={handleCallback}
            func={false}
          />
        ) : null}
        {tab === "func" && visible ? (
          <FuncA
            name={App.displayName}
            value={value}
            grandchild={grandchild}
            onCallback={handleCallback}
            func={true}
          />
        ) : null}
        {tab === "func&class" && visible ? (
          <FuncA
            name={App.displayName}
            value={value}
            grandchild={grandchild}
            onCallback={handleCallback}
            func={false}
          />
        ) : null}
      </ContextState.Provider>
      <hr />
      count: {count}
      <br />
      value: {value}
      <br />
      callback: {callback}
      <br />
      content count: {content.count}
      <br />
      content value: {content.value}
      <br />
      grandchild: {grandchild}
      <br />
      <hr />
      <button onClick={handleCount}>改变自身 count 的值</button>
      &nbsp;
      <button onClick={handleValue}>
        {`改变 ${
          tab === "class&func" || tab === "class"
            ? ClassA.displayName
            : FuncA.displayName
        } value 的值`}
      </button>
      &nbsp;
      <button data-type="count" onClick={handleContent}>
        改变 content count 的值
      </button>
      &nbsp;
      <button data-type="value" onClick={handleContent}>
        改变 content value 的值
      </button>
      &nbsp;
      <button onClick={handleGrandchild}>
        改变 ClassC/FuncC/ClassD/FuncD grandchild 的值
      </button>
      &nbsp;
      <button onClick={handleVisible}>{`卸载/重载 ${
        tab === "class&func" || tab === "class"
          ? ClassA.displayName
          : FuncA.displayName
      }`}</button>
    </div>
  );
});

App.displayName = "Container";

export default App;
