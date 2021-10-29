const { Game } = require("../../models");

const getGame = async (req, res) => {
  try {
    const game = await Game.findAll();

    return res.status(200).json({
      status: "OK",
      data: game,
    });
  } catch (error) {}
};

const addGame = async (req, res) => {
  const { name } = req.body;
  try {
    const game = await Game.create({ name });

    return res.status(201).json({
      status: "OK",
      data: game,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

module.exports = {
  getGame,
  addGame,
};
