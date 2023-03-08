import React from 'react'
import './Portraits.css'
import ImageUpload from '../../components/Image Upload/ImageUpload';
import ImageGrid from '../../components/ImageGrid/ImageGrid'

const Portraits = () => {
  return (
    <div className='portraits'>
      <h1>Portraits</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <ImageUpload />

      <ImageGrid/>
      </div>
      
  )
}

export default Portraits