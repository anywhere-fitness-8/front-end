import React from "react";
import styled from "styled-components";
import CompClassCard from "./classCard";

const Container = styled.div`
  border: 1px solid green;
  background-color: gray;
  width: 45%;
  overflow: scroll;
`;

function CompListOfClasses(props) {
  return (
    <Container>
      {props.input_object &&
        Array.from(props.input_object).map((eachClass, index) => {
          if (eachClass) {
            return (
              <CompClassCard
                input_object={eachClass}
                key={index}
                set_stateSelectedClass={props.set_stateSelectedClass}
              />
            );
          } else {
            return null;
          }
        })}
    </Container>
  );
}

export default CompListOfClasses;
/*
{ input_object, set_stateSelectedClass }
*/
