import React from "react";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
// Importing required components from Tailwind CSS
import { Container, Row, Col } from 'react-bootstrap';

const QuestionManager = () => {
  return (
    <Container fluid className="pt-16 w-[600px] mx-auto mt-[5%]">
      <h1 className="text-4xl ml-[30%]">Question Manager</h1>
      <Row>
        <Col>
          <img src="https://img.freepik.com/premium-photo/cinema-4d-rendering-illustration-person-reading-book_446783-25.jpg?w=1000" alt="No Image" className="items-center justify-center" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="m-0 p-0">
            <Col className="pr-3 ">
              <Link to="/QuestionGenerator">
                <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right focus:outline-none">
                  Generate using AI
                </button>
              </Link>
            </Col>

            <Col className="pl-3">
              <NavLink to='/AddQuestionManually' activeClassName="active">
                <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                  Add Question
                </button>
              </NavLink>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionManager;
