import React, { useEffect } from "react";
import { Button, DatePicker, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/use-theme";
import { getCmsDetails } from '../store/AuthRedux'
import Config from "../common/Config";
import { Helmet } from "react-helmet";


function Cms(props) {
    let navigate = useNavigate();
    let { Id } = useParams();
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const cmsData = useSelector((state) => state.auth.cms)
    const cms = cmsData[Id]

    useEffect(() => {
        dispatch(getCmsDetails(Id))
    }, [Id]);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{cms?.meta_title}</title>
                <link rel="canonical" href="#" />
            </Helmet>
            <section className="single-post-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-post-content">
                                <h2>{cms?.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: cms?.main_section_html ? cms?.main_section_html : cms?.main_section }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Cms;
