import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import ContactSection from "./Components/Pages/ContactSection"
import Navbar from './Components/Navbar/Navbar'
import PropertyList from "./Components/Home/PropertyList";
import Contact from './Components/Pages/Contact'
import Home from './Components/Home/Home'
import PropertyLayout from './Components/Pages/PropertyLayout';
import Footer from "./Components/footer/Footer"
import AuthForm from './Components/Pages/Login/AuthForm';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar /><Home/><PropertyList/><PropertyLayout/><ContactSection/><Footer/></>
    },
    {
      path:"/Contact",
      element:<><Navbar /><Contact/><Footer/></>
    },
    {
      path:"/",
      element: <><Navbar /><Home/><Footer/></>
    },
    {
      path:"/",
      element:<><Navbar /><Home/><Footer/></>
    },
    {
      path:"/",
      element: <><Navbar/><Home/><Footer/></>
    },
    {
      path:"/",
      element:<><AuthForm/></>
    }
])
return(
  <>
    <RouterProvider router={router}/>
    <AuthForm/>
  </>
)
}
export default App


