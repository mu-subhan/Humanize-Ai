import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from "./components/About/About"
import Steps from './components/About/Steps';
// import Contact from './components/Contact';
// import ContentSection from './components/ContentSection';
// import Message from './components/Message';
// import FAQSection from './components/FAQAccordion';


function App() {
  return (
   <>
   <Navbar/>
   <About/>
   <Steps/>
   {/* <Contact/>
   <ContentSection/>
   <Message/>
   <FAQSection/> */}
   </>
  )
}

export default App;
