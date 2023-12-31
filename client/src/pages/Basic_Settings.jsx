import React from "react";
// import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Basic_Settings = () => {
//   const history = useHistory();

  const handleSaveAndNext = () => {
    // Perform any necessary save logic here

    // Navigate to the "/Question_Manager" route
    // history.push('/Question_Manager');
  };

  return (
    <Container fluid="md">
      <h1 className="heading">Basic Settings</h1>
      <Row className="mb-4">
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Test Name</Form.Label>
              <Form.Control 
                type="text" 
                id="testName"
                placeholder="Type here..."/>
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control 
                type="text"
                id="category"
                placeholder="Type here..." />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
          {
            <NavLink to='/Question_Manager' activeClassName="active">
              <Button className="theme-bg-primary outline-none border-0 w-50 m-auto">
          Save & Next</Button>
            </NavLink>
           }
      </Row>
    </Container>
  );
};
export default Basic_Settings;
