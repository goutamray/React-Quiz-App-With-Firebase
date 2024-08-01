import Layout from "../components/Layout/Layout";

// pages 
import Home from "../pages/Home/Home";
import Quiz from "../pages/quiz/Quiz";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";



// create private router 
export const privateRoute = [
  {
    element : <Layout />,
    children : [
      {
        path : "/",
        element : <Home />,
      },
      {
        path : "/signUp",
        element : <SignUp />,
      },
      {
        path : "/signIn",
        element : <SignIn />,
      },
      {
        path : "/quiz",
        element : <Quiz />,
      },
        
      
    ]
  }

]




