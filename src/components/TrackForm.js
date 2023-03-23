import React from "react";
import { Input, Button } from "@rneui/base";
import Spacer from "./spacer";

const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder="Enter a Name" />
      </Spacer>
      <Spacer>
        <Button title="Start Recording" />
      </Spacer>
    </>
  );
};

export default TrackForm;
