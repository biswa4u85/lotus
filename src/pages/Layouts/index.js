import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, DatePicker, Switch, Layout } from 'antd';
import { useTheme } from "../../theme/use-theme";
import Headers from "./Headers";
import Footers from "./Footers";
const { Header, Sider, Content } = Layout;

function Layouts() {
    const { t, i18n } = useTranslation();
    let navigate = useNavigate();
    const [darkMode, setDarkMode] = useTheme();
    const langChange = () => {
        let lang = (i18n.language === 'de') ? 'en' : 'de'
        i18n.changeLanguage(lang)
    }
    return (
        <Layout>
            <Headers />
            <Content>
                <Outlet />
            </Content>
            <Footers />
        </Layout>
    );
}

export default Layouts;