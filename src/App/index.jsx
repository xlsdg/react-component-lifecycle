import React from "react";

import ClassA from "../ClassA";
import FuncA from "../FuncA";

import { ContextState } from "../content";

import styles from "./index.module.css";

const App = React.memo(props => {
  // const {  } = props;

  // 0
  const [tab, setTab] = React.useState("class");
  const handleTab = React.useCallback(tab => setTab(tab), []);

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
  const [content, setContent] = React.useState({ count: 0 });
  const handleContent = React.useCallback(
    () => setContent(prev => ({ ...prev, count: prev.count + 1 })),
    []
  );

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
      <button onClick={() => handleTab("class&func")}>Class & Func</button>
      &nbsp;
      <button onClick={() => handleTab("class")}>Class</button>
      &nbsp;
      <button onClick={() => handleTab("func")}>Func</button>
      &nbsp;
      <button onClick={() => handleTab("func&class")}>Func & Class</button>
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
      content: {content.count}
      <br />
      grandchild: {grandchild}
      <br />
      <hr />
      <button onClick={handleCount}>改变自身 state 的值</button>
      &nbsp;
      <button onClick={handleValue}>
        {`改变 ${
          tab === "class&func" || tab === "class"
            ? ClassA.displayName
            : FuncA.displayName
        } prop 的值`}
      </button>
      &nbsp;
      <button onClick={handleContent}>改变 content 的值</button>
      &nbsp;
      <button onClick={handleGrandchild}>改变 ClassC/FuncC prop 的值</button>
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
