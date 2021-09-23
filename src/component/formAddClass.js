import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosWithAuth from '../utils/axiosWithAuth';
import { date } from "yup/lib/locale";

const Container = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  border: solid 1px black;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input``;
const Button = styled.button`
  width: 10%;
`;
const ValidationText = styled.p``;
const Legend = styled.legend`
  /* border: 1px solid red; */
`;
const Fieldset = styled.fieldset`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
`;

function CompFormAddClass({ set_stateNewClass }) {
  const INITIAL_STATE = {
    class_name: "",
    type: "",
    instructor_id: null,
    startTime: "6",
    duration: 0,
    intensity: 0,
    location: "24 Hour Fitness",
    registered_clients: 0,
    size: 0,
  };

  const [stateReturnObject, set_stateReturnObject] = useState(null);
  const [stateFormData, set_stateFormData] = useState(INITIAL_STATE);
  const [stateValidationBoolean, set_stateValidationBoolean] = useState(true);
  const [stateValidationText, set_stateValidationText] =
  useState(INITIAL_STATE);
  // const [stateNewClass, set_stateNewClass] = useState(null);

  const cb_onChange = (event) => {
    const { name, value } = event.target;
    set_stateFormData({ ...stateFormData, [name]: value });
  };
 
  const cb_onAdd = (event) => {
    event.preventDefault();
    //if validation pass
    axiosWithAuth()
      .post(`https://anywhere-fitness-8.herokuapp.com/api/classes`, stateFormData )
      .then(res => {
        console.log(res)
        set_stateReturnObject(res.data)
      })
      .catch(err => console.log({ err }))
      // set_stateReturnObject({ ...stateFormData, class_id: Date.now()});
  };

  useEffect(() => {
    //validate form
  }, [stateFormData]);

  useEffect(() => {
    if (stateReturnObject) {
      console.log("stateReturnObject = ", stateReturnObject);
      set_stateFormData(INITIAL_STATE);
      set_stateValidationText(INITIAL_STATE);
      set_stateNewClass(stateReturnObject);
    }
  }, [stateReturnObject]);

  return (
    <Container>
      <Form id="profile_form">
        <Fieldset>
          <Legend>Add Classes</Legend>
          {/* -----------------name input------------------------------- */}
          <Label>
            <b>Name : </b>
            <Input
              type="text"
              name="class_name"
              value={stateFormData.class_name}
              onChange={cb_onChange}
              placeholder="(enter class name)"
            />
          </Label>
          <ValidationText>{stateValidationText.name}</ValidationText>
          {/* -----------------type input------------------------------- */}
          <Label>
            <b>type : </b>
            <Input
              name="type"
              value={stateFormData.type}
              onChange={cb_onChange}
              placeholder="(enter type)"
            />
          </Label>

          <ValidationText>{stateValidationText.type}</ValidationText>
          {/* -----------------date input------------------------------- */}
          <Label>
            <b>instructor ID </b>
            <Input
              type="number"
              name="instructor_id"
              value={stateFormData.instructor_id}
              onChange={cb_onChange}
            />
          </Label>
          {/* <ValidationText>{stateValidationText.date}</ValidationText> */}
          {/* -------------------startTime input---------------------------- */}
          <Label>
            <b>start time : </b>
            <Input
              type="number"
              name="startTime"
              value={stateFormData.startTime}
              onChange={cb_onChange}
            />
          </Label>
          <ValidationText>{stateValidationText.startTime}</ValidationText>

          {/* -----------------duration input------------------------------- */}
          <Label>
            <b>duration : </b>
            <Input
              type="number"
              name="duration"
              value={stateFormData.duration}
              onChange={cb_onChange}
              placeholder="(enter xx minutes)"
            />
          </Label>
          <ValidationText>{stateValidationText.duration}</ValidationText>

          {/* -----------------intensityLevel input------------------------------- */}
          <Label>
            <b>intensity level : </b>
            <Input
              type="number"
              name="intensity"
              value={stateFormData.intensity}
              onChange={cb_onChange}
              placeholder="(enter intensity level )"
            />
          </Label>
          <ValidationText>{stateValidationText.intensity}</ValidationText>
          {/* -----------------location input------------------------------- */}
          <Label>
            <b>location : </b>
            <Input
              name="location"
              value={stateFormData.location}
              onChange={cb_onChange}
              placeholder="(enter location)"
            />
          </Label>

          <ValidationText>{stateValidationText.location}</ValidationText>
          {/* -----------------maxClassSize input------------------------------- */}
          <Label>
            <b>max class size : </b>
            <Input
              type="number"
              name="size"
              value={stateFormData.size}
              onChange={cb_onChange}
              placeholder="(enter a number )"
            />
          </Label>
          <ValidationText>{stateValidationText.maxClassSize}</ValidationText>
        </Fieldset>
        {/* -------------------update button----------------------- */}
        <Button disabled={!stateValidationBoolean} onClick={cb_onAdd}>
          Add
        </Button>
      </Form>
    </Container>
  );
}

export default CompFormAddClass;
