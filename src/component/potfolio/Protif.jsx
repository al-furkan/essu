import React from 'react'
import './Protif.css'
import IMG1 from '../../ASATE/hh.png'
import IMG2 from '../../ASATE/ab.jpg'
import IMG3 from '../../ASATE/ac.jpg'
import IMG4 from '../../ASATE/ak.jpg'
import IMG5 from '../../ASATE/af.jpg'
import IMG6 from '../../ASATE/ag.png'
const data =[
  {
    id:1,
    image:IMG1,
    title:'crypto currency dashbord & financial visulization',
    github:'https://github.com',
    demo:'https://dribble.com'


  },
  {
    id:2,
    image:IMG2,
    title:'crypto currency dashbord & financial visulization',
    github:'https://github.com',
    demo:'https://dribble.com'


  },{
    id:3,
    image:IMG3,
    title:'crypto currency dashbord & financial visulization',
    github:'https://github.com',
    demo:'https://dribble.com'


  },
  {
    id:4,
    image:IMG4,
    title:'crypto currency dashbord & financial visulization',
    github:'https://github.com',
    demo:'https://dribble.com'


  },
  {
    id:5,
    image:IMG5,
    title:'crypto currency dashbord & financial visulization',
    github:'https://github.com',
    demo:'https://dribble.com'


  },
  {
    id:6,
    image:IMG6,
    title:'crypto currency dashbord & financial visulization',
    github:'https://github.com',
    demo:'https://dribble.com'


  }

]


const Protif = () => {
  return (
    <section id='protif'>
      <h5>Recent Work</h5>
      <h2>Protfolio</h2>
      <div className='conteinar portfolio_container'>
        {
          data.map(({id,image,title,github,demo}) => {
            return(
            <article key={id} className ='protfolio_item'>
          <div className="portfolio_item_img">
           <img src={image} alt={title} />
          
          </div>
           <h3>{title}</h3>
           <div className="portfolio_item_cta">
           <a href={github} className='btn'>Github</a>
           <a href={demo} className='btn btn-primary'>Live demo</a>
           </div>
        </article>
            )
          })
        
        
        }
      </div>
    </section>
  )
}

export default Protif;