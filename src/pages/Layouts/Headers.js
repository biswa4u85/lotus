import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Form, Input } from 'antd';
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux'
import { signUpUser, siteLogin, logout } from "../../store/UserRedux";
import { getScorecard } from "../../store/ScoreRedux";
import Config from "../../common/Config";
import SocketApis from '../../utility/socket-apis'

function Headers() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const [search, setSearch] = useState('');
    const token = useSelector((state) => state.user.token)
    const homeSettings = useSelector((state) => state.auth.homeSettings)



    useEffect(() => {
        SocketApis.getSocketData('message', (data) => {
            dispatch(getScorecard(data))
            for (let key in data) {
                let score = data[key] ? data[key].live_details : null
                if (score) {
                    $(`#live_home_${key} #live_home`).text(score?.match_summary?.home_scores);
                    $(`#live_inner_${key} #live_home`).text(score?.match_summary?.home_scores);
                    $(`#live_home_${key} #live_away`).text(score?.match_summary?.away_scores);
                    $(`#live_inner_${key} #live_away`).text(score?.match_summary?.away_scores);
                    $(`#live_home_${key} #live_result`).text(score?.match_summary?.status);
                    $(`#live_inner_${key} #live_result`).text(score?.match_summary?.status);
                    $(`#live_home_${key} #live_result`).attr("class", 'red');
                    $(`#live_inner_${key} #live_result`).attr("class", 'red');
                }
            }
        });
    }, []);

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
                                {Config.randerImage(homeSettings.site_logo)}
                            </NavLink>
                        </div>
                        <div className="navbar-wrapper">
                            <nav className="navbar-area">
                                <ul>
                                    <li><NavLink to="/">HOME</NavLink></li>
                                    <li><NavLink to="/live-score">LIVE SCORE</NavLink></li>
                                    <li className="mega-dropdown"><NavLink to="/">SERIES</NavLink>
                                        <div className="mega-blog-menu mega-menu">
                                            <div className="mega-menu-wrapper d-flex newMega">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <h3><NavLink to="/cat/mens">Men</NavLink></h3>
                                                            <ul>
                                                                <li><NavLink to="/cat/domestic">Domestic</NavLink>
                                                                    <ul>
                                                                        <li><NavLink to="/cat/ipl">IPL</NavLink></li>
                                                                        {/* <li><NavLink to="/cat/tnpl">TNPL</NavLink></li> */}
                                                                    </ul>
                                                                </li>
                                                                <li><NavLink to="/cat/international">International</NavLink>
                                                                    <ul>
                                                                        {/* <li><NavLink to="/cat/bang-vs-wi">Bang Vs WI</NavLink></li>
                                                                        <li><NavLink to="/cat/ind-vs-eng">Ind Vs. Eng</NavLink></li>
                                                                        <li><NavLink to="/cat/ire-vs-nz">Ire Vs Nz</NavLink></li> */}
                                                                        <li><NavLink to="/cat/asia-cup">Asia Cup</NavLink></li>
                                                                    </ul></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-6">
                                                            <h3><NavLink to="/cat/women">Women</NavLink></h3>
                                                            <ul>
                                                                {/* <li><NavLink to="/cat/international-series">International series</NavLink></li>
                                                                <li><NavLink to="/cat/t20i-women">T20I Women</NavLink></li> */}
                                                                <li><NavLink to="/cat/wbbl-2022">WBBL 2022</NavLink></li>
                                                            </ul>
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
                                </ul>

                            </nav>
                        </div>


                        <div className="options-area">
                            <div className="Search-popup">
                                <div className="Search-icon">
                                    <i className="icofont-search"></i>
                                </div>
                                <div className="search-popup-box">

                                    <div className="search-box">
                                        <span><i className="icofont-search-1"></i></span>
                                        <input type="text" placeholder="Type your keyword"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                        <button onClick={() => {
                                            navigate(`/search/${search}`)
                                            $(".search-popup-box").removeClass("active");
                                            $("body").removeClass("overlay");
                                        }}

                                        >Search</button>
                                    </div>
                                    <div className="close-popup">
                                        <i className="icofont-close-line"></i>
                                    </div>
                                </div>
                            </div>





                            {token ? <div className="sign-option">
                                <button className="btn-normal" onClick={() => dispatch(logout())}><i className="icofont-sign-out"></i></button>
                            </div> : <div className="sign-option">
                                <button className="btn-normal sign-in-click"><i className="icofont-sign-in"></i></button>
                                <button className="btn-normal sign-up-click"><i className="icofont-user"></i></button>
                            </div>}

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