import React, { useState } from 'react';
import { Container, Form, Button ,Row,Col} from 'react-bootstrap';

const Quiz_Timing = () => {
  const [totalTimeOption, setTotalTimeOption] = useState('decide');
  const [totalTime, setTotalTime] = useState('');
  const [questionTimeLimitOption, setQuestionTimeLimitOption] = useState('decide');
  const [questionTimeLimit, setQuestionTimeLimit] = useState('');

  const handleTotalTimeOptionChange = (event) => {
    setTotalTimeOption(event.target.value);
  };

  const handleTotalTimeChange = (event) => {
    setTotalTime(event.target.value);
  };

  const handleQuestionTimeLimitOptionChange = (event) => {
    setQuestionTimeLimitOption(event.target.value);
  };

  const handleQuestionTimeLimitChange = (event) => {
    setQuestionTimeLimit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    console.log('Total Time Option:', totalTimeOption);
    console.log('Total Time:', totalTime);
    console.log('Question Time Limit Option:', questionTimeLimitOption);
    console.log('Question Time Limit:', questionTimeLimit);
  };

  return (
      <Container fluid>
        <h1>TEST DURATION</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="totalTimeOption" className='mb-3'>
          <Form.Label>Select test duration measuring method:</Form.Label>
          <Form.Control as="select" value={totalTimeOption} onChange={handleTotalTimeOptionChange}>
            <option value="decide">Option to decide</option>
            {/* Add more options if needed */}
          </Form.Control>
        </Form.Group>

        {totalTimeOption === 'decide' && (
          <Form.Group controlId="testCompletionTime" className='mb-3'>
            <Form.Label>Time to complete the test (hh:mm):</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter time in format hh:mm"
              value={totalTime}
              onChange={handleTotalTimeChange}
            />
          </Form.Group>
        )}

        <Form.Group controlId="questionTimeLimitOption" className='mb-3'>
          <Form.Label>Time limit for each test question measuring method:</Form.Label>
          <Form.Control as="select" value={questionTimeLimitOption} onChange={handleQuestionTimeLimitOptionChange}>
            <option value="decide">Option to decide</option>
            {/* Add more options if needed */}
          </Form.Control>
        </Form.Group>

        {questionTimeLimitOption === 'decide' && (
          <Form.Group controlId="questionTimeLimit" className='mb-3'>
            <Form.Label>Time limit for each test question (mm:ss):</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter time in format mm:ss"
              value={questionTimeLimit}
              onChange={handleQuestionTimeLimitChange}
            />
          </Form.Group>
        )}
        <Button className="theme-bg-primary outline-none border-0 justify-content-center align-items-center" type="submit">
          Save & Next
        </Button>
      </Form>
    </Container>
  );
};

export default Quiz_Timing;
