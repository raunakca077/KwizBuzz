import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AnswerSheetPanel = () => {
  const [testName, setTestName] = useState('Test Name');
  const [thankYouMessage, setThankYouMessage] = useState('Thank you for taking the test!');
  const [result, setResult] = useState({ correct: 0, incorrect: 0 });
  const [questionDetails, setQuestionDetails] = useState([]);

  // Sample data for question details (replace with actual data)
  const sampleQuestionDetails = [
    { question: 'Question 1', correct: true, correctAnswer: 'Paris' },
    { question: 'Question 2', correct: false, correctAnswer: 'Shakespeare' },
    // Add more question details as needed
  ];

  useEffect(() => {
    // Calculate result based on question details
    const calculateResult = () => {
      let correctCount = 0;
      let incorrectCount = 0;
      const updatedQuestionDetails = sampleQuestionDetails.map((q) => {
        if (q.correct) {
          correctCount++;
        } else {
          incorrectCount++;
        }
        return q;
      });
      setResult({ correct: correctCount, incorrect: incorrectCount });
      setQuestionDetails(updatedQuestionDetails);
    };

    calculateResult();
  }, []);

  // Calculate percentage
  const totalQuestions = result.correct + result.incorrect;
  const percentage = totalQuestions === 0 ? 0 : (result.correct / totalQuestions) * 100;

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className='text-center'>{testName}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className='theme-bg-base'>
            <Card.Body>
              <Card.Title>{thankYouMessage}</Card.Title>
              {/* Result Percentage */}
              <div className="mt-4">
                <h3>Result Percentage:</h3>
                <p>{percentage.toFixed(2)}%</p>
              </div>
              {/* Result Details */}
              <div className="mt-4">
                <h3>Result Details:</h3>
                <p>Correct: {result.correct}</p>
                <p>Incorrect: {result.incorrect}</p>
              </div>
              {/* Question Details */}
              <div className="mt-4">
                <h3>Question Details:</h3>
                {questionDetails.map((q, index) => (
                  <Card key={index} className="mt-3">
                    <Card.Body>
                      <Card.Title>{q.question}</Card.Title>
                      <p>{q.correct ? 'Correct' : 'Incorrect'}</p>
                      {q.correct || (
                        <p>
                          Correct Answer: <strong>{q.correctAnswer}</strong>
                        </p>
                      )}
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AnswerSheetPanel;
