import React from "react";

import ClassC from "../ClassC";
import ClassD from "../ClassD";
import FuncC from "../FuncC";
import FuncD from "../FuncD";

import styles from "./index.module.css";

const Component = React.memo(props => {
  const { name, func, value: parentValue, grandchild, onCallback } = props;

  React.useEffect(() => {
    console.log(`${Component.displayName}: useEffect`);
    return () => {
      console.log(`${Component.displayName}: useEffect Cleanup`);
    };
  }, []);

  React.useLayoutEffect(() => {
    console.log(`${Component.displayName}: useLayoutEffect`);
    return () => {
      console.log(`${Component.displayName}: useLayoutEffect Cleanup`);
    };
  }, []);

  const updateEffect = React.useRef(false);
  React.useEffect(() => {
    if (!updateEffect.current) {
      updateEffect.current = true;
    } else {
      console.log(`${Component.displayName}: useUpdateEffect`);
    }
  });

  const updateLayoutEffect = React.useRef(false);
  React.useLayoutEffect(() => {
    if (!updateLayoutEffect.current) {
      updateLayoutEffect.current = true;
    } else {
      console.log(`${Component.displayName}: useUpdateLayoutEffect`);
    }
  });

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
  const [visible, setVisible] = React.useState(true);
  const handleVisible = React.useCallback(() => setVisible(prev => !prev), []);

  return (
    <div className={styles.container}>
      {Component.displayName}
      <hr />
      {visible ? (
        func ? (
          <>
            <FuncC
              name={Component.displayName}
              value={value}
              grandchild={grandchild}
              onCallback={handleCallback}
            />
            <FuncD
              name={Component.displayName}
              value={value}
              grandchild={grandchild}
              onCallback={handleCallback}
            />
          </>
        ) : (
          <>
            <ClassC
              name={Component.displayName}
              value={value}
              grandchild={grandchild}
              onCallback={handleCallback}
            />
            <ClassD
              name={Component.displayName}
              value={value}
              grandchild={grandchild}
              onCallback={handleCallback}
            />
          </>
        )
      ) : null}
      <hr />
      count: {count}
      <br />
      value: {value}
      <br />
      callback: {callback}
      <br />
      <hr />
      prop value: {parentValue}
      <br />
      grandchild: {grandchild}
      <hr />
      <button onClick={handleCount}>改变自身 count 的值</button>
      &nbsp;
      <button onClick={handleValue}>{`改变 ${
        func
          ? `${FuncC.displayName}/${FuncD.displayName}`
          : `${ClassC.displayName}/${ClassD.displayName}`
      } value 的值`}</button>
      &nbsp;
      <button onClick={onCallback}>{`改变 ${name} callback 的值`}</button>
      &nbsp;
      <button onClick={handleVisible}>{`卸载/重载 ${
        func
          ? `${FuncC.displayName}/${FuncD.displayName}`
          : `${ClassC.displayName}/${ClassD.displayName}`
      }`}</button>
    </div>
  );
});

Component.propTypes = {};

Component.defaultProps = {};

Component.displayName = "FuncB";

export default Component;
