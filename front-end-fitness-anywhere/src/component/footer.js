import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 0;
`;

function CompFooter(props) {
  return (
    <Container>
      <p>Copyright</p>
      <div>Contact Information</div>
    </Container>
  );
}

export default CompFooter;
