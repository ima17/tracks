import React, { useContext } from "react";
import { Input, Button } from "@rneui/base";
import Spacer from "./spacer";
import { Context as LocationContext } from "../context/locationContext";
import useSaveTracks from "../hooks/useSaveTracks";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTracks();

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter a Name"
          onChangeText={changeName}
          value={name}
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
