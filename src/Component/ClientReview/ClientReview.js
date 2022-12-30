import React from 'react'
import { Container } from 'react-bootstrap'
import HeadingSvg from '../HeadingSvg/HeadingSvg'
import './ClientReview.css'

const ClientReview = () => {
  return (
    <div className='ClientReview'>
        <Container>
        <div className='ClientReviewHeading'>
          <HeadingSvg></HeadingSvg>
          <h1>Client Review</h1>
        </div>
        </Container>
    </div>
  )
}

export default ClientReview