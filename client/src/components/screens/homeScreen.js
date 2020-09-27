import React,{useEffect,useState} from "react"
import {useSelector,useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import {productListRequest,productListSuccess,productListFailure} from "../../actions/productActions"
import axios from "axios"

function HomeScreen() {
        const [products,setProducts] = useState([]);
        const productList =  useSelector(state =>  state.productList);
        const {loading,error} = productList;
        const dispatch = useDispatch();
        useEffect(() => {
         work(dispatch);
         axios.get('http://localhost:5000/api/products')
                     .then(data => {
                       setProducts(data.data);
                     });
        },[dispatch]);
        const work = (dispatch) => {
          dispatch(productListRequest());
          axios.get('http://localhost:5000/api/products')
                  .then(data => {
                      dispatch(productListSuccess(data.data))
                  })
                  .catch(err => {
                      dispatch(productListFailure(err.message))
                  });
        }

        return ( <div>
            {loading ? <div>LOADING...</div> :
            error ? <div>{error}</div> :
            <ul className="products">
          {products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <Link to={'/product/' + product._id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <div className="product-name">
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">
                </div>
              </div>
            </li>
          ))}
        </ul>
            }
            </div>
        )
}

export default HomeScreen