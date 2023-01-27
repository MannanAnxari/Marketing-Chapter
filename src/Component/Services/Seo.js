import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import seo from "../assets/banner-3.png";
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { ContactForm } from '../ContactForm';
import { SkillsCircle } from '../SkillsCircle';
import webImg from '../assets/Illustration-Icon-5.png';

export const Seo = () => {
    const { APP_NAME, setTitle } = useContext(AppContext);
    setTitle(`${APP_NAME}SEO`);
    return (
        <motion.div initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>
            <div className="seo image-banner sec ">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="h-100 my-auto d-flex flex-column align-items-start justify-content-center col-6">
                            <h1 className='text-start'>Make Your Brand
                                Recognizable with Our
                                Astounding SEO Services</h1>
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
                                    <h2 className='text-start ps-0 '>SEO<br /></h2>
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
                    <div className="row text-start">
                        <div className="col-md-6 my-md-auto my-3">
                            <h1 className="heading">SEO</h1>
                            <h1 className="fs-4 heading line-height-sm fw-normal">Boost Your Website Ranking with Advanced SEO Services
                            </h1>
                            <p className="para-sm text-muted my-4">
                                Want your website to appear on Google’s first page when someone
                                searches the keyword relevant to your business? You can achieve
                                this feat with our result-oriented SEO services.
                            </p>
                            <p className="para-sm d-flex gap-2 align-items-center my-2">
                                <i className="fa-regular fa-circle-dot text-danger"></i>Boost Ranking
                            </p>
                            <p className="para-sm d-flex gap-2 align-items-center my-2">
                                <i className="fa-regular fa-circle-dot text-danger"></i>Maximize Your Website’s Visibility
                            </p>
                            <p className="para-sm d-flex gap-2 align-items-center my-2">
                                <i className="fa-regular fa-circle-dot text-danger"></i>Bring Leads and Sales
                            </p>
                        </div>
                        <div className="col-md-6 my-md-auto my-3">
                            <img src={seo} alt="seo" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <h2 className="heading fs-2">
                                Our Digital Marketing Services Cover Everything
                            </h2>
                            <p className="para-sm text-muted">
                                We help startups rise as industry leaders with our innovative digital marketing strategies
                                and flawless execution. Take a look below and find out what exactly you need
                            </p>
                        </div>
                        <div className="col-md-6 my-3 px-md-5 position-relative">
                            <SkillsCircle value={96} />

                            <h1 className="heading fs-4">
                                Keyword Research
                            </h1>
                            <p className="para-sm text-muted">
                                We have a dedicated research team that can help you find relevant and high-volume keywords googled by your target audience to find products and services same as provided by you.
                            </p>
                        </div>
                        <div className="col-md-6 my-3 px-md-5 position-relative">
                            <SkillsCircle value={46} />

                            <h1 className="heading fs-4">
                                Link Building
                            </h1>
                            <p className="para-sm text-muted">
                                Getting links from high-ranking and authoritative sites is a key to rank higher on search engine result pages (SERPs). Link builders at Marketing Chapter always generate powerful links.
                            </p>
                        </div>
                        <div className="col-md-6 my-3 px-md-5 position-relative">
                            <SkillsCircle value={36} />

                            <h1 className="heading fs-4">
                                Local Search
                            </h1>
                            <p className="para-sm text-muted">
                                You can’t only drive organic audience to your
                                website but also bring foot traffic to your physical
                                store with our smart SEO services.
                            </p>
                        </div>
                        <div className="col-md-6 my-3 px-md-5 position-relative">
                            <SkillsCircle value={56} />

                            <h1 className="heading fs-4">
                                eCommerce SEO
                            </h1>
                            <p className="para-sm text-muted">
                                Nobody will come across your online store until it
                                starters appearing on Google’s first page. Bring your
                                eCommerce website in the eyes of searchers
                                with our top-notch SEO services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm />
        </motion.div>
    )
}
