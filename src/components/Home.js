import React from 'react'
import ReactPlayer from "react-player"

function Home() {
    const gearList = [
        'GPI Pro Sled (Cine Live)',
        'Tiffen Exovest',
        'Sachtler/Artemis Arm (57lbs Max Load)',
        'SmallHD 703 Ultrabright Monitor',
        'Gold Mount Batteries (6)',
        'Decimator MD-LX HDMI/SDI Converter',
        'Misc. Video/Power Cables',
        'Sony L-Series Batteries (x4)',
    ]


    return (
        <>
            <div className='player-wrapper-home'>
                <ReactPlayer key='nickreel' className='react-player-home' url={'https://youtu.be/DiTD--ceH_U'} controls={true} playing={true} width='100%' height='100%' volume='null' muted={false} />
            </div>

        <div className='home-container'>

            <div className='me'>

                <div className='portrait-margin'>
                    <div className='self-portrait'>
                        <img src='https://nick-portfolio.s3-us-west-2.amazonaws.com/Self+Portrait.jpg' alt='Self portrait of Nick Almanza'/>
                    </div>
                </div>


                <div className='bio'>
                <h2>Bio</h2>

                    <p>
                        Nick currently resides in Los Angeles where he graduated from California State University Northridge with a degree in Cinema and Television Arts.
                    </p>
                    <p>
                        His work as an operator has been featured on Jimmy Fallon, Stephen Colbert, Good Morning America, the Ellen Show and The Today Show. He is very familiar and versatile with all of the leading industry cameras and lenses and can adapt to each set he moves on to. 
                    </p>
                    <p>
                        He looks forward to continually growing in the industry and building relationships with each new production he meets along the way! Feel free to navigate towards the “Contact” page for any inquiries to get your project started!
                    </p>
                </div>
            </div>

            <div className='gear'>
                <h2>Steadicam Kit:</h2>
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
