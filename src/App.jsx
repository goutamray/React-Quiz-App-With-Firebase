
import { useEffect, useState } from "react";
import { router } from "./route/route";
import { RouterProvider } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";

import "bootstrap/dist/css/bootstrap.min.css";

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
       <RouterProvider router={router}/>  
    </>
  )
}

export default App
