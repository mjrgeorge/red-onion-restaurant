import React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="row">
            <div className="col-md-10 pt-1 pl-5">
                <img style={{ height:"80px"}} src={logo} alt="Logo"/>
            </div>
            <div className="col-md-2">
                <div className=" d-flex justify-content-start m-3">
                    <Button className="rounded-pill" variant="light">Login</Button>
                    <Button className="ml-3 rounded-pill" variant="danger">Sign up</Button>
                </div>
            </div>
        </div>
    );
};

export default Header;