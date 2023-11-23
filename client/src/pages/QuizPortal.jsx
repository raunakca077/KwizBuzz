import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const QuizPortal = () => {
  const { testName } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const totalQuestions = 5;

  const questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answerType: 'mcq',
      correctAnswer: 'Paris',
    },
    {
      id: 2,
      question: 'Who wrote Hamlet?',
      options: ['Shakespeare', 'Hemingway', 'Tolstoy', 'Fitzgerald'],
      answerType: 'mcq',
      correctAnswer: 'Shakespeare',
    },
    // Add more questions as needed
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleRadioChange = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    console.log('Selected Answer:', selectedAnswer);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedAnswer('');
  };

  return (
    <Container fluid>
      {/* Header */}
      <Row className="theme-bg-base border-0 p-2 m-1 rounded text-center mx-auto">
        <Col>
          <h2>KrisKross &nbsp;|&nbsp; <span className='h4'>TestName{testName}</span></h2>
        </Col>
        <Col className="d-flex justify-content-end align-items-end">
          {/* Timer logic can be added here */}
          <span>Time: 15:00</span>
        </Col>
      </Row>

      {/* Quiz Info */}
      {/* <Row className="mt-3 mx-auto">
        <Col className="ml-5 bg-primary">
          <span>
            Question {currentQuestionIndex + 1}/{totalQuestions}
          </span>
        </Col>
      </Row> */}


      {/* Question */}
      <Row className="mt-3 justify-content-center">
        <Col xs={12} md={8}>
          <div className='mt-3 mb-2'>
            Question {currentQuestionIndex + 1}/{totalQuestions}
          </div>
          <Card className='theme-bg-base px-4 py-2 border-0'>
            <Card.Body>
              <Card.Title>{currentQuestion.question}</Card.Title>
              {/* Options based on answer type */}
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id={`option-${index}`}
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleRadioChange(option)}
                  />
                  <label className="form-check-label" htmlFor={`option-${index}`}>
                    {option}
                  </label>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Navigation */}
      <Row className="mt-3 justify-content-center">
        <Col className="text-center">
          <Button className="theme-bg-primary border-0" onClick={handleNextQuestion}>Next Question</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizPortal;
