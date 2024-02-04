import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <Container fluid className='web-footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div>
              <img src="https://mistry.store/images/logo.svg" alt="" className='img-fluid' width={250}/>
            </div>
          </Col>
          <Col xs='6' lg='3'>
            <ul>
              <li className='mb-3 mb-lg-4'>
                <Link to={'/'} className='text-decoration-none fw-medium'>Home</Link>
              </li>
              <li className='mb-3 mb-lg-4'>
                <Link to={'/'} className='text-decoration-none fw-medium'>About Us</Link>
              </li>
              <li className='mb-3 mb-lg-4'>
                <Link to={'/'} className='text-decoration-none fw-medium'>Partner with Us</Link>
              </li>
              <li className='mb-3 mb-lg-4'>
                <Link to={'/'} className='text-decoration-none fw-medium'>Contact Us</Link>
              </li>
              <li className='mb-3 mb-lg-4'>
                <Link to={'/'} className='text-decoration-none fw-medium'>FAQ's</Link>
              </li>
              <li className='mb-3 mb-lg-4'>
                <Link to={'/'} className='text-decoration-none fw-medium'>Expert Inspection Services</Link>
              </li>
            </ul>
          </Col>
          <Col xs='6' lg='3'>
            <ul>
              <li className='mb-3 mb-lg-4'>
                <Link to={'/'} className='text-decoration-none fw-medium'>Privacy Policy</Link>
              </li>
              <li className='mb-3 mb-lg-4'>
                <Link to={'/'} className='text-decoration-none fw-medium'>Terms & Conditions</Link>
              </li>
              <li className='mb-3 mb-lg-4'>
                <Link to={'/'} className='text-decoration-none fw-medium'>Returns Policy</Link>
              </li>
              <li className='mb-3 mb-lg-4'>
                <Link to={'/'} className='text-decoration-none fw-medium'>Shipping & Delivery Policy</Link>
              </li>
              <li className='mb-3 mb-lg-4'>
                <Link to={'/'} className='text-decoration-none fw-medium'>Terms of Trade</Link>
              </li>
              <li className='mb-3 mb-lg-4'>
                <Link to={'/'} className='text-decoration-none fw-medium'>Need Interior Designer for Your Home?</Link>
              </li>
            </ul>
          </Col>
          <Col lg='3' className='d-none d-lg-block'>
            <div className='footer-contact mt-3 mt-lg-0 text-center text-lg-start'>
              <h3 className='fw-medium mb-4'>Contact Us</h3>
              <ul className='mb-4'>
                <li className='mb-3'>
                  <Link to={'https://mistry.store/tel:+91%2080708%2080707'} className='text-decoration-none fw-medium'>
                    <img src="https://mistry.store/images/home/call-calling.svg" className='img-fluid me-2' alt=""/>
                    <span>+91 80708 80707</span>
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link to={'mailto:marketing@mistry.store'} className='text-decoration-none fw-medium d-flex align-items-start'>
                    <img src="https://mistry.store/images/home/sms-edit.svg" className='img-fluid me-2' alt=""/>
                    <span>Marketing: marketing@mistry.store</span>
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link to={'mailto:sales@mistry.store'} className='text-decoration-none fw-medium d-flex align-items-start'>
                    <img src="https://mistry.store/images/home/sms-edit.svg" className='img-fluid me-2' alt=""/>
                    <span>Sales: sales@mistry.store</span>
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link to={'/'} className='text-decoration-none fw-medium d-flex align-items-start'>
                    <img src="https://mistry.store/images/home/location.svg" className='img-fluid me-2' alt=""/>
                    <span>Plot no 24, CRPF Road, Sector 61, Gurugram</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs='12'>
            <Row>
              <Col lg='9' className='pt-lg-3 pb-3 pb-lg-0'>
                <p class="m-0 text-lg-start text-center">Copyright © 2023 Infraequity Technologies Private Limited</p>
              </Col>
              <Col lg='3'>
                <ul className='d-flex align-items-center'>
                  <li className='me-2'>
                    <Link to={'https://www.youtube.com/channel/UCKMP5GMnalnv03efoW0My2w'} className='text-decoration-none social-icon'>
                      <img src="https://mistry.store/images/home/youtube.svg" alt="" />
                    </Link>
                  </li>
                  <li className='me-2'>
                    <Link to={'https://www.facebook.com/'} className='text-decoration-none social-icon'>
                      <img src="https://mistry.store/images/home/facebook.svg" alt="" />
                    </Link>
                  </li>
                  <li className='me-2'>
                    <Link to={'https://api.whatsapp.com/send?phone=918070880707'} className='text-decoration-none social-icon'>
                      <img src="https://mistry.store/images/home/whatsapp.svg" alt="" />
                    </Link>
                  </li>
                  <li className='me-2'>
                    <Link to={'https://www.instagram.com/'} className='text-decoration-none social-icon'>
                      <img src="https://mistry.store/images/home/instagram.svg" alt="" />
                    </Link>
                  </li><li className='me-2'>
                    <Link to={'https://www.linkedin.com/'} className='text-decoration-none social-icon'>
                      <img src="https://mistry.store/images/home/linkedin.svg" alt="" />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  )
}
