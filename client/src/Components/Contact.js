import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import backgroundImage from '../assets/contact.jpg'; // Import your background image

const Contact = () => {
  const bgStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right center',
    color: 'black dark', // Set text color to white for better visibility
    height: '100vh', // Set height to 100vh for full-page background
  };

  return (
    <Container fluid className="p-5 mt-5 mx-5" style={bgStyle}>
      <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
      <Row className="">
        <Col md={6} className="mb-5">
          <h2 className="text-xl font-bold mb-3">Get in Touch</h2>
          <p className='p-text'>
            If you have any questions or concerns, feel free to reach out to us. We'd love to hear from you!
          </p>
        </Col>
      </Row>
        <Col md={6}>
          <h2 className="mt-4 text-xl font-bold mb-3">Contact Details</h2>
          <ul className="list-disc">
            <li>Email: info@example.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Main St, Cityville, Country</li>
          </ul>
        </Col>
      
    </Container>
  );
};

export default Contact;
