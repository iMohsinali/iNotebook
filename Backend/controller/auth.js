const User = require("../models/User");
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newuser = new User({ name, email, password });
  await newuser.save();
  res.status(201).json({ success: true, user: newuser });
};

const getUser = async (req, res) => {
  const users = await User.find();
  res.status(200).json({ success: true, users });
};
module.exports = createUser;
module.exports = getUser;
