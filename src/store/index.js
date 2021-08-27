import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './todo';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
