import React, { useContext } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MenuContext } from '../../App';
import bike from '../../images/bike.png';
import LocationMap from '../locationMap/LocationMap';
import NavBar from '../navBar/NavBar';

const Contact = () => {
    const [menuItems, setMenuItems, productCount, setProductCount, form, setForm, loggedInUser, setLoggedInUser, totalPrice, setTotalPrice, contact, setContact, rider, setRider] = useContext(MenuContext);
    
    let time = new Date();
    time = `${time.getHours()}:${time.getMinutes()}`;

    return (
        <div className="m-5">
            <NavBar/>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <Card className="p-4 m-5" style={{width: '400px'}}>
                        <LocationMap/>
                    </Card>
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-center">
                        <Card className="p-4 m-5" style={{width: '400px'}}>
                            <Link to="/cart">
                                <Card.Img className="pb-4 w-25" src={bike} alt="Logo"/>
                            </Link>
                            <Card.Header>
                                <ul>
                                    <li>{contact.address}</li>
                                    <p><small>{contact.name}</small></p>
                                    <br/>
                                    <li>Shop Address</li>
                                    <p><small>Husna Rahman Restaurant, Debiganj-5020</small></p>
                                </ul>
                                <Card.Body>
                                    <Card.Title>
                                        <h2>{time}</h2>
                                        <p><small>Estimated Delivery Time Half an Hour</small></p>
                                    </Card.Title>
                                    <Card.Text>
                                        <p><small>Your Rider</small></p>
                                        <h4>{rider}</h4>
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