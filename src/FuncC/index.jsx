import React from "react";

import { ContextState } from "../content";

import styles from "./index.module.css";

const Component = React.memo(props => {
  const { name, value: childValue, grandchild, onCallback } = props;

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
  const context = React.useContext(ContextState);

  return (
    <div className={styles.container}>
      {Component.displayName}
      <hr />
      body
      <hr />
      count: {count}
      <br />
      <hr />
      child value: {childValue}
      <br />
      context: {context.count}
      <br />
      grandchild: {grandchild}
      <hr />
      <button onClick={handleCount}>改变自身 state 的值</button>
      &nbsp;
      <button onClick={onCallback}>{`改变 ${name} state 的值`}</button>
    </div>
  );
});

Component.propTypes = {};

Component.defaultProps = {};

Component.displayName = "FuncC";

export default Component;
