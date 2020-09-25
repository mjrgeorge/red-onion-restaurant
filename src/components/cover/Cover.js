import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import cover from '../../images/cover.png';

const Cover = () => {
    return (
        <div className="d-flex justify-content-center align-items-center mb-4" style={{ backgroundImage: `url(${cover})`, backgroundPosition: 'left top', height:"350px" }}>
            <div>
                <h1 className="text-dark">Best Food Waiting Your Belly</h1>
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