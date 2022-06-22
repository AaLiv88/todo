import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnyTodo } from "../../modules/Todos/todoTypes";

interface TodoState {
    todos: AnyTodo[];
    isLoading: boolean;
    error: string;
}

const initialState: TodoState = {
    todos: [],
    isLoading: false,
    error: "",
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        fetchTodos(state: TodoState) {
            state.isLoading = true;
            state.error = "";
            state.todos = [];
        },
        fetchTodosSuccess(state: TodoState, action: PayloadAction<AnyTodo[]>) {
            state.isLoading = false;
            state.todos = action.payload;
        },
        fetchTodosError(state: TodoState, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        setIsLoading(state: TodoState, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        addTodoToState(state: TodoState, action: PayloadAction<AnyTodo>) {
            state.todos.push(action.payload);
        },
        deleteTodoFromState(state: TodoState, action: PayloadAction<string>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    },
})

export const { fetchTodos, fetchTodosSuccess, fetchTodosError, setIsLoading, addTodoToState, deleteTodoFromState } = todoSlice.actions;
export default todoSlice.reducer;