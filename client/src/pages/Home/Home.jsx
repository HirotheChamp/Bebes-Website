import React from 'react'
import Imageupload from '../../components/Image Upload/Imageupload';
import './Home.css'

const Home = () => {
  return (
   
   <section className='home'>
  
   
   <div className='home-content'>
    
    <div className='section-one'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat temporibus maiores unde iusto dolorum quasi dignissimos quod officiis iure, doloribus maxime aut ad assumenda? Quae aliquam quaerat repellendus eaque!</div>
   
    <div className='section-two'><Imageupload /></div>
   </div>
   </section>
   
 
  )
}

export default Home;