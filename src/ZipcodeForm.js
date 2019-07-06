import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ZipcodeForm = (props) => {
    return (
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
