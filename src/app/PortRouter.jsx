import { Route, Routes } from "react-router-dom";
import PortfolioLayout from "./PortfolioLayout";
import All from "../components/All";

const PortRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PortfolioLayout />}>
        <Route index element={<All />} />
      </Route>
    </Routes>
  );
};

export default PortRouter;
