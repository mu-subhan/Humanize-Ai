import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import ContentSection from './components/ContentSection';
import Message from './components/Message';
import FAQSection from './components/FAQAccordion';


function App() {
  return (
   <>
   <Navbar/>
   <Contact/>
   <ContentSection/>
   <Message/>
   <FAQSection/>
   </>
  )
}

export default App;
