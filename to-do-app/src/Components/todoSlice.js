import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
    };

    export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
        state.todos.push({
            id: Date.now(),
            description: action.payload,
            isDone: false,
        });
        },
        toggleTodo(state, action) {
        const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload);
        state.todos[todoIndex].isDone = !state.todos[todoIndex].isDone;
        },
        editTodo(state, action) {
        const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
        state.todos[todoIndex].description = action.payload.description;
        },
        removeTodo(state, action) {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, editTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
