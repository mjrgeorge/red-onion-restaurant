import React, { useContext } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { MenuContext } from '../../../App';
import logo from '../../../images/logo.png';

const SignIn = (props) => {
    const [menuItems, setMenuItems, productCount, setProductCount, form, setForm] = useContext(MenuContext);
    const {handleBlur, handleSignIn, user} = props;
    return (
        <div className="d-flex justify-content-center">
            <Card className="p-4 m-5" style={{width: '400px'}}>
            <Card.Img className="pb-4" src={logo} alt=""/>
                <Form onSubmit={handleSignIn}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control onBlur={handleBlur}type="email" name="email" placeholder="Email" required/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control onBlur={handleBlur}type="password" name="password" placeholder="Password" required/>
                    </Form.Group>
                    <Button variant="danger" block type="submit">Sign In</Button>
                    {user.success&&<p className="text-success text-center mt-4">User Logged Successfully</p>}
                    <p className="text-danger text-center mt-4">{user.error}</p>
                    <Button onClick={()=>setForm(!form)} block variant="link">Create an account</Button>
                </Form>
            </Card>
        </div>
    );
};

export default SignIn;
