import _ from "lodash";
import React from "react";

export function hasPlainObject(value) {
  return _.isPlainObject(value) && !_.isEmpty(value);
}

export function mergeDeep(obj, init = {}) {
  return _.reduce(
    obj,
    (acc, value, key) => {
      if (
        _.isString(value) ||
        _.isNumber(value) ||
        _.isBoolean(value) ||
        _.isNull(value) ||
        _.isUndefined(value) ||
        _.isSymbol(value) ||
        _.isFunction(value)
      ) {
        acc[key] = value;
      } else if (hasPlainObject(value) && hasPlainObject(acc[key])) {
        acc[key] = mergeDeep(value, acc[key]);
      } else {
        acc[key] = _.cloneDeep(value);
      }
      return acc;
    },
    init
  );
}

export function mergeObject(object, ...sources) {
  let res = object;
  _.each(sources, src => {
    res = mergeDeep(src, res);
  });
  return res;
}

export function createHookContext(useHook, defaultValue) {
  const Context = React.createContext(defaultValue);
  Context.displayName = "HookContext";

  const Provider = (props = {}) => {
    const { children, ...others } = props;
    const value = useHook(others);
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useContext = () => React.useContext(Context);

  return { Provider, useContext };
}

export function connectContext(useContext, ...args) {
  return mapContextToProps => WrappedComponent =>
    React.memo(
      React.forwardRef((ownProps, ref) => {
        const context = useContext(...args);
        const contextProps = _.isFunction(mapContextToProps)
          ? mapContextToProps(context, ownProps)
          : {};
        // const props = { ...ownProps, ...contextProps };
        const props = mergeObject({}, ownProps, contextProps);
        return <WrappedComponent ref={ref} {...props} />;
      })
    );
}

function useAppState(props = {}) {
  // const {} = props;

  const initialState = {
    count: 0,
    value: 0
  };

  const reducer = (state, action) => {
    const actions = {
      setState: payload => {
        if (!hasPlainObject(payload)) {
          return state;
        }

        return _.reduce(
          payload,
          (result, value, key) => {
            if (key in initialState) {
              result[key] = _.isFunction(value) ? value(state[key]) : value;
            }
            return result;
          },
          _.cloneDeep(state)
        );
      },
      default: () => initialState
    };

    return _.isFunction(actions[action.type])
      ? actions[action.type](action.payload)
      : actions["default"]();
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);
  return { state, dispatch };
}

export const AppState = createHookContext(useAppState);

export const AppAction = {
  setState: payload => ({ type: "setState", payload })
};
