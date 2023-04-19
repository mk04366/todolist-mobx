import {TodosApi} from '@services/todolist-api';
import {todoListStore} from '@store/todoList';

export default class TodoListMiddleware {
  static async createNewTodo(todoItem: ITodoItem) {
    // const res = await TodosApi.addNewTodo(todoItem);

    todoListStore.addTodo(todoItem);
  }

  static async deleteTodoById(todoId: string) {
    // await TodosApi.deleteTodo(todoId);

    todoListStore.deleteTodo(todoId);
  }
}
