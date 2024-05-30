import React, { useState } from "react";
import axios from "axios";
import { grey } from "@mui/material/colors";
import { useLocation, useNavigate } from "react-router-dom";

export default function OrderPage() {
  const location = useLocation();
  const nickname = location.state?.nickname;
  const [name, setName] = useState(nickname);
  const [info, setInfo] = useState([nickname, 4]);
  const navigate = useNavigate();

  const handleOrder = (ordernum) => {
    const newInfo = [...info];
    newInfo[1] = ordernum;
    setInfo(newInfo);
  };

  const sendInfo = async () => {
    try {
      await axios
        .post(`/users/check`, {
          data: info,
        })
        .then((response) => {
          console.log("닉네임+기수 전달 성공");

          //true이면 jwt 토큰 발급, false이면 로그아웃

          const result = response.data.result;
          const userId = response.data.userId;
          const userAdmin = response.data.userAdmin;

          if (result) {
            //토큰 발급 및 메인 페이지로
            console.log("userId는 ", userId);
            axios
              .post(`/creattoken`, {
                userId,
              })
              .then((response) => {
                const jwttoken = response.data.token;
                console.log("jwt토큰은 ", jwttoken);
                localStorage.setItem("token", jwttoken);
              })
              .catch((error) => {
                console.log("토큰 발급 페이지에 접근 불가 : ", error);
              });

            if (userAdmin) {
              navigate("/seatarrangepage");
            } else {
              navigate("/mainpage", { state: { userId: userId } });
            }
          } else {
            //로그아웃 및 시작페이지로
            axios
              .post(`/auth/logout`, {
                userId,
              })
              .then((response) => {
                console.log("로그아웃 성공");
              })
              .catch((error) => {
                console.log("로그아웃 페이지에 접근 불가 : ", error);
              });

            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("전달 실패: ", error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 30,
        minHeight: "50rem",
      }}
    >
      <h1>기수 선택 페이지 입니다.</h1>
      <div>
        <input
          style={{ width: 100 }}
          placeholder={`${nickname}`}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const newInfo = [...info];
            newInfo[0] = name;
            setInfo(newInfo);
          }}
        >
          입력완료
        </button>
        <p>실명이 아니라면 성과 이름을 작성해주세요.</p>
        <p style={{ color: "gray" }}>입력 후 완료 버튼 꼭 눌러주세요!</p>
      </div>

      <div style={{ display: "flex", gap: 50 }}>
        <button
          onClick={() => {
            handleOrder(3);
          }}
        >
          3기
        </button>
        <button
          onClick={() => {
            handleOrder(4);
          }}
        >
          4기
        </button>
      </div>
      <button
        onClick={() => {
          sendInfo();
        }}
        style={{ width: 150 }}
      >
        입력 내용 전달
      </button>
    </div>
  );
}
