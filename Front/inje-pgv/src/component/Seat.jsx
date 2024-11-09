import { useEffect, useState } from "react";
import styled from "styled-components";

const SeatContainer = styled.div`
  width: 300px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
`;

const SeatButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${(props) =>
    props.selected === 1
      ? "#919191"
      : props.selected === 2
      ? "#5A54D4"
      : "#e0e0e0"};
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: ${(props) => props.margin}px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.selected ? "#5A54D4" : "#d5d5d5")};
  }
`;

export const Seat = ({
  setCinemaList,
  cinemaList,
  cinemaIndex,
  selectedTimeIndex,
}) => {
  // 30개의 좌석을 담은 배열 생성 및 초기화
  const [seats, setSeats] = useState(
    cinemaList[cinemaIndex][selectedTimeIndex].seat_numbers
  );
  const onClickButton = (index) => {
    const newArray = [...seats];
    if (1 === seats[index]) return;
    const findIndex = newArray.findIndex((v) => v === 2);
    if (findIndex) {
      newArray[findIndex] = 0;
    }
    newArray[index] = 2;
    console.log(seats);
    setSeats(newArray); //2는 사용자가 찍은거
    const newCinema = [...cinemaList];
    cinemaList[cinemaIndex][selectedTimeIndex].seat_numbers = seats;
    setCinemaList(newCinema);
  };
  // 좌석 클릭 시 선택 상태 토글

  return (
    <SeatContainer>
      {seats.map((selected, index) => {
        const margin = (index + 1) % 3 === 0 ? 20 : 0;
        return (
          <SeatButton
            key={index}
            selected={selected}
            margin={margin}
            onClick={() => onClickButton(index)}
          >
            {selected ? "X" : "O"}
          </SeatButton>
        );
      })}
    </SeatContainer>
  );
};
