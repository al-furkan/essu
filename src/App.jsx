import React from 'react'
import './App.css';
import Hader from './component/Hader/Hader';
import Nav from './component/Nave/Nav';
import About from './component/about/About';
import Expre from './component/Expremental/Expre';
import Sarvice from './component/Sarvice/Sarvice';
import Protif from './component/potfolio/Protif';
import Test from './component/textimonial/Test';
import Contact from './component/Contact/Contact';
import Footer from './component/footer/Footer';

const App = () => {
  return (
    <div>

         <>
           <Hader />
           <Nav />
           <About />
           <Expre />
           <Sarvice />
           <Protif />
           <Test />
           <Contact />
           < Footer />



         </>
      
    </div>
  )
}

export default App