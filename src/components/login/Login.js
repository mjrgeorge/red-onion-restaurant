import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import SignUp from './signUp/SignUp';
import SignIn from './signIn/SignIn';

firebase.initializeApp(firebaseConfig);

const Login = () => {

const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    success: false,
});

const handleBlur = (e) => {

    let isFieldValid = true;

    if(e.target.name === 'name'){
        const nameValid = /^[a-zA-Z]/.test(e.target.value);
        isFieldValid=nameValid;
    }
    if(e.target.name === 'email'){
        const emailValid = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(e.target.value);
        isFieldValid=emailValid;
    }
    if(e.target.name === 'password'){
        const passwordValid = /^[#\w@_-]{6,20}$/.test(e.target.value);
        isFieldValid=passwordValid;
    }
    if(isFieldValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name]=e.target.value;
        setUser(newUserInfo);
    }
};

const handleSingUp = (e) => {
if(user.password===user.confirmPassword){
    if(user.name && user.email && user.password && user.confirmPassword){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(response =>{
            const newUserInfo = {...user};
            newUserInfo.success = true;
            newUserInfo.error = "";
            setUser(newUserInfo);
        })
        .catch(error=>{
            const errorMessage = error.message;
            const newUserInfo = {...user};
            newUserInfo.success = false;
            newUserInfo.error = errorMessage;
            setUser(newUserInfo);
          });
    }
}else{
    alert("Don't Match Password");
};

e.preventDefault();
};

    return (
        <div>
            <SignUp user={user} handleBlur={handleBlur} handleSingUp={handleSingUp}/>
            <SignIn/>
        </div>
    );
};

export default Login;