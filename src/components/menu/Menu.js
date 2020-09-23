import React from 'react';
import {Image} from 'react-bootstrap';
import {useHistory } from 'react-router-dom';

const Menu = (props) => {
    const {id, item, description, price, image} = props.menus;
    const history = useHistory();
    const handleClick = () => {
        const url = `/menu/${id}`;
        history.push(url);
    }
    return (
        <div onClick={handleClick} className="col-md-4 text-center">
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