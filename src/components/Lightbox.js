import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
 
const images = [
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/001.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/002.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/003.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/005.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/006.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/007.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/008.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/009.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/010.jpg',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/011.JPG',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/012.JPG',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/013.JPG',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/014.JPG',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/015.JPG',
    'https://nick-portfolio.s3-us-west-2.amazonaws.com/IMG_5225.jpeg'
]
 
export default class ReactLightbox extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}