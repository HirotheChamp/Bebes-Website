import React, {useState} from 'react'
import './Commercial.css'
import ImageUploadCommercial from '../../components/Image Upload/ImageUploadCommercial';
import ImageGridCommercial from '../../components/ImageGrid/ImageGridCommercial'
import Modal from '../../components/Modal/Modal';

const Commercial = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className='commercial'>
      <h1>Commercial</h1>
      <p>Products need a photo in order to shine. Here are my collection of photos showing off various brands.</p>

      <ImageUploadCommercial />

      <ImageGridCommercial setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
      </div>
  )
}

export default Commercial;