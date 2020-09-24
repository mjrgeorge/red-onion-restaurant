import React from 'react';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

const Login = () => {



    return (
        <div>
            <SignUp/>
            <SignIn/>
        </div>
    );
};

export default Login;