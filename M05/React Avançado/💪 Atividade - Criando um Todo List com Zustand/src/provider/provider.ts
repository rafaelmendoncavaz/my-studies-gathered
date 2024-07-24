import { create } from "zustand";

export interface Todos {
  id: number,
  task: string,
  priority: string,
  description: string
}

interface TodosStore {
  todoList: Todos[],
  addTodo: (newTodo: Todos) => void,
  deleteTodo: (todoId: number) => void
}

export const useTodoStore = create<TodosStore>((set) => ({
  todoList: [],
  addTodo: (newTodo) => {
    set(({ todoList }) => {
      const newTodoList = [newTodo, ...todoList]
      return { todoList: newTodoList }
    });
  },
  deleteTodo: (todoId) => {
    set(({ todoList }) => {
      const newTodoList = todoList.filter(todo => todo.id !== todoId)
      return { todoList: newTodoList }
    });
  }
}))