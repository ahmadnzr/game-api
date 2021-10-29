const { getGame, addGame } = require("./controllers");

const router = require("express").Router();

router.route("/games").get(getGame).post(addGame);

module.exports = router;
