// Set up To-do state
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// 1.
interface Todo {
    // กำหนดค่าที่ควรมีของ Todo
    id: number,
    todoName: string,
    completed: boolean,
    status: 'ToDo'|'In process'|'Done',
    createAt: string
}

// 2.
interface TodoState {
    todos: Todo[]; 
}

// 3.
// ค่าเริ่มต้น (default state)
const initialState:TodoState = {
    todos: []
};

// 4.
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    // reducer functions ใช้เปลี่ยน state
    reducers:{
        // เพิ่ม
        //PayloadAction = บอกว่า payload ของ action นี้มีอะไรบ้าง
       addTodo: (state,action: PayloadAction<{todoName: string; status: 'ToDo'|'In process'|'Done'}>
           ) => {
            const newTodo: Todo = {
                id: Date.now(),
                todoName: action.payload.todoName,
                completed: false,
                status: action.payload.status,
                createAt: new Date().toDateString()
            }
            state.todos.unshift(newTodo);
       },
        // ลบ
       removeTodo: (state,action: PayloadAction<{id: number}>) => {
        state.todos = state.todos.filter((todo)=> todo.id !== action.payload.id);
       },
        // แก้ไข
       editTodo: (state,action: PayloadAction<{id: number; todoName: string;}>
       ) => {
      const todoEdit = state.todos.find((todo)=> todo.id === action.payload.id); 
      if(todoEdit){
        todoEdit.todoName = action.payload.todoName;
      }
    }
    }
}
);
export const {addTodo, removeTodo,editTodo} = todoSlice.actions;
export default todoSlice.reducer;