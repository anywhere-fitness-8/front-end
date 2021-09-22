/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CompFormFilterClass from "./formFilterClass";
import { list_of_classes } from "./sample_data";
import CompListOfClasses from "./listOfClass";
import CompClassDetail from "./classDetail";

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

function CompTaskReserveClass(props) {
  //---------------------------------------------------------------------
  //stateArrayOfClasses store an array of classDetail object
  const [stateArrayOfClasses, set_stateArrayOfClasses] = useState([]);
  //---------------------------------------------------------------------
  //stateArrayOfReservedClass store an array of class_id, which is key in classDetail object
  const [stateArrayOfReservedClass, set_stateArrayOfReservedClass] = useState(
    []
  );
  //---------------------------------------------------------------------
  //stateArrayOfRenderedClasses store an array of classDetail object
  const [stateArrayOfRenderedClasses, set_stateArrayOfRenderedClasses] =
    useState([]);
  //---------------------------------------------------------------------
  //set_stateSearchCriteria allow user to search class
  const [stateSearchCriteria, set_stateSearchCriteria] = useState(null);
  //---------------------------------------------------------------------
  //set_stateSelectedClass allow user to render a CompClassDetail in CompTaskManageClass or on "/manage" page
  const [stateSelectedClass, set_stateSelectedClass] = useState(null);

  //event happens once after the component initially get render
  useEffect(() => {
    //??????????????????????????????????????????????????????
    //Unit 3 - retrieve a list of classes from the server
    //??????????????????????????????????????????????????????
    set_stateArrayOfClasses([...list_of_classes]);

    //render all class intially
    set_stateArrayOfRenderedClasses([...list_of_classes]);
  }, []);

  //monitor change in stateSearchCriteria
  useEffect(
    () => {
      const helper_compare = (original, compareTo) => {
        if (compareTo === "") {
          return true;
        } else {
          return original.includes(compareTo);
        }
      };

      if (stateSearchCriteria) {
        //create a new array with matching criterias to SearchCriteria object
        const temp_array = stateArrayOfClasses.filter((eachClass) => {
          if (
            helper_compare(eachClass.name, stateSearchCriteria.name) &&
            helper_compare(eachClass.type, stateSearchCriteria.type) &&
            helper_compare(eachClass.startTime, stateSearchCriteria.time) &&
            helper_compare(eachClass.date, stateSearchCriteria.date) &&
            helper_compare(eachClass.duration, stateSearchCriteria.duration) &&
            helper_compare(
              eachClass.intensityLevel,
              stateSearchCriteria.intensityLevel
            ) &&
            helper_compare(eachClass.location, stateSearchCriteria.location)
          ) {
            return eachClass;
          }
        });

        set_stateArrayOfRenderedClasses(temp_array);
      } //end if
    }, //end function
    [stateSearchCriteria]
  );

  return (
    <Container>
      <h3>CompTaskManageClass.js</h3>
      <p>Length of stateArrayOfClasses is {stateArrayOfClasses.length}</p>
      <p>
        Length of stateArrayOfRenderedClasses is{" "}
        {stateArrayOfRenderedClasses.length}
      </p>
      stateArrayOfRenderedClasses
      <p>
        stateSearchCriteria ={" "}
        {stateSearchCriteria ? JSON.stringify(stateSearchCriteria) : "null"}
      </p>
      <p>
        stateSelectedClass ={" "}
        {stateSelectedClass ? JSON.stringify(stateSelectedClass) : "null"}
      </p>
      <p>
        stateArrayOfReservedClass ={" "}
        {stateArrayOfReservedClass
          ? JSON.stringify(stateArrayOfReservedClass)
          : "null"}
      </p>
      <CompFormFilterClass set_stateSearchCriteria={set_stateSearchCriteria} />
      <DIV_Flex_Row>
        <DIV_Left>
          <CompListOfClasses
            input_object={stateArrayOfRenderedClasses}
            set_stateSelectedClass={set_stateSelectedClass}
          />
        </DIV_Left>
        <DIV_Right>
          {stateSelectedClass ? (
            <CompClassDetail
              input_object={stateSelectedClass}
              stateArrayOfReservedClass={stateArrayOfReservedClass}
              set_stateArrayOfReservedClass={set_stateArrayOfReservedClass}
            />
          ) : null}
        </DIV_Right>
      </DIV_Flex_Row>
    </Container>
  );
}

export default CompTaskReserveClass;
