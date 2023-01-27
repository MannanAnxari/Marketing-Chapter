import React, { useState } from 'react';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import slide from './assets/banner-1.png';
import slide0 from './assets/banner-2.png';
import slide1 from './assets/banner-3.png';
import slide2 from './assets/banner-4.png';
import slide3 from './assets/banner-5.png';
import slide4 from './assets/banner-6.png';
import Sliderz from "react-slick";
import card0 from './assets/card0.png';
import { Link } from 'react-router-dom';
import card1 from './assets/card1.png';
import card2 from './assets/card2.png';
import card3 from './assets/card3.png';
import card4 from './assets/card4.png';
import Brand1 from './assets/Brands/Brand1.png';
import Brand2 from './assets/Brands/Brand2.png';
import Brand3 from './assets/Brands/Brand3.png';
import Brand4 from './assets/Brands/Brand4.png';
import Brand5 from './assets/Brands/Brand5.png';
import Brand6 from './assets/Brands/Brand6.png';
import Brand7 from './assets/Brands/Brand7.png';
import { motion } from 'framer-motion';
import { Testimonials } from './Testimonials';
import { MainPortfolio } from './MainPortfolioSingleHome';

export const Home = () => {

    const [email, setEmail] = useState(null);

    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    };
    return (
        <motion.div initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>
            <div className="sliderMain position-relative">
                <div className='slider container bannerSlider'
                >
                    <div>
                        <div className="mainSlide">
                            <div className="row w-100 h-100">
                                <div className="col-sm-6 col-8 my-auto p-4">
                                    <h1 className='mb-3'>Pakistan's First Remote <span> Based Agency</span></h1>
                                    <div className="row w-100 mx-auto">
                                        <div className="col-md-5 px-0 col-12">

                                            <input type="email" onChange={(e) => setEmail(e.target.value)} className='form-control shadow-sm d-inline-block text-dark' placeholder='Enter Your Website' />

                                        </div>
                                        <div className="col-md-6 px-0 col-12">
                                            <Link className="btn btn-dark py-2 shadow-sm"
                                                to={{
                                                    pathname: "/contact",
                                                    search: `?websilte=${email}`,
                                                    state: { fromDashboard: true }
                                                }}
                                            >Send me a Proposal</Link>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-sm-6 col-4 sliderImage my-auto p-sm-4 p-1"><img src={slide1} alt="slide" className='w-100' /></div>
                            </div>
                        </div>
                        {/* <div className="mainSlide">
                            <div className="row w-100 h-100">
                                <div className="col-sm-6 col-8 my-auto p-4">

                                    <h1 className='mb-3'>An energy that build memorable <span>brands</span></h1>
                                    <button className="btn btn-dark">
                                        GET A QUOTE
                                    </button>
                                </div>
                                <div className="col-sm-6 col-4 sliderImage my-auto p-sm-4 p-1"><img src={slide2} alt="slide" className='w-100' /></div>
                            </div>
                        </div> */}
                        {/* <Slide index={1} className="mainSlide">
                            <div className="row w-100 h-100">
                                <div className="col-sm-6 col-8 my-auto p-4">

                                    <h1 className='mb-3'>An energy that build memorable <span>brands</span></h1>
                                    <button className="btn btn-dark">
                                        GET A QUOTE
                                    </button>
                                </div>
                                <div className="col-sm-6 col-4 sliderImage my-auto p-sm-4 p-1"><img src={slide0} alt="slide" className='w-100' /></div>
                            </div>
                        </Slide>


                        <Slide index={4} className="mainSlide">
                            <div className="row w-100 h-100">
                                <div className="col-sm-6 col-8 my-auto p-4">

                                    <h1 className='mb-3'>We Write The Best Chapter for Your <span> Brand</span></h1>
                                    <button className="btn btn-dark">
                                        GET A QUOTE
                                    </button>
                                </div>
                                <div className="col-sm-6 col-4 sliderImage my-auto p-sm-4 p-1"><img src={slide3} alt="slide" className='w-100' /></div>
                            </div>
                        </Slide>
                        <Slide index={2} className="mainSlide">
                            <div className="row w-100 h-100">
                                <div className="col-sm-6 col-8 my-auto p-4">

                                    <h1 className='mb-3 text-capitalize'>Drive more Leads, <br />more revenue with our <span> digital marketing services</span></h1>
                                    <Link to={'/contact'} className="btn btn-dark">
                                        GET A QUOTE
                                    </Link>
                                </div>
                                <div className="col-sm-6 col-4 sliderImage my-auto p-sm-4 p-1"><img src={slide} alt="slide" className='w-100' /></div>
                            </div>

                        </Slide>

                        <Slide index={5} className="mainSlide">
                            <div className="row w-100 h-100">
                                <div className="col-sm-6 col-8 my-auto p-4">

                                    <h1 className='mb-3'>An energy that build memorable <span>brands</span></h1>
                                    <button className="btn btn-dark">
                                        GET A QUOTE
                                    </button>
                                </div>
                                <div className="col-sm-6 col-4 sliderImage my-auto p-sm-4 p-1"><img src={slide4} alt="slide" className='w-100' /></div>
                            </div>
                        </Slide> */}
                    </div>
                    {/* <ButtonBack>Back</ButtonBack>
                    <ButtonNext>Next</ButtonNext> */}
                </div>
            </div>
            {/* <div className="sec p-5 home">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="heading">Our Services
                            </h1>
                            <p className="my-3 text-muted para-sm">
                                From branding strategies and graphic design to web development and SEO, our masterful team cover everything with perfection to help you transform your visionary company into a reality.
                            </p>
                        </div>
                        <div className="col-md-4 col-12 my-3">
                            <div class="card">
                                <div class=""><img src={card0} draggable={false} className={'w-card'} alt="card" /></div>
                                <p class="title">Graphic Design</p>
                                <p class="text">Whether you’re looking for an out-of-the-box logo design or game-changing stationery for your business, the top-rated designers at MediaChapter can do it for you. </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-3">
                            <div class="card">
                                <div class=""><img src={card1} draggable={false} className={'w-card'} alt="card" /></div>
                                <p class="title">Web Development</p>
                                <p class="text"> Want a website where people come, stay, and take desired actions? You are at the right place. Get in touch with us now to get a workable website for your business.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-3">
                            <div class="card">
                                <div class=""><img src={card2} draggable={false} className={'w-card'} alt="card" /></div>
                                <p class="title">Digital Marketing</p>
                                <p class="text">Whether you’re a startup or a settled company, our profound digital experts will come up with innovative strategies to drive new clients to your website.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-3">
                            <div class="card">
                                <div class=""><img src={card3} draggable={false} className={'w-card'} alt="card" /></div>
                                <p class="title">Content Writing</p>
                                <p class="text">No matter how good your logo or website is, you can’t increase engagement without creating high-quality, fresh, and unique content. At MediaChapter, we have creative writers who can do the job for you.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-3">
                            <div class="card">
                                <div class=""><img src={card4} draggable={false} className={'w-card'} alt="card" /></div>
                                <p class="title">SEO</p>
                                <p class="text">Want a website where people come, stay, and take desired actions? You are at the right place. Get in touch with us now to get a workable website for your business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="sec py-5 home">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h1 className="heading">Our Services
                            </h1>
                            <p className="my-3 text-muted para-sm">
                                From branding strategies and graphic design to web development and SEO, our masterful team cover everything with perfection to help you transform your visionary company into a reality.
                            </p>
                        </div>
                        <div className="col-md-4 col-12 my-3 m-auto">
                            <div class="card crd">
                                <div class="bottom-curve"></div>
                                <div class="image-crop cardImg text-start">
                                    <img src={card0} draggable={false} className={'w-card'} alt="card" />
                                </div>
                                <h1 className='my-3  fs-3 text-start fw-normal'>Graphic Design</h1>
                                <p className='mb-0 para px-0 text-start'>Whether you’re looking for an out-of-the-box logo design or game-changing stationery for your business, the top-rated designers at MediaChapter can do it for you. </p>
                                <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-3 m-auto">
                            <div class="card crd">
                                <div class="bottom-curve"></div>
                                <div class="image-crop cardImg text-start">
                                    <img src={card1} draggable={false} className={'w-card'} alt="card" />
                                </div>
                                <h1 className='my-3  fs-3 text-start fw-normal'> Web Development			</h1>
                                <p className='mb-0 para px-0'> text-startWant a website where people come, stay, and take desired actions? You are at the right place. Get in touch with us now to get a workable website for your business.</p>
                                <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-3 m-auto">
                            <div class="card crd">
                                <div class="bottom-curve"></div>
                                <div class="image-crop cardImg text-start">
                                    <img src={card2} draggable={false} className={'w-card'} alt="card" />
                                </div>
                                <h1 className='my-3  fs-3 text-start fw-normal'> 		Digital Marketing	</h1>
                                <p className='mb-0 para px-0 text-start'>Whether you’re a startup or a settled company, our profound digital experts will come up with innovative strategies to drive new clients to your website.</p>
                                <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-3 ms-auto">
                            <div class="card crd">
                                <div class="bottom-curve"></div>
                                <div class="image-crop cardImg text-start">
                                    <img src={card3} draggable={false} className={'w-card'} alt="card" />
                                </div>
                                <h1 className='my-3  fs-3 text-start fw-normal'> 		  Content Writing			</h1>
                                <p className='mb-0 para px-0'> text-startNo matter how good your logo or website is, you can’t increase engagement without creating high-quality, fresh, and unique content. At MediaChapter, we have creative writers who can do the job for you.</p>
                                <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-3 me-auto">
                            <div class="card crd">
                                <div class="bottom-curve"></div>
                                <div class="image-crop cardImg text-start">
                                    <img src={card4} draggable={false} className={'w-card'} alt="card" />
                                </div>
                                <h1 className='my-3  fs-3 text-start fw-normal'> 		  SEO			</h1>
                                <p className='mb-0 para px-0'> text-startWant a website where people come, stay, and take desired actions? You are at the right place. Get in touch with us now to get a workable website for your business.</p>
                                <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="sec py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="heading">
                                Our Recent Works
                            </h1>
                            <p className="para-sm text-muted my-3">
                                We create client-focused websites that generate desired results. Transform your digital presence with the help of our professional web developers.
                            </p>
                        </div>
                    </div>
                    <MainPortfolio />
                </div>
            </div>
            <div className="sec py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="heading">How It Works</h1>
                            <p className="my-3 para-sm text-muted">All it takes is three easy steps to get started your branding process with MediaChapter.</p>
                        </div>
                        <div className="col-12 my-5">
                            <div className="row">
                                <div className="col-md-4 col-12 my-md-0 my-4">
                                    <div className="main text-center">
                                        <div className="bg-danger px-4 py-2 rounded-2 text-white d-inline">
                                            STEP 01
                                        </div>
                                        <h4 className="heading-sm fs-4 mt-4">
                                            Fill The Form
                                        </h4>
                                        <p className="text-muted para-sm">
                                            First things first. Tell us about your business and needs via the form so that we connect you with the right people.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 my-md-0 my-4">
                                    <div className="main text-center">
                                        <div className="bg-danger px-4 py-2 rounded-2 text-white d-inline">
                                            STEP 02
                                        </div>
                                        <h4 className="heading-sm fs-4 mt-4">
                                            Connect With Experts

                                        </h4>
                                        <p className="text-muted para-sm">
                                            Once we get your form, we connect you with the required experts. You can keep in touch with them throughout the working process.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 my-md-0 my-4">
                                    <div className="main text-center">
                                        <div className="bg-danger px-4 py-2 rounded-2 text-white d-inline">
                                            STEP 03
                                        </div>
                                        <h4 className="heading-sm fs-4 mt-4">
                                            Get The Project

                                        </h4>
                                        <p className="text-muted para-sm">
                                            If it’s a logo design, website, or content writing, we will hand over your project before the deadline and if it’s digital marketing or SEO-related work, we will share daily, weekly, and monthly reports with you.

                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 mx-auto mt-md-5">
                            <Link to="/contact" className="btn btn-main">GET A QUOTE</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec py-5">
                <section className="customer-logos slider">
                    <Sliderz {...settings}>

                        <div className="slide"><img alt="" src={Brand1} /></div>
                        <div className="slide"><img alt="" src={Brand2} /></div>
                        <div className="slide"><img alt="" src={Brand3} /></div>
                        <div className="slide"><img alt="" src={Brand4} /></div>
                        <div className="slide"><img alt="" src={Brand5} /></div>
                        <div className="slide"><img alt="" src={Brand6} /></div>
                        <div className="slide"><img alt="" src={Brand7} /></div>

                    </Sliderz>
                </section>
            </div>
            <Testimonials />
            {/* <div className="sec py-5">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <img src={TrustPiolot} alt="trustpiolet" />
                        </div>
                    </div>
                </div>
            </div> */}
        </motion.div>
    )
}
