import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Feacture from './Feature/Feacture';


const Features = () => {
    const [features, setFeatures] = useState([])
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setFeatures(data.slice(8, 13)))
    }, [])
    return (
        <div id='features' className='mt-4'>
            <h2 className='text-info'>Features</h2>
            <hr />
            <div className='p-5'>
                <Row xs={1} md={3} className="g-4">
                    {
                        features.map(feature => <Feacture
                            key={feature._id}
                            feature={feature}
                        ></Feacture>)
                    }

                </Row>
            </div>


        </div>
    );
};

export default Features;