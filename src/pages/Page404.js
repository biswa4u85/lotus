import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import noData from "../assets/img/nodata.jpg";
import { Helmet } from "react-helmet";


function Page404(props) {
    let navigate = useNavigate();


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{'Page 404'}</title>
                <link rel="canonical" href="#" />
            </Helmet>
            <section className="single-post-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="single-post-content">
                                <h2>Page Not Found</h2>
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
