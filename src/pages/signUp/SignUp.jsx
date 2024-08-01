
import { Link } from "react-router-dom";
import dev from "../../assets/dev.webp"


import "./SignUp.css"; 
const SignUp = () => {
  return (
    <>
      <div className="sign-up">
        <div className="container">
          <div className="row signup-row">
            <div className="col-md-7">
                <div className="illustration">
                   <img src={dev} alt="Signup" />
                </div>
            </div>
            <div className="col-md-5 shadow p-4 sign-up-form-box ">
                 <h3>Create an account</h3>
                <form className="signup-form">
                    <div className="textInput my-2">
                      <label htmlFor="name"> Name </label>
                      <input 
                         type="text" 
                         placeholder="Enter name" 
                         className="form-control"
                         id="name"
                        />
                    </div>
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

                    <div className="textInput my-2">
                      <label htmlFor="confirm-pass"> Confirm password </label>
                      <input 
                        type="password" 
                        placeholder="Confirm password"
                        className="form-control"
                        id="confirm-pass"
                       /> 
                    </div>
                   <div>    
                     <label>
                        <input type="checkbox"/>
                        <span className="ms-2">I agree to the Terms & Conditions</span>
                     </label>
                    </div>
                   <button className="btn btn-primary w-100 mt-3"> Sign Up </button>
              </form>
              <div className="text-center mt-4">
                <p> Already have an account? <Link to="/signIn">  Login </Link> instead.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp



