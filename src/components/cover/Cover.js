import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import cover from '../../images/cover.png';

const Cover = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${cover})`, backgroundPosition: 'center center', height:"100vh" }}>
            <div>
                <h1>Best Food Waiting Your Belly</h1>
                <div className="d-flex justify-content-center">
                    <Form inline>
                        <FormControl className="rounded-pill" type="text" placeholder="Search food items"/>
                        <Button type="submit" className="rounded-pill btn-danger round">Search</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Cover;