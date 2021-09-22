import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  border: solid 1px black;
  width: 100%;
`;
const Label = styled.label`
  display: flex;
  flex-direction: row;
`;
const Input = styled.input``;
const Button = styled.button`
  width: 100%;
`;
const ValidationText = styled.p``;
const Legend = styled.legend`
  /* border: 1px solid red; */
`;
const Fieldset = styled.fieldset`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;

function CompClassDetailEditable({
  stateSelectedClass,
  set_stateSelectedClass,
  stateArrayOfClasses,
  set_stateArrayOfClasses,
}) {
  const INITIAL_STATE = {
    name: "",
    type: "",
    date: "",
    startTime: "",
    duration: "",
    intensityLevel: "",
    location: "",
    registeredAttendees: 0,
    maxClassSize: "",
  };
  const [stateReturnObject, set_stateReturnObject] = useState(null);
  // const [stateFormData, set_stateFormData] = useState(INITIAL_STATE);
  const [stateEditBoolean, set_stateEditBoolean] = useState(true);
  const [stateValidationBoolean, set_stateValidationBoolean] = useState(true);
  const [stateValidationText, set_stateValidationText] =
    useState(INITIAL_STATE);

  const cb_onChange = (event) => {
    const { name, value } = event.target;
    set_stateSelectedClass({ ...stateSelectedClass, [name]: value });
  };

  const helper_update_ClassObject_via_axios = () => {};

  /*
    when edit button is click, the stateEditBoolean gets toggle to opposite state

    when  update button is click
    
    _the new ClassDetail get pushed to the backend
  */
  const cb_onClick = (event) => {
    event.preventDefault();

    //when stateEditBoolean === false, user can edit the class
    if (stateEditBoolean === false) {
      // _the new ClassDetail get pushed to the backend
      helper_update_ClassObject_via_axios();

      // _the new ClassDetail get update in the set_stateArrayOfClasses
      const temp_array = stateArrayOfClasses.map((eachClass) => {
        if (eachClass.class_id === stateSelectedClass.class_id) {
          return stateSelectedClass;
        } else {
          return eachClass;
        }
      });

      set_stateArrayOfClasses(temp_array);
    }

    //toggle stateEditBoolean
    set_stateEditBoolean(!stateEditBoolean);
  };

  return (
    <Container>
      <Form id="profile_form">
        <Fieldset>
          <Legend>Add Classes</Legend>
          {/* -----------------class_id input------------------------------- */}
          <Label>
            <b>Class ID : </b>
            <Input
              type="text"
              name="class_id"
              value={stateSelectedClass.class_id}
              onChange={cb_onChange}
              placeholder="(enter class name)"
              disabled={true}
            />
          </Label>
          <ValidationText>{stateValidationText.class_id}</ValidationText>
          {/* -----------------name input------------------------------- */}
          <Label>
            <b>Name : </b>
            <Input
              type="text"
              name="name"
              value={stateSelectedClass.name}
              onChange={cb_onChange}
              placeholder="(enter class name)"
              disabled={stateEditBoolean}
            />
          </Label>
          <ValidationText>{stateValidationText.name}</ValidationText>
          {/* -----------------type input------------------------------- */}
          <Label>
            <b>type : </b>
            <Input
              name="type"
              value={stateSelectedClass.type}
              onChange={cb_onChange}
              placeholder="(enter type)"
              disabled={stateEditBoolean}
            />
          </Label>

          <ValidationText>{stateValidationText.type}</ValidationText>
          {/* -----------------date input------------------------------- */}
          <Label>
            <b>date : </b>
            <Input
              type="date"
              name="date"
              value={stateSelectedClass.date}
              onChange={cb_onChange}
              disabled={stateEditBoolean}
            />
          </Label>
          <ValidationText>{stateValidationText.date}</ValidationText>
          {/* -------------------startTime input---------------------------- */}
          <Label>
            <b>start time : </b>
            <Input
              type="time"
              name="startTime"
              value={stateSelectedClass.startTime}
              onChange={cb_onChange}
              disabled={stateEditBoolean}
            />
          </Label>
          <ValidationText>{stateValidationText.startTime}</ValidationText>

          {/* -----------------duration input------------------------------- */}
          <Label>
            <b>duration : </b>
            <Input
              type="number"
              name="duration"
              value={stateSelectedClass.duration}
              onChange={cb_onChange}
              placeholder="(enter xx minutes)"
              disabled={stateEditBoolean}
            />
          </Label>
          <ValidationText>{stateValidationText.duration}</ValidationText>

          {/* -----------------intensityLevel input------------------------------- */}
          <Label>
            <b>intensity level : </b>
            <Input
              type="text"
              name="intensityLevel"
              value={stateSelectedClass.intensityLevel}
              onChange={cb_onChange}
              placeholder="(enter intensity level )"
              disabled={stateEditBoolean}
            />
          </Label>
          <ValidationText>{stateValidationText.intensityLevel}</ValidationText>
          {/* -----------------location input------------------------------- */}
          <Label>
            <b>location : </b>
            <Input
              name="location"
              value={stateSelectedClass.location}
              onChange={cb_onChange}
              placeholder="(enter location)"
              disabled={stateEditBoolean}
            />
          </Label>

          <ValidationText>{stateValidationText.location}</ValidationText>
          {/* -----------------maxClassSize input------------------------------- */}
          <Label>
            <b>max class size : </b>
            <Input
              type="number"
              name="maxClassSize"
              value={stateSelectedClass.maxClassSize}
              onChange={cb_onChange}
              placeholder="(enter a number )"
              disabled={stateEditBoolean}
            />
          </Label>
          <ValidationText>{stateValidationText.maxClassSize}</ValidationText>
          <Button disabled={!stateValidationBoolean} onClick={cb_onClick}>
            {stateEditBoolean ? "Edit" : "Update"}
          </Button>
        </Fieldset>
        {/* -------------------update button----------------------- */}
      </Form>
    </Container>
  );
}

export default CompClassDetailEditable;
