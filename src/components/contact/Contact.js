import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import bike from '../../images/bike.png';
import NavBar from '../navBar/NavBar';

const Contact = () => {
    return (
        <div className="m-5">
            <NavBar/>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <Card className="p-4 m-5" style={{width: '400px'}}>
                        
                    </Card>
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-center">
                        <Card className="p-4 m-5" style={{width: '400px'}}>
                            <Card.Img className="pb-4 w-25" src={bike} alt="Logo"/>
                            <Card.Header>
                                <ul>
                                    <li>Your Location</li>
                                    <p><small>107 Rd Restaurant 8</small></p>
                                    <br/>
                                    <li>Shop Address</li>
                                    <p><small>Gulshan Piaza Restaurant</small></p>
                                </ul>
                                <Card.Body>
                                    <Card.Title>
                                        <h2>09:30 PM</h2>
                                        <p><small>Estimated Delivery Time</small></p>
                                    </Card.Title>
                                    <Card.Text>
                                        <p><small>Your Rider</small></p>
                                        <h4>Hamim</h4>
                                    </Card.Text>
                                </Card.Body>
                            </Card.Header>
                            <Button variant="danger" block type="submit">Contact</Button>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;