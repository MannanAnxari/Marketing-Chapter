import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { MainPortfolio } from '../MainPortfolioSingle';
import seo from "../assets/Illustration-Icon-1.png";
import { motion } from 'framer-motion';


export const Graphics = () => {
    const { APP_NAME, setTitle } = useContext(AppContext);
    setTitle(`${APP_NAME}Graphics Designing`);

    return (
        <motion.div initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>
      
            <div className="seo image-banner sec ">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="h-100 my-auto col-sm-7 d-flex flex-column align-items-start justify-content-center">
                            <h1 className='text-start'>An Energy That Builds  Memorable Brands</h1>
                            <Link to={'/contact'} className="btn btn-dark">
                                GET A QUOTE
                            </Link>
                        </div>
                        <div className="h-100 my-4 col-sm-5 d-flex flex-column align-items-start justify-content-center">
                            <img src={seo} className="w-100" alt="banner" />
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
