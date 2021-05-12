import React, { useState, useRef } from 'react'
import VideoModal from './VideoModal'
import ReactPlayer from 'react-player'

function Home() {
    // Specific Order
    const gearList = [
        'GPI Pro Sled (Cine Live)',
        'Tiffen Exovest',
        'Sachtler/Artemis Arm (57lbs Max Load)',
        'SmallHD 703 Ultrabright Monitor',
    ]

    const gearList2 = [
        'Gold Mount Batteries (x6)',
        'Sony L-Series Batteries (x4)',
        'Decimator MD-LX HDMI/SDI Converter',
        'Misc. Video/Power Cables',
    ]

    const [modal, setModal] = useState(false)
    const [pause, setPause] = useState(false)

    const vidRef = useRef(null)
    const pauseVid = () => {
        vidRef.current.pause()
    }
    const playVid = () => {
        vidRef.current.play()
    }

    const modalHandler = (e) => {
        setModal(!modal)
        pause ? playVid() : pauseVid()
        setPause(!pause)
    }

    return (
        <>
            <VideoModal show={modal} pause={pause} modalHandler={modalHandler}>
                <p>
                    <i
                        className="fas fa-window-close fa-lg"
                        onClick={modalHandler}
                    ></i>
                </p>
                <ReactPlayer
                    key="nickreel"
                    className="react-player-home"
                    url={'https://youtu.be/DiTD--ceH_U'}
                    controls={true}
                    playing={pause ? true : false}
                    width="100%"
                    height="100%"
                    volume={1}
                    muted={false}
                />
            </VideoModal>
            <div className="player-wrapper-home">
                <div className="overlay-box">
                    <h2>Play Reel</h2>
                    <button className="reel-button" onClick={modalHandler}>
                        Watch
                    </button>
                </div>

                <video ref={vidRef} playsInline autoPlay muted loop id="bgvid">
                    <source
                        src="https://nick-portfolio.s3-us-west-2.amazonaws.com/Website+Loop++1.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            <div className="home-container">
                <div className="me">
                    <div className="portrait-margin">
                        <div className="self-portrait">
                            <img
                                src="https://nick-portfolio.s3-us-west-2.amazonaws.com/Nick+Profile+Pic.jpg"
                                alt="Self portrait of Nick Almanza"
                            />
                        </div>
                    </div>

                    <div className="bio">
                        <h2>Bio</h2>

                        <p>
                            Nick currently resides in Los Angeles where he
                            graduated from California State University
                            Northridge with a degree in Cinema and Television
                            Arts.
                            <br />
                            <br />
                            His work as an operator has been featured on Jimmy
                            Fallon, Stephen Colbert, Good Morning America, the
                            Ellen Show and The Today Show. He looks forward to
                            building relationships with each new production he
                            meets along the way and the talented individuals
                            that are a part of them.
                            <br />
                            <br />
                            Nick is available to work narratives, commercials,
                            or music videos and would be happy to answer any of
                            your questions. Feel free to navigate towards the
                            “Contact” Page for rates, availability or any
                            inquiries to get your project started!
                        </p>
                    </div>
                </div>

                <div className="gear">
                    <h2>Steadicam Kit:</h2>
                    <div className="gear-list-flex">
                        <ul>
                            {gearList.map((gear, index) => (
                                <li key={index}>{gear}</li>
                            ))}
                        </ul>
                        <ul>
                            {gearList2.map((gear, index) => (
                                <li key={index}>{gear}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
