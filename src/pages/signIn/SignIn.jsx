import dev from "../../assets/coder.png";

import { Link } from "react-router-dom";


import "./SignIn.css"; 
const SignIn = () => {
  return (
    <>
      <div className="sign-In">
        <div className="container">
          <div className="row signIn-row">
            <div className="col-md-7">
                <div className="illustration">
                   <img src={dev} alt="Signup" />
                </div>
            </div>
            <div className="col-md-5 shadow p-4 sign-up-form-box ">
                 <h3> Login </h3>
                <form className="signup-form">
                    <div className="textInput my-2">
                      <label htmlFor="email"> Email </label>
                      <input 
                        type="text" 
                        placeholder="Enter email"
                        className="form-control"
                        id="email"
                      />  
                    </div>

                    <div className="textInput my-2">
                      <label htmlFor="password"> Password </label>
                      <input 
                        type="password" 
                        placeholder="Enter password"
                        className="form-control"
                        id="password"
                       />
                    </div>
                   <button className="btn btn-primary w-100 mt-3"> Sign In </button>
              </form>
              <div className="text-center mt-4">
                <p> Dont have an account? <Link to="/signUp"> Sign Up </Link> instead.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn




