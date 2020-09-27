import React,{useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import axios from "axios"
import {useHistory,Link} from "react-router-dom"
import {addToCart,removeFromCart} from "../../actions/cartActions"
import Cookie from 'js-cookie';
import store from "../../store";

function CartScreen(props) {
    const history = useHistory();
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
        const { cart: { cartItems } } = store.getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    }


    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    useEffect(() =>{
        axios.get(`http://localhost:5000/api/products/${productId}`)
                .then(data => {
                  console.log(data);
                    dispatch(addToCart(productId,qty,data.data));
                    const { cart: { cartItems } } = store.getState();
                    Cookie.set("cartItems", JSON.stringify(cartItems));
                });
    },[]);

    const checkOutHandler = () => {
        history.push('/signin?redirect=shipping')
    }
    return (
        <div className="cart">
        <div className="cart-list">
          <ul className="cart-list-container">
            <li>
              <h3>
                Shopping Cart
              </h3>
              <div>
                Price
              </div>
            </li>
            {
              cartItems.length === 0 ?
                <div>
                  Cart is empty
              </div>
                :
                cartItems.map(item =>
                  <li>
                    <div className="cart-image">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="cart-name">
                      <div>
                        <Link to={"/product/" + item.product}>
                          {item.name}
                        </Link>
    
                      </div>
                      <div>
                        <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)} >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="cart-price">
                      ${item.price}
                    </div>
                  </li>
                )
            }
          </ul>
    
        </div>
        <div className="cart-action">
          <h3>
            Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
            :
             $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
          </h3>
          <button onClick={checkOutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
            Proceed to Checkout
          </button>
    
        </div>
    
      </div>
    );
}

export default CartScreen