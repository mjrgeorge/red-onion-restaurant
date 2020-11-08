import React from 'react';
import {Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image1 from '../../images/img1.png';
import Image2 from '../../images/img2.png';
import Image3 from '../../images/img3.png';
import Icon1 from '../../images/icon1.png';
import Icon2 from '../../images/icon2.png';
import Icon3 from '../../images/icon3.png';

const Facilities = () => {
    return (
        <div>
            <div className="ml-5 text-dark w-50">
                <h2>Why you choose us</h2>
                <p>Barton waited twenty always repair in within we do. An delight offending curiosity my is dash woods at. Boy prosperous increasing surrounded.</p>
            </div>
            <CardDeck className="m-4">
                <Card>
                    <Card.Img variant="top" src={Image1}/>
                    <Card.Body>
                        <Card.Title><img src={Icon1} alt="Icon"/> Fast Delivery </Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Link to="#" className="ml-4 mb-4">
                        See more
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></svg>
                    </Link>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Image2}/>
                    <Card.Body>
                        <Card.Title><img src={Icon1} alt="Icon"/> A Good Auto Responder </Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Link to="#" className="ml-4 mb-4">
                        See more
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></svg>
                    </Link>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Image3}/>
                    <Card.Body>
                    <Card.Title><img src={Icon1} alt="Icon"/> Home Delivery </Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Link to="#" className="ml-4 mb-4">
                        See more
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></svg>
                    </Link>
                    
                </Card>
            </CardDeck>
        </div>
    );
};

export default Facilities;