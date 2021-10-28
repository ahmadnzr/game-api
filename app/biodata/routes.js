const { getUserBiodata, addUserBio } = require("./controllers");

const router = require("express").Router();

router.route("/biodatas").get(getUserBiodata).post(addUserBio);

module.exports = router;
