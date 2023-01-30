import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutRestourantPage from "./pages/AboutRestourantPage";
import HomePage from "./pages/HomePage";
import MoreInfoPage from "./pages/MoreInfoPage";
import { ABOUT_RESTOURANT, MORE_IFO } from "./coonstants/paths";
// eslint-disable-next-line no-unused-vars
import stylesheet from "./scss/stylesheet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path={`${ABOUT_RESTOURANT}/:id`}
          element={<AboutRestourantPage />}
        />
        <Route path={`${MORE_IFO}`} element={<MoreInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
