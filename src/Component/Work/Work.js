import React from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import HeadingSvg from '../HeadingSvg/HeadingSvg'
import './Work.css'

const Work = () => {
  return (
    <div className='work' id='section_5'>
        <Container>
        <div className='workHeading'>
          <HeadingSvg></HeadingSvg>
          <h1>Recent Work</h1>
        </div>
        <Tabs
      defaultActiveKey="everything"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="everything" title="Everything">
        <Container>
            <Row>
                <Col md={4}><h1>Hello</h1></Col>
                <Col md={4}><h1>Hello</h1></Col>
                <Col md={4}><h1>Hello</h1></Col>
            </Row>
        </Container>
      </Tab>
      <Tab eventKey="eCommerce" title="E-Commerce">
        <h1>Hello</h1>
      </Tab>
      <Tab eventKey="Booking" title="Booking">
        <h1>Hello</h1>
      </Tab>
      <Tab eventKey="landingPage" title="Landing Page">
        <h1>Hello</h1>
      </Tab>
    </Tabs>
        </Container>
    </div>
  )
}

export default Work