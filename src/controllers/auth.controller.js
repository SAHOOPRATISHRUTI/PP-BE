const service = require("../services/auth.service");
const jwt = require("jsonwebtoken");

exports.registerAdmin = async (req, res) => {
  try {
    const user = await service.createAdmin(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await service.findByUsername(req.body.username);

    if (!user)
      return res.status(401).json({ message: "User not found" });

    const ok = await service.verifyPassword(
      req.body.password,
      user.password
    );

    if (!ok)
      return res.status(401).json({ message: "Wrong password" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token, user: { username: user.username } });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
