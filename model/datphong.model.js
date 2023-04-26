const { Sequelize, DataTypes } = require("sequelize");
const { connection } = require("./connectDatabase");

const DatPhongModel = connection.define(
  "datphongs",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    ngaydatphong:{
        type: DataTypes.STRING
    }, 
    datphong: {
        type: DataTypes.INTEGER, 
        default: 0, 
    }
  },
  {
    timestamps: true,
  }
);

module.exports = DatPhongModel;
