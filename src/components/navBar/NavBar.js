import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Link className="text-danger mr-5" to="/time/breakfast">Breakfast</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="text-danger mr-5" to="/time/lunch">Lunch</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="text-danger mr-5" to="/time/dinner">Dinner</Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default NavBar;