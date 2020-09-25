import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="row">
            <div className="col-md-9 pt-1 pl-5">
                <Link to="/home">
                    <img style={{ height:"80px"}} src={logo} alt="Logo"/>
                </Link>
            </div>
            <div className="col-md-3">
                <div className=" d-flex justify-content-start m-3">
                    <Link to="/cart">
                        <Button className="mr-3 rounded-pill" variant="light">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/></svg>
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button className="mr-3 rounded-pill" variant="light">Login</Button>
                    </Link>
                    <Link to="/login">
                        <Button className="ml-3 rounded-pill" variant="danger">Sign up</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;