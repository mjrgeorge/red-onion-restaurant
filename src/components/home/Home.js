import React, { useContext } from 'react';
import Header from '../header/Header';
import Cover from '../cover/Cover';
import Menu from '../menu/Menu';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { MenuContext } from '../../App';
import Facilities from '../facilities/Facilities';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';

const Home = () => {
    const { menuCategory } = useParams();
    const [menuItems, , productCount,] = useContext(MenuContext);
    return (
        <div>
            <Header />
            <Cover />
            <NavBar />
            <div className="row m-3">
                {
                    menuCategory === undefined
                        ?
                        menuItems.filter(menuItem => menuItem.category === "lunch").map(menus => <Menu menus={menus} key={menus.id}></Menu>)
                        :
                        menuItems.filter(menuItem => menuItem.category === `${menuCategory}`).map(menus => <Menu menus={menus} key={menus.id}></Menu>)
                }
            </div>
            <div className="d-flex justify-content-center mb-3">
                <Link to="/cart">
                    {
                        productCount > 0 ? <Button variant="secondary" size="lg" enabled >Checkout Your Food</Button>
                            : <Button variant="secondary" size="lg" disabled >Checkout Your Food</Button>
                    }
                </Link>
            </div>
            <Facilities />
            <Footer />
        </div>
    );
};

export default Home;