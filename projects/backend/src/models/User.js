import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database.js";

export default class UserModel extends Sequelize.Model {}
UserModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  type_user: {
    type: DataTypes.ENUM,
    values: ["STUDENT", "MODERATOR"],
  },
  // active_class_id: {
  //   type: DataTypes.INTEGER,
  // }
},
  {sequelize, modelName: "users",} 
);


