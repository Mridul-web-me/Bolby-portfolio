import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import HeadingSvg from '../HeadingSvg/HeadingSvg'
import './Experience.css'

const Experience = () => {
  return (
    <div className='experience' id='section_4'>
        <Container>
        <div className='experienceHeading'>
          <HeadingSvg></HeadingSvg>
          <h1>Experience</h1>
        </div>
        <Row>
            <Col md={6}>
                <Card>
                   <div className='eduExperience'>
                   <div className='icon'>
                   <span className="icon-graduation"></span>
                   </div>
                   <span className='line'></span>
                   <div className='degree'>
                    <h4>
                        Bachelor Degree
                    </h4>
                    <h6>
                        2020 - Present
                    </h6>
                    <p>Now I'm studying in the Department of Management University Of Barishal.</p>
                   </div>
                   </div>
                   <div className='eduExperience'>
                   <div className='icon'>
                   <span className="icon-graduation"></span>
                   </div>
                   <span className='line'></span>
                   <div className='degree'>
                 
                    <h4>
                        HSC
                    </h4>
                    <h6>
                        2016-2018
                    </h6>
                    <p>I completed my HSC from Kushtia Government College in Business Studies.</p>
                   </div>
                   </div>
                   <div className='eduExperience'>
                   <div className='icon'>
                   <span className="icon-graduation"></span>
                   </div>
                   <span className='line'></span>
                   <div className='degree'>
                  
                    <h4>
                        SSC
                    </h4>
                    <h6>
                        2014-2016
                    </h6>
                    <p>I completed my SSC from Mohini Mohan Vidyapeeth Kushtia in Business Studies.</p>
                   </div>
                   </div>
                   <div></div>
                </Card>
            </Col>
            <Col md={6}>
            <Card>
                   <div className='eduExperience'>
                   <div className='icon'>
                   <span className="icon-briefcase"></span>
                   </div>
                   <span className='line'></span>
                   <div className='degree'>
                    <h4>
                       Fron-end Development
                    </h4>
                    <h6>
                        2019 - 2020
                    </h6>
                    <p>I started front-end development in 2019. Still learning about new technologies, and frameworks.</p>
                   </div>
                   </div>
                   <div className='eduExperience'>
                   <div className='icon'>
                   <span className="icon-briefcase"></span>
                   </div>
                   <span className='line'></span>
                   <div className='degree'>
                 
                    <h4>
                        Back-end Development
                    </h4>
                    <h6>
                        2020-2022
                    </h6>
                    <p>I have completed my HSC at Kushtia Government College in Business Studies</p>
                   </div>
                   </div>
                   <div className='eduExperience'>
                   <div className='icon'>
                   <span className="icon-briefcase"></span>
                   </div>
                   <span className='line'></span>
                   <div className='degree'>
                  
                    <h4>
                        Full-Stak Development
                    </h4>
                    <h6>
                        2022 -Present
                    </h6>
                    <p>I have completed my HSC at Kushtia Government College in Business Studies</p>
                   </div>
                   </div>
                   <div></div>
                </Card>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Experience