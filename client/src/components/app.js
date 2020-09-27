import React from "react"
import Navbar  from "./navbar"
import HomeScreen from './screens/homeScreen';
import ProductScreen from './screens/productScreen';
import CartScreen from './screens/cartScreen';
import SignInScreen from './screens/signinScreen';
import RegisterScreen from './screens/registerSceen';
import ProductsScreen from './screens/productsScreen';
import ShippingScreen from './screens/shippingScreen';
import PaymentScreen from './screens/paymentScreen';
import PlaceOrderScreen from './screens/placeOrderScreen';
import ProfileScreen from './screens/profileScreen';
import Pants from './screens/category/pants';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Shirts from "./screens/category/shirts";
function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={HomeScreen} />
                <Route path='/product/:id' component={ProductScreen} />
                <Route path='/cart/:id' component={CartScreen} />
                <Route path='/signIn' component={SignInScreen} />
                <Route path='/register' component={RegisterScreen} />
                <Route path='/products' component={ProductsScreen} />
                <Route path='/shipping' component={ShippingScreen} />
                <Route path='/payment' component={PaymentScreen} />
                <Route path='/placeOrder' component={PlaceOrderScreen} />
                <Route path='/profile' component={ProfileScreen} />
                <Route path='/category/shirts' component={Shirts} />
                <Route path='/category/pants' component={Pants} />
            </Switch>
            </Router>
    );
}

export default App