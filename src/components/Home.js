import React from 'react'
import ReactPlayer from "react-player"

function Home() {
    return (
        <div>
            <div className='player-wrapper'>
            <ReactPlayer key='nickreel' className='react-player' url={'https://youtu.be/DiTD--ceH_U'} controls={true} width='100%' height='100%' />
            </div>
        </div>
    )
}

export default Home
