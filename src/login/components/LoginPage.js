import Login from "./Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Redirect from "./Redirect";
import OrderPage from "../../order/oderPage";
import Mainpage from "../../test/components/mainPage/Mainpage";
import SeatArrangePage from "../../admin/seatArrange/components/SeatArrange";
import ManageUser from "../../admin/seatArrange/components/ManageUser";
import App from "../../App";

export default function LoginPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kakao/callback" element={<Redirect />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/seatarrangepage" element={<SeatArrangePage />} />
        <Route path="/usermanagepage" element={<ManageUser />} />
      </Routes>
    </Router>
  );
}
