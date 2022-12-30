import React from 'react'
import { Container } from 'react-bootstrap'
import HeadingSvg from '../HeadingSvg/HeadingSvg'
import './Pricing.css'

const Pricing = () => {
  return (
    <div className='pricing'>
        <Container>
        <div className='pricingHeading'>
          <HeadingSvg></HeadingSvg>
          <h1>Pricing Plans</h1>
        </div>
        </Container>
    </div>
  )
}

export default Pricing