import React, { useState } from 'react'
import './Portraits.css'
import ImageUploadPortrait from '../../components/Image Upload/ImageUploadPortraits';
import ImageGridPortrait from '../../components/ImageGrid/ImageGridPortrait'
import Modal from '../../components/Modal/Modal';

const Portraits = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className='portraits'>
      <h1>Portraits</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <ImageUploadPortrait />

      <ImageGridPortrait setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
      </div>
      
  )
}

export default Portraits