import React, { useContext, useState } from 'react';
import { Badge, Button, Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { MenuContext } from '../../App';
import NavBar from '../navBar/NavBar';

const MenuDetails = () => {
    let [menuItems, setMenuItems, productCount, setProductCount, form, setForm, loggedInUser, setLoggedInUser, totalPrice, setTotalPrice, contact, setContact, rider, setRider] = useContext(MenuContext);
    
    const {menuId} = useParams();
    
    const selectedMenu = menuItems.find(menu => menu.id===`${menuId}`);
    const {image, category, details, price, biker} = selectedMenu;
    let totalAmount = (productCount*price).toFixed(2);
    setTotalPrice(totalAmount)
    setRider(biker);
    return(
        <div className="m-5">
            <NavBar/>
            <div className="row">
                <div className="col-md-6 p-5 text-center">
                    <div>
                        <h1 className="display-1 text-uppercase pl-5 pt-5"> {category} </h1>
                        <p className="font-weight-light text-justify pl-5"> {details} </p>
                        <span className="h4"> ${totalAmount>=0 ? totalAmount : totalAmount=0} </span>
                        <Badge pill variant="light" style={{border: '1px solid gray'}}>
                            <Button onClick={()=>setProductCount(productCount-1)} variant="light rounded-pill">-</Button>
                                <span className="h4"> {productCount>=1 ? productCount : productCount=0} </span>
                            <Button onClick={()=>setProductCount(productCount+1)} variant="light rounded-pill">+</Button>
                        </Badge>
                    </div>
                    <Link to="/cart">
                        <Button variant="danger rounded-pill mt-3 pl-5 pr-5">Add</Button>
                    </Link>
                </div>
                <div className="col-md-6 p-5 text-center">
                <Image className="p-5 mb-5 mr-5" src={image} fluid />
                </div>
            </div>
        </div>
    );
};

export default MenuDetails;