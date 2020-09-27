import * as actions from "../constants"

export const signInSuccess = (userData) => {
    return{
        type: actions.SIGNIN_SUCCESS,
        payload: userData
    } 
}

export const signInFailure = (error) => {
    return {
        type: actions.SIGNIN_FAILURE,
        payload: error
    }
}

export const registerSuccess = (userData) => {
    return {
        type: actions.REGISTER_SUCCESS,
        payload: userData
    }
}

export const registerFailure = (error) => {
    return {
        type: actions.REGISTER_FAILURE,
        payload: error
    }
} 

export const userLogout = () => {
    return {
        type: actions.USER_LOGOUT
    }
}