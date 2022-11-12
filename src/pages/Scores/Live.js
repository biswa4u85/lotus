import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment";
import Config from '../../common/Config'
import SocketApis from '../../utility/socket-apis'
import { getHomeFixtures } from "../../store/ScoreRedux";

function Live(props) {
    const { type, navigate } = props
    const dispatch = useDispatch()
    const fixtures = useSelector((state) => state.score.fixtures)
    const grouped = Config.groupBy(fixtures, 'tournament_id');

    useEffect(() => {
        if (type === 'live') {
            let date = new Date()
            let month = Number(date.getMonth()) + 1
            let fromDate = `${date.getFullYear()}-${month < 9 ? "0" + month : month}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
            dispatch(getHomeFixtures({ filters: [["Flash Events", "date", "=", fromDate]] }))
        } else if (type === 'recent') {
            let date = new Date()
            let month = Number(date.getMonth()) + 1
            let toDate = `${date.getFullYear()}-${month < 9 ? "0" + month : month}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
            date.setDate(date.getDate() - 1);
            let frommonth = Number(date.getMonth()) + 1
            let fromDate = `${date.getFullYear()}-${frommonth < 9 ? "0" + frommonth : frommonth}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
            dispatch(getHomeFixtures({ filters: [["Flash Events", "date", "Between", [fromDate, toDate]]] }))
        } else {
            let date = new Date()
            let month = Number(date.getMonth()) + 1
            let fromDate = `${date.getFullYear()}-${month < 9 ? "0" + month : month}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
            dispatch(getHomeFixtures({ filters: [["Flash Events", "date", ">", fromDate]] }))
        }
        return () => {
            for (let item of fixtures) {
                if (item.stage_type === 'LIVE') {
                    SocketApis.unSubscribe(item.name)
                }
            }
        }
    }, [type]);

    useEffect(() => {
        for (let item of fixtures) {
            if (item.stage_type === 'LIVE' && Config.checkTime(item.start_time)) {
                SocketApis.subscribe(item.name)
            }
        }
    }, [fixtures]);

    return (<div>
        {Object.keys(grouped).map((name, k) => {
            let tournaments = grouped[name][0]?.tournament_details
            return <div key={k}><h3> {tournaments?.NAME} {tournaments.TOURNAMENT_IMAGE && (<img src={tournaments.TOURNAMENT_IMAGE} className="flagimg" />)}</h3>
                {grouped[name].map((item, key) => {
                    let events = item?.event_details
                    return <div key={key} id={`live_inner_${item.name}`}>
                        <div className="africa">
                            <h5>{item.match_title}<span> {item.match_subtitle}</span></h5>
                            <h6>{Config.checkDate(item.start_time)} {moment.utc(item.start_time).format('Do MMM YYYY hh:mm A')} </h6>
                            {/* at {item.venue} */}
                        </div>
                        <div className="match">
                            <div class="vl">
                                <h5>{events.HOME_NAME} {events.HOME_IMAGES && (<img src={events.HOME_IMAGES[0]} className="flagimg" />)} <span id="live_home"></span></h5>
                                <h5>{events.AWAY_NAME} {events.AWAY_IMAGES && (<img src={events.AWAY_IMAGES[0]} className="flagimg" />)} <span id="live_away"></span></h5>
                                <h6 id="live_result">{item.result}</h6>
                            </div>
                        </div>
                        <div className="runs">
                            <h6 onClick={() => navigate(`/match-news/${item.name}`)}>Live Score</h6>
                            <div class="score-border"></div>
                            <h6 onClick={() => navigate(`/match-news/${item.name}`)}>Scorecard</h6>
                            <div class="score-border"></div>
                            <h6 onClick={() => navigate(`/match-news/${item.name}`)}>Full Commentary</h6>
                            <div class="score-border"></div>
                            <h6 onClick={() => navigate(`/category/match-prediction`)}>News</h6>
                        </div>
                    </div>
                })}
            </div>
        })}
    </div>);
}

export default Live;