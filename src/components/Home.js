import React from 'react'
import ReactPlayer from "react-player"

import portrait from '../assets/nick-bts-images/Self Portrait.jpg'

function Home() {
    const gearList = [
        'GPI Pro Sled (Cine Live)',
        'Tiffen Exovest',
        'Sachtler/Artemis Arm (57lbs Max Load)',
        'SmallHD 703 Ultrabright Monitor',
        'Gold Mount Batteries (6)',
        'Decimator MD-LX HDMI/SDI Converter',
        'Misc. Video/Power Cables',
    ]


    return (
        <>
            <div className='player-wrapper-home'>
                <ReactPlayer key='nickreel' className='react-player-home' url={'https://youtu.be/DiTD--ceH_U'} controls={true} playing={true} width='100%' height='100%' />
            </div>

        <div className='home-container'>

            <div className='me'>

                <div className='portrait-margin'>
                    <div className='self-portrait'>
                        <img src={portrait} alt='Self portrait of Nick Almanza'/>
                    </div>
                </div>


                <div className='bio'>
                <h2>Bio</h2>

                    <p>
                    Nick discovered his passion for film during his freshman year of high school in his hometown, Santa Barbara. It all began with a camcorder his mom gave him for his birthday and since then, he hasn’t stopped filming. He currently resides in Los Angeles where he graduated from California State University Northridge with a degree in Cinema and Television Arts.
                    </p>
                    <p>
                    Nick’s work as an operator has been featured on Jimmy Fallon, Stephen Colbert, Good Morning America, the Ellen Show and The Today Show. He is very familiar and versatile with all of the leading industry cameras and lenses and can adapt to each set he moves on to. He looks forward to continually growing in the industry and building relationships with each new production he meets along the way! Feel free to navigate towards the “Contact” page for any inquiries to get your project started!
                    </p>
                </div>
            </div>

            <div className='gear'>
                <h2>His Steadicam Kit:</h2>
                <ul>
                {gearList.map((gear, index) => 
                    <li key={index}>{gear}</li>    
                )}
                </ul>
            </div>
        </div>
        </>
    )
}

export default Home
