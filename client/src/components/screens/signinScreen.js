import React,{useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import axios from "axios"
import {useHistory,Link} from "react-router-dom"
import {signInSuccess,signInFailure} from "../../actions/userActions"
import Cookie from "js-cookie";

function SignInScreen(props) {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const userSignIn = useSelector(state => state.userSignIn);
    const {userInfo,error} = userSignIn;
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
    useEffect(() => {
      if(userInfo){
        if(userInfo.msg === 'lol') {
            console.log(userInfo);
            history.push(redirect);
        }
        else {
          history.push('/signIn');
        }
      }
    },[userInfo]);
    const submitHandler = (event) => {
             event.preventDefault();
             axios.post('http://localhost:5000/api/users/signIn',{email,password})
                          .then(userData => {
                              dispatch(signInSuccess(userData.data));
                              Cookie.set('userInfo', JSON.stringify(userData.data));
                          })
                          .catch(err =>{
                              dispatch(signInFailure(err.message))
                          });
    }

    return (
        <div className="form">
    <form onSubmit={(event) => submitHandler(event)} >
      <ul className="form-container">
        <li>
          <h2>Sign-In</h2>
        </li>
        <li>
          {error && <div>{error}</div>}
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
          <button type="submit" className="button primary">Signin</button>
        </li>
        <li>
          New to amazona?
        </li>
        <li>
          <Link to={redirect === '/' ? 'register' : 'register?redirect='+ redirect} className="button secondary text-center" >Create your amazona account</Link>
        </li>
      </ul>
    </form>
  </div>
    );
}

export default SignInScreen