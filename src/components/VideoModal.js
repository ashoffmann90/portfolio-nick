import React from 'react'

function VideoModal(props) {
    const {children} = props

    return (
        <div className='modal'>
            {children}
        </div>
    )
}

export default VideoModal
