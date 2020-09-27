import {createStore,combineReducers,applyMiddleware} from "redux";
import {productListReducer,productDetailsReducer,productSaveReducer,productDeleteReducer} from "./reducers/productReducer";
import {cartReducer} from "./reducers/cartReducer";
import {signInReducer,registerReducer} from "./reducers/userReducer";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import Cookie from "js-cookie"; 

const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
    cart: { cartItems, shipping: {}, payment: {} },
    userSignIn: { userInfo }};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignIn: signInReducer,
    userRegister: registerReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
});
const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(
    applyMiddleware(...middleware)
    ));

export default store;