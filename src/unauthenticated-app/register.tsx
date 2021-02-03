import React, {FormEvent} from "react";
import {useAuth} from "context/auth-context";
import {Form, Button, Input} from 'antd'
import {LongButton} from "./index";

export const RegisterScreen = () => {
    const {register, user} = useAuth();
    const handleSubmit = (values: {username: string, password:string}) => {
        register(values)
    }
    return (<Form onFinish={handleSubmit}>
            <Form.Item name={'username'} rules={[{required:true, message:'请输入用户名'}]}>
                <Input placeholder="username" type="text" id={"username"}/>
            </Form.Item>
            <Form.Item name= {'password'} rules={[{required:true, message:'请输入密码'}]}>
                <Input placeholder="password" type="password" id={"password"}/>
            </Form.Item>
            <Form.Item>
                <LongButton htmlType={'submit'} type={"primary"}>注册</LongButton>
            </Form.Item>
        </Form>
    )
}