import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div``;

function CompClassDetail(props) {
  const [stateLoading, set_stateLoading] = useState(true);
  const [stateData, set_stateData] = useState(null);

  //run once
  useEffect(() => {
    if (props.input_object) {
      set_stateData(props.input_object);
    }
  }, []);

  useEffect(() => {
    if (stateData) {
      set_stateLoading(false);
    }
  }, [stateData]);

  //destructure input_object from props
  // const {
  //   name,
  //   date,
  //   startTime,
  //   type,
  //   duration,
  //   intensityLevel,
  //   location,
  //   maxClassSize,
  //   registeredAttendees,
  // } = props.input_object;
  return (
    <Container>
      <h3>CompClassDetail.js</h3>
      {stateLoading && <p>Loading</p>}
      {!stateLoading && <p>name: {stateData.name}</p>}
      {!stateLoading && <p>date: {stateData.date}</p>}
      {!stateLoading && <p>type: {stateData.type}</p>}
      {!stateLoading && <p>location: {stateData.location}</p>}
      {!stateLoading && <p>duration: {stateData.duration}</p>}
    </Container>
  );
}

export default CompClassDetail;
