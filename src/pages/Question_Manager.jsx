import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const QuestionManager = () => {
  return (
    <Container fluid>
      <h1>Question Manager</h1>
      <Row>
        <Col>
          <Image src="https://img.freepik.com/premium-photo/cinema-4d-rendering-illustration-person-reading-book_446783-25.jpg?w=1000" alt="No Image" fluid />
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="m-0 p-0">
            <Col className="pr-3">
              <Link to="./QuestionGenerator">
                <Button className="theme-bg-primary outline-none border-0 float-end">Generate using AI</Button>
              </Link>
            </Col>

            <Col className="pl-3">
              <Link to="./AddQuestionManually">
                <Button className="theme-bg-primary outline-none border-0">Add Question</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionManager;
