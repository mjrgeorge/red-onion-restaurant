import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const OrderSubmit = () => {
    return (
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
                <Card className="p-4 m-5" style={{width: '400px'}}>
                    <Form>
                        <Form.Group>
                            <h3>Edit Delivery To Details</h3>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Deliver to door" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="email" placeholder="107 Rd No8" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Flat, suit or floor" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Business Name" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Add delivery instructor" required/>
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