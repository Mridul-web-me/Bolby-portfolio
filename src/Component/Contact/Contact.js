import React from 'react'
import { Container } from 'react-bootstrap'
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
        </Container>
    </div>
  )
}

export default Contact