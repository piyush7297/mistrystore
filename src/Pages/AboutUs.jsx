import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Col, Container, Row } from 'react-bootstrap'

export default function AboutUs() {
  return (
    <>
    <Header/>
    <Container fluid className='about-section'>
      <Container>
        <Row>
          <Col lg='6' className='d-flex align-items-center'>
            <img src="https://mistry.store/images/about-banner.png" alt="" width={400} className='img-fluid'/>
          </Col>
          <Col lg='6' className='d-flex align-items-center'>
            <div>
              <h1 className='fw-medium'>An Exclusive Platform for<br></br> all <span>Home-Interior<br></br> Professionals</span></h1>
              <div className='mt-3 mt-lg-5'><a href="https://mistry.store/partner" className='order-btn fw-medium text-decoration-none px-4 py-lg-3 py-2'>Partner With Us!</a></div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className='about-section'>
      <Container>
        <Row>
          <Col lg='6' className='d-flex align-items-center about-content'>
            <div>
              <h6 className='fw-semibold'>About Us</h6>
              <p className='mb-lg-4 fw-medium'>Introducing Mistry.Store, India's first organized platform that simplifies building material purchases for home-building professionals like Architects, Interior Decorators, Contractors & Skilled workers.</p>
              <p className='mb-lg-4 fw-medium'>A comprehensive platform dealing in over 100+ brands across Plywood & Boards, Hardware & Tools, Electricals & Lights, Paints & Chemicals, Sanitary & Plumbing.</p>
            </div>
          </Col>
          <Col lg='6' className='d-flex align-items-center'>
            <img src="https://mistry.store/images/about-material.jpg" className='img-fluid ms-lg-3' alt="" />
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className='bridge-section'>
      <Container>
        <Row>
          <Col lg='6' className='d-flex align-items-center'>
            <img src="https://mistry.store/images/bridging-the-gap.png" alt="" className='img-fluid'/>
          </Col>
          <Col lg='6' className='d-flex align-items-center'>
            <div>
              <h2 className='fw-semibold'>Bridging the Gap</h2>
              <p className='mb-lg-4 fw-medium'>Indian home-building industry is already a $25+ billion market and growing very fast. While this creates an exciting opportunity for home interior professionals, they also have to deal with an extremely fragmented sourcing ecosystem. Depending upon the size of the professionals business, they face issues of price opacity, dealing with multiple vendors, poor customer service and ad-hoc earnings.</p>
              <p className='red-color mb-lg-4 fw-medium'>We, at Mistry.Store understand these issues and bring a one-stop shop that simplifies building material purchases for home interior professionals like interior designers, architects, contractors, and skilled workers.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className='about-section store-section'>
      <Container>
        <h2 className='fw-semibold text-center'>We are building an ecosystem that is not only efficient but sustainable for a long-term partnership.</h2>
        <h3 className='text-center mb-3 fw-semibold'>Mistry.Store Set-Up</h3>
        <Row>
          <Col lg='6' className='mb-3 mb-lg-5'>
            <div className='d-lg-flex align-items-center'>
              <img src="https://mistry.store/images/where-house.png" alt="" width={268} className='img-fluid me-lg-3'/>
              <p className='fw-medium m-0 pe-lg-3'>
              Mistry.Store has one of the largest set-ups in NCR to serve all professionals. We have a 20,000 sq. ft. warehouse and sampling area in Gurugram catering to all your needs.
              </p>
            </div>
          </Col>
          <Col lg='6' className='mb-3 mb-lg-5'>
            <div className='d-lg-flex align-items-center'>
              <img src="https://mistry.store/images/delivery-boy.png" alt="" width={268} className='img-fluid me-lg-3'/>
              <p className='fw-medium m-0 pe-lg-3'>
              We are a team of over 40 professionals who bring in years of experience, knowledge, and dedication to help our partners grow and their projects flourish.
              </p>
            </div>
          </Col>
          <div className='mt-3 mt-lg-5 text-center'>
            <a href="https://mistry.store/partner" className='order-btn fw-medium text-decoration-none px-4 py-lg-3 py-2'>Partner With Us!</a>
          </div>
        </Row>
      </Container>
    </Container>
    <Container fluid className='founder-section'>
      <Container>
        <h3 className='fw-semibold text-center'>Meet the Founders</h3>
        <Row>
        <Col lg='6'>
          <div className='text-center'>
            <img src="https://mistry.store/images/founder1.png" alt="" className='img-fluid mb-lg-4 mb-3' width={230}/>
            <h4 className='fw-semibold'>Vaibhav Poddar | Co-Founder</h4>
            <p className='fw-medium'>Vaibhav has spent over 15 years in consulting and building businesses for<br></br> companies like McKinsey & Co., Max Healthcare, and Antara Assisted Care<br></br> (Max India Group).</p>
          </div>
        </Col>
        <Col lg='6'>
          <div className='text-center'>
            <img src="https://mistry.store/images/founder2.png" alt="" className='img-fluid mb-lg-4 mb-3' width={230}/>
            <h4 className='fw-semibold'>Bhanu Mahajan | Co-Founder</h4>
            <p className='fw-medium'>Bhanu has over 12 years of experience across technology and eCommerce companies. He has held senior roles with NetMeds & Reliance Retail. He also founded a healthtech company which he exited successfully.</p>
          </div>
        </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className='py-lg-5 py-4 partner'>
      <Container>
        <Row>
          <Col lg='9'>
            <div>
              <h6 className='fw-semibold'>Become a Mistry Partner</h6>
              <h2 className='fw-semibold mt-3'>Interested to Know More? <br></br>
              Sign up today and become a <span className='red-color'>Mistry Partner!</span></h2>
            </div>
          </Col>
          <Col lg='3' className='d-flex align-items-center justify-content-center'>
            <a href="https://mistry.store/partner" className='cursor-pointer d-block rounded-circle text-decoration-none d-flex align-items-center justify-content-center go-to-icon'>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="go-to-svg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="20"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
    <Footer/>
    </>
  )
}
