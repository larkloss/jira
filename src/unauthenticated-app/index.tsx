import React, {useState} from "react"
import {RegisterScreen} from "unauthenticated-app/register";
import {LoginScreen} from "unauthenticated-app/login";
import {Card, Divider, Button} from 'antd'
import styled from '@emotion/styled'
import logo from 'assets/logo.svg'
import left from 'assets/left.svg'
import right from 'assets/right.svg'

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return <div style={{display:'flex', justifyContent:'center'}}>
        <Container>
            <Header/>
            <Background/>
        <ShadowCard>
            <Title>
                {isRegister ? '请注册':'请登录'}
            </Title>
        {
            isRegister ? <RegisterScreen/> : <LoginScreen/>
        }
        <Divider/>
            <a onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? '登录' : '没有帐户，这里注册'}</a>
        </ShadowCard>
        </Container>
    </div>
}

export const LongButton = styled(Button)`
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;

const Background = styled.div `
    position:absolute;;
  width:100%;
  height:100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right, bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem), calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`

const Container = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  `

const ShadowCard = styled(Card)`
  width:40rem;
  min-height:56rem;
  padding:3.2rem 4rem;
  box-sizing:border-box;
  box-shadow: raba(0,0,0,0.1) 0 0 10px;
  text-align: center;
`

const Header = styled.header `
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`