import React, { useState, useEffect } from "react";
import { Row, Col, Tabs } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import Config from '../../common/Config'
import { getAllTeam } from "../../store/ScoreRedux";

const { TabPane } = Tabs;

function Teams(props) {
    const { type } = props
    const dispatch = useDispatch()
    const [tab, setTab] = useState(1)
    const teams = useSelector((state) => state.score.teams)
    const grouped = Config.groupBy(teams, 'type');

    useEffect(() => {
        dispatch(getAllTeam())
    }, [type]);

    return (
        <div className="seriesBox">
            <h1>Cricket Teams</h1>
            <Tabs defaultActiveKey="1" onChange={setTab}>
                {Config.groups.map((name, k) => {
                    return <TabPane key={k} tab={name}>
                        <Row>
                            {grouped[name] ? grouped[name].map((item, k) => {
                                return <Col span={5}>
                                    <div className="month" style={{ margin: 7, textAlign: 'center' }}>
                                        <h5>{item.team_name}</h5>
                                        {item.team_image && (<img src={Config.frappe_url + item.team_image} />)}
                                    </div>
                                </Col>
                            }) : null}
                        </Row>
                    </TabPane>
                })}
            </Tabs>
        </div>
    );
}

export default Teams;