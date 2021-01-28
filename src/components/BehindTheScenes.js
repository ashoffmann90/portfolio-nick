import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import Lightbox from 'react-image-lightbox';
import HorizontalScroll from 'react-scroll-horizontal'

import 'react-image-lightbox/style.css'; 

function BehindTheScenes() {

    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState()

    const thumbnailArray = [
      'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/0ADSC03760.jpg',
      'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/0ADSC03870.jpg',
      'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/0ADSC03883.jpg',
      'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/DSC03496.jpg',
      'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/DSC03567.jpg',
      'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/DSC04021.jpg',
      'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/DSC04065.jpg',
      'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/DSC04180.jpg',
      'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/DSC04185.jpg',
      'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/IMG_0435.jpg',
      'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/IMG_6484.jpg',
      'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/IMG_6486.jpg',
      'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/IMG_9798.jpg',
      'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/VLB+Shoot.jpg',
    ]

    const imgArray = [
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/001.jpg',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/002.jpg',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/003.jpg',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/005.jpg',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/006.jpg',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/007.jpg',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/008.jpg',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/009.jpg',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/010.jpg',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/011.JPG',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/012.JPG',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/013.JPG',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/014.JPG',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/015.JPG',
    ]

    // No full size for this image
    // 'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/R4030F08.jpg',

    // No thumbnail for this image
    // 'https://nick-portfolio.s3-us-west-2.amazonaws.com/IMG_5225.jpeg'


    const onClick = e => {
        setIsOpen(true)
        setPhotoIndex(thumbnailArray.indexOf(e.target.currentSrc))
    }    

    const child = { width: `10em`, height: `25em`}
    const parent  = { marginLeft:'15px', width: `50em`, height: `10em`}

    return (
        <div className='bts-container'>
            <div className='bts-content-container'>
                <h2>Photos</h2>
                <div className='bts-pics' style={parent}>
                  {/* <HorizontalScroll> */}
                    {thumbnailArray.map(pic => 
                        // <div style={child}>
                          <img src={pic} alt='x' onClick={onClick}/>
                        // </div>
                        )}
                  {/* </HorizontalScroll> */}
                </div>
            </div>

            {isOpen && (
                <Lightbox
                  mainSrc={imgArray[photoIndex]}
                  nextSrc={imgArray[(photoIndex + 1) % imgArray.length]}
                  prevSrc={imgArray[(photoIndex + imgArray.length - 1) % imgArray.length]   }
                  onCloseRequest={() => setIsOpen( false )}
                  onMovePrevRequest={() =>
                    setPhotoIndex(
                      (photoIndex + imgArray.length - 1) % imgArray.length,
                    )
                  }
                  onMoveNextRequest={() =>
                    setPhotoIndex(
                      (photoIndex + 1) % imgArray.length,
                    )
                  }
                />
            )}

            <div className='bts-content-container'>
                <h2>Videos</h2>
                <div className='bts-vids'>
                    <ReactPlayer className='bts-vid' url='https://youtu.be/sqKebZMCKN8' controls={true} width='75%' />
                </div>
            </div>
        </div>
    )
}

export default BehindTheScenes
