import * as actions from "../constants"

export const cartReducer = (state = {cartItems : [], shipping: {},payment: {}},action) => {
    switch (action.type) {
        case actions.CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(x => x.product === item.product);
            if(product){
               return {...state,cartItems: state.cartItems.map(x => x.product === product.product ? item : x)}
            }
            else {
                return {...state,cartItems: [...state.cartItems,item]}
            }

        case actions.REMOVE_FROM_CART:
            return {cartItems: state.cartItems.filter(obg => obg.product !== action.payload)}

        case actions.SAVE_SHIPPING:
            return {...state,shipping: action.payload}

        case actions.SAVE_PAYMENT:
            return {...state, payment: action.payload}

        default:
            return state;
    }
}