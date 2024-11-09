import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../services/loginApi";

export const Mainpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessageID, setErrorMessageID] = useState("");
  const [errorMessagePW, setErrorMessagePW] = useState("");
  const navigate = useNavigate();
  const { signinUser } = loginAPI();

  const buttonClickedHandler = () => {
    let idError = "";
    let pwError = "";

    setErrorMessageID(idError);
    setErrorMessagePW(pwError);

    signinUser(username, password).then((v) => {
      if (v.data.message === "로그인 성공") navigate("/MovieMainPage");
      else alert("로그인 실패");
    });
  };

  const HandleSignup = () => {
    navigate("/Signup");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1 style={{ color: "black" }}>로그인</h1>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="id"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errorMessageID && (
            <div style={{ color: "red" }} className="error-message">
              {errorMessageID}
            </div>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            placeholder="pw"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessagePW && (
            <div style={{ color: "red" }} className="error-message">
              {errorMessagePW}
            </div>
          )}
        </div>

        <button
          onClick={buttonClickedHandler}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0699FB",
            color: "white",
            border: "none",
            marginBottom: "10px",
          }}
        >
          로그인
        </button>

        <button
          onClick={HandleSignup}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0699FB",
            color: "white",
            border: "none",
          }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};
