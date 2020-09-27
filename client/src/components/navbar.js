import React from "react"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

function Navbar() {
  const userSignIn = useSelector(state => state.userSignIn);
  const {userInfo} = userSignIn;
    const openMenu = () =>  {
        document.querySelector(".sidebar").classList.add("open");
      }

      const closeMenu= () => {
        document.querySelector(".sidebar").classList.remove("open")
      }
    return (
        <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={() => openMenu()}>
              &#9776;
            </button>
            <Link to="/"> amazona </Link>
          </div>
          <div className="header-links">
            <a href="/cart">Cart</a>
    
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
    
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={() => closeMenu()}>x</button>
          <ul>
            <li>
              <Link to="/category/pants" >Pants</Link>
            </li>
    
            <li>
              <Link to='/category/shirts' >Shirts</Link>
            </li>
    
          </ul>
        </aside>
  </div>
    );
}

export default Navbar