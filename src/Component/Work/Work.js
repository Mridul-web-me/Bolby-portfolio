import React from 'react'
import { Button, Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import HeadingSvg from '../HeadingSvg/HeadingSvg'
import work1 from '../../Asset/Work/football.png'
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
                    <h2>This is Copa america</h2>
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
                    <h2>This is Copa america</h2>
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
                    <h2>This is Copa america</h2>
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
                    <h2>This is Copa america</h2>
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
                    <h2>This is Copa america</h2>
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
                    <h2>This is Copa america</h2>
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
                    <h2>This is Copa america</h2>
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
                    <h2>This is Copa america</h2>
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
                    <h2>This is Copa america</h2>
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
                    <h2>This is Copa america</h2>
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
                    <h2>This is Copa america</h2>
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
                    <h2>This is Copa america</h2>
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
            </Row>
        </Container>
      </Tab>
    </Tabs>
        </Container>
    </div>
  )
}

export default Work