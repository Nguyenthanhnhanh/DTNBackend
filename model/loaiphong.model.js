const { Sequelize, DataTypes } = require("sequelize");
const { connection } = require("./connectDatabase");

const LoaiPhongModel = connection.define(
  "loaiphongs",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },

  },
  {
    timestamps: true,
  }
);

module.exports = LoaiPhongModel;
