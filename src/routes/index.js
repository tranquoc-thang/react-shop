import config from "../config/index.js";

// Layout

// Pages
import HomePage from "../Pages/HomePage/HomePage";
import MyCartPage from "../Pages/MyCartPage/MyCartPage";
import Bills from "../components/Bills/Bills";
import BillsDetail from "../components/BillsDetail/BillsDetail";

const PublicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.mycart, component: MyCartPage },
  { path: config.routes.bill, component: Bills },
  { path: config.routes.bill_detail, component: BillsDetail },
];

const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
