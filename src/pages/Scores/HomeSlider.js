import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import moment from "moment";
import Config from '../../common/Config'
import Flags from "../../common/Flags";
import { Col, Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import SocketApis from '../../utility/socket-apis'
import { getHomeFixtures } from "../../store/ScoreRedux";

const responsive = {
    0: {
        items: 1.5,
    },
    480: {
        items: 1.5,
    },
    768: {
        items: 3,
    }
}

function HomeSlider(props) {
    const { navigate } = props
    const dispatch = useDispatch()
    const fixtures = useSelector((state) => state.score.fixtures)

    useEffect(() => {
        let date = new Date()
        let month = Number(date.getMonth()) + 1
        let toDate = `${date.getFullYear()}-${month < 9 ? "0" + month : month}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
        date.setDate(date.getDate() - 1);
        let frommonth = Number(date.getMonth()) + 1
        let fromDate = `${date.getFullYear()}-${frommonth < 9 ? "0" + frommonth : frommonth}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
        dispatch(getHomeFixtures({ filters: [["Flash Events", "date", "Between", [fromDate, toDate]]] }))
        return () => {
            for (let item of fixtures) {
                if (item.stage_type === 'LIVE') {
                    SocketApis.unSubscribe(item.name)
                }
            }
        }
    }, []);

    useEffect(() => {
        for (let item of fixtures) {
            if (item.stage_type === 'LIVE' && Config.checkTime(item.datetime)) {
                SocketApis.subscribe(item.name)
            }
        }
    }, [fixtures]);


    const checkImg = (name) => {
        return <img src={(name && name[0]) ? name[0] : Flags['NoImg']} className="flagimg" />
    }

    if (fixtures.length === 0) {
        return null
    }

    return (<OwlCarousel className='owl-theme' responsive={responsive} margin={9} autoplay={true} nav={false}>
        {fixtures.map((item, key) => {
            let events = item.event_details
            let tournaments = item.tournament_details
            return <div key={key} id={`live_home_${item.name}`} className='item'>
                <div className="finshed">
                    <div className="lanka">
                        <Row>
                            <Col span={5}>
                                <h5>{item.stage_type}</h5>
                            </Col>
                            <Col span={11} offset={8} align="right" >
                                <h6>{Config.checkDate(item.date)} At {moment.utc(item.start_time).format('hh:mm A')}</h6>
                            </Col>
                        </Row>
                        <div className="border-box"></div>
                        <div className="false">
                            <div className="false">
                                {checkImg(events?.HOME_IMAGES)}
                                <h6>{events?.HOME_NAME}</h6>
                            </div>
                            <h6 id="live_home">{events?.HOME_SCORE_CURRENT > 0 ? events?.HOME_SCORE_CURRENT + '/' + events?.HOME_SCORE_PART_2_OVERS_OUTS_WICKETS : ''}</h6>
                        </div>

                        <div className="false">
                            <div className="false">
                                {checkImg(events?.AWAY_IMAGES)}
                                <h6>{events?.AWAY_NAME}</h6>
                            </div>
                            <h6 id="live_away">{events?.AWAY_SCORE_CURRENT > 0 ? events?.AWAY_SCORE_CURRENT + '/' + events?.AWAY_SCORE_PART_2_OVERS_OUTS_WICKETS : ''}</h6>
                        </div>
                        <h5 id="live_result">{item.stage_type === 'FINISHED' ? <p>{item.result} - <span>{moment.utc(item.start_time).format('Do MMM YYYY')}</span></p> : <p>Match starts in <span>{moment.utc(item.start_time).format('Do MMM YYYY hh:mm A')}</span></p>}</h5>
                    </div>

                    <div className="false-zealand">
                        <Row>
                            <Col span={8}>
                                <h5 onClick={() => navigate(`/match-news/${item.name}`)}>View Details</h5>
                            </Col>
                            <Col span={16} align="right" >
                                <h6>{tournaments.NAME}</h6>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        })}
    </OwlCarousel>);
}

export default HomeSlider;