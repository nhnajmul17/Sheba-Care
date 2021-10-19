import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import OneDoctor from '../OneDoctor/OneDoctor';

const AllDoctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setDoctors(data.slice(13, 21)))
    }, [])
    return (
        <div>
            <h1 className='fw-bold text-info'> Our Doctors</h1>
            <div className='p-5'>
                {
                    doctors.map(doctor => <OneDoctor
                        key={doctor._id}
                        doctor={doctor}
                    ></OneDoctor>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllDoctors;