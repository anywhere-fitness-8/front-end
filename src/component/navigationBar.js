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

const linkStyle = {
  textDecoration:'none',
  color:'white',
  backgroundColor:'darkGrey',
  padding:'.5vh 1vw',
  borderRadius:'10px',
  
}



function CompNavigationBar(props) {

 




  return (
    <Container>

          
          <Link to="/"  onMouseOver={(e) => {e.target.style.backgroundColor= 'black'}} onMouseOut={(e) =>{e.target.style.backgroundColor= 'darkGrey'}} style={linkStyle}>Home</Link>{" "}
         
          {/* <Link to="/login" style={linkStyle}>Login</Link> */}

          <Link to="/reserve" onMouseOver={(e) => {e.target.style.backgroundColor= 'black'}} onMouseOut={(e) =>{e.target.style.backgroundColor= 'darkGrey'}} style={linkStyle}>Reserve Class</Link>{" "}

          <Link to="/manage" onMouseOver={(e) => {e.target.style.backgroundColor= 'black'}} onMouseOut={(e) =>{e.target.style.backgroundColor= 'darkGrey'}} style={linkStyle}>Manage Class</Link>{" "}

          {/* <Link to="/profile" style={linkStyle}>Profile</Link>{" "} */}

          <Link to={localStorage.getItem('token') === null? '/Login' : '/profile'} onMouseOver={(e) => {e.target.style.backgroundColor= 'black'}} onMouseOut={(e) =>{e.target.style.backgroundColor= 'darkGrey'}} style={linkStyle}>{localStorage.getItem('token') === null? 'Login' : 'Profile'}</Link>{" "}

    </Container>
  );
}

export default CompNavigationBar;
