const { User, sequelize } = require("../../models");

const getUserInfo = async (req, res) => {
  try {
    const user = await User.findAll();
    return res.status(200).json({
      status: "OK",
      total_users: user.length,
      data: user,
    });
  } catch (err) {
    return res.status(400).json({
      status: "FAIL",
      data: err,
    });
  }
};

const addUser = async (req, res) => {
  const { username, password, isAdmin } = req.body;
  try {
    const user = await User.create({ username, password, isAdmin });

    return res.status(200).json({
      status: "OK",
      data: user,
    });
  } catch (err) {
    return res.status(400).json({
      status: "FAIL",
      data: err,
    });
  }
};

module.exports = {
  getUserInfo,
  addUser,
};
