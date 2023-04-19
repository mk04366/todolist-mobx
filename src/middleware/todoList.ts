import {TodosApi} from '@services/todolist-api';
import {todoListStore} from '@store/todoList';

export default class TodoListMiddleware {
  static async getNewTodos() {
    const res = await TodosApi.getAllTodo();

    todoListStore.setTodos(res.todos);
  }

  static async createNewTodo(todoItem: ITodoItem) {
    await TodosApi.addNewTodo(todoItem);

    todoListStore.addTodo(todoItem);
  }

  static async deleteTodoById(todoId: string) {
    await TodosApi.deleteTodo(todoId);

    todoListStore.deleteTodo();
  }
}
