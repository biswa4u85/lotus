import noData from "../assets/img/nodata.jpg";
import playBtn from "../assets/img/svg/play-btn.svg";
export default {
    apiURL: 'https://news.techwizards.io',
    token: 'token 8013775618bd3a7:8fa905e93b04d2b',
    randerImage: (src, height, imgHeight) => {
        return <div style={{ textAlign:"center", objectFit: 'cover', height: height }}>
            <img style={{  height: (imgHeight ? imgHeight : 'inherit') }} src={src ? `${'https://news.techwizards.io'}${src}` : noData} alt="image" />
            {/* <div className="news-vcard-play">
                <a className="vimo1" href="https://vimeo.com/63729905"><img
                    src={playBtn} alt="image" /></a>
            </div> */}
        </div>
    },
    trunCate: (str, max, suffix) => {
        return str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))} ${suffix}`
    }
}