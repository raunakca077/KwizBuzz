import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const AddQuestionManually = () => {
  const [questions, setQuestions] = useState([
    { id: 1, question: '', answer: '', answerType: 'text', choices: [] }, // Default question
  ]);

  const handleQuestionChange = (id, field, value) => {
    const updatedQuestions = questions.map((q) =>
      q.id === id ? { ...q, [field]: value } : q
    );
    setQuestions(updatedQuestions);
  };

  const handleAddChoice = (id) => {
    const updatedQuestions = questions.map((q) =>
      q.id === id ? { ...q, choices: [...q.choices, ''] } : q
    );
    setQuestions(updatedQuestions);
  };

  const handleChoiceChange = (id, index, value) => {
    const updatedQuestions = questions.map((q) =>
      q.id === id ? { ...q, choices: q.choices.map((choice, i) => (i === index ? value : choice)) } : q
    );
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { id: questions.length + 1, question: '', answer: '', answerType: 'text', choices: [] },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    console.log('Questions:', questions);
    // Add additional logic as needed
  };

  return (
    <Container fluid>
      <h1>Add Question Manually</h1>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            {questions.map((q) => (
              <div key={q.id}>
                <Form.Group controlId={`question-${q.id}`} className='mb-3'>
                  <Form.Label>Question {q.id}:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={`Enter question ${q.id}`}
                    value={q.question}
                    onChange={(e) => handleQuestionChange(q.id, 'question', e.target.value)}
                  />
                </Form.Group>

                {q.answerType === 'mcq' && (
                  <>
                    <Form.Group controlId={`choices-${q.id}`} className='mb-3'>
                      <Form.Label>Choices:</Form.Label>
                      {q.choices.map((choice, index) => (
                        <div key={index} className='mb-2'>
                          <Form.Control
                            type='text'
                            placeholder={`Enter choice ${index + 1}`}
                            value={choice}
                            onChange={(e) => handleChoiceChange(q.id, index, e.target.value)}
                          />
                        </div>
                      ))}
                      <Button
                        className="theme-bg-primary outline-none border-0"
                        onClick={() => handleAddChoice(q.id)}
                      >
                        Add Another Choice
                      </Button>
                    </Form.Group>
                  </>
                )}

                <Form.Group controlId={`answer-${q.id}`} className='mb-3'>
                  <Form.Label>Answer {q.id}:</Form.Label>
                  <Form.Control
                    type={q.answerType === 'text' ? 'text' : 'number'} // Adjust based on answer types
                    placeholder={`Enter answer ${q.id}`}
                    value={q.answer}
                    onChange={(e) => handleQuestionChange(q.id, 'answer', e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId={`answerType-${q.id}`} className='mb-3'>
                  <Form.Label>Answer Type {q.id}:</Form.Label>
                  <Form.Control
                    as="select"
                    value={q.answerType}
                    onChange={(e) => handleQuestionChange(q.id, 'answerType', e.target.value)}
                  >
                    <option value="text">Text</option>
                    <option value="mcq">Multiple Choice (MCQ)</option>
                    <option value="trueFalse">True/False</option>
                    <option value="fillInTheBlank">Fill in the Blank</option>
                    {/* Add more answer types if needed */}
                  </Form.Control>
                </Form.Group>
              </div>
            ))}

            <Button className="theme-bg-primary outline-none border-0 m-3" onClick={handleAddQuestion}>
              Add Another Question
            </Button>

            <Button className="theme-bg-primary outline-none border-0" type="submit">
              Save & Next
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddQuestionManually;
