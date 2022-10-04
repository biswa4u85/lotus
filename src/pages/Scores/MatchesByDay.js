import React, { useEffect } from "react";
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment";
import Config from '../../common/Config'
import { getHomeFixtures } from "../../store/ScoreRedux";

function MatchesByDay(props) {
    const { type } = props
    const dispatch = useDispatch()
    const series = useSelector((state) => state.score.series)
    const fixtures = useSelector((state) => state.score.fixtures)
    const grouped = Config.groupBy(fixtures, 'date');

    useEffect(() => {
        let date = new Date()
        let fromDate = `${date.getFullYear()}-${date.getMonth() < 9 ? "0" + (Number(date.getMonth()) + 1) : date.getMonth()}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
        dispatch(getHomeFixtures({ filters: [["Live Score Fixtures", "date", ">=", fromDate]] }))
    }, [type]);

    return (<div>
        {Object.keys(grouped).map((name, k) => {
            return <div key={k}>
                <div className="tab-bar">
                    <div className="friday">
                        <h2>{moment.utc(name).format('Do MMM YYYY')}</h2>
                    </div>
                    <div className="nepal">
                        {grouped[name].map((item, key) => {
                            let latestNews = series.filter(it => it.series_id === item.series_id);
                            return <Row key={key}>
                                <Col span={7}>
                                    <h5>{latestNews[0]?.series_name}</h5>
                                </Col>
                                <Col span={7} offset={2}>
                                    <h6>{item.match_title}</h6>
                                    <p>{item.match_subtitle}</p>
                                </Col>
                                <Col span={6} offset={2}>
                                    <h6>{moment.utc(item.datetime).format('hh:mm A')}</h6>
                                    <p>{moment.utc(item.datetime).format('Do MMM YYYY')}</p>
                                </Col>
                            </Row>
                        })}
                    </div>

                </div>
            </div>
        })}
    </div>);
}

export default MatchesByDay;