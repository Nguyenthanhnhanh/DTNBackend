const { Sequelize, DataTypes } = require("sequelize");
const { connection } = require("./connectDatabase");

const UserModel = connection.define(
  "users",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Diachi: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Sdt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Gioitinh: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Ngaysinh: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UserModel;
