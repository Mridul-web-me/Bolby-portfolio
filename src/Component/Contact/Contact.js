import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import HeadingSvg from '../HeadingSvg/HeadingSvg'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <Container>
        <div className='contactHeading'>
          <HeadingSvg></HeadingSvg>
          <h1>Get in Touch</h1>
        </div>
        <Row>
          <Col md={4}>
            <div className='contactLeft'>
              <h2>Let's talk about everything!</h2>
              <p>Don't like forms? Send me an <a>email.</a> 👋</p>
            </div>
          </Col>
          <Col md={8}>
          <Form>
             <Row>
             <Col md={6}>
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
              >
                <Form.Control type="name" placeholder="Name" />
              </FloatingLabel>
              </Col>
              <Col md={6}>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              </Col>
             </Row>
             <FloatingLabel
                controlId="floatingInput"
                label="Subject"
                className="mb-3"
              >
                <Form.Control type="subject" placeholder="Subject" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Write your message here!"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
          <Button className='sendButton'>Send Message</Button>
          </Form>
          </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Contact