import React, { useState } from "react";
import Root from "../seats/Root";
import Drawertest from "../myPage/Drawertest";
import Notice from "../notices/Notice";
import "./Mainpage.css";
import Root2 from "../seats/Root2";
import Root3 from "../seats/Root3";

export default function Mainpage() {
  const [userId, setUserId] = useState(106);
  const [order, setOrder] = useState(3);
  return (
    <div className="home">
      {/* <div className="inline-components"> */}
      <Drawertest userId={userId} /> {/*id*/}
      <div className="center-item">
        <Notice order={order} /> {/*기수*/}
      </div>
      {/* <Root2 />
      <Root /> */}
      <Root3 userId={userId} order={order} />
    </div>
  );
}
