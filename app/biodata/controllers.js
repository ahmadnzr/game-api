const { Biodatas, User } = require("../../models");

const getUserBiodata = async (req, res) => {
  try {
    const biodatas = await Biodatas.findAll();
    return res.status(200).json({
      status: "OK",
      totals: biodatas.length,
      data: biodatas,
    });
  } catch (err) {
    return res.status(400).json({
      status: "FAIL",
      data: err,
    });
  }
};

const addUserBio = async (req, res) => {
  const { fullname, email, age, gender, userId } = req.body;
  try {
    const duplikatUser = await Biodatas.findAll({ where: { userId: userId } });

    if (duplikatUser.length > 0) {
      return res.status(400).json({
        status: "FAIL",
        message: "the user already has bio",
      });
    }

    const user = await getUserById(userId);
    console.log(user);
    if (user.length < 1) {
      return res.status(400).json({
        status: "FAIL",
        message: "user not found !",
      });
    }

    const biodata = await Biodatas.create({
      fullname,
      email,
      age,
      gender,
      userId,
    });
    // const userBiodata = await user.setBiodatas(biodata)

    return res.status(200).json({
      status: "OK",
      data: biodata,
    });
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (userId) => {
  const user = await User.findAll({ where: { id: userId } });
  return user;
};

module.exports = {
  getUserBiodata,
  addUserBio,
};
