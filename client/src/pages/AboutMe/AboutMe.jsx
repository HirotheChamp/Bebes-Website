import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
  return (

    <section class='about-me'>
    <div className='about-me-content'>
    <div className='about-me-picture'> 
    <img src={require('../../images/selinapic.jpg')} />
    
    </div>
    
    <div className='about-me-text'>
    <h1>About</h1>
    <p>
      As an artist, Selina Rios has been using photography as a form of expression for as long as she remembers. However, she entered San Jose State University unsure of what to pursue, actively exploring a variety of fields. It was not until roughly five years later that she committed to a degree in photography. 
With new found confidence, Selina further refined her talents and learned how to successfully translate her ideas through the lens and into works of art. Whether the topic is of a personal nature or of a general one, Selina is more than willing to create art that is both able to catch one’s eye as well as provoke one to think.
</p>
</div>
</div>
</section>
)}

export default AboutMe;