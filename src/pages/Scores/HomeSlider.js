import React, { useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import moment from "moment";
import Flags from "../../common/Flags";
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

function HomeSlider() {
    const dispatch = useDispatch()
    const fixtures = useSelector((state) => state.score.fixtures)

    useEffect(() => {
        let date = new Date()
        let toDate = `${date.getFullYear()}-${date.getMonth() < 9 ? "0" + (Number(date.getMonth()) + 1) : date.getMonth()}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
        date.setDate(date.getDate() - 1);
        let fromDate = `${date.getFullYear()}-${date.getMonth() < 9 ? "0" + (Number(date.getMonth()) + 1) : date.getMonth()}-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`
        dispatch(getHomeFixtures({ filters: [["Live Score Fixtures", "date", "Between", [fromDate, toDate]]] }))
        return () => {
            for (let item of fixtures) {
                if (item.status === 'Fixture') {
                    SocketApis.unSubscribe(item.name)
                }
            }
        }
    }, []);

    useEffect(() => {
        for (let item of fixtures) {
            if (item.status === 'Fixture' && checkTime(item.datetime)) {
                SocketApis.subscribe(item.name)
            }
        }
    }, [fixtures]);

    const checkDate = (date) => {
        const today = new Date();
        const newDate = new Date(date);
        if (today.toDateString() === newDate.toDateString()) {
            return 'Today'
        } else {
            return 'Yesterday'
        }
    }
    const checkTime = (date) => {
        const now = new Date();
        const nowTime = now.getTime();
        const given = new Date(date);
        const givenTime = given.getTime();
        let difff = nowTime - givenTime
        if (difff > 0) {
            return true
        } else {
            return false
        }
    }

    const checkImg = (name) => {
        return <img src={Flags[name] ? Flags[name] : Flags['NoImg']} className="flagimg" />
    }

    if (fixtures.length === 0) {
        return null
    }

    return (<OwlCarousel className='owl-theme' responsive={responsive} margin={9} autoplay={true} nav={false}>
        {fixtures.map((item, key) => {
            let score = null
            return <div key={key} id={`live_home_${item.name}`} className='item'>
                <div className="trending_news">
                    <div className="lanka">
                        <h6>{checkDate(item.date)} At {moment.utc(item.datetime).format('hh:mm A')} . <span> {item.match_subtitle} .</span> {item.status}</h6>
                        <div className='srilanka'>
                            {checkImg(item?.home?.name)} <span> {item?.home?.name}</span> <span id="live_home" className="red">{score ? score?.match_summary?.home_scores : ''}</span>
                        </div>
                        <div className='srilanka'>
                            {checkImg(item?.away?.name)}  <span>{item?.away?.name} </span> <span id="live_away" className="red">{score ? score?.match_summary?.away_scores : ''}</span>
                        </div>
                        <span id="live_result">{item.status === 'Complete' ? <p>{item.result} - <span>{moment.utc(item.datetime).format('Do MMM YYYY')}</span></p> : <p>Match starts in <span>{moment.utc(item.date).format('Do MMM YYYY hh:mm A')}</span></p>}</span>
                        <div className="lanka-border"></div>
                        <ul>
                            <li>{item.venue}</li>
                        </ul>
                    </div>
                </div>
            </div>
        })}
    </OwlCarousel>);
}

export default HomeSlider;