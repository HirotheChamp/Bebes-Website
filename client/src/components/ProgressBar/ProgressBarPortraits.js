import React, { useEffect } from 'react'
import useStorage from '../../hooks/useStoragePortraits'
import './ProgressBar.css'
import { motion } from 'framer-motion'

const ProgressBarPortraits = ({file, setFile}) => {
    const {url, progress} = useStorage(file);

    useEffect(() => {
if (url) {
    setFile(null)
}
    }, [url, setFile])
   
  return (
    <motion.div className='progress-bar' 
    initial={{ width: 0 }}
    animate={{ width: progress + '%' }}
    ></motion.div>
  )
}

export default ProgressBarPortraits;