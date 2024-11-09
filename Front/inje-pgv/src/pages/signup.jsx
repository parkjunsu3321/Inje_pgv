import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { loginAPI } from "../services/loginApi";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState(null); // 초기값을 null로 설정
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { resisterUserData } = loginAPI();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const handleSignup = () => {
    if (!name || !nickname || !username || !password || !birthdate) {
      setErrorMessage("모든 필드를 채워주세요.");
      return;
    }
    const postData = {
      serial_number: 0,
      id: username,
      name: name,
      nickname: nickname,
      password: password,
      birth_date: formatDate(birthdate),
    };

    resisterUserData(postData).then((v) => {
      if (v) navigate("/");
    });
    // alert("회원가입 성공!");
    // setErrorMessage("");

    // // 모든 입력 필드 초기화
    // setName("");
    // setNickname("");
    // setUsername("");
    // setPassword("");
    // setBirthdate(null);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
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
        <h1 style={{ color: "black" }}>회원가입</h1>

        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <DatePicker
            selected={birthdate}
            onChange={(date) => setBirthdate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="생년월일 선택"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100} // 과거 100년까지 선택 가능
          />
        </div>

        {errorMessage && (
          <div style={{ color: "red", marginBottom: "15px" }}>
            {errorMessage}
          </div>
        )}

        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#0699FB",
            color: "white",
            border: "none",
          }}
          onClick={handleSignup}
        >
          회원가입 완료
        </button>
      </div>
    </div>
  );
};
