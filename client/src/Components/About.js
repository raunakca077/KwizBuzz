import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import backgroundImage from '../assets/about.jpg'; // Import your background image

const About = () => {
  const bgStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black dark', // Set text color to black for better visibility
    minHeight: '100vh', // Set minHeight to 100vh for full-page background
    padding: '20px', // Adjust padding as needed
    textAlign: 'center', // Center align text
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  return (
    <Container fluid className="p-5 h5" style={bgStyle}>
      <h1 className="text-center mb-4">
        <span className='h2'>Kwizz?</span> - Empowering Learning Through Quizzes
      </h1>
      <p>
        <span className='h3'>Kwizz?</span> <span className=''>is an innovative quiz application that puts the power of learning in your hands.
        Whether you're a student aiming to test your knowledge, an educator creating engaging assessments,
        or someone who simply loves quizzes, Kwizz? has something for everyone.</span>
      </p>
      <p className='h3'>
        Key Features:
      </p>
      <ul className=''>
        <li>Create Your Own Quiz: Kwizz? allows users to easily create and customize quizzes.</li>
        <li>AI-Powered Quiz Generation: Take advantage of AI-generated quizzes for quick and diverse challenges.</li>
        <li>User-Friendly Interface: Our platform offers an intuitive and user-friendly interface for a seamless experience.</li>
        <li>History Tracking: View and analyze your quiz history to monitor your progress and areas for improvement.</li>
        <li>Community Interaction: Engage with a community of learners, share quizzes, and challenge your friends.</li>
      </ul>
      <p className='h5'>
        Kwizz? is committed to providing a fun and educational quiz experience for users of all levels.
        Join us on this exciting journey of learning and exploration!
      </p>
    </Container>
  );
};

export default About;
