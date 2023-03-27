import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database.js";

export default class OnlineClass extends Sequelize.Model {}
OnlineClass.init({
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
}, { sequelize, modelName: 'classes' }
);