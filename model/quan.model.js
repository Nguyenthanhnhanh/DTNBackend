const { Sequelize, DataTypes } = require("sequelize");
const { connection } = require("./connectDatabase");

const QuanModel = connection.define(
  "quans",
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

module.exports = QuanModel;
