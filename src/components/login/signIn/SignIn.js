import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import logo from '../../../images/logo.png';

const SignIn = () => {
    return (
        <div className="d-flex justify-content-center">
            <Card className="p-4 m-5" style={{width: '400px'}}>
            <Card.Img className="pb-4" src={logo} alt=""/>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" name="email" placeholder="Email" required/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control type="password" name="password" placeholder="Password" required/>
                    </Form.Group>
                    <Button variant="danger" block type="submit">Sign In</Button>
                    <Button className="text-danger" block variant="link">Create an account</Button>
                </Form>
            </Card>
        </div>
    );
};

export default SignIn;