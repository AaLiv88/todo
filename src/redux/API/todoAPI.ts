import axios, { AxiosResponse } from "axios";
import { AnyTodo, anyTypeTodo, TodoTypes } from "../../modules/Todos/todoTypes";
import { REST_API_TODOS } from "../../utils/fakeRestApiUrls";

export class TodoAPI {
    static async createTodo(todo: AnyTodo) {
        return axios.post(REST_API_TODOS, {
            ...todo,
        });
    }
    static async getTodosByTypeAndAuthor(author: string, type: anyTypeTodo): Promise<AxiosResponse<AnyTodo[]>> {
        return axios.get(`${REST_API_TODOS}?author=${author}&type=${type}`);
    }
    static async deleteTodo(id: string): Promise<AxiosResponse<null>> {
        return axios.delete(`${REST_API_TODOS}/${id}`);
    }
}