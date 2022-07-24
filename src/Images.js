import React from 'react'
import photo from './photo.png'
import "./images.css"

export const Images = () => {
  return (
    <div className='imageslist'>
        <div className='imageslistitem'>
            <img src={photo} alt="photo" className='image1'/>
            <h1>Resort</h1>
            <h2>swimming pool</h2>
        </div>
        <div className='imageslistitem'>
            <img src={photo} alt="photo" className='image1'/>
            <h1>Resort</h1>
            <h2>swimming pool</h2>
        </div>
        <div className='imageslistitem'>
            <img src={photo} alt="photo" className='image1'/>
            <h1>Resort</h1>
            <h2>swimming pool</h2>
        </div>
        <div className='imageslistitem'>
            <img src={photo} alt="photo" className='image1'/>
            <h1>Resort</h1>
            <h2>swimming pool</h2>
        </div>
        <div className='imageslistitem'>
            <img src={photo} alt="photo" className='image1'/>
            <h1>Resort</h1>
            <h2>swimming pool</h2>
        </div>
      </div>

  )
}
