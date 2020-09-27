import * as actions from "../constants"



export const productListReducer = (state = {products: []},action) => {
    switch (action.type) {
        case actions.PRODUCT_LIST_REQUEST:
            return {...state,loading: true,products: []};
        case actions.PRODUCT_LIST_SUCCESS:
            return {...state,loading: false,products: action.payload};
        case actions.PRODUCT_LIST_FAILURE:
            return {...state,loading: false,error: action.payload};
        default:
            return state;
    }
}

export const productDetailsReducer = (state = {product: {}},action) => {
    switch (action.type) {
        case actions.PRODUCT_DETAILS_REQUEST:
            return {...state,loading: true};
        case actions.PRODUCT_DETAILS_SUCCESS:
            return {...state,loading: false,product: action.payload};
        case actions.PRODUCT_DETAILS_FAILURE:
            return {...state,loading: false,error: action.payload};
        default:
            return state;
    }
}

export const productSaveReducer = (state = {product: {}},action) => {
    switch (action.type) {
        case actions.PRODUCT_SAVE_SUCCESS:
            return {...state,loading: false,success: true,product: action.payload};
        case actions.PRODUCT_SAVE_FAILURE:
            return {...state,loading: false,error: action.payload};
        default:
            return state;
    }
}

export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case actions.PRODUCT_DELETE_SUCCESS:
            return {...state,success: true,deleteProduct: action.payload}; 
        case actions.PRODUCT_DELETE_FAILURE:
            return {...state,error: action.payload};    
        default:
            return state;
    }
}