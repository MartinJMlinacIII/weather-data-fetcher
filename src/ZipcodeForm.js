import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ZipcodeForm = (props) => {
    return (
        // <form onSubmit={props.loadForecast} className="form row">
        //     <div className="col">
        //         <input type="text" name="zipcode" className="form-control" placeholder="Enter Zipcode" required/>
        //     </div>
        //     <div className="col">
        //         <button className="btn btn-primary">Get Weather</button>
        //     </div>
        // </form>
        <Form onSubmit={props.loadForecast}>
            <Form.Group as={Row} controlId="formZipcode">
                <Col md="4">
                    <Form.Control type="text" placeholder="Enter Zipcode" name="zipcode" required/>
                </Col>
                <Col md="4">
                    <Button type="submit" variant="primary">
                        Get Weather
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    );
};

export default ZipcodeForm;
