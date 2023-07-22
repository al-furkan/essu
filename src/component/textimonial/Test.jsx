import React from 'react'
import './test.css'
import Avtr1 from '../../ASATE/Avtr1.jpg'
import Avtr2 from '../../ASATE/Avtr2.jpg'
import Avtr3 from '../../ASATE/Avtr3.jpg'
import Avtr4 from '../../ASATE/Avta4.jpg'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';






const data =[
  {
    avatar:Avtr1,
    name:'Esice vaction',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae atquepariatur voluptatem, ipsa, numquam blanditiis dolore at, provident dolorumtotam quibusdam perferendis laboriosam! Esse sequi tempora sed velit assumenda?'


  },
  {
    avatar:Avtr2,
    name:'Esice vaction',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae atquepariatur voluptatem, ipsa, numquam blanditiis dolore at, provident dolorumtotam quibusdam perferendis laboriosam! Esse sequi tempora sed velit assumenda?'


  }, {
    avatar:Avtr3,
    name:'Esice vaction',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae atquepariatur voluptatem, ipsa, numquam blanditiis dolore at, provident dolorumtotam quibusdam perferendis laboriosam! Esse sequi tempora sed velit assumenda?'


  },
  {
    avatar:Avtr4,
    name:'Esice vaction',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae atquepariatur voluptatem, ipsa, numquam blanditiis dolore at, provident dolorumtotam quibusdam perferendis laboriosam! Esse sequi tempora sed velit assumenda?'


  }


]




const test = () => {
  return (
    <section id='test'>
     <h5>Review From Client</h5>
     <h2>Testimonials</h2>
     
      <Swiper className="container test_container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
       {
         data.map(({avatar,name,review}) => {
          return(
         <SwiperSlide className='testa'>
         <div className="cilent_avater">
           <img src={avatar} alt="Avata one" />
         </div>
         <h5 className='client_name'>{name}</h5>
           <small className='client_review'>
            {review}
               Esse sequi tempora sed velit assumenda?
           </small>

       </SwiperSlide>

)
})
       }
        
      </Swiper>     



    </section>
  )
}

export default test;