import React, { useEffect } from "react";
import { Pagination } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { searchPost } from '../store/MainRedux'
import Config from "../common/Config";
import { Helmet } from "react-helmet";


function Search(props) {
    let navigate = useNavigate();
    let { name } = useParams();
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const token = Config.token
    const searchValue = useSelector((state) => state.auth.searchValue)
   
    console.log(searchValue)
    useEffect(() => {
        window.scrollTo(0, 0)
        handlePageChange()
    }, [name]);

    const handlePageChange = (page = 1, size = 12) => {
        let params = { token, name, page, size }
        dispatch(searchPost(params))
    }

    return (
        <>
   
            <Helmet>
                <meta charSet="utf-8" />
                {/* <title>{category?.meta_title_lotus}</title>
                <meta name="description" content={category?.meta_description_lotus} /> */}
            </Helmet>
            <section className="single-post-area">
                <div className="container">
                    <div className="weekly-list-item">
                        {/* {searchValue ? searchValue.data.map((item, key) => <div key={key} className="news-vcard-single">
                            <div className="news-vcard-img">
                                {Config.randerImage(item.meta_image, 220)}
                            </div>
                            <div className="news-vcard-content">
                                <div className="news-vcard-title">
                                    <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                    <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                    <span>{item.blogger}</span>
                                </div>
                                <h3><NavLink to={`/details/${item.name}`}>{Config.trunCate(item.title, 40, '. . .')}</NavLink></h3>
                            </div>
                        </div>) : null} */}
                    </div>
                    {/* <div style={{ marginTop: 10, textAlign: 'right' }}><Pagination onChange={handlePageChange} defaultCurrent={1} pageSize={12} total={newsListByCatCount} /></div> */}
                </div>
            </section>

        </>
    );
}

export default Search;
