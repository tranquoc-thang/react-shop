import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../constant/actionTypes.js";

const A = () => {
  const dispatch = useDispatch();

  const students = useSelector((state) => state.studentReducer.students);

  useEffect(() => {
    dispatch({
      type: Actions.I_WILL_BE_THE_BEST_DEV,
    });
  }, []);

  return (
    <>
      <h1>Xin chào Tomaho Newcomer, well-learnt nhé</h1>
    </>
  );
};

export default A;
