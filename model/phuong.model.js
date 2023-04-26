const { Sequelize, DataTypes } = require("sequelize");
const { connection } = require("./connectDatabase");

const PhuongModel = connection.define(
  "phuongs",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    name:{
      type: DataTypes.STRING
    }

  },
  {
    timestamps: true,
  }
);

module.exports = PhuongModel;
