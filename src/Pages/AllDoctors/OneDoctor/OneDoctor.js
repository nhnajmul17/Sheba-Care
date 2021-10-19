import React from 'react';
import { Link } from 'react-router-dom';

const OneDoctor = (props) => {
    const { doctor, picture, name, speciality, about, _id } = props.doctor;
    return (
        <div className='mt-5 mb-5'>
            <div className='container '>
                <div className='row '>
                    <div className='col-lg-4 col-sm-12'>
                        <img src={picture} alt="" />

                    </div>
                    <div className='col-lg-8 col-sm-12'>
                        <h1>{doctor}</h1>
                        <h3>{speciality}</h3>
                        <h5> Department of: {name}  </h5>
                        <p className='text-secondary'>{about}</p>
                        <Link to={`/appointment/${_id}`}>
                            <button className='btn btn-secondary'>Get Appointment</button>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default OneDoctor;