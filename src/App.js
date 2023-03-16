import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import AboutRestourantPage from "./pages/AboutRestourantPage";
import HomePage from "./pages/HomePage";
import RestourantReservePage from "./pages/RestourantReservePage";
import {
  ABOUT_RESTOURANT,
  RESERVE,
  ABOUT_US,
  PROFILE,
  MYRESERVATION,
} from "./constants/paths";
import AboutUsPage from "./pages/AboutUsPage";
import ProfilePage from "./pages/ProfilePage";
import MyReservationPage from "./pages/MyReservationPage";
// eslint-disable-next-line no-unused-vars
import stylesheet from "./scss/stylesheet";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path={`${ABOUT_RESTOURANT}/:id`}
            element={<AboutRestourantPage />}
          />
          <Route path={`${RESERVE}/:id`} element={<RestourantReservePage />} />
          <Route path={ABOUT_US} element={<AboutUsPage />} />
          <Route path={`${PROFILE}/:id`} element={<ProfilePage />} />
          <Route
            path={`${MYRESERVATION}/:id`}
            element={<MyReservationPage />}
          />
          {/* <Route path={`${IMPRESSIONS}/:id`} element={<RestourantImpressionsPage />} />
          <Route path={`${GALERY}/:id`} element={<RestourantGaleryPage />} /> */}
        </Routes>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
