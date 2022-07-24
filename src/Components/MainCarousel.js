import React from "react";

import Carousel from 'react-bootstrap/Carousel';

class MainCarousel extends React.Component {
    render() {
      return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.pexels.com/photo/people-discussing-about-investments-8369830/"
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/1036637/pexels-photo-1036637.jpeg?cs=srgb&dl=pexels-moose-photos-1036637.jpg&fm=jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/844125/pexels-photo-844125.jpeg?cs=srgb&dl=pexels-worldspectrum-844125.jpg&fm=jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?cs=srgb&dl=pexels-ivan-babydov-7788009.jpg&fm=jpg"
                alt="Fourth slide"
                />
                <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      );
    }
  }
  
  export default MainCarousel;