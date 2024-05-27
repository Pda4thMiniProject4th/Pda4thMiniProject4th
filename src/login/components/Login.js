import React from "react";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

const Login = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
    console.log("click button");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 70,
      }}
    >
      <img src="shitdownlogo.jpg" alt="팀로고" style={{ width: 500 }} />
      <img src="kakaologinbtn.png" alt="로그인버튼" onClick={handleLogin} />

      {/*<button onClick={handleLogin}>카카오 로그인</button>*/}
    </div>
  );
};

export default Login;
