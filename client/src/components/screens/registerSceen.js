import React,{useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import axios from "axios"
import {useHistory,Link} from "react-router-dom"
import {registerSuccess,registerFailure} from "../../actions/userActions"
import Cookie from "js-cookie";

function RegisterScreen(props) {
    const history = useHistory();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [rePassword,setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const {userInfo,error} = userRegister;
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    useEffect(() => {
        if(userInfo){
            console.log(userInfo);
            history.push(redirect);

        }
    });

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/users/register',{name,email,password,rePassword})
                                .then(data => {
                                    dispatch(registerSuccess(data.data));
                                    Cookie.set('userInfo', JSON.stringify(data.data));
                                })
                                .catch(err => {
                                    dispatch(registerFailure(err.message));
                                });
    }


    return (
        <div className="form">
    <form onSubmit={(event) => submitHandler(event)} >
      <ul className="form-container">
        <li>
          <h2>Create Account</h2>
        </li>
        <li>
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="name">
            Name
          </label>
          <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="rePassword">Re-Enter Password</label>
          <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Register</button>
        </li>
        <li>
          Already have an account?
          <Link to={redirect === '/' ? 'signIn' : 'signIn?redirect='+ redirect} className="button secondary text-center" >SignIn your amazona account</Link>

        </li>

      </ul>
    </form>
  </div>
    );
}

export default RegisterScreen