import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './About.css'
import HeadingSvg from '../HeadingSvg/HeadingSvg'
import avatar from './../../Asset/avatar.jpg'
import ProgressLine from './ProgressLine'
import Resume from '../../Asset/Resume/Md_Mridul_Islam_Resume.pdf'
import { useSpring, animated } from '@react-spring/web'



const About = () => {

  const Number = ({ n }) => {
    const {number} = useSpring({
      from: {number: 0},
      number: n,
      delay: 100,
      config: {mass:1, tension: 5, friction: 5}
    });
    return <animated.div>{number.to((n=>n.toFixed(0)))}</animated.div>
  }
  
  return (
    <div className='about' id='section_2'>
      <Container>
        <div className='aboutHeading'>
          <HeadingSvg></HeadingSvg>
          <h1>About Me</h1>
        </div>
        <Row>
          <Col md={4} className="aboutAvatar">
          <img src={avatar} alt='avatar'/>
          </Col>
          <Col md={8} className="aboutContent">
          <Card>
              <Row>
                <Col md={6} className="cardRight">
                <p>I am Md. Mridul Islam, web developer from Kushtia, Bangladesh. I have rich experience in web site design and building and customization, also I am good at MERN Stack.</p>
                <Button href={Resume} download className='resumeButton'>Download Resume</Button>
                </Col>
                <Col md={6} className="progressBar">
                <ProgressLine
                    label="MongoDB"
                    label1="70%"
                    visualParts={[
                      {
                        percentage: "70%",
                        color: "#ffd15c"
                      }
                    ]}
                />
                <ProgressLine
                    label="Express Js"
                    label1="80%"
                    visualParts={[
                      {
                        percentage: "80%",
                        color: "#ff4c60"
                      }
                    ]}
                />
                <ProgressLine
                    label="React JS"
                    label1="80%"
                    visualParts={[
                      {
                        percentage: "80%",
                        color: "#6c6ce5"
                      }
                    ]}
                />
                <ProgressLine
                    label="Node JS"
                    label1="60%"
                    visualParts={[
                      {
                        percentage: "60%",
                        color: "#353353"
                      }
                    ]}
                />
                </Col>
              </Row>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="details">
              <div>
                <span className="icon-fire"></span>
              </div>
              <div className='detailsContent'>
              <h3>
              <Number n={198}/>
              </h3>
                  <p>Projects completed</p>
              </div>
          </Col>
          <Col md={3} className="details">
            <div>
                <span className="icon-cup"></span>
              </div>
              <div className='detailsContent'>
              <h3>
              <Number n={5670}/>
              </h3>
                  <p>Cup of coffee</p>
              </div>
          </Col>
          <Col md={3} className="details">
            <div>
                <span className="icon-people"></span>
              </div>
              <div className='detailsContent'>
              <h3>
              <Number n={427}/>
              </h3>
                  <p>Satisfied clients</p>
              </div>
          </Col>
          <Col md={3} className="details">
            <div>
                <span className="icon-badge"></span>
              </div>
              <div className='detailsContent'>
              <h3>
              <Number n={35}/>
              </h3>
                  <p>Nominees winner</p>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About