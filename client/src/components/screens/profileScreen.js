import React from "react"
import Cookie from "js-cookie"
import { useDispatch } from "react-redux";
import {userLogout} from "../../actions/userActions"
import {useHistory} from 'react-router-dom'

function ProfileScreen() {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogout = () => {
        Cookie.remove('userInfo');
        dispatch(userLogout());
        history.push('/signIn');

    }



    return (
        <div className="form">
      <div className="form-container">
        <button onClick={handleLogout} className="button primary">LOGOUT</button>
        </div>
        </div>
    );
}

export default ProfileScreen