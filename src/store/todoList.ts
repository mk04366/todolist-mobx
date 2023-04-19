import {action, computed, makeObservable, observable} from 'mobx';

import {ITodoItem} from '@services/todolist-api';

export class TodoList {
  todos: ITodoItem[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      setTodos: action,
      deleteTodo: action,
      deleteAllTodos: action,
      count: computed,
    });
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
    return this.todos.length;
  }
}

export const todoListStore = new TodoList();
