import React from 'react'
import './About.css'
import Furkan from '../../ASATE/furkan.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
  <h5>Get to Know</h5>
  <h2>About me</h2>
  <div className='conteinar about_conteinar'>
   <div className="about_me">
    <div className="about_me-image">
      <img src={Furkan} alt="about-img" />
    </div>
   </div>
   <div className="about_content">
    <div className="about_cards">
      <article className='about_card'>
        <FiAward className='about_icon'/>
        <h5>Experience</h5>
        <small>2+ Years Working</small>
      </article>
      <article className='about_card'>
        <FiUsers className='about_icon'/>
        <h5>Clients</h5>
        <small>200+ Worldwide</small>
      </article>
      <article className='about_card'>
        <VscFolderOpened className='about_icon'/>
        <h5>Project</h5>
        <small>100+ Completed Project</small>
      </article>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ab
      molestiae deleniti libero asperiores enim vero facere ad laborum alias,
       minus esse quisquam exercitationem quidem eius, quae quos veritatis? 
       Recusandae.
    </p>
    <a href="#contact" className='btn btn-primary'>let's Talk</a>
   </div>
  </div>


    </section>
  )
}

export default About