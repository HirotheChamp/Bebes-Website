import React, {useState} from 'react'
import './ImageUpload.css'
import ProgressBarCommercial from '../ProgressBar/ProgressBarCommercial';

const ImageUploadCommercial = () => {

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
      setError('Please select an image file (png or jpg)');
     }
    };

    

 
  return (
    <form>
  <label>
        <input type='file' name='file' onChange={changeHandler}/>
        <span>+</span>
        </label>
        <div className='output'>
          {error && <div className='error'>{error}</div>}
          {file && <div>{file.name} </div>}
          {file && <ProgressBarCommercial file={file} setFile={setFile}/>}
        </div>
     
   
    </form>
  )
}

export default ImageUploadCommercial;