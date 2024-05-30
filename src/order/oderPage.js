import React, { useState } from "react";
import axios from "axios";
import { grey } from "@mui/material/colors";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

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
                console.log("로그아웃 완료");
                localStorage.removeItem("token");

                if (response.data.logouturl) {
                  window.location.href = response.data.logouturl;
                }
              })
              .catch((error) => {
                console.log("로그아웃 실패 : ", error);
              });
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
      <h1 style={{ padding: 50 }}>정보 입력 페이지 입니다👋🏻</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div>
            <h3>실명을 입력해주세요</h3>
            <br />
            <input
              style={{ width: 100, height: 35 }}
              placeholder={`${nickname}`}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Button
              variant="outline-info"
              onClick={() => {
                const newInfo = [...info];
                newInfo[0] = name;
                setInfo(newInfo);
              }}
            >
              입력완료
            </Button>{" "}
          </div>

          <p style={{ color: "gray", textAlign: "center" }}>
            실명이 아니라면 성과 이름을 작성해주세요.
            <br />
            입력 후 완료 버튼 꼭 눌러주세요!
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
          }}
        >
          <h4>기수를 선택해주세요</h4>
          <div style={{ display: "flex", gap: 30 }}>
            <Button
              variant="outline-success"
              onClick={() => {
                handleOrder(3);
              }}
            >
              3기
            </Button>{" "}
            <Button
              variant="outline-success"
              onClick={() => {
                handleOrder(4);
              }}
            >
              4기
            </Button>{" "}
          </div>
          <br />
          <Button
            variant="outline-primary"
            onClick={() => {
              sendInfo();
            }}
            style={{ width: 150 }}
          >
            입력 내용 전달
          </Button>
        </div>
      </div>
    </div>
  );
}
