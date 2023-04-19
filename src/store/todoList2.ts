import {makeAutoObservable} from 'mobx';

import {ITodoItem} from '@services/todolist-api';

export class TodoList2 {
  todos: ITodoItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  addTodo(todoItem: ITodoItem) {
    console.info('* ADD HERO: ' + JSON.stringify({...todoItem}));
    this.todos = [...this.todos, todoItem];
  }

  setTodos(todos: ITodoItem[]) {
    console.info('* SET TODOS: ' + JSON.stringify(todos));
    this.todos = todos;
  }

  deleteTodo() {
    console.info('Deleting last todo');
    this.todos = this.todos.slice(0, -1);
  }

  deleteAllTodos() {
    console.info('Deleting all todos');
    this.todos = [];
  }

  get count() {
    console.info('running computed value');
    return this.todos.length;
  }
}

export const todoListStore2 = new TodoList2();
