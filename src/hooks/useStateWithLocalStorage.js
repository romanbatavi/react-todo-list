import React from "react";
import PropTypes from "prop-types";

const useStateWithLocalStorage = localStorageKey => {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || []
  );

  if (!localStorageKey) {
    throw new Error(
      "You have to passed in a local storage key as an argument!"
    );
  }

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  });

  return [todos, setTodos];
};

useStateWithLocalStorage.propTypes = {
  localStorageKey: PropTypes.string.isRequired
};

export default useStateWithLocalStorage;
