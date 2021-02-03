import React, {FormEvent} from "react";
import {useAuth} from "context/auth-context";
import {Form, Button, Input} from 'antd'

export const LoginScreen = () => {
    const {login, user} = useAuth();
    const handleSubmit = (values: {username: string, password:string}) => {
        login(values)
    }
    return (<Form onFinish={handleSubmit}>
            <Form.Item name={'username'} rules={[{required:true, message:'请输入用户名'}]}>
                <Input placeholder="username" type="text" id={"username"}/>
            </Form.Item>
            <Form.Item name= {'password'} rules={[{required:true, message:'请输入密码'}]}>
                <Input placeholder="password" type="password" id={"password"}/>
            </Form.Item>
            <Form.Item>
                <Button htmlType={'submit'} type={"primary"}>登录</Button>
            </Form.Item>
        </Form>
    )
}