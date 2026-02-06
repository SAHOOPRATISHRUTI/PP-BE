const photoService = require("../services/photo.service");

exports.uploadMany = async (req, res) => {
  try {
    const photos = await photoService.addMany(req.files, req.body);
    res.json(photos);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.byLocation = async (req, res) => {
  const data = await photoService.getPhotosByLocation(req.params.locationId);
  res.json(data);
};

exports.remove = async (req, res) => {
  await photoService.deletePhoto(req.params.id);
  res.json({ ok: true });
};
