import React, { useEffect, useState } from "react";

export const SearchPage = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCardVisibility = () => {
    setIsCardVisible((prev) => !prev);
  };

  useEffect(() => {
    testMovieInfo.map((value, index) => {
      console.log(value);
    });
  }, []);
  return (
    <>
      <div style={{ width: "90vw" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "solid 1px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "70px 0",
            }}
          >
            <input
              style={{
                width: "300px",
                padding: "10px",
                borderRadius: "4px 0 0 4px",
              }}
              type="text"
            />
            <button
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "0 4px 4px 0",
                backgroundColor: "#007BFF",
                color: "#fff",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
              onClick={toggleCardVisibility}
            >
              검색
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
