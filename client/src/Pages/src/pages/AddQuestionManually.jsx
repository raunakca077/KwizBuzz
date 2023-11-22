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
    <div className=''>
    <Container fluid className='mt-20 w-[75%] ml-[16%]  '>
      <h1 className='text-4xl mb-5'>Add Question Manually</h1>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            {questions.map((q) => (
              <div key={q.id} className="mb-4 p-4 border border-gray-300 rounded-lg mt-16">
                <Form.Group controlId={`question-${q.id}`} className='mb-3'>
                  <Form.Label className="font-semibold text-lg">Question {q.id}:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={`Enter question ${q.id}`}
                    value={q.question}
                    onChange={(e) => handleQuestionChange(q.id, 'question', e.target.value)}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  />
                </Form.Group>

                {q.answerType === 'mcq' && (
                  <>
                    <Form.Group controlId={`choices-${q.id}`} className='mb-3'>
                      <Form.Label className="font-semibold text-lg">Choices:</Form.Label>
                      {q.choices.map((choice, index) => (
                        <div key={index} className='mb-2'>
                          <Form.Control
                            type='text'
                            placeholder={`Enter choice ${index + 1}`}
                            value={choice}
                            onChange={(e) => handleChoiceChange(q.id, index, e.target.value)}
                            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                          />
                        </div>
                      ))}
                      <Button
                        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                        onClick={() => handleAddChoice(q.id)}
                      >
                        Add Another Choice
                      </Button>
                    </Form.Group>
                  </>
                )}

                <Form.Group controlId={`answer-${q.id}`} className='mb-3'>
                  <Form.Label className="font-semibold text-lg">Answer {q.id}:</Form.Label>
                  <Form.Control
                    type={q.answerType === 'text' ? 'text' : 'number'}
                    placeholder={`Enter answer ${q.id}`}
                    value={q.answer}
                    onChange={(e) => handleQuestionChange(q.id, 'answer', e.target.value)}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  />
                </Form.Group>

                <Form.Group controlId={`answerType-${q.id}`} className='mb-3'>
                  <Form.Label className="font-semibold text-lg">Answer Type {q.id}:</Form.Label>
                  <Form.Control
                    as="select"
                    value={q.answerType}
                    onChange={(e) => handleQuestionChange(q.id, 'answerType', e.target.value)}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
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
              <div className='flex flex-row gap-6 mt-[5%]'>
            <Button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none " onClick={handleAddQuestion}>
              Add Another Question
            </Button>

            <Button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none " type="submit">
              Save & Next
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default AddQuestionManually;
