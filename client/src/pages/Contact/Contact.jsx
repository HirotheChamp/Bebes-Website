import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    
    <section className='contact'>
        <div className='content'>
      
        </div>
        <div className='supportcontainer'>
          <div className='contactInfo'>
            <div className='contact-title'>

            
            <h1>Contact Info</h1>
            <p>
          Feel free to message me with any questions or concerns that you may have about myself and my services!
          </p>
          </div>
            <div className='box'>
              {/* <div class='icon-box'>
                <i class="fa-solid fa-location-dot"></i>
            </div> */}
                <div className='text'>
                  <h3>Location</h3>
                  <p>San Francisco Bay Area - South Bay</p>
                </div>
              </div>
            
            <div className='box'>
            {/* <div class='icon-box'>
                <i class="fa-solid fa-phone"></i>
            </div> */}
                <div className='text'>
                  <h3>Phone</h3>
                  <p>408-674-1627</p>
                </div>
              </div>
            
            <div className='box'>
            {/* <div class='icon-box'>
                <i class="fa-solid fa-envelope"></i>
            </div> */}
                <div className='text'>
                  <h3>Email</h3>
                  <p>rioselina@gmail.com</p>
                </div>
              </div>
          </div>
        
  
        <div className='contactForm'>
          <form action='https://formsubmit.co/rioselina@gmail.com' method='POST'>
          <h2>Contact Me</h2>
            <div className='inputBox'>
              <input type='text' name='Name' required='required'/>
              <span>Full Name</span>
            </div>
            <div className='inputBox'>
              <input type='email' name='Email' required='required'/>
              <span>Email</span>
            </div>
            <div className='inputBox'>
              <input type='text' name='Name' required='required'/>
              <span>Phone</span>
            </div>
            <div className='inputBox'>
              <input type='text' name='Name' required='required'/>
              <span>Subject</span>
            </div>
            <div className='inputBox'>
              <textarea name='Message' required='required' rows={5} cols={30}></textarea>
              <span>Type your Message</span>
            </div>
            <div className='inputBox'>
              <input type='submit' name='' className="submitbutton" value="Send"/>
            </div>
            
          </form>
          </div>
        </div>
        </section>
  
  )
}

export default Contact;