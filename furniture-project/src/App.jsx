
import './App.css'
import Home from './Components/Home/Home'
import PropertyList from './Components/Home/PropertyList'
import FullscreenPropertyComponent from './Components/Pages/PropertyLayout';
import ContactSection from './Components/Pages/ContactSection';
function App() {

  return (
    <>
      <Home />
      <div className="flex justify-center items-center h-full sm:h-auto md:h-full sm:p-5 md:p-10 lg:p-20 bg-gray-100">
        <PropertyList />
      </div>
        <FullscreenPropertyComponent />
        <ContactSection />

    </>
  )
}

export default App


