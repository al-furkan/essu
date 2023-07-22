import React from 'react'
import './Nav.css'
import {FcHome} from 'react-icons/fc'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiCustomerService2Line} from 'react-icons/ri'
import {BsMessenger} from 'react-icons/bs'
import { useState } from 'react'
const Nav = () => {
  const [activeNav,setActiveNav] = useState('#');
  return (
    <nav>
     <a href="# " onClick={()=> setActiveNav('# ')} className = {activeNav === '# ' ? 'active' : ''}><FcHome /></a>
     <a href="#about" onClick={()=> setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
     <a href="#expre" onClick={()=> setActiveNav('#expre')} className = {activeNav === '#expre' ? 'active' : ''}><BiBook /></a>
     <a href="#sarvice" onClick={()=> setActiveNav('#sarvice')} className = {activeNav === '#sarvice' ? 'active' : ''}><RiCustomerService2Line /></a>
     <a href="#contact" onClick={()=> setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''}><BsMessenger /></a>
    </nav>
  )
}

export default Nav;