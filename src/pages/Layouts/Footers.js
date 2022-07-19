import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, DatePicker, Switch, Layout } from 'antd';
import { useTheme } from "../../theme/use-theme";

import facebook from "../../assets/image/facebook.png";
import instagram from "../../assets/image/instagram.png";
import twitter from "../../assets/image/twitter.png";
import vector from "../../assets/image/vector.png";






const { Footer } = Layout;

function Footers() {
    return (
        <Footer style={{padding: " 30px 0"}}>
            <div className="whoare">
                <div class="row">
                    <div class="col-2">
                        <h5> WHO ARE WE ?</h5>
                        <p>About us</p>
                        <p>Contact us</p>
                    </div>
                    <div class="col-2">
                        <h5>LEGAL</h5>
                        <p>DCMA</p>
                        <p>Disclaimer</p>
                        <p>Copyright Notice</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div class="col-2">
                        <h5>WORK WITH US </h5>
                    </div>
                    <div class="col-4">
                        <h5>PARTNER WITH US</h5>
                    </div>
                    <div class="col-2">
                        <img src={facebook} className="facebook_img" />
                        <img src={instagram} className="facebook_img" />
                        <img src={twitter} className="facebook_img" />
                        <img src={vector} className="facebook_img" />
                    </div>
                </div>
            </div>
        </Footer>
    );
}

export default Footers;