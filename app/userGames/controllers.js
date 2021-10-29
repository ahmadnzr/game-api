const { UserGames, User, Game } = require("../../models");

const getTheGames = async (req, res) => {
  try {
    const theGame = await UserGames.findAll();

    return res.status(200).json({
      status: "OK",
      data: theGame,
    });
  } catch (error) {
    return res.json({
      error,
    });
  }
};

const addTheGame = async (req, res) => {
  const gameId = req.params.id;
  const { userId, enemy, userChoice, enemyChoice, winner } = req.body;
  try {
    const game = await Game.findAll({ where: { id: gameId } });
    if (game.length < 1) {
      return res.status(404).json({
        status: "FAIL",
        message: "game not found !",
      });
    }

    const user = await User.findAll({ where: { id: userId } });
    if (user.length < 1) {
      return res.status(404).json({
        status: "FAIL",
        message: "user not found !",
      });
    }

    const createGame = await UserGames.create({
      userId,
      gameId,
      enemy,
      userChoice,
      enemyChoice,
      winner,
    });

    return res.status(201).json({
      status: "OK",
      data: createGame,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTheGames,
  addTheGame,
};
