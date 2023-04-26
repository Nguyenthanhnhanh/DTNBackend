const { Sequelize, DataTypes } = require("sequelize");
const { connection } = require("./connectDatabase");

const DanhgiaModel = connection.define(
  "danhgias",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    start: {
        allowNull: true, 
        type: DataTypes.STRING      
     
    }
  },
  {
    timestamps: true,
  }
);

module.exports = DanhgiaModel;
