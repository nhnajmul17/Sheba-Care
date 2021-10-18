import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth()
    return (
        <div>
            <button onClick={googleSignIn}>Google</button>
        </div>
    );
};

export default Login;