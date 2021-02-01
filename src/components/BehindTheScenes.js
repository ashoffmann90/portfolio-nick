import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Lightbox from 'react-image-lightbox'
import HorizontalScroll from 'react-scroll-horizontal'

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

    const urlArray = [
        'https://youtu.be/sqKebZMCKN8',
        'https://youtu.be/sqKebZMCKN8',
        'https://youtu.be/sqKebZMCKN8',
        'https://youtu.be/sqKebZMCKN8',
        'https://youtu.be/sqKebZMCKN8',
        'https://youtu.be/sqKebZMCKN8',
        'https://youtu.be/sqKebZMCKN8',
        'https://youtu.be/sqKebZMCKN8',
    ]

    const [isOpen, setIsOpen] = useState(false)
    // const [vidIsOpen, setVidIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState()
    // const [urlIndex, setUrlIndex] = useState()
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const onClick = (e) => {
        setIsOpen(true)
        setPhotoIndex(thumbnailArray.indexOf(e.target.currentSrc))
    }

    // const onVidClick = (e) => {
    //     setVidIsOpen(true)
    //     setUrlIndex(urlArray.indexOf(e.target.currentSrc))
    // }

    const picsChild = { width: `15em`, height: `25em` }
    const picsParent = { marginLeft: '15px', width: `50em`, height: `15em` }
    const vidsChild = { width: `20em`, height: `50em` }
    const vidsParent = { marginLeft: '15px', width: `50em`, height: `25em` }

    window.addEventListener('resize', () => setWindowSize(window.innerWidth))

    return (
        <div className="bts-container">
            {windowSize <= 700 ? (
                <div className="bts-content-container">
                    <h2>Photos</h2>
                    <div className="bts-pics" style={picsParent}>
                        <HorizontalScroll>
                            {thumbnailArray.map((pic, index) => (
                                <div style={picsChild} key={index}>
                                    <img src={pic} alt="x" onClick={onClick} />
                                </div>
                            ))}
                        </HorizontalScroll>
                    </div>
                </div>
            ) : (
                <div className="bts-content-container">
                    <h2>Photos</h2>
                    <div className="bts-pics">
                        {thumbnailArray.map((pic, index) => (
                            <img
                                key={index}
                                src={pic}
                                alt="x"
                                onClick={onClick}
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

            {windowSize <= 700 ? (
                <div className="bts-content-container">
                    <h2>Videos</h2>
                    <div className="bts-vids" style={vidsParent}>
                        <HorizontalScroll>
                            {urlArray.map((vid, index) => (
                                <div style={vidsChild} key={index}>
                                    <ReactPlayer
                                        className="bts-vid"
                                        url={vid}
                                        controls={true}
                                        width="75%"
                                    />
                                </div>
                            ))}
                        </HorizontalScroll>
                    </div>
                </div>
            ) : (
                <div className="bts-content-container">
                    <h2>Videos</h2>
                    <div className="bts-vids">
                        {urlArray.map((vid, index) => (
                            <div>
                                <ReactPlayer
                                    className="bts-vid"
                                    key={index}
                                    url={vid}
                                    controls={true}
                                    width="75%"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* {vidIsOpen && (
                <Lightbox
                    mainSrc={urlArray[urlIndex]}
                    nextSrc={urlArray[(urlIndex + 1) % urlArray.length]}
                    prevSrc={
                        urlArray[
                            (urlIndex + urlArray.length - 1) % urlArray.length
                        ]
                    }
                    onCloseRequest={() => setVidIsOpen(false)}
                    onMovePrevRequest={() =>
                        setUrlIndex(
                            (urlIndex + urlArray.length - 1) % urlArray.length
                        )
                    }
                    onMoveNextRequest={() =>
                        setUrlIndex((urlIndex + 1) % urlArray.length)
                    }
                />
            )} */}
        </div>
    )
}

export default BehindTheScenes
