import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import useAuth from '../../../Hooks/useAuth';

const SignUp = () => {
    const { googleSignIn, githubSignIn, handleEmail, handlePassword, handleRegister, error, handleName } = useAuth()

    return (
        <div>
            <div style={{ height: '100vh' }}>
                <h2>Create a new Account</h2>
                <form action="">
                    <label htmlFor="">Name</label><br />
                    <input onBlur={handleName} type="text" name="" id="" placeholder='Your Name' /><br />
                    <label htmlFor="">Email</label><br />
                    <input onBlur={handleEmail} type="email" name="" id="" placeholder='Your Email' /><br />
                    <label htmlFor="">Password</label><br />
                    <input onBlur={handlePassword} type="password" name="" id="" placeholder='Your Password' /><br /><br />
                    <input onClick={handleRegister} type="submit" value="Register" />

                </form>
                <br /><br />
                <p>   Already have an account? <Link to='/login'>Login Now </Link></p>
                <p>Or SignIn with</p>

                <button onClick={googleSignIn} className='btn btn-warning fw-bold me-3'> <FontAwesomeIcon cursor='' icon={faGoogle} className='text-danger pe-auto fs-4 me-3' />Google</button>
                <button onClick={githubSignIn} className='btn btn-warning fw-bold me-3'> <FontAwesomeIcon cursor='' icon={faGithub} className='text-secondary pe-auto fs-4 me-3' />Github</button>
                <button className='btn btn-warning fw-bold me-3'> <FontAwesomeIcon cursor='' icon={faFacebook} className='text-primary pe-auto fs-4 me-3' />Facebook</button>

                <p className='text-danger'>{error}</p>
            </div>

        </div >
    );
};

export default SignUp;