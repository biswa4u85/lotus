import React, { useState, useEffect } from "react";
import { Tabs, Row, Col } from 'antd';
import Config from "../../common/Config";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Live from "./Live";
import FutureSeries from "./FutureSeries";
import MatchesByDay from "./MatchesByDay";
import Teams from "./Teams";
import ArchiveSeries from "./ArchiveSeries";

function LiveScore(props) {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const homeSettings = useSelector((state) => state.auth.homeSettings)
    const [tab, setTab] = useState(1)
    const [subtab, setSubTab] = useState(1)
    const { TabPane } = Tabs;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    return (
        <>
            <Helmet>
                <title>{homeSettings?.meta_title}</title>
                <meta name="description" content={homeSettings?.meta_description} />
            </Helmet>
            <div className="tab-sec">
                <Row>
                    <Col xs={{ span: 22, offset: 1 }} lg={{ span: 22, offset: 1 }}>
                        <div className="tab">
                            <Tabs defaultActiveKey="1" onChange={setTab} >

                                <TabPane tab="Current Matches" key="1">
                                    <h2>Live Cricket Score</h2>
                                    <Tabs defaultActiveKey="1" onChange={setSubTab} >
                                        <TabPane tab="Live" key="1">
                                            {subtab == 1 && (<Live type={'live'} navigate={navigate} />)}
                                        </TabPane>

                                        <TabPane tab="Recent" key="2">
                                            {subtab == 2 && (<Live type={'recent'} navigate={navigate} />)}
                                        </TabPane>

                                        <TabPane tab="Upcoming" key="3">
                                            {subtab == 3 && (<Live type={'upcoming'} navigate={navigate} />)}
                                        </TabPane>

                                    </Tabs>
                                </TabPane>

                                <TabPane tab="Current & Future Series" key="2">
                                    {tab == 2 && (<FutureSeries type={'future'} navigate={navigate} />)}
                                </TabPane>

                                <TabPane tab="Matches By Day" key="3">
                                    {tab == 3 && (<MatchesByDay type={'day'} navigate={navigate} />)}
                                </TabPane>

                                <TabPane tab="Teams" key="4">
                                    {tab == 4 && (<Teams type={'teams'} navigate={navigate} />)}
                                </TabPane>

                                <TabPane tab="Series Archive" key="5">
                                    {tab == 5 && (<ArchiveSeries type={'archive'} navigate={navigate} />)}
                                </TabPane>

                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default LiveScore;
