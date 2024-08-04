
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar/NavBar";


// all pages 
import Home from "./pages/Home/Home";
import Quiz from "./pages/quiz/Quiz";
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";
import Result from "./pages/result/Result";

import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(); 

  useEffect(() => {
    const authState =  onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(user); 
        
      }else{
        console.log("No user Found");
      }
   });

   return () => authState(); 
   
  }, []); 


  return (
    <>
      <BrowserRouter >
          <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />
              <Routes >
                  <Route  path='/' exact={true} element={ <Home /> }/>
                  <Route  path='/quiz/:id' exact={true} element={ <Quiz /> }/>  
                  <Route  path='/result' exact={true} element={ <Result /> }/>  

                  <Route  path='/signIn' exact={true} element={ <SignIn /> } />

                  <Route  path='/signUp' exact={true} element={ <SignUp /> } 
                   isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
