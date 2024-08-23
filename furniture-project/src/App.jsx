import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import ContactSection from "./Components/Pages/ContactSection"
import Navbar from './Components/Navbar/Navbar'
import PropertyList from "./Components/Home/PropertyList";
import Contact from './Components/Pages/Contact'
import Home from './Components/Home/Home'
import PropertyLayout from './Components/Pages/PropertyLayout';
import Footer from "./Components/footer/Footer"
import Villa from './Components/Pages/Villa';
import PropertyDetail from './Components/Pages/PropertyDetail';

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
      element: <><Navbar /><PropertyDetail/><Footer/></>
    },
    {
      path:"/",
      element:<><Navbar /><Villa/><Footer/></>
    },
    {
      path:"/",
      element: <><Navbar/><Home/><Footer/></>
    },
])
return(
  <>
    <RouterProvider router={router}/>
    
  </>
)
}
export default App


