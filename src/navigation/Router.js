import React from "react";
import {
  BrowserRouter,
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
import Search from "../pages/Search";
import ScoreBoard from "../pages/Scores/ScoreBoard";


function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/news/:pId" element={<Details />} />
          <Route path="/pages/:Id" element={<Cms />} />
          <Route path="/category/:Id" element={<Category />} />
          <Route path="/live-score" element={<LiveScore />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/search/:name" element={<Search />} />
          <Route path="/match-news/:name" element={<ScoreBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers