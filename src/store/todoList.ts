import {action, computed, makeObservable, observable} from 'mobx';

import {ITodoItem} from '@services/todolist-api';

export class TodoList {
  todos: ITodoItem[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      deleteTodo: action,
      deleteAllTodos: action,
      count: computed,
    });
  }
  addTodo(todoItem: ITodoItem) {
    console.info('* ADD HERO: ' + JSON.stringify({...todoItem}));
    this.todos = [...this.todos, todoItem];
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter(todo => todo.userId !== id);
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
