import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, DatePicker, Switch, Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTheme } from "../../theme/use-theme";

import logo from "../../assets/image/logo.png";
import img_1 from "../../assets/image/img_1.png";
import img_2 from "../../assets/image/img_2.png";
import img_3 from "../../assets/image/img_3.png";
import img_4 from "../../assets/image/img_4.png";
import img_5 from "../../assets/image/img_5.png";
const { Header } = Layout;

function Headers() {
    return (

        <div className="haerder_sec">
            <div className="row">
                <div className="col-sm-2">
                    <img src={logo} className="logo_img" />
                </div>
                <div className="col-sm-6">

                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">Live Score</a></li>
                        <li><a href="#">Series <span><DownOutlined /></span></a></li>
                        <li><a href="#">News <span><DownOutlined /></span></a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Stats</a></li>
                    </ul>
                </div>
                <div className="col-sm-4">
                    <div className="img_sec">
                        <img src={img_1} className="hearder_img" />
                        <img src={img_2} className="hearder_img" />
                        <img src={img_3} className="hearder_img" />
                        <img src={img_4} className="hearder_img" />
                        <img src={img_5} className="hearder_img" />
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Headers;