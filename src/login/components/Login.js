import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let result = false;
  let userId = -100;

  axios
    .post(`/verifytoken`, {
      token: localStorage.getItem("token"),
    })
    .then((response) => {
      result = response.data.result;
      if (result) {
        //토큰이 유효할 경우
        userId = response.data.userId;
        console.log("jwt 토큰이 유효함! ", userId);
      }
    })
    .catch((error) => {
      console.error("토큰 유효 인증 실패: ", error);
    });

  const handleLogin = () => {
    if (result) {
      navigate("/mainpage", { state: { userId: userId } });
    } else {
      window.location.href = KAKAO_AUTH_URL;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 70,
        minHeight: "50rem",
      }}
    >
      <div>
        <img src="shitdownlogo.jpg" alt="팀로고" style={{ width: 500 }} />
      </div>
      <div>
        <img src="kakaologinbtn.png" alt="로그인버튼" onClick={handleLogin} />
      </div>
      {/*<button onClick={handleLogin}>카카오 로그인</button>*/}
    </div>
  );
};

export default Login;
