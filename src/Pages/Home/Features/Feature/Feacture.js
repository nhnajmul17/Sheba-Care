import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Feature.css'

const Feacture = (props) => {
    const { picture, name, about } = props.feature
    return (
        <div>
            <Col>

                <Card className="bg-dark text-white ">
                    <div className='hov'>

                        <div className='imgbg'>
                            <Card.Img style={{ height: '250px' }} src={picture} alt="Card image" />

                        </div>


                        <Card.ImgOverlay>
                            <div className='textbg'>
                                <Card.Title className='text-white'>{name}</Card.Title>

                                <Card.Text>{about}</Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </div>

                </Card>

            </Col>
        </div>
    );
};

export default Feacture;