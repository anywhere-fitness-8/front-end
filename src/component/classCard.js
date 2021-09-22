import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid orange;
  width: 100%;
  line-height: 1px;
`;

function CompClassCard({ input_object, set_stateSelectedClass }) {
  const cb_onClick = (event) => {
    // console.log("classCard.js - called cb_onClick");
    // event.stopPropagation();
    event.preventDefault();
    // debugger;
    set_stateSelectedClass(null);
    set_stateSelectedClass(input_object);
  };

  // console.log(props);

  return (
    <Container>
      <h3>CompClassCard.js</h3>
      {!input_object && <p>Loading</p>}
      {input_object && <p>class id: {input_object.class_id}</p>}
      {input_object && <p>name: {input_object.name}</p>}
      {input_object && <p>date: {input_object.date}</p>}
      {input_object && <p>type: {input_object.type}</p>}
      {input_object && <p>location: {input_object.location}</p>}
      {input_object && <p>duration: {input_object.duration}</p>}
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
