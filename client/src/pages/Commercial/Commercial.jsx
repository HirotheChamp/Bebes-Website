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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <ImageUploadCommercial />

      <ImageGridCommercial setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
      </div>
  )
}

export default Commercial;