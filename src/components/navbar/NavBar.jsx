
import logo from "../../assets/quizapp.png"

// react icons 
import { FaRegUserCircle } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom"; 
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";

import "./NavBar.css";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
   
  const navigate = useNavigate(); 

   // sign out user 
   const handleUserSignOut = async() => {
      setIsLoggedIn(false); 
      await signOut(auth); 
      navigate("/")
   }; 


  return (
    <>
    <div className="header shadow">
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navBar">
              <div className="logo-part"> 
                  <Link to="/">
                    <img src={logo} alt="Quiz App" />
                    <h3> Quiz App</h3>
                  </Link>  
              </div>
              <div className="account">  
             
                {
                  isLoggedIn ?  
                  (  <div className="login-account">
                         <button onClick={handleUserSignOut}> Logout </button>
                      </div> 
                  ) :
                  (
                    <div>
                         <span> <FaRegUserCircle />  </span>
                         <Link to="/signUp"> Sign Up </Link> 
                    </div> 
                  )
                }
                       
                   
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



