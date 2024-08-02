
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth"; 


import dev from "../../assets/dev.webp";


import "./SignUp.css"; 
const SignUp = () => {
  const [input, setInput] = useState({
     name : "",
     email : "",
     password : "",
     confirmPass : "", 
  });
  const [error, setError] = useState(""); 

  const navigate = useNavigate(); 


  // handle Input Change 
  const handleInputChange = (e) => {
     setInput((prevState) => ({
       ...prevState,
       [e.target.name] : e.target.value,
     }))
  }; 

  // handle form submit
  const handleFormSubmit = async(e) => {
    e.preventDefault();

  // All fields validation 
  if (!input.name || !input.email || !input.password || !input.confirmPass) {
     return setError("All Fields Are Required"); 
  }else{
    setError(""); 
  }

  // password validation 
  if (input.password !== input.confirmPass) {
    return setError("Password Not Match"); 
  }else{
    setError(""); 
  }
 
  // sign up user 
   await createUserWithEmailAndPassword(auth, input.email , input.password)
        .then((userCredential) => {
           // Signed up 
           const user = userCredential.user;
          
           // profile update 
            updateProfile(user, {
                displayName : input.name,
           }); 

          // reset input data
          setInput({
            name : "",
            email : "",
            password : "",
            confirmPass : "", 
          }); 
           
          // navigate login page
          navigate("/signIn")
        })
        .catch((error) => {
            console.log(error);
        });
  
 

  }

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
                <form className="signup-form" onSubmit={handleFormSubmit}>
                    <div className="textInput my-2">
                      <label htmlFor="name"> Name </label>
                      <input 
                         type="text" 
                         placeholder="Enter name" 
                         className="form-control"
                         id="name"
                         name="name"
                         value={input.name}
                         onChange={handleInputChange}
                        />
                    </div>
                    <div className="textInput my-2">
                      <label htmlFor="email"> Email </label>
                      <input 
                        type="email" 
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

                    <div className="textInput my-2">
                      <label htmlFor="confirm-pass"> Confirm password </label>
                      <input 
                        type="password" 
                        placeholder="Confirm password"
                        className="form-control"
                        id="confirm-pass"
                        name="confirmPass"
                        value={input.confirmPass}
                        onChange={handleInputChange}
                       /> 
                    </div>
                   <div>    
                     <label>
                        <input type="checkbox" />
                        <span className="ms-2">I agree to the Terms & Conditions</span>
                     </label>
                    </div>
                    <div className="error-message">
                      <p> {error} </p>
                    </div>
                   <button type="submit" className="btn btn-primary w-100 mt-2"> Sign Up </button>
              </form>
              <div className="bottom-part text-center mt-4">
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



