import React from 'react'
import ReactPlayer from "react-player"

function Videos() {
    const videos = [
        {
            artist:'Saint Jhn',
            url:'https://youtu.be/pDsas5WHPXk'
        },{
            artist:'Amber Riley',
            url:'https://youtu.be/q2mdhTCZch8'
        },{
            artist:'Jojo',
            url:'https://youtu.be/ZlAayK06ofY'
        },{
            artist:'Leslie Odom Jr.',
            url:'https://youtu.be/weImyhyu_vE'
        },{
            artist:'Dirty Honey',
            url:'https://youtu.be/w2lro88_-kM'
        },{
            artist:'Saint Jhn',
            url:'https://youtu.be/qbfQgK0tjTg'
        },{
            artist:'Say Grace',
            url:'https://youtu.be/5WnU4G4LL3E'
        },{
            artist:'Rudi',
            url:'https://youtu.be/r224Mu2W5jQ'
        },{
            artist:'Almighty Suspect',
            url:'https://youtu.be/--bAW6ZFxuI'
        },{
            artist:'Symba',
            url:'https://youtu.be/djpDAHiaoy0'
        },{
            artist:'Mack Keane',
            url:'https://youtu.be/yA_MX6aUq7o'
        },
    ]

    return (
        <div className='player-wrapper'>
            {videos.map((video, index) =>
                <ReactPlayer 
                className='react-player'
                url={video.url} 
                key={index} 
                controls={true} 
                volume='null' 
                muted={true}
                width='30%'
                height='30vh'
                 />
            )}
        </div>
    )
}

export default Videos