import React, { useEffect } from "react";
import { Button, DatePicker, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/use-theme";
import { getNewsListByCat } from '../store/AuthRedux'
import Config from "../common/Config";
import { Helmet } from "react-helmet";


function Category(props) {
    let navigate = useNavigate();
    let { Id } = useParams();
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const newsListByCat = useSelector((state) => state.auth.newsListByCat)

    useEffect(() => {
        dispatch(getNewsListByCat(Id))
    }, [Id]);

    // console.log(newsListByCat)

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                {/* <title>{cms?.meta_title}</title> */}
                <link rel="canonical" href="#" />
            </Helmet>
            <section className="single-post-area">
                <div className="container">
                    <div className="weekly-list-item">
                        {newsListByCat.map((item, key) => <div key={key} className="news-vcard-single">
                            <div className="news-vcard-img">
                                {Config.randerImage(item.meta_image, 220)}
                            </div>
                            <div className="news-vcard-content">
                                <div className="news-vcard-title">
                                    <span>{moment.utc(item.modified).format('hh:mm A')}</span>
                                    <span>{moment.utc(item.modified).format('Do MMM YYYY')}</span>
                                    <span>{item.blogger}</span>
                                </div>
                                <h3><NavLink to={`/details/${item.name}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                            </div>
                        </div>)}
                    </div>
                </div>
            </section>

        </>
    );
}

export default Category;
