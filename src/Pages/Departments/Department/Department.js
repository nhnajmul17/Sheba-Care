import React from 'react';
import { Link } from 'react-router-dom';

const Department = (props) => {
    const { picture, name, about, _id } = props.department
    return (
        <div className='mt-5 mb-5'>
            <div className='container '>
                <div className='row '>
                    <div className='col-lg-4 col-sm-12'>
                        <img style={{
                            width: '80px',
                            height: '100px'
                        }} src={picture} alt="" />

                    </div>
                    <div className='col-lg-8 col-sm-12'>
                        <h1> Department of: {name}  </h1>
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

export default Department;