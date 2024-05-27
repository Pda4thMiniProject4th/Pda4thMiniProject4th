//로그인 버튼을 띄우고
//url에 변경이 있을 시 해당 url에서 인가코드를 가져옴
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Redirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("Redirct 시작");

  useEffect(() => {
    const code = new URLSearchParams(location.search).get("code");
    if (code) {
      //서버로 post 요청을 보냄
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/auth/kakao/callback`, {
          code: code,
        })
        .then((response) => {
          //토큰을 받아와서 로컬스토리지에 저장
          const servertoken = response.data.token;
          localStorage.setItem("login_token", response.data.token);
          console.log(`로그인 성공: token is ${servertoken}`);

          //성공 시 기수 선택 페이지로 넘어감
          navigate("/order");
        })
        .catch((error) => {
          console.error("로그인 실패: ", error);
        });
    }
  }, [location]);

  return <div>로그인 중...</div>;
};

export default Redirect;
