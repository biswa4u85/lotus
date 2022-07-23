import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux'
import ftrBg from "../../assets/img/svg/ftr-bg.svg";
import FormValidate from "../../common/FormValidate";
import { subscribeEmail, getCmsDetails } from '../../store/AuthRedux'

function Footers() {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const emailInput = useRef(null);
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const homeSettings = useSelector((state) => state.auth.homeSettings)
    const cmsData = useSelector((state) => state.auth.cms)
    const cms = cmsData['about-us']

    useEffect(() => {
        dispatch(getCmsDetails('about-us'))
    }, []);

    const sendNewsletter = () => {
        if (!email) {
            setError('Please enter your email')
            emailInput.current.focus();
            return
        }
        if (!FormValidate.isEmail(email)) {
            setError('Please enter a validate email')
            emailInput.current.focus();
            return
        }
        dispatch(subscribeEmail({ email }))
        setEmail('')
    }

    return (
        <>
            <section className="subscribe-area" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <div className="container">
                    <div className="row">
                        <div className="subscribe-wrapper">
                            <h3>Subscribe Newsletter</h3>
                            <div className="search-box">
                                <span><i className="icofont-envelope"></i></span>
                                <input ref={emailInput} value={email} onChange={(e) => { setError(null); setEmail(e.target.value) }} type="text" placeholder="Enter  your mail" />
                                <button onClick={sendNewsletter}>Subscribe</button>
                            </div>
                            {error && (<div>{error}</div>)}
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-area">
                <div className="main-footer transparent-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 ft-order-1 mb-lg-50">
                                <div className="ftr-drpt">
                                    <div className="footer-logo">
                                        <NavLink to="/">
                                            <span>criczone</span>
                                        </NavLink>
                                    </div>
                                    <p>{cms?.header}</p>
                                    <div className="footer-social">
                                        <h6>Follow Us</h6>
                                        <ul className="social-icon social-bg-red">
                                            <li><a href="https://www.facebook.com/profile.php" target="_blank"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="https://www.instagram.com/lotus_news247/" target="_blank"><i className="icofont-instagram"></i></a></li>
                                            {/* <li><a href="https://telegram.org" target="_blank"><i className="icofont-telegram"></i></a></li> */}
                                            <li><a href="https://twitter.com/Lotusnews2" target="_blank"><i className="icofont-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 ft-order-2 mb-sm-30">
                                <div className="ftr-category">
                                    <h3 className="title-line-shape">Category</h3>
                                    <div className="ftr-category-menu">
                                        <ul className="round-shape">
                                            <li><NavLink to="/cat/Trending News">Trending News</NavLink></li>
                                            <li><NavLink to="/cat/Press Release">Press Release</NavLink></li>
                                            <li><NavLink to="/cat/Previews">Previews</NavLink></li>
                                        </ul>
                                        <ul className="round-shape">
                                            <li><NavLink to="/cat/Review Zone">Reviews</NavLink></li>
                                            <li><NavLink to="/cat/On this day">On this Day</NavLink></li>
                                            <li><NavLink to="/cat/Match Prediction">Match Prediction</NavLink></li>
                                        </ul>
                                    </div>
                                    <h3 className="title-line-shape">Key Series</h3>
                                    <div className="ftr-category-menu">
                                        <ul className="round-shape">
                                            <li><NavLink to="/cat/Trending News">Trending News</NavLink></li>
                                            <li><NavLink to="/cat/Press Release">Press Release</NavLink></li>
                                            <li><NavLink to="/cat/Previews">Previews</NavLink></li>
                                        </ul>
                                        <ul className="round-shape">
                                            <li><NavLink to="/cat/Review Zone">Reviews</NavLink></li>
                                            <li><NavLink to="/cat/On this day">On this Day</NavLink></li>
                                            <li><NavLink to="/cat/Match Prediction">Match Prediction</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 ft-order-3 mb-sm-30">
                                <div className="ftr-link">
                                    <h3 className="title-line-shape">Useful Link</h3>
                                    <ul>
                                        <li><NavLink to="/cms/dcma">DCMA</NavLink></li>
                                        <li><NavLink to="/cms/disclaimer">DISCLAIMER</NavLink></li>
                                        <li><NavLink to="/cms/copyright-notice">COPYRIGHT NOTICE</NavLink></li>
                                        <li><NavLink to="/cat/Review Zone">REVIEW</NavLink></li>
                                        <li><NavLink to="/cat/Fantasy Tips">FANTASY</NavLink></li>
                                        <li><NavLink to="/cms/about-us">ABOUT US</NavLink></li>
                                        <li><NavLink to="/cms/contact-us">CONTACT US</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 ft-order-4">
                                <div className="ftr-contact">
                                    <h3 className="title-line-shape">Contact Us</h3>
                                    <p><a href="mailto:info@lotusnews247.com">info@lotusnews247.com</a></p>
                                    {/* <p><a href="callto:+00 0000000000">+00 0000000000</a></p> */}
                                    {/* <p>ICON BLISS, Opp. Zensar IT Park <span>Kharadi, Pune - 411014</span></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ftr-bg">
                        <img src={ftrBg} alt="image" />
                    </div>
                </div>
                <div className="ftr-dtls theme-bg">
                    <div className="container">
                        <div className="ftr-dtls-wrapper">
                            <p>Copyright © 2022 criczone All Rights Reserved.</p>
                            <ul>
                                <li><NavLink to="/cms/terms-conditions">Term & Condition</NavLink></li>
                                <li><NavLink to="/cms/privacy">Privacy</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footers;