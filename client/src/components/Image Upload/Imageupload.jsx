import React, {useState} from 'react'
import axios from '../../api/axios'

const Imageupload = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
     let selected = e.target.files[0];
    
     
     if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
     } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
     }
    }

    

 
  return (
    <div className='image-upload'>
        <input type='file' name='file' onChange={changeHandler}/>
        <div className='output'>
          {error && <div className='error'>{error}</div>}
          {file && <div>{file.name} </div>}
        </div>
     
    </div>
  )
}

export default Imageupload;