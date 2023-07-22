import React from 'react'
import './Hader.css'
import CTA from './CTA'
import Headersocial from './Headersocial'
import Me from '../../ASATE/me.png'
const Hader = () => {
  return (
    <header>
    <div className="conteinar header-conteinar">
     <h5>Hello i'm</h5>
     <h1>Md Al Furkan</h1>
     <h5 className="text-light">FullStack devoloper</h5>
       <CTA/>
       <Headersocial />
      <div className="me">
        <img src={Me} alt="me" />
      </div>
         <a href="#Contact" className='Scroll_down'>Scroll- Doewn</a>
         
    </div>
    </header>
  )
}

export default Hader
