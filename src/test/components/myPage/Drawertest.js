import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

export default function Drawertest() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>마이페이지</Button>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        {/* Drawer 내부에 들어갈 내용 */}
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <p>마이페이지 프로필 확인페이지</p>
          <p>로그아웃</p>
        </div>
      </Drawer>
    </div>
  );
}
