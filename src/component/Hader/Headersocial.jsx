import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'
const Headersocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com"> <BsLinkedin /> </a>
        <a href="https://github.com"><BsGithub /></a>
        <a href="https://dribble.com" ><FiDribbble /></a>
    </div>
  )
}

export default Headersocial;