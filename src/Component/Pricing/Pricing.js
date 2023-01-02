import React, { useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import HeadingSvg from '../HeadingSvg/HeadingSvg'
import price1 from '../../Asset/pricing/idea.png'
import price2 from '../../Asset/pricing/chart.png'
import price3 from '../../Asset/pricing/rocket.png'
import './Pricing.css'

const Pricing = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='pricing'>
        <Container>
        <div className='pricingHeading'>
          <HeadingSvg></HeadingSvg>
          <h1>Pricing Plans</h1>
        </div>
        <Row>
          <Col md={4}>
            <Card className='pricingContent'>
              <img src={price1} width="70" height="70px"/>
              <h3 className='heading'>Basic</h3>
              <p className='pricingContentText'>A Simple option but powerful to manage your business</p>
              <p className='pricingContentText'> Email support</p>
              <h3 className='price'><span className='currency'>$</span> <span className='tag'>9 </span> Month</h3>
              <Button className='pricingBtn' variant="primary" onClick={handleShow}>Get Started</Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='pricingContent'>
              <span class="test2">Recommended</span>
              <img src={price2} width="70" height="70px"/>
              <h3 className='heading'>Basic</h3>
              <p className='pricingContentText'>Unlimited product including apps integrations and more features</p>
              <p className='pricingContentText'>Mon-Fri support</p>
              <h3 className='price'><span className='currency'>$</span> <span className='tag'>49 </span> Month</h3>
              <Button className='pricingBtn' variant="primary" onClick={handleShow}>Get Started</Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='pricingContent'>
              <img src={price3} width="70" height="70px"/>
              <h3 className='heading'>Basic</h3>
              <p className='pricingContentText'>A wise option for large companies and individuals</p>
              <p className='pricingContentText'>24/7 support</p>
              <h3 className='price'><span className='currency'>$</span> <span className='tag'>99 </span> Month</h3>
              <Button className='pricingBtn' variant="primary" onClick={handleShow}>Get Started</Button>
            </Card>
          </Col>
        </Row>

      <Modal show={show} onHide={handleClose}
       aria-labelledby="contained-modal-title-vcenter"
       centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Comming</Modal.Title>
        </Modal.Header>
        <Modal.Body>Details Comming soon!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </Container>
    </div>
  )
}

export default Pricing