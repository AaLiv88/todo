import React, { useState } from 'react';
import cl from "../LoginForm/LoginForm.module.scss";
import { Button, Form, Input, Row } from "antd";
import { rules } from "../../utils/inputRules";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { PublicRoutesEnum } from "../../utils/routes/types";
import { UserAPI } from "../../redux/API/userAPI";
import { useAction } from "../../hooks/useAction";
import { useAppSelector } from "../../hooks/reduxHooks";
import { generateUniqueID } from "web-vitals/dist/modules/lib/generateUniqueID";

const RegistrationForm = () => {
    const { registration, setError } = useAction();
    const { error, isLoading } = useAppSelector(state => state.auth)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submit = async () => {
        const { data } = await UserAPI.getUsersByUsername(username);
        if (data.length === 0) {
            registration({
                username,
                password,
                id: generateUniqueID(),
            });
        } else {
            setError("Пользователь с таким именем уже существует")
        }
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
                        onChange={e => {
                            setError("")
                            setUsername(e.target.value);
                        }}
                        prefix={<UserOutlined className="site-form-item-icon"/>}
                        placeholder="Имя пользователя"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[rules.required(), rules.equalInputs("Пароли не совпадают", confirmPassword)]}
                >
                    <Input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="Пароль"
                    />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    rules={[rules.required(), rules.equalInputs("Пароли не совпадают", password)]}
                >
                    <Input
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        type="password"
                        placeholder="Повторите пароль"
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