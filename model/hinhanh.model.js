const { Sequelize, DataTypes } = require("sequelize");
const { connection } = require("./connectDatabase");

const HinhanhModel = connection.define(
  "hinhanhs",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    hinhanh: {
        allowNull: true, 
        type: DataTypes.STRING,     
    }
  },
  {
    timestamps: true,
  }
);

module.exports = HinhanhModel;
