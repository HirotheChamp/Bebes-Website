import React, {useState} from 'react'
import axios from '../../api/axios'

const Imageupload = () => {

    const [image, setImage] = useState('')
    function handleImage (e)  {
        console.log(e.target.file)
       setImage(e.target.files[0])
     
    }

    function handleApi () {
        const formData = new FormData()
        formData.append('image', image)
        axios.post ('url', formData).then((res) => {
            console.log(res)
        })

    }
  return (
    <div className='image-upload'>
        <input type='file' name='file' onChange={handleImage}/>
        <button onClick={handleApi}>Submit</button>
    </div>
  )
}

export default Imageupload;