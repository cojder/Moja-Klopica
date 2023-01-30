import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutRestourantPage from "./pages/AboutRestourantPage";
import HomePage from "./pages/HomePage";
import MoreInfoPage from "./pages/MoreInfoPage";
import RestourantMeniPage from "./pages/RestourantMeniPage";
import RestourantImpressionsPage from "./pages/RestourantImpressionsPage";
import RestourantGaleryPage from "./pages/RestourantGaleryPage";
import {
  ABOUT_RESTOURANT,
  MENI,
  IMPRESSIONS,
  GALERY,
  FREQUENTLY_ASKED_QUESTIONS,
  PRIVACY_POLICY,
  TERMS_OF_USAEGE,
} from "./constants/paths";
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
        <Route path={`${MENI}/:id`} element={<RestourantMeniPage />} />
        <Route
          path={`${IMPRESSIONS}/:id`}
          element={<RestourantImpressionsPage />}
        />
        <Route path={`${GALERY}/:id`} element={<RestourantGaleryPage />} />

        <Route
          path={`${FREQUENTLY_ASKED_QUESTIONS}`}
          element={<MoreInfoPage />}
        />
        <Route path={`${PRIVACY_POLICY}`} element={<MoreInfoPage />} />
        <Route path={`${TERMS_OF_USAEGE}`} element={<MoreInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
