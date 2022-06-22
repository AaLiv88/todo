import { AppDispatch } from "../index";
import { addTodoToState, deleteTodoFromState, fetchTodos, fetchTodosError, fetchTodosSuccess } from "./index";
import { TodoAPI } from "../API/todoAPI";
import { ITodo, anyTypeTodo } from "../../modules/Todos/todoTypes";


export const TodoActionCreator = {
    getTodos: (author: string, type: anyTypeTodo) => async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchTodos());
            const response = await TodoAPI.getTodosByTypeAndAuthor(author, type);
            dispatch(fetchTodosSuccess(response.data));
        } catch(error) {
            dispatch(fetchTodosError((error as Error).message))
        }
    },
    createTodo: (todo: ITodo) => async (dispatch: AppDispatch) => {
        try {
            await TodoAPI.createTodo(todo);
            dispatch(addTodoToState(todo));
        } catch(error) {
            dispatch(fetchTodosError((error as Error).message));
        }
    },
    deleteTodo: (todo: ITodo) => async (dispatch: AppDispatch) => {
        try {
            await TodoAPI.deleteTodo(todo.id);
            dispatch(deleteTodoFromState(todo.id));
        } catch(error) {
            dispatch(fetchTodosError((error as Error).message));
        }
    },
    moveTodo: (todo: ITodo, deleteFromStateFlag: boolean) => async (dispatch: AppDispatch) => {
        try {
            await TodoAPI.editTodo(todo);
            if (deleteFromStateFlag) {
                dispatch(deleteTodoFromState(todo.id));
            } else {
                dispatch(deleteTodoFromState(todo.id));
                dispatch(addTodoToState(todo));
            }
        } catch(error) {
            dispatch(fetchTodosError((error as Error).message));
        }
    }
}