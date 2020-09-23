import React from 'react';
import {Image} from 'react-bootstrap';

const Menu = (props) => {
    const {item, description, price, image} = props.menus;
    return (
        <div className="col-md-4 text-center">
            <div style={{border: '1px solid gray', boxShadow: '1px 1px 10px black', cursor: 'pointer'}} className="m-3 p-3">
                <Image src={image} fluid />
                <div>
                    <h4>{item}</h4>
                    <p>{description}</p>
                    <h3>${price}</h3>
                </div>
            </div>
        </div>
    );
};

export default Menu;