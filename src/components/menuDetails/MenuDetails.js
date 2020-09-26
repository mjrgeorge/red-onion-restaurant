import React, { useContext } from 'react';
import { Badge, Button, Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { MenuContext } from '../../App';
import NavBar from '../navBar/NavBar';

const MenuDetails = () => {
    let [menuItems, , productCount, setProductCount, , , , , , setTotalPrice, , , , setRider] = useContext(MenuContext);
    
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
                        <h1 className="display-3 text-uppercase pl-5 pt-5"> {category} </h1>
                        <p className="font-weight-light text-justify pl-5"> {details} </p>
                        <span className="h4"> ${totalAmount>=0 ? totalAmount : totalAmount=0} </span>
                        <Badge pill variant="light" style={{border: '1px solid gray'}}>
                            <Button onClick={()=>setProductCount(productCount-1)} variant="light rounded-pill">-</Button>
                                <span className="h4"> {productCount>=1 ? productCount : productCount=0} </span>
                            <Button onClick={()=>setProductCount(productCount+1)} variant="light rounded-pill">+</Button>
                        </Badge>
                    </div>
                    <Link to="/cart">
                        <Button variant="danger rounded-pill mt-3 pl-5 pr-5">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/></svg>
                            Add
                        </Button>
                    </Link>
                </div>
                <div className="col-md-6 text-center">
                    <Image className="p-5 mb-5 mr-5" src={image} fluid />
                </div>
            </div>
        </div>
    );
};

export default MenuDetails;