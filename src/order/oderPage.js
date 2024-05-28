import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { grey } from "@mui/material/colors";

export default function OrderPage() {
  const location = useLocation();
  const nickname = location.state?.nickname;
  const [name, setName] = useState(nickname);
  const [info, setInfo] = useState([nickname, 4]);

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
        .then(() => {
          console.log("닉네임+기수 전달 성공");
        })
        .catch((error) => {
          console.error("전달 실패: ", error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
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
      >
        전달
      </button>
    </div>
  );
}
