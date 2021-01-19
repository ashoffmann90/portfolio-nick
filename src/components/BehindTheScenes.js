import React from 'react'
import ReactPlayer from 'react-player'

function BehindTheScenes() {

    const imgArray = [
        {
            id: 1, 
            src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/001.jpg'
        },{
            id: 2, 
            src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/002.jpg'
        },{
            id: 3, 
            src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/003.jpg'
        },{
            id: 5, 
            src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/005.jpg'
        },{
            id: 6, 
            src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/006.jpg'
        },{
            id: 7, 
            src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/007.jpg'
        },{
            id: 8, 
            src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/008.jpg'
        },{
            id: 9, 
            src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/009.jpg'
        },{
            id: 10, 
            src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/010.jpg'
        },{
            id: 11, 
            src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/011.JPG'
        },{
            id: 12, 
            src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/012.JPG'
        },{
            id: 13, 
            src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/013.JPG'
        },{
            id: 14, 
            src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/014.JPG'
        },{
            id: 15, 
            src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/015.JPG'
        },{
            id: 16, 
            src: 'https://nick-portfolio.s3-us-west-2.amazonaws.com/IMG_5225.jpeg'
        }
    ]

    return (
        <div className='bts-container'>
            <div className='bts-content-container'>
                <h2>Photos</h2>
                <div className='bts-pics'>
                    {imgArray.map(pic => 
                        <img src={pic.src} alt='x'/>
                        )}
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
