import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./route/route";


function App() {
 
  return (
    <>
       <RouterProvider router={router}/>  
    </>
  )
}

export default App
