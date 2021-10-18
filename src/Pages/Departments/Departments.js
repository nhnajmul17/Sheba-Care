import React, { useEffect, useState } from 'react';
import Department from './Department/Department';

const Departments = () => {

    const [departments, setDepartments] = useState([])
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setDepartments(data.slice(0, 8)))
    }, [])
    return (
        <div className='mt-3'>
            <h1 className='text-success'> Departments </h1>

            <div className='p-5'>
                {
                    departments.map(department => <Department
                        key={department._id}
                        department={department}
                    ></Department>)
                }
            </div>
        </div>
    );
};

export default Departments;