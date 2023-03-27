import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


const User = sequelize.define("users", {
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
  active_class_id: {
    type: DataTypes.INTEGER,
  }
});


export default User;