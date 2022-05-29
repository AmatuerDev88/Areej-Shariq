import './App.css';
import React from "react"
import { Routes, Route } from "react-router-dom" 
import Nav from "./components/Nav"
import WebsiteHome from "./components/WebsiteHome"
import Footer from "./components/Footer"
import WebsiteAbout from "./components/WebsiteAbout"
import WebsiteBooks from "./components/WebsiteBooks"
import WebsiteContact from "./components/WebsiteContact"
import WebsiteNews from "./components/WebsiteNews"
import WebsiteSpecificBook from "./components/WebsiteSpecificBook"
import WebsiteSpecificNews from "./components/WebsiteSpecificNews"
import 'aos/dist/aos.css';
import Aos from "aos"

function App() {
  React.useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])
  
  const [dropdown, changeDropdown] = React.useState(true)

  function changeDropdownState(){
    changeDropdown(!dropdown)
  }

  !dropdown ? document.body.style.overflow = "hidden" : document.body.style.overflow = "initial"

  return (
    <Routes>
      <Route path="/" element={
        <>
          <Nav 
            dropdown={dropdown}
            changeDropdownState={changeDropdownState}
          />
          <WebsiteHome />
          <Footer />
        </>
      } />
      <Route path="/books" element={
        <>
          <Nav  
            dropdown={dropdown}
            changeDropdownState={changeDropdownState}
          />
          <WebsiteBooks />
          <Footer />
        </>
      } />
      <Route path="/about" element={
        <>
          <Nav  
            dropdown={dropdown}
            changeDropdownState={changeDropdownState}
          />
          <WebsiteAbout />
          <Footer />
        </>
      } />
      <Route path="/news" element={
        <>
          <Nav  
            dropdown={dropdown}
            changeDropdownState={changeDropdownState}
          />
          <WebsiteNews />
          <Footer />
        </>
      } />
      <Route path="/contact" element={
        <>
          <Nav  
            dropdown={dropdown}
            changeDropdownState={changeDropdownState}
          />
          <WebsiteContact />
          <Footer />
        </>
      } />
      <Route path="/books/:book" element={
        <>
          <Nav  
            dropdown={dropdown}
            changeDropdownState={changeDropdownState}
          />
          <WebsiteSpecificBook />
          <Footer />
        </>
      } />
      <Route path="/news/:index" element={
        <>
          <Nav  
            dropdown={dropdown}
            changeDropdownState={changeDropdownState}
          />
          <WebsiteSpecificNews />
          <Footer />
        </>
      } />
    </Routes>
  );
}

export default App;
