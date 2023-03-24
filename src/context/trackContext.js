import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const createTrack = (dispatch) => (name, locations) => {
  console.log(name, locations);
};
const fetchTrack = (dispatch) => () => {};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { createTrack, fetchTrack },
  []
);
