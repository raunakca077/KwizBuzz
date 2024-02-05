import React from "react";
// import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Basic_Settings = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      quizTitle: '',
      quizDescription: '',
        hours:'',
        minutes:''
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      
      try {

        

        const response = await axios.post('http://localhost:7700/api/createQuiz', formData);
    
        if (response.data.success) {
          navigate('/Login');
        } else {
          alert('this:');}
      } catch (error) {
        alert(error.response.data.message);
      }
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
                id="quizTitle"
                name='quizTitle'
                placeholder="Type here..."
                onChange={handleChange}
                required
                />
                
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
                id="quizDescription"
                name='quizDescription'
                placeholder="Type here..." 
                onChange={handleChange}
                required
                />
                 
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row>
        
           <h5>TEST DURATION</h5>
<Form onSubmit={handleSubmit}>
  <Form.Group controlId="testCompletionTime" className='mb-3'>
    <Form.Label>Hour's (hh):</Form.Label>
    <Form.Control
      type="number"
      name='hours'
      placeholder="Enter time in format hh"
      // value={totalTime}
      // onChange={handleTotalTimeChange}
      onChange={handleChange}
    />
    <Form.Label>Minute's (mm):</Form.Label>
    <Form.Control
      type="number"
      name='minutes'
      placeholder="Enter time in format mm"
      // value={totalTime}
      // onChange={handleTotalTimeChange}
      onChange={handleChange}required
    />
  </Form.Group>
  <Button type="submit" className="theme-bg-primary outline-none border-0 w-50 m-auto">
          Save & Next</Button>
           </Form>
          
           </Row>

    </Container>




  );
};
export default Basic_Settings;
