import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Form, Input } from 'antd';
import $ from 'jquery';
import moment from "moment";
import Config from "../../common/Config";
import { useSelector, useDispatch } from 'react-redux'
import { signUpUser, siteLogin, logout } from "../../store/UserRedux";

function Headers() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const newsList = useSelector((state) => state.auth.newsList)
    const token = useSelector((state) => state.user.token)

    // Filter News
    let menNews = newsList.filter(item => item.blog_category === 'men');
    let wpmenNews = newsList.filter(item => item.blog_category === 'women');

    const onSignIn = (values) => {
        dispatch(siteLogin(values))
        $(".signin, .signin-bg, .header-area").removeClass("active");
        $("body").removeClass("overlay");
    };

    const onSignUp = (values) => {
        dispatch(signUpUser(values))
        $(".signin, .signup-bg, .header-area").removeClass("active");
        $("body").removeClass("overlay");
    };

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
                                                                            <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                                            <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
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
                                                                            <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                                            <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
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
                                    <li className="dropdown"><NavLink to="/cat/news">NEWS</NavLink>
                                        <ul>
                                            <li><NavLink to="/cat/trending-news">Trending News</NavLink></li>
                                            <li><NavLink to="/cat/editors-pick">Editor's Pick</NavLink></li>
                                            <li><NavLink to="/cat/featured-post">Featured Post</NavLink></li>
                                            <li><NavLink to="/cat/on-this-day">On this day</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><NavLink to="/cat/match-prediction">MATCH PREDICTION</NavLink>
                                        <ul>
                                            <li><NavLink to="/cat/match-review">Match Review</NavLink></li>
                                            <li><NavLink to="/cat/match-prediction">Match Prediction</NavLink></li>
                                            <li><NavLink to="/cat/match-analysis">Match Analysis</NavLink></li>
                                            <li><NavLink to="/cat/fantasy-tips">Fantasy Tips</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/cat/review-zone">REVIEW ZONE</NavLink></li>
                                    <li><NavLink to="/cat/video">VIDEO</NavLink></li>

                                </ul>
                                {/* <ul>
                                    <li className="dropdown"><a href="#">Home</a>
                                        <ul>
                                            <li><a href="homepage.html">Newsvolt</a></li>
                                            <li><a href="techvolt.html">Twchvolt</a></li>
                                        </ul>
                                    </li>
                                    <li className="mega-dropdown"><a href="#">Pages</a>
                                        <div className="mega-menu">
                                            <div className="mega-menu-wrapper mega-list-wrapper">
                                                <div className="mega-menu-list">
                                                    <h5 className="title-line-shape drop-icons">Product</h5>
                                                    <ul className="rhb-list-shape">
                                                        <li><a href="shop.html">Shop</a></li>
                                                        <li><a href="shop-sidebar.html">Shop Sidebar</a></li>
                                                        <li><a href="product-details.html">Product Details V.1</a></li>
                                                        <li><a href="product-details-two.html">Product Details V.2</a></li>
                                                        <li><a href="cart.html">Cart</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-list">
                                                    <h5 className="title-line-shape drop-icons">Category</h5>
                                                    <ul className="rhb-list-shape">
                                                        <li><a href="category-one.html">Category V.1</a></li>
                                                        <li><a href="category-two.html">Category V.2</a></li>
                                                        <li><a href="protfolio-one.html">Protfolio V.1</a></li>
                                                        <li><a href="protfolio-two.html">Protfolio V.2</a></li>
                                                        <li><a href="protfolio-three.html">Protfolio V.3</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-list">
                                                    <h5 className="title-line-shape drop-icons">Account</h5>
                                                    <ul className="rhb-list-shape">
                                                        <li><a href="account-one.html">Account V.1</a></li>
                                                        <li><a href="account-two.html">Account V.2</a></li>
                                                        <li><a href="contact-one.html">Contact Us V.1</a></li>
                                                        <li><a href="contact-two.html">Contact Us V.2</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-list">
                                                    <h5 className="title-line-shape drop-icons">Pages</h5>
                                                    <ul className="rhb-list-shape">
                                                        <li><a href="author-one.html">Author V.1</a></li>
                                                        <li><a href="author-two.html">Author V.2</a></li>
                                                        <li><a href="single-post-details.html">Post Details</a></li>
                                                        <li><a href="single-tag-page.html">Single Tag Post</a></li>
                                                    </ul>
                                                </div>
                                                <div className="mega-menu-list">
                                                    <h5 className="title-line-shape drop-icons">Error</h5>
                                                    <ul className="rhb-list-shape">
                                                        <li><a href="error-one.html">404 Error v.1</a></li>
                                                        <li><a href="error-two.html">404 Error v.2</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mega-dropdown"><a href="#">Traveling</a>
                                        <div className="mega-blog-menu mega-menu">
                                            <div className="mega-menu-wrapper d-flex">
                                                <div className="mega-tab-menu">
                                                    <h4>Category</h4>
                                                    <div className="nav flex-column" id="v-pills-tab" role="tablist"
                                                        aria-orientation="vertical">
                                                        <a className="nav-link active" data-bs-toggle="pill" href="#tab-one"
                                                            role="tab" aria-selected="true">Travel</a>
                                                        <a className="nav-link" data-bs-toggle="pill" href="#tab-two" role="tab"
                                                            aria-selected="false">Food & Cook</a>
                                                        <a className="nav-link" data-bs-toggle="pill" href="#tab-three"
                                                            role="tab" aria-selected="false">Lifestyle</a>
                                                        <a className="nav-link" data-bs-toggle="pill" href="#tab-four"
                                                            role="tab" aria-selected="false">Sports</a>
                                                        <a className="nav-link" data-bs-toggle="pill" href="#tab-five"
                                                            role="tab" aria-selected="false">Fitness & GYM</a>
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

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/travel/travel-1.jpg"
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
                                                                        <img src="assets/img/mega-menu-img/travel/travel-2.jpg"
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
                                                                        <img src="assets/img/mega-menu-img/travel/travel-3.jpg"
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
                                                                        <img src="assets/img/mega-menu-img/travel/travel-4.jpg"
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
                                                                        <img src="assets/img/mega-menu-img/travel/travel-5.jpg"
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
                                                                        <img src="assets/img/mega-menu-img/travel/travel-6.jpg"
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
                                                    <div className="tab-pane fade" id="tab-two" role="tabpanel">
                                                        <div className="mega-slider-area">
                                                            <div className="megamenu-owl-wrapper owl-carousel"
                                                                data-carousel-loop="false" data-carousel-items="4"
                                                                data-carousel-nav="true" data-carousel-dots="true"
                                                                data-carousel-lg="3" data-carousel-xl="3"
                                                                data-carousel-md="2">

                                                                <a href="single-post-details.html"
                                                                    className="carousel-single-cart">
                                                                    <div className="carousel-card-img">
                                                                        <img src="assets/img/mega-menu-img/food/food-1.jpg"
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
                                                                        <img src="assets/img/mega-menu-img/food/food-2.jpg"
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
                                                                        <img src="assets/img/mega-menu-img/food/food-3.jpg"
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
                                                                        <img src="assets/img/mega-menu-img/food/food-4.jpg"
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
                                                                        <img src="assets/img/mega-menu-img/food/food-5.jpg"
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
                                                                        <img src="assets/img/mega-menu-img/food/food-6.jpg"
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
                                    <li><a href="category-one.html">Fashion</a></li>
                                    <li><a href="protfolio-one.html">Portfolio</a></li>
                                    <li><a href="author-one.html">Author</a></li>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                </ul> */}
                            </nav>
                        </div>
                        <div className="options-area">
                            {/* <div className="dark-light">
                                <i className="icofont-moon"></i>
                            </div>
                            <div className="dark-light">
                                <i className="icofont-flag"></i>
                            </div>
                            <div className="dark-light">
                                <i className="icofont-alarm"></i>
                            </div> */}

                            {token ? <div className="sign-option">
                                <button className="btn-normal" onClick={() => dispatch(logout())}><i className="icofont-sign-out"></i></button>
                            </div> : <div className="sign-option">
                                <button className="btn-normal sign-in-click"><i className="icofont-sign-in"></i></button>
                                <button className="btn-normal sign-up-click"><i className="icofont-user"></i></button>
                            </div>}

                            {/* <div className="Search-popup">
                                <div className="Search-icon">
                                    <i className="icofont-search"></i>
                                </div>
                                <div className="search-popup-box">

                                    <div className="search-box">
                                        <span><i className="icofont-search-1"></i></span>
                                        <input type="text" placeholder="Type your keyword" />
                                        <button>Search</button>
                                    </div>
                                    <div className="close-popup">
                                        <i className="icofont-close-line"></i>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="sign-wrapper">
                                <div className="sign-bar">
                                    <i className="icofont-businessman"></i>
                                </div>
                                <div className="sign-option">
                                    <button className="btn-normal sign-in-click">Sign In</button>
                                    <button className="btn btn-theme sign-up-click">Sign Up</button>
                                </div>
                            </div> */}
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
                    <Form
                        className='user-form'
                        name='basic'
                        onFinish={onSignIn}
                    >
                        <Form.Item
                            name='usr'
                            rules={[
                                { required: true, message: 'Please input your Email!' },
                            ]}>
                            <Input placeholder={'Email'} />
                        </Form.Item>

                        <Form.Item
                            name='pwd'

                            rules={[
                                { required: true, message: 'Please input your Password!' },
                            ]}>
                            <Input
                                type='password'
                                placeholder={'Password'}
                            />
                        </Form.Item>

                        <Button type='primary' htmlType='submit'>
                            Login
                        </Button>

                    </Form>
                    <div className="close-popup">
                        <i className="icofont-close-line"></i>
                    </div>
                </div>
            </div>
            <div className="signup-popup-wrapper signup-bg">
                <div className="sign-up-area">
                    <h2 className="left-line-shape">Create Account</h2>
                    <Form
                        className='user-form'
                        name='basic'
                        onFinish={onSignUp}
                    >
                        <Form.Item
                            name='full_name'
                            rules={[
                                { required: true, message: 'Please input your Name!' },
                            ]}>
                            <Input placeholder={'Name'} />
                        </Form.Item>

                        <Form.Item
                            name='email'
                            rules={[
                                { required: true, message: 'Please input your Email!' },
                            ]}>
                            <Input
                                placeholder={'Email'}
                            />
                        </Form.Item>

                        <Button type='primary' htmlType='submit'>
                            Sign Up
                        </Button>

                    </Form>
                    <div className="close-popup">
                        <i className="icofont-close-line"></i>
                    </div>
                </div>
            </div>
        </header>);
}

export default Headers;