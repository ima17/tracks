import createDataContext from "./createDataContext";
import TrackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const createTrack = (dispatch) => async (name, locations) => {
  try {
    await TrackerApi.post("/tracks", { name, locations });
  } catch (err) {
    console.log(err);
  }
};
const fetchTrack = (dispatch) => () => {};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { createTrack, fetchTrack },
  []
);
