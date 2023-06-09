const { Sequelize, DataTypes } = require("sequelize");
const { connection } = require("./connectDatabase");

const RoleModel = connection.define(
  "roles",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    NamedNodeMap: {
      type: DataTypes.STRING,
    },

  },
  {
    timestamps: true,
  }
);

module.exports = RoleModel;
