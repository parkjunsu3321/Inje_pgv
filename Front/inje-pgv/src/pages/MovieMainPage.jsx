import { useState } from "react";
import styled from "styled-components";
import { testMovieInfo } from "../data/testMovieInfo";
const Container = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100dvh;
  border: 1px solid black;
  padding-top: 100px;
`;
const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const MovieCard = styled.div`
  border: 1px solid black;
  height: 200px;
`;
// const MovieCardText = styled.text
const MovieImgContainer = styled.div``;
const MovieInfoBox = styled.div``;
export const MovieMainPage = () => {
  const [movie, setMovie] = useState([]);
  const testData = testMovieInfo;
  return (
    <Container>
      <MovieContainer>
        {testData.map((value) => {
          return (
            <MovieCard>
              <div></div>
            </MovieCard>
          );
        })}
      </MovieContainer>
    </Container>
  );
};
