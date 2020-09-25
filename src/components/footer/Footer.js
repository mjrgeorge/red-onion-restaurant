import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div>
            <div class="d-flex bg-dark">
                <div class="m-5 flex-grow-1">
                <Link to="/home">
                    <img className="w-25" src={logo} alt="logo"/>
                </Link>
                </div>
                <div class="m-5 pr-5">
                    <Link class="text-white d-block text-decoration-none">Get help</Link>
                    <Link class="text-white d-block text-decoration-none">Read out blog</Link>
                    <Link class="text-white d-block text-decoration-none">Sign up to deliver</Link>
                    <Link class="text-white d-block text-decoration-none">Sign up to deliver</Link>
                </div>
                <div class="m-5 pr-5">
                    <Link class="text-white d-block text-decoration-none">About Online food</Link>
                    <Link class="text-white d-block text-decoration-none">Read FAQs</Link>
                    <Link class="text-white d-block text-decoration-none">View all cities</Link>
                    <Link class="text-white d-block text-decoration-none">Restaurant near me</Link>
                </div>
            </div>
            <div class="d-flex bg-dark">
                <div class="ml-5 flex-grow-1 text-white">
                    <p>Copyright &copy; 2020 Online Food</p>
                </div>
                <div class="pr-5">
                    <Link class="text-white d-block">Privacy Policy</Link>
                </div>
                <div class="pr-5">
                    <Link class="text-white d-block">Terms of Use</Link>
                </div>
                <div class="pr-5">
                    <Link class="text-white d-block">Pricing</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;