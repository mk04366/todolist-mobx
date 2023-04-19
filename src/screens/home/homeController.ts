import {useState} from 'react';

import TodoListMiddleware from '@middleware/todoList';
import {todoListStore} from '@store/todoList';
import {todoListStore2} from '@store/todoList2';

const HomeViewController = () => {
  const addNewTodo = async () => {
    const {count} = todoListStore;
    const todoItem = {
      todo: `test ${'22'}`,
      completed: false,
      userId: `${'22'}`,
    };

    await TodoListMiddleware.createNewTodo(todoItem);
  };

  const deleteTodo = () => {
    const {count} = todoListStore;
    TodoListMiddleware.deleteTodoById(`${count}`);
  };

  const setNewTodos = async () => {
    await TodoListMiddleware.getNewTodos();
  };

  const addNewTodo2 = async () => {
    const {count} = todoListStore2;
    const todoItem = {
      todo: `test ${'22'}`,
      completed: false,
      userId: `${'22'}`,
    };

    await TodoListMiddleware.createNewTodo2(todoItem);
  };

  const deleteTodo2 = () => {
    const {count} = todoListStore2;
    TodoListMiddleware.deleteTodoById2(`${count}`);
  };

  const setNewTodos2 = async () => {
    await TodoListMiddleware.getNewTodos2();
  };

  return {
    todoListStore,
    todoListStore2,
    setNewTodos,
    addNewTodo,
    deleteTodo,
    setNewTodos2,
    addNewTodo2,
    deleteTodo2,
  };
};

export default HomeViewController;
