/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useReducer } from "react";

const defaultState = (defaultValue) => {
  return {
    loading: defaultValue === undefined || defaultValue === null,
    value: defaultValue,
  };
};

const reducer = () => (state, action) => {
  switch (action.type) {
    case "error":
      return {
        ...state,
        error: action.error,
        loading: false,
        value: undefined,
      };
    case "reset":
      return defaultState(action.defaultValue);
    case "value":
      return {
        ...state,
        error: undefined,
        loading: false,
        value: action.value,
      };
    default:
      return state;
  }
};

const useLoadingValue = () => {
  const defaultValue = undefined;
  const [state, dispatch] = useReducer(reducer(), defaultState(defaultValue));

  const reset = () => dispatch({ type: "reset", defaultValue });
  const setError = (error) => dispatch({ type: "error", error });
  const setValue = (value) => dispatch({ type: "value", value });

  const { error, loading, value } = state;

  return useMemo(
    () => ({
      reset,
      setError,
      setValue,
      error: error,
      loading: loading,
      value: value,
    }),
    [error, setError, loading, reset, setValue, value]
  );
};

export default useLoadingValue;
