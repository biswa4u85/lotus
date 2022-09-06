import noData from "../assets/img/nodata.jpg";
import playBtn from "../assets/img/svg/play-btn.svg";
export default {
    apiSocketUrl: 'http://localhost:3005',
    frappe_url: 'https://news.techwizards.io',
    frappe_custom_app: 'erp_custom_auth',
    token: 'token 8013775618bd3a7:99fa9ff03295aa8',
    randerImage: (src, height, imgHeight) => {
        let imageURL = src ? (String(src).includes('https://') ? src : 'https://news.techwizards.io' + src) : noData
        return <div style={{ textAlign: "center", objectFit: 'cover', height: height }}>
            <img style={{ height: (imgHeight ? imgHeight : 'inherit') }} src={imageURL} alt="image" />
            {/* <div className="news-vcard-play">
                <a className="vimo1" href="https://vimeo.com/63729905"><img
                    src={playBtn} alt="image" /></a>
            </div> */}
        </div>
    },
    trunCate: (str, max, suffix) => {
        return str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))} ${suffix}`
    },
    filterTitle: (title) => {
        let res = title.replaceAll("-", " ")
        return res.replaceAll("lotus", "")
    },
    checkDate: (date) => {
        const today = new Date();
        const newDate = new Date(date);
        if (today.toDateString() === newDate.toDateString()) {
            return 'Today'
        } else {
            return ''
        }
    },
    checkTime: (date) => {
        const now = new Date();
        const nowTime = now.getTime();
        const given = new Date(date);
        const givenTime = given.getTime();
        let difff = nowTime - givenTime
        if (difff > 0) {
            return true
        } else {
            return false
        }
    },
    groupBy: (list, key) => {
        let gropuArray = {}
        for (let item of list) {
            if (item[key] in gropuArray === false) {
                gropuArray[item[key]] = [item]
            } else {
                gropuArray[item[key]].push(item);
            }
        }
        // const reversedKeys = Object.keys(gropuArray).reverse();
        // console.log(reversedKeys)
        return gropuArray;
    }
}