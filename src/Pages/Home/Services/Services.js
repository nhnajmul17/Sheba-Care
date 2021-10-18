import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 4)))
    }, [])

    return (
        <div id='department' className='mt-4'>
            <h2 className='text-info'>Departments</h2>
            <hr />
            <div className='p-4'>
                <Row xs={1} md={4} className="g-4">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </Row>
                <Link to='/departments'>
                    <button className='btn btn-secondary mt-3'>See All Departments</button>
                </Link>

            </div>
        </div>
    );
};

export default Services;