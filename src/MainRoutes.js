import React, { useContext } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Graphics } from './Component/Services/Graphics';
import { WebDevelopment } from './Component/Services/WebDevelopment';
import { Seo } from './Component/Services/Seo';
import { DigitalMarketing } from './Component/Services/DigitalMarketing';
import { ContentWriting } from './Component/Services/ContentWriting';
import { Portfolio } from './Component/Portfolio';
import { AnimatePresence } from 'framer-motion';
import { Contact } from './Component/Contact';
import { Blog } from './Component/Blog';
import { Login } from './Component/Auth/Login';
import { Register } from './Component/Auth/Register';
import { AppContext } from './context/AppContext';
import { TermsNConditions } from './Component/TermsNConditions';
import { Privacy } from './Component/Privacy';
import { BlogDetails } from './Component/BlogDetails';
import { MyAccount } from './Component/Dashboard/MyAccount';
import { Projects } from './Component/Dashboard/Projects';
import { Invoices } from './Component/Dashboard/Invoices';
import { SingleProject } from './Component/Dashboard/SingleProject';
import { Spinner } from './Component/Spinner';
import { PrivateRoutes } from './PrivateRoutes';
import { SingleInvoice } from './Component/Dashboard/SingleInvoice';
import { Chat } from './Component/Dashboard/Chat';
import { NotFound } from './Component/404';
import { Pricing } from './Component/Pricing';
import { ProjectDiscussion } from './Component/Dashboard/ProjectDiscussion';
import { SingleProjectDiscussion } from './Component/Dashboard/ChatComponents/SingleProject';
import { CompletedProjects } from './Component/Dashboard/CompletedProjects';
import { Verify } from './Component/Auth/Verify';
import { Product } from './Component/Product';


export const MainRoutes = () => {
    const { isPageLoading, user } = useContext(AppContext);

    const { pathname } = useLocation();
    return (
        <AnimatePresence>
            {isPageLoading ?
                <div className="my-4">
                    <Spinner />
                </div>
                :
                <Routes key={pathname} location={pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/graphic-design" element={<Graphics />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/web-development" element={<WebDevelopment />} />
                    <Route path="/seo" element={<Seo />} />
                    <Route path="/digital-marketing" element={<DigitalMarketing />} />
                    <Route path="/content-writing" element={<ContentWriting />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={!user ? <Login /> : <NotFound />} />
                    <Route path="/notfound" element={<NotFound />} />
                    <Route path="/register" element={!user ? <Register /> : <NotFound />} />
                    <Route path="/terms-conditions" element={<TermsNConditions />} />
                    <Route path="/privacy-policy" element={<Privacy />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/verify" element={user && user.data.is_varified === null ? <Verify /> : <NotFound />} />
                    <Route path="/blog/:singleBlog" element={<BlogDetails />} />
                    <Route element={<PrivateRoutes />}>
                        <Route path="/my-account" element={user && user.data.is_varified ? <MyAccount /> : <NotFound />} exact />
                        <Route path="/projects" element={user && user.data.user_type === "user" && user.data.is_varified ? <Projects /> : <NotFound />} />
                        <Route path="/projects/:singleProject" element={user && user.data.user_type === "user" && user.data.is_varified ? <SingleProject /> : <NotFound />} />
                        <Route path="/invoices" element={user && user.data.user_type === "user" && user.data.is_varified ? < Invoices /> : <NotFound />} />
                        <Route path="/invoices/:singleInvoice" element={user && user.data.user_type === "user" && user.data.is_varified ? <SingleInvoice /> : <NotFound />} exact />
                        {/* <Route path="/completed-projects" element={user && user.data.user_type === "user" ? <CompletedProjects /> : <NotFound />} exact /> */}
                        {/* <Route path="/private-chat" element={<Chat />} /> */}
                        <Route path="/project-discussion" element={user && user.data.user_type === "user" && user.data.is_varified ? <ProjectDiscussion /> : <NotFound />} />
                        {/* <Route path="/project-discussion/:project" element={user && user.data.user_type === "user" ? <SingleProjectDiscussion /> : <NotFound />} exact /> */}
                        <Route path="/project-discussion/:project" element={<SingleProjectDiscussion />} exact />
                    </Route>
                </Routes>
            }
        </AnimatePresence>
    )
}
