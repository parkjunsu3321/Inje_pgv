import { Route, Routes } from "react-router-dom";
import { MovieMainPage } from "../pages/MovieMainPage";
import { Mainpage,  } from "../pages/MainPage";
import { Signup } from "../pages/signup";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/MovieMainPage" element={<MovieMainPage />} />
    </Routes>
  );
};
