import React from 'react';
import { Button } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);



    return (
        <div>
            <p>Or</p>
            <Button onClick={handleFbSignIn} variant="success" block>Facebook Sign In</Button>
        </div>
    );
};

export default OthersSignIn;