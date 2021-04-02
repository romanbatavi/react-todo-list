import React, { useState } from "react";

import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage";

import Paper from "../components/paper/Paper";
import Header from "../components/header/Header";
import TodoForm from "../components/todoForm/TodoForm";
import Todos from "../components/todos/Todos";

import Container from "../layout/Container";

const TodoList = () => {
  // const [todos, setTodos] = useState([
  //   { text: "Learning React!", isCompleted: false },
  //   { text: "Learning React Hooks!", isCompleted: false },
  //   { text: "Learning styling in React!", isCompleted: false }
  // ]);

  // const [todos, setTodos] = useState(
  //   JSON.parse(localStorage.getItem("todos")) || []
  // );
  const [todos, setTodos] = useStateWithLocalStorage("todos");
  const [showAdd, setShowAdd] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  const addTodo = value => {
    if (todos.length < 10) {
      const addedTodos = [...todos, { text: value, isCompleted: false }];

      setTodos(addedTodos);
    } else {
      alert("Only 10 todos is allowed!");
    }
  };

  const completeTodo = index => {
    const addedTodos = [...todos];
    addedTodos[index].isCompleted = !addedTodos[index].isCompleted;
    setTodos(addedTodos);
  };

  // const clearTodos = () => !showAdd && setTodos([]);
  const clearTodos = () => {
    if (showAdd) {
      alert("Finish add todo before clear");
      return;
    }
    setTodos([]);
  };
  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Header
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
