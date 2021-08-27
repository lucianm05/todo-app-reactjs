import { createSlice } from '@reduxjs/toolkit';

const initialTodoState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialTodoState,
  reducers: {
    add(state, action) {
      state.todos.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    delete(state, action) {
      state.todos = state.todos.filter((todo) => +todo.id !== +action.payload.id);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    changeStatus(state, action) {
      const targetTodo = state.todos.find((todo) => todo.id === action.payload.id);
      targetTodo.status = action.payload.status;
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice.reducer;
