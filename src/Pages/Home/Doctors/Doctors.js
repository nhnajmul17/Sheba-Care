import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setDoctors(data.slice(13, 18)))
    }, [])
    return (
        <div className='mt-5'>
            <h1 className='text-info'>Meet Our Experienced Doctors</h1>
            <div className='p-5'>
                <Row xs={1} md={2} className="g-4">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor._id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Doctors;