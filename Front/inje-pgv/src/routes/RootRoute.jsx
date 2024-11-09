import { Route, Routes } from "react-router-dom";
import { MovieMainPage } from "../pages/MovieMainPage";
import { Mainpage } from "../pages/MainPage";
import { Signup } from "../pages/signup";

import { TicketingPage } from "../component/TicketingPage";
import { SearchPage } from "../component/Search";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/MovieMainPage" element={<MovieMainPage />} />
      <Route path="/TicketingPage" element={<TicketingPage />} />
      <Route path="/SearchPage" element={<SearchPage />} />
    </Routes>
  );
};
