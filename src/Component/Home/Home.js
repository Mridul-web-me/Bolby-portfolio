import React from 'react'
import { Container } from 'react-bootstrap'
import About from '../About/About'
import ClientReview from '../ClientReview/ClientReview'
import Contact from '../Contact/Contact'
import Experience from '../Experience/Experience'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import IntroSection from '../IntroSection/IntroSection'
import LatestPosts from '../LatestPosts/LatestPosts'
import Pricing from '../Pricing/Pricing'
import Services from '../Services/Services'
import Work from '../Work/Work'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <IntroSection></IntroSection>
      <Container>
      <About></About>
      <Services></Services>
      <Experience></Experience>
      <Work></Work>
      <Pricing></Pricing>
      <ClientReview></ClientReview>
      <LatestPosts></LatestPosts>
      <Contact></Contact>
      <Footer></Footer>
      </Container>
    </div>
  )
}

export default Home