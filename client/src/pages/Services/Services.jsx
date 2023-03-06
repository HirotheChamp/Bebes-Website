import React from 'react'
import './Services.css'
import { BiFootball } from '@react-icons/all-files/bi/BiFootball'
import { BsPersonBoundingBox } from '@react-icons/all-files/bs/BsPersonBoundingBox'
import { BiDrink } from '@react-icons/all-files/bi/BiDrink'
import {useHistory} from 'react-router-dom'
const Services = () => {

 
  return (
    <section className='services'>
     
    <div className='servicesContent'>
    <h1>My Services</h1>
    </div>
    <div className='servicescontainer'>
  

    <div className='servicesForm1'>
    <div className='box'>
              <div className='icon-box'>
              <div className='icon-1'>
               <BsPersonBoundingBox/>
               </div>
            </div>
               
              </div>

      <h2>Portraits</h2>

        <div className='serviceform-text'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus et tenetur sint illo esse soluta explicabo enim libero possimus qui fuga quisquam, 
          culpa voluptatum. Delectus veritatis error dolorem odio ipsam.</p>
        </div>
      
        
      <button onClick={event => window.location.href='/portraits'}>Learn More</button>
      </div>
      
      <div className='servicesForm2'>
      <div className='box'>
              <div className='icon-box'>
              <div className='icon-2'>
               <BiDrink/>
               </div>
            </div>
              
              </div>
     <h2>Commercial</h2>
     <div className='serviceform-text'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus et tenetur sint illo esse soluta explicabo enim libero possimus qui fuga quisquam, 
          culpa voluptatum. Delectus veritatis error dolorem odio ipsam.</p>
        </div>
       
        <button onClick={event => window.location.href='/commercial'}>Learn More</button>
     </div>
     <div className='servicesForm3'>
     <div className='box'>
              <div className='icon-box'>
                <div className='icon-3'>
               <BiFootball/>
               </div>
            </div>
               
              </div>
     <h2>Sports</h2>
     <div className='serviceform-text'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus et tenetur sint illo esse soluta explicabo enim libero possimus qui fuga quisquam, 
          culpa voluptatum. Delectus veritatis error dolorem odio ipsam.</p>
         
        </div>
        <button onClick={event => window.location.href='/sports'}>Learn More</button>
     </div>
    </div>
    </section>
  )
}

export default Services