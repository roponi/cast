import React from "react";

import { Routes, Route, Outlet, Link } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about">
        <LandingPage />
      </Route>
      <Route path="/dashboard"></Route>
    </Routes>
  );
};

export default MainRoute;
