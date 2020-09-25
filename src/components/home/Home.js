import React, { useContext} from 'react';
import Header from '../header/Header';
import Cover from '../cover/Cover';
import Menu from '../menu/Menu';
import {Button} from 'react-bootstrap';
import {useParams } from 'react-router-dom';
import { MenuContext } from '../../App';
import Facilities from '../facilities/Facilities';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';

const Home = () => {
    const {menuCategory} =  useParams();
    const [menuItems, setMenuItems] = useContext(MenuContext);
    return (
        <div>
            <Header/>
            <Cover/>
            <NavBar/>
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