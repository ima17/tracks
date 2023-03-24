import { useContext } from "react";
import { Context as LocationContext } from "../context/locationContext";
import { Context as TrackContext } from "../context/trackContext";

export default () => {
  const {
    state: { locations, name },
  } = useContext(LocationContext);
  const { createTrack } = useContext(TrackContext);

  const saveTrack = () => {
    createTrack(name, locations);
  };

  return [saveTrack];
};
