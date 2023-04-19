import {useState} from 'react';

import TodoListMiddleware from '@middleware/todoList';
import {todoListStore} from '@store/todoList';

const HomeViewController = () => {
  const [dummyText, setDummyText] = useState('Hello World');
  const [count, setCount] = useState(0);

  const {todos, deleteAllTodos} = todoListStore;

  const addNewTodo = async () => {
    setCount(count + 1);
    const todoItem = {
      todo: `test ${count + 1}`,
      completed: false,
      userId: `${count + 1}`,
    };

    await TodoListMiddleware.createNewTodo(todoItem);
  };

  const deleteTodo = () => {
    if (count) {
      TodoListMiddleware.deleteTodoById(`${count}`);
      setCount(count - 1);
    }
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
