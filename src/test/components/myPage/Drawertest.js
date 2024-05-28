import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import axios from "axios";
import "./Mypage.css";

export default function Drawertest({ userId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userprofile, setUserProfile] = useState("");
  const [seatOption, setSeatOption] = useState("");

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`/mypage/${userId}`);
      if (response.data) {
        const { name, profile, seat_option } = response.data;
        setUserName(name);
        setUserProfile(profile);
        if (seat_option === -1) setSeatOption("뒷자리");
        else if (seat_option === 1) setSeatOption("앞자리");
        else setSeatOption("랜덤");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
    if (open) {
      fetchUserInfo();
    }
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
          <div className="mypage">
            <div style={{ display: "flex" }} className="info">
              <div className="profile">
                <p>
                  <img src={userprofile} alt="프로필" />
                </p>
              </div>
              <div className="name-selected">
                <p>이름: {userName}</p>
                <p>선택한 자리: {seatOption}</p>
              </div>
            </div>
          </div>
          <div className="logout">
            <p>로그아웃</p>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
