import {
  getSchedule,
  getScheduleSuccess,
  getScheduleFailure,
} from "../Reducer/schedule";
import axios from "axios";

export const fetchSchedule = () => {
  const request = axios.get(`https://api.tvmaze.com/schedule`);
  return (dispatch) => {
    dispatch(getSchedule());
    request
      .then((response) => {
        dispatch(getScheduleSuccess(response.data));
      })

      .catch((error) => dispatch(getScheduleFailure(error)));
  };
};
