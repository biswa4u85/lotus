import React, { } from "react";
import { Tabs, Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Flag1 from "../assets/image/Flag1.webp";
import Flag2 from "../assets/image/Flag2.webp";
import Flag3 from "../assets/image/Flag3.webp";
import Flag4 from "../assets/image/Flag4.webp";
import Flag5 from "../assets/image/Flag5.webp";
import Flag6 from "../assets/image/Flag6.webp";
import Flag7 from "../assets/image/Flag7.webp";
import Flag8 from "../assets/image/Flag8.webp";
import Flag9 from "../assets/image/Flag9.webp";
import Flag10 from "../assets/image/Flag10.webp";
import Flag11 from "../assets/image/Flag11.webp";
import Flag12 from "../assets/image/Flag12.webp";
import Flag13 from "../assets/image/Flag13.webp";
import Flag14 from "../assets/image/Flag14.webp";
import Flag15 from "../assets/image/Flag15.webp";



function LiveScore(props) {
    let navigate = useNavigate();
    let { Id } = useParams();
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const token = useSelector((state) => state.auth.token)
    const { TabPane } = Tabs;

    const onChange = (key) => {
        console.log(key);
    };
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{'Live Score'}</title>
                <link rel="canonical" href="#" />
            </Helmet>
            <div className="tab-sec">
                <Tabs defaultActiveKey="1" centered onChange={onChange} >
                    <TabPane tab="Live" key="1">
                        <Row>
                            <Col span={13} offset={5}>
                                <div class="live">
                                    <h4>Top Events</h4>
                                    <div className="border-box"></div>
                                    <div className="live-tab">
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag1} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag2} /> Bangladesh </h6>

                                            </div>
                                            <p>Zimbabww chose to  bat.</p>
                                            <div className="lanka-border"></div>
                                            <ul>
                                                <li>Report</li>
                                                <li>Live</li>
                                                <li>Series Home</li>
                                            </ul>
                                        </div>
                                        <div className="live-border"></div>
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag3} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag4} /> Bangladesh </h6>

                                            </div>
                                            <p>Zimbabww chose to  bat.</p>
                                            <div className="lanka-border"></div>
                                            <ul>
                                                <li>Report</li>
                                                <li>Live</li>
                                                <li>Series Home</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="border-box"></div>
                                    <div className="live-tab">
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag5} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag2} /> Bangladesh </h6>

                                            </div>
                                            <p>Zimbabww chose to  bat.</p>
                                            <div className="lanka-border"></div>
                                            <ul>
                                                <li>Report</li>
                                                <li>Live</li>
                                                <li>Series Home</li>
                                            </ul>
                                        </div>
                                        <div className="live-border"></div>
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag7} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag8} /> Bangladesh </h6>

                                            </div>
                                            <p>Zimbabww chose to  bat.</p>
                                            <div className="lanka-border"></div>
                                            <ul>
                                                <li>Report</li>
                                                <li>Live</li>
                                                <li>Series Home</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="border-box"></div>
                                    <div className="live-tab">
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag9} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag10} /> Bangladesh </h6>

                                            </div>
                                            <p>Zimbabww chose to  bat.</p>
                                            <div className="lanka-border"></div>
                                            <ul>
                                                <li>Report</li>
                                                <li>Live</li>
                                                <li>Series Home</li>
                                            </ul>
                                        </div>
                                        <div className="live-border"></div>
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag11} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag12} /> Bangladesh </h6>

                                            </div>
                                            <p>Zimbabww chose to  bat.</p>
                                            <div className="lanka-border"></div>
                                            <ul>
                                                <li>Report</li>
                                                <li>Live</li>
                                                <li>Series Home</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="border-box"></div>
                                    <div className="live-tab">
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag13} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag14} /> Bangladesh </h6>

                                            </div>
                                            <p>Zimbabww chose to  bat.</p>
                                            <div className="lanka-border"></div>
                                            <ul>
                                                <li>Report</li>
                                                <li>Live</li>
                                                <li>Series Home</li>
                                            </ul>
                                        </div>
                                        <div className="live-border"></div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="Upcoming" key="2">
                        <Row>
                            <Col span={13} offset={5}>
                                <div class="live">
                                    <h4>Bangladesh Tour of Zimbabww <a href="#">All Matches</a></h4>
                                    <div className="border-box"></div>
                                    <div className="live-tab">
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag9} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag10} /> Bangladesh </h6>

                                            </div>
                                            <p>Zimbabww chose to  bat.</p>
                                            <div className="lanka-border"></div>
                                            <ul>
                                                <li>Report</li>
                                                <li>Live</li>
                                                <li>Series Home</li>
                                            </ul>

                                        </div>
                                        <hr />
                                        <div className="live-border"></div>
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag9} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag10} /> Bangladesh </h6>

                                            </div>
                                            <p>Zimbabww chose to  bat.</p>
                                            <div className="lanka-border"></div>
                                            <ul>
                                                <li>Report</li>
                                                <li>Live</li>
                                                <li>Series Home</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="border-box"></div>
                                    <div className="live-tab">
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag9} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag10} /> Bangladesh </h6>

                                            </div>
                                            <p>Zimbabww chose to  bat.</p>
                                            <div className="lanka-border"></div>
                                            <ul>
                                                <li>Report</li>
                                                <li>Live</li>
                                                <li>Series Home</li>
                                            </ul>
                                        </div>
                                        <hr />
                                        <div className="live-border"></div>
                                    </div>
                                   
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="Resuit" key="3">
                        <Row>
                            <Col span={13} offset={5}>
                                <div class="live">
                                <h4>Bangladesh Tour of Zimbabww <a href="#">All Matches</a></h4>
                                <div className="border-box"></div>
                                    <div className="live-tab">
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag15} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={Flag5} /> Bangladesh </h6>

                                            </div>
                                            <p>Zimbabww chose to  bat.</p>
                                            <div className="lanka-border"></div>
                                            <ul>
                                                <li>Report</li>
                                                <li>Live</li>
                                                <li>Series Home</li>
                                            </ul>
                                        </div>
                                        <hr />
                                        <div className="live-border"></div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </div>

        </>
    );
}

export default LiveScore;
