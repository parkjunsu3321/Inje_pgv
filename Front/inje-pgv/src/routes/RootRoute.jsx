import { Route, Routes } from "react-router-dom";
import { MovieMainPage } from "../pages/MovieMainPage";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/MovieMainPage" element={<MovieMainPage />} />
    </Routes>
  );
};
