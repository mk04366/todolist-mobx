import axios from 'axios';

export interface ITodoItem {
  id?: string;
  todo: string;
  completed: boolean;
  userId: string;
}

export const TodosApi = {
  getAllTodo: async () => {
    const currTime = new Date();
    try {
      const response = await axios.get(`https://dummyjson.com/todos`);
      console.log('API Time: ', new Date() - currTime, 'ms');
      return response?.data;
    } catch (err) {
      console.error('TodosAPI:error:', err);
      throw err;
    }
  },

  getAllTodoForUser: async (userId: string) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/todos/user/${userId}`,
      );
      return response?.data;
    } catch (err) {
      console.error('TodosAPI:error:', err);
      throw err;
    }
  },

  getTodoById: async (todoId: string) => {
    try {
      const response = await axios.get(`https://dummyjson.com/todos/${todoId}`);
      return response?.data;
    } catch (err) {
      console.error('TodosAPI:error:', err);
      throw err;
    }
  },

  addNewTodo: async (todoItem: ITodoItem) => {
    try {
      const response = await axios.post(
        `https://dummyjson.com/todos/add`,
        todoItem,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      return response?.data;
    } catch (err) {
      console.error('TodosAPI:error:', err);
      throw err;
    }
  },

  deleteTodo: async (todoId: string) => {
    try {
      const response = await axios.delete(
        `https://dummyjson.com/todos/${todoId}`,
      );
      return response?.data;
    } catch (err) {
      console.error('TodosAPI:error:', err);
      throw err;
    }
  },
};
