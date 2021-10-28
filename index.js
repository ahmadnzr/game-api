const epxress = require("express");
const app = epxress();
const { PORT = 8080 } = process.env;
const userRoutes = require("./app/user/routes");

// setup
app.use(epxress.json());
app.use(epxress.urlencoded({ extended: true }));

// routes
app.use("/api/v1", userRoutes);

// middleware

// server
app.listen(PORT, () => {
  console.clear();
  console.log(`listening on http://localhost:8080`);
});
