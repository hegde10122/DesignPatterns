interface GeoLocation {
  latitude: number;
  longitude: number;
  clone: () => GeoLocation;
}

const createGeoLocation = (
  latitude: number,
  longitude: number
): GeoLocation => {
  const clone = (): GeoLocation => {
    return createGeoLocation(latitude, longitude);
  };

  return {
    latitude,
    longitude,
    clone,
  };
};

const OBJECTS_LENGTH = 10000000;
const LATITUDE = 20.5937;
const LONGITUDE = 78.9629;

const generateGeoLocationsWithoutPrototype = (): GeoLocation[] => {
  const geoLocations: GeoLocation[] = [];
  for (let i = 0; i < OBJECTS_LENGTH; i++) {
    const geoLocation: GeoLocation = {
      latitude: LATITUDE + i * 0.0001,
      longitude: LONGITUDE + i * 0.0001,
      clone: () => ({
        latitude: LATITUDE + i * 0.0001,
        longitude: LONGITUDE + i * 0.0001,
        clone: () => geoLocation, // This ensures the clone method returns a valid GeoLocation object
      }),
    };
    geoLocations.push(geoLocation);
  }
  return geoLocations;
};

const generateGeoLocationsWithPrototype = (): GeoLocation[] => {
  const geoLocations: GeoLocation[] = [];
  const prototype = createGeoLocation(LATITUDE, LONGITUDE);
  for (let i = 0; i < OBJECTS_LENGTH; i++) {
    const clonedGeoLocation = prototype.clone();
    clonedGeoLocation.latitude += i * 0.0001;
    clonedGeoLocation.longitude += i * 0.0001;
    geoLocations.push(clonedGeoLocation);
  }
  return geoLocations;
};

const measurePerformance = () => {
  console.time("Without Prototype");
  const locationsWithoutPrototype = generateGeoLocationsWithoutPrototype();
  console.timeEnd("Without Prototype");

  console.time("With Prototype");
  const locationsWithPrototype = generateGeoLocationsWithPrototype();
  console.timeEnd("With Prototype");

  return { locationsWithoutPrototype, locationsWithPrototype };
};

const measureMemoryUsage = () => {
  console.log(
    "Initial Memory Usage:",
    process.memoryUsage().heapUsed / 1024 / 1024,
    "MB"
  );

  console.time("Without Prototype");
  const locationsWithoutPrototype = generateGeoLocationsWithoutPrototype();
  console.timeEnd("Without Prototype");
  console.log(
    "Memory Usage After Without Prototype:",
    process.memoryUsage().heapUsed / 1024 / 1024,
    "MB"
  );

  console.time("With Prototype");
  const locationsWithPrototype = generateGeoLocationsWithPrototype();
  console.timeEnd("With Prototype");
  console.log(
    "Memory Usage After With Prototype:",
    process.memoryUsage().heapUsed / 1024 / 1024,
    "MB"
  );
};

measureMemoryUsage();
measurePerformance();
