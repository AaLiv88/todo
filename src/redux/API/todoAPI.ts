import axios, { AxiosResponse } from "axios";
import { ITodo, anyTypeTodo } from "../../modules/Todos/todoTypes";
import { REST_API_TODOS } from "../../utils/fakeRestApiUrls";

export class TodoAPI {
    static async createTodo(todo: ITodo) {
        return axios.post(REST_API_TODOS, { ...todo, });
    }
    static async getTodosByTypeAndAuthor(author: string, type: anyTypeTodo): Promise<AxiosResponse<ITodo[]>> {
        return axios.get(`${REST_API_TODOS}?author=${author}&type=${type}`);
    }

    static async deleteTodo(id: string) {
        return axios.delete(`${REST_API_TODOS}/${id}`);
    }
    static async editTodo(todo: ITodo) {
        return axios.put(`${REST_API_TODOS}/${todo.id}`, todo);
    }
}