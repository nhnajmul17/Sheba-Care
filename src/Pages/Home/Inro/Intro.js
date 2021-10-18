import React from 'react';
import img from '../../../Images/doctor.png'
const Intro = () => {
    return (
        <div className='mt-5 container'>
            <div className='row'>
                <div className='col-lg-8 col-sm-12'>
                    <h2 className='fs-1'>Welcome to <span className='text-success'>Sheba</span> <span className='header'>Care</span> </h2>
                    <p className='text-secondary'>Sheba Care is a private hospital established with a particularly strong presence of doctors in   Bangladesh. Our first facility was established with approximately 50 operational beds. The hospital now features over 500 operational beds through a combination of greenfield projects and acquisitions. We believe that the "<span className='text-success'>Sheba</span> <span className='header'>Care</span>" brand is strongly associated with our mission to deliver high-quality, affordable healthcare services to the broader population by leveraging our economies of scale, skilled doctors, and an efficient business model.</p>
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <img style={{
                        width: '400px',
                        height: '350px'
                    }} src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Intro;