import "./App.css";
// import MyComponent from './Components/Home/MyComponent'
// import CardProperty from './Components/Home/CardProperty'
// import PropertyDetail from './Components/Home/PropertyDetail'
// import PropertyFilter from './Components/Home/PropertyFilter'
// import PropertyList from './Components/Home/PropertyList'
import Home from "./Components/Home/Home";
import FullscreenPropertyComponent from "./Components/Pages/PropertyLayout";
import ContactSection from "./Components/Pages/ContactSection";
function App() {
  return (
    <>
      <Home />
      <FullscreenPropertyComponent />
      <ContactSection />
      {/* <CardProperty />
      <div className="flex justify-center items-center h-full sm:h-auto md:h-full sm:p-5 md:p-10 lg:p-20 bg-gray-100">
         <PropertyList />
      </div> */}
      {/* <PropertyFilter/> */}
      {/* <PropertyDetail /> */}
      {/* <MyComponent/> */}
    </>
  );
}

export default App;
