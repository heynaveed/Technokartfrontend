import { POST_ADMIN_LOGIN_FAILURE, POST_ADMIN_LOGIN_REQUEST, POST_ADMIN_LOGIN_SUCCESS } from "./Actiontype"

export const  AdminLoginRequest = ( ) =>{
    return {
        type :POST_ADMIN_LOGIN_REQUEST
    }
}

export const  AdminLoginSuccess = (payload) =>{
    return {
        type :POST_ADMIN_LOGIN_SUCCESS,
        payload,
    }
}

export const  AdminLoginFailure = ( ) =>{
    return {
        type :POST_ADMIN_LOGIN_FAILURE
    }
}