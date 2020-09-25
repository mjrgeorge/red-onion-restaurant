import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import Image1 from '../../images/img1.png';
import Image2 from '../../images/img2.png';
import Image3 from '../../images/img3.png';

const Facilities = () => {
    return (
        <div>
            <CardDeck className="m-4">
                <Card>
                    <Card.Img variant="top" src={Image1}/>
                    <Card.Body>
                        <Card.Title>Fast Delivery</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="link">See more</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Image2}/>
                    <Card.Body>
                        <Card.Title>A Good Auto Responder</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="link">See more</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Image3}/>
                    <Card.Body>
                        <Card.Title>Fast Delivery</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="link">See more</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    );
};

export default Facilities;