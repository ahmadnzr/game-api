"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Biodatas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Biodatas.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Biodatas.init(
    {
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Biodatas",
    }
  );
  return Biodatas;
};
