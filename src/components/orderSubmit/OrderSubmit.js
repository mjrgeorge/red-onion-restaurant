import React, { useContext } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { MenuContext } from '../../App';
import NavBar from '../navBar/NavBar';

const OrderSubmit = () => {

    let [menuItems, setMenuItems, productCount, setProductCount, form, setForm, loggedInUser, setLoggedInUser, totalPrice, setTotalPrice, contact, setContact] = useContext(MenuContext);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => setContact(data);

    const history = useHistory();
    const handleContact = ()=> {
        history.push("/contact");
    };

    totalPrice = parseFloat(totalPrice);

    let tax = (totalPrice*.20).toFixed(2);
    tax = parseFloat(tax);
    
    let shippingCost=5;
    if(totalPrice>=50){
        shippingCost=3;
    }

    let payableAmount = Math.round(totalPrice+tax+shippingCost);

    return (
        <div className="m-5">
            <NavBar/>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <Card className="p-4 m-5" style={{width: '400px'}}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <h3>Edit Delivery To Details</h3>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="name" defaultValue={loggedInUser.name} ref={register({ required: true })}  type="text" placeholder="Name"/>
                                {errors.name && <span className="text-danger">Name is required</span>}
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  type="text" placeholder="Email"/>
                                {errors.email && <span className="text-danger">Email is required</span>}
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="phone" ref={register({ required: true })}  type="text" placeholder="Phone Number"/>
                                {errors.phone && <span className="text-danger">Phone number is required</span>}
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="address" ref={register({ required: true })}  type="text" placeholder="Address"/>
                                {errors.address && <span className="text-danger">Address is required</span>}
                            </Form.Group>
                            <Button variant="danger" block type="submit">Save & Continue</Button>
                        </Form>
                    </Card>
                </div>
                <div className="col-md-6">
                <Card className="p-4 m-5" style={{width: '400px'}}>
                    <Card.Header>
                            <h5>From Husna Rahman Restaurant</h5>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p><small>Arriving in 20-30 Minutes</small></p>
                            <p><small>Debiganj-5020</small></p>
                        </Card.Text>
                    <Card.Footer>
                        <h5>Sub Total :${totalPrice}</h5>
                        <p>Tax :${tax}</p>
                        <p>Delivery Fee :${shippingCost}</p>
                        <h4>Total :${payableAmount}</h4>
                    </Card.Footer>
                    <Button onClick={handleContact} variant="danger" block>Proceed Order</Button>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    );
};

export default OrderSubmit;
 