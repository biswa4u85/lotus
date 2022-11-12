import React, { useState, useEffect } from "react";
import { Tabs, Row, Col, Table } from 'antd';
import Config from "../common/Config";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getHighlights } from "../store/ScoreRedux";
import { ShareAltOutlined } from '@ant-design/icons';
import ArchiveSeries from "./Scores/ArchiveSeries";
import Live from "./Scores/Live";
import SocketApis from '../utility/socket-apis'
import flag from '../assets/image/flag.png'

function ScoreBoard(props) {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    let { name } = useParams();
    const highlights = useSelector((state) => state.score.highlights)
    const token = Config.token
    const [tab, setTab] = useState(1)
    const [subtab, setSubTab] = useState(1)
    const { TabPane } = Tabs;

    console.log(highlights)
    //   debugger
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getHighlights({ token, name }))
        SocketApis.subscribe(name)
    }, [name]);


    const onChange = (key) => {
        console.log(key);
    }

    const columns = [
        {
            title: 'BATTERS',
            dataIndex: 'player_name',
            key: 'name',
            width: 100

        },
        {
            title: 'R',
            dataIndex: 'runs',
            width: 30
        },
        {
            title: 'B',
            dataIndex: 'balls',
            width: 30
        },
        {
            title: '4s',
            dataIndex: 'fours',
            width: 30
        },
        {
            title: '6s',
            dataIndex: 'sixes',
            width: 30
        },
        {
            title: 'SR',
            dataIndex: 'strike_rate',
            width: 30
        },
        // {
        //     title: 'This Bowler',
        //     dataIndex: 'Bowler',
        //     width: 30
        // },
        // {
        //     title: 'Last 5 Balls',
        //     dataIndex: 'Balls',
        //     width: 30
        // },
        {
            title: 'Mat',
            dataIndex: 'minutes',
            width: 30
        },
        // {
        //     title: 'Runs',
        //     dataIndex: 'Runs',
        //     width: 30
        // },
        // {
        //     title: 'HS	',
        //     dataIndex: 'HS',
        //     width: 30
        // },
        // {
        //     title: 'Ave	',
        //     dataIndex: 'Ave',
        //     width: 30
        // },



    ];

    const battingcolumns = [
        {
            title: 'BATTING',
            dataIndex: 'player_name',
            key: 'name',
            width: 400

        },

        {
            title: '',
            dataIndex: 'how_out',
            key: 'name',
            width: 400,

        },

        {
            title: 'R',
            dataIndex: 'runs',
            width: 30
        },
        {
            title: 'B',
            dataIndex: 'balls',
            width: 30
        },
        {
            title: '4s',
            dataIndex: 'fours',
            width: 30
        },
        {
            title: '6s',
            dataIndex: 'sixes',
            width: 30
        },
        {
            title: 'SR',
            dataIndex: 'strike_rate',
            width: 30
        },




    ];

    const bolingcolumns = [
        {
            title: 'BOWLING',
            dataIndex: 'player_name',
            key: 'name',
            width: 400

        },

        {
            title: 'O',
            dataIndex: 'overs',
            width: 30
        },

        {
            title: 'M',
            dataIndex: 'maidens',
            width: 30
        },

        {
            title: 'R',
            dataIndex: 'runs_conceded',
            width: 30
        },
        {
            title: 'W',
            dataIndex: 'wickets',
            width: 30
        },
        {
            title: 'ECON',
            dataIndex: 'economy',
            width: 30
        },
        {
            title: '0s',
            dataIndex: 'dot_balls',
            width: 30
        },
        {
            title: '4s',
            dataIndex: 'fours',
            width: 30
        },
        {
            title: '6s',
            dataIndex: 'sixes',
            width: 30
        },
        {
            title: 'EX',
            dataIndex: 'extras',
            width: 30
        },






    ];

    const womencolumns = [
        {
            title: 'BATTING',
            dataIndex: 'player_name',
            key: 'name',
            width: 400

        },
        {
            title: '',
            dataIndex: 'how_out',
            key: 'name',
            width: 400

        },

        {
            title: 'R',
            dataIndex: 'runs',
            width: 30
        },

        {
            title: 'B',
            dataIndex: 'balls',
            width: 30
        },

        {
            title: 'M',
            dataIndex: 'minutes',
            width: 30
        },
        {
            title: '4s',
            dataIndex: 'fours',
            width: 30
        },
        {
            title: '6s',
            dataIndex: 'sixes',
            width: 30
        },
        {
            title: 'sr',
            dataIndex: 'strike_rate',
            width: 30
        },







    ];

    const bolingwomencolumns = [
        {
            title: 'BOWLING',
            dataIndex: 'player_name',
            key: 'name',
            width: 400

        },

        {
            title: 'O',
            dataIndex: 'overs',
            width: 30
        },

        {
            title: 'M',
            dataIndex: 'maidens',
            width: 30
        },

        {
            title: 'R',
            dataIndex: 'runs_conceded',
            width: 30
        },
        {
            title: 'W',
            dataIndex: 'wickets',
            width: 30
        },
        {
            title: 'ECON',
            dataIndex: 'economy',
            width: 30
        },
        {
            title: '0s',
            dataIndex: 'dot_balls',
            width: 30
        },
        {
            title: '4s',
            dataIndex: 'fours',
            width: 30
        },
        {
            title: '6s',
            dataIndex: 'sixes',
            width: 30
        },
        {
            title: 'EX',
            dataIndex: 'extras',
            width: 30
        },
    ];

    const matchcolumns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },

        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ];



    let still_to_bat_ins1 = highlights?.live_details?.scorecard[0]?.still_to_bat ? highlights?.live_details?.scorecard[0]?.still_to_bat : []
    let still_to_bat_ins2 = highlights?.live_details?.scorecard[1]?.still_to_bat ? highlights?.live_details?.scorecard[1]?.still_to_bat : []


    return (
        <>
            <div class="container">
                <div className="score-board">

                    <Row className="scores">
                        <Col span={12} >
                            <h5>RESULT</h5>
                            {/* <p>10th Match, Sylhet, October 06, 2022, <a href="#">Women's Asia Cup</a></p> */}
                            <p>{highlights?.fixture?.start_date},{highlights?.fixture?.venue} <a href="#">{highlights?.fixture?.series?.series_name}</a></p>
                        </Col>
                        <Col span={12} >
                            <ShareAltOutlined className="shree" />
                        </Col>
                    </Row>
                    <div className="score"></div>

                    <Row>
                        <Col span={16} >
                            <div className="wickets">
                                <div className="match-board">
                                    <div>
                                        <img src={flag} />
                                        <a href="#">{highlights?.fixture?.home?.name}</a>
                                    </div>
                                    <div>
                                        <h6>{highlights?.live_details?.match_summary?.home_scores}</h6>
                                    </div>
                                </div>
                                <div className="match-board">
                                    <div>
                                        <img src={flag} />
                                        <a href="#">{highlights?.fixture?.away?.name}</a>
                                    </div>
                                    <div className="score-number">
                                        <h6>{highlights?.live_details?.match_summary?.away_scores}</h6>
                                    </div>
                                </div>
                                <p >{highlights?.fixture?.match_title}</p>
                            </div>
                        </Col>

                        <div class="vl"></div>
                        <Col span={7}>
                            <div className="match-player">
                                <p>PLAYER OF THE MATCH</p>
                                <a href="#">Natthakan Chantham </a><span>, THI-W 61 (51)</span>
                            </div>
                        </Col>
                    </Row>
                    <div className="score"></div>
                    <div className="wickets">
                        <Tabs defaultActiveKey="1" onChange={setTab} >

                            <TabPane tab="Live" key="1">
                                <Table pagination={false} columns={columns} dataSource={highlights?.live_details?.scorecard?.[0]?.batting} />

                            </TabPane>


                            <TabPane tab="Scorecard" key="2">
                                <Tabs defaultActiveKey="1" onChange={setTab} >
                                    <TabPane tab={highlights?.live_details?.scorecard?.[0]?.title} key="1">
                                        <div className="scorecard-tab">
                                            <h5>{highlights?.live_details?.scorecard?.[0]?.title}</h5>
                                            <Table pagination={false} columns={battingcolumns} dataSource={highlights?.live_details?.scorecard?.[0]?.batting} size="middle" />
                                            <div className="total-scre">
                                                <h6>TOTAL</h6>
                                                <spcn>{highlights?.live_details?.match_summary?.home_scores}</spcn>
                                                <h6>{highlights?.live_details?.match_summary?.away_scores}</h6>
                                            </div>
                                            <div>
                                                <h6>{still_to_bat_ins1.map((item, key) => <a key={key} href="#">{item.player_name}</a>)}</h6>
                                                <p>{highlights?.live_details?.scorecard?.[0]?.fow}</p>
                                            </div>
                                            <Table pagination={false} columns={bolingcolumns} dataSource={highlights?.live_details?.scorecard?.[0]?.bowling} size="middle" />
                                        </div>

                                        <div className="scorecard-tab">
                                            <h5>{highlights?.live_details?.scorecard?.[0]?.title}</h5>
                                            <Table pagination={false} columns={womencolumns} dataSource={highlights?.live_details?.scorecard?.[1]?.batting} size="middle" />
                                            <div className="total-scre">
                                                <h6>TOTAL</h6>
                                                <spcn>{highlights?.live_details?.match_summary?.home_scores}</spcn>
                                                <h6>{highlights?.live_details?.match_summary?.away_scores}</h6>
                                            </div>

                                            <div>

                                                <p>{highlights?.live_details?.scorecard?.[1]?.fow}</p>
                                            </div>
                                            <Table pagination={false} columns={bolingwomencolumns} dataSource={highlights?.live_details?.scorecard?.[1]?.bowling} size="middle" />
                                        </div>
                                    </TabPane>

                                    <TabPane tab={highlights?.live_details?.scorecard?.[1]?.title}>
                                        <div className="scorecard-tab">
                                            <h5>{highlights?.live_details?.scorecard?.[1]?.title}</h5>
                                            <Table pagination={false} columns={battingcolumns} dataSource={highlights?.live_details?.scorecard?.[1]?.batting} size="middle" />
                                            <div className="total-scre">
                                                <h6>TOTAL</h6>
                                                <spcn>{highlights?.live_details?.match_summary?.home_scores}</spcn>
                                                <h6>{highlights?.live_details?.match_summary?.away_scores}</h6>
                                            </div>
                                            <div>
                                                <h6>{still_to_bat_ins2.map((item, key) => <a key={key} href="#">{item.player_name}</a>)}</h6>
                                                <p>{highlights?.live_details?.scorecard?.[1]?.fow}</p>
                                            </div>
                                            <Table pagination={false} columns={bolingcolumns} dataSource={highlights?.live_details?.scorecard?.[1]?.bowling} size="middle" />
                                        </div>

                                        <div className="scorecard-tab">
                                            <h5>{highlights?.live_details?.scorecard?.[1]?.title}</h5>
                                            <Table pagination={false} columns={womencolumns} dataSource={highlights?.live_details?.scorecard?.[1]?.batting} size="middle" />
                                            <div className="total-scre">
                                                <h6>TOTAL</h6>
                                                <spcn>{highlights?.live_details?.match_summary?.home_scores}</spcn>
                                                <h6>{highlights?.live_details?.match_summary?.away_scores}</h6>
                                            </div>

                                            <div>

                                                <p>{highlights?.live_details?.scorecard?.[1]?.fow}</p>
                                            </div>
                                            <Table pagination={false} columns={bolingwomencolumns} dataSource={highlights?.live_details?.scorecard?.[1]?.bowling} size="middle" />
                                        </div>

                                    </TabPane>

                                    <TabPane tab="Match Details" key="3">
                                        <h5>MATCH DETAILS</h5>
                                        <Table pagination={false} columns={matchcolumns} dataSource={data} size="small" />

                                    </TabPane>
                                </Tabs>


                            </TabPane>

                        </Tabs>

                    </div>
                </div>

            </div >
        </>
    );
}

export default ScoreBoard;
