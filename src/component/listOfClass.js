import React from "react";
import styled from "styled-components";
import CompClassCard from "./classCard";

const Container = styled.div`
  border: 1px solid green;
  background-color: gray;
  width: 25%;
  overflow: scroll;
  height: 60vh;
`;

function CompListOfClasses({ input_object }) {
  return (
    <Container>
      {/* {input_object && (
        <p>
          CompListOfClasses.js has length of {Array.from(input_object).length}
        </p>
      )} */}
      {input_object &&
        Array.from(input_object).map((eachClass, index) => {
          if (eachClass) {
            return <CompClassCard input_object={eachClass} key={index} />;
          } else {
            return null;
          }
        })}
    </Container>
  );
}

export default CompListOfClasses;
