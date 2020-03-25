// import _ from 'lodash';
import React from "react";
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
// import Link from 'umi/link';
// import Router from 'umi/router';
// import Redirect from 'umi/redirect';
// import {  } from 'antd';
// import { formatMessage } from 'umi-plugin-react/locale';

import ClassB from "../ClassB";
import FuncB from "../FuncB";

import styles from "./index.module.css";

class Component extends React.PureComponent {
  // state = { hasError: false };

  static displayName = "ClassA";

  static propTypes = {};

  static defaultProps = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      `${Component.displayName}: getDerivedStateFromProps`,
      nextProps,
      prevState
    );
    return null;
  }

  static getDerivedStateFromError(error) {
    console.log(`${Component.displayName}: getDerivedStateFromError`, error);
    return { hasError: true };
  }

  constructor() {
    super(...arguments);
    console.log(`${Component.displayName}: constructor`, arguments);
    const that = this;
    // const {  } = that.props;
    that.state = {
      hasError: false,
      count: 0,
      value: 0,
      callback: 0,
      visible: true
    };
  }

  // UNSAFE_componentWillMount() {
  //   const that = this;
  //   console.log(
  //     `${Component.displayName}: UNSAFE_componentWillMount`,
  //     that.props,
  //     that.state
  //   );
  //   // const {  } = that.props;
  //   // const {  } = that.state;
  // }

  componentDidMount() {
    const that = this;
    console.log(
      `${Component.displayName}: componentDidMount`,
      that.props,
      that.state
    );
    // const {  } = that.props;
    // const {  } = that.state;
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   const that = this;
  //   console.log(
  //     `${Component.displayName}: UNSAFE_componentWillReceiveProps`,
  //     that.props,
  //     nextProps
  //   );
  //   // const {  } = that.props;
  //   // const {  } = that.state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const that = this;
  //   console.log(
  //     `${Component.displayName}: shouldComponentUpdate`,
  //     that.props,
  //     nextProps,
  //     that.state,
  //     nextState
  //   );
  //   // const {  } = that.props;
  //   // const {  } = that.state;
  //   return true;
  // }

  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   const that = this;
  //   console.log(
  //     `${Component.displayName}: UNSAFE_componentWillUpdate`,
  //     that.props,
  //     nextProps,
  //     that.state,
  //     nextState
  //   );
  //   // const {  } = that.props;
  //   // const {  } = that.state;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const that = this;
    console.log(
      `${Component.displayName}: getSnapshotBeforeUpdate`,
      prevProps,
      that.props,
      prevState,
      that.state
    );
    // const {  } = that.props;
    // const {  } = that.state;
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const that = this;
    console.log(
      `${Component.displayName}: componentDidUpdate`,
      prevProps,
      that.props,
      prevState,
      that.state,
      snapshot
    );
    // const {  } = that.props;
    // const {  } = that.state;
  }

  componentDidCatch(error, info) {
    const that = this;
    console.log(
      `${Component.displayName}: componentDidCatch`,
      that.props,
      that.state,
      error,
      info
    );
    // const {  } = that.props;
    // const {  } = that.state;
  }

  componentWillUnmount() {
    const that = this;
    console.log(
      `${Component.displayName}: componentWillUnmount`,
      that.props,
      that.state
    );
    // const {  } = that.props;
    // const {  } = that.state;
  }

  handleCount = () => {
    const that = this;
    that.setState(prev => ({ count: prev.count + 1 }));
  };

  handleValue = () => {
    const that = this;
    that.setState(prev => ({ value: prev.value + 1 }));
  };

  handleCallback = () => {
    const that = this;
    that.setState(prev => ({ callback: prev.callback + 1 }));
  };

  handleVisible = () => {
    const that = this;
    that.setState(prev => ({ visible: !prev.visible }));
  };

  render() {
    const that = this;
    console.log(`${Component.displayName}: render`, that.props, that.state);
    const {
      name,
      func,
      value: containerValue,
      grandchild,
      onCallback
    } = that.props;
    const { count, value, callback, visible } = that.state;

    return (
      <div className={styles.container}>
        {Component.displayName}
        <hr />
        {visible ? (
          func ? (
            <FuncB
              name={Component.displayName}
              value={value}
              grandchild={grandchild}
              onCallback={that.handleCallback}
              func={false}
            />
          ) : (
            <ClassB
              name={Component.displayName}
              value={value}
              grandchild={grandchild}
              onCallback={that.handleCallback}
              func={false}
            />
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
        container value: {containerValue}
        <br />
        grandchild: {grandchild}
        <hr />
        <button onClick={that.handleCount}>改变自身 state 的值</button>
        &nbsp;
        <button onClick={that.handleValue}>
          {`改变 ${func ? FuncB.displayName : ClassB.displayName} prop 的值`}
        </button>
        &nbsp;
        <button onClick={onCallback}>{`改变 ${name} state 的值`}</button>
        &nbsp;
        <button onClick={that.handleVisible}>
          {`卸载/重载 ${func ? FuncB.displayName : ClassB.displayName}`}
        </button>
      </div>
    );
  }
}

export default Component;
