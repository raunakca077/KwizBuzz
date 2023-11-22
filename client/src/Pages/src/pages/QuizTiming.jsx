import React, { useState } from 'react';
import { Container, Form, Button ,Row,Col} from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const QuizTiming = () => {
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
    <Container fluid className='mt-20'>
      <h1 className="text-3xl font-bold mb-6">TEST DURATION</h1>
      <Form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <Form.Group controlId="testCompletionTime" className='mb-6 w-[70%]'>
          <div className="flex flex-col">
            <Form.Label className='mb-2'>Hour's (hh):</Form.Label>
            <Form.Control
              type="number"
              placeholder="hh"
              className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500 mb-2"
              // value={totalTime}
              // onChange={handleTotalTimeChange}
            />
          </div>
          <div className="flex flex-col">
            <Form.Label className='mb-2'>Minute's (mm):</Form.Label>
            <Form.Control
              type="number"
              placeholder="mm"
              className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500 mb-2"
              // value={totalTime}
              // onChange={handleTotalTimeChange}
            />
          </div>
          <div className="flex flex-col">
            <Form.Label className='mb-2'>Seconds (ss):</Form.Label>
            <Form.Control
              type="number"
              placeholder="ss"
              className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
              // value={totalTime}
              // onChange={handleTotalTimeChange}
            />
          </div>
        </Form.Group>

        <div className="flex justify-center">
          <NavLink to='/QuizPortal' activeClassName="active">
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </Button>
          </NavLink>
        </div>
      </Form>
    </Container>
  );
};

export default QuizTiming;