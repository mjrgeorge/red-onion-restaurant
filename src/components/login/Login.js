import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import SignUp from './signUp/SignUp';
import SignIn from './signIn/SignIn';
import { MenuContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import NavBar from '../navBar/NavBar';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [, , , , form, , , setLoggedInUser] = useContext(MenuContext);

const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
    password: '',
    confirmPassword: '',
    error: '',
    success: false,
});

let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

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
        .then(result =>{
            const newUserInfo = {...user};
            newUserInfo.success = true;
            newUserInfo.error = "";
            setUser(newUserInfo);
            updateProfile(user.name);
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

const handleSignIn = (e)=> {
    if(user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(result =>{
            const newUserInfo = {...user};
            newUserInfo.success = true;
            newUserInfo.error = "";
            newUserInfo.name = result.user.displayName;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo);
            history.replace(from);
        })
        .catch(error=>{
            const errorMessage = error.message;
            const newUserInfo = {...user};
            newUserInfo.success = false;
            newUserInfo.error = errorMessage;
            setUser(newUserInfo);
          });
    }
    e.preventDefault();
};

const updateProfile = (name)=>{
    const user = firebase.auth().currentUser;
    user.updateProfile({
    displayName: name
    })
    .then(() =>{

    })
    .catch(error =>{
        console.log(error);
    });
};

//FACEBOOK SIGN IN METHOD:
    const handleFbSignIn = ()=> {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider)
        .then(function(result) {
            const user = result.user;
            const signedInUser = {
                isSignedIn: false,
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            };
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
          })
          .catch(error=>{
            const errorMessage = error.message;
            const newUserInfo = {...user};
            newUserInfo.success = false;
            newUserInfo.error = errorMessage;
            setUser(newUserInfo);
          });
    };
    
//GOOGLE SIGN IN METHOD:
const handleGoogleSign =()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
    .then(function(result) {
        const user = result.user;
        const signedInUser = {
            isSignedIn: false,
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(error=>{
        const errorMessage = error.message;
        const newUserInfo = {...user};
        newUserInfo.success = false;
        newUserInfo.error = errorMessage;
        setUser(newUserInfo);
      });
};

    return (
        <div className="m-5">
            <NavBar/>
            {form===false && <SignUp user={user} handleBlur={handleBlur} handleSingUp={handleSingUp} handleFbSignIn={handleFbSignIn} handleGoogleSign={handleGoogleSign}/>}
            {form===true && <SignIn user={user} handleBlur={handleBlur} handleSignIn={handleSignIn} handleFbSignIn={handleFbSignIn} handleGoogleSign={handleGoogleSign}/>}
        </div>
    );
};

export default Login;