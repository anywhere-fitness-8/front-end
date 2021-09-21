/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CompFormFilterClass from "./formFilterClass";
import CompFormAddClass from "./formAddClass";
import { list_of_classes } from "./sample_data";
import CompListOfClasses from "./listOfClass";
import CompClassDetail from "./classDetail";

const Container = styled.div``;
const DIV_Flex_Row = styled.div`
  display: flex;
  flex-direction: row;
`;

function CompTaskManageClass(props) {
  //--------------------------------------------------------
  // const [stateArrayOfClasses, set_stateArrayOfClasses] =
  // useState(list_of_classes);
  const [stateArrayOfClasses, set_stateArrayOfClasses] = useState([]);
  //---------------------------------------------------------------------
  //set_stateNewClass allow user to add a class
  const [stateNewClass, set_stateNewClass] = useState(null);
  //set_stateSearchCriteria allow user to search class
  const [stateSearchCriteria, set_stateSearchCriteria] = useState(null);
  //set_stateSelectedClass allow user to render a CompClassDetail in CompTaskManageClass or on "/manage" page
  const [stateSelectedClass, set_stateSelectedClass] = useState(null);

  //event happens once after the component initially get render
  useEffect(() => {
    set_stateArrayOfClasses([...stateArrayOfClasses, ...list_of_classes]);
  }, []);

  useEffect(() => {
    // stateSelectedClass &&
    // console.log("stateSelectedClass = ", stateSelectedClass);
  }, [stateSelectedClass]);

  //monitor change in stateArrayOfClasses
  useEffect(() => {
    // console.log("stateArrayOfClasses.length = ", stateArrayOfClasses.length);
  }, [stateArrayOfClasses]);

  //monitor change in stateNewClass
  useEffect(() => {
    stateNewClass &&
      set_stateArrayOfClasses([...stateArrayOfClasses, stateNewClass]);
  }, [stateNewClass]);

  //monitor change in stateSearchCriteria
  useEffect(() => {
    //????????????????????????????????????????????????????????
    //what happen after a new search criteria gets detected?
    //????????????????????????????????????????????????????????
    if (stateSearchCriteria) {
    }
  }, [stateSearchCriteria]);

  return (
    <Container>
      <h3>CompTaskManageClass.js</h3>
      <p>Length of stateArrayOfClasses is {stateArrayOfClasses.length}</p>
      <p>
        stateSearchCriteria ={" "}
        {stateSearchCriteria ? JSON.stringify(stateSearchCriteria) : "null"}
      </p>
      <p>
        stateSelectedClass ={" "}
        {stateSelectedClass ? JSON.stringify(stateSelectedClass) : "null"}
      </p>
      <p>
        stateNewClass = {stateNewClass ? JSON.stringify(stateNewClass) : "null"}
      </p>

      <CompFormFilterClass set_stateSearchCriteria={set_stateSearchCriteria} />
      <CompFormAddClass set_stateNewClass={set_stateNewClass} />
      <DIV_Flex_Row>
        <CompListOfClasses
          input_object={stateArrayOfClasses}
          set_stateSelectedClass={set_stateSelectedClass}
        />
        {/* ?????????????????????????????????????????????????????????????????????? */}
        {/* How to force CompClassDetail re-render when stateSelectedClass change? */}
        {/* ?????????????????????????????????????????????????????????????????????? */}
        {stateSelectedClass ? (
          <CompClassDetail input_object={stateSelectedClass} />
        ) : null}
      </DIV_Flex_Row>
    </Container>
  );
}

export default CompTaskManageClass;

/*
4. Authenticated `Instructor` can create update and delete a `class`. At a minimum, each `class` must have the following properties:

- `Name`
- `Type`
- `Start time`
- `Duration`
- `Intensity level`
- `Location`
- `Current number of registered attendees`
- `Max class size`

5. Authenticated `client` can search for available classes. At a minimum, they must be able to search by the following criteria:

- `class time`
- `class date`
- `class duration`
- `class type`
- `intensity level`
- `class location`

{name:"", time:"", date:"", duration:"", type:"",intensityLevel:"",location:""}

6. Authenticated `instructor` can create virtual punch pass categories for each type of group fitness class they offer (yoga, insanity, RIPPED, pilates, etc.)


base URL: https://anywhere-fitness-8.herokuapp.com/api

[get] /classes
  return [classObject, ...]
  render a list of CompClassCard

  [get] /classes/:class_id
  return [classObject]
  render a CompClassDetail
  

  [get] /classes/user/:user_id
  return [classObject, ...]
  render a CompListOfClasses

*/

/*
name ===
- `class time`===
- `class date`===
- `class duration`===
- `class type`===
- `intensity level`
- `class location`===

*/
