import React, { useEffect } from "react";
import { Button, DatePicker, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/use-theme";
import { getNewsListByCat } from '../store/MainRedux'
import Config from "../common/Config";
import { Helmet } from "react-helmet";


function Category(props) {
    let navigate = useNavigate();
    let { Id } = useParams();
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const token = useSelector((state) => state.auth.token)
    const categorys = useSelector((state) => state.auth.categorys)
    const newsListByCat = useSelector((state) => state.auth.newsListByCat)
    const category = categorys.find((x)=>x.name == Id)

    useEffect(() => {
        dispatch(getNewsListByCat({ token, Id }))
    }, [Id]);

    return (
        <>
           <Helmet>
                <meta charSet="utf-8" />
                <title>{category?.meta_title}</title>
                <meta name="description" content={category?.meta_description} />
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
                                    <span>{moment.utc(item.published_on).format('hh:mm A')}</span>
                                    <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
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
