import React from 'react'
import images from './images.js'

function BehindTheScenes() {

    return (
        <div className='bts-container'>
            <div className='bts-pics'>
                {images.map((image) => 
                        <img src={image.src} key={image.id} alt='update in assets' />
                )}

            </div>
            <div className='bts-videos'>

            </div>
        </div>
    )
}

export default BehindTheScenes
