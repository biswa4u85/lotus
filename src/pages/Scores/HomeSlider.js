import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import moment from "moment";
import Config from '../../common/Config'
import Flags from "../../common/Flags";
import { Col, Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import SocketApis from '../../utility/socket-apis'
import { getHomeSliders } from "../../store/ScoreRedux";

const responsive = {
    0: {
        items: 1,
    },
    480: {
        items: 1,
    },
    768: {
        items: 3,
    }
}

function HomeSlider(props) {
    const { navigate } = props
    const dispatch = useDispatch()
    const homeslider = useSelector((state) => state.score.homeslider)

    useEffect(() => {
        let date = new Date()
        let month = Number(date.getMonth()) + 1
        let toDate = `${date.getFullYear()}-${month < 9 ? "0" + month : month}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
        date.setDate(date.getDate() - 1);
        let frommonth = Number(date.getMonth()) + 1
        let fromDate = `${date.getFullYear()}-${frommonth < 9 ? "0" + frommonth : frommonth}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
        dispatch(getHomeSliders({ start: fromDate, end: toDate }))
        return () => {
            for (let item of homeslider) {
                if (item.sub_satus === 'live') {
                    SocketApis.unSubscribe(item.name)
                }
            }
        }
    }, []);


    useEffect(() => {
        for (let item of homeslider) {
            if (item.sub_satus === 'live' && Config.checkTime(item.datetime)) {
                SocketApis.subscribe(item.name)
            }
        }
    }, [homeslider]);


    const checkImg = (name) => {
        return <img src={name ? (Config.frappe_url + name) : Flags['NoImg']} className="flagimg" />
    }

    if (homeslider.length == 0) {
        return null
    }

    return (<OwlCarousel className='owl-theme' responsive={responsive} margin={9} autoplay={true} nav={false}>
        {homeslider.map((item, key) => {
            let team1Score = item?.score?.team1Score?.inngs2 ? item?.score?.team1Score?.inngs2 : item?.score?.team1Score?.inngs1
            let team2Score = item?.score?.team2Score?.inngs2 ? item?.score?.team2Score?.inngs2 : item?.score?.team2Score?.inngs1
            return <div key={key} id={`live_home_${item.name}`} className='item'>
                <div className="finshed">
                    <div className="lanka">
                        <Row className="header">
                            <Col span={5}>
                                <h5>{item.sub_satus}</h5>
                            </Col>
                            <Col span={19} align="right" >
                                <h6>{moment.utc(item.startdt).format('Do MMM YYYY')} At {moment.utc(item.startdt).format('hh:mm A')}</h6>
                            </Col>
                        </Row>
                        <div className="border-box"></div>
                        <div className="false">
                            <div className="false">
                                {checkImg(item?.team1_image)}
                                <h6>{item.team1s}</h6>
                            </div>
                            <h6 id="live_home">{team1Score && (`${team1Score?.runs ? team1Score?.runs : 0}/${team1Score?.wickets ? team1Score?.wickets : 0} - ${team1Score?.overs ? team1Score?.overs : 0}`)}</h6>
                        </div>

                        <div className="false">
                            <div className="false">
                                {checkImg(item?.team2_image)}
                                <h6>{item.team2s}</h6>
                            </div>
                            <h6 id="live_away">{team2Score && (`${team2Score?.runs ? team2Score?.runs : 0}/${team2Score?.wickets ? team2Score?.wickets : 0} - ${team2Score?.overs ? team2Score?.overs : 0}`)}</h6>
                        </div>
                        <h5 id="live_result" className="ellipsis1">{item.result ? <p>{item.result} - <span>{moment.utc(item.startdt).format('Do MMM YYYY')}</span></p> : <p>Match starts in <span>{moment.utc(item.startdt).format('Do MMM YYYY hh:mm A')}</span></p>}</h5>
                    </div>

                    <div className="false-zealand">
                        <Row className="header">
                            <Col span={8}>
                                <h5 onClick={() => navigate(`/match-news/${item.name}`)}>View Details</h5>
                            </Col>
                            <Col span={16} align="right"><h6 className="ellipsis1">{item.series_name}</h6>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        })}
    </OwlCarousel>);
}

export default HomeSlider;