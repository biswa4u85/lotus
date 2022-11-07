const fs = require('fs'),
    convert = require('xml-js'),
    fetch = require('node-fetch'),
    moment = require('moment'),
    hostBlogBaseURL = 'https://lotusnews247.com',
    untrackedUrlsList = [],
    options = { compact: true, ignoreComment: true, spaces: 4 };

/*
    Method to Fetch dynamic List of URLs from Rest API/DB
*/
const fetchBlogsList = () => {
    // Blog Category
    let raw = "doctype=Blog Category&cmd=frappe.client.get_list&fields=[\"name\"]&limit_page_length=None";
    let requestOptions = {
        method: 'POST',
        headers: {
            "Authorization": "token 8013775618bd3a7:99fa9ff03295aa8",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: raw,
        redirect: 'follow'
    };
    fetch("https://news.techwizards.io/", requestOptions)
        .then(response => response.json())
        .then(dataJSON => {
            if (dataJSON && dataJSON.message) {
                dataJSON.message.forEach(element => {
                    untrackedUrlsList.push(`${hostBlogBaseURL}/category/${element.name}`);
                });
                filterUniqueURLs();
            }
        })
        .catch(error => console.log('error', error));

    // Blog Pages
    let rawNews = "doctype=Blog Post&cmd=frappe.client.get_list&fields=[\"name\"]&limit_page_length=None";
    let requestOptionsNews = {
        method: 'POST',
        headers: {
            "Authorization": "token 8013775618bd3a7:99fa9ff03295aa8",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: rawNews,
        redirect: 'follow'
    };
    fetch("https://news.techwizards.io/", requestOptionsNews)
        .then(response => response.json())
        .then(dataJSON => {
            if (dataJSON && dataJSON.message) {
                dataJSON.message.forEach(element => {
                    untrackedUrlsList.push(`${hostBlogBaseURL}/news/${element.name}`);
                });
                filterUniqueURLs();
            }
        })
        .catch(error => console.log('error', error));
}

/*
    Method to Filter/Unique already existing URLs and new urls we fetched from DB
*/
const filterUniqueURLs = () => {
    fs.readFile('public/sitemap.xml', (err, data) => {
        if (data) {
            const existingSitemapList = JSON.parse(convert.xml2json(data, options));
            let existingSitemapURLStringList = [];
            if (existingSitemapList.urlset && existingSitemapList.urlset.url && existingSitemapList.urlset.url.length) {
                existingSitemapURLStringList = existingSitemapList.urlset.url.map(ele => ele.loc._text);
            }

            untrackedUrlsList.forEach(ele => {
                if (existingSitemapURLStringList.indexOf(ele) == -1) {
                    existingSitemapList.urlset.url.push({
                        loc: {
                            _text: ele,
                        },
                        changefreq: {
                            _text: 'monthly'
                        },
                        priority: {
                            _text: 0.8
                        },
                        lastmod: {
                            _text: moment(new Date()).format('YYYY-MM-DD')
                        }
                    });
                }
            });
            createSitemapFile(existingSitemapList);
        }
    });
}

/*
    Method to convert JSON format data into XML format
*/
const createSitemapFile = (list) => {
    const finalXML = convert.json2xml(list, options); // to convert json text to xml text
    saveNewSitemap(finalXML);
}

/*
    Method to Update sitemap.xml file content
*/
const saveNewSitemap = (xmltext) => {
    fs.writeFile('public/sitemap.xml', xmltext, (err) => {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}

fetchBlogsList();