import { Routes, Route } from "react-router-dom";
import HomeUpdate from "../../components/home/HomeUpdate";
import HomeLayout from "./HomeLayout";
import HomePage from "./HomePage";

const Home = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/update" element={<HomeUpdate />} />
      </Route>
    </Routes>
  );
};

export default Home;
