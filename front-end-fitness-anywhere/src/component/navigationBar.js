import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const UL = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LI = styled.li`
  text-decoration: none;
`;

function CompNavigationBar(props) {
  return (
    <Container>
      <UL>
        <LI>
          <Link to="/">Home</Link>{" "}
        </LI>
        <LI>
          <Link to="/login">Login</Link>{" "}
        </LI>
        <LI>
          <Link to="/profile">Profile</Link>{" "}
        </LI>
        <LI>
          <Link to="/reserve">Reserve Class</Link>{" "}
        </LI>
        <LI>
          <Link to="/manage">Manage Class</Link>{" "}
        </LI>
      </UL>
    </Container>
  );
}

export default CompNavigationBar;
