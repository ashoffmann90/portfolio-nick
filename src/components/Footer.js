import React from 'react'


function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-sections'>
                <p><i className="far fa-copyright fa-md"></i> 2021</p>
                <p>Website Created by:</p>
                <p>Andrew Hoffmann</p>
                <div className='social-icons'>
                    <a href='https://www.linkedin.com/in/ashoffmann90/'><i className="fab fa-linkedin fa-lg"></i></a>
                    <a href='https://github.com/ashoffmann90'><i className="fab fa-github fa-lg"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
