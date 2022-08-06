import React, { } from "react";
import OwlCarousel from 'react-owl-carousel';
import Flag1 from "../assets/image/Flag1.webp";
import Flag2 from "../assets/image/Flag2.webp";
import Flag3 from "../assets/image/Flag3.webp";
import Flag4 from "../assets/image/Flag4.webp";
import Flag5 from "../assets/image/Flag5.webp";
import Flag7 from "../assets/image/Flag7.webp";
import Flag8 from "../assets/image/Flag8.webp";
import Flag9 from "../assets/image/Flag9.webp";
import Flag10 from "../assets/image/Flag10.webp";
import Flag11 from "../assets/image/Flag11.webp";
import Flag12 from "../assets/image/Flag12.webp";
import Flag13 from "../assets/image/Flag13.webp";
import Flag14 from "../assets/image/Flag14.webp";

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

function Live() {
    return (<OwlCarousel className='owl-theme' responsive={responsive} loop margin={10} nav={false}>
        <div className='item'>
            <div className="trending_news">
                <div className="lanka">
                    <h6>Today At 2:30 PM . <span> 2nd ODI .</span> <span>Pallekele</span></h6>
                    <div className='srilanka'>
                        <img src={Flag1} className="flagimg" /> <span> Sri Lanka Women</span>
                    </div>
                    <div className='srilanka'>
                        <img src={Flag2} className="flagimg" /> <span>New Zealans Women</span>
                    </div>
                    <p>Match starts in <span>3hrs 30min</span></p>
                    <div className="lanka-border"></div>
                    <ul>
                        <li>Schedule</li>
                        <li>Table</li>
                        <li>Fantasy</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='item'>
            <div className="trending_news">
                <div className="lanka">
                    <h6>Today At 2:30 PM . <span> 2nd ODI .</span> <span>Pallekele</span></h6>
                    <div className='srilanka'>
                        <img src={Flag3} className="flagimg" /> <span> Sri Lanka Women</span>
                    </div>
                    <div className='srilanka'>
                        <img src={Flag4} className="flagimg" /> <span>New Zealans Women</span>
                    </div>
                    <p>Match starts in <span>3hrs 30min</span></p>
                    <div className="lanka-border"></div>
                    <ul>
                        <li>Schedule</li>
                        <li>Table</li>
                        <li>Fantasy</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='item'>
            <div className="trending_news">
                <div className="lanka">
                    <h6>Today At 2:30 PM . <span> 2nd ODI .</span> <span>Pallekele</span></h6>
                    <div className='srilanka'>
                        <img src={Flag5} className="flagimg" /> <span> Sri Lanka Women</span>
                    </div>
                    <div className='srilanka'>
                        <img src={Flag2} className="flagimg" /> <span>New Zealans Women</span>
                    </div>
                    <p>Match starts in <span>3hrs 30min</span></p>
                    <div className="lanka-border"></div>
                    <ul>
                        <li>Schedule</li>
                        <li>Table</li>
                        <li>Fantasy</li>
                    </ul>
                </div>

            </div>
        </div>
        <div className='item'>
            <div className="trending_news">
                <div className="lanka">
                    <h6>Today At 2:30 PM . <span> 2nd ODI .</span> <span>Pallekele</span></h6>
                    <div className='srilanka'>
                        <img src={Flag7} className="flagimg" /> <span> Sri Lanka Women</span>
                    </div>
                    <div className='srilanka'>
                        <img src={Flag8} className="flagimg" /> <span>New Zealans Women</span>
                    </div>
                    <p>Match starts in <span>3hrs 30min</span></p>
                    <div className="lanka-border"></div>
                    <ul>
                        <li>Schedule</li>
                        <li>Table</li>
                        <li>Fantasy</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='item'>
            <div className="trending_news">
                <div className="lanka">
                    <h6>Today At 2:30 PM . <span> 2nd ODI .</span> <span>Pallekele</span></h6>
                    <div className='srilanka'>
                        <img src={Flag9} className="flagimg" /> <span> Sri Lanka Women</span>
                    </div>
                    <div className='srilanka'>
                        <img src={Flag10} className="flagimg" /> <span>New Zealans Women</span>
                    </div>
                    <p>Match starts in <span>3hrs 30min</span></p>
                    <div className="lanka-border"></div>
                    <ul>
                        <li>Schedule</li>
                        <li>Table</li>
                        <li>Fantasy</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='item'>
            <div className="trending_news">
                <div className="lanka">
                    <h6>Today At 2:30 PM . <span> 2nd ODI .</span> <span>Pallekele</span></h6>
                    <div className='srilanka'>
                        <img src={Flag11} className="flagimg" /> <span> Sri Lanka Women</span>
                    </div>
                    <div className='srilanka'>
                        <img src={Flag12} className="flagimg" /> <span>New Zealans Women</span>
                    </div>
                    <p>Match starts in <span>3hrs 30min</span></p>
                    <div className="lanka-border"></div>
                    <ul>
                        <li>Schedule</li>
                        <li>Table</li>
                        <li>Fantasy</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='item'>
            <div className="trending_news">
                <div className="lanka">
                    <h6>Today At 2:30 PM . <span> 2nd ODI .</span> <span>Pallekele</span></h6>
                    <div className='srilanka'>
                        <img src={Flag13} className="flagimg" /> <span> Sri Lanka Women</span>
                    </div>
                    <div className='srilanka'>
                        <img src={Flag14} className="flagimg" /> <span>New Zealans Women</span>
                    </div>
                    <p>Match starts in <span>3hrs 30min</span></p>
                    <div className="lanka-border"></div>
                    <ul>
                        <li>Schedule</li>
                        <li>Table</li>
                        <li>Fantasy</li>
                    </ul>
                </div>
            </div>
        </div>
    </OwlCarousel>);
}

export default Live;