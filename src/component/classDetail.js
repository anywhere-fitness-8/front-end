import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 10px solid black;
  width: 55%;
`;

const Span_Green = styled.span`
  background-color: green;
`;

const Span_Red = styled.span`
  background-color: red;
`;
function CompClassDetail({
  input_object,
  stateArrayOfReservedClass,
  set_stateArrayOfReservedClass,
}) {
  /*
    ??????????????????????????????????????????????????????????????
    Unit 3 - helper_update_reservation_per_user to post axios call
    ??????????????????????????????????????????????????????????????
  */
  const helper_update_reservation_per_user = () => {};

  const cb_OnCLick_Reserve = () => {
    /*
      when a user click reserve,
      _add the class_id to stateArrayOfReservedClass
      _update the reservation status to the backend using helper_update_reservation_per_user
    */

    //_add the class_id to stateArrayOfReservedClass
    input_object &&
      set_stateArrayOfReservedClass([
        ...stateArrayOfReservedClass,
        input_object.class_id,
      ]);

    //_update the reservation status to the backend using helper_update_reservation_per_user
    //??????????????????????????????????
    helper_update_reservation_per_user();
    //??????????????????????????????????
  };

  const cb_OnCLick_Delete_Reserve = () => {
    /*
      when a user click "Delete Reservation",
      _delete the class_id from stateArrayOfReservedClass
      _update the reservation status to the backend using helper_update_reservation_per_user
    */

    //_delete the class_id from stateArrayOfReservedClass
    set_stateArrayOfReservedClass(
      stateArrayOfReservedClass.filter((each) => {
        return each !== input_object.class_id;
      })
    );

    //_update the reservation status to the backend using helper_update_reservation_per_user
    //??????????????????????????????????
    helper_update_reservation_per_user();
    //??????????????????????????????????
  };

  return (
    <Container>
      <h3>CompClassDetail.js</h3>
      {/* {stateLoading && <p>Loading</p>} */}class_id
      {input_object && <p>class id: {input_object.class_id}</p>}
      {input_object && <p>name: {input_object.name}</p>}
      {input_object && <p>date: {input_object.date}</p>}
      {input_object && <p>type: {input_object.type}</p>}
      {input_object && <p>location: {input_object.location}</p>}
      {input_object && <p>duration: {input_object.duration}</p>}
      {stateArrayOfReservedClass.includes(input_object.class_id) ? (
        <Span_Red>Class Reserved</Span_Red>
      ) : (
        <Span_Green>Want to reserve?</Span_Green>
      )}
      {stateArrayOfReservedClass.includes(input_object.class_id) ? (
        <button onClick={cb_OnCLick_Delete_Reserve}>Delete Reservation</button>
      ) : (
        <button onClick={cb_OnCLick_Reserve}>Reserve</button>
      )}
    </Container>
  );
}

export default CompClassDetail;

/*

stateReservationStatus

stateArrayOfReservedClass={stateArrayOfReservedClass}

set_stateArrayOfReservedClass={set_stateArrayOfReservedClass}

*/
