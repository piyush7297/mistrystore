import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <Container fluid className='bg-white header'>
      <Container className='web-header'>
        <Row>
          <div className='d-flex justify-content-between align-items-center p-0'>
            <img src="https://mistry.store/images/logo.svg" alt="logo" className='img-fluid' width={213}/>
            <Link to={'/'}><h6 className='active'>Home</h6></Link>
            <Link to={'/about-us'}><h6>About Us</h6></Link>
            <Link to={'/pdf-catalog'}><h6 className='position-relative'>PDF Catalog
              <img src="https://mistry.store/images/new-flag.svg" alt="new" className='position-absolute img-fluid'/>
            </h6></Link>
            <Link to={'/contact-us'}><h6>Contact Us</h6></Link>
            <h6>Blogs</h6>
            <div className='search-bar position-relative me-2'>
              <input type="search" className='outline-none w-100' placeholder='Search wires, plywood, paints..etc.' />
            </div>
            <div class="dropdown">
              <button class="btn btn-primary dropdown-toggle p-0 border-0 shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://mistry.store/images/lang-switch.svg" alt="icon" width={32} className='img-fluid' />
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
              </ul>
            </div>
            <div>
              <button class="btn btn-primary dropdown-toggle p-0 border-0 shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://mistry.store/images/call-calling-mobile.svg" alt="icon" width={32} className='img-fluid' />
              </button>
            </div>
            <div>
              <button class="btn btn-primary dropdown-toggle p-0 border-0 shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://mistry.store/images/cart-icon.svg" alt="icon" width={32} className='img-fluid' />
              </button>
            </div>
            <button className='login-btn'>Login or Signup</button>
          </div>
        </Row>
      </Container>
    </Container>
    </>
  )
}
