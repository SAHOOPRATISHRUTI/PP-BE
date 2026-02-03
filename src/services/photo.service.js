const Photo = require("../models/Photo");

exports.addPhoto = async (file, body) => {
  return await Photo.create({
    title: body.title,
    caption: body.caption,
    locationId: body.locationId,
    imageUrl: "/uploads/" + file.filename
  });
};

exports.getPhotosByLocation = async (locationId) => {
  return await Photo.find({ locationId });
};

exports.deletePhoto = async (id) => {
  return await Photo.findByIdAndDelete(id);
};
