import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment";
import Config from '../../common/Config'
import SocketApis from '../../utility/socket-apis'
import { getHomeFixtures } from "../../store/ScoreRedux";

function Live(props) {
    const { type, navigate } = props
    const dispatch = useDispatch()
    const series = useSelector((state) => state.score.series)
    const fixtures = useSelector((state) => state.score.fixtures)
    const grouped = Config.groupBy(fixtures, 'series_id');

    useEffect(() => {
        if (type === 'live') {
            let date = new Date()
            let month = Number(date.getMonth()) + 1
            let fromDate = `${date.getFullYear()}-${month < 9 ? "0" + month : month}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
            dispatch(getHomeFixtures({ filters: [["Live Score Fixtures", "date", "=", fromDate]] }))
        } else if (type === 'recent') {
            let date = new Date()
            let month = Number(date.getMonth()) + 1
            let toDate = `${date.getFullYear()}-${month < 9 ? "0" + month : month}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
            date.setDate(date.getDate() - 1);
            let fromDate = `${date.getFullYear()}-${month < 9 ? "0" + month : month}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
            dispatch(getHomeFixtures({ filters: [["Live Score Fixtures", "date", "Between", [fromDate, toDate]]] }))
        } else {
            let date = new Date()
            let month = Number(date.getMonth()) + 1
            let fromDate = `${date.getFullYear()}-${month < 9 ? "0" + month : month}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
            dispatch(getHomeFixtures({ filters: [["Live Score Fixtures", "date", ">", fromDate]] }))
        }
        return () => {
            for (let item of fixtures) {
                if (item.status === 'Fixture') {
                    SocketApis.unSubscribe(item.name)
                }
            }
        }
    }, [type]);

    useEffect(() => {
        for (let item of fixtures) {
            if (item.status === 'Fixture' && Config.checkTime(item.datetime)) {
                SocketApis.subscribe(item.name)
            }
        }
    }, [fixtures]);

    return (<div>
        {Object.keys(grouped).map((name, k) => {
            let latestNews = series.filter(item => item.series_id === name);
            return <div key={k}><h3> {latestNews[0]?.type} - {latestNews[0]?.series_name}</h3>
                {grouped[name].map((item, key) => <div key={key} id={`live_inner_${item.name}`}>
                    <div className="africa">
                        <h5>{item.match_title}<span> {item.match_subtitle}</span></h5>
                        <h6>{Config.checkDate(item.date)} {moment.utc(item.datetime).format('Do MMM YYYY hh:mm A')} at {item.venue}</h6>
                    </div>
                    <div className="match">
                        <div class="vl">
                            <h5>{item?.home?.name} <span id="live_home"></span></h5>
                            <h5>{item?.away?.name} <span id="live_away"></span></h5>
                            <h6 id="live_result">{item.result}</h6>
                        </div>
                    </div>
                    <div className="runs">
                        <h6>Live Score</h6>
                        <div class="score-border"></div>
                        <h6 style={{ cursor: 'pointer' }} onClick={() => navigate(`/match-news/${item.name}`)}>Scorecard</h6>
                        <div class="score-border"></div>
                        <h6>Full Commentary</h6>
                        <div class="score-border"></div>
                        <h6>News</h6>
                    </div>
                </div>)}
            </div>
        })}
    </div>);
}

export default Live;