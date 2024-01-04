import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => { //functional comp - a js function which return jsx element.
     const [btnName , setBtnName] = useState("Login");

    return (
    

      <div className="header">
        <div className="logo">
            <img className="logo1" src="https://iili.io/JRVX5qF.md.png" />
          </div>
         <div className="nav-items">
          <ul>
              <li><Link className="link" to="/">
                Home
                </Link>
              </li>
              <li >
                <Link className="link" to="/about">
                About Us
                </Link>
              </li>
              <li> <Link className="link" to="/contact">
                Contact Us
                </Link>
              </li>
              <li> <Link className="link" to="/cart">
               Cart
               </Link>
              </li>
              <button className="btn-name" onClick={() => {
                btnName === "Login" ? 
                setBtnName("Logout") :
                setBtnName("Login");
              }}>{btnName}</button>
          </ul>
        </div> 
        
      </div>
    )
  };
  export default Header;