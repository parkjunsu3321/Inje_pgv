import {
  Box,
  Button,
  CircularProgress,
  Drawer,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { seatAPI } from "../services/seatAPI";

const Card = styled.div`
  display: "flex";
  align-items: "center";
  margin-bottom: "15px";
  background-color: ${(props) => (props.isSelect ? "#d9d9d9" : "#ffffff")};
`;

export const TicketingPage = ({
  open,
  toggleDrawer,
  showTime,
  theaterName,
}) => {
  const [text, setText] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const { getMovieInfo, postBookingMovieData } = seatAPI();
  const onClickSearchMovieData = () => {
    setIsFetching(false);
    getMovieInfo(text).then((res) => {
      const transformedData = res.data.map((item, index) => ({
        rows: item,
        isClicked: index === 0 ? true : false,
      }));

      setMovieList(transformedData);
    });
  };
  const onClickMovieCard = (index) => {
    const newArr = [...movieList];
    const clickedIndex = newArr.findIndex((v) => v.isClicked === true);
    newArr[clickedIndex].isClicked = false;
    newArr[index].isClicked = true;

    setMovieList(newArr);
  };
  const onClickSubmitBookingButton = () => {
    const postData = {
      m_payload: JSON.stringify(
        movieList.find((v) => v.isClicked === true).rows
      ),
      show_time: showTime,
      theater_name: theaterName,
    };
    postBookingMovieData(postData);
  };
  useEffect(() => {
    if (movieList.length > 5) {
      setIsFetching(true);
    }
  }, [movieList]);
  return (
    <>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { borderRadius: "20px 20px 0 0", padding: 2 },
        }}
      >
        <Button
          style={{
            width: 280,
            height: 45,
            top: "700px",
            marginLeft: "25px",
            alignSelf: "center",
          }}
          onClick={onClickSubmitBookingButton}
          variant="contained"
        >
          등록
        </Button>
        <Box
          sx={{
            width: "auto",
            height: 750,
            textAlign: "center",
            justifyItems: "center",
          }}
          role="presentation"
        >
          {" "}
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <Button
              style={{
                width: 80,
                height: 35,
                marginLeft: "25px",
              }}
              onClick={onClickSearchMovieData}
              variant="contained"
            >
              검색
            </Button>
          </div>
          {isFetching ? (
            <>
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
                  {movieList.map((value, index) => {
                    return (
                      <Card
                        onClick={() => {
                          onClickMovieCard(index);
                        }}
                        isSelect={value.isClicked}
                        key={index}
                      >
                        <img
                          src={value.rows.img_url}
                          alt={value.rows.movieNm}
                          style={{
                            width: "150px",
                            height: "auto",
                            borderRadius: "4px",
                            marginRight: "20px",
                          }}
                        />
                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                          {value.rows.movieNm}
                        </p>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <Box sx={{ display: "flex", marginTop: "80px" }}>
              <CircularProgress />
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
};
