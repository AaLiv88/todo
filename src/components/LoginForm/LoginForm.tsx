import React, { FC, useState } from 'react';
import { Button, Checkbox, Form, Input, Row } from "antd";
import cl from "./LoginForm.module.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";
import { PublicRoutesEnum } from "../../utils/routes/types";
import { useAction } from "../../hooks/useAction";
import { useAppSelector } from "../../hooks/reduxHooks";
import { rules } from "../../utils/inputRules";


const LoginForm: FC = () => {
    const { login } = useAction();
    const { isLoading, error } = useAppSelector(state => state.auth)
    const [username, setUsername] = useState("");
    const [password, serPassword] = useState("");

    const submit = () => {
        login({ username, password });
    }

    return (
        <div className={cl.root}>
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
                    name="username"
                    rules={[rules.required()]}
                >
                    <Input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        prefix={<UserOutlined className="site-form-item-icon"/>}
                        placeholder="Имя пользователя"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[rules.required()]}
                >
                    <Input
                        value={password}
                        onChange={e => serPassword(e.target.value)}
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Пароль"
                    />
                </Form.Item>

                <Form.Item>
                    <Row justify={"space-between"}>
                        <Button
                            loading={isLoading}
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Войти
                        </Button>
                        <span style={{ display: "flex", alignItems: "center" }}>
                            или
                            <Link style={{ marginLeft: "7px" }} to={PublicRoutesEnum.REGISTRATION}>
                                Зарегистрируйтесь
                            </Link>
                        </span>
                    </Row>
                </Form.Item>

            </Form>
        </div>
    );
};

export default LoginForm;