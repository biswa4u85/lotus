import React, { useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';

import players from "../assets/image/players.png";
import lk from "../assets/image/lk.png";
import flag from "../assets/image/flag.png";
import fire from "../assets/image/fire.png";
import hardikpandia from "../assets/image/hardikpandia.png";
import Rectangle from "../assets/image/Rectangle.png";
import cricketplayer from "../assets/image/cricketplayer.png";
import cricketer from "../assets/image/cricketer.png";
import core from "../assets/image/core.png";

function Live() {
    return (<OwlCarousel className='owl-theme' loop margin={10} nav>
        <div className='item'>
            <div className="trending_news">
                <div className="lanka">
                    <h5>Today At 2:30 PM . <span> 2nd ODI .</span> <span>Pallekele</span></h5>
                    <div className='srilanka'>
                        <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                    </div>
                    <div className='srilanka'>
                        <img src={flag} className="flagimg" /> <span>Australia</span>
                    </div>
                    <h6>Match starts in <span>3hrs 30min</span></h6>
                </div>
                <div className="lanka">
                    <h4>LIVE . <span>1st semi final .</span> <span> FC . Alur </span></h4>
                    <div className='srilanka'>
                        <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                    </div>
                    <div className='srilanka'>
                        <img src={flag} className="flagimg" /> <span>Australia</span>
                    </div>
                    <h6>Match starts in <span>3hrs 30min</span></h6>
                </div>
                <div className=" lanka">
                    <h4>Innings Break . <span>1st semi final .</span> <span> FC . Alur  </span></h4>
                    <div className='srilanka'>
                        <img src={lk} className="flagimg" /> <span> Sri Lanka</span>
                    </div>
                    <div className='srilanka'>
                        <img src={flag} className="flagimg" /> <span>Australia</span>
                    </div>
                    <h6>Match starts in <span>3hrs 30min</span></h6>
                </div>
            </div>
        </div>
        <div className='item'>
            <h4>2</h4>
        </div>
        <div className='item'>
            <h4>3</h4>
        </div>
        <div className='item'>
            <h4>4</h4>
        </div>
        <div className='item'>
            <h4>5</h4>
        </div>
        <div className='item'>
            <h4>6</h4>
        </div>
        <div className='item'>
            <h4>7</h4>
        </div>
        <div className='item'>
            <h4>8</h4>
        </div>
        <div className='item'>
            <h4>9</h4>
        </div>
        <div className='item'>
            <h4>10</h4>
        </div>
        <div className='item'>
            <h4>11</h4>
        </div>
        <div className='item'>
            <h4>12</h4>
        </div>
    </OwlCarousel>);
}

export default Live;