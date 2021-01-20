import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

function BehindTheScenes() {

    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState()

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
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/IMG_5225.jpeg'
    ]

    const onClick = e => {
        setIsOpen(true)
        setPhotoIndex(imgArray.indexOf(e.target.currentSrc))
    }    

    return (
        <div className='bts-container'>
            <div className='bts-content-container'>
                <h2>Photos</h2>
                <div className='bts-pics'>
                    {imgArray.map(pic => 
                        <img src={pic} alt='x' onClick={onClick}/>
                        )}
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
                    <ReactPlayer className='bts-vid' url='https://youtu.be/sqKebZMCKN8' controls={true} width='45%' />
                    <ReactPlayer className='bts-vid' url='https://youtu.be/2Z31QMA1H6g' controls={true} width='45%' />
                </div>
            </div>
        </div>
    )
}

export default BehindTheScenes
