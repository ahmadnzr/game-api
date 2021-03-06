const epxress = require("express");
const app = epxress();
const { PORT = 8080 } = process.env;
const userRoutes = require("./app/user/routes");
const biodataRoutes = require("./app/biodata/routes");
const gameRoutes = require("./app/game/routes");
const userGamesRoutes = require("./app/userGames/routes");

// setup
app.use(epxress.json());
app.use(epxress.urlencoded({ extended: true }));

// routes
app.use("/api/v1", userRoutes);
app.use("/api/v1", biodataRoutes);
app.use("/api/v1", gameRoutes);
app.use("/api/v1", userGamesRoutes);

// middleware

// server
app.listen(PORT, () => {
  console.clear();
  console.log(`listening on http://localhost:8080`);
});
