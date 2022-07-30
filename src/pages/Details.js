import React, { useEffect } from "react";
import { Button, DatePicker, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/use-theme";
import { getNewsDetails } from '../store/MainRedux'
import Config from "../common/Config";
import { Helmet } from "react-helmet";

import noData from "../assets/img/nodata.jpg";
import videoCard from "../assets/img/newsvolt/card-mixed/video-card.png";
import playBtn from "../assets/img/svg/play-btn.svg";
import promoAdd from "../assets/img/promo-add.png";
import rect1 from "../assets/img/reaction/rect1.png";
import rect2 from "../assets/img/reaction/rect2.png";
import rect3 from "../assets/img/reaction/rect3.png";
import rect4 from "../assets/img/reaction/rect4.png";
import rect5 from "../assets/img/reaction/rect5.png";
import authorPro from "../assets/img/author-pro.jpg";
import user from "../assets/img/svg/user.svg";
import email from "../assets/img/svg/email.svg";


function Details(props) {
    let navigate = useNavigate();
    let { pId } = useParams();
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const token = useSelector((state) => state.auth.token)
    const newsList = useSelector((state) => state.auth.newsList)
    const newsDetails = useSelector((state) => state.auth.newsDetails)


    // Latest News
    let latestNews = newsList.filter(item => item.blog_category === 'news');
    latestNews.length = 5

    // Related News
    let relatedNews = newsList.filter(item => item.blog_category === 'news');
    relatedNews.length = 5

    useEffect(() => {
        dispatch(getNewsDetails({ token, pId }))
    }, [pId]);


    console.log(newsDetails)

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{newsDetails?.meta_title}</title>
                <link rel="canonical" href="#" />
            </Helmet>
            <section className="single-post-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-post-content">
                                <div className="figer-img">
                                    {Config.randerImage(newsDetails?.meta_image)}
                                    <button className="btn btn-theme">{newsDetails?.category_description}</button>
                                </div>
                                <div className="timeline">
                                    <span>{moment.utc(newsDetails?.modified).format('hh:mm A')}</span>
                                    <span>{moment.utc(newsDetails?.modified).format('Do MMM YYYY')}</span>
                                </div>
                                <h2>{newsDetails?.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: newsDetails?.content_html ? newsDetails?.content_html : newsDetails?.content }}></div>
                                {/* <div className="reaction">
                                    <h3>Your Reaction on this post</h3>
                                    <ul>
                                        <li><a href="single-post-details.html#"><img src={rect1} alt="icon" /><span>45</span></a></li>
                                        <li><a href="single-post-details.html#"><img src={rect2} alt="icon" /></a></li>
                                        <li><a href="single-post-details.html#"><img src={rect3} alt="icon" /><span>01</span></a></li>
                                        <li><a href="single-post-details.html#"><img src={rect4} alt="icon" /></a></li>
                                        <li><a href="single-post-details.html#"><img src={rect5} alt="icon" /><span>25</span></a></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-post-sidebar">
                                <aside className="header-aside">
                                    <h4>Latest News  <span className="dark-red"><i className="icofont-fire"></i></span></h4>
                                    <div className="card-list card-counting">
                                        {latestNews.map((item, key) => <div key={key} className="single-card-list card-border">
                                            <div className="card-list-img">
                                                {Config.randerImage(item.meta_image, 100, 70)}
                                            </div>
                                            <div className="card-list-cont">
                                                <div className="card-list-discript">
                                                    <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                    <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                                </div>
                                                <div className="card-list-heading">
                                                    <h6><NavLink to={`/details/${item.name}`}>{Config.trunCate(item.title, 60, '. . .')}</NavLink></h6>
                                                </div>
                                            </div>
                                        </div>)}
                                    </div>
                                    {/* <div className="video-card">
                                        <img src="https://tpc.googlesyndication.com/simgad/14556471411178073418?" width="250" height="250" alt="Advertiser" border="0" />
                                    </div> */}
                                </aside>
                                <br />
                                {/* <div className="promo-add">
                                    <img src={promoAdd} alt="image" />
                                    <button className="btn btn-white-outline">Promotional Ad</button>
                                </div> */}
                                <div className="related-news">
                                    <aside className="header-aside">
                                        <h4>Related News</h4>
                                        <div className="card-list card-counting">
                                            {relatedNews.map((item, key) => <div key={key} className="single-card-list card-border">
                                                <div className="card-list-img">
                                                    {Config.randerImage(item.meta_image, 100, 70)}
                                                </div>
                                                <div className="card-list-cont">
                                                    <div className="card-list-discript">
                                                        <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                                        <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                                    </div>
                                                    <div className="card-list-heading">
                                                        <h6><NavLink to={`/details/${item.name}`}>{Config.trunCate(item.title, 60, '. . .')}</NavLink></h6>
                                                    </div>
                                                </div>
                                            </div>)}
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="author-wrap">
                        {/* <div className="author-pro">
                            <div className="author-img">
                                <img src={authorPro} alt="image" />
                            </div>
                            <div className="author-content">
                                <h4><a href="single-post-details.html#">Jenny Doe</a></h4>
                                <ul className="social-icon social-outline-gray">
                                    <li><a href="single-post-details.html#"><i className="icofont-facebook"></i></a></li>
                                    <li><a href="single-post-details.html#"><i className="icofont-youtube-play"></i></a></li>
                                    <li><a href="single-post-details.html#"><i className="icofont-twitter"></i></a></li>
                                    <li><a href="single-post-details.html#"><i className="icofont-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div> */}
                        {/* <a href="single-post-details.html#">See all Post this Author <span><i className="icofont-long-arrow-right"></i></span></a> */}
                        <div className="ath-social">
                            <h3>Share This Post</h3>
                            <ul className="social-icon social-outline-gray">
                                <li><a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank"><i className="icofont-facebook"></i></a></li>
                                <li><a href={`https://www.youtube.com/sharer/sharer.php?u=${window.location.href}`} target="_blank"><i className="icofont-youtube-play"></i></a></li>
                                <li><a href={`https://twitter.com/sharer/sharer.php?u=${window.location.href}`} target="_blank"><i className="icofont-twitter"></i></a></li>
                                <li><a href={`https://www.instagram.com/sharer/sharer.php?u=${window.location.href}`} target="_blank"><i className="icofont-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="single-post-comment">
                        <div className="news-subscribe-heading">
                            <h2><span></span>Leave a comment<span></span>
                            </h2>
                        </div>
                        <div className="single-post-form">
                            <div className="spf-group">
                                <div className="input-group">
                                    <label>Full Name <span>*</span></label>
                                    <div className="input-with-icon">
                                        <input type="text" />
                                        <img src={user} alt="icon" />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <label>Your e-mail <span>*</span></label>
                                    <div className="input-with-icon">
                                        <input type="email" />
                                        <img src={email} alt="icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group">
                                <label>Message</label>
                                <textarea cols="30" rows="7"></textarea>
                            </div>
                            <label className="checkbox-group cbox-red">
                                <input type="checkbox" className="input" />
                                <span className="checked"></span>
                                <span className="checked-content">Save my Name and mail for next any comment</span>
                            </label>
                            <button className="btn btn-theme">Submit Comment</button>
                        </div>
                    </div>
                    {/* <div className="single-post-carousel-wrapper">
                        <div className="spc-navigation">
                            <button className="prev"><span><i className="icofont-long-arrow-left"></i></span> Previous </button>
                            <button className="next">Next <span><i className="icofont-long-arrow-right"></i></span></button>
                        </div>
                        <div className="single-post-carousel owl-carousel" data-carousel-loop="true" data-carousel-items="2" data-carousel-nav="false" data-carousel-dots="false" data-carousel-autoplay="true" data-carousel-margin="30" data-carousel-md="2" data-carousel-sm="1" data-carousel-lg="2" data-carousel-xl="2">

                            <div className="spc-single-post">
                                <div className="spc-single-post-img">
                                    <a href="single-post-details.html#"><img src="assets/img/short-img/xs1.jpg" alt="image" /></a>
                                </div>
                                <div className="spc-single-post-content">
                                    <div className="spc-timeline">
                                        <span>7:35 AM</span>
                                        <span>16 Nov, 2020</span>
                                    </div>
                                    <h3><a href="single-post-details.html#">A collection of textile samples lay spread lorem ipsum dolor</a></h3>
                                </div>
                            </div>

                            <div className="spc-single-post">
                                <div className="spc-single-post-img">
                                    <a href="single-post-details.html#"><img src="assets/img/short-img/xs2.jpg" alt="image" /></a>
                                </div>
                                <div className="spc-single-post-content">
                                    <div className="spc-timeline">
                                        <span>7:35 AM</span>
                                        <span>16 Nov, 2020</span>
                                    </div>
                                    <h3><a href="single-post-details.html#">What a strenuous career it is that I’ve chosen!</a></h3>
                                </div>
                            </div>

                            <div className="spc-single-post">
                                <div className="spc-single-post-img">
                                    <a href="single-post-details.html#"><img src="assets/img/short-img/xs3.jpg" alt="image" /></a>
                                </div>
                                <div className="spc-single-post-content">
                                    <div className="spc-timeline">
                                        <span>7:35 AM</span>
                                        <span>16 Nov, 2020</span>
                                    </div>
                                    <h3><a href="single-post-details.html#">Travelling day in and day out. Doing business like this takes much more</a></h3>
                                </div>
                            </div>

                            <div className="spc-single-post">
                                <div className="spc-single-post-img">
                                    <a href="single-post-details.html#"><img src="assets/img/short-img/xs1.jpg" alt="image" /></a>
                                </div>
                                <div className="spc-single-post-content">
                                    <div className="spc-timeline">
                                        <span>7:35 AM</span>
                                        <span>16 Nov, 2020</span>
                                    </div>
                                    <h3><a href="single-post-details.html#">A collection of textile samples lay spread lorem ipsum dolor</a></h3>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

            </section>
        </>
    );
}

export default Details;
