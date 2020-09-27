import React,{useState} from "react"
import { useDispatch } from "react-redux";
import {savePayment} from "../../actions/cartActions"
import CheckoutSteps from "../checkOutSteps"
import {useHistory} from "react-router-dom"

function PaymentScreen() {
    const [paymentMethod,setPaymentMethod] = useState('');
    const history = useHistory();


    const dispatch = useDispatch();
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(savePayment({paymentMethod}));
        history.push('/placeOrder');
    }
    return (
        <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        <div className="form">
          <form onSubmit={(event) => submitHandler(event)}>
            <ul className="form-container">
              <li>
                <h2>Payment</h2>
              </li>
  
              <li>
                <div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="paymentMethod"
                    value="paypal"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></input>
                  <label htmlFor="paymentMethod">Paypal</label>
                </div>
              </li>
  
              <li>
                <button type="submit" className="button primary">
                  Continue
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
}

export default PaymentScreen