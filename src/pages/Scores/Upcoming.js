import React, { useEffect } from "react";
import moment from "moment";

function Upcoming(props) {
    const { data } = props

    return (<div class="live">
        <h4>Upcoming Events</h4>
        <div className="border-box"></div>
        <div className="live-tab">
            {data.map((item, key) => <div key={key} className="evevts">
                <h5>Live</h5>
                <p>1st T20|,Harare,{moment.utc(item.date).format('Do MMM YYYY hh:mm A')} <a href="#">Bangladesh tour of Zimbabww</a></p>
                <div className='zimbabww'>
                    <h6><img src={require(`../../assets/flags/Flag of Afghanistan.gif`)} /> Zimbabww </h6>
                    <span>(9.3/20 ov )71/2</span>
                </div>
                <div className='zimbabww'>
                    <h6><img src={require(`../../assets/flags/Flag of Afghanistan.gif`)} /> Bangladesh </h6>
                </div>
                <p>Zimbabww chose to  bat.</p>
                <div className="lanka-border"></div>
                <ul>
                    <li>Report</li>
                    <li>Live</li>
                    <li>Series Home</li>
                </ul>
            </div>
            )}
        </div>

    </div>);
}

export default Upcoming;