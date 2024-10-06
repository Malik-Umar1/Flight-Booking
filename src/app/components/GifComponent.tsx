import React from 'react'
// import loadingPlane from "@/Images/loadingPlane.gif" 
import loadingPlane from "../Images/loadingPlane.gif"
const GifComponent = () => {
  return (
    <div>
            <img 
                src={loadingPlane.src} 
                alt="Description of GIF"
                width={150} // specify the width
                height={130} // specify the height
            />
        </div>
  )
}

export default GifComponent