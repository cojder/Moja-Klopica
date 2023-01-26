import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutRestourantPage from "./pages/AboutRestourantPage";

import HomePage from "./pages/HomePage";
// eslint-disable-next-line no-unused-vars
import stylesheet from "./scss/stylesheet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-restourant/:id" element={<AboutRestourantPage />} />
      </Routes>
    </Router>
  );
}

export default App;
