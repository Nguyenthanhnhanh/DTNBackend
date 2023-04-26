
const { connection} = require('./connectDatabase.js')
const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require('../model/user.model');
const QuanModel = require('../model/quan.model');
const DanhgiaModel = require('../model/danhgia.model');
const DangtinModel = require('../model/dangtin.model');
const BinhluanModel = require('../model/binhluan.model');
const PhuongModel = require('../model/phuong.model');
const DatPhongModel = require('../model/datphong.model');
const HinhanhModel = require('../model/hinhanh.model');
const LoaiPhongModel = require('../model/loaiphong.model');  
const RoleModel = require('./role.model');
const setAssociation = () => {
    RoleModel.hasOne(UserModel, {
        foreignKey:{
            name: "roleId",
            type: DataTypes.STRING
        }
    }); 
    UserModel.belongsTo(RoleModel, {
        foreignKey:{
            name: 'roleId', 
            type: DataTypes.STRING
        }
    });
    QuanModel.hasMany(PhuongModel, {
        foreignKey:{
            name: 'quanId', 
            type: DataTypes.STRING
        }
    })
    PhuongModel.belongsTo(QuanModel, {
        foreignKey:{
            name: 'quanId', 
            type: DataTypes.STRING
        }
    })
    LoaiPhongModel.hasMany(DangtinModel, {
        foreignKey:{
            name: 'loaiphongId',
            type: DataTypes.STRING
        }
    })
    DangtinModel.belongsTo(LoaiPhongModel, {
        foreignKey: {
            name: 'loaiphongId', 
            type: DataTypes.STRING
        }
    })
    PhuongModel.hasOne(DangtinModel, {foreignKey:{
        foreignKey:{
            name: 'phuongId', 
            type: DataTypes.STRING
        }
    }, 
    })
    DangtinModel.belongsTo(PhuongModel, {foreignKey:{
        foreignKey:{
            name: 'phuongId', 
            type: DataTypes.STRING
        }
    }
})
   UserModel.hasMany(DangtinModel, {
    foreignKey:{
        name: 'userId', 
        type: DataTypes.STRING
    }
   }) 
   DangtinModel.belongsTo(UserModel, {
    foreignKey: {
        name: 'userId', 
        type: DataTypes.STRING
    }
   })
   DangtinModel.hasMany(HinhanhModel, {
    foreignKey:{
        name: 'dangtinId', 
        type: DataTypes.STRING
    }
   })
   HinhanhModel.belongsTo(DangtinModel, {
    foreignKey: {
        name: 'dangtinId',
        type: DataTypes.STRING
    }
   })
   DangtinModel.hasMany(BinhluanModel, {
    foreignKey: {
        name: 'dangtinId',
        foreignKey: DataTypes.STRING
    }
   })
   BinhluanModel.belongsTo(DangtinModel, {
    foreignKey: {
        name: 'dangtinId',
        foreignKey: DataTypes.STRING
    }
   })
   DangtinModel.hasMany(DanhgiaModel, {
      foreignKey:{
        name: 'dangtinId', 
        foreignKey: DataTypes.STRING
      }
   })
   DanhgiaModel.belongsTo(DangtinModel, {
    foreignKey: {
        name: 'dangtinId', 
        foreignKey: DataTypes
    }
   })
   UserModel.hasMany(DanhgiaModel, {
    foreignKey:{
      name: 'userId', 
      foreignKey: DataTypes.STRING
    }
 })
 DanhgiaModel.belongsTo(UserModel, {
  foreignKey: {
      name: 'userId', 
      foreignKey: DataTypes.STRING
  }
 })
 UserModel.hasMany(BinhluanModel, {
    foreignKey:{
      name: 'userId', 
      foreignKey: DataTypes.STRING
    }
 })
 BinhluanModel.belongsTo(UserModel, {
  foreignKey: {
      name: 'userId', 
      foreignKey: DataTypes.STRING
  }
 })
 DangtinModel.hasMany(DatPhongModel, {
    foreignKey:{
      name: 'dangtinId', 
      foreignKey: DataTypes.STRING
    }
 })
 DatPhongModel.belongsTo(DangtinModel, {
  foreignKey: {
      name: 'dangtinId', 
      foreignKey: DataTypes
  }
 })
 UserModel.hasMany(DatPhongModel, {
    foreignKey:{
      name: 'userId', 
      foreignKey: DataTypes.STRING
    }
 })
 DatPhongModel.belongsTo(UserModel, {
  foreignKey: {
      name: 'userId', 
      foreignKey: DataTypes.STRING
  }
 })


    connection.sync()
    
}
module.exports = setAssociation;