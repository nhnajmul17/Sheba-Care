import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../Images/slide1.jpg'
import slide2 from '../../../Images/slide2.jpg'
import slide3 from '../../../Images/slide3.jpg'
import slide4 from '../../../Images/slide4.jpg'

const Banner = () => {
    return (
        <div>

            <Carousel fade>
                <Carousel.Item interval={1500}>
                    <Carousel.Caption>
                        <h1 className='fs-1 text-dark'>We care about your Health</h1>
                        <p className='text-dark'>Best health care with efficient cost is the main focus of our hospital.</p>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100 h-100"
                        src={slide1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <Carousel.Caption>
                        <h1 className='fs-1'>Correct diagnosis is half the success.</h1>
                        <p>High professional doctors level. All specialists have extensive practical experience and training courses.</p>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100 h-100"
                        src={slide2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <Carousel.Caption>
                        <h1 className='fs-1'>The Best Surgeons</h1>
                        <p>More than 3,300 Physicians, scientists and researchers.</p>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100 h-100"
                        src={slide3}
                        alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <Carousel.Caption>
                        <h1 className='fs-1 text-dark'>We care and protect your health</h1>
                        <p className='text-dark'>Only modern and best equipment advanced medical technologies and innovative diagnosis.</p>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100 h-100"
                        src={slide4}
                        alt="Fourth slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;