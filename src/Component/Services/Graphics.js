import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import webImg from '../assets/Illustration-Icon-1.png';
import { MainPortfolio } from '../MainPortfolioSingle';
import seo from "../assets/banner-4.png";
import { motion } from 'framer-motion';


export const Graphics = () => {

    const { APP_NAME, setTitle } = useContext(AppContext);
    setTitle(`${APP_NAME}Graphics Designing`);

    return (
        <motion.div initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>

            <div className="seo image-banner sec ">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="h-100 my-auto d-flex flex-column align-items-start justify-content-center col-6">
                            <h1 className='text-start'>An Energy That Builds  Memorable Brands</h1>
                            <Link to={'/contact'} className="btn btn-dark">
                                GET A QUOTE
                            </Link>
                        </div>
                        <div className="h-100 my-4 d-flex flex-column align-items-center justify-content-center col-6 text-center">
                            <img src={seo} alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec py-md-5 py-3">
                <div class="container">
                    <div class="row align-items-center text-start">
                        <div class="col-xl-6 col-lg-7 col-md-8">

                            <div class="about-img about-img1  ">
                                <img src={webImg} alt="" />
                            </div>
                        </div>
                        <div class=" col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
                            <div class="about-caption about-caption1">

                                <div class="section-tittle mb-30">
                                    <h2 className='text-start ps-0 '>Graphics Designing<br /></h2>
                                </div>

                                <div class="single-about">

                                    <p>Having worked with startups for 10+ years and launched over 300 successful products, we offer all the necessary expertise to bring your bold idea to market. Our expert team for web development makes sure to give you the expected project that you require and also maintain the quality of your project or product.
                                        <br />
                                        <br />
                                        We give the best solutions to your any problem that you face. We make sure to provide the tech stack required according to the requirement of your product or project.</p>
                                </div>
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
                                Graphic Design
                            </h1>
                            <p className="para-sm text-muted my-3">
                                Our graphic design services help clients meet their goals and generate
                                desired results. Have a look at some of our most prestigious work.
                            </p>
                        </div>
                        <div className="col-12 my-md-5 my-4">
                            <MainPortfolio pageid={"grap"} />
                        </div>
                        {/* <div className="col-12 text-center my-md-5">
                            <button className="btn btn-main">See More</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
