import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Notice.css";
import { TbSpeakerphone } from "react-icons/tb";

function Notice({ order }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchRearrangeAt = async () => {
      try {
        // const response = await axios.get("/notice/mainpage/3"); // ordersValue가 3인 예시
        const response = await axios.get(`/notice/mainpage/${order}`);
        if (response.data) {
          const date = new Date(response.data.rearrange_at);
          const formattedDate = `${date.getFullYear()}년 ${
            date.getMonth() + 1
          }월 ${date.getDate()}일`;
          setMessage(`${formattedDate}까지 자리 선택하세요.`);
        } else {
          setMessage("");
        }
      } catch (error) {
        console.error("Error fetching fetchRearrangeAt:", error);
        setMessage("");
      }
    };

    fetchRearrangeAt();
  }, []);

  return message ? (
    <div className="notice-box">
      <div style={{ display: "flex" }}>
        <TbSpeakerphone size={40} />
        <p>{message}</p>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Notice;
