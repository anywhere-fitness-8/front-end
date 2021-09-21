import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  loginFormSchema,
  schema_validate_input,
  schema_validate_form,
} from "../component/schema_validation";

const Container = styled.div``;
const Form = styled.div``;
const Label = styled.div``;
const Input = styled.input``;
const Button = styled.button``;
const ValidationText = styled.p``;
const Select = styled.select``;
const Option = styled.option``;

function CompFormLogin(props) {
  const INITIAL_STATE = { username: "", password: "", accounttype: "" };
  const [stateFormData, set_stateFormData] = useState(INITIAL_STATE);
  const [stateValidationBoolean, set_stateValidationBoolean] = useState(false);
  const [stateValidationText, set_stateValidationText] =
    useState(INITIAL_STATE);

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
            type="text"
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
            type="password"
            name="password"
            value={stateFormData.password}
            onChange={cb_onChange}
            placeholder="(enter password)"
          />
        </Label>
        <ValidationText>{stateValidationText.password}</ValidationText>
        {/* -------------------password input---------------------------- */}
        <Label>
          <b>Account Type : </b>
          <Select
            value={stateFormData.accounttype}
            name="accounttype"
            onChange={cb_onChange}
          >
            <Option value="">(Please select one)</Option>
            <Option value="student">Student</Option>
            <Option value="instructor">Instructor</Option>
          </Select>
        </Label>
        <ValidationText>{stateValidationText.accounttype}</ValidationText>
        {/* -------------------submit button----------------------- */}
        <Button disabled={!stateValidationBoolean} onClick={cb_onSubmit}>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default CompFormLogin;
