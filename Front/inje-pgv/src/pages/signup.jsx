import React from "react";
import { useState } from "react";

export const signup = () => {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleSignup = () => {
      // 모든 필드가 채워졌는지 확인
      if (!name || !nickname || !username || !password || !birthdate) {
        setErrorMessage("모든 필드를 채워주세요.");
        return;
      }
  
      // 회원가입 성공 시 처리 (예: 서버에 데이터 전송)
      alert("회원가입 성공!");
      setErrorMessage("");
      
      // 입력된 정보 초기화
      setName("");
      setNickname("");
      setUsername("");
      setPassword("");
      setBirthdate("");
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
        <h1>회원가입</h1>

        <div>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
           
          />
        </div>

        <div>
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

        <div>
          <input
            
          />
        </div>

        {errorMessage && (
          <div style={{ color: "red", marginBottom: "15px" }}>
            {errorMessage}
          </div>
        )}

        <button>
          회원가입 완료
        </button>
      </div>
    </div>
  );
};
