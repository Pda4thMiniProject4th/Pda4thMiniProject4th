// import logo from "./logo.svg";
import "./App.css";
//import SeatingChart from "./test/components/seats/SeatingChart";
// Root from "./test/components/seats/Root";
//import Drawertest from "./test/components/myPage/Drawertest";
//import Notice from "./test/components/notices/Notice";
import Mainpage from "./test/components/mainPage/Mainpage";
import axios from "axios";
import Root from "./test/components/seats/Root";
import Drawertest from "./test/components/myPage/Drawertest";
import Login from "./login/components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Redirect from "./login/components/Redirect";
//import OrderPage from "./order/oderPage";

function App() {
  return (
    <div className="App">
      {/*
      <Mainpage />
      <Drawertest />
      <Root />
      */}

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/kakao/callback" element={<Redirect />} />
          {/*<Route path="/order" element={<OrderPage />} />*/}
        </Routes>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
