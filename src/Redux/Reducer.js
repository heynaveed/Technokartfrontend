import * as types from "./Actiontype";

const InitialState={
    OTP:"",
    Partnername:"",
    Partners:[],
    isLoading:false,
    isError:false
}

export default function Reducer(state=InitialState,action){
    const{type,payload}=action;
    switch(type){
        case types.POST_ADMIN_LOGIN_REQUEST :{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case types.POST_ADMIN_LOGIN_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                isError:false
            }
        }
        case types.POST_ADMIN_LOGIN_FAILURE :{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        default : 
        return  state
    }
}