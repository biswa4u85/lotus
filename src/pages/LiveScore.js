import React, { useEffect } from "react";
import { Button, DatePicker, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/use-theme";
import { getCmsDetails } from '../store/MainRedux'
import Config from "../common/Config";
import { Helmet } from "react-helmet";


function LiveScore(props) {
    let navigate = useNavigate();
    let { Id } = useParams();
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const token = useSelector((state) => state.auth.token)

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{'Live Score'}</title>
                <link rel="canonical" href="#" />
            </Helmet>
            <section className="single-post-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-post-content">
                                <h2>{'Live Score'}</h2>
                                fff
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default LiveScore;
