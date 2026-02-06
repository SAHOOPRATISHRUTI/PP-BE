const Photo = require("../models/Photo");

exports.addMany = async (files, body) => {
  const docs = files.map(file => ({
    title: body.title || "",
    caption: body.caption || "",
    locationId: body.locationId,
    imageUrl: "/uploads/" + file.filename
  }));

  return await Photo.insertMany(docs);
};

exports.getPhotosByLocation = async (locationId) => {
  return await Photo.find({ locationId });
};

exports.deletePhoto = async (id) => {
  return await Photo.findByIdAndDelete(id);
};
