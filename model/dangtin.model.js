const { Sequelize, DataTypes } = require("sequelize");
const { connection } = require("./connectDatabase");

const DangtinModel = connection.define(
  "dangtins",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    tieude: {
      type: DataTypes.STRING,
    },
    giaphong: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dientich: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mota: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    soluongphong:{
        type:DataTypes.INTEGER, 
        allowNull: true, 
    }, 
    soluongphongtrong:{
      type: DataTypes.INTEGER, 
      allowNull: true,
    },
    mota:{
        type: DataTypes.STRING, 
        allowNull: true
    }, 
    tiennghi:{
        type: DataTypes.STRING, 
        allowNull: true
    },
    status: {
      type: DataTypes.INTEGER, 
      defaultValue: 0
    }

  },
  {
    timestamps: true,
  }
);

module.exports = DangtinModel;
