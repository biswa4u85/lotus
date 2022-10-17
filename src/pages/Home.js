import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import { getHeadlineList, getNewsCategory, getNewsList } from '../store/MainRedux'
import { Helmet } from "react-helmet";
import Config from "../common/Config";
import SideBar from "./SideBar";
import HomeSlider from './Scores/HomeSlider';
import topBanner from '../assets/img/topBanner.png'
import thisWeek from '../assets/img/thisWeek.png'

function Home() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const { t } = useTranslation();
    const token = Config.token
    const homeSettings = useSelector((state) => state.auth.homeSettings)
    const headlines = useSelector((state) => state.auth.headlines)
    const newsList = useSelector((state) => state.auth.newsList)

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getHeadlineList({ token }))
        dispatch(getNewsCategory({ token }))
        dispatch(getNewsList({ page: 1, size: 500, token }))
    }, []);


    // Latest News
    let latestNews = newsList.filter(item => item.blog_category === 'news');
    latestNews.length = 4

    // Today News
    let todayNews = newsList.filter(item => item.blog_category === 'news');
    todayNews.length = 3

    // Latest Vedios
    let latestVedios = JSON.parse(JSON.stringify(newsList))
    latestVedios.length = 1

    const filterByDay = (filter, number) => {
        let cat = (homeSettings && homeSettings[filter]) ? homeSettings[filter] : null
        let dataList = newsList.filter(item => item.blog_category === cat);
        dataList.length = number
        return dataList
    }

    const filterByWeek = (cat, number) => {
        let dataList = newsList.filter(item => item.blog_category === cat);
        dataList.length = number
        return dataList
    }

    return (
        <>
            <Helmet>
                <title>{homeSettings?.meta_title}</title>
                <meta name="description" content={homeSettings?.meta_description} />
            </Helmet>
            <div className="nvbanner-area">
                <HomeSlider navigate={navigate} />
                <div className="viewAllMatch"><button onClick={() => navigate('/live-score')}>View all Matches</button></div>
            </div>

            <div className="pro-area" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="pro-wrapper">
                            <a href="https://thelotusexch.com/offerpromotions/" target={'_blank'}><img src={topBanner} height="150" alt="Advertiser" border="0" /></a>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="row">
                    <div className="col-xl-8">
                        <div className="bnr-lft">
                            <div className="bnr-lft-title" data-aos="fade-up">
                                <div className="news-heading">
                                    <h5>Headline</h5>
                                </div>
                                <OwlCarousel className='news-slider owl-theme' items={1} loop margin={10} dots={false} nav={false} autoplay={true} autoplayTimeout={3000}>
                                    {headlines ? headlines.map((item, key) => <div key={key} className="elepse">
                                        {item.description}
                                    </div>) : null}
                                </OwlCarousel>
                            </div>
                            <div className="bnr-lft-cnt">
                                <div className="row">
                                    <div className="col-md-7" data-aos="fade-up" data-aos-delay="50">
                                        {newsList[0] && (<div className="btl-simple-card">
                                            {Config.randerImage(newsList[0].meta_image, 600, 740)}
                                            <div className="btlc-content-wrapper">
                                                <NavLink to={`/category/${newsList[0].blog_category}`}><span className="btn">{newsList[0].category_description}</span></NavLink>
                                                <div className="btlc-marking">
                                                    <span className="icofont-star"></span>
                                                </div>
                                                <div className="btlc-content">
                                                    <div className="btcl-content-status">
                                                        <span>{moment.utc(newsList[0].published_time).format('hh:mm A')}</span>
                                                        <span>{moment.utc(newsList[0].published_on).format('Do MMM YYYY')}</span>
                                                        <span>{newsList[0].blogger}</span>
                                                    </div>
                                                    <h3><NavLink to={`/news/${newsList[0].route}`}>{Config.trunCate(newsList[0].title, 40, '. . .')}</NavLink></h3>
                                                </div>
                                            </div>
                                        </div>)}
                                    </div>
                                    <div className="col-md-5">
                                        <div className="bnr-lft-cnt-rgt">
                                            {newsList[1] && (<div className="btl-simple-card" data-aos="fade-up"
                                                data-aos-delay="100">
                                                {Config.randerImage(newsList[1].meta_image, 300, 355)}
                                                <div className="btlc-content-wrapper">
                                                    <NavLink to={`/category/${newsList[1].blog_category}`}><span className="btn">{newsList[1].category_description}</span></NavLink>
                                                    <div className="btlc-marking">
                                                        <span className="icofont-star"></span>
                                                    </div>
                                                    <div className="btlc-content">
                                                        <div className="btcl-content-status">
                                                            <span>{moment.utc(newsList[1].published_time).format('hh:mm A')}</span>
                                                            <span>{moment.utc(newsList[1].published_on).format('Do MMM YYYY')}</span>
                                                            <span>{newsList[1].blogger}</span>
                                                        </div>
                                                        <h3><NavLink to={`/news/${newsList[1].route}`}>{Config.trunCate(newsList[1].title, 40, '. . .')}</NavLink></h3>
                                                    </div>
                                                </div>
                                            </div>)}
                                            {newsList[2] && (<div className="btl-simple-card" data-aos="fade-up"
                                                data-aos-delay="100">
                                                {Config.randerImage(newsList[2].meta_image, 300, 355)}
                                                <div className="btlc-content-wrapper">
                                                    <NavLink to={`/category/${newsList[2].blog_category}`}><span className="btn">{newsList[2].category_description}</span></NavLink>
                                                    <div className="btlc-marking">
                                                        <span className="icofont-star"></span>
                                                    </div>
                                                    <div className="btlc-content">
                                                        <div className="btcl-content-status">
                                                            <span>{moment.utc(newsList[2].published_time).format('hh:mm A')}</span>
                                                            <span>{moment.utc(newsList[2].published_on).format('Do MMM YYYY')}</span>
                                                            <span>{newsList[2].blogger}</span>
                                                        </div>
                                                        <h3><NavLink to={`/news/${newsList[2].route}`}>{Config.trunCate(newsList[2].title, 40, '. . .')}</NavLink></h3>
                                                    </div>
                                                </div>
                                            </div>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <SideBar />
                    </div>
                </div>
            </div>


            <div className="pro-area" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="pro-wrapper">
                            <br />
                            <br />
                            <img src={thisWeek} height="150" alt="Advertiser" border="0" />
                        </div>
                    </div>
                </div>
            </div>

            <section className="newsupdate-area">
                <div className="container">
                    <div className="title-heading" data-title="Daily Update" data-aos="zoom-in">
                        <h2 data-aos="fade-up" data-aos-delay="50">Daily Update News</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="news-lft-wrapper">
                                <div className="news-card-wrapper">
                                    <div className="ns-mini-card">
                                        {filterByDay('left_category_one', 1).map((item, key) => <div key={key} className="btl-simple-card" data-aos="fade-up">
                                            {Config.randerImage(item.meta_image, 300)}
                                            <div className="btlc-content-wrapper">
                                                <NavLink to={`/category/${item.blog_category}`}><span className="btn">{item.category_description}</span></NavLink>
                                                <div className="btlc-content">
                                                    <div className="btcl-content-status">
                                                        <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                        <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                                    </div>
                                                    <h3><NavLink to={`/news/${item.route}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                                </div>
                                            </div>
                                        </div>)}
                                        {filterByDay('left_category_two', 1).map((item, key) => <div key={key} className="btl-simple-card" data-aos="fade-up">
                                            {Config.randerImage(item.meta_image, 300)}
                                            <div className="btlc-content-wrapper">
                                                <NavLink to={`/category/${item.blog_category}`}><span className="btn">{item.category_description}</span></NavLink>
                                                <div className="btlc-content">
                                                    <div className="btcl-content-status">
                                                        <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                        <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                                    </div>
                                                    <h3><NavLink to={`/news/${item.route}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                                </div>
                                            </div>
                                        </div>)}
                                    </div>

                                    {filterByDay('center_category', 1).map((item, key) => <div key={key} className="btl-simple-card" data-aos="fade-up"
                                        data-aos-delay="50">
                                        {Config.randerImage(item.meta_image, 640)}
                                        <div className="btlc-content-wrapper">
                                            <NavLink to={`/category/${item.blog_category}`}><span className="btn-card btn-red">{item.category_description}</span></NavLink>
                                            <div className="btlc-content">
                                                <div className="btcl-content-status">
                                                    <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                    <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                                </div>
                                                <h3><NavLink to={`/news/${item.route}`}>{Config.trunCate(item.title, 60, '. . .')}</NavLink></h3>
                                            </div>
                                        </div>
                                    </div>)}

                                </div>
                                <div className="ns-card-list" data-aos="fade-up" data-aos-delay="100">

                                    {filterByDay('bottom_category', 3).map((item, key) => <div key={key} className="nsc-list-single">
                                        <div className="nsc-list-img">
                                            {Config.randerImage(item.meta_image)}
                                        </div>
                                        <div className="nsc-list-content">
                                            <div className="nsc-list-title">
                                                <span><NavLink to={`/category/${item.blog_category}`}>{item.category_description}</NavLink></span>
                                                <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/news/${item.route}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink> </h3>
                                        </div>
                                    </div>)}

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="news-vcard-wrapper">

                                {filterByDay('right_category_one', 1).map((item, key) => <div key={key} class="news-vcard-single aos-init aos-animate" data-aos="fade-up">
                                    <NavLink to={`/category/${item.blog_category}`}><span className="btn-card btn-red">{item.category_description}</span></NavLink>
                                    <div class="news-vcard-img">
                                        {Config.randerImage(item.meta_image, 290)}
                                    </div>
                                    <div class="news-vcard-content">
                                        <div class="news-vcard-title">
                                            <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                            <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                        </div>
                                        <h3><NavLink to={`/news/${item.route}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                    </div>
                                </div>)}

                                {filterByDay('right_category_two', 1).map((item, key) => <div key={key} class="news-vcard-single aos-init aos-animate" data-aos="fade-up">
                                    <NavLink to={`/category/${item.blog_category}`}><span className="btn-card btn-red">{item.category_description}</span></NavLink>
                                    <div class="news-vcard-img">
                                        {Config.randerImage(item.meta_image, 290)}
                                    </div>
                                    <div class="news-vcard-content">
                                        <div class="news-vcard-title">
                                            <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                            <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                        </div>
                                        <h3><NavLink to={`/news/${item.route}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                    </div>
                                </div>)}

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <div className="pro-area" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="pro-wrapper">
                            <br />
                            <br />
                            <NavLink to={`/live-score`}><img src={dailyUpdate} height="150" alt="Advertiser" border="0" /></NavLink>
                        </div>
                    </div>
                </div>
            </div> */}

            <section className="weekly-update-area">
                <div className="container">
                    <div className="title-heading" data-title="Weekly Update" data-aos="zoom-in">
                        <h2 data-aos="fade-up" data-aos-delay="50">This Week Update</h2>
                    </div>

                    <div className="weekly-tab-wrapper">
                        <ul className="nav" role="tablist" data-aos="fade-up" data-aos-delay="100">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#travel" role="tab"
                                    aria-selected="true">Women</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#food" role="tab"
                                    aria-selected="false">Domestic Matches</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#medicare" role="tab"
                                    aria-selected="false">International Matches</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#fashion" role="tab"
                                    aria-selected="false">Editor's Pick</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#fitness" role="tab"
                                    aria-selected="false">Analysis/Reviews</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent" data-aos="fade-up" data-aos-delay="150">
                            <div className="tab-pane fade  show active" id="travel" role="tabpanel">
                                <div className="weekly-list-item">

                                    {filterByWeek('women', 4).map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            {Config.randerImage(item.meta_image, 220)}
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/news/${item.route}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                        </div>
                                    </div>)}


                                </div>
                            </div>
                            <div className="tab-pane fade" id="food" role="tabpanel">
                                <div className="weekly-list-item">

                                    {filterByWeek('domestic', 4).map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            {Config.randerImage(item.meta_image, 220)}
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/news/${item.route}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="medicare" role="tabpanel">
                                <div className="weekly-list-item">

                                    {filterByWeek('international', 4).map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            {Config.randerImage(item.meta_image, 220)}
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/news/${item.route}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="fashion" role="tabpanel">
                                <div className="weekly-list-item">

                                    {filterByWeek("editors-pick", 4).map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            {Config.randerImage(item.meta_image, 220)}
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/news/${item.route}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="fitness" role="tabpanel">
                                <div className="weekly-list-item">

                                    {filterByWeek('match-prediction', 4).map((item, key) => <div key={key} className="news-vcard-single">
                                        <div className="news-vcard-img">
                                            {Config.randerImage(item.meta_image, 220)}
                                        </div>
                                        <div className="news-vcard-content">
                                            <div className="news-vcard-title">
                                                <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                                <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                            </div>
                                            <h3><NavLink to={`/news/${item.route}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fd-carousel-wrapper owl-carousel" data-carousel-loop="false" data-carousel-items="3"
                        data-carousel-nav="false" data-carousel-dots="true" data-carousel-md="2" data-carousel-sm="2"
                        data-carousel-lg="3" data-carousel-xl="3" data-aos="fade-up">
                        {filterByWeek('video', 12).map((item, key) => <div key={key} className="fdc-single-item">
                            <div className="fdc-img">
                                <NavLink to={`/news/${item.route}`}>
                                    {Config.randerImage(item.meta_image, 220)}
                                </NavLink>
                            </div>
                            <div className="fdc-content">
                                <div className="fdc-title">
                                    <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                    <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                </div>
                                <h3><NavLink to={`/news/${item.route}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                            </div>
                        </div>)}
                    </div>
                </div>
            </section>

            {/* <div className="pro-area" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="pro-wrapper">
                            <img src={dailyUpdate} width="900" height="120" alt="Advertiser" border="0" />
                        </div>
                    </div>
                </div>
            </div> */}
        </>

    );
}

export default Home;