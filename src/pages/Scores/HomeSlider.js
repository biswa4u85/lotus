import React, { useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import moment from "moment";
import Flags from "../../common/Flags";
import { useSelector, useDispatch } from 'react-redux'
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
        dispatch(getHomeFixtures())
    }, []);

    const checkImg = (name) => {
        console.log(name)
        return <img src={Flags[name] ? Flags[name] : Flags['NoImg']} className="flagimg" />
    }

    if (fixtures.length === 0) {
        return null
    }

    return (<OwlCarousel className='owl-theme' responsive={responsive} loop margin={10} nav={false}>
        {fixtures.map((item, key) => <div key={key} className='item'>
            <div className="trending_news">
                <div className="lanka">
                    <h6>Today At {moment.utc(item.datetime).format('hh:mm A')} . <span> {item.match_subtitle} .</span> {item.status}</h6>
                    <div className='srilanka'>
                        {checkImg(item?.home?.name)} <span> {item?.home?.name}</span>
                    </div>
                    <div className='srilanka'>
                        {checkImg(item?.away?.name)}  <span>{item?.away?.name}</span>
                    </div>
                    {item.status === 'Complete' ? <p>{item.result} - <span>{moment.utc(item.datetime).format('Do MMM YYYY')}</span></p> : <p>Match starts in <span>{moment.utc(item.date).format('Do MMM YYYY hh:mm A')}</span></p>}
                    <div className="lanka-border"></div>
                    <ul>
                        <li>{item.venue}</li>
                    </ul>
                </div>
            </div>
        </div>)}
    </OwlCarousel>);
}

export default HomeSlider;