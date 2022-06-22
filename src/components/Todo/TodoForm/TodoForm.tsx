import React, { FC, useState } from 'react';
import { Button, Form, Input } from "antd";
import cl from "../../LoginForm/LoginForm.module.scss";
import { rules } from "../../../utils/inputRules";
import { IActiveTodo } from "../../../modules/Todos/IActiveTodo";
import { generateUniqueID } from "web-vitals/dist/modules/lib/generateUniqueID";
import { TodoTypes } from "../../../modules/Todos/todoTypes";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { useAction } from "../../../hooks/useAction";


const TodoForm: FC = () => {
    const { createTodo, getTodos } = useAction();
    const { isLoading, error } = useAppSelector(state => state.todo)
    const { user } = useAppSelector(state => state.auth)
    const [todo, setTodo] = useState<IActiveTodo>({
        title: "123",
        dateBeforeLoss: 0,
        description: "123",

        createDate: Date.now(),
        id: "",
        type: TodoTypes.ACTIVE,
        author: "",
    });

    const submit = async () => {
        if (user) {
            createTodo({
                ...todo,
                author: user.id,
                id: generateUniqueID(),
            });
        }
    }

    return (
        <Form
            className={cl.form}
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={() => submit()}
        >
            {error &&
                <div className={cl.errorMessage}>{error}</div>
            }

            <Form.Item
                name="title"
                rules={[rules.required()]}
            >
                <Input
                    value={todo.title}
                    onChange={e => setTodo({ ...todo, title: e.target.value })}
                    placeholder="Название"
                />
            </Form.Item>

            <Form.Item
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    value={todo.description}
                    onChange={e => setTodo({ ...todo, description: e.target.value })}
                    placeholder="Описание"
                />
            </Form.Item>

            <Form.Item>
                {/*<DatePicker onChange={() => setDate()} />*/}
            </Form.Item>

            <Form.Item>
                <Button
                    loading={isLoading}
                    type="primary"
                    htmlType="submit"
                >
                    Создать
                </Button>
            </Form.Item>

        </Form>
    );
};

export default TodoForm;