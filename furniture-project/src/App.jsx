
import './App.css'
import Home from './Components/Home/Home'
import PropertyList from './Components/Home/PropertyList'
import FullscreenPropertyComponent from './Components/Pages/PropertyLayout';
import ContactSection from './Components/Pages/ContactSection';
function App() {

  return (
    <>
      <Home />
      <div className="">
        <PropertyList />
      </div>
        <FullscreenPropertyComponent />
        <ContactSection />
    </>
  )
}

export default App


