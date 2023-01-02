import React from 'react'
import { Button, Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import HeadingSvg from '../HeadingSvg/HeadingSvg'
import work1 from '../../Asset/Work/1.png'
import work2 from '../../Asset/Work/2.png'
import work3 from '../../Asset/Work/3.png'
import work4 from '../../Asset/Work/4.png'
import work5 from '../../Asset/Work/5.png'
import work6 from '../../Asset/Work/6.png'
import work7 from '../../Asset/Work/7.png'
import work8 from '../../Asset/Work/8.png'
import work9 from '../../Asset/Work/9.png'
import work10 from '../../Asset/Work/10.png'
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
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work1} fluid />
                    </div>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work2} fluid />
                    </div>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work3} fluid />
                    </div>
                  </Card>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work4} fluid />
                    </div>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work5} fluid />
                    </div>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work6} fluid />
                    </div>
                  </Card>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work7} fluid />
                    </div>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work8} fluid />
                    </div>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work9} fluid />
                    </div>
                  </Card>
                </Col>
            </Row>
        </Container>
      </Tab>
      <Tab eventKey="eCommerce" title="E-Commerce">
        <Container>
            <Row>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work1} fluid />
                    </div>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work2} fluid />
                    </div>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work3} fluid />
                    </div>
                  </Card>
                </Col>
            </Row>
        </Container>
      </Tab>
      <Tab eventKey="Booking" title="Booking">
        <Container>
            <Row>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work4} fluid />
                    </div>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work5} fluid />
                    </div>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work6} fluid />
                    </div>
                  </Card>
                </Col>
            </Row>
        </Container>
      </Tab>
      <Tab eventKey="landingPage" title="Landing Page">
        <Container>
            <Row>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work7} fluid />
                    </div>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work8} fluid />
                    </div>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className='wordDetails'>
                    <div className='workComponent'>
                    <p className='catName'>
                      Landing Page
                    </p>
                    <h2>Heading Coming</h2>
                    <div className='workButton'>
                      <Button>Live Priview</Button>
                      <Button>Github</Button>
                    </div>
                    </div>
                    <div className='workImage'>
                    <img src={work9} fluid />
                    </div>
                  </Card>
                </Col>
            </Row>
        </Container>
      </Tab>
    </Tabs>
        </Container>
    </div>
  )
}

export default Work