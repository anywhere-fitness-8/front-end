import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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

const linkStyle = {
  textDecoration:'none',
  color:'white',
  backgroundColor:'darkGrey',
  padding:'.5vh 1vw',
  borderRadius:'10px'
}

function CompNavigationBar(props) {
  return (
    <Container>


          <Link to="/" style={linkStyle}>Home</Link>{" "}

          <Link to="/login" style={linkStyle}>Login</Link>{" "}

          <Link to="/profile" style={linkStyle}>Profile</Link>{" "}

          <Link to="/reserve" style={linkStyle}>Reserve Class</Link>{" "}

          <Link to="/manage" style={linkStyle}>Manage Class</Link>{" "}

    </Container>
  );
}

export default CompNavigationBar;
