// import _ from 'lodash';
import React from "react";
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
// import Link from 'umi/link';
// import Router from 'umi/router';
// import Redirect from 'umi/redirect';
// import {  } from 'antd';
// import { formatMessage } from 'umi-plugin-react/locale';

import { ContextState } from "../content";

import styles from "./index.module.css";

class Component extends React.PureComponent {
  // state = { hasError: false };

  static contextType = ContextState;

  static displayName = "ClassC";

  static propTypes = {};

  static defaultProps = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(`${Component.displayName}: getDerivedStateFromProps`);
    return null;
  }

  static getDerivedStateFromError(error) {
    console.log(`${Component.displayName}: getDerivedStateFromError`);
    return { hasError: true };
  }

  constructor() {
    super(...arguments);
    console.log(`${Component.displayName}: constructor`);
    const that = this;
    // const {  } = that.props;
    that.state = {
      hasError: false,
      count: 0
    };
  }

  // UNSAFE_componentWillMount() {
  //   const that = this;
  //   console.log(
  //     `${Component.displayName}: UNSAFE_componentWillMount`,
  //   );
  //   // const {  } = that.props;
  //   // const {  } = that.state;
  // }

  componentDidMount() {
    // const that = this;
    console.log(`${Component.displayName}: componentDidMount`);
    // const {  } = that.props;
    // const {  } = that.state;
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   const that = this;
  //   console.log(
  //     `${Component.displayName}: UNSAFE_componentWillReceiveProps`,
  //   );
  //   // const {  } = that.props;
  //   // const {  } = that.state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const that = this;
  //   console.log(
  //     `${Component.displayName}: shouldComponentUpdate`,
  //   );
  //   // const {  } = that.props;
  //   // const {  } = that.state;
  //   return true;
  // }

  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   const that = this;
  //   console.log(
  //     `${Component.displayName}: UNSAFE_componentWillUpdate`,
  //   );
  //   // const {  } = that.props;
  //   // const {  } = that.state;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // const that = this;
    console.log(`${Component.displayName}: getSnapshotBeforeUpdate`);
    // const {  } = that.props;
    // const {  } = that.state;
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // const that = this;
    console.log(`${Component.displayName}: componentDidUpdate`);
    // const {  } = that.props;
    // const {  } = that.state;
  }

  componentDidCatch(error, info) {
    // const that = this;
    console.log(`${Component.displayName}: componentDidCatch`);
    // const {  } = that.props;
    // const {  } = that.state;
  }

  componentWillUnmount() {
    // const that = this;
    console.log(`${Component.displayName}: componentWillUnmount`);
    // const {  } = that.props;
    // const {  } = that.state;
  }

  handleCount = () => {
    const that = this;
    that.setState(prev => ({ count: prev.count + 1 }));
  };

  render() {
    const that = this;
    console.log(`${Component.displayName}: render`);
    const { name, value, grandchild, onCallback } = that.props;
    const { count } = that.state;

    return (
      <div className={styles.container}>
        {Component.displayName}
        <hr />
        body
        <hr />
        count: {count}
        <br />
        <hr />
        prop value: {value}
        <br />
        context count: {that.context.count}
        <br />
        grandchild: {grandchild}
        <hr />
        <button onClick={that.handleCount}>改变自身 count 的值</button>
        &nbsp;
        <button onClick={onCallback}>{`改变 ${name} callback 的值`}</button>
      </div>
    );
  }
}

export default Component;
