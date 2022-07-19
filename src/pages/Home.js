import React, { useEffect } from "react";
import { Carousel, DatePicker, Switch } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-web-vector-icons';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getTemplates } from '../store/AuthRedux'

import players from "../assets/image/players.png";
import lk from "../assets/image/lk.png";
import flag from "../assets/image/flag.png";
import fire from "../assets/image/fire.png";
import hardikpandia from "../assets/image/hardikpandia.png";
import Rectangle from "../assets/image/Rectangle.png";
import cricketplayer from "../assets/image/cricketplayer.png";
import cricketer from "../assets/image/cricketer.png";
import core from "../assets/image/core.png";


function Home() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const { t } = useTranslation();
    const templates = useSelector((state) => state.auth.templates)
    console.log(templates)

    useEffect(() => {
        dispatch(getTemplates('JitoDaily'))
    }, []);

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <>

            <div className="container">
                <div>
                    {/* <div className="player_img"><img src={players} /></div>

                <Carousel autoplay>
                    <div className="trending_news">
                        <div className="lanka">
                            <h5>Today At 2:30 PM . <span> 2nd ODI .</span> <span>Pallekele</span></h5>
                            <div className='srilanka'>
                                <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                            </div>
                            <div className='srilanka'>
                                <img src={flag} className="flagimg" /> <span>Australia</span>
                            </div>
                            <h6>Match starts in <span>3hrs 30min</span></h6>
                        </div>
                        <div className="lanka">
                            <h4>LIVE . <span>1st semi final .</span> <span> FC . Alur </span></h4>
                            <div className='srilanka'>
                                <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                            </div>
                            <div className='srilanka'>
                                <img src={flag} className="flagimg" /> <span>Australia</span>
                            </div>
                            <h6>Match starts in <span>3hrs 30min</span></h6>
                        </div>
                        <div className=" lanka">
                            <h4>Innings Break . <span>1st semi final .</span> <span> FC . Alur  </span></h4>
                            <div className='srilanka'>
                                <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                            </div>
                            <div className='srilanka'>
                                <img src={flag} className="flagimg" /> <span>Australia</span>
                            </div>
                            <h6>Match starts in <span>3hrs 30min</span></h6>
                        </div>
                    </div>
                    <div className="trending_news">
                        <div className="lanka">
                            <h5>Today At 2:30 PM . <span> 2nd ODI .</span> <span>Pallekele</span></h5>
                            <div className='srilanka'>
                                <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                            </div>
                            <div className='srilanka'>
                                <img src={flag} className="flagimg" /> <span>Australia</span>
                            </div>
                            <h6>Match starts in <span>3hrs 30min</span></h6>
                        </div>
                        <div className="lanka">
                            <h4>LIVE . <span>1st semi final .</span> <span> FC . Alur </span></h4>
                            <div className='srilanka'>
                                <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                            </div>
                            <div className='srilanka'>
                                <img src={flag} className="flagimg" /> <span>Australia</span>
                            </div>
                            <h6>Match starts in <span>3hrs 30min</span></h6>
                        </div>
                        <div className=" lanka">
                            <h4>Innings Break . <span>1st semi final .</span> <span> FC . Alur  </span></h4>
                            <div className='srilanka'>
                                <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                            </div>
                            <div className='srilanka'>
                                <img src={flag} className="flagimg" /> <span>Australia</span>
                            </div>
                            <h6>Match starts in <span>3hrs 30min</span></h6>
                        </div>
                    </div>
                    <div className="trending_news">
                        <div className="lanka">
                            <h5>Today At 2:30 PM . <span> 2nd ODI .</span> <span>Pallekele</span></h5>
                            <div className='srilanka'>
                                <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                            </div>
                            <div className='srilanka'>
                                <img src={flag} className="flagimg" /> <span>Australia</span>
                            </div>
                            <h6>Match starts in <span>3hrs 30min</span></h6>
                        </div>
                        <div className="lanka">
                            <h4>LIVE . <span>1st semi final .</span> <span> FC . Alur </span></h4>
                            <div className='srilanka'>
                                <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                            </div>
                            <div className='srilanka'>
                                <img src={flag} className="flagimg" /> <span>Australia</span>
                            </div>
                            <h6>Match starts in <span>3hrs 30min</span></h6>
                        </div>
                        <div className=" lanka">
                            <h4>Innings Break . <span>1st semi final .</span> <span> FC . Alur  </span></h4>
                            <div className='srilanka'>
                                <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                            </div>
                            <div className='srilanka'>
                                <img src={flag} className="flagimg" /> <span>Australia</span>
                            </div>
                            <h6>Match starts in <span>3hrs 30min</span></h6>
                        </div>
                    </div>
                    <div className="trending_news">
                        <div className="lanka">
                            <h5>Today At 2:30 PM . <span> 2nd ODI .</span> <span>Pallekele</span></h5>
                            <div className='srilanka'>
                                <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                            </div>
                            <div className='srilanka'>
                                <img src={flag} className="flagimg" /> <span>Australia</span>
                            </div>
                            <h6>Match starts in <span>3hrs 30min</span></h6>
                        </div>
                        <div className="lanka">
                            <h4>LIVE . <span>1st semi final .</span> <span> FC . Alur </span></h4>
                            <div className='srilanka'>
                                <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                            </div>
                            <div className='srilanka'>
                                <img src={flag} className="flagimg" /> <span>Australia</span>
                            </div>
                            <h6>Match starts in <span>3hrs 30min</span></h6>
                        </div>
                        <div className=" lanka">
                            <h4>Innings Break . <span>1st semi final .</span> <span> FC . Alur  </span></h4>
                            <div className='srilanka'>
                                <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                            </div>
                            <div className='srilanka'>
                                <img src={flag} className="flagimg" /> <span>Australia</span>
                            </div>
                            <h6>Match starts in <span>3hrs 30min</span></h6>
                        </div>
                    </div>
                </Carousel> */}
                </div>

                
                <div className='trending'>
                    <div className="row">
                        <div className="col-sm-8">
                            <h5>Trending News</h5>
                            <div className='ipsum'>
                                <h1>LOREM IPSUM</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="dolor">
                                <img src={fire} className="amet" /> <span>NEWS LIST</span>
                                <div className="adipisicing">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <span ><a href='#'>Lerarn More</a><ArrowRightOutlined /></span>
                                    <div className='eiusmod'></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <span ><a href='#'>Lerarn More</a><ArrowRightOutlined /></span>
                                    <div className='eiusmod'></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <span ><a href='#'>Lerarn More</a><ArrowRightOutlined /></span>
                                </div>
                            </div>
                        </div>
                        <div className='match'>
                            <div className='row'>
                                <div className="col-sm-8">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <img src={hardikpandia} className="cricket" alt="..." />
                                            <p>Hardik Pandya to captain India in Ireland T20Is; Rahul Tripathi gets maiden call-up</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src={Rectangle} className="cricket" alt="..." />
                                            <p>Hardik Pandya to captain India in Ireland T20Is; Rahul Tripathi gets maiden call-up</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src={cricketplayer} className="cricket" alt="..." />
                                            <p>Hardik Pandya to captain India in Ireland T20Is; Rahul Tripathi gets maiden call-up</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src={cricketer} className="cricket" alt="..." />
                                            <p>Ireland call up uncapped duo of Doheny, Olphert for India T20Is</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <img src={core} className="previews" />
                                    <h5>MATCH PREVIEWS AND PREVIEWS</h5>
                                    <div className="adipisicing">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <span ><a href='#'>Lerarn More</a><ArrowRightOutlined /></span>
                                        <div className='eiusmod'></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <span ><a href='#'>Lerarn More</a><ArrowRightOutlined /></span>
                                        <div className='eiusmod'></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <span ><a href='#'>Lerarn More</a><ArrowRightOutlined /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-sm-3">
                        <h5>RESULT</h5>
                        <div className='srilanka'>
                            <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                            <span className='number'>245/7</span>
                        </div>
                        <div className='srilanka'>
                            <img src={flag} className="flagimg" /> <span>Australia</span>
                            <span className='number'>(T:193)19328 & 197/8</span>
                        </div>
                        <h6>Australia <span>won</span>by 3 wickets</h6>
                        <span className="preview" ><a href='#'>Preview</a><ArrowRightOutlined /></span>
                    </div>
                    <div className="australia"></div>
                    <div className="col-sm-3">
                        <h5>NOW</h5>
                        <div className='srilanka'>
                            <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                            <span className='number'>245/7</span>
                        </div>
                        <div className='srilanka'>
                            <img src={flag} className="flagimg" /> <span>Australia</span>
                            <span className='number'>(T:193)19328 & 197/8</span>
                        </div>
                        <h6>Australia <span>won</span>by 3 wickets</h6>
                        <span className="preview" ><a href='#'>Preview</a><ArrowRightOutlined /></span>
                    </div>
                    <div className="australia"></div>

                    <div className="col-sm-3">
                        <h5>UPCOMING</h5>
                        <div className='srilanka'>
                            <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                            <span className='number'>245/7</span>
                        </div>
                        <div className='srilanka'>
                            <img src={flag} className="flagimg" /> <span>Australia</span>
                            <span className='number'>(T:193)19328 & 197/8</span>
                        </div>
                        <h6>Australia <span>won</span>by 3 wickets</h6>
                        <span className="preview" ><a href='#'>Preview</a><ArrowRightOutlined /></span>
                    </div>

                </div>
                <div className="galle">
                    <h4>LIVE <span>. 2nd TEST .</span> <span>Galle</span></h4>
                    <div className='session'>
                        <div class="row">
                            <div class="col">
                                <img src={flag} className="aus_img" /> <span>AUS</span>
                            </div>
                            <div class="col numberlist">
                                <h5>364</h5>
                            </div>
                        </div>
                    </div>
                    <div className='session'>
                        <div class="row">
                            <div class="col">
                                <img src={lk} className="aus_img" /> <span>SL</span>  <span className="report">.</span>
                            </div>
                            <div class="col">
                                <h3>(160.4 ov)<span>466/6</span></h3>
                            </div>
                        </div>
                    </div>
                    <h6>Day 4 - Session 1:Sri Lanka lead by 102 runs.</h6>
                    <div className='trail'></div>

                    <div class="row ">
                        <div class="col col-lg-3">
                            <h2>Schedule</h2>
                        </div>
                        <div class="col col-lg-2">
                            <h2>Report</h2>
                        </div>
                    </div>



                </div>

            </div>
        </>

    );
}

export default Home;