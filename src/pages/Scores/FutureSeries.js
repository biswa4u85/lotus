import React, { useEffect } from "react";
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment";
import Config from '../../common/Config'
import { getHomeFixtures } from "../../store/ScoreRedux";

function FutureSeries(props) {
    const { type } = props
    const dispatch = useDispatch()
    const series = useSelector((state) => state.score.series)
    const fixtures = useSelector((state) => state.score.fixtures)
    const grouped = Config.groupBy(fixtures, 'series_id');

    useEffect(() => {
        let date = new Date()
        let fromDate = `${date.getFullYear()}-${date.getMonth() < 9 ? "0" + (Number(date.getMonth()) + 1) : date.getMonth()}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
        dispatch(getHomeFixtures({ filters: [["Live Score Fixtures", "date", ">=", fromDate]] }))
    }, [type]);


    return (<div>
        {Object.keys(grouped).map((name, k) => {
            let latestNews = series.filter(item => item.series_id === name);
            return <div key={k}>
                <div className="tab-bar">
                    <div className="month">
                        <div className="series">
                            <Row>
                                <Col span={4}>
                                    <h5>{latestNews[0].series_name}</h5>
                                </Col>
                                <Col span={20}>
                                    {grouped[name].map((item, key) => <div key={key}>
                                        {item.match_title} {item.match_subtitle}
                                        <h6>{Config.checkDate(item.date)} {moment.utc(item.date).format('Do MMM YYYY hh:mm A')}</h6>
                                        <div className="match-border"></div>
                                    </div>)}

                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        })}
    </div>);
}

export default FutureSeries;