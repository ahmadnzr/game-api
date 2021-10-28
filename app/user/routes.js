const { getUserInfo, addUser } = require("./controllers");

const router = require("express").Router();

router.route("/users").get(getUserInfo).post(addUser);

module.exports = router;
