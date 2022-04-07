import axios from 'axios';
import {
    LOGIN_USER,
    SIGNUP_USER
} from './types';
export function loginUser(dataToSubmit){
    const request = axios.post('/api/auth/login', dataToSubmit) //서버에 요청
    .then(response => response.data)   //res로 받은 것을 rquest에 저장
    console.log(request)
    return {
        //동작 후에 reducer로
        type: LOGIN_USER,
        payload: request

    }    
}

export function signupUser(dataToSubmit){
    const request = axios.post('/api/auth/signup', dataToSubmit)
    .then(response => response.data)
    return {
        type: SIGNUP_USER,
        payload: request

    }
}