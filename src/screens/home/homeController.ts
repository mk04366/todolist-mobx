import {useState} from 'react';

import TodoListMiddleware from '@middleware/todoList';
import {todoListStore} from '@store/todoList';

const HomeViewController = () => {
  const [dummyText, setDummyText] = useState('Hello World');
  const [count, setCount] = useState(0);

  const addNewTodo = async () => {
    const todoItem = {
      todo: `test ${count + 1}`,
      completed: false,
      userId: `${count + 1}`,
    };

    setCount(count + 1);
    await TodoListMiddleware.createNewTodo(todoItem);
  };

  const deleteTodo = () => {
    TodoListMiddleware.deleteTodoById(`${count}`);
  };

  const setNewTodos = async () => {
    await TodoListMiddleware.getNewTodos();
  };

  return {
    dummyText,
    todoListStore,
    setDummyText,
    setNewTodos,
    addNewTodo,
    deleteTodo,
  };
};

export default HomeViewController;
