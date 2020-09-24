import React, { useContext} from 'react';
import Header from '../header/Header';
import Cover from '../cover/Cover';
import Menu from '../menu/Menu';
import {Button, Nav} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { MenuContext } from '../../App';
import Facilities from '../facilities/Facilities';

const Home = () => {
    const {menuCategory} =  useParams();
    const [menuItems, setMenuItems] = useContext(MenuContext);
    return (
        <div>
            <Header/>
            <Cover/>
            <Nav className="justify-content-center" activeKey="/time/lunch">
                <Nav.Item>
                    <Nav.Link className="text-danger" href="/time/breakfast">Breakfast</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-danger" href="/time/lunch">Lunch</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-danger" href="/time/dinner">Dinner</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="row m-3">
                {
                    menuItems.filter(menuItem => menuItem.category===`${menuCategory}`).map(menus =><Menu menus={menus} key={menus.id}></Menu>)
                }
            </div>
                <div className="d-flex justify-content-center mb-3">
                    <Button variant="light">Checkout You Food</Button>
                </div>
                <Facilities/>
        </div>
    );
};

export default Home;