import React from 'react'
import './Services.css'
import HeadingSvg from '../HeadingSvg/HeadingSvg'
import { Card, Col, Container, Row } from 'react-bootstrap'
import service1 from '../../Asset/Services/service1.png'
import service2 from '../../Asset/Services/service2.png'
import service3 from '../../Asset/Services/service3.png'

const Services = () => {
  return (
    <div className='service' id='section_3'>
        <Container>
        <div className='ServiceHeading'>
          <HeadingSvg></HeadingSvg>
          <h1>Services</h1>
        </div>
        <Row className="serviceContent">
           <Col md={4} className="serviceDetails">
            <Card>
                <img src={service1} width="90px" height="80px"/>
                <h2>UI/UX Design</h2>
                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.</p>
            </Card>
           </Col>
           <Col md={4} className="serviceDetails">
            <Card>
                <img src={service2} width="90px" height="80px" />
                <h2>Web Development</h2>
                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.</p>
            </Card>
           </Col>
           <Col md={4} className="serviceDetails">
            <Card>
                <img src={service3} width="90px" height="80px"/>
                <h2>Photography</h2>
                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.</p>
            </Card>
           </Col>
        </Row>
        <p className='looking'>Looking for a Freelancer? <a href="#">Click here</a> to contact me!👋</p>
        </Container>
    </div>
  )
}

export default Services