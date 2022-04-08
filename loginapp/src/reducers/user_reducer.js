import {
    LOGIN_USER, SIGNUP_USER,GOOGLE_USER
} from '../actions/types';


export default function (state={}, action) {  //state
    switch (action.type) {  //아까 보낸거 
        case LOGIN_USER:
            return{...state,loginSucces: action.payload} 
             break;
        case SIGNUP_USER:
            return{...state, signup: action.payload}
            break;
        case GOOGLE_USER:
            return{...state, googleLogin:action.payload}
            break;
        default:
            return state;
    }
}