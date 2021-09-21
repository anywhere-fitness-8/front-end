import React from "react";
import styled from "styled-components";
import CompNavigationBar from "./navigationBar";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0;
`;
const Left = styled.div`
display: flex;
  width: 10%;
  height: 100%;
  background-color: darkgray;
  margin: 0;
  padding: .25vh;
  justify-content: center;
  border-radius: 20px 0 0 0;
`;

const Right = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  height: 100%;
  background-color: lightgray;
  margin: 0;
  padding: 0 2vw;
  border-radius: 0px 20px 0 0 ;
`;

function CompHeader(props) {
  return (
    <Container>
      <Left>
        <img src="https://picsum.photos/50" alt="random image" />
      </Left>
      <Right>
        <CompNavigationBar />
      </Right>
    </Container>
  );
}

export default CompHeader;
