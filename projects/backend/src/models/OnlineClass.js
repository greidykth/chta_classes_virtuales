import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


const OnlineClass = sequelize.define("classes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  active: {
    type: DataTypes.ENUM,
    values: ["ACTIVE", "FINALIZED"],
  },
  url: {
    type: DataTypes.STRING,
  },
});




export default OnlineClass;