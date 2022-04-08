import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/user_action';
import SignUp from '../pages/SignUp'
import {Link, Route, Routes, useNavigate } from 'react-router-dom'

const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`
const Form = styled.form`
    display: flex;
    flex-direction:column
`
const Button = styled.button`
    margin-top: 10%;
    background-color: #fff;
    
`
function Login() {
    //props: 로그인 후 처음화면으로 돌아가게 하기위해 필요
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value) //글씨 칠 수 있게 
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault(); //리프레쉬 방지 .:새로고침 x
        console.log('Email', Email)
        console.log('Password', Password)
        let body = {
            email: Email,
            password: Password
        }
        dispatch(loginUser(body))
            //Axios.post('/api/user.login') //Axios 를 사용하여 post메소드 이용하여 서버에 보내기
            .then(response => {
                // console.log(response.payload.Message == "success")
                if (response.payload.Message == "success") {
                    navigate('/signup')
                } else {
                    alert('Error')
                }
            })
    }
    return (

        <Layout>
            <Form onSubmit={onSubmitHandler}>
                <label>ID</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <Button>로그인</Button>
                <Button><Link to='/signup'>회원가입</Link></Button>

            </Form>
          
        </Layout>

    )
}

export default Login
