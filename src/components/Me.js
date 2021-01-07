import React from 'react'

function Me() {
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
        <div className='me'>
            <div className='bio'>
                <h2>Bio</h2>
                <p>
                Nick discovered his passion for film during his freshman year of high school in his hometown, Santa Barbara. It all began with a camcorder his mom gave him for his birthday and since then, he hasn’t stopped filming. He currently resides in Los Angeles where he graduated from California State University Northridge with a degree in Cinema and Television Arts. After graduating, he spent the first two years working as a P.A. for various reality TV Shows. Shortly after that, he transitioned into the Steadicam operator that he is today!
                </p>
                <p>
                Nick’s work as an operator has been featured on Jimmy Fallon, Stephen Colbert, Good Morning America, the Ellen Show and The Today Show. He is very familiar and versatile with all of the leading industry cameras and lenses and can adapt to each set he moves on to. He looks forward to continually growing in the industry and building relationships with each new production he meets along the way! Feel free to navigate towards the “Contact” page for any inquiries to get your project started!
                </p>
            </div>

            <div className='vertical-line'>

            </div>

            <div className='gear'>
                <h2>His Steadicam Kit:</h2>
                <ul>
                {gearList.map(gear => 
                    <li>{gear}</li>    
                )}
                </ul>
            </div>
            
        </div>
    )
}

export default Me
