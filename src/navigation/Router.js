import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useSelector } from 'react-redux'
import Layouts from "../pages/Layouts";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Cms from "../pages/Cms";
import Category from "../pages/Category";
import LiveScore from "../pages/LiveScore";
import Page404 from "../pages/Page404";


function Routers() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:pId" element={<Details />} />
          <Route path="/cms/:Id" element={<Cms />} />
          <Route path="/cat/:Id" element={<Category />} />
          <Route path="/live-score" element={<LiveScore />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Routers