import createDataContext from "./createDataContext";
import TrackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "fetch_tracks":
      return action.payload;
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
const fetchTracks = (dispatch) => async () => {
  const response = await TrackerApi.get("/tracks");
  dispatch({ type: "fetch_tracks", payload: response.data });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { createTrack, fetchTracks },
  []
);
