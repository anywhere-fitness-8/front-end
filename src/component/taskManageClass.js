import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CompFormFilterClass from "./formFilterClass";
import CompFormAddClass from "./formAddClass";

const Container = styled.div``;

function CompTaskManageClass(props) {
  const [stateArrayOfClasses, set_stateArrayOfClasses] = useState([]);
  const [stateNewClass, set_stateNewClass] = useState(null);
  const [stateSearchCriteria, set_stateSearchCriteria] = useState(null);

  //monitor change in stateArrayOfClasses
  useEffect(() => {}, [stateArrayOfClasses]);

  //monitor change in stateNewClass
  useEffect(() => {
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
      <CompFormFilterClass set_stateSearchCriteria={set_stateSearchCriteria} />
      <CompFormAddClass set_stateNewClass={set_stateNewClass} />
      <p>Length of stateArrayOfClasses is {stateArrayOfClasses.length}</p>
      <p>
        stateSearchCriteria ={" "}
        {stateSearchCriteria ? stateSearchCriteria : "null"}
      </p>
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
