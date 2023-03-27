import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Message = sequelize.define("messages", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.STRING,
  },
  class_id: {
    type: DataTypes.INTEGER,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
});


export default Message;