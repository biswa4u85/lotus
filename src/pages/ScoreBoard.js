import React, { useState, useEffect } from "react";
import { Tabs, Row, Col, Table } from 'antd';
import Config from "../common/Config";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getHighlights } from "../store/ScoreRedux";
import { ShareAltOutlined } from '@ant-design/icons';
import Live from "./Scores/Live";
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

    const data = [
        {
            key: '1',
            name: 'Nattaya Boochatham* (lhb)',
            run: 3,
            bull: 3,
            four: 0,
            six: 0,
            SR: 100.00,
            Bowler: 6,
            Balls: 6,
            Mat: 4,
            Runs: 4,
            HS: 3,
            Ave: 4.00,

        },

        {
            key: '2',
            name: 'Nattaya Boochatham* (lhb)',
            run: 3,
            bull: 3,
            four: 0,
            six: 0,
            SR: 100.00,
            Bowler: 6,
            Balls: 6,
            Mat: 4,
            Runs: 4,
            HS: 3,
            Ave: 4.00,

        },

        {
            key: '3',
            name: 'Nattaya Boochatham* (lhb)',
            run: 3,
            bull: 3,
            four: 0,
            six: 0,
            SR: 100.00,
            Bowler: 6,
            Balls: 6,
            Mat: 4,
            Runs: 4,
            HS: 3,
            Ave: 4.00,

        },

        {
            key: '4',
            name: 'Nattaya Boochatham* (lhb)',
            run: 3,
            bull: 3,
            four: 0,
            six: 0,
            SR: 100.00,
            Bowler: 6,
            Balls: 6,
            Mat: 4,
            Runs: 4,
            HS: 3,
            Ave: 4.00,

        },

    ];

    console.log(highlights)

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
                                <Table columns={columns} dataSource={highlights?.live_details?.scorecard?.[0]?.batting} />

                            </TabPane>

                            <TabPane tab="Scorecard" key="2">
                                <Table columns={columns} dataSource={data} />
                            </TabPane>
                        </Tabs>
                    </div>
                </div>

            </div >
        </>
    );
}

export default ScoreBoard;
