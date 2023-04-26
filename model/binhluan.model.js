const { Sequelize, DataTypes } = require("sequelize");
const { connection } = require("./connectDatabase");

const DanhgiaModel = connection.define(
  "binhluans",
  {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
    content: {
        type: DataTypes.STRING
    }
  },
  {
    timestamps: true,
  }
);

module.exports = DanhgiaModel;
