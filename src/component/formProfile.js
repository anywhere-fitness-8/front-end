import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

    //debug
    if (stateFormData.username !== "" && stateFormData.password !== "") {
      set_stateValidationBoolean(true);
    }
  };

  const cb_onUpdate = (event) => {
    //if validation pass
    set_stateFormData(INITIAL_STATE);
    set_stateValidationText(INITIAL_STATE);
  };

  return (
    <Container>
      <Form>
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
          <ValidationText>{stateValidationText.username}</ValidationText>
          {/* -------------------update button----------------------- */}
          <Button disabled={!stateValidationBoolean} onClick={cb_onUpdate}>
            Update
          </Button>
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
          {/* -----------------zipcode input------------------------------- */}
          <Label>
            <b>zipcode : </b>
            <Input
              type="tel"
              name="zipcode"
              value={stateFormData.zipcode}
              onChange={cb_onChange}
              min="00001"
              max="99999"
              maxLength="5"
              placeholder="(enter #####)"
            />
          </Label>
          <ValidationText>{stateValidationText.username}</ValidationText>
          {/* -------------------update button----------------------- */}
          <Button disabled={!stateValidationBoolean} onClick={cb_onUpdate}>
            Update
          </Button>
        </Fieldset>
      </Form>
    </Container>
  );
}

export default CompFormProfile;
