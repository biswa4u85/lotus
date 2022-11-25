import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Form, Input } from 'antd';
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux'
import { signUpUser, siteLogin, logout } from "../../store/UserRedux";
import { getHomeSettings } from '../../store/MainRedux'
import { getScorecard } from "../../store/ScoreRedux";
import Config from "../../common/Config";
import SocketApis from '../../utility/socket-apis'
import Loader from '../../components/Loader'

function Headers() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const [search, setSearch] = useState('');
    const token = useSelector((state) => state.user.token)
    const isFetching = useSelector((state) => state.auth.isFetching)
    const homeSettings = useSelector((state) => state.auth.homeSettings)

    useEffect(() => {
        dispatch(getHomeSettings({ token }))
        SocketApis.getSocketData('message', (data) => {
            if (data) {
                dispatch(getScorecard(data))
                for (let key in data) {
                    let score = (data[key] && data[key]?.matchScore) ? data[key].matchScore : null
                    if (score) {
                        let team1Score = score?.team1Score?.inngs2 ? score?.team1Score?.inngs2 : score?.team1Score?.inngs1
                        let team2Score = score?.team2Score?.inngs2 ? score?.team2Score?.inngs2 : score?.team2Score?.inngs1

                        $(`#live_home_${key} #live_home`).text(team1Score && (`${team1Score?.runs ? team1Score?.runs : 0}/${team1Score?.wickets ? team1Score?.wickets : 0} - ${team1Score?.overs ? team1Score?.overs : 0}`));
                        $(`#live_inner_${key} #live_home`).text(team1Score && (`${team1Score?.runs ? team1Score?.runs : 0}/${team1Score?.wickets ? team1Score?.wickets : 0} - ${team1Score?.overs ? team1Score?.overs : 0}`));

                        $(`#live_home_${key} #live_away`).text(team2Score && (`${team2Score?.runs ? team2Score?.runs : 0}/${team2Score?.wickets ? team2Score?.wickets : 0} - ${team2Score?.overs ? team2Score?.overs : 0}`));
                        $(`#live_inner_${key} #live_away`).text(team2Score && (`${team2Score?.runs ? team2Score?.runs : 0}/${team2Score?.wickets ? team2Score?.wickets : 0} - ${team2Score?.overs ? team2Score?.overs : 0}`));

                        // $(`#live_home_${key} #live_result`).text(score?.match_summary?.status);
                        // $(`#live_inner_${key} #live_result`).text(score?.match_summary?.status);

                        $(`#live_home_${key} #live_home`).attr("class", 'red');
                        $(`#live_home_${key} #live_away`).attr("class", 'red');
                        $(`#live_home_${key} #live_result`).attr("class", 'red');
                        $(`#live_inner_${key} #live_home`).attr("class", 'red');
                        // $(`#live_inner_${key} #live_away`).attr("class", 'red');
                        // $(`#live_inner_${key} #live_result`).attr("class", 'red');
                    }
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
            {isFetching && (<Loader />)}
            <div className="main-header bg-header">
                <div className="container container-md">
                    <div className="main-header-wrapper">
                        <div className="header-logo">
                            <NavLink to="/">
                                <img src={Config.frappe_url + '/' + homeSettings.site_logo} alt="image" />
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
                                                            <h3><NavLink to="/category/mens">Men</NavLink></h3>
                                                            <ul>
                                                                <li><NavLink to="/category/domestic">Domestic</NavLink>
                                                                    <ul>
                                                                        <li><NavLink to="/category/ipl">IPL</NavLink></li>
                                                                        {/* <li><NavLink to="/category/tnpl">TNPL</NavLink></li> */}
                                                                    </ul>
                                                                </li>
                                                                <li><NavLink to="/category/international">International</NavLink>
                                                                    <ul>
                                                                        <li><NavLink to="/category/asia-cup">Asia Cup</NavLink></li>
                                                                        <li><NavLink to="/category/legends-league-cricket">Legends League Cricket</NavLink></li>
                                                                        {/* <li><NavLink to="/category/road-safety-world-series">Road Safety World Series</NavLink></li> */}
                                                                        <li><NavLink to="/category/t20-world-cup">T20 World Cup</NavLink></li>

                                                                        {/* <li><NavLink to="/category/ire-vs-nz">Ire Vs Nz</NavLink></li> */}

                                                                    </ul></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-6">
                                                            <h3><NavLink to="/category/women">Women</NavLink></h3>
                                                            <ul>
                                                                {/* <li><NavLink to="/category/international-series">International series</NavLink></li>
                                                                <li><NavLink to="/category/t20i-women">T20I Women</NavLink></li> */}
                                                                <li><NavLink to="/category/wbbl-2022">WBBL 2022</NavLink></li>
                                                                <li><NavLink to="/category/womens-asia-cup-2022">Women's Asia cup 2022</NavLink></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="dropdown"><NavLink to="/category/news">NEWS</NavLink>
                                        <ul>
                                            <li><NavLink to="/category/trending-news">Trending News</NavLink></li>
                                            <li><NavLink to="/category/editors-pick">Editor's Pick</NavLink></li>
                                            <li><NavLink to="/category/featured-post">Featured Post</NavLink></li>
                                            <li><NavLink to="/category/on-this-day">On this day</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><NavLink to="/category/match-prediction">MATCH PREDICTION</NavLink>
                                        <ul>
                                            <li><NavLink to="/category/match-review">Match Review</NavLink></li>
                                            <li><NavLink to="/category/match-prediction">Match Prediction</NavLink></li>
                                            <li><NavLink to="/category/match-analysis">Match Analysis</NavLink></li>
                                            <li><NavLink to="/category/fantasy-tips">Fantasy Tips</NavLink></li>
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