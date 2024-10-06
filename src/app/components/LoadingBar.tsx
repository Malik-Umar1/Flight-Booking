import React from 'react'
import loadingBar from "../Images/loadingbar.gif"

const LoadingBar = () => {
  return (
    <div>
    <img 
        src={loadingBar.src}
        alt="Description of GIF"
        width={10} 
        height={10} 
        className='w-full h-1'
    />
</div>
  )
}

export default LoadingBar