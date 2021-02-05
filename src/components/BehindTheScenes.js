import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Lightbox from 'react-image-lightbox'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import 'react-image-lightbox/style.css'

function BehindTheScenes() {
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
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/IMG_6486.jpg',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/IMG_9798.jpg',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/VLB+Shoot.jpg',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/IMG_5225.jpg',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/thumbnails/R4030F08.jpg',
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
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/013.JPG',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/014.JPG',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/015.JPG',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/IMG_5225.jpeg',
        'https://nick-portfolio.s3-us-west-2.amazonaws.com/R4030F08.jpg',
    ]

    const [isOpen, setIsOpen] = useState(false)
    const [isThumbnailOpen, setIsThumbnailOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState()
    const [thumbnailIndex, setThumbnailIndex] = useState()
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const imgResponsive = {
        0: { items: 2 },
        530: { items: 3 },
        700: { items: 4 },
        950: { items: 4 },
    }

    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 2 },
    }

    const onClick = (e) => {
        setIsOpen(true)
        setPhotoIndex(imgArray.indexOf(e.target.currentSrc))
    }

    const thumbnailOnClick = (e) => {
        setThumbnailIndex(thumbnailArray.indexOf(e.target.currentSrc))
        setIsThumbnailOpen(true)
    }

    const picItems = []
    imgArray.map((src, index) =>
        picItems.push(
            <div className="bts-pics" data-value={index}>
                <img
                    src={src}
                    alt="Behind the scenes with Nick Almanza operating the steadycam."
                    onClick={onClick}
                />
            </div>
        )
    )

    const urlArray = [
        'https://youtu.be/sqKebZMCKN8',
        'https://youtu.be/sqKebZMCKN8',
        'https://youtu.be/sqKebZMCKN8',
        'https://youtu.be/sqKebZMCKN8',
    ]

    const vidItems = []
    urlArray.map((url, index) =>
        vidItems.push(
            <div className="react-player-div" data-value={index}>
                <ReactPlayer
                    className="react-player"
                    url={url}
                    controls={true}
                    width="100%"
                />
            </div>
        )
    )

    window.addEventListener('resize', () => setWindowSize(window.innerWidth))
    return (
        <div className="bts-container">
            {windowSize <= 1000 ? (
                <div className="bts-content-container">
                    <h2>Photos</h2>
                    <AliceCarousel
                        mouseTracking
                        touchTracking
                        infinite
                        animationDuration={800}
                        activeIndex={photoIndex - 1}
                        items={picItems}
                        responsive={imgResponsive}
                    />
                </div>
            ) : (
                <div className="bts-content-container">
                    <h2>Photos</h2>
                    <div className="bts-pics">
                        {thumbnailArray.map((pic, index) => (
                            <img
                                key={index}
                                src={pic}
                                alt="Behind the scenes with Nick Almanza operating the steadycam."
                                onClick={thumbnailOnClick}
                            />
                        ))}
                    </div>
                </div>
            )}
            {isOpen && (
                <Lightbox
                    mainSrc={imgArray[photoIndex]}
                    nextSrc={imgArray[(photoIndex + 1) % imgArray.length]}
                    prevSrc={
                        imgArray[
                            (photoIndex + imgArray.length - 1) % imgArray.length
                        ]
                    }
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex(
                            (photoIndex + imgArray.length - 1) % imgArray.length
                        )
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % imgArray.length)
                    }
                />
            )}
            {isThumbnailOpen && (
                <Lightbox
                    mainSrc={imgArray[thumbnailIndex]}
                    nextSrc={imgArray[(thumbnailIndex + 1) % imgArray.length]}
                    prevSrc={
                        imgArray[
                            (thumbnailIndex + imgArray.length - 1) %
                                imgArray.length
                        ]
                    }
                    onCloseRequest={() => setIsThumbnailOpen(false)}
                    onMovePrevRequest={() =>
                        setThumbnailIndex(
                            (thumbnailIndex + imgArray.length - 1) %
                                imgArray.length
                        )
                    }
                    onMoveNextRequest={() =>
                        setThumbnailIndex(
                            (thumbnailIndex + 1) % imgArray.length
                        )
                    }
                />
            )}
            <div className="bts-content-container">
                <h2>Videos</h2>
                <div className="bts-vids">
                    <AliceCarousel
                        mouseTracking
                        touchTracking
                        infinite
                        animationDuration={1400}
                        items={vidItems}
                        responsive={responsive}
                    />
                </div>
            </div>
            )
        </div>
    )
}

export default BehindTheScenes
