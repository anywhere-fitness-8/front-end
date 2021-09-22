import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";




const Container = styled.div`
`;
const Form = styled.div``;
const Label = styled.div``;
const Input = styled.input``;
const Button = styled.button``;
const ValidationText = styled.p`
  color: red;
`;
const Select = styled.select``;
const Option = styled.option``;

const initialState = {
    username:'',
    password:'',
    email:'',
    remaining_classes: 0,
    role_id: 1
}
const RegistrationForm = () =>{

  const {push} = useHistory()
  const [stateFormData, set_stateFormData] = useState(initialState);
  console.log(stateFormData)

  const cb_onChange = (event) => {
      const { name, value } = event.target;
      set_stateFormData({ ...stateFormData, [name]: value });

    };

  const cb_onChangeInt = (event) => {
    const { name, value } = event.target;
    set_stateFormData({ ...stateFormData, [name]: parseInt(value) });

  };


  const cb_onSubmit = (event) => {       
      event.preventDefault()

      axios.post('https://anywhere-fitness-8.herokuapp.com/api/auth/register', stateFormData)
      .then(res=>{
          push('/login') 
      })
      .catch(err=>[
          console.error(err)
      ])
  };   


  return(<Container>
      <h3>RegistrationForm.js</h3>
    <Form>
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
      <ValidationText>placeholder: stateValidationText.username</ValidationText>

      {/* -----------------username input------------------------------- */}
      <Label>
        <b>E-Mail : </b>
        <Input
          type="email"
          name="email"
          value={stateFormData.email}
          onChange={cb_onChange}
          placeholder="Must be valid E-Mail address"
          autoFocus
        />
      </Label>
      <ValidationText>placeholder: stateValidationText.email</ValidationText>
      
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
      <ValidationText>placeholder: stateValidationText.password</ValidationText>
      {/* -------------------account type ---------------------------- */}

      <Label>
        <b>Account Type : </b>
        <Select
          value={stateFormData.role_id}
          name="role_id"
          type='number'
          onChange={cb_onChangeInt}
        >
          <Option value='' disabled selected >(Please select one)</Option>
          <Option value={1}>Student</Option>
          <Option value={2}>Instructor</Option>
        </Select>
      </Label>
      <ValidationText>placeholder: stateValidationText.role_id</ValidationText>

      {/* -------------------submit button----------------------- */}
      <Button onClick={cb_onSubmit}>
        Register
      </Button>
    </Form>
  </Container>)
}

export default RegistrationForm