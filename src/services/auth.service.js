const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.createAdmin = async (data) => {
  const hash = await bcrypt.hash(data.password, 10);

  return await User.create({
    username: data.username,
    password: hash,
    role: "admin"
  });
};

exports.findByUsername = async (username) => {
  return await User.findOne({ username });
};

exports.verifyPassword = async (plain, hash) => {
  return await bcrypt.compare(plain, hash);
};
