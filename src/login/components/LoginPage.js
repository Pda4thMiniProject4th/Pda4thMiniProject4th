import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Redirect from "./Redirect";
import OrderPage from "../../order/oderPage";

export default function LoginPage() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/kakao/callback" element={<Redirect />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}
