import React,{useEffect,useState} from "react"
import axios from "axios"
import {Link,useHistory} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {productDetailsRequest,productDetailsSuccess,productDetailsFailure} from "../../actions/productActions"

function ProductScreen(props) {
    const history = useHistory();
    const [qty,setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product,loading,error} = productDetails;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
       history.push(`/cart/${props.match.params.id}/?qty=${qty}`) 
    }
    useEffect(() => {
      work(dispatch);
    },[dispatch]);
    const work = (dispatch) => {
        dispatch(productDetailsRequest(props.match.params.id));
        axios.get(`http://localhost:5000/api/products/${props.match.params.id}`)
                   .then(data => {
                       dispatch(productDetailsSuccess(data.data))
                   })
                   .catch(err => {
                       dispatch(productDetailsFailure(err.message))
                   });
    }

    return (
             <div>
        <div className="back-to-result">
          <Link to="/">Back to result</Link>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error} </div>
        ) : (
            <div className="details">
              <div className="details-image">
                <img src={product.image} alt="product"></img>
              </div>
              <div className="details-info">
                <ul>
                  <li>
                    <h4>{product.name}</h4>
                  </li>
                  <li>
                    Price: <b>${product.price}</b>
                  </li>
                  <li>
                    Description:
                    <div>{product.description}</div>
                  </li>
                </ul>
              </div>
              <div className="details-action">
                <ul>
                  <li>Price: {product.price}</li>
                  <li>
                    Status:{' '}
                    {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                  </li>
                  <li>
                    Qty:{' '}
                    <select
                      value={qty}
                      onChange={(e) => {
                        setQty(e.target.value);
                      }}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </li>
                  <li>
                    {product.countInStock > 0 && (
                      <button
                        onClick={handleAddToCart}
                        className="button primary"
                      >
                        Add to Cart
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>           
        )}
        </div>
    )
}

export default ProductScreen