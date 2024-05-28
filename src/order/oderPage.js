import React from "react";
import { useLocation } from "react-router-dom";

export default function OrderPage() {
  const { nickname } = useLocation();
  console.log("nick name is " + nickname);
  return (
    <div>
      <h1>기수 선택 페이지 입니다.</h1>
      <h2>{nickname}</h2>
    </div>
  );
}
