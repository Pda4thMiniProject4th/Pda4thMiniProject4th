import React from "react";
import Root from "../seats/Root";
import Drawertest from "../myPage/Drawertest";
import Notice from "../notices/Notice";

import "../../../App.css";
import Root2 from "../seats/Root2";

export default function Mainpage() {
  return (
    <div>
      <div className="inline-components">
        <Drawertest />
        <div className="center-item">
          <Notice />
        </div>
      </div>
      <Root2 />
      <Root />
    </div>
  );
}
