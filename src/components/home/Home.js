import React, { useContext} from 'react';
import Header from '../header/Header';
import Cover from '../cover/Cover';
import Menu from '../menu/Menu';
import {Button, Nav} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { MenuContext } from '../../App';
import Facilities from '../facilities/Facilities';
import Footer from '../footer/Footer';

const Home = () => {
    const {menuCategory} =  useParams();
    const [menuItems, setMenuItems] = useContext(MenuContext);
    return (
        <div>
            <Header/>
            <Cover/>
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Link className="text-danger mr-5 h5" to="/time/breakfast">Breakfast</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="text-danger mr-5 h5" to="/time/lunch">Lunch</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="text-danger mr-5 h5" to="/time/dinner">Dinner</Link>
                </Nav.Item>
            </Nav>
            <div className="row m-3">
                {
                    menuItems.filter(menuItem => menuItem.category===`${menuCategory}`).map(menus =><Menu menus={menus} key={menus.id}></Menu>)
                }
            </div>
                <div className="d-flex justify-content-center mb-3">
                    <Button variant="secondary" size="lg" disabled>Checkout Your Food</Button>{' '}
                </div>
                <Facilities/>
                <Footer/>
        </div>
    );
};

export default Home;