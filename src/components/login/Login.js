import React from 'react';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';

const Login = () => {
    return (
        <div>
            <SignUp/>
            <SignIn/>
        </div>
    );
};

export default Login;