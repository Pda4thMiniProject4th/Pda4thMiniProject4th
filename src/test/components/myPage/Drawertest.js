import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import axios from "axios";

export default function Drawertest() {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userprofile, setUserProfile] = useState("");
  const [seatOption, setSeatOption] = useState("");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("/mypage/1"); // idValue가 1인 예시
        if (response.data) {
          const { name, profile, seat_option } = response.data;
          console.log(response.data);
          setUserName(name);
          setUserProfile(profile);
          if (seat_option === -1) setSeatOption("뒷자리");
          else if (seat_option === 1) setSeatOption("앞자리");
          else setSeatOption("랜덤");
        }
      } catch (error) {
        console.error("Error fetching fetchUserInfo:", error);
      }
    };

    fetchUserInfo();
  }, []);

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
          <p>프로필: {userprofile}</p>
          <p>이름: {userName}</p>
          <p>선택한 자리: {seatOption}</p>
          <p>로그아웃</p>
        </div>
      </Drawer>
    </div>
  );
}
