import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import {
  loginFormSchema,
  schema_validate_input,
  schema_validate_form,
} from "../component/schema_validation";

const Container = styled.div`
padding-bottom: 3vh;
`;
const Form = styled.form``;
const Label = styled.div``;
const Input = styled.input``;
const Button = styled.button``;
const ValidationText = styled.p`
  color: red;
`;


function CompFormLogin(props) {

  console.log(localStorage.token)
  const INITIAL_STATE = { 
    username: "", 
    password: ""};

    const {push} = useHistory()

  const [stateFormData, set_stateFormData] = useState(INITIAL_STATE);
  const [stateValidationBoolean, set_stateValidationBoolean] = useState(false);
  const [stateValidationText, set_stateValidationText] = useState(INITIAL_STATE);


  const cb_onChange = (event) => {
    const { name, value } = event.target;
    set_stateFormData({ ...stateFormData, [name]: value });

    //validate user input
    schema_validate_input(
      loginFormSchema,
      name,
      value,
      stateValidationText,
      set_stateValidationText
    );
  };

  useEffect(() => {
    //validate form
    schema_validate_form(
      loginFormSchema,
      stateFormData,
      set_stateValidationBoolean
    );
  }, [stateFormData]);

  const cb_onSubmit = (event) => {
    event.preventDefault()

    axios.post('https://anywhere-fitness-8.herokuapp.com/api/auth/login', stateFormData)
      .then(res=>{
        localStorage.setItem('token', res.data.token)
        push('/') 
      })
      .catch(err=>[
        console.error(err)
      ])
  };

  return (
    <Container>
      <h3>CompFormLogin.js</h3>
      <Form onSubmit={cb_onSubmit}>
        {/* -----------------username input------------------------------- */}
        <Label>
          <b>Username : </b>
          <Input
            type="text"
            name="username"
            value={stateFormData.username}
            onChange={cb_onChange}
            placeholder="Must be 5 characters long"
            autoFocus
          />
        </Label>
        <ValidationText>{stateValidationText.username}</ValidationText>
        
        {/* -------------------password input---------------------------- */}
        <Label>
          <b>Password : </b>
          <Input
            type="password"
            name="password"
            value={stateFormData.password}
            onChange={cb_onChange}
            placeholder="Must be 5 characters long"
          />
        </Label>
        <ValidationText>{stateValidationText.password}</ValidationText>


        {/* -------------------submit button----------------------- */}
        <Button disabled={!stateValidationBoolean}>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default CompFormLogin;
