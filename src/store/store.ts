// Set up store
import { configureStore } from '@reduxjs/toolkit'
import TodosReducer from './reducers/todoSlice'

const store =  configureStore({
  reducer: {todosReducer: TodosReducer}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;