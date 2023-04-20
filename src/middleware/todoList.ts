import {TodosApi} from '@services/todolist-api';
import {todoListStore} from '@store/todoList';
import {todoListStore2} from '@store/todoList2';

export default class TodoListMiddleware {
  static async getNewTodos() {
    const res = await TodosApi.getAllTodo();

    todoListStore.setTodos(res.todos);
  }

  static async createNewTodo(todoItem: ITodoItem) {
    // await TodosApi.addNewTodo(todoItem);

    todoListStore.addTodo(todoItem);
    return 'DONE';
  }

  static async deleteTodoById(todoId: string) {
    // await TodosApi.deleteTodo(todoId);

    todoListStore.deleteTodo();
  }

  static async getNewTodos2() {
    const res = await TodosApi.getAllTodo();

    todoListStore2.setTodos(res.todos);
  }

  static async createNewTodo2(todoItem: ITodoItem) {
    // await TodosApi.addNewTodo(todoItem);

    todoListStore2.addTodo(todoItem);
  }

  static async deleteTodoById2(todoId: string) {
    // await TodosApi.deleteTodo(todoId);

    todoListStore2.deleteTodo();
  }
}
