import React, { useState, useEffect } from "react";
import { Tabs, Row, Col, Button, Carousel } from 'antd';
import Config from "../common/Config";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Live from "./Scores/Live";
import Upcoming from "./Scores/Upcoming";
import Result from "./Scores/Result";

function LiveScore(props) {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const homeSettings = useSelector((state) => state.auth.homeSettings)
    const token = Config.token
    const [tab, setTab] = useState(1)
    const { TabPane } = Tabs;
    let liveData = [{}, {}, {}, {}, {}, {}]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    const [size, setSize] = useState('small');
    const onChange = (key) => {
        setTab(key);
    };

    const onAction = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <>
            <Helmet>
                <title>{homeSettings?.meta_title}</title>
                <meta name="description" content={homeSettings?.meta_description} />
            </Helmet>
            <div className="tab-sec">
               
                <Row>
                    <Col xs={{ span: 22, offset: 1 }} lg={{ span: 13, offset: 5 }}>
                        {/* <Live data={liveData} /> */}
                        <div className="tab">
                            <Tabs defaultActiveKey="1" onChange={onChange} >
                                <TabPane tab="Current Matches" key="1">
                                    <h2>Live Cricket Score</h2>
                                    <Tabs defaultActiveKey="1" onChange={onChange} >
                                        <TabPane tab="Live" key="2"></TabPane>
                                        <TabPane tab="Recent" key="3">
                                            <Button className="tab-btn" type="primary" shape="round" size={size}> International </Button>
                                            <Button className="tab-btn" shape="round" size={size}> league </Button>
                                            <Button className="tab-btn" shape="round" size={size}> Domestic</Button>
                                            <Button className="tab-btn" shape="round" size={size}> Women </Button>
                                            <h3>SOUTH AFRICA TOUR OF ENGLAND, 2022</h3>
                                            <div className="africa">
                                                <h5>southu Africa Tour Of England 2022, <span>4-day Practice Match</span></h5>
                                                <h6>Aug 9 Aug-12 . 3:30 PM at Canterbury, St Lawrence Ground</h6>
                                            </div>


                                            <div className="match">
                                                <Carousel afterChange={onAction}>
                                                    <div class="vl">
                                                        <h5>RSA <span>433 & 183 </span></h5>
                                                        <h5>ENGA <span>672 </span></h5>
                                                        <h6>England Lions Won by an innings and 56 runs</h6>
                                                    </div>

                                                    <div class="vl">
                                                        <h5>RSA <span>433 & 183 </span></h5>
                                                        <h5>ENGA <span>672 </span></h5>
                                                        <h6>England Lions Won by an innings and 56 runs</h6>
                                                    </div>


                                                    <div class="vl">
                                                        <h5>RSA <span>433 & 183 </span></h5>
                                                        <h5>ENGA <span>672 </span></h5>
                                                        <h6>England Lions Won by an innings and 56 runs</h6>
                                                    </div>

                                                </Carousel>
                                            </div>

                                            <div className="runs">
                                                <h6>Live Score</h6>
                                                <div class="score-border"></div>
                                                <h6>Scorecard</h6>
                                                <div class="score-border"></div>
                                                <h6>Full Commentary</h6>
                                                <div class="score-border"></div>
                                                <h6>News</h6>
                                            </div>
                                            <h3>NEW ZEALAND TOUR OF WEST INDIES. 2022</h3>
                                            <div className="africa">
                                                <h5>New Zealand vs West Indies, <span>3rd T201</span></h5>
                                                <h6>Aug 15• 12:00 AM at Kingston, Jamaica, Sabina Park</h6>
                                            </div>
                                        </TabPane>
                                        <TabPane tab="Upcoming" key="4"></TabPane>
                                    </Tabs>
                                </TabPane>
                                <TabPane tab="Current & Future Series" key="2"></TabPane>
                                <TabPane tab="Matches By Day" key="3"></TabPane>
                                <TabPane tab="Teams" key="4"></TabPane>
                                <TabPane tab="Series Archive" key="5"></TabPane>
                            </Tabs>
                        </div>





                    </Col>
                </Row >
               
            </div >

        </>
    );
}

export default LiveScore;
