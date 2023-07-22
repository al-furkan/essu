import React from 'react'
import './Expr.css'
import {BsPatchCheckFill} from 'react-icons/bs' 
const  Expre=()=> {
  return (
    <section id='expre'>
    <h5> What Skills  I Have</h5>
     <h2> My Experience</h2>
     <div className="container expre_container">
      <div className="expre_fronted">
        <h3> Fronted Development</h3>
        <div className="expre_content">
          <article className='expre_details'>
            <BsPatchCheckFill className='expre_details_icon'/>
            <div><h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='expre_details'>
            <BsPatchCheckFill className='expre_details_icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='expre_details'>
            <BsPatchCheckFill className='expre_details_icon'/>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='expre_details'>
            <BsPatchCheckFill className='expre_details_icon'/>
            <div>
            <h4>React -JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='expre_details'>
            <BsPatchCheckFill className='expre_details_icon'/>
            <div>
            <h4>PHP</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='expre_details'>
            <BsPatchCheckFill className='expre_details_icon'/>
            <div>
            <h4>C++</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
      </div>

      <div className="expre_backend">
      <h3> Backend Development</h3>
        <div className="expre_content">
          <article className='expre_details'>
            <BsPatchCheckFill className='expre_details_icon'/>
            <div>
            <h4>Node -Js</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='expre_details'>
            <BsPatchCheckFill className='expre_details_icon'/>
           <div>
           <h4>Mongodb</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
          <article className='expre_details'>
            <BsPatchCheckFill className='expre_details_icon'/>
            <div>
            <h4>Php</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='expre_details'>
            <BsPatchCheckFill className='expre_details_icon'/>
            <div>
            <h4>mysql</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='expre_details'>
            <BsPatchCheckFill  className='expre_details_icon'/>
            <div><h4>Python</h4>
            <small className='text-light'>Experienced</small></div>
          </article>
        </div>


      </div>

     </div>
  
      </section>
  )
}

export default Expre
