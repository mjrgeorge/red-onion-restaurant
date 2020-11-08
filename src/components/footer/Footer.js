import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div>
            <div className="d-flex bg-dark">
                <div className="m-5 flex-grow-1">
                <Link to="/home">
                    <img className="w-25" src={logo} alt="logo"/>
                </Link>
                </div>
                <div className="m-5 pr-5">
                    <Link to="#" className="text-white d-block text-decoration-none">Get help</Link>
                    <Link to="#" className="text-white d-block text-decoration-none">Read out blog</Link>
                    <Link to="#" className="text-white d-block text-decoration-none">Sign up to deliver</Link>
                    <Link to="#" className="text-white d-block text-decoration-none">Sign up to deliver</Link>
                </div>
                <div className="m-5 pr-5">
                    <Link to="#" className="text-white d-block text-decoration-none">About Online food</Link>
                    <Link to="#" className="text-white d-block text-decoration-none">Read FAQs</Link>
                    <Link to="#" className="text-white d-block text-decoration-none">View all cities</Link>
                    <Link to="#" className="text-white d-block text-decoration-none">Restaurant near me</Link>
                </div>
            </div>
            <div className="d-flex bg-dark">
                <div className="ml-5 flex-grow-1 text-white">
                    <p>Copyright &copy; 2020 Online Food</p>
                </div>
                <div className="pr-5">
                    <Link to="#" className="text-white d-block">Privacy Policy</Link>
                </div>
                <div className="pr-5">
                    <Link to="#" className="text-white d-block">Terms of Use</Link>
                </div>
                <div className="pr-5">
                    <Link to="#" className="text-white d-block">Pricing</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;