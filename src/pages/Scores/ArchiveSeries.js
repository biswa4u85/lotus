import React, { useEffect } from "react";
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment";
import Config from '../../common/Config'
import { getHomeFixtures } from "../../store/ScoreRedux";

function ArchiveSeries(props) {
    const { type } = props
    const dispatch = useDispatch()
    const fixtures = useSelector((state) => state.score.fixtures)
    const grouped = Config.groupBy(fixtures, 'tournament_id');

    useEffect(() => {
        let date = new Date()
        let month = Number(date.getMonth()) + 1
        let fromDate = `${date.getFullYear()}-${month < 9 ? "0" + month : month}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
        dispatch(getHomeFixtures({ filters: [["Flash Events", "date", "<", fromDate]] }))
    }, [type]);


    return (<div>
        {Object.keys(grouped).map((name, k) => {
            let tournaments = grouped[name][0]?.tournament_details

            return <div key={k}>
                <div className="tab-bar">
                    <div className="month">
                        <div className="series">
                            <Row>
                                <Col span={6}>
                                    <h5>{tournaments?.NAME} {tournaments.TOURNAMENT_IMAGE && (<img src={tournaments.TOURNAMENT_IMAGE} className="flagimg" />)}</h5>
                                </Col>
                                <Col span={16}>
                                    {grouped[name].map((item, key) => {
                                        let events = item?.event_details
                                        return <div key={key}>
                                            {events.HOME_NAME} {events.HOME_IMAGES && (<img src={events.HOME_IMAGES[0]} className="flagimg" />)} VS {events.AWAY_IMAGES && (<img src={events.AWAY_IMAGES[0]} className="flagimg" />)} {events.AWAY_NAME}
                                            <br />
                                            <br />
                                            <p>{item.stage_type}, {item.result}</p>
                                            <h6>{moment.utc(item.start_time).format('Do MMM YYYY hh:mm A')}</h6>
                                            <div className="match-border"></div>
                                            <br />
                                        </div>
                                    })}

                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        })}
    </div>);
}

export default ArchiveSeries;