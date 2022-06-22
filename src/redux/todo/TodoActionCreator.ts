import { AppDispatch } from "../index";
import { addTodoToState, deleteTodoFromState, fetchTodos, fetchTodosError, fetchTodosSuccess } from "./index";
import { TodoAPI } from "../API/todoAPI";
import { AnyTodo, anyTypeTodo } from "../../modules/Todos/todoTypes";
import { ICompletedTodo } from "../../modules/Todos/ICompletedTodo";


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
    createTodo: (todo: AnyTodo) => async (dispatch: AppDispatch) => {
        try {
            await TodoAPI.createTodo(todo);
            dispatch(addTodoToState(todo));
        } catch(error) {
            dispatch(fetchTodosError((error as Error).message));
        }
    },
    deleteTodo: (todo: AnyTodo) => async (dispatch: AppDispatch) => {
        try {
            await TodoAPI.deleteTodo(todo.id);
            dispatch(deleteTodoFromState(todo.id));
        } catch(error) {
            dispatch(fetchTodosError((error as Error).message));
        }
    },
    moveTodo: (todo: AnyTodo, where: anyTypeTodo) => async (dispatch: AppDispatch) => {
        try {
            await dispatch(TodoActionCreator.deleteTodo(todo));
            await TodoAPI.createTodo({
                type: where,
                title: todo.title,
                description: todo.description,
                id: todo.id,
                author: todo.author,
                createDate: todo.createDate,
                dateOfCompleted: Date.now(),
            } as ICompletedTodo);
        } catch(error) {
            dispatch(fetchTodosError((error as Error).message));
        }
    }
}