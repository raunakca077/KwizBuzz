import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Quiz_Type = () => {
  const [selectedType, setSelectedType] = useState('decide');
  const [defaultType, setDefaultType] = useState('multipleChoice'); // Set a default quiz type
  const [typesForQuestions, setTypesForQuestions] = useState([]);

  const handleSelectedTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleDefaultTypeChange = (event) => {
    setDefaultType(event.target.value);
  };

  const handleTypesForQuestionsChange = (event, index) => {
    const updatedTypes = [...typesForQuestions];
    updatedTypes[index] = event.target.value;
    setTypesForQuestions(updatedTypes);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    console.log('Selected Type:', selectedType);
    console.log('Default Type:', defaultType);
    console.log('Types for Questions:', typesForQuestions);
  };

  const renderQuestionTypeInputs = () => {
    return typesForQuestions.map((type, index) => (
      <div key={index}>
        <Form.Group controlId={`questionType${index}`}>
          <Form.Label>Question {index + 1} Type:</Form.Label>
          <Form.Control
            as="select"
            value={type}
            onChange={(event) => handleTypesForQuestionsChange(event, index)}
          >
            <option value="trueFalse">True/False</option>
            <option value="multipleChoice">Multiple Choice</option>
            <option value="fillInTheBlank">Fill in the Blank</option>
            {/* Add more options if needed */}
          </Form.Control>
        </Form.Group>
      </div>
    ));
  };

  return (
    <Container fluid>
      <h1>Quiz Types</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="selectedType">
          <Form.Label>Select quiz type measuring method:</Form.Label>
          <Form.Control as="select" value={selectedType} onChange={handleSelectedTypeChange}>
            <option value="decide">Option to decide for each question</option>
            <option value="sameForAll">Select one type for all questions</option>
          </Form.Control>
        </Form.Group>

        {selectedType === 'sameForAll' && (
          <Form.Group controlId="defaultType">
            <Form.Label>Default Quiz Type:</Form.Label>
            <Form.Control as="select" value={defaultType} onChange={handleDefaultTypeChange}>
              <option value="trueFalse">True/False</option>
              <option value="multipleChoice">Multiple Choice</option>
              <option value="fillInTheBlank">Fill in the Blank</option>
              {/* Add more options if needed */}
            </Form.Control>
          </Form.Group>
        )}

        <Row className='my-2'>
          {selectedType === 'decide' && (
            <div>
              <h3>Types for Each Question:</h3>
              {renderQuestionTypeInputs()}
              <Button className="theme-bg-primary outline-none border-0" type="button" onClick={() => setTypesForQuestions([...typesForQuestions, ''])}>
                Add Another Question
              </Button>
            </div>
          )}
        </Row>
          <Button className="theme-bg-primary outline-none border-0" type="submit">
            Submit
          </Button>
      </Form>
    </Container>
  );
};

export default Quiz_Type;
