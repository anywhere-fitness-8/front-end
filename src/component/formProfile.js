import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  profileFormSchema,
  schema_validate_input,
  schema_validate_form,
} from "../component/schema_validation";

const Container = styled.div``;
const Form = styled.div``;
const Label = styled.div``;
const Input = styled.input``;
const Button = styled.button``;
const ValidationText = styled.p``;
const Legend = styled.legend`
  /* border: 1px solid red; */
`;
const Fieldset = styled.fieldset`
  border: 1px solid red;
`;

function CompFormProfile(props) {
  const INITIAL_STATE = {
    username: "",
    password: "",
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    birthdate: "",
  };
  const [stateFormData, set_stateFormData] = useState(INITIAL_STATE);
  const [stateValidationBoolean, set_stateValidationBoolean] = useState(false);
  const [stateValidationText, set_stateValidationText] =
    useState(INITIAL_STATE);

  const cb_onChange = (event) => {
    const { name, value } = event.target;
    set_stateFormData({ ...stateFormData, [name]: value });

    //validate input
    schema_validate_input(
      profileFormSchema,
      name,
      value,
      stateValidationText,
      set_stateValidationText
    );
  };

  const cb_onUpdate = (event) => {
    //if validation pass
    set_stateFormData(INITIAL_STATE);
    set_stateValidationText(INITIAL_STATE);
  };

  useEffect(() => {
    schema_validate_form(
      profileFormSchema,
      stateFormData,
      set_stateValidationBoolean
    );
  }, [stateFormData]);

  return (
    <Container>
      <Form id="profile_form">
        <Fieldset>
          <Legend>UserName and Password</Legend>
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
        </Fieldset>

        <Fieldset>
          <Legend>Personal Info</Legend>
          {/* -----------------name input------------------------------- */}
          <Label>
            <b>name : </b>
            <Input
              name="name"
              value={stateFormData.name}
              onChange={cb_onChange}
              placeholder="(enter full name)"
            />
          </Label>
          <ValidationText>{stateValidationText.name}</ValidationText>
          {/* -----------------email input------------------------------- */}
          <Label>
            <b>email : </b>
            <Input
              type="email"
              name="email"
              value={stateFormData.email}
              onChange={cb_onChange}
              placeholder="(enter *@domain.com)"
            />
          </Label>
          <ValidationText>{stateValidationText.email}</ValidationText>
          {/* -----------------birthdate input------------------------------- */}
          <Label>
            <b>birthdate : </b>
            <Input
              type="date"
              name="birthdate"
              value={stateFormData.birthdate}
              onChange={cb_onChange}
            />
          </Label>
          <ValidationText>{stateValidationText.birthdate}</ValidationText>
          {/* -----------------address input------------------------------- */}
          <Label>
            <b>address : </b>
            <Input
              type="text"
              name="address"
              value={stateFormData.address}
              onChange={cb_onChange}
              placeholder="(enter ## street-name )"
            />
          </Label>
          <ValidationText>{stateValidationText.address}</ValidationText>
          {/* -----------------city input------------------------------- */}
          <Label>
            <b>city : </b>
            <Input
              type="text"
              name="city"
              value={stateFormData.city}
              onChange={cb_onChange}
              placeholder="(enter city name)"
            />
          </Label>
          <ValidationText>{stateValidationText.city}</ValidationText>
          {/* -----------------state input------------------------------- */}
          <Label>
            <b>state : </b>
            <Input
              type="text"
              name="state"
              value={stateFormData.state}
              onChange={cb_onChange}
              maxLength="2"
              placeholder="(enter state, i.e. CA)"
            />
          </Label>
          <ValidationText>{stateValidationText.state}</ValidationText>
          {/* -----------------zipcode input------------------------------- */}
          <Label>
            <b>zipcode : </b>
            <Input
              type="number"
              name="zipcode"
              value={stateFormData.zipcode}
              onChange={cb_onChange}
              maxLength="5"
              placeholder="(enter #####)"
            />
          </Label>
          <ValidationText>{stateValidationText.zipcode}</ValidationText>
        </Fieldset>
        {/* -------------------update button----------------------- */}
        <Button disabled={!stateValidationBoolean} onClick={cb_onUpdate}>
          Update Profile
        </Button>
      </Form>
    </Container>
  );
}

export default CompFormProfile;
