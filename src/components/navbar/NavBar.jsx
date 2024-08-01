
import logo from "../../assets/quizapp.png"

// react icons 
import { FaRegUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom"; 

import "./NavBar.css";

const NavBar = () => {
  return (
    <>
    <div className="header shadow">
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navBar">
              <div className="logo-part"> 
                  <Link href="/">
                    <img src={logo} alt="Quiz App" />
                    <h3> Quiz App</h3>
                  </Link>  
              </div>
              <div className="account">
                  <span> <FaRegUserCircle />  </span>
                  <Link to="/signUp"> Sign up </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
   
    

    </>
  )
}

export default NavBar



