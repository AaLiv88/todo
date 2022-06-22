import { AuthActionCreator } from "./auth/AuthActionCreator";
import { TodoActionCreator } from "./todo/TodoActionCreator";

export const allActionCreators = {
    ...AuthActionCreator,
    ...TodoActionCreator,
}