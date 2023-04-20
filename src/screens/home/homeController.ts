import {useQuery} from 'react-query';

import TodoListMiddleware from '@middleware/todoList';
import {todoListStore} from '@store/todoList';
import {todoListStore2} from '@store/todoList2';

const HomeViewController = () => {
  const {isLoading, error} = useQuery(
    'getTodos',
    async () => {
      console.log('Running reactQuery Function');
      await TodoListMiddleware.getNewTodos();
    },
    {staleTime: 0, cacheTime: 0, retry: false},
  );

  const addNewTodo = async () => {
    const {count} = todoListStore;
    const todoItem = {
      todo: `test ${count}`,
      completed: false,
      userId: `${count}`,
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
      todo: `test ${count}`,
      completed: false,
      userId: `${count}`,
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
    isLoading,
    error,
    addNewTodo,
    setNewTodos,
    deleteTodo,
    setNewTodos2,
    addNewTodo2,
    deleteTodo2,
  };
};

export default HomeViewController;
