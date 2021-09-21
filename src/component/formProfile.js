import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div``;
const Form = styled.div``;
const Label = styled.div``;
const Input = styled.input``;
const Button = styled.button``;
const ValidationText = styled.p``;

function CompFormProfile(props) {
  const INITIAL_STATE = { username: "", password: "" };
  const [stateFormData, set_stateFormData] = useState(INITIAL_STATE);
  const [stateValidationBoolean, set_stateValidationBoolean] = useState(false);
  const [stateValidationText, set_stateValidationText] =
    useState(INITIAL_STATE);

  const cb_onChange = (event) => {
    const { name, value } = event.target;
    set_stateFormData({ ...stateFormData, [name]: value });

    //debug
    if (stateFormData.username !== "" && stateFormData.password !== "") {
      set_stateValidationBoolean(true);
    }
  };

  const cb_onSubmit = (event) => {
    //if validation pass
    set_stateFormData(INITIAL_STATE);
    set_stateValidationText(INITIAL_STATE);
  };

  return (
    <Container>
      <h3>CompFormLogin.js</h3>
      <Form>
        {/* -----------------username input------------------------------- */}
        <Label>
          <b>Username : </b>
          <Input
            name="username"
            value={stateFormData.username}
            onChange={cb_onChange}
            placeholder="(enter username)"
            autoFocus
          />
        </Label>
        <ValidationText>{stateValidationText.username}</ValidationText>
        {/* -------------------password input---------------------------- */}
        <Label>
          <b>Password : </b>
          <Input
            name="password"
            value={stateFormData.password}
            onChange={cb_onChange}
            placeholder="(enter password)"
          />
        </Label>
        <ValidationText>{stateValidationText.username}</ValidationText>
        {/* -------------------submit button----------------------- */}
        <Button disabled={!stateValidationBoolean} onClick={cb_onSubmit}>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default CompFormProfile;
