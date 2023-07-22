import React from 'react'
import CV from '../../ASATE/cv.pdf'
const CTA = () => {
  return (
    <div  className="cta">
        <a href={CV} download className='btn'>Download Cv</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA;