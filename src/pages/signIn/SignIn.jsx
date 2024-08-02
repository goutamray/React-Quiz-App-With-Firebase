import dev from "../../assets/coder.png";

import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";


import "./SignIn.css"; 
import { auth } from "../../firebase/firebase";

const SignIn = () => {
    const [input, setInput] = useState({
        email : "",
        password : "",
    });
    const [error, setError] = useState(""); 

    const navigate = useNavigate(); 


    // handle Input Change 
    const handleInputChange = async(e) => {
        setInput((prevState) => ({
          ...prevState,
          [e.target.name] : e.target.value,
        }))
    }; 

    // handle form submit
    const handleFormSubmit = async(e) => {
      e.preventDefault();

    // All fields validation 
    if ( !input.email || !input.password ) {
        return setError("All Fields Are Required"); 
    }else{
      setError(""); 
    }

    // sign In user 
    await signInWithEmailAndPassword(auth, input.email , input.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

          // reset input data
          setInput({
            email : "",
            password : "",
          }); 


          navigate("/")
        })
        .catch((error) => {
          console.log(error);
      });

    }

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
                <form className="signup-form" onSubmit={handleFormSubmit}>
                    <div className="textInput my-2">
                      <label htmlFor="email"> Email </label>
                      <input 
                        type="text" 
                        placeholder="Enter email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={input.email}
                        onChange={handleInputChange}
                      />  
                    </div>

                    <div className="textInput my-2">
                      <label htmlFor="password"> Password </label>
                      <input 
                        type="password" 
                        placeholder="Enter password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={input.password}
                        onChange={handleInputChange}
                       />
                    </div>
                    <div className="error-message">
                      <p> {error} </p>
                    </div>
                   <button type="submit" className="btn btn-primary w-100 mt-2"> Sign In </button>
              </form>
              <div className="bottom-part text-center mt-4">
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




