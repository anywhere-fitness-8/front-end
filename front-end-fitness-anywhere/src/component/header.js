import React from "react";
import styled from "styled-components";
import CompNavigationBar from "./navigationBar";

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0;
`;
const Left = styled.div`
  width: 10%;
  height: 100%;
  background-color: gray;
  margin: 0;
  padding: 0;
`;

const Right = styled.div`
  width: 90%;
  height: 100%;
  background-color: green;
  margin: 0;
  padding: 0;
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
