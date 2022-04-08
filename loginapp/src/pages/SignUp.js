import React,{useState} from 'react'
import styled from 'styled-components'
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { signupUser } from '../actions/user_action'
import { Link, useNavigate } from 'react-router-dom';

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
const OkButton = styled.button`
    margin-top: 10%;
    background-color: #fff;
    text-decoration: none;
`
function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [Passwordcheck, setPasswordcheck] = useState("")
    const onIDHandler = (event) => {
        setEmail(event.currentTarget.value) //글씨 칠 수 있게 
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onPasswordcheckHandler = (event) => {
        setPasswordcheck(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault(); //리프레쉬 방지 .
        if (Password !== Passwordcheck) {
            return alert('비밀번호가 같지 않습니다.')
        }
        let body = {
            email: Email,
            password: Password,
            displayName: Name
        }
        dispatch(signupUser(body))
            //Axios.post('/api/user.login') //Axios 를 사용하여 post메소드 이용하여 서버에 보내기
            .then(response => {
                if (response.payload.success) {
                    navigate("/")
                } else {
                    alert("Faild to sign up")
                }
            })
    }
    return (
        <Layout>
            <Form onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onIDHandler} />

                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label>Passwordcheck</label>
                <input type="password" value={Passwordcheck} onChange={onPasswordcheckHandler} />
                <OkButton>
                    Sign UP!
                </OkButton>
                <OkButton>
                    <Link to='../'>
                    Login화면으로~

                    </Link>
                </OkButton>
            </Form>

        <div>

        </div>
        </Layout>

    )
}
export default SignUp