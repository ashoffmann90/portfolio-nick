import React from 'react'
import ReactPlayer from 'react-player'
import image1 from '../assets/nick-bts-images/001.jpg'
import image2 from '../assets/nick-bts-images/002.jpg'
import image3 from '../assets/nick-bts-images/003.jpg'
import image5 from '../assets/nick-bts-images/005.jpg'
import image6 from '../assets/nick-bts-images/006.jpg'
import image7 from '../assets/nick-bts-images/007.jpg'
import image8 from '../assets/nick-bts-images/008.jpg'
import image9 from '../assets/nick-bts-images/009.jpg'
import image10 from '../assets/nick-bts-images/010.jpg'
import image11 from '../assets/nick-bts-images/011.JPG'
import image12 from '../assets/nick-bts-images/012.JPG'
import image13 from '../assets/nick-bts-images/013.JPG'
import image14 from '../assets/nick-bts-images/014.JPG'
import image15 from '../assets/nick-bts-images/015.JPG'
// import images from './images.js'

function BehindTheScenes() {

    return (
        <div className='bts-container'>
            <div className='bts-content-container'>
                <h2>Photos</h2>
                <div className='bts-pics'>
                    <img src={image1} alt='blah' />
                    <img src={image2} alt='x' />
                    <img src={image3} alt='x' />
                    <img src={image5} alt='x' />
                    <img src={image6} alt='x' />
                    <img src={image7} alt='x' />
                    <img src={image8} alt='x' />
                    <img src={image9} alt='x' />
                    <img src={image10} alt='x' />
                    <img src={image11} alt='x' />
                    <img src={image12} alt='x' />
                    <img src={image13} alt='x' />
                    <img src={image14} alt='x' />
                    <img src={image15} alt='x' />
                </div>
            </div>

            <div className='bts-content-container'>
                <h2>Videos</h2>
                <div className='bts-vids'>
                    <ReactPlayer className='bts-vid' url='https://youtu.be/sqKebZMCKN8' controls={true} width='45%' />
                    <ReactPlayer className='bts-vid' url='https://youtu.be/2Z31QMA1H6g' controls={true} width='45%' />
                </div>
            </div>
        </div>
    )
}

export default BehindTheScenes
