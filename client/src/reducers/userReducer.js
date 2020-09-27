import * as actions from "../constants"

export const signInReducer = (state = {},action) => {
    switch (action.type) {
        case actions.SIGNIN_SUCCESS:
            return {...state,userInfo: action.payload}

        case actions.SIGNIN_FAILURE:
            return {...state,error: action.payload}
        
        case actions.USER_LOGOUT:
             return {};    
        default:
            return state;
    }
}


export const registerReducer = (state= {}, action) => {
    switch (action.type) {
        case actions.REGISTER_SUCCESS:
            return {...state,userInfo: action.payload}
            
        case actions.REGISTER_FAILURE:
            return {...state,error: action.payload}
        default:
            return state;
    }
}