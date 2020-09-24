import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const OrderSubmit = () => {
        const { register, handleSubmit, watch, errors } = useForm();
        const onSubmit = data => console.log(data);

        return (
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <Card className="p-4 m-5" style={{width: '400px'}}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <h3>Edit Delivery To Details</h3>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="name" ref={register({ required: true })}  type="text" placeholder="Name"/>
                                {errors.name && <span className="text-danger">Name is required</span>}
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="email" ref={register({ required: true })}  type="text" placeholder="Email"/>
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
                            <h5>From Gulshan Piaza Restaurant</h5>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p><small>Arriving in 20-30 Min</small></p>
                            <p><small>107 Rd No 8</small></p>
                        </Card.Text>
                    <Card.Footer>
                        <h5>Sub Total :$273</h5>
                        <p>Tax :$10.89</p>
                        <p>Delivery Fee :$5</p>
                        <h4>Total :$317</h4>
                    </Card.Footer>
                    <Button variant="danger" block>Proceed Order</Button>
                    </Card.Body>
                </Card>
                </div>
            </div>
        );
};

export default OrderSubmit;
 