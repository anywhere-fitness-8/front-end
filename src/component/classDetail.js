import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 10px solid black;
  width: 55%;
`;

function CompClassDetail(props) {
  const { input_object } = props;

  //for Unit 3 to post axios call
  const cb_OnCLick_Reserve = () => {};

  return (
    <Container>
      <h3>CompClassDetail.js</h3>
      {/* {stateLoading && <p>Loading</p>} */}
      {input_object && <p>name: {input_object.name}</p>}
      {input_object && <p>date: {input_object.date}</p>}
      {input_object && <p>type: {input_object.type}</p>}
      {input_object && <p>location: {input_object.location}</p>}
      {input_object && <p>duration: {input_object.duration}</p>}
      <button onClick={cb_OnCLick_Reserve}>Reserve</button>
    </Container>
  );
}

export default CompClassDetail;
