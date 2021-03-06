import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const { googleSignIn, githubSignIn, handleEmail, handlePassword, handleLogin, error } = useAuth()
    return (
        <div>
            <div style={{ height: '100vh' }}>
                <h2>Please Login</h2>
                <form action="">
                    <label htmlFor="">Email</label><br />
                    <input onBlur={handleEmail} type="email" name="" id="" /><br />
                    <label htmlFor="">Password</label><br />
                    <input onBlur={handlePassword} type="password" name="" id="" /><br /><br />
                    <input onClick={handleLogin} type="submit" value="Login" />

                </form>
                <br /><br />
                <p>New to this Website? <Link to='/signup'>Register Now </Link></p>
                <p>Or SignIn with</p>

                <button onClick={googleSignIn} className='btn btn-warning fw-bold me-3'> <FontAwesomeIcon cursor='' icon={faGoogle} className='text-danger pe-auto fs-4 me-3' />Google</button>
                <button onClick={githubSignIn} className='btn btn-warning fw-bold me-3'> <FontAwesomeIcon cursor='' icon={faGithub} className='text-secondary pe-auto fs-4 me-3' />Github</button>
                <button className='btn btn-warning fw-bold me-3'> <FontAwesomeIcon cursor='' icon={faFacebook} className='text-primary pe-auto fs-4 me-3' />Facebook</button>

                <p className='text-danger'>{error}</p>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;