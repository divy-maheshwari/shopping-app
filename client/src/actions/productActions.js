import * as actions from "../constants"
export const productListRequest = () => {
    return {
        type: actions.PRODUCT_LIST_REQUEST
    }
}

export const productListSuccess = (data) => {
    return {
        type: actions.PRODUCT_LIST_SUCCESS,
        payload: data
    }
}

export const productListFailure = (error) => {
    return {
        type: actions.PRODUCT_LIST_FAILURE,
        payload: error
    }
}

export const productDetailsRequest = (id) => {
    return {
        type: actions.PRODUCT_DETAILS_REQUEST,
        payload: id
    }
}

export const productDetailsSuccess = (data) => {
    return {
        type: actions.PRODUCT_DETAILS_SUCCESS,
        payload: data
    }
}

export const productDetailsFailure = (error) => {
    return {
        type: actions.PRODUCT_DETAILS_FAILURE,
        payload: error
    }
}


export const productSaveSuccess = (product) => {
    return {
        type: actions.PRODUCT_SAVE_SUCCESS,
        payload: product
    }
}

export const  productSaveFailure = (error) => {
    return{
        type: actions.PRODUCT_SAVE_FAILURE,
        payload: error
    }
}

export const productDeleteSuccess = (data) => {
    return {
        type: actions.PRODUCT_DELETE_SUCCESS,
        payload: data
    }
}
export const productDeleteFailure = (error) => {
    return {
        type: actions.PRODUCT_DELETE_FAILURE,
        payload: error
    }
}