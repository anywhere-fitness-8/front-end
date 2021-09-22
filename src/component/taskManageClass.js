/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CompFormFilterClass from "./formFilterClass";
import CompFormAddClass from "./formAddClass";
import { list_of_classes } from "./sample_data";
import CompClassCard from "./classCard";
import CompClassDetailEditable from "./classDetailEditable";

const Container = styled.div`
  height: 100%;
`;
const DIV_Flex_Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 60%;
`;

const DIV_Left = styled.div`
  width: 50%;
  overflow: scroll;
  height: 100%;
`;
const DIV_Right = styled.div`
  width: 50%;
`;

function CompTaskManageClass(props) {
  //--------------------------------------------------------
  /*
   stateArrayOfClasses store an arry of ClassDetail object
 */
  const [stateArrayOfClasses, set_stateArrayOfClasses] = useState([]);
  /*
    stateArrayOfReservedClass store an array of class_id, which is key in classDetail object
  */
  const [stateArrayOfRenderedClassCard, set_stateArrayOfRenderedClassCard] =
    useState([]);

  //---------------------------------------------------------------------
  //set_stateNewClass allow user to add a class
  const [stateNewClass, set_stateNewClass] = useState(null);
  //set_stateSearchCriteria allow user to search class
  const [stateSearchCriteria, set_stateSearchCriteria] = useState(null);
  //set_stateSelectedClass allow user to render a CompClassDetail in CompTaskManageClass or on "/manage" page
  const [stateSelectedClass, set_stateSelectedClass] = useState(null);

  /*
  event happens once after the component initially get render
    _retrieve an array of classes per instructor
    _render array of classes on the left of DIV_Flex_Row, DIV_Left
  
  */
  useEffect(() => {
    //????????????????????????????????????????????????
    //replace below line with Axios
    //????????????????????????????????????????????????
    // _retrieve an array of classes per instructor
    set_stateArrayOfClasses([...list_of_classes]);

    //_render array of classes on the left of DIV_Flex_Row, DIV_Left
    set_stateArrayOfRenderedClassCard([...stateArrayOfClasses]);
  }, []);

  //monitor change in stateArrayOfClasses
  useEffect(() => {
    //rerender list of ClassCard when stateArrayOfClasses change
    set_stateArrayOfRenderedClassCard([...stateArrayOfClasses]);
  }, [stateArrayOfClasses]);

  /*
  monitor change in stateNewClass
  when stateNewClass has a new object, 
    _the object gets added to stateArrayOfClasses
    _then reset stateNewClass to null
  */
  useEffect(() => {
    stateNewClass &&
      set_stateArrayOfClasses([...stateArrayOfClasses, stateNewClass]);
    set_stateNewClass(null);
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
        Length of stateArrayOfRenderedClassCard is{" "}
        {stateArrayOfRenderedClassCard.length}
      </p>
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
        <DIV_Left>
          {/* ????????????????????????????????????????????????????????????????????????? */}
          {/* ???????? The list of CompClassCard does not Re-Render when stateArrayOfRenderedClassCard update??? */}
          {/* ????????????????????????????????????????????????????????????????????????? */}
          {Array.from(stateArrayOfRenderedClassCard).map((eachClass, index) => {
            if (eachClass) {
              return (
                <CompClassCard
                  input_object={eachClass}
                  key={index}
                  set_stateSelectedClass={set_stateSelectedClass}
                />
              );
            } else {
              return null;
            }
          })}
        </DIV_Left>
        <DIV_Right>
          {stateSelectedClass ? (
            <CompClassDetailEditable
              stateSelectedClass={stateSelectedClass}
              set_stateSelectedClass={set_stateSelectedClass}
              stateArrayOfClasses={stateArrayOfClasses}
              set_stateArrayOfClasses={set_stateArrayOfClasses}
            />
          ) : null}
        </DIV_Right>
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
/*
when instructor click add
_add new class to stateArrayOfClass
_unit post the newClassState to the server
*/

/*
when instructor edit 
  (change to front end)
  change stateSelectedClass, replace respective element in stateArrayOfClasses
  (change to back end)
  cb_axios (....)

*/
