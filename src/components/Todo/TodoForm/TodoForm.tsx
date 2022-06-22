import React, { FC } from 'react';
import { Button, DatePicker, DatePickerProps, Form, Input } from "antd";
import cl from "../../LoginForm/LoginForm.module.scss";
import { rules } from "../../../utils/inputRules";
import { ITodo } from "../../../modules/Todos/todoTypes";
import { useAppSelector } from "../../../hooks/reduxHooks";

interface TodoFormProps {
    submit: (todo: ITodo) => void;
    setTodo: (todo: ITodo) => void;
    todo: ITodo,
    submitText: string;
}

const TodoForm: FC<TodoFormProps> = ({ submit, todo, setTodo, submitText }) => {
    const { isLoading, error } = useAppSelector(state => state.todo);

    const onChangeDate: DatePickerProps['onChange'] = (date) => {
        if (date) {
            setTodo({ ...todo, dateBeforeLoss: new Date(date.format()).getTime() });
        }
    };

    return (
        <Form
            className={cl.form}
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={() => submit(todo)}
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

            <Form.Item
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker onChange={onChangeDate}/>
            </Form.Item>

            <Form.Item>
                <Button
                    loading={isLoading}
                    type="primary"
                    htmlType="submit"
                >
                    {submitText}
                </Button>
            </Form.Item>

        </Form>
    );
};

export default TodoForm;