import React from 'react';
import cl from "../LoginForm/LoginForm.module.scss";
import { Button, Form, Input, Row } from "antd";
import { rules } from "../../utils/inputRules";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { PublicRoutesEnum } from "../../utils/routes/types";

const RegistrationForm = () => {


    return (
        <div className={cl.root}>
            <Form
                className={cl.form}
                name="normal_login"
                initialValues={{ remember: true }}
                // onFinish={() => submit()}
            >
                {/*{error &&*/}
                {/*    <div className={cl.errorMessage}>Не правильный логин или пароль</div>*/}
                {/*}*/}

                <Form.Item
                    name="username"
                    rules={[rules.required()]}
                >
                    <Input
                        // value={username}
                        // onChange={e => setUsername(e.target.value)}
                        prefix={<UserOutlined className="site-form-item-icon"/>}
                        placeholder="Имя пользователя"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[rules.required()]}
                >
                    <Input
                        // value={password}
                        // onChange={e => serPassword(e.target.value)}
                        type="password"
                        placeholder="Пароль"
                    />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    rules={[rules.required()]}
                >
                    <Input
                        // value={password}
                        // onChange={e => serPassword(e.target.value)}
                        type="password"
                        placeholder="Повторите пароль"
                    />
                </Form.Item>

                <Form.Item>
                    <Row justify={"space-between"}>
                        <Button
                            // loading={isLoading}
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Регистрация
                        </Button>
                        <span style={{ display: "flex", alignItems: "center" }}>
                            или
                            <Link style={{ marginLeft: "7px" }} to={PublicRoutesEnum.LOGIN}>
                                Войдите
                            </Link>
                        </span>
                    </Row>
                </Form.Item>

            </Form>
        </div>
    );
};

export default RegistrationForm;