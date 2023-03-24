import React, { useContext } from "react";
import { Input, Button } from "@rneui/base";
import Spacer from "./spacer";
import { Context as LocationContext } from "../context/locationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  console.log(locations.lenght);

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
    </>
  );
};

export default TrackForm;
