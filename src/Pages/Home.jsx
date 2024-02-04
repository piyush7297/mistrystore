import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../Common/Header'
import { Link } from 'react-router-dom';
import Footer from '../Common/Footer';

export default function Home() {

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <>
    <Header/>
    <Container fluid className='p-3'>
      <Container>
        <div className='d-flex justify-content-center'>
          <div className='w-116'>
            <div className='story-item mb-2 rounded-circle mx-auto d-flex justify-content-center align-items-center'>
              <div className='story-image d-flex justify-content-center align-items-center rounded-circle'>
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Mistry+Store+(1).png" alt="img" className='h-100 rounded-circle'/>
              </div>
            </div>
            <h5>Mistry.Store</h5>
          </div>
          <div className='w-116'>
            <div className='story-item mb-2 rounded-circle mx-auto d-flex justify-content-center align-items-center'>
              <div className='story-image d-flex justify-content-center align-items-center rounded-circle'>
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Plywood+%26+Boards+(1).png" alt="img" className='h-100 rounded-circle'/>
              </div>
            </div>
            <h5>Plywood & Boards</h5>
          </div>
          <div className='w-116'>
            <div className='story-item mb-2 rounded-circle mx-auto d-flex justify-content-center align-items-center'>
              <div className='story-image d-flex justify-content-center align-items-center rounded-circle'>
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Sanitary+%26+Plumbing+(1).png" alt="img" className='h-100 rounded-circle'/>
              </div>
            </div>
            <h5>Sanitary & Plumbing</h5>
          </div>
          <div className='w-116'>
            <div className='story-item mb-2 rounded-circle mx-auto d-flex justify-content-center align-items-center'>
              <div className='story-image d-flex justify-content-center align-items-center rounded-circle'>
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Paints+%26+Chemicals+(1).png" alt="img" className='h-100 rounded-circle'/>
              </div>
            </div>
            <h5>Paints & Chemicals</h5>
          </div>
          <div className='w-116'>
            <div className='story-item mb-2 rounded-circle mx-auto d-flex justify-content-center align-items-center'>
              <div className='story-image d-flex justify-content-center align-items-center rounded-circle'>
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Electricals+%26+Lights+(2).png" alt="img" className='h-100 rounded-circle'/>
              </div>
            </div>
            <h5>Electricals & Lights</h5>
          </div>
          <div className='w-116'>
            <div className='story-item mb-2 rounded-circle mx-auto d-flex justify-content-center align-items-center'>
              <div className='story-image d-flex justify-content-center align-items-center rounded-circle'>
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Hardware+%26+Tools+(2).png" alt="img" className='h-100 rounded-circle'/>
              </div>
            </div>
            <h5>Hardware & Tools</h5>
          </div>
        </div>
      </Container>
    </Container>
    <Container fluid className='mt-lg-4 mb-4 mb-lg-0'>
      <Container>
        <Row>
          <Col lg='12'>
            <div className='brands bg-white p-3 p-lg-4'>
              <p className='fw-semibold'>Explore Our Prices</p>
              <div className='slider1 mb-4'>
                <Slider {...settings}>
                  <div>
                    <div className='brand-partner px-3 py-lg-4 py-3 mb-3 text-center'>
                      <div className='b-img mb-3'>
                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/Tesla.png" alt="" className='img-fluid m-auto'/>
                      </div>
                      <h5 className='mb-2'>HDHMR 16.75 mm</h5>
                      <p className='fw-medium p mb-2'>Starting From</p>
                      <div>
                        <h3 className='mb-0 fw-bold h3-price'>₹75/-</h3>
                        <span className='span fw-semibold'>per sqft</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='brand-partner px-3 py-lg-4 py-3 mb-3 text-center'>
                      <div className='b-img mb-3'>
                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/CommercialLogo.png" alt="" className='img-fluid m-auto'/>
                      </div>
                      <h5 className='mb-2'>HDHMR 17 mm</h5>
                      <p className='fw-medium p mb-2'>Starting From</p>
                      <div>
                        <h3 className='mb-0 fw-bold h3-price'>₹49/-</h3>
                        <span className='span fw-semibold'>per sqft</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='brand-partner px-3 py-lg-4 py-3 mb-3 text-center'>
                      <div className='b-img mb-3'>
                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/Centuryply.png" alt="" className='img-fluid m-auto'/>
                      </div>
                      <h5 className='mb-2'>Plywood 18 mm</h5>
                      <p className='fw-medium p mb-2'>Starting From</p>
                      <div>
                        <h3 className='mb-0 fw-bold h3-price'>₹91/-</h3>
                        <span className='span fw-semibold'>per sqft</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='brand-partner px-3 py-lg-4 py-3 mb-3 text-center'>
                      <div className='b-img mb-3'>
                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/CommercialLogo.png" alt="" className='img-fluid m-auto'/>
                      </div>
                      <h5 className='mb-2'>Plywood 18 mm</h5>
                      <p className='fw-medium p mb-2'>Starting From</p>
                      <div>
                        <h3 className='mb-0 fw-bold h3-price'>₹55/-</h3>
                        <span className='span fw-semibold'>per sqft</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='brand-partner px-3 py-lg-4 py-3 mb-3 text-center'>
                      <div className='b-img mb-3'>
                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/merino.png" alt="" className='img-fluid m-auto'/>
                      </div>
                      <h5 className='mb-2'>Laminates 0.8 mm</h5>
                      <p className='fw-medium p mb-2'>Starting From</p>
                      <div>
                        <h3 className='mb-0 fw-bold h3-price'>₹799/-</h3>
                        <span className='span fw-semibold'>per sheet</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='brand-partner px-3 py-lg-4 py-3 mb-3 text-center'>
                      <div className='b-img mb-3'>
                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/skydecor.png" alt="" className='img-fluid m-auto'/>
                      </div>
                      <h5 className='mb-2'>Laminates 0.8 mm</h5>
                      <p className='fw-medium p mb-2'>Starting From</p>
                      <div>
                        <h3 className='mb-0 fw-bold h3-price'>₹630/-</h3>
                        <span className='span fw-semibold'>per sheet</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='brand-partner px-3 py-lg-4 py-3 mb-3 text-center'>
                      <div className='b-img mb-3'>
                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/asian-paints-logo-EAB2F07910-seeklogo.com-removebg-preview.png" alt="" className='img-fluid m-auto'/>
                      </div>
                      <h5 className='mb-2'>Emulsion</h5>
                      <p className='fw-medium p mb-2'>Starting From</p>
                      <div>
                        <h3 className='mb-0 fw-bold h3-price'>₹2750/-</h3>
                        <span className='span fw-semibold'>20 LTS</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='brand-partner px-3 py-lg-4 py-3 mb-3 text-center'>
                      <div className='b-img mb-3'>
                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/sakarni-logo-removebg-preview.png" alt="" className='img-fluid m-auto'/>
                      </div>
                      <h5 className='mb-2'>POP</h5>
                      <p className='fw-medium p mb-2'>Starting From</p>
                      <div>
                        <h3 className='mb-0 fw-bold h3-price'>₹210/-</h3>
                        <span className='span fw-semibold'>25Kgs Bag</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='brand-partner px-3 py-lg-4 py-3 mb-3 text-center'>
                      <div className='b-img mb-3'>
                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/polycab-new-logo-97B697096F-seeklogo.com-removebg-preview.png" alt="" className='img-fluid m-auto'/>
                      </div>
                      <h5 className='mb-2'>Wires</h5>
                      <p className='fw-medium p mb-2'>Upto</p>
                      <div>
                        <h3 className='mb-0 fw-bold h3-price'>57% off</h3>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='brand-partner px-3 py-lg-4 py-3 mb-3 text-center'>
                      <div className='b-img mb-3'>
                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/Legrand.png" alt="" className='img-fluid m-auto'/>
                      </div>
                      <h5 className='mb-2'>Switches</h5>
                      <p className='fw-medium p mb-2'>Upto</p>
                      <div>
                        <h3 className='mb-0 fw-bold h3-price'>67% off</h3>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className='py-5'>
      <Row>
        <Col lg='4'>
          <div className='banners'>
            <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/homeBanner/images/deliveryPackageBanner.jpg" alt="" className='w-100 h-auto'/>
          </div>
        </Col>
        <Col lg='4'>
          <div className='banners'>
            <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/homeBanner/images/Low+Price+Challenge+Banner.png" alt="" className='w-100 h-auto'/>
          </div>
        </Col>
        <Col lg='4'>
          <div className='banners'>
            <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/homeBanner/images/500+Coupon+Banner.png" alt="" className='w-100 h-auto'/>
          </div>
        </Col>
      </Row>
    </Container>
    <Container fluid className='pt-4 d-none d-lg-block'>
      <Container>
        <Row className='justify-content-center'>
          <Col md='4' className='mb-4'>
            <div className='offer-card p-2 d-flex align-items-center cursor-pointer'>
              <div className='offer-icon h-100'>
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/offers/image+253.png" alt="" className='img-fluid'/>
              </div>
              <div className='ms-2'>
                <h4 className='fw-semibold'>FREE DELIVERY</h4>
                <p className='m-0 line-clamp-1'>Subscribe to our delivery package to enjoy free shipping</p>
              </div>
            </div>
          </Col>
          <Col md='4' className='mb-4'>
          <div className='offer-card p-2 d-flex align-items-center cursor-pointer'>
              <div className='offer-icon h-100'>
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/offers/image+253.png" alt="" className='img-fluid'/>
              </div>
              <div className='ms-2'>
                <h4 className='fw-semibold'>WELCOME500</h4>
                <p className='m-0 line-clamp-1'>Save Rs 500</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className='floating-label mb-4 mt-5 p-3'>
      <div className='label-main'>
        <div className='inner-label'>
          <div className='d-inline-block align-middle me-4 me-lg-5 pe-lg-5 fw-semibold about-label'>
            <img src="https://mistry.store/images/currency-rupee.svg" alt="" className='img-fluid me-2 me-lg-3'/>
            <p className='m-0 d-inline-block'>Always Low Prices</p>
          </div>
          <div className='d-inline-block align-middle me-4 me-lg-5 pe-lg-5 fw-semibold about-label'>
            <img src="https://mistry.store/images/contact-phone.svg" alt="" className='img-fluid me-2 me-lg-3'/>
            <p className='m-0 d-inline-block'>Dedicated Relationship Manager</p>
          </div>
          <div className='d-inline-block align-middle me-4 me-lg-5 pe-lg-5 fw-semibold about-label'>
            <img src="https://mistry.store/images/multi-cat-store.svg" alt="" className='img-fluid me-2 me-lg-3'/>
            <p className='m-0 d-inline-block'>Multi Category Store</p>
          </div>
          <div className='d-inline-block align-middle me-4 me-lg-5 pe-lg-5 fw-semibold about-label'>
            <img src="https://mistry.store/images/logistics-icon.svg" alt="" className='img-fluid me-2 me-lg-3'/>
            <p className='m-0 d-inline-block'>Simplified Logistics</p>
          </div>
        </div>
      </div>
    </Container>
    <Container fluid>
      <Container>
        <Row>
          <Col xs='12'>
            <div className='mt-4 mb-5 requirement-box'>
              <Row>
                <Col xs='6' className='d-flex align-items-center text-center d-lg-block'>
                  <img src="https://mistry.store/images/engineer.png" alt="" className='img-fluid'/>
                </Col>
                <Col xs='6' className='d-flex align-items-center justify-content-lg-start justify-content-end'>
                  <div className='d-flex align-items-center flex-column justify-content-end pe-3 pe-lg-0 py-lg-0 py-3'>
                    <p className='text-end mb-4 ms-auto fw-medium'>
                      <span className='fw-semibold'>Share your requirements </span>
                      & <br></br> get your Estimate <br></br> within 
                      <span className='fw-semibold'> 4 hrs</span>
                    </p>
                    <button className='order-btn ms-auto px-5 fw-semibold'>Order Now</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className='building-section d-none d-lg-block '>
      <Container className='position-relative'>
        <div className='mb-2 mb-lg-5 text-start mt-4 mt-lg-0 py-3'>
          <h3 className='m-0'>Here’s how Mistry.Store works</h3>
          <p className='mb-0'>All your home building materials, just a few steps away!</p>
        </div>
        <Row>
          <Col lg='5' className='mt-4 mt-lg-0'>
            <div className='d-flex align-items-start mb-lg-5 mb-md-4 mb-2 how-works-box'>
              <div className='px-2 me-md-3 me-1'>
                <img src="https://mistry.store/images/send-req-home.svg" alt="" className='img-fluid'/>
              </div>
              <div>
                <h5 className='fw-semibold'>Search & send your requirements</h5>
                <p className='fw-normal'>Send your product requirements by sharing images, adding items from our master list, call your RM or Whatsapp</p>
              </div>
            </div>
            <div className='d-flex align-items-start mb-lg-5 mb-md-4 mb-2 how-works-box'>
              <div className='px-2 me-md-3 me-1'>
                <img src="https://mistry.store/images/rev-quote-home.svg" alt="" className='img-fluid'/>
              </div>
              <div>
                <h5 className='fw-semibold'>Review & confirm order</h5>
                <p className='fw-normal'>Review the quote and confirm your order</p>
              </div>
            </div>
            <div className='d-flex align-items-start mb-lg-5 mb-md-4 mb-2 how-works-box'>
              <div className='px-2 me-md-3 me-1'>
                <img src="https://mistry.store/images/del-support-home.svg" alt="" className='img-fluid'/>
              </div>
              <div>
                <h5 className='fw-semibold'>Get delivery support</h5>
                <p className='fw-normal'>See realtime status and get end-to-end support for delivery onsite</p>
              </div>
            </div>
          </Col>
          <Col lg='7' className='mb-3 mb-lg-0'>
            <div className='m-auto position-relative video-box'>
              <div className='d-flex align-items-start justify-content-between p-lg-4 p-3'>
                <h3 className='text-white line-clamp-1'>
                  <img src="https://mistry.store/images/mystry-red-logo.jpg" alt="" className='img-fluid rounded-circle me-2' width={40}/>
                  Mistry.Store | One-stop Shop for All Building Material Purchases | Exclusive For Professionals Only
                </h3>
                <div className='text-decoration-none text-nowrap text-center copy-link'>
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="copy" className="svg-copylink text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="28"><path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path></svg>
                  <p class="text-white mt-2 fw-semibold">Copy Link</p>
                </div>
                <div className='bg-transparent border-0 shadow-none outline-none position-absolute yt-play-video'>
                  <img src="https://mistry.store/images/yt-play-btn.svg" alt="yt" className='img-fluid' width={90}/>
                </div>
                <a href="https://www.youtube.com/watch?v=D9GGU4f7Ttk" className='watch-yt'>
                  Watch on
                  <img src="https://mistry.store/images/yt-icon.svg" alt="" className='ms-1 img-fluid'/>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <img src="https://mistry.store/images/home/dot-grid-gray.png" alt="" className='position-absolute dots-img'/>
      </Container>
    </Container>
    <Container fluid>
      <Container>
        <Row>
          <Col xs='12'>
            <div className='my-5 refer-box'>
              <Row>
                <Col xs='6' className='d-flex align-items-center text-center d-lg-block'>
                  <img src="https://mistry.store/images/three-painters.png" alt="" className='img-fluid'/>
                </Col>
                <Col xs='6' className='d-flex align-items-center justify-content-lg-start justify-content-end'>
                  <div className='d-flex align-items-center flex-column justify-content-end pe-3 pe-lg-0 py-lg-0 py-3'>
                    <p className='text-end mb-4 ms-auto fw-medium'>
                      <span className='fw-semibold'>Refer Fellow Professionals</span><br></br>
                      & Earn Referral Benefits
                    </p>
                    <button className='order-btn ms-auto px-5 fw-semibold'>Refer Now</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className='register-section d-none d-lg-block'>
      <Container>
        <Row>
          <Col lg='6' className='pt-3 pt-lg-0 d-flex align-items-center'>
            <div className='text-center text-lg-start'>
              <h2 className='fw-bold text-white'>
                Register with us and get access to a world of exclusive
                <span> PRO Benefits</span>
              </h2>
              <img src="https://mistry.store/images/home/underline.png" alt="" className='img-fluid d-none d-lg-inline'/>
              <div className='mt-lg-5 mt-2 pt-lg-3'>
                <button className='order-btn ms-auto px-5 fw-semibold'>Register with us</button>
              </div>
            </div>
          </Col>
          <Col lg='6' className='pt-lg-0 pt-4 red-dot-bg'>
            <Row className='mx-auto benefits'>
              <Col xs='6' className='mb-4'>
                <div className='benefits-box p-3 d-flex justify-content-start align-items-center flex-column'>
                  <div className='me-auto'>
                    <img src="https://mistry.store/images/excl-network.svg" alt="" className='img-fluid mb-2'/>
                  </div>
                  <h6 className='mb-2 fw-semibold mt-auto me-auto'>Networking Event Invites</h6>
                  <p className='fw-normal mb-0 me-auto'>Exclusive Access to Premier Industry Events</p>
                </div>
              </Col>
              <Col xs='6' className='mb-4'>
                <div className='benefits-box p-3 d-flex justify-content-start align-items-center flex-column'>
                  <div className='me-auto'>
                    <img src="https://mistry.store/images/excl-loyality.svg" alt="" className='img-fluid mb-2'/>
                  </div>
                  <h6 className='mb-2 fw-semibold mt-auto me-auto'>Loyalty Points on Every Purchase</h6>
                  <p className='fw-normal mb-0 me-auto'>Shop more!<br></br>Earn more!</p>
                </div>
              </Col>
              <Col xs='6' className='mb-4'>
                <div className='benefits-box p-3 d-flex justify-content-start align-items-center flex-column'>
                  <div className='me-auto'>
                    <img src="https://mistry.store/images/excl-refer.svg" alt="" className='img-fluid mb-2'/>
                  </div>
                  <h6 className='mb-2 fw-semibold mt-auto me-auto'>Refer & Earn Schemes</h6>
                  <p className='fw-normal mb-0 me-auto'>Share and save with our referral program.</p>
                </div>
              </Col>
              <Col xs='6' className='mb-4'>
                <div className='benefits-box p-3 d-flex justify-content-start align-items-center flex-column'>
                  <div className='me-auto'>
                    <img src="https://mistry.store/images/excl-disc.svg" alt="" className='img-fluid mb-2'/>
                  </div>
                  <h6 className='mb-2 fw-semibold mt-auto me-auto'>Additional Discounts on Every Purchase</h6>
                  <p className='fw-normal mb-0 me-auto'>Save more on every buy with exclusive discounts!</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className='pt-5 trusted-section'>
      <Container>
        <div className='trusted-box p-lg-4'>
          <h3 className='fw-medium mb-4'>Trusted by <span className='fw-semibold'>75+ Brands</span></h3>
          <div className='trusted-nav'>
            <ul className='d-flex mb-0 pb-2 pb-lg-0'>
              <li className='me-2 me-lg-3'>
                <Link className='d-flex align-items-center justify-content-center active'>Electricals</Link>
              </li>
              <li className='me-2 me-lg-3'>
                <Link className='d-flex align-items-center justify-content-center'>Paints</Link>
              </li>
              <li className='me-2 me-lg-3'>
                <Link className='d-flex align-items-center justify-content-center'>Wood Materials</Link>
              </li>
              <li className='me-2 me-lg-3'>
                <Link className='d-flex align-items-center justify-content-center'>Hardware & Plumbing</Link>
              </li>
            </ul>
          </div>
          <div className='pt-lg-5 pb-3 pb-lg-0 pt-4'>
            <div className='d-flex flex-wrap justify-content-center justify-content-lg-start'>
              <div className='trusted-companies mb-lg-4 mb-3 d-flex align-items-center justify-content-center'>
                <img src="https://mistry.store/images/electricals/elctricals1.svg" alt="" className='img-fluid m-auto'/>
              </div>
              <div className='trusted-companies mb-lg-4 mb-3 d-flex align-items-center justify-content-center'>
                <img src="https://mistry.store/images/electricals/elctricals2.svg" alt="" className='img-fluid m-auto'/>
              </div>
              <div className='trusted-companies mb-lg-4 mb-3 d-flex align-items-center justify-content-center'>
                <img src="https://mistry.store/images/electricals/elctricals3.svg" alt="" className='img-fluid m-auto'/>
              </div>
              <div className='trusted-companies mb-lg-4 mb-3 d-flex align-items-center justify-content-center'>
                <img src="https://mistry.store/images/electricals/elctricals4.svg" alt="" className='img-fluid m-auto'/>
              </div>
              <div className='trusted-companies mb-lg-4 mb-3 d-flex align-items-center justify-content-center'>
                <img src="https://mistry.store/images/electricals/elctricals5.svg" alt="" className='img-fluid m-auto'/>
              </div>
              <div className='trusted-companies mb-lg-4 mb-3 d-flex align-items-center justify-content-center'>
                <img src="https://mistry.store/images/electricals/elctricals6.svg" alt="" className='img-fluid m-auto'/>
              </div>
              <div className='trusted-companies mb-lg-4 mb-3 d-flex align-items-center justify-content-center'>
                <img src="https://mistry.store/images/electricals/elctricals7.svg" alt="" className='img-fluid m-auto'/>
              </div>
              <div className='trusted-companies mb-lg-4 mb-3 d-flex align-items-center justify-content-center'>
                <img src="https://mistry.store/images/electricals/elctricals8.svg" alt="" className='img-fluid m-auto'/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
    <Container fluid className='flash-deals-box pt-0 pt-lg-5 d-none d-lg-block'>
      <Container>
        <Row>
          <Col lg='6' className='mb-3 mb-lg-0'>
            <div className='mb-lg-0 mb-3 position-relative'>
              <h2 className='m-0'>Exclusive platform for all</h2>
              <h3 className='mb-2 fw-bold'>Home Building Professionals</h3>
              <img src="https://mistry.store/images/home/bg-gray-block-left-72.png" alt="" className='position-absolute gray-bg d-lg-block d-none'/>
            </div>
            <p className='fw-normal pe-lg-4'>Introducing Mistry.Store, India's first organized platform that simplifies building material purchases for home-building professionals like Architects, Interior Decorators, Contractors & Skilled workers.</p>
            <p className='fw-normal pe-lg-4'>A comprehensive platform dealing in over 100+ brands across Plywood & Boards, Hardware & Tools, Electricals & Lights, Paints & Chemicals, Sanitary & Plumbing.</p>
          </Col>
          <Col lg='6' className='d-flex flex-wrap justify-content-end'>
            <div className='building-box mb-3 p-4 mx-2 text-center d-flex flex-column'>
              <img src="https://mistry.store/images/currency-rupee.svg" alt="" className='img-fluid mb-3'/>
              <h5 className='mb-2 fw-semibold'>Always Low Prices</h5>
              <p className='fw-normal m-0'>We offer low prices everyday on quality and original products</p>
            </div>
            <div className='building-box mb-3 p-4 mx-2 text-center d-flex flex-column'>
              <img src="https://mistry.store/images/logistics-icon.svg" alt="" className='img-fluid mb-3'/>
              <h5 className='mb-2 fw-semibold'>Simplified Logistics</h5>
              <p className='fw-normal m-0'>We take care of the entire process from placing the order to its delivery</p>
            </div>
            <div className='building-box mb-3 p-4 mx-2 text-center d-flex flex-column'>
              <img src="https://mistry.store/images/dedecate-rm.svg" alt="" className='img-fluid mb-3'/>
              <h5 className='mb-2 fw-semibold'>Dedicated Relationship manager</h5>
              <p className='fw-normal m-0'>A dedicated RM who takes care of placing the order to its delivery</p>
            </div>
            <div className='building-box mb-3 p-4 mx-2 text-center d-flex flex-column'>
              <img src="https://mistry.store/images/multi-cat-store.svg" alt="" className='img-fluid mb-4'/>
              <h5 className='mb-2 fw-semibold'>Multi Category Store</h5>
              <p className='fw-normal m-0'>We offer products from 10+ categories, providing end to end solutions</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className='community-section d-none d-lg-block'>
      <Container className='community'>
        <h2 className='mb-md-5 mb-3 text-center fw-normal'>Be a part of <span className='fw-semibold'>Mistry’s Growing Community</span></h2>
        <Row>
          <Col xs='12'>
            <Row className='community-row mx-auto'>
              <div className='community-box px-0 m-3 text-center d-block text-decoration-none rounded overflow-hidden'>
                <img src="https://mistry.store/images/architect.png" alt="" className='img-fluid'/>
                <h3 className='py-lg-3 py-2 m-0'>Architects</h3>
              </div>
              <div className='community-box px-0 m-3 text-center d-block text-decoration-none rounded overflow-hidden'>
                <img src="https://mistry.store/images/decorators.png" alt="" className='img-fluid'/>
                <h3 className='py-lg-3 py-2 m-0'>Interior Decorators</h3>
              </div>
              <div className='community-box px-0 m-3 text-center d-block text-decoration-none rounded overflow-hidden'>
                <img src="https://mistry.store/images/contractors.png" alt="" className='img-fluid'/>
                <h3 className='py-lg-3 py-2 m-0'>Contractors</h3>
              </div>
              <div className='community-box px-0 m-3 text-center d-block text-decoration-none rounded overflow-hidden'>
                <img src="https://mistry.store/images/builders.png" alt="" className='img-fluid'/>
                <h3 className='py-lg-3 py-2 m-0'>Builders</h3>
              </div>
              <div className='community-box px-0 m-3 text-center d-block text-decoration-none rounded overflow-hidden'>
                <img src="https://mistry.store/images/electricians.png" alt="" className='img-fluid'/>
                <h3 className='py-lg-3 py-2 m-0'>Electrical Experts</h3>
              </div>
              <div className='community-box px-0 m-3 text-center d-block text-decoration-none rounded overflow-hidden'>
                <img src="https://mistry.store/images/carpenters.png" alt="" className='img-fluid'/>
                <h3 className='py-lg-3 py-2 m-0'>Carpentry Experts</h3>
              </div>
              <div className='community-box px-0 m-3 text-center d-block text-decoration-none rounded overflow-hidden'>
                <img src="https://mistry.store/images/plumbers.png" alt="" className='img-fluid'/>
                <h3 className='py-lg-3 py-2 m-0'>Plumbing Experts</h3>
              </div>
              <div className='community-box px-0 m-3 text-center d-block text-decoration-none rounded overflow-hidden'>
                <img src="https://mistry.store/images/painters.png" alt="" className='img-fluid'/>
                <h3 className='py-lg-3 py-2 m-0'>Paint Experts</h3>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className='py-4 py-lg-5 download-section'>
      <Container>
        <Row className='align-items-center'>
          <Col lg='7' className='text-center text-lg-start'>
            <h2 className='mb-lg-4 mb-3 fw-semibold'>Mistry.Store Download the App Now!</h2>
            <img src="https://mistry.store/images/home/mobile-img.png" alt="" className='d-lg-none m-auto mb-3'/>
            <div className='d-flex align-items-center justify-content-center justify-content-lg-start'>
              <div class="px-2 px-xl-0">
                <a href="https://play.google.com/store/apps/details?id=com.mistrystore.app" target="blank">
                  <img src="https://mistry.store/images/home/google-play.png" alt="" class="me-0 me-lg-3 img-fluid"/>
                </a>
              </div>
              <div class="px-2 px-xl-0">
                <a href="https://apps.apple.com/in/app/mistry-store/id1670617517" target="blank">
                  <img src="https://mistry.store/images/home/app-store.png" alt="" class="me-0 me-lg-3 img-fluid"/>
                </a>
              </div>
            </div>
          </Col>
          <Col lg='5'>
            <img src="https://mistry.store/images/home/mobile-img.png" alt="" className='d-none d-lg-block m-auto'/>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className='professional-section'>
      <Container>
        <h2 className='mb-4 d-none d-lg-block'>What our Professionals say about us!</h2>
        <h5 className='m-0 d-lg-none'>What our Professionals say about us!</h5>
        <Row>
          <Col lg='3'>
            <div className='border-0 pb-2 h-100 card'>
              <div className='play-image-box position-relative'>
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/proreviews/Tanu+Gupta+Thumbnail+(2)+1.png" alt="" className='card-img-top rounded'/>
                <div className='position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center'>
                  <img src="https://mistry.store/images/home/play-circle-outline.svg" alt="" className='cursor-pointer'/>
                </div>
              </div>
              <div className='px-0 pb-0 card-body'>
                <div>
                  <div className='d-flex align-items-center mb-2'>
                    <div><img src="https://mistry.store/images/home/avatar.png" alt="" /></div>
                    <div className='ms-2'>
                      <h5 className='p-0 fw-semibold m-0 line-clamp-1'>Tanu Gupta</h5>
                      <h6 className='fw-normal m-0'>Interior Designer</h6>
                    </div>
                  </div>
                  <p className='fw-normal line-clamp-4'>Mistry.Store is offering all building material under one roof which makes my life easier. I recommend them to all people I know. I hope they keep up with the good work and keep providing us with good service.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <div className='border-0 pb-2 h-100 card'>
              <div className='play-image-box position-relative'>
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/proreviews/Deepak+Gupta+Thumbnail+(1)+2.png" alt="" className='card-img-top rounded'/>
                <div className='position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center'>
                  <img src="https://mistry.store/images/home/play-circle-outline.svg" alt="" className='cursor-pointer'/>
                </div>
              </div>
              <div className='px-0 pb-0 card-body'>
                <div>
                  <div className='d-flex align-items-center mb-2'>
                    <div><img src="https://mistry.store/images/home/avatar.png" alt="" /></div>
                    <div className='ms-2'>
                      <h5 className='p-0 fw-semibold m-0 line-clamp-1'>Deepak Gupta</h5>
                      <h6 className='fw-normal m-0'>Building Contractor</h6>
                    </div>
                  </div>
                  <p className='fw-normal line-clamp-4'>Yahan ek hi platform par saara samaan milta hai, rate market se kaafi ache hai. Quotation bhi phone par mil jaati hai kahin bhagna nahi padta, aur delivery bhi time par mil jaati hai.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <div className='border-0 pb-2 h-100 card'>
              <div className='play-image-box position-relative'>
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/proreviews/Vishal+Sharma+Thumbnail+(1)+3.png" alt="" className='card-img-top rounded'/>
                <div className='position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center'>
                  <img src="https://mistry.store/images/home/play-circle-outline.svg" alt="" className='cursor-pointer'/>
                </div>
              </div>
              <div className='px-0 pb-0 card-body'>
                <div>
                  <div className='d-flex align-items-center mb-2'>
                    <div><img src="https://mistry.store/images/home/avatar.png" alt="" /></div>
                    <div className='ms-2'>
                      <h5 className='p-0 fw-semibold m-0 line-clamp-1'>Vishal Sharma</h5>
                      <h6 className='fw-normal m-0'>Carpentry Contractor</h6>
                    </div>
                  </div>
                  <p className='fw-normal line-clamp-4'>Main apne contractor bhaiyon ko kehna chahunga ki Mistry.Store se jude aur apna keemti samaya bachaye. Ek hi jagah par saara samaan available hai ,aapko kahin bhi nahi jaana padega.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <div className='border-0 pb-2 h-100 card'>
              <div className='play-image-box position-relative'>
                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/proreviews/Sanjeev+kumar+thumbnail+(1)+1.png" alt="" className='card-img-top rounded'/>
                <div className='position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center'>
                  <img src="https://mistry.store/images/home/play-circle-outline.svg" alt="" className='cursor-pointer'/>
                </div>
              </div>
              <div className='px-0 pb-0 card-body'>
                <div>
                  <div className='d-flex align-items-center mb-2'>
                    <div><img src="https://mistry.store/images/home/avatar.png" alt="" /></div>
                    <div className='ms-2'>
                      <h5 className='p-0 fw-semibold m-0 line-clamp-1'>Sanjeev Kumar</h5>
                      <h6 className='fw-normal m-0'>Builder</h6>
                    </div>
                  </div>
                  <p className='fw-normal line-clamp-4'>Mistry.Store se jo bhi maal liya hai chahe 1 lakh ka ho ya 500 ka, they deliver at my site. Any material you will buy from them,you will not face any problem. Trust Mistry.Store and give them one chance.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className='news-section pb-0'>
      <Container className='position-relative'>
        <h2 className='fw-bold mb-4'>Mistry.Store <span className='fw-normal'>in News</span></h2>
        <Row>
          <Col xs='6' lg='3' className='mb-4'>
            <div className='border-0 h-100 card'>
              <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/flash_deals/Untitled-design-168.jpeg" className='card-img-top img-fluid news-img' alt=""/>
              <div className='card-body'>
                <p className='mb-2 line-clamp-4 fw-semibold'>Mistry.Store Launches Indias First Building Material Sampling Van</p>
                <a href="https://helloentrepreneurs.com/startup-news/mistry-store-launches-indias-first-building-material-sampling-van-for-professionals-18208/" className='fw-semibold cursor-pointer text-decoration-none'>Read More
                  <img src="https://mistry.store/images/home/arrow-01.svg" alt="" className='ms-1'/>
                </a>
              </div>
            </div>
          </Col>
          <Col xs='6' lg='3' className='mb-4'>
            <div className='border-0 h-100 card'>
              <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/flash_deals/1.jpg" className='card-img-top img-fluid news-img' alt=""/>
              <div className='card-body'>
                <p className='mb-2 line-clamp-4 fw-semibold'>Mistry Store to quadruple home interior professionals to 10,000, with an aim...</p>
                <a href="https://economictimes.indiatimes.com/industry/indl-goods/svs/construction/mistry-store-to-quadruple-home-interior-professionals-to-10000-with-an-aim-to-cash-on-indias-urbanization/articleshow/97448219.cms?utm_source=whatsapp_pwa&utm_medium=social&utm_camp" className='fw-semibold cursor-pointer text-decoration-none'>Read More
                  <img src="https://mistry.store/images/home/arrow-01.svg" alt="" className='ms-1'/>
                </a>
              </div>
            </div>
          </Col>
          <Col xs='6' lg='3' className='mb-4'>
            <div className='border-0 h-100 card'>
              <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/flash_deals/luxury-home-design-on-budget-sixteen_nine.jpg" className='card-img-top img-fluid news-img' alt=""/>
              <div className='card-body'>
                <p className='mb-2 line-clamp-4 fw-semibold'>This start-up is trying to organise the home interiors segment; here's how</p>
                <a href="https://www.businesstoday.in/latest/corporate/story/this-start-up-is-trying-to-organise-the-home-interiors-segment-heres-how-369452-2023-02-08" className='fw-semibold cursor-pointer text-decoration-none'>Read More
                  <img src="https://mistry.store/images/home/arrow-01.svg" alt="" className='ms-1'/>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className='pt-4 pb-0 bg-white news-section'>
    <Container className='position-relative'>
        <h2 className='fw-bold mb-4'>Mistry.Store <span className='fw-normal'>Blogs</span></h2>
        <Row className='mb-3 mb-lg-5'>
          <Col xs='6' lg='3' className='mb-4'>
            <div className='border-0 h-100 card'>
              <img src="https://static.wixstatic.com/media/d64c34_7b5f3945050c4419b690b8966f93e795~mv2.jpg/v1/fill/w_767,h_493,al_c,lg_1,q_85,enc_auto/d64c34_7b5f3945050c4419b690b8966f93e795~mv2.jpg" className='card-img-top img-fluid news-img' alt=""/>
              <div className='card-body'>
                <p className='mb-2 line-clamp-4 fw-semibold'>How ‘Select my Designer’ simplifies your search for an ideal interior designer?</p>
                <a href="https://www.blog.mistry.store/post/how-select-my-designer-simplifies-your-search-for-an-ideal-interior-designer" className='fw-semibold cursor-pointer text-decoration-none'>Read More
                  <img src="https://mistry.store/images/home/arrow-01.svg" alt="" className='ms-1'/>
                </a>
              </div>
            </div>
          </Col>
          <Col xs='6' lg='3' className='mb-4'>
            <div className='border-0 h-100 card'>
              <img src="https://static.wixstatic.com/media/d64c34_761761e3f2914190b6e3ee4a1f9b1197~mv2.jpg/v1/fill/w_768,h_512,al_c,lg_1,q_85,enc_auto/d64c34_761761e3f2914190b6e3ee4a1f9b1197~mv2.jpg" className='card-img-top img-fluid news-img' alt=""/>
              <div className='card-body'>
                <p className='mb-2 line-clamp-4 fw-semibold'>How can one effectively<br></br> select an ideal interior<br></br> designer?</p>
                <a href="https://www.blog.mistry.store/post/how-can-one-effectively-select-an-ideal-interior-designer" className='fw-semibold cursor-pointer text-decoration-none'>Read More
                  <img src="https://mistry.store/images/home/arrow-01.svg" alt="" className='ms-1'/>
                </a>
              </div>
            </div>
          </Col>
          <Col xs='6' lg='3' className='mb-4'>
            <div className='border-0 h-100 card'>
              <img src="https://static.wixstatic.com/media/d64c34_1599acee435f46109ea70cb6da4662ac~mv2.jpg/v1/fill/w_768,h_512,al_c,lg_1,q_85,enc_auto/d64c34_1599acee435f46109ea70cb6da4662ac~mv2.jpg" className='card-img-top img-fluid news-img' alt=""/>
              <div className='card-body'>
                <p className='mb-2 line-clamp-4 fw-semibold'>Challenges in Choosing an Interior Designer for Your<br></br> Home</p>
                <a href="https://www.blog.mistry.store/post/challenges-in-choosing-an-interior-designer-for-your-home" className='fw-semibold cursor-pointer text-decoration-none'>Read More
                  <img src="https://mistry.store/images/home/arrow-01.svg" alt="" className='ms-1'/>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='footer-contact-box d-none d-lg-flex align-items-center justify-content-between m-auto text-white mb-lg-5 mb-4 position-absolute w-100'>
          <Col md='6'>
            <h4 className='m-0'>Find Building Material for your next construction project!</h4>
          </Col>
          <Col md='6' className='mt-3 mt-md-0 text-center text-md-end'>
            <a class="order-btn fw-medium text-decoration-none px-lg-5 px-4 py-lg-3 py-2" href="https://mistry.store/contact-us">Contact Us</a>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className='home-footer'></Container>
    <Footer/>
    </>
  )
}
