import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Feacture = (props) => {
    const { picture, name, about } = props.feature
    return (
        <div>
            <Col>
                <Card className="bg-dark text-white ">

                    <Card.Img style={{ height: '250px' }} src={picture} alt="Card image" />

                    <Card.ImgOverlay>
                        <Card.Title className='text-white'>{name}</Card.Title>
                        <Card.Text>{about}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </div>
    );
};

export default Feacture;