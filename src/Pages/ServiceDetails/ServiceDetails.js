import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const ServiceDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => {
                setItem(data.find(itm => itm._id == id))
            })
    }, [])
    return (
        <div className='mt-5 mb-5'>
            <div className='container '>
                <div className='row '>
                    <div className='col-lg-4 col-sm-12'>
                        <img style={{
                            width: '150px',
                            height: '200px'
                        }} src={item.picture} alt="" />

                    </div>
                    <div className='col-lg-8 col-sm-12'>
                        <h1> Department of: {item.name}  </h1><br />
                        <h5 className='fw-bold'>{item.doctor}</h5>
                        <p >{item.speciality}</p>


                        <p className='text-secondary'>{item.about}</p>
                        <h6 className='mb-5'>Doctor's Fees: {item.price}</h6>
                        <Link to={`/appointment/${item._id}`}>
                            <button className='btn btn-secondary mb-5'>Get Appointment</button>
                        </Link>
                    </div>

                </div>

            </div>
            <Footer></Footer>

        </div>

    );
};

export default ServiceDetails;