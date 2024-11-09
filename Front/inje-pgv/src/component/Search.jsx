import React, { useEffect, useState } from "react";

export const SearchPage = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCardVisibility = () => {
    setIsCardVisible((prev) => !prev);
  };
   const testMovieInfo = [
    {
      movieNm: "더 마블스",
      img_url:
        "https://postfiles.pstatic.net/MjAyMzA5MzBfMzcg/MDAxNjk2MDU4ODc2MTg4.1VsS1sdpAYE-qdPVxtOkqiQwvOc60n716WhIk3ROpjgg.kmlqdaR3doEmpz9KJrdspfd9QkjtzEIQL_AlLGVG_akg.JPEG.oper45454/1696052616249239.jpg?type=w580",
    },
    {
      movieNm: "그대들은 어떻게 살 것인가",
      img_url:
        "https://postfiles.pstatic.net/MjAyMzExMDFfMTAw/MDAxNjk4ODI2NjE0NzQ4.O0kQ1TrMjKS6CvzBmbNgn8dPdWCGQXPZC-QLCoBrhCIg.H0PzHzfZfQ5P-4W2JudUUl5piVMLuB8pvAFTqx4Y2T0g.JPEG.salt7170021/IMG_9989.jpg?type=w580",
    },
    {
      movieNm: "소년들",
      img_url: "http://www.slist.kr/news/photo/202310/487428_779388_61.jpg",
    },
    {
      movieNm: "뉴 노멀",
      img_url:
        "https://postfiles.pstatic.net/MjAyMzEwMzBfMzAg/MDAxNjk4NjU2MjE1MjI1.uSkKeF9XlEYJ5xOyNPrpF0DkrAUQeB8Zl6QMKkHhpAMg.k5duwNsb4FiCofxCyzLcx9dUo9ha5BmUOH6SGSyW9SEg.JPEG.duswns202/SE-e225851e-c628-4206-ad5a-4cc3bc3da1c7.jpg?type=w580",
    },
    {
      movieNm: "30일",
      img_url: "http://cfile276.uf.daum.net/image/1267EA07494A63C23341DF",
    },
    {
      movieNm: "서울의 봄",
      img_url:
        "https://postfiles.pstatic.net/MjAyMzEyMDZfMjI3/MDAxNzAxODU0MDAzNzYw.6oYGsMcpcG7nykJUe6OCvIUCprzYBCoDho9rF3xcqB8g.tqBJrKh17jp1xIQVzq3c8fZnkMwqeysobkrA8_ePvDYg.JPEG.kevalabali/16f00fa066a405.jpg?type=w580",
    },
    {
      movieNm: "톡 투 미",
      img_url: "https://www.highlightmv.kr/TalkToMe/press/26/still_01.jpg",
    },
    {
      movieNm: "극장판 아이돌리쉬 세븐; 라이브 4비트 비욘드 더 피리어드 - 데이 1",
      img_url:
        "https://postfiles.pstatic.net/MjAyNDAxMTRfMjY4/MDAxNzA1MTc0MDM3NzIx.ukzgFN2ciuVGixdxTxIPMWFj9JH_ZR_22nKgpk5RNX0g.B8c6wXynSiI-U-3RXUlg0TD-cDM15z1UkMZrHW9lVmMg.JPEG.kkftv/Screenshot_2024-01-14_at_04.26.35.JPG?type=w773",
    },
    {
      movieNm: "극장판 아이돌리쉬 세븐; 라이브 4비트 비욘드 더 피리어드 - 데이 2",
      img_url:
        "https://postfiles.pstatic.net/MjAyNDAxMTRfMjY4/MDAxNzA1MTc0MDM3NzIx.ukzgFN2ciuVGixdxTxIPMWFj9JH_ZR_22nKgpk5RNX0g.B8c6wXynSiI-U-3RXUlg0TD-cDM15z1UkMZrHW9lVmMg.JPEG.kkftv/Screenshot_2024-01-14_at_04.26.35.JPG?type=w773",
    },
    {
      movieNm: "1947 보스톤",
      img_url:
        "https://postfiles.pstatic.net/MjAyMzA5MjBfNzEg/MDAxNjk1MjA4ODU2NTc5.V0BE4liM0lpo-VEL9rYwDRV6LCD9GSmFCWyrk0nGyO8g.QvE0shOYQJDkhF-_bxGg3YAZWa_EZPXmmtBpjs8nkfQg.JPEG.xxxiihong/380541126%EF%BC%BF305803368711519%EF%BC%BF8817807678472192857%EF%BC%BFn.jpg?type=w773",
    },
  ];
  useEffect(()=>{
    testMovieInfo.map((value,index)=>{
        console.log(value)
    })
  },[])
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

          {isCardVisible && (
            <div
              style={{
                display: "flex",
                justifyContent: "center", 
                alignItems: "flex-start", 
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  width: "600px", 
                  padding: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                {testMovieInfo.map((name, index) => (
                    
                  <div
                    key={index}
                    style={{
                        
                      display: "flex", 
                      alignItems: "center",
                      marginBottom: "15px",
                    }}
                  >
                    <img
                      src={name.img_url}
                      alt={name.movieNm}
                      style={{
                        width: "150px", 
                        height: "auto", 
                        borderRadius: "4px",
                        marginRight: "20px", 
                      }}
                    />
                    <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                      {name.movieNm}
                    </p>
                  </div>
))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
