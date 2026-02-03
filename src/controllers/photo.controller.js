const service = require("../services/photo.service");

exports.upload = async (req, res) => {
  try {
    const photo = await service.addPhoto(req.file, req.body);
    res.json(photo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.byLocation = async (req, res) => {
  const data = await service.getPhotosByLocation(
    req.params.locationId
  );
  res.json(data);
};

exports.remove = async (req, res) => {
  await service.deletePhoto(req.params.id);
  res.json({ message: "Deleted" });
};
