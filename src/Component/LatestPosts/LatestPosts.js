import React from 'react'
import { Container } from 'react-bootstrap'
import HeadingSvg from '../HeadingSvg/HeadingSvg'
import './LatestPosts.css'

const LatestPosts = () => {
  return (
    <div className='latestPost' id='section_6'>
        <Container>
        <div className='latestPostHeading'>
          <HeadingSvg></HeadingSvg>
          <h1>Latest Posts</h1>
        </div>
        </Container>
    </div>
  )
}

export default LatestPosts