import React from "react";
import { Button, DatePicker, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-web-vector-icons';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/use-theme";


function About() {
    let navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <>
        <div className="container">
            <div className="south_img"><img src={'south'} /></div>

            <div className="trending_news">
                <div className=" lanka">
                    <h5>Today At 2:30 PM . <span> 2nd ODI .</span> <span>Pallekele</span></h5>
                    <div className='srilanka'>
                        <img src={'lk'} className="flagimg" /> <span> Sri Lanka</span>
                    </div>
                    <div className='srilanka'>
                        <img src={'flag'} className="flagimg" /> <span>Australia</span>
                    </div>
                    <h6>Match starts in <span>3hrs 30min</span></h6>
                </div>
                <div className=" lanka">
                    <h4>LIVE . <span>1st semi final .</span> <span> FC . Alur </span></h4>
                    <div className='srilanka'>
                        <img src={'lk'} className="flagimg" /> <span> Sri Lanka</span>
                    </div>
                    <div className='srilanka'>
                        <img src={'flag'} className="flagimg" /> <span>Australia</span>
                    </div>
                    <h6>Match starts in <span>3hrs 30min</span></h6>
                </div>
                <div className=" lanka">
                    <h4>Innings Break . <span>1st semi final .</span> <span> FC . Alur  </span></h4>
                    <div className='srilanka'>
                        <img src={'lk'} className="flagimg" /> <span> Sri Lanka</span>
                    </div>
                    <div className='srilanka'>
                        <img src={'flag'} className="flagimg" /> <span>Australia</span>
                    </div>
                    <h6>Match starts in <span>3hrs 30min</span></h6>
                </div>
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
                            <img src={'fire'} className="amet" /> <span>NEWS LIST</span>
                            <div className="adipisicing">
                                <span> <img src={'india'} className="india_img" /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p></span>
                                <span ><a href='#'>Lerarn More</a><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                                <div className='eiusmod'></div>
                                <span> <img src={'image4'} className="india_img" /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p></span>
                                <span ><a href='#'>Lerarn More</a><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                                <div className='eiusmod'></div>
                                <span> <img src={'game'} className="india_img" /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p></span>
                                <span ><a href='#'>Lerarn More</a><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                            </div>

                        </div>
                    </div>
                    <div className='match'>
                        <div className='row'>
                            <div className="col-sm-8">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img src={'bat'} className="cricket" alt="..." />
                                        <p>Hardik Pandya to captain India in Ireland T20Is; Rahul Tripathi gets maiden call-up</p>
                                    </div>
                                    <div className="col-sm-4">
                                        <img src={'Rectangle'} className="cricket" alt="..." />
                                        <p>Hardik Pandya to captain India in Ireland T20Is; Rahul Tripathi gets maiden call-up</p>
                                    </div>
                                    <div className="col-sm-4">
                                        <img src={'cricketplayer'} className="cricket" alt="..." />
                                        <p>Hardik Pandya to captain India in Ireland T20Is; Rahul Tripathi gets maiden call-up</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h5>RESULT</h5>
                                        <div className='srilanka'>
                                            <img src={'lk'} className="flagimg" /> <span> Sri Lanka</span>
                                            <span className='number'>245/7</span>
                                        </div>
                                        <div className='srilanka'>
                                            <img src={'flag'} className="flagimg" /> <span>Australia</span>
                                            <span className='number'>(T:193)19328 & 197/8</span>
                                        </div>
                                        <h6>Australia <span>won</span>by 3 wickets</h6>
                                        <a href='#'>Preview</a>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>NOW</h5>
                                        <div className='srilanka'>
                                            <img src={'lk'} className="flagimg" /> <span> Sri Lanka</span>
                                            <span className='number'>245/7</span>
                                        </div>
                                        <div className='srilanka'>
                                            <img src={'flag'} className="flagimg" /> <span>Australia</span>
                                            <span className='number'>(T:193)19328 & 197/8</span>
                                        </div>
                                        <h6>Lorem ipsum dolor sit amet</h6>
                                        <a href='#'>Preview</a>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>UPCOMING</h5>
                                        <p>Today At 2:30 PM</p>
                                        <div className='srilanka'>
                                            <img src={'lk'} className="flagimg" /> <span> Sri Lanka</span>

                                        </div>
                                        <div className='srilanka'>
                                            <img src={'flag'} className="flagimg" /> <span>Australia</span>

                                        </div>

                                        <a href='#'>Preview</a>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>UPCOMING</h5>
                                        <p>Today At 2:30 PM</p>
                                        <div className='srilanka'>
                                            <img src={'lk'} className="flagimg" /> <span> Sri Lanka</span>

                                        </div>
                                        <div className='srilanka'>
                                            <img src={'flag'} className="flagimg" /> <span>Australia</span>

                                        </div>

                                        <a href='#'>Preview</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <img src={'core'} className="previews_img" />
                                <h5>MATCH PREVIEWS AND PREVIEWS</h5>
                                <div className="adipisicing">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <span ><a href='#'>Lerarn More</a><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                                    <div className='eiusmod'></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <span ><a href='#'>Lerarn More</a><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                                    <div className='eiusmod'></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <span ><a href='#'>Lerarn More</a><i class="fa fa-arrow-right" aria-hidden="true"></i></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whoare">
                <div class="row">
                    <div class="col-2">
                        <h5> WHO ARE WE ?</h5>
                        <p>About us</p>
                        <p>Contact us</p>
                    </div>
                    <div class="col-2">
                        <h5>LEGAL</h5>
                        <p>DCMA</p>
                        <p>Disclaimer</p>
                        <p>Copyright Notice</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div class="col-2">
                        <h5>WORK WITH US </h5>
                    </div>
                    <div class="col-4">
                        <h5>PARTNER WITH US</h5>
                    </div>
                    <div class="col-1">
                        <img src={'facebook'} className="facebook_img" />
                        <img src={'instagram'} className="facebook_img" />
                        <img src={'twitter'} className="facebook_img" />
                        <img src={'vector'} className="facebook_img" />
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default About;
