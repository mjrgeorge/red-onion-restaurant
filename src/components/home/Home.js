import React, { useContext, useState } from 'react';
import Menu from '../menu/Menu';
import {Nav} from 'react-bootstrap';
import FakeData from '../../fakeData/FakeData';
import { useParams } from 'react-router-dom';
import { MenuContext } from '../../App';

const Home = () => {
    const {menuCategory} =  useParams();
    const [menuItems, setMenuItems] = useContext(MenuContext);
    return (
        <div>
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
        </div>
    );
};

export default Home;