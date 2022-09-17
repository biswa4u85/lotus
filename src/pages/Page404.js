import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import noData from "../assets/img/nodata.jpg";
import { Helmet } from "react-helmet";


function Page404(props) {
    let navigate = useNavigate();
    const homeSettings = useSelector((state) => state.auth.homeSettings)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{homeSettings?.meta_title}</title>
                <meta name="description" content={homeSettings?.meta_description} />
            </Helmet>
            <section className="single-post-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="single-post-content">
                                <h1>Page Not Found</h1>
                                <img width={100} src={noData} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Page404;
