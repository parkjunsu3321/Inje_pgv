import { useState } from "react";
import styled from "styled-components";
import { testMovieInfo } from "../data/testMovieInfo";
import { Button } from "@mui/material";
import { movieTimeList } from "../data/movieTimeList";
import { Seat } from "../component/Seat";
import { useBottomSheet } from "../hooks/useBottomSheet";
import { TicketingPage } from "../component/TicketingPage";
const Container = styled.div`
  position: relative;
  display: flex;
  width: 90vw;
  height: 100vh;
  border: 1px solid black;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 100px;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0.3;

  border: 1px solid black;
  justify-content: center;
`;
const InfoContainer = styled.div`
display`;
const MovieCard = styled.div`
  border: 1px solid black;
  height: 200px;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;
`;
// const MovieCardText = styled.text
const MovieImgContainer = styled.div``;
const MovieImage = styled.img`
  width: 150px;
  height: 200px;
`;
const MovieInfoBox = styled.div``;
const TimeContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const MovieInfoContainer = styled.div`
  border: 1px solid black;
`;
const SeatContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const MovieMainPage = () => {
  const [movie, setMovie] = useState([]);
  const testData = testMovieInfo;
  const [movieData, setMovieData] = useState({});

  const { open, setOpen } = useBottomSheet();
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };
  const onClickCinemaButton = () => {};
  const onClickTicketing = () => {};
  return (
    <Container>
      <ButtonContainer>
        <Button
          variant="contained"
          style={{
            width: 200,
            height: 200,
            marginRight: "25px",
          }}
        >
          A
        </Button>

        <Button
          style={{
            width: 200,
            height: 200,
            marginRight: "25px",
          }}
          variant="contained"
        >
          B
        </Button>
        <Button
          style={{
            width: 200,
            height: 200,
            marginRight: "25px",
          }}
          variant="contained"
        >
          C
        </Button>
      </ButtonContainer>
      <InfoContainer>
        <TimeContainer>
          {movieTimeList.map((value, index) => {
            return (
              <Button
                style={{
                  width: 100,
                  height: 50,
                  marginRight: "25px",
                }}
                variant="contained"
              >
                {value} - {movieTimeList[index + 1]}
              </Button>
            );
          })}
        </TimeContainer>
      </InfoContainer>
      <MovieInfoContainer>
        <MovieCard>
          <MovieImgContainer>
            <MovieImage src={testMovieInfo[0].img_url}></MovieImage>
          </MovieImgContainer>
        </MovieCard>
      </MovieInfoContainer>
      <SeatContainer>
        <Seat />
        <p>screen</p>
        <Button
          style={{
            width: 100,
            height: 40,
          }}
          variant="contained"
        >
          예매하기
        </Button>
        <Button variant="contained" onClick={toggleDrawer(true)}>
          Open Bottom Sheet
        </Button>
        <TicketingPage open={open} toggleDrawer={toggleDrawer} />
      </SeatContainer>
    </Container>
  );
};
