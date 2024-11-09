import React from "react";
import { useState } from "react";

export const Mainpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessageID, setErrorMessageID] = useState("");
  const [errorMessagePW, setErrorMessagePW] = useState("");

  const testID = "최수민";
  const testPW = "1234";

  const buttonClickedHandler = () => {
    let idError = "";
    let pwError = "";

    if (username !== testID) idError = "아이디가 틀렸습니다!";
    if (password !== testPW) pwError = "비밀번호가 틀렸습니다!";

    setErrorMessageID(idError);
    setErrorMessagePW(pwError);

    if (username === testID && password === testPW) {
      alert("로그인 성공");
      setErrorMessageID("");
      setErrorMessagePW("");
    }

    console.log(username,password)
  };

  return (
    <div style={{
        width: "100vw",
        height: "100vh"
    }}>

    <div style={{
        backgroundColor : "white",
        
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        
    }}>
      <h1 style={{color : "black"}}>로그인</h1>
      <div style={{  marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="id"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errorMessageID && <div style={{color:"red"}} className="error-message">{errorMessageID}</div>}
      </div>

      <div style={{  marginBottom: "15px" }}>
        <input
          type="password"
          placeholder="pw"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessagePW && <div style={{color:"red"}} className="error-message">{errorMessagePW}</div>}
      </div>

      <button onClick={buttonClickedHandler}
      style={{
        padding: "10px 20px",
        backgroundColor: "#0699FB",
        color: "white",
        border: "none",
        marginBottom: "10px"
       }}>
            로그인</button>

      <button style={{
          padding: "10px 20px",
          backgroundColor: "#0699FB",
          color: "white",
          border: "none"}}>
            회원가입</button>
    </div>
    </div>
  )
};
