const service = require("../services/location.service");

// Create location
exports.create = async (req, res) => {
  try {
    const location = await service.createLocation(req.body);
    res.json(location);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all locations
exports.getAll = async (req, res) => {
  try {
    const data = await service.getLocations();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single location
exports.getOne = async (req, res) => {
  try {
    const data = await service.getLocationById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update location
exports.update = async (req, res) => {
  try {
    const data = await service.updateLocation(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete location
exports.remove = async (req, res) => {
  try {
    await service.deleteLocation(req.params.id);
    res.json({ message: "Location deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
