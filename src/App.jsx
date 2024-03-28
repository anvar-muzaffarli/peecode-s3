import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Komponentler start Ana fayla gelecek
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Komponentler end

// sehifeler
import WhatWeDo from './containers/WhatWeDo';
import Career from './containers/Career';
import Contact from './containers/Contact';
import Blog from './containers/Blog';
import NotFound from './containers/NotFound';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
function App() {

  useEffect(()=> {
    Aos.init()
  }, []) //1ce defe render et []
  

  return (
    <>

    <BrowserRouter>
    



      <Navbar />

      <Routes>
        <Route path='/' element={<WhatWeDo />} />
        <Route path='/kariyera' element={<Career />} />
        <Route path='/bizimle-elaqe' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/bloqlar' element={<Blog />} />
      </Routes>

      <Footer />
 

 </BrowserRouter>
   
   
    </>
  )
}

export default App
