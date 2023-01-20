import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchedule } from "../../redux/Action/schedule";
import { scheduleSelector } from "../../redux/Reducer/schedule";
import "./style.css";

function Content() {
  const dispatch = useDispatch();
  const { schedule, loading, hasErrors } = useSelector(scheduleSelector);

  useEffect(() => {
    dispatch(fetchSchedule());
  }, []);

console.log( `schedule`, schedule)

  return (
    <div>
      <h1>Content</h1>
    </div>
  );
}

export default Content;
