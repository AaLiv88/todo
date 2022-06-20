import React, { useState } from 'react';
import { Button, Form, Input } from "antd";
import cl from "../../LoginForm/LoginForm.module.scss";
import { rules } from "../../../utils/inputRules";
import { IActiveTodo } from "../../../modules/Todos/IActiveTodo";
import { generateUniqueID } from "web-vitals/dist/modules/lib/generateUniqueID";
import { TodoTypes } from "../../../modules/Todos/todoTypes";

const TodoForm = () => {
    const [todo, setTodo] = useState<IActiveTodo>({
        title: "",
        dateBeforeLoss: 0,
        createDate: 0,
        description: "",
        id: generateUniqueID(),
        type: TodoTypes.ACTIVE,
    });

    console.log(todo);

    const submit = () => {
        console.log(123);
    }

    return (
        <Form
            className={cl.form}
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={() => submit()}
        >
            {/*{error &&*/}
            {/*    <div className={cl.errorMessage}>{error}</div>*/}
            {/*}*/}

            <Form.Item
                name="title"
                rules={[rules.required()]}
            >
                <Input
                    // value={title}
                    // onChange={e => setTitle(e.target.value)}
                    placeholder="Название"
                />
            </Form.Item>

            <Form.Item
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    // value={description}
                    // onChange={e => setDescription(e.target.value)}
                    placeholder="Описание"
                />
            </Form.Item>

            <Form.Item>
                {/*<DatePicker onChange={() => setDate()} />*/}
            </Form.Item>

            <Form.Item>
                <Button
                    // loading={isLoading}
                    type="primary"
                    htmlType="submit"
                >
                    Регистрация
                </Button>
            </Form.Item>

        </Form>
    );
};

export default TodoForm;