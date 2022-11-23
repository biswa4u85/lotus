import noData from "../assets/img/nodata.jpg";
export default {
    hostUrl: 'https://lotusnews247.com',
    twitter: 'Lotusnews2',
    apiSocketUrl: 'https://score.techwizards.io:4000',
    frappe_url: 'https://news.techwizards.io',
    frappe_custom_app: 'erp_custom_auth',
    token: 'token 8013775618bd3a7:99fa9ff03295aa8',
    title: 'Get Latest and Breaking Cricket News | Daily Cricket News',
    groups:['international', 'league', 'domestic', 'women'],
    randerImage: (item, height, imgHeight, type) => {
        let src = item?.meta_image
        let imageURL = src ? (String(src).includes('https://') ? src : 'https://news.techwizards.io' + src) : noData
        return <div className="mainImage">
            {!type &&(<div className="mainTitle">{item?.title}</div>)}
            <img style={{ height: (imgHeight ? imgHeight : 'inherit') }} src={imageURL} title={item?.image_alt} alt={item?.image_alt} />
            {!type &&(<div className="imageCaptions">{item?.image_captions}</div>)}
        </div>
    },
    trunCate: (str, max, suffix) => {
        // return <span className="trunCate">{str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))} ${suffix}`}</span>
        return <span className={max == 2 ? "trunCate" : "trunCate1"}>{str}</span>
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