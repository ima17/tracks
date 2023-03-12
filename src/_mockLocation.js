import * as Location from "expo-location";

const tenMetersWithDegree = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 1678548964441,
    coords: {
      accuracy: 20,
      altitude: 0,
      altitudeAccuracy: 0,
      heading: 0,
      latitude: 6.9483876 + increment * tenMetersWithDegree,
      longitude: 80.7644524 + increment * tenMetersWithDegree,
      speed: 0,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
