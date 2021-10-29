const { getTheGames, addTheGame } = require("./controllers");

const router = require("express").Router();

router.route("/usergames").get(getTheGames);
router.route("/usergames/:id/create").post(addTheGame);

module.exports = router;
