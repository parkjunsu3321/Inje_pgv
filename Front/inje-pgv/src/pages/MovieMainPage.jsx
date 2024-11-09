import { useEffect, useState } from "react";
import styled from "styled-components";
import { testMovieInfo } from "../data/testMovieInfo";
import { Button } from "@mui/material";
import { movieTimeList } from "../data/movieTimeList";
import { Seat } from "../component/Seat";
import { useBottomSheet } from "../hooks/useBottomSheet";
import { TicketingPage } from "../component/TicketingPage";
import { cinemaInfo } from "../data/cinemaInfo";
import { seatAPI } from "../services/seatAPI";
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
  const [cinemaList, setCinemaList] = useState([[], [], []]);

  const [cinemaIndex, setCinemaIndex] = useState(0);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0);
  const [focusTimeState, setFocusTimeState] = useState([
    {
      id: 0,
      isFocus: true,
    },
    {
      id: 1,
      isFocus: false,
    },
    {
      id: 2,
      isFocus: false,
    },
    {
      id: 3,
      isFocus: false,
    },
    {
      id: 4,
      isFocus: false,
    },
  ]);

  const { getAllCinemaData, bookingSeatInfo } = seatAPI();
  useEffect(() => {
    getAllCinemaData().then((res) => {
      // console.log(res.data);
      const newArr = [...cinemaList];
      console.log("newArr ", newArr);
      res.data.filter((v) => {
        if (v.theater_name === "a") newArr[0].push(v);
        else if (v.theater_name === "b") newArr[1].push(v);
        else if (v.theater_name === "c") newArr[2].push(v);
      });
      newArr.map((v) => {
        v.sort((a, b) => a.id - b.id);
      });

      console.log("sorting Data ", newArr);
      setCinemaList(newArr);
    });
  }, []);

  useEffect(() => {
    if (selectedTimeIndex)
      console.log("?ads", cinemaList[cinemaIndex][selectedTimeIndex].state);
  }, [selectedTimeIndex]);
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
  const onClickTimeButton = (index) => {
    const newArray = [...focusTimeState];

    const focusingIndex = newArray.findIndex((v) => v.isFocus === true);
    newArray[focusingIndex].isFocus = false;

    newArray[index].isFocus = true ? (newArray[index].isFocus = true) : null;
    setSelectedTimeIndex(index);
    setFocusTimeState(newArray);
  };
  const onclickBookingButton = () => {
    const postData = {
      theater_name: cinemaList[cinemaIndex][selectedTimeIndex].theater_name,
      show_time: cinemaList[cinemaIndex][selectedTimeIndex].show_time,
      seat_number: cinemaList[cinemaIndex][selectedTimeIndex].seat_numbers,
    };
    bookingSeatInfo(postData);
  };
  return (
    <Container>
      {cinemaList[0].length > 0 ? (
        <>
          <ButtonContainer>
            {cinemaList.map((v, i) => {
              console.log("body", v);
              return (
                <Button
                  onClick={() => {
                    setCinemaIndex(i);
                  }}
                  variant="contained"
                  style={{
                    width: 200,
                    height: 200,
                    marginRight: "25px",
                  }}
                >
                  {v[0].theater_name}
                </Button>
              );
            })}
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
                    onClick={() => {
                      onClickTimeButton(index);
                    }}
                    variant="contained"
                  >
                    {value} - {movieTimeList[index + 1]}
                  </Button>
                );
              })}
            </TimeContainer>
          </InfoContainer>
          {cinemaList[cinemaIndex][selectedTimeIndex].state ? (
            <>
              <MovieInfoContainer>
                <MovieCard>
                  <MovieImgContainer>
                    <MovieImage src={testMovieInfo[0].img_url}></MovieImage>
                  </MovieImgContainer>
                </MovieCard>
              </MovieInfoContainer>
              <SeatContainer>
                <Seat
                  setCinemaList={setCinemaList}
                  cinemaList={cinemaList}
                  cinemaIndex={cinemaIndex}
                  selectedTimeIndex={selectedTimeIndex}
                />
                <p>screen</p>
              </SeatContainer>
              <Button
                style={{
                  width: 100,
                  height: 40,
                }}
                variant="contained"
                onClick={onclickBookingButton}
              >
                예매하기
              </Button>
            </>
          ) : (
            <>
              <Button variant="contained" onClick={toggleDrawer(true)}>
                Open Bottom Sheet
              </Button>
              <TicketingPage
                open={open}
                showTime={cinemaList[cinemaIndex][selectedTimeIndex].show_time}
                theaterName={
                  cinemaList[cinemaIndex][selectedTimeIndex].theater_name
                }
                toggleDrawer={toggleDrawer}
              />
            </>
          )}
        </>
      ) : null}
    </Container>
  );
};
