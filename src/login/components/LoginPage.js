import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Redirect from "./Redirect";
import OrderPage from "../../order/oderPage";
import Mainpage from "../../test/components/mainPage/Mainpage";
import SeatArrangePage from "../../admin/seatArrange/components/SeatArrange";

export default function LoginPage() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/kakao/callback" element={<Redirect />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/adminpage" element={<SeatArrangePage />} />
      </Routes>
    </Router>
  );
}
