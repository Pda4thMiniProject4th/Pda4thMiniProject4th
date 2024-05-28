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
import LoginPage from "./login/components/LoginPage";
//import OrderPage from "./order/oderPage";

function App() {
  return (
    <div className="App">
      {/*
      <Mainpage />
      <Drawertest />
      <Root />
      */}
      {/* <LoginPage /> */}
      <Mainpage />
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
