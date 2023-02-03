import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    
    <section class='contact'>
        <div class='content'>
      
        </div>
        <div class='supportcontainer'>
          <div class='contactInfo'>
            <div class='box'>
              <div class='icon-box'>
                <i class="fa-solid fa-location-dot"></i>
            </div>
                <div class='text'>
                  <h3>Address</h3>
                  <p>715 Craig Ave, Campbell, California 95008</p>
                </div>
              </div>
            
            <div class='box'>
            <div class='icon-box'>
                <i class="fa-solid fa-phone"></i>
            </div>
                <div class='text'>
                  <h3>Phone</h3>
                  <p>408-888-6532</p>
                </div>
              </div>
            
            <div class='box'>
            <div class='icon-box'>
                <i class="fa-solid fa-envelope"></i>
            </div>
                <div class='text'>
                  <h3>Email</h3>
                  <p>kyleyoungins94@gmail.com</p>
                </div>
              </div>
          </div>
        
  
        <div class='contactForm'>
          <form action='https://formsubmit.co/kyleyoungins94@gmail.com' method='POST'>
          <h2>Contact Me</h2>
            <div class='inputBox'>
              <input type='text' name='Name' required='required'/>
              <span>Full Name</span>
            </div>
            <div class='inputBox'>
              <input type='email' name='Email' required='required'/>
              <span>Email</span>
            </div>
            <div class='inputBox'>
              <textarea name='Message' required='required' rows={5} cols={30}></textarea>
              <span>Type your Message</span>
            </div>
            <div class='inputBox'>
              <input type='submit' name='' class="submitbutton" value="Send"/>
            </div>
            
          </form>
          </div>
        </div>
        </section>
  
  )
}

export default Contact;