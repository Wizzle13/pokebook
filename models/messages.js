const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our UserMessages model
class UserMessages extends Model {}

UserMessages.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      messages: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'user_messages'
    }
  );
  
  module.exports = UserMessages;