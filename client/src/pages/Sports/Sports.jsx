import React, { useState } from 'react'
import './Sports.css'
import ImageUpload from '../../components/Image Upload/ImageUpload';
import ImageGrid from '../../components/ImageGrid/ImageGrid'
import Modal from '../../components/Modal/Modal';

const Sports = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className='sports'>
      <h1>Sports</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <ImageUpload />

      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
      </div>
  )
}

export default Sports