import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 0;
  border-radius: 0 0 20px 20px;
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
