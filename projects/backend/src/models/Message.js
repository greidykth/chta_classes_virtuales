import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database.js";

export default class MessageModel extends Sequelize.Model {}
MessageModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.STRING,
  },
  // class_id: {
  //   type: DataTypes.INTEGER,
  // },
  // user_id: {
  //   type: DataTypes.INTEGER,
  // },
}, { sequelize, modelName: 'messages' });