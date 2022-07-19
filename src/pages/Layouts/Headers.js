import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment";
import Config from "../../common/Config";

function Headers() {
    let navigate = useNavigate();
    const newsList = useSelector((state) => state.auth.newsList)

    // Filter News
    let menNews = newsList.filter(item => item.news_category === 'NC-011 (Men)');
    let wpmenNews = newsList.filter(item => item.news_category === 'NC-012 (Women)');


    return (
        <header className="header-area">
            <div className="main-header bg-header">
                <div className="container container-md">
                    <div className="main-header-wrapper">
                        <div className="header-logo">
                            <NavLink to="/">
                                <span>criczone</span>
                            </NavLink>
                        </div>
                        <div className="navbar-wrapper">
                            <nav className="navbar-area">
                                <ul>
                                    <li><NavLink to="/">HOME</NavLink></li>
                                    <li><NavLink to="/live-score">LIVE SCORE</NavLink></li>
                                    <li className="mega-dropdown"><NavLink to="/">SERIES</NavLink>
                                        <div className="mega-blog-menu mega-menu">
                                            <div className="mega-menu-wrapper d-flex">
                                                <div className="mega-tab-menu">
                                                    <h4>Category</h4>
                                                    <div className="nav flex-column" id="v-pills-tab" role="tablist"
                                                        aria-orientation="vertical">
                                                        <a className="nav-link active" data-bs-toggle="pill" href="#tab-one"
                                                            role="tab" aria-selected="true">Men</a>
                                                        <a className="nav-link" data-bs-toggle="pill" href="#tab-two" role="tab"
                                                            aria-selected="false">Women</a>
                                                    </div>
                                                </div>
                                                <div className="tab-content mega-tab-content" id="v-pills-tabContent">
                                                    <div className="tab-pane fade show active" id="tab-one">
                                                        <div className="mega-slider-area">
                                                            <div className="megamenu-owl-wrapper owl-carousel"
                                                                data-carousel-loop="false" data-carousel-items="4"
                                                                data-carousel-nav="true" data-carousel-dots="true"
                                                                data-carousel-lg="3" data-carousel-xl="3"
                                                                data-carousel-md="2">

                                                                {menNews.map((item, key) => <NavLink to={`/details/${item.name}`} ke={key}
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        {Config.randerImage(item.meta_image)}
                                                                        <span className="btn-theme">{item?.category_description}</span>
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                                            <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                                                        </div>
                                                                        <h4>{Config.trunCate(item.title, 40, '. . .')}</h4>
                                                                    </div>
                                                                </NavLink>)}

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-two" role="tabpanel">
                                                        <div className="mega-slider-area">
                                                            <div className="megamenu-owl-wrapper owl-carousel"
                                                                data-carousel-loop="false" data-carousel-items="4"
                                                                data-carousel-nav="true" data-carousel-dots="true"
                                                                data-carousel-lg="3" data-carousel-xl="3"
                                                                data-carousel-md="2">

                                                                {wpmenNews.map((item, key) => <NavLink to={`/details/${item.name}`} ke={key}
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        {Config.randerImage(item.meta_image)}
                                                                        <span className="btn-theme">{item?.category_description}</span>
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                                            <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                                                        </div>
                                                                        <h4>{Config.trunCate(item.title, 40, '. . .')}</h4>
                                                                    </div>
                                                                </NavLink>)}

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-three" role="tabpanel">
                                                        <div className="mega-slider-area">
                                                            <div className="megamenu-owl-wrapper owl-carousel"
                                                                data-carousel-loop="false" data-carousel-items="4"
                                                                data-carousel-nav="true" data-carousel-dots="true"
                                                                data-carousel-lg="3" data-carousel-xl="3"
                                                                data-carousel-md="2">

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/lifestyle/lifestyle-1.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/lifestyle/lifestyle-2.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/lifestyle/lifestyle-3.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/lifestyle/lifestyle-4.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/lifestyle/lifestyle-5.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/lifestyle/lifestyle-6.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-four" role="tabpanel">
                                                        <div className="mega-slider-area">
                                                            <div className="megamenu-owl-wrapper owl-carousel"
                                                                data-carousel-loop="false" data-carousel-items="4"
                                                                data-carousel-nav="true" data-carousel-dots="true"
                                                                data-carousel-lg="3" data-carousel-xl="3"
                                                                data-carousel-md="2">

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/sports/sports-1.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/sports/sports-2.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/sports/sports-3.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/sports/sports-4.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/sports/sports-5.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/sports/sports-6.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-five" role="tabpanel">
                                                        <div className="mega-slider-area">
                                                            <div className="megamenu-owl-wrapper owl-carousel"
                                                                data-carousel-loop="false" data-carousel-items="4"
                                                                data-carousel-nav="true" data-carousel-dots="true"
                                                                data-carousel-lg="3" data-carousel-xl="3"
                                                                data-carousel-md="2">

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/gym/gym-1.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/gym/gym-2.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/gym/gym-3.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/gym/gym-4.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/gym/gym-5.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/gym/gym-6.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="carousel-card-content">
                                                                        <div className="post-date-time">
                                                                            <span>7:35 AM</span>
                                                                            <span>16 Nov, 2020</span>
                                                                        </div>
                                                                        <h4>A collection of textile lorem samples lay spread
                                                                            . . .</h4>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown"><NavLink to="/cat/News">NEWS</NavLink>
                                        <ul>
                                            <li><NavLink to="/cat/Trending News">Trending News</NavLink></li>
                                            <li><NavLink to="/cat/Editor's Pick">Editor's Pick</NavLink></li>
                                            <li><NavLink to="/cat/Featured Post">Featured Post</NavLink></li>
                                            <li><NavLink to="/cat/On this day">On this day</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><NavLink to="/cat/Match Prediction">MATCH PREDICTION</NavLink>
                                        <ul>
                                            <li><NavLink to="/cat/Match Review">Match Review</NavLink></li>
                                            <li><NavLink to="/cat/Match Prediction">Match Prediction</NavLink></li>
                                            <li><NavLink to="/cat/Match Analysis">Match Analysis</NavLink></li>
                                            <li><NavLink to="/cat/Fantasy Tips">Fantasy Tips</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/cat/Review Zone">REVIEW ZONE</NavLink></li>
                                    <li><NavLink to="/cat/Video">VIDEO</NavLink></li>

                                </ul>
                            </nav>
                        </div>
                        <div className="options-area">
                            
                            <div className="dark-light">
                                <i className="icofont-flag"></i>
                            </div>
                            <div className="dark-light">
                                <i className="icofont-alarm"></i>
                            </div>

                            <div className="toggle-bar">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="signin-popup-wrapper signin-bg">
                <div className="sign-in-area">
                    <h2 className="left-line-shape">Sign In</h2>
                    <form>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" />
                        </div>
                    </form>
                    <div className="frc-box">
                        <label className="checkbox-group">
                            <input type="checkbox" className="input" />
                            <span className="checked"></span>
                            <span className="checked-content">Remember</span>
                        </label>
                        <a href="#">Forget Password</a>
                    </div>
                    <button className="btn btn-theme">Login</button>
                    <div className="from-status">
                        <p>Not have account ?</p>
                        <a href="#"><span>SignUp with Gmail</span><img src="assets/img/gmail.png" alt="" /></a>
                    </div>
                    <div className="close-popup">
                        <i className="icofont-close-line"></i>
                    </div>
                </div>
            </div>
            <div className="signup-popup-wrapper signup-bg">
                <div className="sign-up-area">
                    <h2 className="left-line-shape">Create Account</h2>
                    <form>
                        <div className="input-group">
                            <label>Full name</label>
                            <input type="text" />
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>
                    </form>
                    <button className="btn btn-theme">Login</button>
                    <div className="login-link-area">
                        <p>Already Have account <a href="#" className="goto-login">Login</a></p>
                    </div>
                    <div className="close-popup">
                        <i className="icofont-close-line"></i>
                    </div>
                </div>
            </div>
        </header>);
}

export default Headers;