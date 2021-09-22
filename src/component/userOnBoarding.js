import React from "react";
import styled from "styled-components";
import {useHistory} from 'react-router-dom';

const Container = styled.div`
display: flex;
  
  justify-content: center;

`;
const SkipButton = styled.button`
  
  
  color: tomato;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid tomato;
  border-radius: 3px;
  align-self: flex-end;
 
`


function CompUserOnboarding(props) {

  const history = useHistory();

  const onClick = () =>{
    let path = `/login`;
    history.push(path)

  }



  return (
    <Container>
      <div>
        <h3>Registration Successful!</h3>
        <p>Walkthrough Tutorial</p>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>

        
        <div className="skip-button">
          <SkipButton onClick={onClick} >
          
            Skip to login!
            
          </SkipButton>
        


          
        </div>
        
      </div>
    </Container>
    
  );
}

export default CompUserOnboarding;
