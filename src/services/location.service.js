const Location = require("../models/Location");

// Create a new location
exports.createLocation = async (data) => {
  return await Location.create(data);
};

// Get all locations
exports.getLocations = async () => {
  return await Location.find().sort({ createdAt: -1 });
};

// Get single location by ID
exports.getLocationById = async (id) => {
  return await Location.findById(id);
};

// Update a location
exports.updateLocation = async (id, data) => {
  return await Location.findByIdAndUpdate(id, data, { new: true });
};

// Delete a location
exports.deleteLocation = async (id) => {
  return await Location.findByIdAndDelete(id);
};
