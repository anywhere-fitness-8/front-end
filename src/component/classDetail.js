import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div``;

function CompClassDetail(props) {
  const [stateLoading, set_stateLoading] = useState(false);
  const {
    name,
    date,
    startTime,
    type,
    duration,
    intensityLevel,
    location,
    maxClassSize,
    registeredAttendees,
  } = props.input_object;
  return (
    <Container>
      <h3>CompClassDetail.js</h3>
      {stateLoading && <p>Loading</p>}
      {!stateLoading && <p>name: {name}</p>}
      {!stateLoading && <p>date: {date}</p>}
      {!stateLoading && <p>type: {type}</p>}
      {!stateLoading && <p>location: {location}</p>}
      {!stateLoading && <p>duration: {duration}</p>}
    </Container>
  );
}

export default CompClassDetail;
