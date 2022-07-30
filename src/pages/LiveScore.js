import React, { useEffect } from "react";
import { Tabs, Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/use-theme";
import { getCmsDetails } from '../store/MainRedux'
import Config from "../common/Config";
import flag from "../assets/image/flag.png";
import { Helmet } from "react-helmet";
import lk from "../assets/image/lk.png";



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
                                    <div className="live-tab">
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={lk} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={lk} /> Bangladesh </h6>

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
                                                <h6><img src={lk} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={lk} /> Bangladesh </h6>

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
                                    <div className="live-tab">
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={lk} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={lk} /> Bangladesh </h6>

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
                                                <h6><img src={lk} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={lk} /> Bangladesh </h6>

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
                                    <div className="live-tab">
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={lk} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={lk} /> Bangladesh </h6>

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
                                                <h6><img src={lk} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={lk} /> Bangladesh </h6>

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
                                    <div className="live-tab">
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={lk} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={lk} /> Bangladesh </h6>

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
                                    <div className="live-tab">
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={lk} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={lk} /> Bangladesh </h6>

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
                                    <div className="live-tab">
                                        <div className="evevts">
                                            <h5>Live</h5>
                                            <p>1st T20|,Harare,july 30,2022 <a href="#">Bangladesh tour of Zimbabww</a></p>
                                            <div className='zimbabww'>
                                                <h6><img src={lk} /> Zimbabww </h6>
                                                <span>(9.3/20 ov )71/2</span>
                                            </div>
                                            <div className='zimbabww'>
                                                <h6><img src={lk} /> Bangladesh </h6>

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
