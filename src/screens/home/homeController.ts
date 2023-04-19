import {useState} from 'react';

import TodoListMiddleware from '@middleware/todoList';
import {todoListStore} from '@store/todoList';

const HomeViewController = () => {
  const [dummyText, setDummyText] = useState('Hello World');

  const {todos, deleteAllTodos, count} = todoListStore;

  const addNewTodo = async () => {
    const todoItem = {
      todo: `test ${count}`,
      completed: false,
      userId: `${count}`,
    };

    await TodoListMiddleware.createNewTodo(todoItem);
  };

  const deleteTodo = (id: string) => {
    TodoListMiddleware.deleteTodoById(id);
  };

  return {
    dummyText,
    todos,
    todoListStore,
    deleteAllTodos,
    setDummyText,
    addNewTodo,
    deleteTodo,
  };
};

export default HomeViewController;
