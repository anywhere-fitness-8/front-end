import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid orange;
  width: 100%;
  line-height: 1px;
`;

function CompClassCard(props) {
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

  const cb_onClick = (event) => {
    // console.log("classCard.js - called cb_onClick");
    // event.stopPropagation();
    event.preventDefault();
    // debugger;
    props.set_stateSelectedClass(null);
    props.set_stateSelectedClass(stateData);
  };

  // console.log(props);

  return (
    <Container>
      <h3>CompClassCard.js</h3>
      {stateLoading && <p>Loading</p>}
      {!stateLoading && <p>name: {stateData.name}</p>}
      {!stateLoading && <p>date: {stateData.date}</p>}
      {!stateLoading && <p>type: {stateData.type}</p>}
      {!stateLoading && <p>location: {stateData.location}</p>}
      {!stateLoading && <p>duration: {stateData.duration}</p>}
      <button onClick={cb_onClick}>Select</button>
    </Container>
  );
}

export default CompClassCard;

/*
date : "2021-09-07"
duration: "4"
intensityLevel: "low"
location: "beach"
maxClassSize: "23"
name : "tom"
registeredAttendees: 0
startTime: "04:35"
type: "type b


  destructure input_object from props
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
*/
