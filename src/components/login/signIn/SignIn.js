import React, { useContext } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MenuContext } from '../../../App';
import logo from '../../../images/logo.png';

const SignIn = (props) => {
    const [, , , , form, setForm] = useContext(MenuContext);
    const {handleBlur, handleSignIn, handleFbSignIn, handleGoogleSign, user} = props;
    return (
        <div className="d-flex justify-content-center">
            <Card className="p-4 m-5" style={{width: '400px'}}>
            <Link to="/home">
                <Card.Img className="pb-4" src={logo} alt="Logo"/>
            </Link>
                <Form onSubmit={handleSignIn}>
                    <Form.Group>
                        <Form.Control onBlur={handleBlur} type="email" name="email" placeholder="Email" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control onBlur={handleBlur} type="password" name="password" placeholder="Password" required/>
                    </Form.Group>
                    <Button variant="danger" block type="submit">Sign In</Button>
                    {user.success&&<p className="text-success text-center mt-4">User Logged Successfully</p>}
                    <p className="text-danger text-center mt-4">{user.error}</p>
                    <Button onClick={()=>setForm(!form)} block variant="link">Create an account</Button>
                </Form>
            <div>
            <p className="text-dark text-center">Or</p>
                <Button onClick={handleFbSignIn} variant="success" block>Facebook Sign In</Button>
                <Button onClick={handleGoogleSign} variant="success" block>Google Sign In</Button>
            </div>
            </Card>
        </div>
    );
};

export default SignIn;
