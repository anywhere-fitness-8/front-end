import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div``;

function CompClassDetail(props) {
  const [stateLoading, set_stateLoading] = useState(false);
  const { input_object } = props;
  return (
    <Container>
      <h3>CompClassDetail.js</h3>
      {/* {stateLoading && <p>Loading</p>} */}
      {input_object && <p>name: {input_object.name}</p>}
      {input_object && <p>date: {input_object.date}</p>}
      {input_object && <p>type: {input_object.type}</p>}
      {input_object && <p>location: {input_object.location}</p>}
      {input_object && <p>duration: {input_object.duration}</p>}
    </Container>
  );
}

export default CompClassDetail;
