import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import Img2 from '../../ASATE/logo2.png'
const Footer=() =>{
  return (
    <footer>
      <a href=" " className='footer_logo'><img src={Img2} alt="" /></a>
      <ul className='permalink'>
        <li>
          <a href="# ">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
          
        </li> <li>
          <a href="#expre">Expeirence</a>
          
        </li> <li>
          <a href="#sarvice">Services</a>
          
        </li> <li>
          <a href="#protif">Portfolio</a>
          
        </li> <li>
          <a href="#test">Testimonials</a>
          
        </li> <li>
          <a href=" #contact">Contact</a>
          
        </li> 
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><BsFacebook /></a>
        <a href="https://instagram.com"><FaInstagramSquare /></a>
        <a href="https://twitter.com"><BsTwitter /></a>
      </div>
      <div className="footer_copyright">
        <small> &copy; @FonClick. All right received</small>
      </div>

    </footer>
  )
}

export default Footer
