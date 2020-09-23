import React, { useState } from 'react';
import Menu from '../menu/Menu';
import {Nav} from 'react-bootstrap';
import FakeData from '../../fakeData/FakeData';
import { useParams } from 'react-router-dom';

const Home = () => {
    const [menuItems, setMenuItems] = useState(FakeData);
    const {menuName} =  useParams();
    console.log(menuName);
    return (
        <div>            
            <Nav className="justify-content-center" activeKey="/lunch">
                <Nav.Item>
                    <Nav.Link className="text-danger" href="/breakfast">Breakfast</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-danger" href="/lunch">Lunch</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-danger" href="/dinner">Dinner</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="row m-3">
                {
                    menuItems.filter(menuItem => menuItem.category===`${menuName}`).map(menus =><Menu menus={menus} key={menus.id}></Menu>)
                }
            </div>
        </div>
    );
};

export default Home;