import React, { useState } from 'react'
import './Portraits.css'
import ImageUpload from '../../components/Image Upload/ImageUpload';
import ImageGrid from '../../components/ImageGrid/ImageGrid'
import Modal from '../../components/Modal/Modal';

const Portraits = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className='portraits'>
      <h1>Portraits</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <ImageUpload />

      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
      </div>
      
  )
}

export default Portraits