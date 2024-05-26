import React from "react";
import Root from "../seats/Root";
import Drawertest from "../myPage/Drawertest";
import Notice from "../notices/Notice";
import "../../../App.css";

export default function Mainpage() {
  return (
    <div>
      <div className="inline-components">
        <Drawertest />
        <div className="center-item">
          <Notice />
        </div>
      </div>
      <Root />
    </div>
  );
}
