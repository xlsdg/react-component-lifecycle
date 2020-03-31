// import _ from "lodash";
import React from "react";

import { AppState, AppAction, connectContext } from "../hook";

import styles from "./index.module.css";

function useMount(name) {
  React.useEffect(() => {
    console.log(`${name}: didMount [useEffect]`);
    return () => {
      console.log(`${name}: unMount [useEffect Cleanup]`);
    };
  }, [name]);

  // React.useLayoutEffect(() => {
  //   console.log(`${name}: didMount [useLayoutEffect]`);
  //   return () => {
  //     console.log(`${name}: unMount [useLayoutEffect Cleanup]`);
  //   };
  // }, [name]);
}

function useUpdate(name) {
  const updateEffect = React.useRef(false);
  React.useEffect(() => {
    if (!updateEffect.current) {
      updateEffect.current = true;
    } else {
      console.log(`${name}: didUpdate [useUpdateEffect]`);
    }
  });

  // const updateLayoutEffect = React.useRef(false);
  // React.useLayoutEffect(() => {
  //   if (!updateLayoutEffect.current) {
  //     updateLayoutEffect.current = true;
  //   } else {
  //     console.log(`${name}: didUpdate [useUpdateLayoutEffect]`);
  //   }
  // });
}

const DemoG = React.memo(props => {
  // const {  } = props;
  const name = "DemoG";

  useMount(name);
  useUpdate(name);
  console.log(`${name}: render`);

  return (
    <div className={styles.demoG}>
      {name}
      <hr />
    </div>
  );
});

const DemoF = React.memo(props => {
  // const {  } = props;
  const name = "DemoF";

  useMount(name);
  useUpdate(name);
  console.log(`${name}: render`);

  return (
    <div className={styles.demoF}>
      {name}
      <hr />
    </div>
  );
});

const connectContextCount = connectContext(AppState.useContext)(context => ({
  count: context.state.count
}));

const DemoE = connectContextCount(
  React.memo(props => {
    const { count } = props;
    const name = "DemoE";

    useMount(name);
    useUpdate(name);
    console.log(`${name}: render`);

    // const { state } = AppState.useContext();
    // const count = state.count;
    React.useEffect(() => console.log("count change:", count), [count]);

    return (
      <div className={styles.demoE}>
        {name}
        <hr />
        count: {count}
        <hr />
        <DemoG />
      </div>
    );
  })
);

const connectContextValue = connectContext(AppState.useContext)(context => ({
  value: context.state.value
}));

const DemoD = connectContextValue(
  React.memo(props => {
    const { value } = props;
    const name = "DemoD";

    useMount(name);
    useUpdate(name);
    console.log(`${name}: render`);

    // const { state } = AppState.useContext();
    // const value = state.value;
    React.useEffect(() => console.log("value change:", value), [value]);

    return (
      <div className={styles.demoD}>
        {name}
        <hr />
        value: {value}
        <hr />
        <DemoF />
      </div>
    );
  })
);

const DemoC = React.memo(props => {
  // const {  } = props;
  const name = "DemoC";

  // useMount(name);
  // useUpdate(name);

  return (
    <div className={styles.demoC}>
      {name}
      <hr />
      <DemoD />
      <DemoE />
    </div>
  );
});

const DemoB = React.memo(props => {
  // const {  } = props;
  const name = "DemoB";

  // useMount(name);
  // useUpdate(name);

  return (
    <div className={styles.demoB}>
      {name}
      <hr />
      <DemoC />
    </div>
  );
});

const connectContextDispatch = connectContext(AppState.useContext)(context => ({
  dispatch: context.dispatch
}));

const DemoA = connectContextDispatch(
  React.memo(props => {
    const { dispatch } = props;
    const name = "DemoA";

    useMount(name);
    useUpdate(name);
    console.log(`${name}: render`);

    // const { dispatch } = AppState.useContext();

    React.useEffect(() => console.log("dispatch change"), [dispatch]);

    const handleCount = React.useCallback(
      () => dispatch(AppAction.setState({ count: prev => prev + 1 })),
      [dispatch]
    );
    const handleValue = React.useCallback(
      () => dispatch(AppAction.setState({ value: prev => prev + 1 })),
      [dispatch]
    );

    return (
      <div className={styles.demoA}>
        {name}
        <hr />
        <DemoB />
        <hr />
        <button onClick={handleCount}>改变 count 的值</button>
        &nbsp;
        <button onClick={handleValue}>改变 value 的值</button>
      </div>
    );
  })
);

const App = React.memo(props => {
  // const {  } = props;

  // useMount(App.displayName);
  // useUpdate(App.displayName);

  return (
    <div className={styles.container}>
      {App.displayName}
      <hr />
      <AppState.Provider>
        <DemoA />
      </AppState.Provider>
    </div>
  );
});

App.displayName = "Container";

export default App;
