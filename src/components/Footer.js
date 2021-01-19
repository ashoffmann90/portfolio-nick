import React from 'react'


function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-sections'>
                <h2>Nick Almanza</h2>
                <p>Filmmaker / Steadycam Operator</p>
                <p>Los Angelos, California</p>
                <div className='social-icons'>
                    <a href='https://www.instagram.com/nick__almanza'><i class="fab fa-instagram fa-2x"></i></a>
                </div>
            </div>

            <div className='footer-sections'>
                <h2>Website Created by:</h2>
                <p>Andrew Hoffmann</p>
                <p>Portland, Oregon</p>
                <div className='social-icons'>
                    <a href='https://www.linkedin.com/in/ashoffmann90/'><i class="fab fa-linkedin fa-2x"></i></a>
                    <a href='https://github.com/ashoffmann90'><i class="fab fa-github fa-2x"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
