import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "./counterSlice";


export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return(
  <>
  
  </>);
  
}
