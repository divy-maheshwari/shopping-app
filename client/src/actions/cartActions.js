import * as actions from "../constants"
export const addToCart = (productId,qty,data) => {
    return {
        type: actions.CART_ADD_ITEM,
        payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            qty
        }
    }
}

export const removeFromCart = (id) =>{
    return {
        type: actions.REMOVE_FROM_CART,
        payload: id
    }
}

export const saveShipping = (data) => {
    return {
        type: actions.SAVE_SHIPPING,
        payload: data
    }
}

export const savePayment = (data) => {
    return {
        type: actions.SAVE_PAYMENT,
        payload: data
    }
}

